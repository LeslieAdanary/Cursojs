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
    const cargaItem = document.getElementById("buscaCocteles")
    cargaItem.addEventListener("button",(e)=>{
        e.preventDefault()
        const nombre = e.target.children["nombre"]
        obtenerIngredientes(nombre)
    })
}

const obtenerIngredientes = (nombre)=> {

    const contenedorCocteles = document.getElementById("contenedorCocteles")
    contenedorCocteles.innerHTML = ""

    cocteles = JSON.parse(localStorage.getItem("listaCocteles")) || []

    let coctelesFiltrados = cocteles.filter(coctel => coctel.nombre.toLocaleLowerCase() == nombre)
    coctelesFiltrados.forEach(coctel => {
        const tarjeta = document.createElement("div")
        tarjeta.className = "tarjeta"
        tarjeta.innerHTML = `
                            <div><img src="" alt=""></div>
                            <div>
                                <h2>Hola</h2>
                                <p>Heri</p>
                                <P>me amas?</P>
                            </div>
                            `
                            contenedorCocteles.append(tarjeta)
        // alert("Los ingredientes del coctel " + coctel.nombre + " son: " + coctel.ingredientes)
    })
    
}
// function obtenerIngredientes(nombre){
//     while(nombre != "salir"){
//        let coctelesFiltrados = cocteles.filter(coctel => coctel.nombre.toLocaleLowerCase() == nombre)
//        coctelesFiltrados.forEach(coctel =>{
//             alert("Los ingredientes del coctel " + coctel.nombre + " son: " + coctel.ingredientes)
//        })
//        console.log(coctelesFiltrados)
//        nombre = prompt("Ingresa el cóctel que deseas 'Tequila Sunrise, Mojito, Piña Colada, Daiquiri, Mai Tai, Blue Lagoon, Sex on the Beach, Caipirinha, Whiskey Sour, Cosmopolitan'").toLowerCase()
//     }
//     alert ("Programa finalizado")
// }
// let nombre = prompt("Ingresa el cóctel que deseas 'Tequila Sunrise, Mojito, Piña Colada, Daiquiri, Mai Tai, Blue Lagoon, Sex on the Beach, Caipirinha, Whiskey Sour, Cosmopolitan'").toLowerCase()
// obtenerIngredientes(nombre)

busqueda()