const myApiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3cndwdGlib3RseGx2Y2RlaWN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ3OTI4MDYsImV4cCI6MTk4MDM2ODgwNn0.FuHj1T6qJO-wQ_aWaaXNFVfZPG45FsnE3RvHd3PGQmA";

export async function getPets() {
  let headersList = {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3cndwdGlib3RseGx2Y2RlaWN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ3OTI4MDYsImV4cCI6MTk4MDM2ODgwNn0.FuHj1T6qJO-wQ_aWaaXNFVfZPG45FsnE3RvHd3PGQmA",
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
  console.log("sletter nu:", id);
  let headersList = {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3cndwdGlib3RseGx2Y2RlaWN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ3OTI4MDYsImV4cCI6MTk4MDM2ODgwNn0.FuHj1T6qJO-wQ_aWaaXNFVfZPG45FsnE3RvHd3PGQmA",
    Accept: "application/json",
    Prefer: "return=representation",
  };

  let response = await fetch(
    "https://uwrwptibotlxlvcdeicv.supabase.co/rest/v1/pets?id=eq." + id,
    {
      method: "DELETE",
      headers: headersList,
    }
  );

  let data = await response.json();
  return data;
}

export async function addPet() {
  let headersList = {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3cndwdGlib3RseGx2Y2RlaWN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ3OTI4MDYsImV4cCI6MTk4MDM2ODgwNn0.FuHj1T6qJO-wQ_aWaaXNFVfZPG45FsnE3RvHd3PGQmA",
    Accept: "application/json",
    Prefer: "return=representation",
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
  return data;
}

export async function updatePet(id) {
  let headersList = {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3cndwdGlib3RseGx2Y2RlaWN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ3OTI4MDYsImV4cCI6MTk4MDM2ODgwNn0.FuHj1T6qJO-wQ_aWaaXNFVfZPG45FsnE3RvHd3PGQmA",
    Prefer: "return=representation",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    isAlive: false,
  });

  let response = await fetch(
    "https://uwrwptibotlxlvcdeicv.supabase.co/rest/v1/pets?id=eq." + id,
    {
      method: "PATCH",
      body: bodyContent,
      headers: headersList,
    }
  );

  let data = await response.json();
  return data;
}
