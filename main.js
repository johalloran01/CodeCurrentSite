import { createCard } from './components/card.js';

const services = [
    {
        title: 'Web Development',
        text: 'Responsive websites built with modern frameworks and clean code.',
        imageUrl: 'media/code-svgrepo-com.svg',
        link: '#'
    },
    {
        title: 'Brand Identity',
        text: 'Logos, style guides, and cohesive visual identity for your brand.',
        imageUrl: 'media/brand-svgrepo-com.svg',
        link: '#'
    },
    {
        title: 'Technical Strategy',
        text: 'Consultation for scalable architecture, APIs, and integrations.',
        imageUrl: 'media/gear-svgrepo-com.svg',
        link: '#'
    }
];

const sectionWrapper = document.createElement('div');
sectionWrapper.className = 'container-fluid section-white no-gutter';

const section = document.createElement('section');
section.className = 'section-padding text-center';
section.innerHTML = `<h2 class="mb-4 services-heading">Services</h2>`;


const row = document.createElement('div');
row.className = 'row justify-content-center';

services.forEach(service => {
    const card = createCard(service);
    row.appendChild(card);
});

section.appendChild(row);
sectionWrapper.appendChild(section);
document.getElementById('about-container').after(sectionWrapper);