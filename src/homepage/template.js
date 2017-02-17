var yo = require('yo-yo');

var sectionOne = function() {
  return yo`<div class="section white no-pad-top">
        <div class="section light-green darken-1 no-pad-bot start-splash-section z-depth-1">
          <div class="container start-splash-container">
            <div class="row">
              <div class="col s12 l6">
                <div class="white-text start-splash-header-content">
                  <span class="start-splash-header-text white-text">TTdigital</span>
                    <h3 class="white-text start-header-paragraph-text">Aplicación web para la gestión de guardas de tránsito.</h3>
                </div>
              </div>
              <div class="col s12 l6">
                <div class="splah-image-container">
                  <img src="mapa.png" class="splash-image">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
};

var sectionTwo = function() {
  return yo`<div class="section white" id="features">
        <div class="container">
          <div class="row">
            <div class="col s12 m6">
              <h5 class="start text-primarycolor">Características</h5>
              <p class="start-paragraph-text text-primarycolor">Monitorización, entrega de datos geolocalización, notificaciones, gestión de perfiles y registro de eventualidades</p>
              <ul style="margin-bottom: 16px;padding-left: 16px;">
                <li style="margin: 14px 0;padding: 0;list-style: initial;font-size: 14px;">Monitorización</li>
                <li style="margin: 14px 0;padding: 0;list-style: initial;font-size: 14px;">Geolocalización</li>
                <li style="margin: 14px 0;padding: 0;list-style: initial;font-size: 14px;">Notificaciones</li>
                <li style="margin: 14px 0;padding: 0;list-style: initial;font-size: 14px;">Gestión de perfiles</li>
                <li style="margin: 14px 0;padding: 0;list-style: initial;font-size: 14px;">Registro de eventualidades</li>
              </ul>
            </div>
            <div col s6 offset-s3 m6 center>
              imagen
            </div>
          </div>
        </div>
      </div>`;
};

var sectionThree = function() {
  return yo`<div class="section gray" id="support">
        <div class="container">
          <div class="row">
            <div class="col s12 m6">
              <h5 class="start text-primarycolor">Soporte & Documentación</h5>
              <p class="start-paragraph-text">Nuestro soporte de primera clase se proporciona a través de nuestro Portal de CRM y Base de Conocimientos.</p>
              <ul style="margin-bottom: 16px;padding-left: 16px;">
                <li style="margin: 14px 0;padding: 0;list-style: initial;font-size: 14px;">Registro de tickets con asistencia privada.</li>
                <li style="margin: 14px 0;padding: 0;list-style: initial;font-size: 14px;">Hable con nosotros por el chat.</li>
                <li style="margin: 14px 0;padding: 0;list-style: initial;font-size: 14px;">Un amplio FAQs, tutoriales a través de nuestro LMS Nobit, artículos y ejemplos.</li>
              </ul>
              <p>
                <a href="http://www.nobit.co/lms/" target="_blank" class="text-primarycolor">VISITA NUESTRO LMS</a>
              </p>
            </div>
          </div>
        </div>
      </div>`;
};

exports.sectionOne = sectionOne;
exports.sectionTwo = sectionTwo;
exports.sectionThree = sectionThree;
