export class Task {
    constructor(name, done, category = Category.GENERAL) {
        this.name = "Nowe zadanie";
        this.done = true;
        this.name = name;
        this.done = done;
    }
    LogCreation(extra) {
        console.log(`Task został stworzony  ${extra || ""}`);
    }
}
// export interface Task {
//   name: string;
//   done: boolean;
//   category?: Category; // dodanie `?` powoduje że parametr jest opcjonalny, typescript nie krzyczy kiedy go nie ma
// `union type` (po dwukropku) - dla `category` akceptowane będą jedynie wymianione wartości, w tym wypadku zakres ogranicza się do typu `category`
//} // interface definiuje parametry, można go używać w innych częściach kodu bez konieczności redefiniowania wszystkich parametrów
//export type Category = "general" | "work" | "gym" | "hobby"; // stworzenie typu danych który jest `alisaem` (reprezentają) zadeklarowanych wartości
export var Category;
(function (Category) {
    Category["GENERAL"] = "general";
    Category["WORK"] = "work";
    Category["GYM"] = "gym";
    Category["HOBBY"] = "hobby";
})(Category || (Category = {}));
