import { Task } from "../types/types";
export const render = (tasks: Task[], tasksContainerElement: HTMLElement) => {
  tasksContainerElement.innerHTML = "";
  tasks.forEach((task, index) => {
    // dla obiektu `tasks` wybierz element `task` i pobierz `index`

    const taskElement: HTMLElement = document.createElement("li"); // stwórz element `li`
    if (task.category) {
      taskElement.classList.add(task.category);
    } // jesli `task.category` istnieje to dodaj go do listy

    const id: string = `task-${index}`; // przypisz jako `id` numer pobrany przy pętli i dodaj go z prefixem `task-`

    const labelElement: HTMLLabelElement = document.createElement("label"); // stwórz element `label`
    labelElement.innerText = task.name; // przypisz nazwę z `task` do elementu `innerText`
    labelElement.setAttribute("for", id); // ustaw atrybut `for` i przypisz do niego `id`

    const checkboxElement: HTMLInputElement = document.createElement("input"); // stwrórz element `input`
    checkboxElement.type = "checkbox"; // ustaw jego typ na `checkbox`
    checkboxElement.name = task.name; // przypisz do nazwę do `name`
    checkboxElement.id = id; // do id przypisz `id`
    checkboxElement.checked = task.done; // odznacz chceckbox w zalezności od parametru `done`
    checkboxElement.addEventListener("change", () => {
      task.done = !task.done; // dodaj zdarzenie na zmianę w `chceckboxie` która odwróci wartośc zaznaczenia
    });

    taskElement.appendChild(labelElement);
    taskElement.appendChild(checkboxElement); // przypisz `label` i `chceckbox` do taskElement
    tasksContainerElement.appendChild(taskElement); // przypisz `taskElement` do obiektu
  });
};
