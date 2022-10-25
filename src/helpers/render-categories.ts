import { Category } from "../types/types.js";

const handleCategoryChange = (category: Category) => {
  if (category === Category.GENERAL) {
    console.log("Zmiana na general!");
  } else if (category === Category.GYM) {
    alert("Lecisz na silke");
  } else if (category === Category.HOBBY) {
    document.body.style.background = "red";
  } else if (category === Category.WORK) {
    console.log("Zmiana na work");
    alert("Praca popłaca");
    document.body.style.background = "green";
  }
};

export const renderCategories = (
  categories: Category[],
  categoriesContainerElement: HTMLElement,
  inputChangeCallback: (category: Category) => void
) => {
  categories.forEach((category) => {
    // tworzenie listy kategorii zadań
    const categoryElement: HTMLElement = document.createElement("li"); // stwórz element listy

    const radioInputElement: HTMLInputElement = document.createElement("input"); // określ zmienną reprezentującą kategorię
    radioInputElement.type = "radio"; // przypisz typ `radio`
    radioInputElement.name = "category"; // przypisz nazwę
    radioInputElement.value = category; // przypisz wartość ze zdefionowanego typu `category`
    radioInputElement.id = "category-${category}"; // przypisz `id`
    radioInputElement.addEventListener("change", () => {
      inputChangeCallback(category); // przypisz kategorię w zależności od zaznaczonego przycisku
      handleCategoryChange(category);
    });

    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.setAttribute("for", `category-${category}`);
    labelElement.innerText = category;

    categoryElement.appendChild(radioInputElement);
    categoryElement.appendChild(labelElement);

    categoriesContainerElement.appendChild(categoryElement);
  });
};
