const cocteles = [
    {
        nombre: "Tequila Sunrise",
        precio: 120,
        nivelDificultad: "medio",
        alcohol: "tequila",
        ingredientes: ["tequila", "jugo de naranja", "granadina", "cereza"]
    },
    {
        nombre: "Mojito",
        precio: 150,
        nivelDificultad: "fácil",
        alcohol: "ron blanco",
        ingredientes: ["ron blanco", "menta fresca", "lima", "azúcar", "agua con gas"]
    },
    {
        nombre: "Piña Colada",
        precio: 140,
        nivelDificultad: "fácil",
        alcohol: "ron blanco",
        ingredientes: ["ron blanco", "crema de coco", "jugo de piña", "hielo"]
    },
    {
        nombre: "Daiquiri",
        precio: 130,
        nivelDificultad: "fácil",
        alcohol: "ron blanco",
        ingredientes: ["ron blanco", "limón", "azúcar", "hielo"]
    },
    {
        nombre: "Mai Tai",
        precio: 160,
        nivelDificultad: "medio",
        alcohol: "ron oscuro",
        ingredientes: ["ron oscuro", "ron blanco", "curaçao naranja", "almendra", "limón"]
    },
    {
        nombre: "Blue Lagoon",
        precio: 140,
        nivelDificultad: "fácil",
        alcohol: "vodka",
        ingredientes: ["vodka", "curaçao azul", "limón", "refresco de limón"]
    },
    {
        nombre: "Sex on the Beach",
        precio: 150,
        nivelDificultad: "fácil",
        alcohol: "vodka",
        ingredientes: ["vodka", "licor de durazno", "jugo de arándano", "jugo de naranja"]
    },
    {
        nombre: "Caipirinha",
        precio: 130,
        nivelDificultad: "fácil",
        alcohol: "cachaca",
        ingredientes: ["cachaca", "lima", "azúcar", "hielo"]
    },
    {
        nombre: "Whiskey Sour",
        precio: 140,
        nivelDificultad: "fácil",
        alcohol: "whisky",
        ingredientes: ["whisky", "limón", "azúcar"]
    },
    {
        nombre: "Cosmopolitan",
        precio: 160,
        nivelDificultad: "medio",
        alcohol: "vodka",
        ingredientes: ["vodka", "curaçao naranja", "jugo de arándano", "limón"]
    }
]
function obtenerIngredientes(nombre){
    while(nombre != "salir"){
       let coctelesFiltrados = cocteles.filter(coctel => coctel.nombre.toLocaleLowerCase() == nombre)
       coctelesFiltrados.forEach(coctel =>{
            alert("Los ingredientes del coctel " + coctel.nombre + " son: " + coctel.ingredientes)
       })
       console.log(coctelesFiltrados)
       nombre = prompt("Ingresa el cóctel que deseas 'Tequila Sunrise, Mojito, Piña Colada, Daiquiri, Mai Tai, Blue Lagoon, Sex on the Beach, Caipirinha, Whiskey Sour, Cosmopolitan'").toLowerCase()
    }
    alert ("Programa finalizado")
}
let nombre = prompt("Ingresa el cóctel que deseas 'Tequila Sunrise, Mojito, Piña Colada, Daiquiri, Mai Tai, Blue Lagoon, Sex on the Beach, Caipirinha, Whiskey Sour, Cosmopolitan'").toLowerCase()
obtenerIngredientes(nombre)