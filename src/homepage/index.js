var page = require('page');
var empty = require('empty-element');
var template = require('./template');

page('/', function(ctx, next) {
	var main = document.getElementById('main');
    main.appendChild(template.sectionOne());
    main.appendChild(template.sectionTwo());
    main.appendChild(template.sectionThree());
})
