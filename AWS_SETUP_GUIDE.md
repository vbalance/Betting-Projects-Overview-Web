# 🤖 AWS Deployment Agent - Пошаговые инструкции

## 🎯 **Ваш персональный гид по настройке AWS**

Привет! Я ваш AWS агент и проведу вас через всю настройку шаг за шагом. Следуйте инструкциям точно, и через 15 минут ваш сайт будет работать на AWS! 🚀

---

## 📋 **ЧТО МЫ НАСТРАИВАЕМ:**
- ✅ S3 bucket для хостинга файлов
- ✅ CloudFront CDN для быстрой загрузки по всему миру  
- ✅ Автоматический деплой из GitHub
- ✅ SSL сертификат (HTTPS)
- ✅ Стоимость: ~$1-2/месяц

---

## 🔥 **ШАГ 1: НАСТРОЙКА IAM ПОЛЬЗОВАТЕЛЯ (ОБЯЗАТЕЛЬНО!)**

### 1.1 Переходим в IAM:
```
🌐 Откройте: https://console.aws.amazon.com/iam/
👆 Нажмите: "Users" в левом меню
➕ Нажмите: "Create user"
```

### 1.2 Создаем пользователя:
```
📝 User name: github-actions-deployer
☑️ Отметьте: "Provide user access to the AWS Management Console"
🔑 Console password: Custom password
🔒 Создайте пароль: BettingDeploy2025!
☑️ Отметьте: "User must create a new password at next sign-in"
➡️ Нажмите: "Next"
```

### 1.3 Настраиваем права доступа:
```
🎯 Выберите: "Attach policies directly"
🔍 В поиске введите: AmazonS3FullAccess
☑️ Отметьте: AmazonS3FullAccess
🔍 В поиске введите: CloudFrontFullAccess  
☑️ Отметьте: CloudFrontFullAccess
🔍 В поиске введите: CloudFormationFullAccess
☑️ Отметьте: CloudFormationFullAccess
➡️ Нажмите: "Next"
➡️ Нажмите: "Create user"
```

### 1.4 Создаем Access Key:
```
👆 Нажмите на созданного пользователя: github-actions-deployer
🔑 Перейдите на вкладку: "Security credentials"
📜 Прокрутите до: "Access keys"
➕ Нажмите: "Create access key"
🎯 Выберите: "Command Line Interface (CLI)"
☑️ Отметьте: "I understand the above recommendation"
➡️ Нажмите: "Next"
📝 Description: "GitHub Actions Deployment"
➡️ Нажмите: "Create access key"
```

### 1.5 ⚠️ ВАЖНО - СОХРАНИТЕ КЛЮЧИ:
```
🔐 Access key ID: AKIA... (скопируйте и сохраните!)
🔑 Secret access key: (нажмите "Show" и скопируйте!)

⚠️ ЭТО ПОСЛЕДНИЙ РАЗ КОГДА ВЫ УВИДИТЕ SECRET KEY!
📝 Сохраните их в блокнот - понадобятся в Шаге 3!
```

---

## 🌩️ **ШАГ 2: СОЗДАНИЕ CLOUDFORMATION STACK**

### 2.1 Переходим в CloudFormation:
```
🌐 Откройте: https://console.aws.amazon.com/cloudformation/
🌍 Убедитесь что регион: US East (N. Virginia) us-east-1
➕ Нажмите: "Create stack" → "With new resources (standard)"
```

### 2.2 Загружаем наш шаблон:
```
🎯 Выберите: "Upload a template file"
📁 Нажмите: "Choose file"
📂 Найдите файл: aws/cloudformation.yml (в папке проекта)
➡️ Нажмите: "Next"
```

### 2.3 Настраиваем параметры:
```
📝 Stack name: betting-overview-infrastructure
📝 BucketName: betting-projects-overview-web-[ВАШ_УНИКАЛЬНЫЙ_СУФФИКС]
   💡 Например: betting-projects-overview-web-2025
   ⚠️ Имя bucket должно быть уникальным во всем мире!
➡️ Нажмите: "Next"
```

### 2.4 Финальные настройки:
```
📜 Прокрутите вниз
☑️ Отметьте: "I acknowledge that AWS CloudFormation might create IAM resources"
➡️ Нажмите: "Submit"
```

### 2.5 Ждем создания (5-10 минут):
```
⏳ Статус должен быть: CREATE_IN_PROGRESS
☕ Идите попить кофе, это займет 5-10 минут
✅ Дождитесь статуса: CREATE_COMPLETE
```

### 2.6 ⚠️ ВАЖНО - СОХРАНИТЕ ВЫХОДНЫЕ ДАННЫЕ:
```
🎯 Нажмите на ваш stack: betting-overview-infrastructure
📋 Перейдите на вкладку: "Outputs"
📝 Скопируйте все значения:

🪣 BucketName: betting-projects-overview-web-XXXXX
🌐 CloudFrontDistributionId: E1234567890ABC
🔗 CloudFrontDomainName: d1234567890abc.cloudfront.net
🌍 WebsiteURL: https://d1234567890abc.cloudfront.net

💡 Сохраните эти данные - понадобятся в следующем шаге!
```

