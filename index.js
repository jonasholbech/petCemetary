import { getPets, deletePet, updatePet } from "./utils/petsdb.js";
import { rangeIntensityChanger, autoExpandTextarea } from "./utils/helpers.js";

rangeIntensityChanger();
autoExpandTextarea();

async function showPets() {
  const pets = await getPets();
  console.log(pets);
  console.log(pets.length, "dyr i databasen");
  document.querySelector(".pets").innerHTML = "";
  pets.forEach((pet) => {
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector("[data-name]").textContent = pet.name;
    copy.querySelector("[data-species]").textContent = pet.species;
    copy.querySelector("[data-race]").textContent = pet.race;
    copy.querySelector("[data-status]").textContent = pet.isAlive
      ? "I Live"
      : "Død";
    copy.querySelector("[data-age] span").textContent =
      pet.dob.slice(0, 4) - new Date().getFullYear();
    copy.querySelector(".status").dataset.alive = pet.isAlive;
    if (pet.image) {
      copy.querySelector("img").src = pet.image;
    }

    copy.querySelector(".traits-list").innerHTML += pet.traits
      .map((trait) => `<dd>${trait}</dd>`)
      .join("");
    copy.querySelector("meter").value = pet.activityLevel;
    const deleteButton = copy.querySelector("button[data-action='delete']");
    deleteButton.dataset.id = pet.id;
    const updateButton = copy.querySelector("button[data-action='update']");
    updateButton.dataset.id = pet.id;
    updateButton.textContent = pet.isAlive ? "Nak" : "Genopliv";
    deleteButton.addEventListener("click", async (e) => {
      await deletePet(pet.id);
      showPets();
    });
    updateButton.addEventListener("click", async (e) => {
      console.log(pet.id, "skal opdateres");
      await updatePet(pet.id, !pet.isAlive);
      showPets();
    });
    document.querySelector(".pets").appendChild(copy);
  });
}

showPets();
