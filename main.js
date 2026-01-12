const coleccion_materias=[
    {
        nombre:"Estructura de datos",
        cuatrimestre:4,
        docente:"Med. Efren Juarez",
        estado:false,
        carrera:"TIC"
    },
    {
        nombre:"Aplicaciones Moviles",
        cuatrimestre:4,
        docente:"Luis Alberto Mendoza",
        estado:false,
        carrera:"TIC"
    },
    {
        nombre:"Ecuaciones diferenciales",
        cuatrimestre:5,
        docente:"Heidi del carmen",
        estado:true,
        carrera:"TIC"
    },
    {
        nombre:"Base de datos avanzadas",
        cuatrimestre:5,
        docente:"Carlos Andres Rodriguez",
        estado:true,
        carrera:"TIC"
    }
]

const muestra=()=>{
    //rescatamos el div contenedor para poder trabajar con el 
    const contenedor=document.getElementById("contenedor")

    //limpiamos el contenedor para volver a cargar en el 
    contenedor.innerHTML=""

    coleccion_materias.forEach((materia)=>{
        if(materia.estado==true){
            contenedor.innerHTML+="<div class='tarjeta'>"+materia.nombre+"</p></div>"
        }
    })

    

    
}