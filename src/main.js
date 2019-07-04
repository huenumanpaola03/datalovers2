/* Manejo del DOM */
const selectName = document.getElementById("filterType");
//console.log(selectName); 
selectName.addEventListener('change', ()=> {
    let condition = selectName.options[selectName.selectedIndex].value;
    console.log(condition)
})

