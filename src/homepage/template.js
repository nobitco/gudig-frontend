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

var tmpContactanos = function() {
  return yo`<div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Contáctanos!</h5>
            <form class="s12" action="contact.php" method="post" id="contactForm">
              <div class="row">
                <div class="input-field col s6">
                  <i class="mdi material-icons white-text prefix">perm_identity</i>
                  <input type="text" name="name" class="validate white-text">
                  <label for="nombre" class="white-text">Nombre</label>
                </div>
                <div class="input-field col s6">
                  <i class="mdi material-icons white-text prefix">email</i>
                  <input type="text" name="email" class="validate white-text">
                  <label for="email" class="white-text">Email</label>
                </div>
                <div class="input-field col s12">
                  <i class="mdi material-icons white-text prefix">mode_edit</i>
                  <textarea id="message" name="message" class="materialize-textarea white-text" style="padding-bottom: 0px; heigth=22px;"></textarea>
                  <label for="message" class="white-text">Tu mensaje</label>
                </div>
                <div class="input-field col s12 offset-m6 m6 l12">
                  <i class="mdi material-icons white-text prefix">mode_edit</i>
                  <img src="captcha.png" class="right" width="45px" style="margin-top:-20px;">
                  <input type="text" name="captcha" id="captcha" maxlength="6" size="6" class="validate white-text">
                  <label for="captcha" class="white-text">Número de verificación</label>
                </div>
                <div class="col offset-s7 s5">
                <button class="btn waves-effect waves-light white light-green-text text-darken-2 right" type="submit">Send<i class="mdi material-icons right text-darken-2">send</i></button>
                </div>
              </div>
            </form>
          </div>
          <div class="col offset-l2 l4 s12" style="text-align: right;">
            <h5 class="white-text">Contacto</h5>
            <ul>
              <li>
                <span class="white-text">
                  Nobit S.A.S
                  <br>
                  7ma-792. Santander de Quilichao. Cauca. Colombia
                </span> 
              </li>
              <li>
                <a href="#" class="white-text">jesmqz@gmail.com</a>
              </li>
              <li><span class="white-text">Tel: +57 311-7075824</span></li>
            </ul>
          </div>
        </div>
      </div>`
};

var tmpCopyRight = function() {
  return yo`<div class="footer-copyright">
        <div class="container">
          <span class="white-text">© 2017<a href="http://www.nobit.co/portal/" class="white-text" target="_blank"> Nobit S.A.S</a></span>
        </div>
      </div>`;
};

exports.sectionOne = sectionOne;
exports.sectionTwo = sectionTwo;
exports.sectionThree = sectionThree;
exports.tmpContactanos = tmpContactanos;
exports.tmpCopyRight = tmpCopyRight;
