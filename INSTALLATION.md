# 🚀 دليل التثبيت والبدء السريع

## المتطلبات

- متصفح ويب حديث (Chrome, Firefox, Safari, Edge)
- **Python 3.x** أو **Node.js** (اختياري للسيرفر)

---

## 🎯 الطريقة 1: التشغيل السريع (بدون Python/Node)

1. انسخ جميع الملفات إلى مجلد
2. افتح `index.html` مباشرة في المتصفح
3. أو استضفه على أي سيرفر ويب

⚠️ **ملاحظة**: قد تواجه مشاكل في تحميل JSON محليّاً

---

## 🐍 الطريقة 2: استخدام Python

### الخطوة 1: التحقق من Python

```bash
python --version
# أو
python3 --version
```

### الخطوة 2: الذهاب للمجلد

```bash
cd d:\lamisswork\vera-clean
```

### الخطوة 3: تشغيل السيرفر

```bash
python -m http.server 8000
```

أو في Python 2:

```bash
python -m SimpleHTTPServer 8000
```

### الخطوة 4: فتح المتصفح

```
http://localhost:8000
```

---

## 📦 الطريقة 3: استخدام Node.js

### الخطوة 1: التحقق من Node

```bash
node --version
npm --version
```

### الخطوة 2: تثبيت المكتبات

```bash
cd d:\lamisswork\vera-clean
npm install
```

### الخطوة 3: تشغيل السيرفر

```bash
node server.js
```

### الخطوة 4: فتح المتصفح

```
http://localhost:3000
```

---

## 🌐 الطريقة 4: استخدام Live Server (VS Code)

1. افتح المجلد في VS Code
2. اضغط `Ctrl + Shift + P`
3. اكتب "Live Server"
4. اختر "Open with Live Server"

---

## 📂 هيكل المشروع بعد الفك

```
vera-clean/
├── index.html                 ← الصفحة الرئيسية
├── products-details.html      ← قائمة المنتجات
├── product-details.html       ← تفاصيل المنتج
│
├── css/
│   ├── style.css
│   └── products.css
│
├── js/
│   ├── main.js
│   ├── products.js
│   ├── products-details.js
│   └── i18n.js
│
├── data/
│   ├── ar.json                ← الترجمات العربية
│   ├── en.json                ← الترجمات الإنجليزية
│   └── products.json          ← بيانات المنتجات
│
└── images/
    └── (الصور)

```

---

## ✅ التحقق من التثبيت

افتح المتصفح على:

```
http://localhost:8000
```

يجب أن ترى:

- ✅ الشعار "VERA CARE"
- ✅ قائمة التنقل
- ✅ أزرار تبديل اللغة (EN/AR)
- ✅ صور المنتجات
- ✅ نموذج الاتصال

---

## 🌐 اختبر اللغات

1. اضغط على **"AR"** لتبديل إلى العربية
2. اضغط على **"EN"** للعودة إلى الإنجليزية
3. اذهب إلى صفحة المنتجات واضغط "View Details"
4. اختبر نموذج الاتصال

---

## 🐛 حل المشاكل الشائعة

### المشكلة: "لا يمكن تحميل JSON"

**الحل**: استخدم سيرفر (Python أو Node) بدلاً من فتح الملف مباشرة

### المشكلة: "الترجمات لا تظهر"

**الحل**:

- تحقق من وجود `ar.json` و `en.json` في المجلد `data/`
- افتح Console (F12) وابحث عن الأخطاء

### المشكلة: "صور غير موجودة"

**الحل**: تأكد من وجود مجلد `images/` مع الصور

### المشكلة: "القائمة لا تعمل على الجوال"

**الحل**: تحقق من متصفحك، قد تحتاج للتحديث

---

## 📡 المنافذ المستخدمة

- **Python**: Port 8000
- **Node.js**: Port 3000
- **Live Server**: Port 5500 (تقريباً)

إذا كانت المنافذ مشغولة، استخدم:

```bash
python -m http.server 8080
```

---

## 🔧 التكوينات المقترحة

### Python على Windows:

```bash
python -m http.server 8000 --directory d:\lamisswork\vera-clean
```

### Python على Mac/Linux:

```bash
cd ~/lamisswork/vera-clean && python3 -m http.server 8000
```

### Node.js مع PM2 (للإنتاج):

```bash
npm install -g pm2
pm2 start server.js
pm2 save
pm2 startup
```

---

## 🌍 نشر على الإنترنت

### Netlify (الأفضل):

1. ادخل https://netlify.com
2. اسحب المجلد
3. تم! الموقع مباشر

### Firebase Hosting:

```bash
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```

### GitHub Pages:

1. ادفع الملفات إلى GitHub
2. اذهب إلى Settings → Pages
3. اختر Branch للنشر

---

## 📝 ملاحظات مهمة

1. **الملفات التي لا تحتاجها:**
   - `node_modules/` (سيُنشأ مع `npm install`)
   - `.git/` (إذا استخدمت GitHub)

2. **احتفظ بـ:**
   - جميع ملفات HTML
   - مجلد `css/`, `js/`, `data/`, `images/`
   - ملفات الترجمة JSON

3. **آمن البيانات:**
   - انسخ المشروع قبل التعديلات الكبيرة
   - استخدم Git للنسخ الاحتياطية

---

## 🎉 تم التثبيت بنجاح!

المشروع جاهز للاستخدام. استمتع بـ VERA CARE! 🚀

---

**للمساعدة الإضافية، اطلع على:**

- [README.md](README.md) - التوثيق الكامل
- [CHECKLIST.md](CHECKLIST.md) - قائمة الميزات
- [PROJECT_STATUS.md](PROJECT_STATUS.md) - حالة المشروع
