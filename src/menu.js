// Builds the Menu tab content and appends it to the #content element
export default function loadMenu() {
	const content = document.getElementById('content');
	if (!content) return;

	const container = document.createElement('div');
	container.className = 'menu-container';

	const title = document.createElement('h1');
	title.textContent = 'Our Menu';

	const intro = document.createElement('p');
	intro.textContent = 'Fresh seasonal dishes prepared with care. Browse some of our highlights below.';

	const list = document.createElement('div');
	list.className = 'menu-list';

	const items = [
		{ name: 'Honey-Glazed Pancakes', desc: 'Buttery pancakes topped with our house honey glaze.', price: '$8' },
		{ name: 'Savory Breakfast Bowl', desc: 'Quinoa, roasted veg, poached egg, and herb drizzle.', price: '$11' },
		{ name: 'Signature Toast', desc: 'Sourdough with smashed avocado, radish and lemon.', price: '$9' },
		{ name: 'Berry Parfait', desc: 'Layers of yogurt, granola and seasonal berries.', price: '$6' }
	];

	items.forEach(it => {
		const item = document.createElement('div');
		item.className = 'menu-item';

		const h = document.createElement('h3');
		h.textContent = `${it.name} — ${it.price}`;

		const d = document.createElement('p');
		d.textContent = it.desc;

		item.appendChild(h);
		item.appendChild(d);
		list.appendChild(item);
	});

	container.appendChild(title);
	container.appendChild(intro);
	container.appendChild(list);

	content.appendChild(container);
}
