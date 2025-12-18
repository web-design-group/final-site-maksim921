//  Здесь находится логика взаимодействия с элементами страницы.


document.addEventListener('DOMContentLoaded', () => {
    console.log('Скрипты Экстрим-Драйв загружены');

    // Пример логики: Взаимодействие с корзиной
    const cartBtn = document.querySelector('.cart-btn');
    const cartBadge = document.getElementById('cart-badge');
    let cartCount = 0;

    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            // Увеличиваем счетчик товаров
            cartCount++;
            
            // Обновляем текст в бейдже
            if (cartBadge) {
                cartBadge.innerText = cartCount;
                
                // Убираем класс hidden, чтобы показать бейдж, если товаров > 0
                if (cartCount > 0) {
                    cartBadge.classList.remove('hidden');
                }
            }
            
            console.log(`Товар добавлен в корзину. Всего: ${cartCount}`);
        });
    }
});