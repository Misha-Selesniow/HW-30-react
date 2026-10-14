# Книга контактів

React-застосунок для додавання, пошуку та видалення контактів. Дані керуються
через Redux Toolkit, а список контактів зберігається між запусками у
`localStorage` за допомогою Redux Persist. Значення фільтра не зберігається.

## Запуск

```bash
npm install
npm start
```

## Перевірка production-збірки

```bash
npm run lint:js
npm run build
```

## Деплой

Після пушу в гілку `main` GitHub Actions перевіряє та збирає застосунок,
а потім публікує його в GitHub Pages:

https://gajdukkira24.github.io/HW-31-react/
