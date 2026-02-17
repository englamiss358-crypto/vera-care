# VERA CARE - Pharmaceutical Website

موقع ويب احترافي لشركة VERA CARE للعناية الصيدلانية

## ✨ الميزات

### 🌍 دعم متعدد اللغات

- **العربية (ar)** - مع دعم كامل للـ RTL
- **الإنجليزية (en)** - مع دعم الـ LTR
- تبديل فوري للغة بدون إعادة تحميل الصفحة
- حفظ اختيار اللغة في localStorage

### 📱 متجاوب تماماً

- تصميم responsive يعمل على جميع الأجهزة
- قائمة هاتف محمول قابلة للتوسع
- صور محسّنة مع lazy loading

### 🛍️ إدارة المنتجات

- صفحة قائمة المنتجات
- صفحة تفاصيل منتج كاملة
- بيانات ديناميكية من JSON

### 📧 نموذج الاتصال

- تجميع البيانات بشكل آمن
- معالجة الأخطاء
- تنبيهات المستخدم

## 📁 هيكل المشروع

```
vera-clean/
├── index.html              # الصفحة الرئيسية
├── products-details.html   # قائمة المنتجات
├── product-details.html    # تفاصيل المنتج
├── server.js               # خادم Node.js (اختياري)
│
├── css/
│   ├── style.css           # الأنماط الرئيسية
│   └── products.css        # أنماط صفحة المنتجات
│
├── js/
│   ├── main.js             # الكود الرئيسي (الترجمة + الميزات)
│   ├── products.js         # إدارة المنتجات
│   ├── products-details.js # تفاصيل المنتج
│   └── i18n.js             # (قديم - للتوافقية)
│
├── data/
│   ├── ar.json             # الترجمات العربية
│   ├── en.json             # الترجمات الإنجليزية
│   └── products.json       # بيانات المنتجات
│
└── images/
    └── (صور المشروع)
```

## 🚀 كيفية الاستخدام

### الطريقة 1: استخدام HTTP Server (الأسهل)

```bash
cd vera-clean
python -m http.server 8000
```

ثم افتح المتصفح على: `http://localhost:8000`

### الطريقة 2: استخدام Node.js Server

```bash
npm install
node server.js
```

ثم افتح المتصفح على: `http://localhost:3000`

## 🌐 النقاط الرئيسية

### إضافة ترجمة جديدة

1. أضف المفتاح والقيمة في `data/ar.json` و `data/en.json`:

```json
{
  "new_key": "القيمة العربية"
}
```

2. أضف `data-i18n="new_key"` على العنصر بـ HTML:

```html
<h2 data-i18n="new_key">English Value</h2>
```

### إضافة منتج جديد

أضف في `data/products.json`:

```json
{
  "ID": "3",
  "name": "Product Name",
  "description": "Short description",
  "image": "images/product.jpg",
  "fullDescription": "Detailed description here..."
}
```

### تخصيص الألوان

عدّل متغيرات CSS في `css/style.css`:

```css
:root {
  --primary: #0a7cff;
  --secondary: #00b894;
  /* ... */
}
```

## 🔧 الميزات التقنية

- ✅ JavaScript ES6+
- ✅ API Fetch للبيانات
- ✅ localStorage للترجمات المحفوظة
- ✅ CSS Grid و Flexbox
- ✅ Responsive Design
- ✅ RTL/LTR Support
- ✅ Error Handling

## 📋 دعم المتصفحات

- Chrome/Chromium ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Opera ✅

## 🎨 التصميم

يستخدم المشروع:

- خط Poppins و Cairo من Google Fonts
- نظام ألوان احترافي
- ظلال حديثة وانتقالات سلسة

## 📝 الملفات المهمة

- **main.js**: يحتوي على كل الدوال الأساسية للترجمة والميزات
- **products.js**: إدارة عرض المنتجات
- **products-details.js**: عرض تفاصيل المنتج

## 🐛 حل المشاكل الشائعة

### الترجمات لا تظهر

- تأكد من أن ملفات JSON موجودة في `data/`
- افتح وحدة التحكم (F12) وابحث عن الأخطاء

### القائمة لا تعمل

- تأكد من وجود `#menuToggle` في HTML
- تحقق من CSS media queries

### صور المنتجات لا تظهر

- تحقق من مسارات الصور في `products.json`
- تأكد من وجود الصور في مجلد `images/`

## 📧 الدعم

لأي أسئلة أو مشاكل، تفضل بالتواصل معنا عبر نموذج الاتصال على الموقع.

---

**تم الإنشاء بواسطة**: GitHub Copilot  
**آخر تحديث**: 17/02/2026
