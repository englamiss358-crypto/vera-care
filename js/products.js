let products = [];

async function loadProducts() {
    try {
        products = await fetch('./data/products.json').then(res => res.json());
        renderProducts();
    } catch (error) {
        console.error('خطأ في تحميل المنتجات:', error);
        showProductsError();
    }
}

function renderProducts() {
    const container = document.getElementById('productsGrid');
    if (!container) return;
    
    container.innerHTML = '';

    if (products.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">لا توجد منتجات متاحة</p>';
        return;
    }

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        // بناء مفاتيح الترجمة
        const nameKey = `product_${product.ID}_name`;
        const descKey = `product_${product.ID}_desc`;
        
        // الحصول على النصوص المترجمة أو الافتراضية
        const translatedName = t(nameKey) || product.name;
        const translatedDesc = t(descKey) || product.description;
        
        card.innerHTML = `
            <img src="${product.image}" alt="${translatedName}" loading="lazy">
            <h3>${translatedName}</h3>
            <p>${translatedDesc}</p>
            <a href="product-details.html?id=${product.ID}" class="btn-secondary" data-i18n="btn-secondary">Product Details</a>
        `;
        container.appendChild(card);
    });
}

function showProductsError() {
    const container = document.getElementById('productsGrid');
    if (container) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: red;">خطأ في تحميل المنتجات</p>';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', async () => {
    await loadTranslations();
    initLanguage();
    updatePageTranslations();
    await loadProducts();
});

