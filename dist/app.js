import { Task, Category } from "./types/types.js";
import { render } from "./helpers/render-tasks.js"; // importujemy plik `.js` żeby po kompilacji JS mógł go rozpoznać
import { renderCategories } from "./helpers/render-categories.js";
import { TaskClass } from "./classes/task.js";
const tasksContainerElement = document.querySelector(".tasks");
const taskName = document.querySelector("#name");
const addbut = document.querySelector("button");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCat;
const categories = [
    Category.GENERAL,
    Category.GYM,
    Category.HOBBY,
    Category.WORK,
];
const tasks = [
    new Task("Zjeść śniadanie", false),
    new Task("Zjeść obiad", true),
    new Task("Powstrzymać napływ emigrantów z Andromedy", false, Category.GYM),
    new Task("Zjeść kolację", false, Category.HOBBY),
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCat = newCategory;
};
addbut.addEventListener("click", (event) => {
    event.preventDefault(); // nie wysyła formularza po kliknięciu
    const newTask = new Task(taskName.value, false, selectedCat);
    addTask(newTask);
    newTask.LogCreation("!!!!");
    render(tasks, tasksContainerElement);
});
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
render(tasks, tasksContainerElement);
const taskClass = new TaskClass("Zadanie z matmy", false);
