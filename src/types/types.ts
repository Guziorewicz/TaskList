export class Task {
  name: string = "Nowe zadanie";
  done: boolean = true;
  category?: Category;
  constructor(
    name: string,
    done: boolean,
    category: Category = Category.GENERAL
  ) {
    this.name = name;
    this.done = done;
  }
  LogCreation(extra: string) {
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

export enum Category {
  GENERAL = "general",
  WORK = "work",
  GYM = "gym",
  HOBBY = "hobby",
}