---

## 🔑 **ШАГ 3: НАСТРОЙКА GITHUB SECRETS**

### 3.1 Переходим в настройки GitHub:
```
🌐 Откройте: https://github.com/vbalance/Betting-Projects-Overview-Web
⚙️ Нажмите: "Settings" (в верхнем меню репозитория)
🔐 В левом меню нажмите: "Secrets and variables" → "Actions"
```

### 3.2 Добавляем секреты (один за раз):

#### Секрет 1:
```
➕ Нажмите: "New repository secret"
📝 Name: AWS_ACCESS_KEY_ID
🔑 Secret: [Access key ID из Шага 1.5]
💾 Нажмите: "Add secret"
```

#### Секрет 2:
```
➕ Нажмите: "New repository secret"
📝 Name: AWS_SECRET_ACCESS_KEY
🔑 Secret: [Secret access key из Шага 1.5]
💾 Нажмите: "Add secret"
```

#### Секрет 3:
```
➕ Нажмите: "New repository secret"
📝 Name: S3_BUCKET_NAME
🔑 Secret: [BucketName из Шага 2.6]
💾 Нажмите: "Add secret"
```

#### Секрет 4:
```
➕ Нажмите: "New repository secret"
📝 Name: CLOUDFRONT_DISTRIBUTION_ID
🔑 Secret: [CloudFrontDistributionId из Шага 2.6]
💾 Нажмите: "Add secret"
```

#### Секрет 5:
```
➕ Нажмите: "New repository secret"
📝 Name: CLOUDFRONT_DOMAIN
🔑 Secret: [CloudFrontDomainName из Шага 2.6]
💾 Нажмите: "Add secret"
```

### 3.3 Проверяем секреты:
```
✅ У вас должно быть 5 секретов:
   🔑 AWS_ACCESS_KEY_ID
   🔑 AWS_SECRET_ACCESS_KEY  
   🔑 S3_BUCKET_NAME
   🔑 CLOUDFRONT_DISTRIBUTION_ID
   🔑 CLOUDFRONT_DOMAIN
```

---

## 🚀 **ШАГ 4: ЗАПУСК АВТОДЕПЛОЯ**

Теперь когда все настроено, я запушу файлы в репозиторий, и автоматически запустится деплой!

### 4.1 Что произойдет:
```
📤 Я запушу новые файлы в GitHub
🤖 GitHub Actions автоматически запустится
🏗️ Соберет ваш React проект
📦 Загрузит файлы в S3
🌐 Обновит CloudFront CDN
✅ Ваш сайт будет доступен!
```

### 4.2 Отслеживание прогресса:
```
🌐 Перейдите: https://github.com/vbalance/Betting-Projects-Overview-Web/actions
👀 Посмотрите на статус последнего workflow
⏳ Деплой займет 3-5 минут
```

---

## 🔧 **ЛОКАЛЬНАЯ НАСТРОЙКА AWS CLI (ОПЦИОНАЛЬНО)**

Если хотите деплоить локально, настройте AWS CLI:

### Установка (macOS):
```bash
brew install awscli
```

### Настройка:
```bash
aws configure
# AWS Access Key ID: [из Шага 1.5]
# AWS Secret Access Key: [из Шага 1.5]
# Default region name: us-east-1
# Default output format: json
```

### Локальный деплой:
```bash
./scripts/deploy.sh
```

---

## 🎯 **РЕЗУЛЬТАТ**

После завершения всех шагов у вас будет:

✅ **Автоматический деплой** - каждый commit в main ветку автоматически деплоится  
✅ **HTTPS сайт** - с SSL сертификатом  
✅ **Глобальный CDN** - быстрая загрузка по всему миру  
✅ **Масштабируемость** - выдержит любую нагрузку  
✅ **Мониторинг** - логи и метрики в AWS  

**🌍 Ваш сайт будет доступен по адресу:** https://[CloudFrontDomain]

**💰 Стоимость:** ~$1-2/месяц

---

## 🆘 **НУЖНА ПОМОЩЬ?**

Если что-то пошло не так:

1. **Проверьте GitHub Actions**: https://github.com/vbalance/Betting-Projects-Overview-Web/actions
2. **Проверьте CloudFormation**: https://console.aws.amazon.com/cloudformation/
3. **Проверьте S3**: https://console.aws.amazon.com/s3/
4. **Проверьте CloudFront**: https://console.aws.amazon.com/cloudfront/

**🤖 Я помогу решить любые проблемы!**

---

Готовы начать? Переходите к Шагу 1! 🚀
