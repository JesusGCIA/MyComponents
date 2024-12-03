document.addEventListener('DOMContentLoaded', function() {
    // Obtener todas las cards
    const cards = document.querySelectorAll('.product-one');
    
    // Iterar sobre cada card
    cards.forEach(card => {
        const decreaseButton = card.querySelector('.product-one__button--decrease');
        const increaseButton = card.querySelector('.product-one__button--increase');
        const quantityElement = card.querySelector('.product-one__quantity');

        // Asegurarse de que contenteditable solo permita números
        quantityElement.addEventListener('input', function() {
            let value = quantityElement.textContent.trim();
            if (!/^\d+$/.test(value)) {
                quantityElement.textContent = value.replace(/[^0-9]/g, ''); // Remover caracteres no numéricos
            }
            updateQuantityVisibility(); // Actualizar visibilidad de los botones
        });

        // Función para actualizar la cantidad
        function updateQuantity(increase) {
            let currentQuantity = parseInt(quantityElement.textContent.trim(), 10);

            if (isNaN(currentQuantity) || currentQuantity <= 0) {
                currentQuantity = 1; // Establecer a 1 si no es un número válido o es 0
            }

            // Asegurarse de que la cantidad no sea menor que 1
            if (increase) {
                currentQuantity++;
            } else {
                if (currentQuantity > 1) {
                    currentQuantity--;
                }
            }

            quantityElement.textContent = currentQuantity;
            updateQuantityVisibility(); // Actualizar visibilidad de los botones después de cambiar la cantidad
        }

        // Función para actualizar la visibilidad del botón "-"
        function updateQuantityVisibility() {
            let currentQuantity = parseInt(quantityElement.textContent.trim(), 10);
            if (currentQuantity <= 1) {
                decreaseButton.style.display = 'none'; // Ocultar el botón si la cantidad es 1 o menos
            } else {
                decreaseButton.style.display = 'inline-block'; // Mostrar el botón si la cantidad es mayor a 1
            }
        }

        // Inicializar la visibilidad de los botones cuando la página se carga
        updateQuantityVisibility();

        // Evento para decrementar
        decreaseButton.addEventListener('click', function() {
            updateQuantity(false);
        });

        // Evento para incrementar
        increaseButton.addEventListener('click', function() {
            updateQuantity(true);
        });
    });
});
