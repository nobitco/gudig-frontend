var page = require('page');
var empty = require('empty-element');
var template = require('./template');

page('/login', function(ctx, next){
	var main = document.getElementById('main');
	empty(main).appendChild(template.tmpLogin());
	var contact = document.getElementById('contact');
    empty(contact).appendChild(template.tmpCopyRight());
    contact.style.position = "fixed";
})