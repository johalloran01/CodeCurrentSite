import { createCard } from './components/card.js';

const services = [
  {
    title: 'Web Development',
    text: 'Responsive websites built with modern frameworks and clean code. Build something that looks good and represents you.',
    imageUrl: 'media/code-svgrepo-com.svg',
    link: '#'
  },
  {
    title: 'Brand Identity',
    text: 'Logos, style guides, and cohesive visual identity for your brand. Whether you want to digitize, vectorize, or design something entirely new, we can get you where you need to be.',
    imageUrl: 'media/brand-svgrepo-com.svg',
    link: '#'
  },
  {
    title: 'Technical Strategy',
    text: 'Consultation for scalable architecture, APIs, and integrations. Minimize expenditures and reliance on third party tools, let us show you how we can maximize your team\'s efficiency and output.',
    imageUrl: 'media/gear-svgrepo-com.svg',
    link: '#'
  }
];

// Outer fluid wrapper to span the page background
const sectionWrapper = document.createElement('div');
sectionWrapper.id = 'services-container';
sectionWrapper.className = 'container-fluid section-white no-gutter';

// Inner container to center content with left/right padding
const innerContainer = document.createElement('div');
innerContainer.className = 'container';

// Section content
const section = document.createElement('section');
section.id = 'services';
section.className = 'section-padding text-center';
section.innerHTML = `<h2 class="mb-4 services-heading">Services</h2>`;

// Grid of cards
const row = document.createElement('div');
row.className = 'row justify-content-center';

services.forEach(service => {
  const card = createCard(service);
  row.appendChild(card);
});

section.appendChild(row);
innerContainer.appendChild(section);
sectionWrapper.appendChild(innerContainer);

// Insert into DOM after the About section
document.getElementById('about-container').after(sectionWrapper);
