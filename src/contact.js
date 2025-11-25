// Builds the Contact tab content and appends it to the #content element
export default function loadContact() {
	const content = document.getElementById('content');
	if (!content) return;

	const container = document.createElement('div');
	container.className = 'contact-container';

	const title = document.createElement('h1');
	title.textContent = 'Contact Us';

	const address = document.createElement('div');
	address.className = 'contact-block';
	address.innerHTML = '<h3>Location</h3><p>123 Honeycomb Lane<br/>Sweetville, SV 12345</p>';

	const hours = document.createElement('div');
	hours.className = 'contact-block';
	hours.innerHTML = `<h3>Hours</h3>
		<p>Sunday: 8am - 8pm<br/>Monday: 6am - 6pm<br/>Tuesday: 6am - 6pm<br/>Wednesday: 6am - 6pm<br/>Thursday: 6am - 10pm<br/>Friday: 6am - 10pm<br/>Saturday: 8am - 10pm</p>`;

	const phone = document.createElement('div');
	phone.className = 'contact-block';
	phone.innerHTML = '<h3>Phone</h3><p>(555) 123-4567</p>';

	container.appendChild(title);
	container.appendChild(address);
	container.appendChild(hours);
	container.appendChild(phone);

	content.appendChild(container);
}
