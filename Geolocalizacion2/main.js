let latitud;
let longitud;
if(navigator.geolocation){
    //pedimos las coordenadas al navegador(posicion)
    navigator.geolocation.getCurrentPosition(
        (posicion)=>{
            latitud=posicion.coords.latitude
            longitud=posicion.coords.longitude
            ///////////////////////////////////////////////////////////////
            const ubicacion=[latitud,longitud]
            const map= L.map('map').setView(ubicacion,19)
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            let marcador=L.marker(ubicacion).addTo(map)
            marcador.bindPopup("<b>Estoy aqui</b><br>En la gloriosa UTHH. mis coordenadas son : "+latitud+" , Longitud : "+longitud)
            .openPopup()
        },
        (error)=>{
            alert("Imposible obtener las coordenadas por : "+error.message)
        })

}else{
    alert("Tu navegador no pela...")
}


