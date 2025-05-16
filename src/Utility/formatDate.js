export function shortDate(date) {
    const months = [
      'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
      'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
    ];
  
    const newDate = new Date(date);
    const day = String(newDate.getDate()).padStart(2, '0');
    const month = months[newDate.getMonth()];
    const year = newDate.getFullYear();
  
    return `${day}-${month}-${year}`;
  }
  