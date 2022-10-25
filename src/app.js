const input1El = document.querySelector("#input1");
const input2El = document.querySelector("#input2");
const addbut = document.querySelector("button");
const add = (v1, v2) => v1 + v2;
addbut.addEventListener("click", () => {
    const sum = add(Number(input1El.value), Number(input2El.value));
    console.log(sum);
});
