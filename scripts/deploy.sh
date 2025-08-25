#!/bin/bash

# 🎨 Цвета для красивого вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# 🚀 Логотип
echo -e "${BLUE}"
echo "╔═══════════════════════════════════════════════════════════╗"
echo "║                  🚀 AWS Deploy Agent                      ║"
echo "║            Betting Projects Overview Web                  ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# 📋 Переменные конфигурации
STACK_NAME="betting-overview-infrastructure"
BUCKET_NAME="betting-projects-overview-web"
REGION="us-east-1"

# 🔍 Функция проверки команд
check_command() {
    if ! command -v $1 &> /dev/null; then
        echo -e "${RED}❌ $1 не установлен. Установите: $2${NC}"
        exit 1
    fi
}

# 🛠️ Проверка зависимостей
echo -e "${YELLOW}🔍 Проверяю зависимости...${NC}"
check_command "aws" "brew install awscli"
check_command "npm" "установите Node.js"
check_command "git" "установите Git"

# 🔐 Проверка AWS конфигурации
echo -e "${YELLOW}🔐 Проверяю AWS конфигурацию...${NC}"
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "${RED}❌ AWS не настроен. Выполните: aws configure${NC}"
    exit 1
fi

AWS_ACCOUNT=$(aws sts get-caller-identity --query Account --output text)
AWS_USER=$(aws sts get-caller-identity --query Arn --output text | cut -d'/' -f2)
echo -e "${GREEN}✅ AWS настроен. Аккаунт: $AWS_ACCOUNT, Пользователь: $AWS_USER${NC}"

# 📦 Сборка проекта
echo -e "${YELLOW}📦 Собираю React проект...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Ошибка сборки проекта${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Проект собран успешно!${NC}"
echo -e "${CYAN}📊 Собрано файлов: $(find build -type f | wc -l)${NC}"

# 🌩️ Проверка существования CloudFormation stack
echo -e "${YELLOW}🌩️ Проверяю CloudFormation stack...${NC}"
STACK_EXISTS=$(aws cloudformation describe-stacks --stack-name $STACK_NAME --region $REGION 2>/dev/null)

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Stack существует. Получаю параметры...${NC}"
    
    # Получаем выходные данные stack
    BUCKET_NAME=$(aws cloudformation describe-stacks \
        --stack-name $STACK_NAME \
        --region $REGION \
        --query 'Stacks[0].Outputs[?OutputKey==`BucketName`].OutputValue' \
        --output text)
    
    CLOUDFRONT_ID=$(aws cloudformation describe-stacks \
        --stack-name $STACK_NAME \
        --region $REGION \
        --query 'Stacks[0].Outputs[?OutputKey==`CloudFrontDistributionId`].OutputValue' \
        --output text)
    
    WEBSITE_URL=$(aws cloudformation describe-stacks \
        --stack-name $STACK_NAME \
        --region $REGION \
        --query 'Stacks[0].Outputs[?OutputKey==`WebsiteURL`].OutputValue' \
        --output text)
    
else
    echo -e "${RED}❌ CloudFormation stack не найден!${NC}"
    echo -e "${YELLOW}💡 Создайте stack сначала через AWS Console или используйте:${NC}"
    echo -e "${CYAN}   npm run aws:create-stack${NC}"
    exit 1
fi

# ⬆️ Загрузка в S3
echo -e "${YELLOW}⬆️ Загружаю файлы в S3 bucket: $BUCKET_NAME...${NC}"

# Загружаем статические файлы с длительным кэшированием
aws s3 sync build/ s3://$BUCKET_NAME \
    --delete \
    --cache-control "max-age=31536000,public" \
    --exclude "*.html" \
    --exclude "*.json"

# Загружаем HTML и JSON файлы без кэширования
aws s3 sync build/ s3://$BUCKET_NAME \
    --cache-control "max-age=0,no-cache,no-store,must-revalidate" \
    --include "*.html" \
    --include "*.json"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Файлы успешно загружены в S3!${NC}"
else
    echo -e "${RED}❌ Ошибка загрузки в S3${NC}"
    exit 1
fi

# 🔄 Инвалидация CloudFront
if [ ! -z "$CLOUDFRONT_ID" ]; then
    echo -e "${YELLOW}🔄 Очищаю CloudFront кэш (ID: $CLOUDFRONT_ID)...${NC}"
    
    INVALIDATION_ID=$(aws cloudfront create-invalidation \
        --distribution-id $CLOUDFRONT_ID \
        --paths "/*" \
        --query 'Invalidation.Id' \
        --output text)
    
    echo -e "${CYAN}🔄 Инвалидация запущена с ID: $INVALIDATION_ID${NC}"
    echo -e "${YELLOW}⏳ Ожидаю завершения инвалидации...${NC}"
    
    aws cloudfront wait invalidation-completed \
        --distribution-id $CLOUDFRONT_ID \
        --id $INVALIDATION_ID
    
    echo -e "${GREEN}✅ Инвалидация CloudFront завершена!${NC}"
fi

# 🎉 Финальное сообщение
echo -e "${GREEN}"
echo "╔═══════════════════════════════════════════════════════════╗"
echo "║                    🎉 ДЕПЛОЙ ЗАВЕРШЕН!                    ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo -e "${NC}"

echo -e "${CYAN}🌐 Ваш сайт доступен по адресу:${NC}"
echo -e "${GREEN}   $WEBSITE_URL${NC}"
echo ""
echo -e "${CYAN}📊 Информация о деплое:${NC}"
echo -e "   📦 S3 Bucket: $BUCKET_NAME"
echo -e "   🌐 CloudFront ID: $CLOUDFRONT_ID"
echo -e "   🏗️ Файлов загружено: $(find build -type f | wc -l)"
echo -e "   ⏰ Время: $(date)"
echo ""
echo -e "${YELLOW}💡 Совет: Изменения могут появиться через 2-3 минуты из-за CDN кэша${NC}"
