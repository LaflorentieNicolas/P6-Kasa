async function getAboutContent() {
  try {
    const response = await fetch("/about.json");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export default getAboutContent;
