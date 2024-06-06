async function getLogements() {
  try {
    const response = await fetch("/logements.json");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export default getLogements;
