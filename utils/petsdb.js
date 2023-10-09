const myApiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3cndwdGlib3RseGx2Y2RlaWN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ3OTI4MDYsImV4cCI6MTk4MDM2ODgwNn0.FuHj1T6qJO-wQ_aWaaXNFVfZPG45FsnE3RvHd3PGQmA";
export async function getPets() {
  let headersList = {
    apikey: myApiKey,
    Accept: "application/json",
  };

  let response = await fetch(
    "https://uwrwptibotlxlvcdeicv.supabase.co/rest/v1/pets",
    {
      method: "GET",
      headers: headersList,
    }
  );

  let data = await response.json();
  return data;
}
export async function deletePet(id) {
  let headersList = {
    apikey: myApiKey,
    Accept: "application/json",
  };

  let response = await fetch(
    "https://uwrwptibotlxlvcdeicv.supabase.co/rest/v1/pets?id=eq." + id,
    {
      method: "DELETE",
      headers: headersList,
    }
  );

  /* let data = await response.json();
  console.log(data); */
}

export async function addPet() {
  let headersList = {
    apikey: myApiKey,
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    name: "Dr. Oetker",
    isAlive: false,
    traits: ["Hvid", "Hurtig", "Død"],
  });

  let response = await fetch(
    "https://uwrwptibotlxlvcdeicv.supabase.co/rest/v1/pets",
    {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    }
  );

  let data = await response.json();
  console.log(data);
}

export async function updatePet() {
  let headersList = {
    apikey: myApiKey,
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    race: "Golden Retriever",
    species: "Hund",
  });

  let response = await fetch(
    "https://uwrwptibotlxlvcdeicv.supabase.co/rest/v1/pets?id=eq.6",
    {
      method: "PATCH",
      body: bodyContent,
      headers: headersList,
    }
  );

  let data = await response.json();
  console.log(data);
}
