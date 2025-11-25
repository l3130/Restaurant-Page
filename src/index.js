// src/index.js
import './styles.css';
import loadHomepage from './homepage.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

function clearContent() {
	const content = document.getElementById('content');
	if (content) content.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', () => {
	// initial load
	loadHomepage();

	// nav buttons
	const homeBtn = document.getElementById('home-btn');
	const menuBtn = document.getElementById('menu-btn');
	const contactBtn = document.getElementById('contact-btn');

	if (homeBtn) homeBtn.addEventListener('click', (e) => {
		e.preventDefault();
		clearContent();
		loadHomepage();
	});

	if (menuBtn) menuBtn.addEventListener('click', (e) => {
		e.preventDefault();
		clearContent();
		loadMenu();
	});

	if (contactBtn) contactBtn.addEventListener('click', (e) => {
		e.preventDefault();
		clearContent();
		loadContact();
	});
});