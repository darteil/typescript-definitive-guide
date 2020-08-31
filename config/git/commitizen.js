module.exports = {
  // Добавим описание на русском языке ко всем типам
  types: [
    {
      value: 'book',
      name: 'book:      Изменение книги'
    },
    {
      value: 'what-is-new',
      name: `what-is-new:      Изменение раздела "Что нового?"`
    },
    {
      value: 'www',
      name: 'www:     Изменение приложения'
    },
    {
      value: 'ci',
      name: 'ci:        Настройка CI и конфигурации'
    },

  ],

  // Область. Она характеризует фрагмент кода, которую затронули изменения
  scopes: [
    { name: "Синтаксические и орфографические ошибки" },
    { name: "Дополнение контента или его смысловое изменение" },
    { name: "Рефакторинг www" },
    { name: "Изменение стилей www" },
    { name: "Изменение кода www" },
    { name: "Исправление бага www" },
  ],

  // Возможность задать спец ОБЛАСТЬ для определенного типа коммита (пример для 'fix')
  scopeOverrides: {
    www: [
      {name: 'исправление бага'},
      {name: 'изменение стилей'},
      {name: 'добавление или удаление функционала'},
      {name: 'рефакторинг'},
    ],
    book: [
      {name: 'исправление синтаксических и орфографических ошибок'},
      {name: 'дополнение контента или его смысловое изменение'},
    ],
    [`what-is-new`]: [
      {name: 'исправление синтаксических и орфографических ошибок'},
      {name: 'дополнение контента или его смысловое изменение'},
    ],
    ci: [
      {name: 'настройка gh-actions'},
      {name: 'прочая конфигурация'},
    ]
  },

  // Поменяем дефолтные вопросы
  messages: {
    type: "Какие изменения вы вносите?",
    scope: "\nВыберите ОБЛАСТЬ, которую вы изменили (опционально):",
    // Спросим если allowCustomScopes в true
    customScope: "Укажите свою ОБЛАСТЬ:",
    subject: "Напишите КОРОТКОЕ описание в ПОВЕЛИТЕЛЬНОМ наклонении:\n",
    body:
      'Напишите ПОДРОБНОЕ описание (опционально). Используйте "|" для новой строки:\n',
    breaking: "Список BREAKING CHANGES (опционально):\n",
    footer:
      "Место для мета данных (тикетов, ссылок и остального). Например: SECRETMRKT-700, SECRETMRKT-800:\n",
    confirmCommit: "Вас устраивает получившийся коммит?"
  },

  // Разрешим собственную ОБЛАСТЬ
  allowCustomScopes: true,

  // Запрет на Breaking Changes
  allowBreakingChanges: false,

  // Префикс для нижнего колонтитула
  footerPrefix: "МЕТА ДАННЫЕ:",

  // limit subject length
  subjectLimit: 72
};
