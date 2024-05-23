document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartIcon = document.getElementById('cartIcon');
    const cartContainer = document.getElementById('cartContainer');
    const contadorProductos = document.querySelector('.contador-productos');
    let cartItems = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const item = button.closest('.item');
            const productName = item.getAttribute('data-product');
            const productPrice = item.getAttribute('data-price');

            const existingItemIndex = cartItems.findIndex(cartItem => cartItem.name === productName);

            if (existingItemIndex !== -1) {
                cartItems[existingItemIndex].quantity += 1;
            } else {
                cartItems.push({
                    name: productName,
                    price: productPrice,
                    quantity: 1
                });
            }

            updateCart();
        });
    });

    cartIcon.addEventListener('click', () => {
        cartContainer.classList.toggle('show-cart');
    });

    function updateCart() {
        cartContainer.innerHTML = '';

        cartItems.forEach(item => {
            const cartProduct = document.createElement('div');
            cartProduct.classList.add('cart-product');

            const infoCartProduct = document.createElement('div');
            infoCartProduct.classList.add('info-cart-product');

            const quantitySpan = document.createElement('span');
            quantitySpan.classList.add('cantidad-producto-carrito');
            quantitySpan.textContent = item.quantity;

            const productTitle = document.createElement('p');
            productTitle.classList.add('titulo-producto-carrito');
            productTitle.textContent = item.name;

            infoCartProduct.appendChild(quantitySpan);
            infoCartProduct.appendChild(productTitle);

            const removeButton = document.createElement('svg');
            removeButton.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            removeButton.setAttribute('fill', 'none');
            removeButton.setAttribute('viewBox', '0 0 24 24');
            removeButton.setAttribute('stroke-width', '1.5');
            removeButton.setAttribute('stroke', 'currentColor');
            removeButton.classList.add('w-6', 'h-6');
            removeButton.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />';
            removeButton.addEventListener('click', () => {
                removeItemFromCart(item.name);
            });

            cartProduct.appendChild(infoCartProduct);
            cartProduct.appendChild(removeButton);
            cartContainer.appendChild(cartProduct);
        });

        contadorProductos.textContent = cartItems.length;
    }

    function removeItemFromCart(productName) {
        cartItems = cartItems.filter(item => item.name !== productName);
        updateCart();
    }
});
