// JavaScript містить масив рядків.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// 1 Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2 Додасть назву інгредієнта як його текстовий вміст.
// 3 Додасть елементу клас item.
// 4 Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

for (const ingredient of ingredients) {
  const ingredientsEl = document.createElement("li");
  ingredientsEl.textContent = ingredient;
  ingredientsEl.classList.add("item");
  const pushIngredientsEl = document.querySelector("#ingredients");
  pushIngredientsEl.append(ingredientsEl)
}

