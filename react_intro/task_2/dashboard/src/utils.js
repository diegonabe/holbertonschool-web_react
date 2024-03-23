// task_1/dashboard/src/utils.js

// Función para obtener el año actual
export function getFullYear() {
  return new Date().getFullYear();
}

// Función para obtener el texto del pie de página
export function getFooterCopy(isIndex) {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
}

export function getLatestNotification() {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}
