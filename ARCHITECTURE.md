# Project Architecture Documentation

## 📁 Структура проекта

```
react-betting-overview/
├── public/                          # Статические файлы
│   ├── index.html                   # Главный HTML шаблон
│   ├── manifest.json                # PWA манифест
│   ├── robots.txt                   # SEO конфигурация
│   ├── favicon.ico                  # Иконка сайта
│   └── favicon.svg                  # SVG иконка
│
├── src/                             # Исходный код
│   ├── components/                  # React компоненты
│   │   ├── Header.tsx               # Шапка сайта
│   │   ├── Hero.tsx                 # Главная секция
│   │   ├── ProjectSection.tsx       # Секция проекта
│   │   ├── Contact.tsx              # Контактная секция
│   │   ├── Button.tsx               # Переиспользуемая кнопка
│   │   ├── Loader.tsx               # Индикатор загрузки
│   │   └── index.ts                 # Экспорт компонентов
│   │
│   ├── styles/                      # Стили приложения
│   │   ├── components/              # CSS для компонентов
│   │   │   ├── Header.css
│   │   │   ├── Hero.css
│   │   │   ├── ProjectSection.css
│   │   │   ├── Contact.css
│   │   │   ├── Button.css
│   │   │   └── Loader.css
│   │   ├── globals.css              # Глобальные стили
│   │   └── tailwind.config.ts       # Конфигурация Tailwind
│   │
│   ├── data/                        # Данные приложения
│   │   └── projects.ts              # Данные проектов
│   │
│   ├── constants/                   # Константы
│   │   └── index.ts                 # Конфигурация и константы
│   │
│   ├── hooks/                       # Кастомные хуки
│   │   └── useCustomHooks.ts        # Переиспользуемые хуки
│   │
│   ├── utils/                       # Утилиты
│   │   └── helpers.ts               # Вспомогательные функции
│   │
│   ├── types/                       # TypeScript типы
│   │   └── global.d.ts              # Глобальные типы
│   │
│   ├── App.tsx                      # Главный компонент
│   ├── index.tsx                    # Точка входа
│   └── react-app-env.d.ts           # Типы React
│
├── package.json                     # Зависимости проекта
├── tsconfig.json                    # Конфигурация TypeScript
├── .gitignore                       # Git игнорирование
└── README.md                        # Документация
```

## 🧩 Описание компонентов

### Header Component
- **Назначение**: Навигационная шапка сайта
- **Функциональность**: 
  - Логотип компании
  - Кнопка "Back to Top"
  - Sticky позиционирование
- **Props**: `onBackToTop: () => void`

### Hero Component
- **Назначение**: Главная промо-секция
- **Функциональность**:
  - Заголовок с градиентом
  - Статистические бейджи
  - Сетка проектов с анимацией
  - Декоративные элементы фона
- **Props**: `projects: Project[]`

### ProjectSection Component
- **Назначение**: Детальное представление проекта
- **Функциональность**:
  - Описание проекта
  - Список технологий
  - Галерея изображений с лайтбоксом
  - Адаптивная компоновка
- **Props**: `project: Project, index: number`

### Contact Component
- **Назначение**: Призыв к действию и контакты
- **Функциональность**:
  - Преимущества партнерства
  - Статистика компании
  - Градиентный фон
- **Props**: None

### Button Component
- **Назначение**: Переиспользуемая кнопка
- **Функциональность**:
  - Различные варианты стилей
  - Размеры и состояния
  - Поддержка иконок
- **Props**: `variant, size, disabled, loading, icon, onClick, etc.`

### Loader Component
- **Назначение**: Индикатор загрузки
- **Функциональность**:
  - Анимированный спиннер
  - Различные размеры
  - Настраиваемый цвет
- **Props**: `size, color, text`

## 🎨 Стилизация

### Подход к CSS
- **Модульность**: Отдельный CSS файл для каждого компонента
- **Naming Convention**: BEM-подобная методология
- **Responsive Design**: Mobile-first подход
- **Theme System**: CSS переменные для цветов

### Tailwind Integration
- **CDN Version**: Используется через CDN
- **Configuration**: Конфигурация через window.tailwind
- **Custom Colors**: Расширенная палитра цветов
- **Utilities**: Классы для spacing, typography, effects

## 📊 Данные и типы

### Project Interface
```typescript
interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  extendedDescription: string;
  icon: string;
  technologies: string[];
  images: {
    main: string;
    gallery: Array<{
      url: string;
      caption: string;
    }>;
  };
  gradient: string;
}
```

### Constants Structure
- **APP_CONFIG**: Основная конфигурация приложения
- **COMPANY_STATS**: Статистика компании
- **BREAKPOINTS**: Точки адаптивности
- **ANIMATION_DURATIONS**: Длительности анимаций

## 🔧 Утилиты и хуки

### Custom Hooks
- **useScrollPosition**: Отслеживание позиции скролла
- **useWindowSize**: Размеры окна браузера
- **useLocalStorage**: Работа с localStorage
- **useIntersectionObserver**: Отслеживание видимости элементов

### Helper Functions
- **scrollToTop**: Плавный скролл наверх
- **scrollToElement**: Скролл к элементу
- **debounce**: Ограничение частоты вызовов
- **formatTechTags**: Форматирование технологий

## 🚀 Performance & Optimization

### Code Splitting
- **Component Level**: Каждый компонент в отдельном файле
- **Lazy Loading**: Готовность к lazy loading
- **Bundle Optimization**: Оптимизация через React Scripts

### Best Practices
- **TypeScript**: Полная типизация
- **ESLint**: Статический анализ кода
- **Modern React**: Использование хуков и функциональных компонентов
- **Accessibility**: Семантичная разметка

## 🔄 Development Workflow

### Scripts
- `npm start` - Режим разработки
- `npm run build` - Сборка для продакшна
- `npm test` - Запуск тестов
- `npm run eject` - Извлечение конфигурации

### Dependencies
- **React 18**: Основной фреймворк
- **TypeScript**: Типизация
- **React Scripts**: Сборка и развертывание

## 🌐 Deployment Ready

### Static Hosting
- **Build Output**: Оптимизированные статические файлы
- **PWA Support**: Manifest.json для Progressive Web App
- **SEO Ready**: Robots.txt и meta теги

### Environment Support
- **Development**: Hot reload и DevTools
- **Production**: Минификация и оптимизация
- **Testing**: Jest и React Testing Library
