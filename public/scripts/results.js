document.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem("mealData"));

  if (data) {
    document.getElementById("calories").textContent = data.nutrients.calories;
    document.getElementById("protein").textContent = data.nutrients.protein;
    document.getElementById("fat").textContent = data.nutrients.fat;
    document.getElementById("carbs").textContent = data.nutrients.carbohydrates;

    const mealResults = document.getElementById("mealResults");
    data.meals.forEach((meal) => {
      const mealDiv = document.createElement("div");
      mealDiv.className = "container";
      mealDiv.innerHTML = `
                <h1><a href="${meal.sourceUrl}" target="_blank">${meal.title}</a></h1>
                <h3>Ready in: ${meal.readyInMinutes} minutes</h3>
            `;
      mealResults.appendChild(mealDiv);
    });
  }
});
