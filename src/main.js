// AQUI CREO UNA COSNTANTE QUE ME MUESTRE LA DATA.
const showData = window.POKEMON.pokemon;
	
         for ( let i=0; i < showData.length; i++) {

			let result = document.createElement("div");
			result.id = "result";
			
			let name= document.createElement("h3");
			name.textContent = showData[i].name; 

			let egg= document.createElement("p");
			egg.textContent = showData[i].egg; 

			//let type= documente.createElement("p");
			//type.textContent =  showData[i].type; 
        
			let imagen = document.createElement("img");
			imagen.src = showData[i].img;
			
			result.appendChild(name);
			result.appendChild(egg); 
			//result.appendChild(type); 
			result.appendChild(imagen);
			document.getElementById("cards").appendChild(result).innerHTML; 	
		

		console.log(result);
	}
	
/*	var array1 = [];

array1.forEach(function(element) {
  console.log(element);
});

*/