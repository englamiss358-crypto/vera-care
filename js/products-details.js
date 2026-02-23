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
    const ingredientsImage = document.getElementById('ingredients-image');
    const ingredientsDescription = document.getElementById('ingredients-description');
    const detailsContent = document.getElementById('product-details-content');

    // استخدم الترجمات من JSON
    const nameKey = `product_${product.ID}_name`;
    const descKey = `product_${product.ID}_full`;
    const ingredientsDescKey = `product_${product.ID}_ingredients_desc`;
    
    const translatedName = t(nameKey) || product.name;
    const translatedDesc = t(descKey) || product.fullDescription || product.description;
    const translatedIngredientsDesc = t(ingredientsDescKey) || product.ingredientsDescription;

    if (productImage) productImage.src = product.image;
    if (productName) productName.textContent = translatedName;
    if (productDescription) productDescription.textContent = translatedDesc;
    if (ingredientsImage && product.ingredientsImage) ingredientsImage.src = product.ingredientsImage;
    if (ingredientsDescription && product.ingredientsDescription) ingredientsDescription.textContent = translatedIngredientsDesc;
    
    // Render structured content with benefits, ingredients, and usage
    if (detailsContent && product.benefits && product.ingredients) {
        const currentLang = localStorage.getItem('language') || 'en';
        const benefitsTitle = currentLang === 'ar' ? 'الفوائس الرئيسية' : 'Key Benefits';
        const ingredientsTitle = currentLang === 'ar' ? 'المكونات النشطة والأساسية' : 'Active & Essential Ingredients';
        const whyTitle = currentLang === 'ar' ? 'لماذا نتميز' : 'Why We Stand Out';
        const usageTitle = currentLang === 'ar' ? 'طريقة الاستخدام' : 'How to Use';

        let html = '';

        // Benefits Section
        if (product.benefits && product.benefits.length > 0) {
            html += `<div class="product-section">
                <h3 class="section-title">${benefitsTitle}</h3>
                <div class="benefits-grid">`;
            product.benefits.forEach(benefit => {
                html += `<div class="benefit-card">
                    <h4>${benefit.title}</h4>
                    <p>${benefit.description}</p>
                </div>`;
            });
            html += `</div></div>`;
        }

        // Ingredients Section
        if (product.ingredients && product.ingredients.length > 0) {
            html += `<div class="product-section">
                <h3 class="section-title">${ingredientsTitle}</h3>
                <div class="ingredients-list">`;
            product.ingredients.forEach(ingredient => {
                html += `<div class="ingredient-item">
                    <div class="ingredient-name">${ingredient.name}</div>
                    <div class="ingredient-desc">${ingredient.description}</div>
                </div>`;
            });
            html += `</div></div>`;
        }

        // Why We Stand Out Section
        if (product.whyStandOut && product.whyStandOut.length > 0) {
            html += `<div class="product-section">
                <h3 class="section-title">${whyTitle}</h3>
                <ul class="highlights-list">`;
            product.whyStandOut.forEach(point => {
                html += `<li>${point}</li>`;
            });
            html += `</ul></div>`;
        }

        // How to Use Section
        if (product.howToUse && product.howToUse.length > 0) {
            html += `<div class="product-section usage-section">
                <h3>${usageTitle}</h3>
                <ul class="usage-steps">`;
            product.howToUse.forEach(step => {
                html += `<li>${step}</li>`;
            });
            html += `</ul></div>`;
        }

        detailsContent.innerHTML = html;
        updatePageTranslations();
    }
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

