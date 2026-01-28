const selectUser = document.getElementById("select-usuario");
const muroDiv=document.getElementById("muro");
const avatarImg=document.getElementById("avatar-img");
const nombreUser=document.getElementById("nombre-usuario");

//hacemos el fetch para cargar los usuarios en el select
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(usuarios=>{
    usuarios.forEach(usuario=>{
        const opcion='<option value="'+usuario.id+'"> '+ usuario.name +' </option>'
        selectUser.innerHTML+=opcion
    })
})