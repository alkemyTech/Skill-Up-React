const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

function formatDate(date) {
  const transformDate = new Date(date);

  const day = transformDate.getDate();
  const month = MONTHS[transformDate.getMonth()];
  const year = transformDate.getFullYear();

  const hour = transformDate.getHours();
  const minutes = transformDate.getMinutes();

  //return
  return {
    tipo1: `${month} ${day}, ${year}`,
    tipo2: `${day} ${month.slice(0, 3)}, ${year} a las ${hour}hrs`,
  };
}

export default formatDate;
