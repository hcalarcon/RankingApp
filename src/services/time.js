function getCurrentTime() {
  const currentTime = new Date(); // Obtiene la hora actual
  return formatDate(currentTime.toISOString()); // Formato de fecha y hora estándar
}

function formatDate(dateString) {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(2);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const segundos = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${segundos}`;
}

export default getCurrentTime;
