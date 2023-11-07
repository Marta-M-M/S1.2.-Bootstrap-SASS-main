

const li = document.querySelectorAll('.li');
const bloque = document.querySelectorAll('.bloque');

//Cuando hacemos clik en un li
    //todos .li  quitar la clase activo
    // todos los .bloque quitar clase activo
    // .li con la posición le añadimos la clase activo
    // .bloque con la posición le añadimos la clase activo


    li.forEach( (cadaLi , i )=>{
        li[i].addEventListener('click', ()=>{

            li.forEach( (cadaLi , i )=>{
                li[i].classList.remove('activo');
                bloque[i].classList.remove('activo');
        })

        li[i].classList.add('activo');
        bloque[i].classList.add('activo');

    })
    
})

