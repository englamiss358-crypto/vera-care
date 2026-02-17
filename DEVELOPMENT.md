# 💻 دليل التطوير والصيانة

## 🎯 للمطورين الجدد

هذا الدليل يساعدك على فهم وتطوير المشروع بسهولة.

---

## 📚 فهم هيكل الكود

### 1. ملف `main.js` - القلب النابض 💓

هذا الملف يحتوي على:

- ✅ نظام الترجمة الكامل
- ✅ إدارة اللغة والـ RTL
- ✅ معالج النموذس
- ✅ قائمة الهاتف المحمول

**الدوال الرئيسية:**

```javascript
loadTranslations(); // تحميل الترجمات
t(key); // الحصول على ترجمة
updatePageTranslations(); // تحديث الصفحة
switchLanguage(lang); // تبديل اللغة
initLanguage(); // تهيئة اللغة
```

---

### 2. ملف `products.js` - إدارة المنتجات 🛍️

المسؤول عن:

- ✅ تحميل البيانات من JSON
- ✅ عرض المنتجات ديناميكياً
- ✅ معالجة الأخطاء

**الدوال الرئيسية:**

```javascript
loadProducts(); // تحميل من products.json
renderProducts(); // عرض في الصفحة
showProductsError(); // رسالة خطأ
```

---

### 3. ملف `products-details.js` - التفاصيل 📝

المسؤول عن:

- ✅ جلب البيانات من الـ URL
- ✅ عرض تفاصيل المنتج
- ✅ معالجة المنتج غير الموجود

**الدوال الرئيسية:**

```javascript
loadProductDetail(); // تحميل من JSON
renderProductDetail(); // عرض في الصفحة
showError(); // رسالة خطأ
```

---

## 🎨 فهم هيكل HTML

### العنصر الأساسي: `data-i18n`

```html
<!-- للنصوص -->
<h1 data-i18n="brand-name">VERA CARE</h1>

<!-- للـ inputs -->
<input data-i18n="contact_name" placeholder="Your Name" />

<!-- للـ textarea -->
<textarea data-i18n="contact_message" placeholder="Message"></textarea>
```

---

## 🎨 فهم نظام الترجمة

### ملفات JSON

**ar.json** (العربية):

```json
{
  "nav_home": "الرئيسية",
  "nav_products": "المنتجات",
  "new_key": "القيمة الجديدة"
}
```

**en.json** (الإنجليزية):

```json
{
  "nav_home": "Home",
  "nav_products": "Products",
  "new_key": "New Value"
}
```

---

## 🛠️ كيفية إضافة ميزات جديدة

### مثال 1: إضافة ترجمة جديدة

#### الخطوة 1: أضف في JSON

```json
// في ar.json
{
  "welcome_message": "أهلاً وسهلاً"
}

// في en.json
{
  "welcome_message": "Welcome"
}
```

#### الخطوة 2: استخدم في HTML

```html
<h2 data-i18n="welcome_message">Welcome</h2>
```

#### النتيجة:

```
تتبديل التلقائي للغة مع عرض "أهلاً وسهلاً" في العربية
```

---

### مثال 2: إضافة منتج جديد

#### الخطوة 1: أضف في products.json

```json
{
  "ID": "3",
  "name": "New Product Name",
  "description": "Short description",
  "image": "images/new-product.jpg",
  "fullDescription": "Long description here..."
}
```

#### الخطوة 2: لا تحتاج لتعديل JavaScript

- الأكواد ستحمل المنتج تلقائياً! ✨

---

### مثال 3: إضافة دالة جديدة

```javascript
// في main.js
function myNewFunction() {
  console.log("Hello from my function!");
  // أضف الكود هنا
}

// استدعِها في الحدث المناسب
document.addEventListener("DOMContentLoaded", () => {
  myNewFunction();
});
```

---

## 🎨 تعديل التصميم (CSS)

### المتغيرات الرئيسية (في style.css)

```css
:root {
  --primary: #0a7cff; /* اللون الأزرق الرئيسي */
  --secondary: #00b894; /* اللون الأخضر */
  --bg-light: #f5f9ff; /* خلفية فاتحة */
  --text-dark: #1f2a44; /* نص داكن */
  --text-light: #6b7280; /* نص فاتح */
}
```

### تغيير الألوان:

```css
:root {
  --primary: #ff6b6b; /* أحمر */
  --secondary: #4ecdc4; /* فيروزي */
}
```

---

## 🧪 الاختبار والتصحيح

### فتح Console

```
F12 → Console
```

### رسائل مفيدة للتصحيح

