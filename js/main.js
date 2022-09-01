const allCoctail = (searchTexts) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTexts}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => coctail(data.drinks))
    .catch((error) => console.log(error));
};
const coctail = (data) => {
  const drinks = document.getElementById("drinks");
  if (data == null) {
    drinks.innerText = "not found your drinks!!";
  } else {
    drinks.innerText = "Your drinks";
  }
  const cocktailContainer = document.getElementById("cocktailContainer");
  cocktailContainer.textContent = ``;
  data.forEach((element) => {
    console.log(element);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
          <div class="card h-100 shadow-card">
              <img src="${element.strDrinkThumb}" class="card-img-top" alt="..." />
              <div class="card-body d-flex justify-content-between align-items-center">
                <h5 class="card-title">${element.strDrink}</h5>
                <button type="button" data-bs-toggle="modal"
                data-bs-target="#exampleModal" class="btn btn-success" id= "details-btn" onclick ="detailsBtn(${element.idDrink})">Details</button> 
              </div>
            </div>
        `;
    cocktailContainer.appendChild(div);
    const categoritesContainer = document.getElementById(
      "categories-container"
    );
    spinner(false);
    const li = document.createElement("li");
    li.innerHTML = `
    <li><a class="dropdown-item" href="#">${element.strDrink}</a></li>
    `;
    categoritesContainer.appendChild(li);
  });
};
searchingProcess("search-btn-1", "search-field-1");
searchingProcess("search-btn-2", "search-field-2");
const detailsBtn = (productId) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${productId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => detailsDrink(data.drinks[0]))
    .catch((error) => console.log(error));
};

const detailsDrink = (data) => {
  const modalTitle = document.getElementById("exampleModalLabel");
  modalTitle.innerText = `${data.strDrink}`;
  const modalBody = document.getElementById("modalBody");
  modalBody.innerText = `${data.strInstructions}`;
};

const spinner = (isLoading) => {
  const spinnerLoading = document.getElementById("spinner");
  if (isLoading) {
    spinnerLoading.classList.remove("d-none");
  } else {
    spinnerLoading.classList.add("d-none");
  }
};
allCoctail("");
