const crearProducto=()=>{
    const titulo=document.getElementById("titulo").value
    const precio=document.getElementById("precio").value
    const categoria =document.getElementById("categoria").value
    const descripcion=document.getElementById("descripcion").value
    const mensaje=document.getElementById("mensaje-exito")

    //validamos que las cajas no esten vacias 
    if(!titulo||!precio||!descripcion){
        alert("Favor de llenar los campos obligatorios...")
        return
    }

    //preparamos el objeto que se va a ir al post
    const producto={
        title:titulo,
        price:parseFloat(precio),
        category:categoria,
        description:descripcion,
        thumbnail:'ruta.jpg'///
    }

    //realizamos el fetch con el metodo post
    fetch('https://dummyjson.com/products/add',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(producto)
    })
    .then((respuesta)=>respuesta.json())
    .then(producto=>{
        console.log(producto)
    })


}