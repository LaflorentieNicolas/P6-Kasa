import getLogements from "./getLogements";

export default async function getLogement(id) {
  const data = await getLogements();
  return data.find((item) => item.id === id);
}
