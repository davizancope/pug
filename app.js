const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
	// Lesson #83 - Converting HTML files to Pug
	res.status(404).render('404', {
		pageTitle: 'Page Not Found!', // Lesson #86 Finishing the Pug Template
	});
});

app.listen(3000);
