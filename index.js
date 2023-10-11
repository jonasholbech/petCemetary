import { getPets, deletePet, updatePet } from "./utils/petsdb.js";

async function showPets() {
  const pets = await getPets();
  console.log(pets);
  console.log(pets.length, "dyr i databasen");
  document.querySelector(".pets").innerHTML = "";
  pets.forEach((pet) => {
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector("h2").textContent = pet.name;
    copy.querySelector(".species").textContent = pet.species;
    copy.querySelector(".race").textContent = pet.race;
    copy.querySelector(".status").textContent = pet.isAlive;
    const deleteButton = copy.querySelector("button[data-action='delete']");
    deleteButton.dataset.id = pet.id;
    const updateButton = copy.querySelector("button[data-action='update']");
    updateButton.dataset.id = pet.id;

    deleteButton.addEventListener("click", async (e) => {
      await deletePet(pet.id);
      showPets();
    });
    updateButton.addEventListener("click", async (e) => {
      console.log(pet.id, "skal opdateres");
      await updatePet(pet.id);
      showPets();
    });
    document.querySelector(".pets").appendChild(copy);
  });
}

showPets();
