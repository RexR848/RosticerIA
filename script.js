// Despliegue del menú móvil
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('open');
});

// Funcionalidad básica de "Añadir al carrito"
const addButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.getElementById('cart-items');

addButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.getAttribute('data-product');
    const li = document.createElement('li');
    li.textContent = productName;
    cartItems.appendChild(li);
    alert(productName + ' agregado al carrito.');
  });
});
