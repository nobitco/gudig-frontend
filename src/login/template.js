var yo = require('yo-yo');

var tmpLogin = function(){
  return yo`<div class="section white" id="login">
        <div class="container">
          <div class="row">
            <div class="col s4 push-s4">
              <h5 class="start text-primarycolor center-align">Entrar!</h5>
              <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s12">
                      <i class="material-icons prefix">account_circle</i>
                      <input id="username" type="text" class="validate">
                      <label for="icon_prefix">Nombre de usuario:</label>
                    </div>
                    <div class="input-field col s12">
                      <i class="material-icons prefix">vpn_key</i>
                      <input id="password" type="password" class="validate">
                      <label for="icon_password">Contraseña:</label>
                    </div>
                    <div class="col s4 push-s4">
                      <input class="btn green center-align" type="submit" name="form_login" value="Ingresar">
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
