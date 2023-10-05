const iniCocteles = [
    {
        nombre: "Tequila Sunrise",
        nivelDificultad: "medio",
        alcohol: "tequila",
        ingredientes: ["1 1/2 oz de tequila", "3/4 de jugo de naranja", "2 cucharadas de granadina", "cereza para decorar"],
        srcImagen: "img_TequilaSunrise"
    },
    {
        nombre: "Mojito",
        nivelDificultad: "fácil",
        alcohol: "ron blanco",
        ingredientes: ["ron blanco", "menta fresca", "lima", "azúcar", "agua con gas"],
        srcImagen: "img_Mojito"
    },
    {
        nombre: "Mojito",
        nivelDificultad: "fácil",
        alcohol: "ron blanco",
        ingredientes: ["ron blanco", "menta fresca", "lima", "azúcar", "agua con gas", "frutos rojos"],
        srcImagen: "img_MojitoFrutos"
    },
    {
        nombre: "Piña Colada",
        nivelDificultad: "fácil",
        alcohol: "ron blanco",
        ingredientes: ["ron blanco", "crema de coco", "jugo de piña", "hielo"],
        srcImagen: "img_PinaColada"
    },
    {
        nombre: "Daiquiri",
        nivelDificultad: "fácil",
        alcohol: "ron blanco",
        ingredientes: ["ron blanco", "limón", "azúcar", "hielo"],
        srcImagen: "img_Daiquiri"
    },
    {
        nombre: "Mai Tai",
        nivelDificultad: "medio",
        alcohol: "ron oscuro",
        ingredientes: ["ron oscuro", "ron blanco", "curaçao naranja", "almendra", "limón"],
        srcImagen: "img_MaiTai"
    },
    {
        nombre: "Blue Lagoon",
        nivelDificultad: "fácil",
        alcohol: "vodka",
        ingredientes: ["vodka", "curaçao azul", "limón", "refresco de limón"],
        srcImagen: "img_BlueLagon"
    },
    {
        nombre: "Sex on the Beach",
        nivelDificultad: "fácil",
        alcohol: "vodka",
        ingredientes: ["vodka", "licor de durazno", "jugo de arándano", "jugo de naranja"],
        srcImagen: "img_SexOnTheBeach"
    },
    {
        nombre: "Caipirinha",
        nivelDificultad: "fácil",
        alcohol: "cachaca",
        ingredientes: ["cachaca", "lima", "azúcar", "hielo"],
        srcImagen: "img_Caipirinha"
    },
    {
        nombre: "Whiskey Sour",
        nivelDificultad: "fácil",
        alcohol: "whisky",
        ingredientes: ["whisky", "limón", "azúcar"],
        srcImagen: "img_WhiskeySour"
    },
    {
        nombre: "Cosmopolitan",
        nivelDificultad: "medio",
        alcohol: "vodka",
        ingredientes: ["vodka", "curaçao naranja", "jugo de arándano", "limón"],
        srcImagen: "img_Cosmopolitan"
    }
]

let cocteles = []
const prodJson = JSON.stringify(iniCocteles)
localStorage.setItem("listaCocteles", prodJson)


const busqueda = () =>{
    const buscar = document.getElementById("buscaCocteles")
    buscar.addEventListener("submit",(e)=>{
        e.preventDefault()
        const nombre = e.target.children["nombre"].value
        obtenerIngredientes(nombre)
    })
}

const obtenerIngredientes = (nombre)=> {

    const contenedorCocteles = document.getElementById("contenedorCocteles")
    contenedorCocteles.innerHTML = ""

    cocteles = JSON.parse(localStorage.getItem("listaCocteles")) || []

    let coctelesFiltrados = cocteles.filter(coctel => coctel.nombre.toLocaleLowerCase() == nombre)
    coctelesFiltrados.forEach(coctel => {
        let listingredientes=""
        coctel.ingredientes.forEach(ingrediente =>{
            listingredientes += ingrediente + " <br>"}
        )
        const tarjeta = document.createElement("div")
        tarjeta.className = "tarjeta"
        tarjeta.innerHTML = `
                            <div><img src="img/${coctel.srcImagen}.jpg" alt=""></div>
                            <div>
                                <h2>${coctel.nombre}</h2>
                                <p><b>Ingredientes</b> <br> ${listingredientes}</p>
                                <p><b>Nivel de dificultad</b> <br> ${coctel.nivelDificultad}</p>
                            </div>
                            `
                            contenedorCocteles.append(tarjeta)
    })
    
}

busqueda()