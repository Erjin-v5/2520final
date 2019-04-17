const express = require('express');
const request = require('request');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 8080;

var app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

const funcode = require('./func');

const path = require('path');

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
});

hbs.registerHelper('message', (text) => {
	return text.toUpperCase();
});


app.get('/', (request, response) => {
	response.render('home.hbs', {
		title: 'Home page',
		welcome: 'Hello!'
	});
});

app.get('/search', (request, response) => {
	response.render('search.hbs', {
		title: 'Search page',
		welcome: 'Hello!'
	});
});

app.get('/card', (request, response) => {
	response.render('card.hbs', {
		title: 'Card page',
		welcome: 'Hello!'
	});
});

app.get('/displaycard', (request, response) => {
	response.render('displaycard.hbs', {
		title: 'Display Card page',
		welcome: 'Hello!'
	});
});

var detail = '';

hbs.registerHelper('getImage', () => {
	funcode.getImage('dog').then((result) => {
		detail = result
	}).catch((error) => {
		detail = error
	})
	return detail
})

app.listen(port, () => {
	console.log(`Server is up on the port ${port}`);
});