```javascript
console.log("Current Language:", currentLang);
console.log("Loaded Translations:", translations);
console.log("Products:", products);
```

---

## 📊 البيانات الرئيسية

### متغير `currentLang`

```javascript
currentLang = "ar"; // العربية
currentLang = "en"; // الإنجليزية
```

### متغير `translations`

```javascript
translations = {
  ar: {
    /* جميع الترجمات العربية */
  },
  en: {
    /* جميع الترجمات الإنجليزية */
  },
};
```

### متغير `products`

```javascript
products = [
  { ID: '1', name: '...', description: '...', ... },
  { ID: '2', name: '...', description: '...', ... }
]
```

---

## 🔄 مسار تدفق البيانات

```
1. تحميل الصفحة
   ↓
2. loadTranslations() → تحميل ar.json و en.json
   ↓
3. initLanguage() → تحديد اللغة المحفوظة
   ↓
4. updatePageTranslations() → تحديث جميع النصوص
   ↓
5. loadProducts() → تحميل products.json
   ↓
6. renderProducts() → عرض المنتجات
```

---

## 🎭 العناصر الديناميكية

### عند تبديل اللغة:

```
switchLanguage('ar')
  ↓
  تحديث متغير currentLang
  ↓
  تحديث localStorage
  ↓
  تحديث direction (RTL/LTR)
  ↓
  updatePageTranslations()
  ↓
  إعادة رسم المنتجات إن وجدت
```

---

## 📱 دعم الجوال

### Media Queries:

```css
@media (max-width: 768px) {
  /* تصاميم الجوال */
}
```

### القائمة على الجوال:

```javascript
// الملف main.js يتعامل معها تلقائياً
.nav.active { display: flex; }
```

---

## 🐛 الأخطاء الشائعة والحلول

| المشكلة          | السبب                | الحل                |
| ---------------- | -------------------- | ------------------- |
| الترجمات لا تظهر | ملفات JSON غير محملة | تحقق من console     |
| صور لا تظهر      | مسارات خاطئة         | تحقق من `images/`   |
| القائمة تعلق     | CSS غير كامل         | أعد تحميل الصفحة    |
| المنتجات لا تظهر | JSON غير صحيح        | تحقق من JSON syntax |

---

## 💾 قائمة تعديلات آمنة

✅ **آمن التعديل:**

- ملفات JSON
- نصوص HTML
- متغيرات CSS
- أسماء الدوال الجديدة

⚠️ **احذر عند التعديل:**

- أسماء الدوال الموجودة
- معرف العناصر (IDs)
- أسماء المتغيرات الرئيسية

❌ **لا تعدل:**

- منطق الترجمة الأساسي
- معالج الأخطاء الرئيسي
- دوال DOMContentLoaded

---

## 🚀 التوسعات المستقبلية الممكنة

### سهلة (1-2 ساعة):

- [ ] إضافة معايير بحث
- [ ] إضافة فلاتر للمنتجات
- [ ] إضافة slider للصور
- [ ] إضافة شريط تمرير ديناميكي

### متوسطة (2-4 ساعات):

- [ ] إضافة سلة تسوق (localStorage)
- [ ] نظام المراجعات
- [ ] صفحة تسجيل المستخدمين
- [ ] إضافات المنتجات

### متقدمة (4+ ساعات):

- [ ] نظام الدفع Stripe
- [ ] قاعدة بيانات Firebase
- [ ] لوحة تحكم إدارية
- [ ] بحث متقدم بـ Elasticsearch

---

## 📦 الإضافات المقترحة

```html
<!-- GSAP للرسوميات -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

<!-- AOS للحركات الدخول -->
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>

<!-- Swiperjs للـ slider -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"
/>
<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
```

---

## 🔐 أفضل الممارسات

1. **استخدم console.log للتصحيح**

```javascript
console.log("Debug:", variableName);
```

2. **تحقق دائماً من الأخطاء**

```javascript
try {
  // الكود
} catch (error) {
  console.error("Error:", error);
}
```

3. **علق الكود المعقد**

```javascript
// التحقق من وجود المتغير
if (variable) {
  // افعل شيء
}
```

4. **استخدم أسماء واضحة**

```javascript
// ✅ جيد
let userLanguagePreference = "ar";

// ❌ سيء
let ulp = "ar";
```

---

## 🎓 موارد إضافية

- [MDN - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS Tricks](https://css-tricks.com)
- [HTML Standard](https://html.spec.whatwg.org)

---

**هل تحتاج مساعدة؟ ابدأ من هنا! 🚀**

احفظ هذا الملف واسترجعه عند الحاجة.
