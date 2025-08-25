# 🌐 CloudFront Configuration Guide

## 📋 **Шаг за шагом настройка CloudFront с кастомным доменом**

### ✅ **Шаг 1: Дождитесь валидации SSL**
Статус сертификата должен измениться с "Pending validation" на "Issued" ✅

### ✅ **Шаг 2: Откройте CloudFront Console**
🔗 https://console.aws.amazon.com/cloudfront/v3/home

### ✅ **Шаг 3: Найдите ваш Distribution**
- ID: `d1lfpp15073n6t.cloudfront.net`
- Origin: `betting-projects-overview-web-2025.s3-website-us-east-1.amazonaws.com`

### ✅ **Шаг 4: Добавьте кастомный домен**

#### 4.1 Нажмите на Distribution ID
#### 4.2 Вкладка "General" → кнопка "Edit"
#### 4.3 В разделе "Alternate domain names (CNAMEs)":
```
📝 Добавьте: bettechsolutions.aeoncodes.com
```

#### 4.4 В разделе "Custom SSL certificate":
```
🔐 Выберите ваш сертификат из списка:
   *.bettechsolutions.aeoncodes.com
   (ARN: arn:aws:acm:us-east-1:038702421523:certificate/7bc67b84-eaa9-45c4-b240-be44b55e5c5c)
```

#### 4.5 SSL/TLS settings:
```
🔒 Security Policy: TLSv1.2_2021 (recommended)
🌐 Supported HTTP Versions: HTTP/2 and HTTP/1.1
```

### ✅ **Шаг 5: Сохранить изменения**
- Нажмите "Save changes" 💾
- ⏳ Деплой займет 10-15 минут

---

## 🔍 **Проверка настроек:**

### Текущие настройки должны быть:
```
📍 Origin Domain: betting-projects-overview-web-2025.s3-website-us-east-1.amazonaws.com
🌐 Alternate Domain Names: bettechsolutions.aeoncodes.com
🔐 SSL Certificate: Custom SSL certificate (ваш сертификат)
📱 Viewer Protocol Policy: Redirect HTTP to HTTPS
🗂️ Default Root Object: index.html
```

---

## ⏰ **Timeline:**

1. **Сейчас:** SSL validation (5-15 минут) ⏳
2. **Потом:** CloudFront configuration (2 минуты) ✏️
3. **Деплой:** CloudFront deployment (10-15 минут) 🚀
4. **Результат:** https://bettechsolutions.aeoncodes.com работает! 🎉

**Общее время: 20-35 минут**

---

## 🆘 **Troubleshooting:**

### Если не видите сертификат в списке:
- Убедитесь что статус "Issued" ✅
- Проверьте регион: должен быть us-east-1
- Обновите страницу CloudFront

### Если CNAME уже используется:
- Проверьте что домен не используется в другом Distribution
- Удалите старые настройки если есть

### После деплоя 404 ошибка:
- Проверьте что Default Root Object = "index.html"
- Убедитесь что Origin Domain правильный

---

## 🎯 **Следующие шаги:**

1. ⏳ Ждем SSL validation (сейчас)
2. ⚙️ Настраиваем CloudFront (когда SSL готов)
3. ☕ Ждем deployment 
4. 🎉 Тестируем https://bettechsolutions.aeoncodes.com

**Как только SSL сертификат получит статус "Issued" - сразу переходим к настройке CloudFront!** 🚀
