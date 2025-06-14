import { createI18n } from "vue-i18n";

export const messages = {
  en: {
    labels: {
      search: "Search...",
      category: "Category",
      priority: "Priority",
      status: "Status",
      appName: "App name",
      appType: "Type",
      taskName: "Name",
    },
    buttons: {
      createTask: "Create task",
      createApp: "Add application",
    },
    priority: {
      critical: "Critical",
      high: "High",
      medium: "Medium",
      low: "Low",
      optional: "Optional",
    },
    status: {
      pending: "Pending",
      inProgress: "In Progress",
      done: "Done",
    },
    category: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      devops: "DevOps",
      testing: "Testing",
      security: "Security",
      ux: "UX",
      integration: "Integration",
      product: "Product",
      analytics: "Analytics",
      marketing: "Marketing",
    },
    appType: {
      desktop: "Desktop",
      mobile: "Mobile",
      web: "Web",
    },
    removeQuestion: "Are you really want remove tracking",
  },
  ru: {
    labels: {
      search: "Поиск...",
      category: "Категория",
      priority: "Приоритет",
      status: "Статус",
      appName: "Название",
      appType: "Тип приложения",
      taskName: "Название",
    },
    buttons: {
      createTask: "Создать задачу",
      createApp: "Добавить приложение",
    },
    priority: {
      critical: "Критично",
      high: "Высокий",
      medium: "Средний",
      low: "Низкий",
      optional: "Необязательный",
    },
    status: {
      pending: "В ожидании",
      inProgress: "В процессе",
      done: "Готово",
    },
    category: {
      frontend: "Фронтенд",
      backend: "Бэкенд",
      database: "База данных",
      devops: "DevOps",
      testing: "Тестирование",
      security: "Безопасность",
      ux: "UX",
      integration: "Интеграция",
      product: "Продукт",
      analytics: "Аналитика",
      marketing: "Маркетинг",
    },
    appType: {
      desktop: "Настольное",
      mobile: "Мобильное",
      web: "Веб",
    },
    removeQuestion: "Вы действительно хотите удалить трекинг",
  },

  ua: {
    labels: {
      search: "Пошук...",
      category: "Категорія",
      priority: "Пріоритет",
      status: "Статус",
      appName: "Назва",
      appType: "Тип додатку",
      taskName: "Назва",
    },
    buttons: {
      createTask: "Створити задачу",
      createApp: "Додати застосунок",
    },
    priority: {
      critical: "Критично",
      high: "Високий",
      medium: "Середній",
      low: "Низький",
      optional: "Необов’язковий",
    },
    status: {
      pending: "В очікуванні",
      inProgress: "В процесі",
      done: "Готово",
    },
    category: {
      frontend: "Фронтенд",
      backend: "Бекенд",
      database: "База даних",
      devops: "DevOps",
      testing: "Тестування",
      security: "Безпека",
      ux: "UX",
      integration: "Інтеграція",
      product: "Продукт",
      analytics: "Аналітика",
      marketing: "Маркетинг",
    },
    appType: {
      desktop: "Десктоп",
      mobile: "Мобільний",
      web: "Веб",
    },
    removeQuestion: "Ви дійсно бажаєте видалити трекинг",
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;
