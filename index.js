import { getPets, deletePet } from "./utils/petsdb.js";

async function init() {
  const pets = await getPets();
  console.log(pets);
}

document.querySelector("button").addEventListener("click", () => {
  deletePet(6);
  init();
});
init();
console.log(test);
