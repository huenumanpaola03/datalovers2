// AQUI CREO UNA COSNTANTE QUE ME MUESTRE LA DATA.
const showData = window.POKEMON.pokemon;
// const container = document.getElementById("root");	
        for ( let i=0; i < showData.length; i++) {


			let result = document.createElement("div");
			result.id = "result";
			result.className = "pekecard";

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
		

	}	
  document.getElementById("filterType").addEventListener("change",() => {
  let tipoFilter = document.getElementById("filterType").value; 
  let lastResult = window.filterPokemon(showData,tipoFilter);
  
	window.cards.innerHTML ="";
	lastResult.forEach(element => {
		window.cards.innerHTML += `
		<div class="img">
	 <img src="${element.img}">
	 </div>
	 <h3>${element.type}</h3>
	 <p>${element.name}</p>`
 
 
	})
	});
