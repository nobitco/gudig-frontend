var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/login', function(ctx, next){
	title('TTdigital - Login');
	var main = document.getElementById('main');
  document.body.id = "login-view";
	empty(main).appendChild(template.tmpLogin());
	//var contact = document.getElementById('contact');
  //empty(contact).appendChild(template.tmpCopyRight());
  //contact.style.position = "fixed";
})