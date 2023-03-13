"use strict";

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

const ingredientPotatoesEl = document.createElement("li");
ingredientPotatoesEl.textContent = ingredients[0];
ingredientPotatoesEl.classList.add("item");

const ingredientMushroomsEl = document.createElement("li");
ingredientMushroomsEl.textContent = ingredients[1];
ingredientMushroomsEl.classList.add("item");

const ingredientGarlicEl = document.createElement("li");
ingredientGarlicEl.textContent = ingredients[2];
ingredientGarlicEl.classList.add("item");

const ingredientTomatosEl = document.createElement("li");
ingredientTomatosEl.textContent = ingredients[3];
ingredientTomatosEl.classList.add("item");

const ingredientHerbsEl = document.createElement("li");
ingredientHerbsEl.textContent = ingredients[4];
ingredientHerbsEl.classList.add("item");

const ingredientCondimentsEl = document.createElement("li");
ingredientCondimentsEl.textContent = ingredients[5];
ingredientCondimentsEl.classList.add("item");

const pushBodyUlIngredientsEl = document.querySelector("#ingredients");
pushBodyUlIngredientsEl.append(
  ingredientPotatoesEl,
  ingredientMushroomsEl,
  ingredientGarlicEl,
  ingredientTomatosEl,
  ingredientHerbsEl,
  ingredientCondimentsEl
);
