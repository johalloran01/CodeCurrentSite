export function mountComponent(containerSelector, component) {
    const container = document.querySelector(containerSelector);
    if (container) container.appendChild(component);
}
