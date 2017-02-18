var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function(ctx, next) {
	title('TTdigital');
	var main = document.getElementById('main');
    empty(main).appendChild(template.sectionOne());
    main.appendChild(template.sectionTwo());
    main.appendChild(template.sectionThree());
    var contact = document.getElementById('contact');
    empty(contact).appendChild(template.tmpContactanos());
    contact.appendChild(template.tmpCopyRight());
    contact.style.position = "relative";
})
