# 🌐 Настройка кастомного домена для AWS CloudFront

## 🎯 **Цель:** bettechsolutions.aeoncodes.com → AWS CloudFront

---

## 📋 **МЕТОД 1: РУЧНАЯ НАСТРОЙКА (РЕКОМЕНДУЕТСЯ)**

### ✅ **Шаг 1: DNS запись**
```
В панели управления доменом добавьте:
📝 Субдомен: bettechsolutions
📍 Тип: CNAME
🎯 Значение: d1lfpp15073n6t.cloudfront.net
💾 Сохранить
```

### ✅ **Шаг 2: SSL сертификат**
```
🌐 AWS Certificate Manager: https://console.aws.amazon.com/acm/
⚠️ РЕГИОН: US East (N. Virginia) us-east-1
➕ Request certificate → Public certificate
📝 Domain: bettechsolutions.aeoncodes.com
🔍 Validation: DNS validation
```

### ✅ **Шаг 3: Подтверждение домена**
```
📋 Скопируйте CNAME для validation
➕ Добавьте в DNS панель:
📝 Name: _abc123...aeoncodes.com (без домена)
🎯 Value: _xyz789...acm-validations.aws
⏳ Ждите 5-10 минут
```

### ✅ **Шаг 4: Обновление CloudFront**
```
🌐 CloudFront Console: https://console.aws.amazon.com/cloudfront/
🎯 Distribution: d1lfpp15073n6t.cloudfront.net
⚙️ Edit → Alternate domain names (CNAMEs)
📝 Добавить: bettechsolutions.aeoncodes.com
🔐 Custom SSL: выбрать ваш сертификат
💾 Save changes
⏳ Деплой: 10-15 минут
```

---

## 🚀 **МЕТОД 2: CLOUDFORMATION (АВТОМАТИЗАЦИЯ)**

Если хотите автоматизировать процесс:

### 1. Сначала создайте SSL сертификат вручную (Шаги 2-3 выше)

### 2. Обновите CloudFormation stack:
```bash
# Получите ARN сертификата
aws acm list-certificates --region us-east-1

# Обновите stack с кастомным доменом
aws cloudformation update-stack \
    --stack-name betting-overview-infrastructure \
    --template-body file://aws/cloudformation-custom-domain.yml \
    --parameters \
        ParameterKey=BucketName,ParameterValue=betting-projects-overview-web-2025 \
        ParameterKey=DomainName,ParameterValue=bettechsolutions.aeoncodes.com \
        ParameterKey=CertificateArn,ParameterValue=arn:aws:acm:us-east-1:...:certificate/...
```

---

## ⏱️ **ВРЕМЯ ВЫПОЛНЕНИЯ:**
- DNS запись: 1 минута
- SSL сертификат: 5-10 минут  
- CloudFront обновление: 10-15 минут
- **Общее время: 20-30 минут**

---

## ✅ **ПРОВЕРКА РЕЗУЛЬТАТА:**

После завершения:
```
🌐 Откройте: https://bettechsolutions.aeoncodes.com
🔐 Проверьте SSL: должен быть валидный сертификат
🚀 Сайт должен работать с кастомным доменом
```

---

## 🆘 **TROUBLESHOOTING:**

### DNS не работает:
- Проверьте CNAME запись: `nslookup bettechsolutions.aeoncodes.com`
- Подождите 5-10 минут для DNS propagation

### SSL ошибки:
- Убедитесь что сертификат в регионе us-east-1
- Проверьте что validation CNAME добавлена правильно

### CloudFront ошибки:
- Проверьте что домен добавлен в Alternate domain names
- Убедитесь что SSL сертификат выбран правильно

---

**🎯 Рекомендую начать с Метода 1 (ручная настройка) - он более надежный для первого раза!**
