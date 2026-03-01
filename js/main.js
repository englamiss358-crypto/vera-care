let currentLang = 'ar';
let translations = { ar: {}, en: {} };

// ============ تحميل وإدارة الترجمات ============
async function loadTranslations() {
    try {
        const ar = await fetch('./data/ar.json').then(res => res.json());
        const en = await fetch('./data/en.json').then(res => res.json());
        translations.ar = ar;
        translations.en = en;
    } catch (error) {
        console.error('خطأ في تحميل الترجمات:', error);
    }
}

function t(key) {
    const lang = translations[currentLang];
    if (!lang) return key;
    return lang[key] || key;
}

function updatePageTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            // للعناصر المدخلة، نحدث placeholder والقيمة
            element.placeholder = translation;
            if (element.value === '') {
                // لا نغير القيمة الحالية
            }
        } else {
            // للعناصر الأخرى نحدث النص
            element.textContent = translation;
        }
    });
}

// ============ إدارة اللغة ============
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    updatePageTranslations();
    
    if (typeof renderProducts === 'function') renderProducts();
    if (typeof renderProductDetail === 'function') renderProductDetail();
    
    // إعادة تحديث الترجمات بعد تحديث المحتوى الديناميكي
    setTimeout(() => updatePageTranslations(), 100);
}

function initLanguage() {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) currentLang = savedLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
}

// ============ معالج نموذج التواصل ============
function handleContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        
        try {
            const response = await fetch('./contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                alert(currentLang === 'ar' ? 'تم إرسال الرسالة بنجاح!' : 'Message sent successfully!');
                form.reset();
            }
        } catch (error) {
            console.error('خطأ في إرسال الرسالة:', error);
            alert(currentLang === 'ar' ? 'حدث خطأ في الإرسال' : 'Error sending message');
        }
    });
}

// معالج النموذج البديل للعملاء المحليين
function handleContactFormLocal() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    // تهيئة EmailJS بمفتاحك العام (Public Key)
    // استبدل 'YOUR_PUBLIC_KEY' بمفتاحك من EmailJS
    emailjs.init('YOUR_PUBLIC_KEY');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = currentLang === 'ar' ? 'جاري الإرسال...' : 'Sending...';
        submitBtn.disabled = true;
        
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;
        
        // معاملات البريد الإلكتروني
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
            to_name: 'VERA CARE Team'
        };
        
        // إرسال البريد عبر EmailJS
        // استبدل 'YOUR_SERVICE_ID' و 'YOUR_TEMPLATE_ID' بمعرفاتك من EmailJS
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(() => {
                alert(currentLang === 'ar' ? '✅ شكراً! تم إرسال رسالتك بنجاح' : '✅ Thank you! Your message has been sent successfully');
                form.reset();
            })
            .catch((error) => {
                console.error('خطأ في الإرسال:', error);
                alert(currentLang === 'ar' ? '❌ عذراً، حدث خطأ في الإرسال. حاول مرة أخرى' : '❌ Sorry, an error occurred. Please try again');
            })
            .finally(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
    });
}

// ============ نموذج الآراء ============
function handleTestimonialForm() {
    const form = document.querySelector('#testimonialForm');
    const ratingStars = document.querySelectorAll('#ratingStars span');
    const ratingInput = document.querySelector('#rating');

    if (!form) return;

    // تفاعل النجوم
    ratingStars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = star.getAttribute('data-rating');
            ratingInput.value = rating;
            
            ratingStars.forEach((s, index) => {
                if (index < rating) {
                    s.style.color = '#ffc107';
                } else {
                    s.style.color = '#ddd';
                }
            });
        });

        star.addEventListener('mouseover', () => {
            const rating = star.getAttribute('data-rating');
            ratingStars.forEach((s, index) => {
                if (index < rating) {
                    s.style.color = '#ffc107';
                } else {
                    s.style.color = '#ddd';
                }
            });
        });
    });

    // معالجة النموذج
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.querySelector('#testimonialsName').value;
        const position = document.querySelector('#testimonialsPosition').value;
        const review = document.querySelector('#testimonialsText').value;
        const rating = document.querySelector('#rating').value;

        console.log('رأي جديد:', { name, position, review, rating });
        alert(t('thank_you_review'));
        form.reset();
        ratingInput.value = 5;
        ratingStars.forEach((s, index) => {
            s.style.color = index < 5 ? '#ffc107' : '#ddd';
        });
    });
}

// ============ قائمة الهاتف المحمول ============
function handleMobileMenu() {
    const menuBtn = document.querySelector('#menuToggle');
    const nav = document.querySelector('nav');

    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
        
        // إغلاق القائمة عند النقر على رابط
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
    }
}

// ============ تهيئة الصفحة ============
document.addEventListener('DOMContentLoaded', async () => {
    await loadTranslations();
    initLanguage();
    updatePageTranslations();
    handleContactFormLocal();
    handleMobileMenu();
    handleTestimonialForm();
});