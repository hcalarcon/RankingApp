function getCurrentTime() {
  const currentTime = new Date(); // Obtiene la hora actual
  return formatDate(currentTime.toISOString()); // Formato de fecha y hora estándar
}

function formatDate(dateString) {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Los meses en JavaScript van de 0 a 11
  const year = String(date.getFullYear()).slice(2); // Tomamos solo los últimos dos dígitos del año
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}/${month}/${year}-${hours}:${minutes}`;
}

export default getCurrentTime;
