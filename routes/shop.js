const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
	// Lesson #82 Outputting Dynamic Content
	const products = adminData.products;
	res.render('shop', {
		prods: products,
		pageTitle: 'Shop',
		path: '/Shop', // Lesson #86 Finishing the Pug Template
	});
});

module.exports = router;
