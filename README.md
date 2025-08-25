# Betting Projects Overview

🚀 **LIVE DEMO:** Автоматический деплой настроен! Сайт обновляется при каждом коммите.

A modern React TypeScript application showcasing our betting software portfolio with advanced component architecture and responsive design.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProjectSection.tsx
│   ├── Contact.tsx
│   ├── Button.tsx
│   └── Loader.tsx
├── data/               # Project data
│   └── projects.ts
├── styles/             # CSS styles
│   ├── globals.css
│   └── components/
├── constants/          # Application constants
├── hooks/             # Custom React hooks
├── types/             # TypeScript definitions
└── utils/             # Utility functions
```

## 🛠 Technologies

- React 18
- TypeScript
- CSS3 with custom properties
- Font Awesome icons
- Responsive design

## 📦 Features

- ✅ Component-based architecture
- ✅ TypeScript for type safety
- ✅ Responsive design
- ✅ Smooth navigation
- ✅ Project gallery with lightbox
- ✅ Modern CSS with custom properties

## 🚀 Особенности

- **Современная архитектура**: React 18 с TypeScript
- **Адаптивный дизайн**: Полностью адаптивная верстка для всех устройств
- **Компонентная структура**: Модульная архитектура с разделением на компоненты
- **Стилизация**: Tailwind CSS для современного дизайна
- **Типизация**: Полная типизация с TypeScript

## 📁 Структура проекта

```
react-betting-overview/
├── public/
│   └── index.html              # Главный HTML файл
├── src/
│   ├── components/             # React компоненты
│   │   ├── Header.tsx         # Компонент шапки сайта
│   │   ├── Hero.tsx           # Главная секция
│   │   ├── ProjectSection.tsx # Секция проекта
│   │   └── Contact.tsx        # Контактная секция
│   ├── data/
│   │   └── projects.ts        # Данные проектов
│   ├── styles/
│   │   ├── globals.css        # Глобальные стили
│   │   ├── components/        # CSS для компонентов
│   │   │   ├── Header.css
│   │   │   ├── Hero.css
│   │   │   ├── ProjectSection.css
│   │   │   └── Contact.css
│   │   └── tailwind.config.ts # Конфигурация Tailwind
│   ├── types/
│   │   └── global.d.ts        # Глобальные типы
│   ├── App.tsx                # Главный компонент
│   ├── index.tsx              # Точка входа
│   └── react-app-env.d.ts     # Типы React
├── package.json               # Зависимости и скрипты
├── tsconfig.json             # Конфигурация TypeScript
└── README.md                 # Документация проекта
```

## 🛠 Технологии

- **React 18** - Основной фреймворк
- **TypeScript** - Типизация
- **Tailwind CSS** - Стилизация (CDN)
- **Font Awesome** - Иконки
- **Inter Font** - Типографика

## 🎯 Компоненты

### Header
- Логотип компании
- Кнопка "Back to Top"
- Sticky навигация

### Hero
- Главный заголовок с градиентом
- Статистика проектов
- Сетка проектов с иконками

### ProjectSection
- Детальное описание проекта
- Список технологий
- Галерея изображений с лайтбоксом
- Адаптивная сетка

### Contact
- Призыв к действию
- Преимущества партнерства
- Статистика компании

## 🚀 Запуск проекта

1. **Установка зависимостей:**
   ```bash
   npm install
   ```

2. **Запуск в режиме разработки:**
   ```bash
   npm start
   ```
   Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000)

3. **Сборка для продакшна:**
   ```bash
   npm run build
   ```

4. **Запуск тестов:**
   ```bash
   npm test
   ```

## 📱 Адаптивность

Приложение полностью адаптивно и оптимизировано для:
- Мобильные устройства (320px+)
- Планшеты (768px+)
- Десктопы (1024px+)
- Широкие экраны (1280px+)

## 🎨 Дизайн-система

### Цветовая палитра
- **Основной**: Нейтральные оттенки серого
- **Акценты**: Синий (#3b82f6)
- **Фон**: Градиенты серого
- **Текст**: Контрастные нейтральные тона

### Типографика
- **Шрифт**: Inter (Google Fonts)
- **Размеры**: От 0.75rem до 3.75rem
- **Веса**: 100-900

## 🔧 Возможности расширения

1. **Добавление новых проектов**: Редактирование файла `src/data/projects.ts`
2. **Новые компоненты**: Создание в папке `src/components/`
3. **Стили**: Добавление CSS файлов в `src/styles/components/`
4. **Типы**: Расширение интерфейсов в `src/data/projects.ts`

## 📦 Зависимости

### Основные
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `typescript`: ^4.7.4

### Типы
- `@types/react`: ^18.0.15
- `@types/react-dom`: ^18.0.6
- `@types/node`: ^16.11.47

### Сборка
- `react-scripts`: ^5.0.1

## 🌐 Внешние ресурсы

- **Tailwind CSS**: CDN версия
- **Font Awesome**: CDN версия 6.4.0
- **Google Fonts**: Inter семейство шрифтов
- **ApexCharts**: Для возможных будущих графиков

## 🚀 Деплой

Приложение готово к деплою на любую статическую хостинг-платформу:
- **Netlify**: Автоматический деплой из Git
- **Vercel**: Оптимизация для React
- **GitHub Pages**: Через GitHub Actions
- **AWS S3**: Статический хостинг

## 📄 Лицензия

Проект создан для демонстрации портфолио BetTech Solutions.

## 👥 Команда

Разработано командой BetTech Solutions - экспертами в области программного обеспечения для ставок с более чем 5-летним опытом.

---

*Для получения дополнительной информации или партнерства свяжитесь с командой BetTech Solutions.*
