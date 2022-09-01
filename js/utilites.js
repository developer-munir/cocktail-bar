const searchFields = (fieldsId) => {
  const searchField = document.getElementById(fieldsId);
  const searchFieldValue = searchField.value;
  allCoctail(searchFieldValue);
  searchField.value = "";
};

const searchingProcess = (buttonId, fieldId) => {
  const button = document.getElementById(buttonId);
  button.addEventListener("click", (e) => {
    e.preventDefault();
    searchFields(fieldId);
    // console.log(searchFieldValue);
  });
};
