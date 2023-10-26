const coctelesIniciales = async () => {
    const respuesta = await fetch("json/inilistcocteles.json")
    const iniListCocteles = await respuesta.json()
    localStorage.setItem("listaCocteles", JSON.stringify(iniListCocteles))
} 
coctelesIniciales()
let cocteles = []


const busqueda = () =>{
    const buscar = document.getElementById("buscaCocteles")
    buscar.addEventListener("submit",(e)=>{
        e.preventDefault()
        const nombre = e.target.children["nombre"].value
        obtenerIngredientes(nombre.toLocaleLowerCase())
        obtenerAlcohol(nombre.toLocaleLowerCase())
        e.target.children["nombre"].value=""
    })

    const ejemplos = document.querySelectorAll(".select")
    ejemplos.forEach(ejemplo=>{
        ejemplo.addEventListener("click",(e)=>{
            e.preventDefault()
            const nombreEjemplo = e.target.getInnerHTML()
            notfound.innerHTML = ""
            obtenerIngredientes(nombreEjemplo.toLocaleLowerCase())
            obtenerAlcohol(nombreEjemplo.toLocaleLowerCase())
        })
    })

}

const obtenerIngredientes = (dato)=> {

    const contenedorCocteles = document.getElementById("contenedorCocteles")
    contenedorCocteles.innerHTML = ""
    notfound.innerHTML = ""
    cocteles = JSON.parse(localStorage.getItem("listaCocteles")) || []

    let coctelesFiltrados = cocteles.filter(coctel => coctel.nombre.toLocaleLowerCase().includes(dato))
    coctelesFiltrados.forEach(coctel => {
        let listingredientes=""
        coctel.ingredientes.forEach(ingrediente =>{
            listingredientes += ingrediente + " <br>"}
        )
        const tarjeta = document.createElement("div")
        tarjeta.className = "tarjeta"
        tarjeta.innerHTML = `
                             <div><h2>${coctel.nombre}</h2></div>
                            <div><img src="img/${coctel.srcImagen}.jpg" alt=""></div>
                            <div>
                                <p><b>Ingredientes</b> ${listingredientes}</p>
                                <p><b>Preparación</b> ${coctel.preparacion}</p>
                                <p><b>Nivel de dificultad</b> ${coctel.nivelDificultad}</p>
                            </div>
                            `
                            contenedorCocteles.append(tarjeta)
    }
    )
}
 const obtenerAlcohol = (dato)=> {
    const contenedorCocteles = document.getElementById("contenedorCocteles")
    cocteles = JSON.parse(localStorage.getItem("listaCocteles")) || []

    let searchAlcohol = cocteles.filter(coctel => coctel.alcohol.toLocaleLowerCase().includes(dato))
    searchAlcohol.forEach(coctel => {
        let listingredientes=""
        coctel.ingredientes.forEach(ingrediente =>{
            listingredientes += ingrediente + " <br>"}
        )
        const tarjeta = document.createElement("div")
        tarjeta.className = "tarjeta"
        tarjeta.innerHTML = `
                             <div><h2>${coctel.nombre}</h2></div>
                            <div><img src="img/${coctel.srcImagen}.jpg" alt=""></div>
                            <div>
                                <p><b>Ingredientes</b> ${listingredientes}</p>
                                p><b>Preparación</b> ${coctel.preparacion}</p>
                                <p><b>Nivel de dificultad</b> ${coctel.nivelDificultad}</p>
                            </div>
                            `
                            contenedorCocteles.append(tarjeta)
    }
    )
    if(contenedorCocteles.getInnerHTML() == '')
    {
        const tarjeta = document.createElement("div")
        tarjeta.className = "notfound"
        tarjeta.innerHTML = `
                             <div>¡Ooops! No encontramos resultados a tu búsqueda</div>
                            `
                            notfound.append(tarjeta)
    }
    
 }

busqueda()
obtenerIngredientes("")