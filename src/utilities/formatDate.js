export const formatDate = (date) => {
    let result = '';
    const parts = date.split('-');

    if (parts.length === 3) {
        const dia = parts[2].slice(0, 2);
        result = `${dia}/${parts[1]}/${parts[0]}`;
    }

    return result;
};
