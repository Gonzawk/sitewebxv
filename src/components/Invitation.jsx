import Countdown from "./Countdown.jsx";
import Turntable from "./Turntable.jsx";


export default function Invitation() {
  return (
    <div className="page">
      <div className="invitation-canvas">

        {/* --- ENCABEZADO: discos + portada --- */}
        <div className="block disco-top-left">
          <img src="/bolaboliche/bolapng.png" alt="" />
        </div>

        <div className="block portada">
          <img src="/portadaimagen/portadaimagen.png" alt="" />
        </div>

        <div className="block disco-top-right">
          <img src="/bolaboliche/bolapng.png" alt="" />
        </div>

        <div className="block music-player">
        <Turntable />
        </div>

        {/* --- CALENDARIO --- */}
        <div className="block calendario">
          <img src="/calendario/calendario.png" alt="" />
        </div>

        <div className="block countdown-block">
         <Countdown targetDate="2025-12-06" />
        </div>

       

        {/* --- TEXTO "LUGAR Y HORA" --- */}
        <div className="block lugar-hora">
          <img src="/lugaryhora/LugarYHora.png" alt="" />
        </div>

        {/* --- BOTÓN UBICACIÓN --- */}
<div
  className="block btn-ubicacion"
  onClick={() => {
    const url = "https://maps.app.goo.gl/Ybzk59rCQCdkSh9N8";
    window.open(url, "_blank");
  }}
>
  <img src="/btnubicacion/UbicacionBoton.png" alt="Ver ubicación" />
</div>




<div className="block bola-extra-1">
  <img src="/bolaboliche/bolapng.png" alt="" />
</div>

         {/* --- COLLAGE DE FOTOS --- */}
        <div className="block collage">
          <img src="/fotoscollage/fotoscollage.png" alt="" />
        </div>

<div className="block bola-extra-2">
  <img src="/bolaboliche/bolapng.png" alt="" />
</div>


        {/* --- SOBRE CON TEXTO --- */}
        <div className="block sobre">
          <img src="/sobrecarta/SobreCarta.png" alt="" />
        </div>

        {/* --- BOTÓN CONFIRMAR ASISTENCIA --- */}
        <div
  className="block btn-confirmar"
  onClick={() => {
    const texto =
      "Hola! Confirmo mi asistencia al cumpleaños de Bianca";
    const url =
      "https://api.whatsapp.com/send?phone=5493832400766&text=" +
      encodeURIComponent(texto);

    window.open(url, "_blank");
  }}
>
  <img src="/btnwhatsapp/AsistenciaBoton.png" alt="Confirmar asistencia" />
</div>


<div className="texto-final">
  <p>
    Por cuestiones de cupo y organización, te pido confirmar asistencia 
    hasta el <strong>25 de Noviembre</strong>.<br />
    Una vez confirmes, te pasaré todos los detalles.
  </p>

 {/*  <p className="precio">
    VALOR DE LA TARJETA: <strong>$35.000</strong>
  </p> */}

  <p className="edad">
    Fiesta exclusiva para mayores <strong>(sin menores de edad)</strong>.
  </p>
</div>


{/* <div className="block bola-extra-3">
  <img src="/bolaboliche/bolapng.png" alt="" />
</div> */}

        {/* --- DRESS CODE --- */}
        <div className="block dresscode">
          <img src="/dresscode/dresscodeclean.png" alt="" />
        </div>

        {/* --- REGALO / ALIAS --- */}
        <div className="block regalo-alias">
          <img src="/regaloalias/regaloaliasclean.png" alt="" />
        </div>

        {/* --- PIE (discos + copa) --- */}
        <div className="block disco-bottom-left">
          <img src="/bolaboliche/bolapng.png" alt="" />
        </div>

        <div className="block copa-final">
          <img src="/botafinal/botafinal.png" alt="" />
        </div>

        <div className="block disco-bottom-right">
          <img src="/bolaboliche/bolapng.png" alt="" />
        </div>

      </div>
    </div>
  );
}
