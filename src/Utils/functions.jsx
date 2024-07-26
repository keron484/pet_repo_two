export function reduce_array_size(array, start_value, endvalue){
     const reduced_array = array.slice(start_value, endvalue);
     return reduced_array;
}
export function filter_array(array, id_value){
      const filtered_array = array.filter((items) => items.id === id_value);
      return filtered_array;
}