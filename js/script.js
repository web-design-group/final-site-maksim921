


document.addEventListener('DOMContentLoaded', () => {
    console.log('Скрипты Экстрим-Драйв загружены');

   
    const cartBtn = document.querySelector('.cart-btn');
    const cartBadge = document.getElementById('cart-badge');
    let cartCount = 0;

    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
           
            cartCount++;
            
           
            if (cartBadge) {
                cartBadge.innerText = cartCount;
                
                
                if (cartCount > 0) {
                    cartBadge.classList.remove('hidden');
                }
            }
            
            console.log(`Товар добавлен в корзину. Всего: ${cartCount}`);
        });
    }
});
