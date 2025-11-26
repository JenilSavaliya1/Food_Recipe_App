document.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem("mealData"));

  if (!data) return;

  // Fill nutrients
  document.getElementById("calories").textContent = data.nutrients.calories;
  document.getElementById("protein").textContent = data.nutrients.protein;
  document.getElementById("fat").textContent = data.nutrients.fat;
  document.getElementById("carbs").textContent = data.nutrients.carbohydrates;

  const mealResults = document.getElementById("mealResults");

  data.meals.forEach((meal) => {
    const mealCard = document.createElement("div");
    mealCard.className = "recipe-card";

    mealCard.innerHTML = `
      <div class="recipe-center">
        <a class="recipe-title" href="${meal.sourceUrl}" target="_blank">
          ${meal.title}
        </a>
        <span class="recipe-time">Ready in: ${meal.readyInMinutes} minutes</span>
      </div>
    `;

    mealResults.appendChild(mealCard);
  });
});
