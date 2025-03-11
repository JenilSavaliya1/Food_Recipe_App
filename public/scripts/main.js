document
  .getElementById("mealForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const calories = document.getElementById("calories").value;
    const diet = document.getElementById("diet").value;
    const exclude = document.getElementById("exclude").value;

    const apiKey = "74292165ae8842f7b7631a2597ad7461";
    const url = `https://api.spoonacular.com/mealplanner/generate?timeFrame=day&apiKey=${apiKey}&targetCalories=${calories}&diet=${diet}&exclude=${exclude}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      localStorage.setItem("mealData", JSON.stringify(data));
      window.location.href = "search.html";
    } catch (error) {
      console.error("Error fetching meal plan:", error);
    }
  });
