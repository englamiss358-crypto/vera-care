let productId = new URLSearchParams(window.location.search).get('id');

async function loadProductDetail() {
    try {
        products = await fetch('./data/products.json').then(res => res.json());
        renderProductDetail();
    } catch (error) {
        console.error('خطأ في تحميل المنتجات:', error);
        showError('خطأ في تحميل بيانات المنتج');
    }
}

function renderProductDetail() {
    const product = products.find(p => p.ID === productId);
    if (!product) {
        showError('المنتج غير موجود');
        return;
    }

    const productImage = document.getElementById('product-image');
    const productName = document.getElementById('product-name');
    const productDescription = document.getElementById('product-description');

    // استخدم الترجمات من JSON
    const nameKey = `product_${product.ID}_name`;
    const descKey = `product_${product.ID}_full`;
    
    const translatedName = t(nameKey) || product.name;
    const translatedDesc = t(descKey) || product.fullDescription || product.description;

    if (productImage) productImage.src = product.image;
    if (productName) productName.textContent = translatedName;
    if (productDescription) productDescription.textContent = translatedDesc;
}

function showError(message) {
    const container = document.querySelector('.product-detail-container');
    if (container) {
        const backText = t('back_to_products') || 'Back to Products';
        container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px;"><h2>${message}</h2><a href="products-details.html" class="btn-secondary">${backText}</a></div>`;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', async () => {
    await loadTranslations();
    initLanguage();
    updatePageTranslations();
    await loadProductDetail();
});

