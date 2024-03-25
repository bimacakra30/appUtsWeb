//Javascript untuk login//
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        errorMessage.textContent = '';
        if (email === '' || password === '') {
            errorMessage.textContent = 'Please submit Email and Password';
            return;
        }
        const defaultEmail = 'biimackra@gmail.com';
        if (email.toLowerCase() !== defaultEmail) {
            errorMessage.textContent = 'Email Not Found, Please enter a active email';
            return;
        }
        if (password !== "233307070") {
            errorMessage.textContent = 'Password incorent, Please enter corrent password.';
            return;
        }
        window.location.href = 'order.html';
    });
});
//java script untuk orderan//
document.addEventListener("DOMContentLoaded", function () {
    const quantityInputs = document.querySelectorAll('.quantity-input');
    quantityInputs.forEach(input => {
        input.addEventListener('input', function () {
            updateTotalPrice();
        });
    });
    function updateTotalPrice() {
        const items = document.querySelectorAll('.order-item');
        let totalPrice = 0;
        items.forEach(item => {
            const priceElement = item.querySelector('.item-price');
            const quantityInput = item.querySelector('.quantity-input');
            const price = parseFloat(priceElement.textContent.replace('Rp ', '').replace('.', ''));
            const quantity = parseInt(quantityInput.value);
            totalPrice += price * quantity;
        });
        const totalPriceElement = document.querySelector('.total-price');
        totalPriceElement.textContent = formatPrice(totalPrice);
    }
    function formatPrice(price) {
        return 'Rp ' + price.toLocaleString('id-ID');
    }
    const placeOrderButton = document.getElementById("order-now-button");
    placeOrderButton.addEventListener("click", function () {
        const totalPrice = document.querySelector('.total-price').textContent;
        alert(`Order Complete! || Total Order: ${totalPrice}`);
    });
});