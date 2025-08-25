# 🖼️ Замена изображений проектов

## 📍 **Где находятся изображения:**

### Текущее состояние:
Все изображения сейчас используют **placeholder** ссылки из `placehold.co` в файле:
📁 `src/data/projects.ts`

### Структура изображений для каждого проекта:
```typescript
images: {
  main: 'https://placehold.co/800x600/...',  // Главное изображение
  gallery: [
    {
      url: 'https://placehold.co/600x400/...',  // Дополнительные скриншоты
      caption: 'Описание скриншота'
    }
  ]
}
```

---

## 🚀 **Как заменить изображения:**

### ✅ **ВАРИАНТ 1: Локальные файлы (РЕКОМЕНДУЕТСЯ)**

#### 1. Создайте папку для изображений:
```
📁 public/images/projects/
   ├── tippmixpo/
   │   ├── main.jpg (1024x768)
   │   ├── calculator.jpg (600x400)
   │   └── bot-config.jpg (600x400)
   ├── stake-leaderboard/
   │   ├── main.jpg
   │   └── ...
   └── ...
```

#### 2. Скопируйте ваши скриншоты в соответствующие папки

#### 3. Обновите пути в `src/data/projects.ts`:
```typescript
// Вместо:
main: 'https://placehold.co/800x600/...'

// Используйте:
main: '/images/projects/tippmixpo/main.jpg'
```

### ✅ **ВАРИАНТ 2: Внешние ссылки**
Если у вас есть изображения на внешних сервисах (GitHub, Imgur, etc.):
```typescript
main: 'https://your-image-host.com/project-screenshot.jpg'
```

---

## 📐 **Рекомендуемые размеры:**

- **Главные изображения:** 1024x768px (соотношение 4:3)
- **Галерея:** 600x400px (соотношение 3:2)
- **Формат:** JPG или PNG
- **Размер файла:** до 800KB для главных, до 500KB для галереи

---

## 🎯 **Список проектов для замены:**

1. **Tippmixpo Prematch EV+** - Dashboard, Calculator, Bot Config
2. **Stake Leaderboard** - Dashboard, Analytics, Statistics
3. **Betfair Odds Drop** - Monitor, Market Analysis, Alerts
4. **Surebet Scanner** - Scanner, Calculator, Profit Tracker
5. **ML Prediction** - AI Interface, Model Training, Predictions
6. **Strategy Backtester** - Simulator, Results, Risk Analysis
7. **Horse Racing** - Analytics, Track Conditions, Jockey Stats
8. **Portfolio Manager** - Dashboard, Performance, Risk
9. **Live Odds** - Real-time Display, Comparison, Alerts

---

## 🛠️ **Автоматизация замены:**

Хотите я создам скрипт для массовой замены placeholder'ов на локальные пути?

**Какой вариант предпочитаете?**
1. 📁 Локальные файлы в `/public/images/projects/`
2. 🌐 Внешние ссылки
3. 🤖 Автоматический скрипт замены
