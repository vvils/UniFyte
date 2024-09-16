export async function getPetitions() {
  try {
    const res = await fetch("http://localhost:3000/api/petitions/", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
export async function getPetition(id: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/petitions/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
