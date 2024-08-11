export function reduce_array_size(array, start_value, endvalue){
     const reduced_array = array.slice(start_value, endvalue);
     return reduced_array;
}
export function filter_array(array, id_value){
      const filtered_array = array.filter((items) => items.id === id_value);
      return filtered_array;
}
export function filter_array_by_status(array,  condition){
    const filtered_array = array.filter((items) => items.status === condition);
    return filtered_array;
}

export const scrollto = (id) => {
    const element = document.getElementById(id);
    if(element){
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
}

export const formatDate = (dateTime) => {
  const date = new Date(dateTime);
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  
  return formattedDate;
};