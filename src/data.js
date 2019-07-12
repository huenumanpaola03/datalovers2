const filterPokemon = (showData,type) => {
  let result= showData.filter(element => {
  return element.type.includes(type);
})
  return result;
} 
window.filterPokemon = filterPokemon;