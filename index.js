import { getPets, deletePet, updatePet, addPet } from "./utils/petsdb.js";
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
      new Date().getFullYear() - pet.dob.slice(0, 4);
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

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  console.log("submitted");
  e.preventDefault();
  const formData = new FormData(form);

  let alive = true;
  if (formData.get("isAlive") == "no") {
    alive = false;
  }

  const newAnimal = {
    name: formData.get("name"),
    race: formData.get("race"),
    species: formData.get("species"),
    dob: formData.get("dob"),
    activityLevel: formData.get("activityLevel"),
    isAlive: alive,
    traits: formData.get("traits").split("\n"),
    image: formData.get("image"),
  };
  console.log("mit objekt:", newAnimal);
  await addPet(newAnimal);
  showPets();
});
