// https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=orange
const allCoctail = (searchTexts) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchTexts}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => coctail(data.drinks))
    .catch((error) => console.log(error));
};
const coctail = (data) => {
  console.log(data);
  const cocktailContainer = document.getElementById("cocktailContainer");
  cocktailContainer.textContent = ``;
  data.forEach((element) => {
    console.log(element);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
          <div class="card h-100">
              <img src="${element.strDrinkThumb}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${element.strDrink}</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
        `;
    cocktailContainer.appendChild(div);
  });
};
searchingProcess("search-btn-1", "search-field-1");
searchingProcess("search-btn-2", "search-field-2");
allCoctail("gin");
