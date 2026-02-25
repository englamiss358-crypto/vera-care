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
        
        const currentLang = localStorage.getItem('lang') || 'en';
        
        // الحصول على النصوص المترجمة من products.json
        const translatedName = currentLang === 'ar' ? (product.nameAr || product.name) : product.name;
        const translatedDesc = currentLang === 'ar' ? (product.descriptionAr || product.description) : product.description;
        
        card.innerHTML = `
            <img src="${product.image}" alt="${translatedName}" loading="lazy">
            <h3>${translatedName}</h3>
            <p>${translatedDesc}</p>
            <a href="product-details.html?id=${product.ID}" class="btn-secondary" data-i18n="btn-secondary">Product Details</a>
        `;
        container.appendChild(card);
    });
    
    // تطبيق الترجمات مباشرة بعد إنشاء العناصر
    if (typeof updatePageTranslations === 'function') {
        updatePageTranslations();
    }
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

