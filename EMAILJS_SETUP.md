# إعداد EmailJS لنظام التواصل

تم تفعيل نظام إرسال الإيميلات الحقيقية باستخدام EmailJS!

## خطوات التفعيل:

### 1️⃣ إنشاء حساب EmailJS (مجاني)

1. اذهب إلى: https://www.emailjs.com/
2. اضغط على **Sign Up** وأنشئ حساب مجاني
3. فعّل حسابك من البريد الإلكتروني

### 2️⃣ الحصول على Public Key

1. بعد تسجيل الدخول، اذهب إلى **Account** من القائمة
2. انسخ **Public Key** (مفتاح عام)
3. افتح ملف `js/main.js`
4. ابحث عن السطر:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   ```
5. استبدل `'YOUR_PUBLIC_KEY'` بالمفتاح الذي نسخته

### 3️⃣ ربط خدمة البريد الإلكتروني

1. من لوحة التحكم، اذهب إلى **Email Services**
2. اضغط **Add New Service**
3. اختر خدمة البريد:
   - **Gmail** (الأسهل للتجربة)
   - أو أي خدمة أخرى
4. اتبع التعليمات لربط حسابك
5. انسخ **Service ID**

### 4️⃣ إنشاء قالب البريد (Template)

1. اذهب إلى **Email Templates**
2. اضغط **Create New Template**
3. اكتب محتوى القالب:

**Subject (العنوان):**

```
رسالة جديدة من {{from_name}}
```

**Content (المحتوى):**

```
مرحباً {{to_name}},

لديك رسالة جديدة من موقع VERA CARE:

الاسم: {{from_name}}
البريد الإلكتروني: {{from_email}}

الرسالة:
{{message}}

---
تم الإرسال من نموذج التواصل - VERA CARE
```

4. احفظ القالب وانسخ **Template ID**

### 5️⃣ تحديث الأكواد

افتح `js/main.js` وعدّل السطر التالي:

```javascript
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams);
```

استبدل:

- `'YOUR_SERVICE_ID'` → بمعرف الخدمة من الخطوة 3
- `'YOUR_TEMPLATE_ID'` → بمعرف القالب من الخطوة 4

### 6️⃣ اختبار النظام

1. احفظ جميع التغييرات
2. افتح الموقع في المتصفح
3. اذهب إلى قسم **Contact**
4. اكتب رسالة تجريبية واضغط **Send**
5. تحقق من بريدك الإلكتروني!

---

## مثال على الأكواد النهائية:

```javascript
// في js/main.js
emailjs.init("kJ8xLm3NpQ9R2sT5"); // مثال على Public Key

emailjs.send("service_abc123", "template_xyz789", templateParams);
```

---

## ملاحظات مهمة:

✅ **الحد المجاني:** 200 إيميل/شهر (كافي للمواقع الصغيرة)  
✅ **الأمان:** لا تشارك المفاتيح في أماكن عامة  
✅ **البريد المستقبل:** سيصلك على البريد المربوط بالـ Service  
✅ **دعم اللغة العربية:** يعمل بشكل كامل ✓

---

## روابط مفيدة:

- التوثيق الرسمي: https://www.emailjs.com/docs/
- فيديو شرح: https://www.youtube.com/watch?v=dgcYOm8n8ME
- دعم فني: support@emailjs.com

---

**تم التطوير بواسطة GitHub Copilot 🚀**
