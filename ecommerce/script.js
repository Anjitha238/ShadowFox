document.getElementById('categoryFilter').addEventListener('change', function () {
    const selectedCategory = this.value;
    const products = document.querySelectorAll('.product-box');

    products.forEach(product => {
        const category = product.getAttribute('data-category');
        if (selectedCategory === 'all' || category === selectedCategory) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

// FILTER PRODUCTS BY CATEGORY
document.getElementById('categoryFilter')?.addEventListener('change', function () {
    const selectedCategory = this.value;
    const products = document.querySelectorAll('.product-box');

    products.forEach(product => {
        const category = product.getAttribute('data-category');
        product.style.display = selectedCategory === 'all' || category === selectedCategory ? 'block' : 'none';
    });
});

// SORT PRODUCTS BY PRICE
document.getElementById('sortPrice')?.addEventListener('change', function () {
    const sortType = this.value;
    const productContainer = document.querySelector('.product-container');
    const products = Array.from(document.querySelectorAll('.product-box'));

    const sorted = products.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('span').textContent.replace('$', ''));
        const priceB = parseFloat(b.querySelector('span').textContent.replace('$', ''));
        return sortType === 'low-high' ? priceA - priceB :
               sortType === 'high-low' ? priceB - priceA : 0;
    });

    productContainer.innerHTML = '';
    sorted.forEach(p => productContainer.appendChild(p));
});

document.getElementById('checkoutForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Order placed successfully!");
    window.location.href = "index.html";
});
