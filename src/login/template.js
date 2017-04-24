var yo = require('yo-yo');

var tmpLogin = function(){
  return yo`<div class="section" id="login">
        <div class="container">
          <div class="row">
            <div class="col s10 m8 l4 push-s1 push-m2 push-l4">
              
              <div class="row">
                <div class="col s11 push-s1">
                  <h4 class="start white-text left-align">Gudig</h4>
                  <h6 class="grey-text left-align">Login</h6>
                </div>
                <form class="col s12 " id="login-form" action="/signin" method="POST">
                  <div class="row">
                    <div class="input-field col s12">
                      <i class="material-icons prefix">person</i>
                      <input id="username" name="username" type="text" class="validate">
                      <label for="icon_prefix">Nombre de usuario:</label>
                    </div>
                    <div class="input-field col s12">
                      <i class="material-icons prefix">lock</i>
                      <input id="password" name="password" type="password" class="validate">
                      <label for="icon_password">Contraseña:</label>
                    </div>
                    <div class="col s12">
                      <input class="btn col s10 m7 push-s1 push-m5 reflective bold center-align" id="login-btn" type="submit" name="form_login" value="Ingresar">
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>`;
};

var tmpCopyRight = function(){
  return yo`<div class="footer-copyright">
        <div class="container">
          <span class="white-text">© 2017<a href="http://www.nobit.co/portal/" class="white-text" target="_blank"> Nobit S.A.S</a></span>
        </div>
      </div>`;
};

exports.tmpLogin = tmpLogin;
exports.tmpCopyRight = tmpCopyRight;
