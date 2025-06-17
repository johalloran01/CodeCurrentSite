import { createCard } from './components/card.js';

const services = [
  {
    title: 'Website & Web App Development',
    text: 'Custom-built websites and applications using modern frameworks. Fast, responsive, and tailored to your goals.',
    imageUrl: 'media/code-svgrepo-com.svg',
    link: '#'
  },
  {
    title: 'UX/UI Design',
    text: 'Intuitive interfaces and clean design that enhance user experience across all devices and platforms.',
    imageUrl: 'media/design-svgrepo-com.svg',
    link: '#'
  },
  {
    title: 'Brand Identity & Creative',
    text: 'From logos to style guides — establish or refresh your brand with clarity and purpose.',
    imageUrl: 'media/brand-svgrepo-com.svg',
    link: '#'
  },
  {
    title: 'Technical Consulting',
    text: 'Guidance on architecture, integrations, and automation. Build smarter, scale efficiently.',
    imageUrl: 'media/gear-svgrepo-com.svg',
    link: '#'
  },
  {
    title: 'Deployment & Hosting',
    text: 'We handle the tech stack. Fast, secure, and reliable deployment with modern DevOps practices.',
    imageUrl: 'media/cloud-svgrepo-com.svg',
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
