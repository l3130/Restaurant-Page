// Builds the homepage content and appends it to the #content element
export default function loadHomepage() {
	const content = document.getElementById('content');
	if (!content) return;

	// Clear any existing content
	content.innerHTML = '';

	const container = document.createElement('div');
	container.className = 'home-container';

	const hero = document.createElement('img');
	hero.src = 'https://via.placeholder.com/900x300?text=The+Cozy+Spoon';
	hero.alt = 'Restaurant interior';
	hero.className = 'hero-image';

	const headline = document.createElement('h1');
	headline.textContent = 'Welcome to The Cozy Spoon';

	const sub = document.createElement('h2');
	sub.textContent = 'A warm place for good food and great company';

	const para = document.createElement('p');
	para.textContent = 'At The Cozy Spoon we serve seasonal dishes crafted from local ingredients. Join us for breakfast, lunch, or dinner — and don\'t forget to try our signature desserts!';

	const info = document.createElement('p');
	info.innerHTML = '<strong>Hours:</strong> Mon–Sun 8am–10pm &nbsp; <strong>Phone:</strong> (555) 123-4567';

	container.appendChild(hero);
	container.appendChild(headline);
	container.appendChild(sub);
	container.appendChild(para);
	container.appendChild(info);

	content.appendChild(container);
}
