/* Manejo de data 

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example; */

const datos = POKEMON.pokemon;
for(let i = 0; i < datos.length; i++)
{
    console.log(datos[i]); 
};

const filterDatos = datos.filter(element =>(
  console.log(element.type)
)); 
  

/*  console.log(datos[i].id);
    console.log(datos[i].num);
    console.log(datos[i].name);
    console.log(datos[i].img);
    console.log(datos[i].type);
    console.log(datos[i].height);
    console.log(datos[i].weight);
    console.log(datos[i].candy);
    console.log(datos[i].candy_count);
    console.log(datos[i].egg);
    console.log(datos[i].spawn_chance);
    console.log(datos[i].avg_spawns);
    console.log(datos[i].spawns_time);
    console.log(datos[i].multiplers);
    console.log(datos[i].weaknesses);
    console.log(datos[i].next_evolution);
*/