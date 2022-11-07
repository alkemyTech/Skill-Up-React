const MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function formatDate(date) {
    const transformDate = new Date(date);

    const day = transformDate.getDate();
    const month = MONTHS[transformDate.getMonth()];
    const year = transformDate.getFullYear();

    const hour = transformDate.getHours();
    const minutes = transformDate.getMinutes();

    return `${month} ${day}, ${year}`
    // return `${day} de ${month.slice(0,3)} de ${year} a las ${hour}:${minutes}`;
}

export default formatDate