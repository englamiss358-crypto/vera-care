# 🛍️ دليل إضافة منتجات جديدة في VERA CARE

هذا الدليل يشرح خطوة بخطوة كيفية إضافة منتجات جديدة إلى موقع فيرا كير.

---

## 📋 الملفات المطلوبة

عند إضافة منتج جديد، يجب تعديل **3 ملفات أساسية**:

1. **`data/products.json`** - قاعدة بيانات المنتجات
2. **`data/ar.json`** - الترجمات بالعربية
3. **`data/en.json`** - الترجمات بالإنجليزية

---

## ✅ خطوات الإضافة

### الخطوة 1️⃣: حضّر صورة المنتج

1. ضع صورة المنتج في مجلد **`images/`**
2. استخدم اسم واضح مثل: `product-3.jpg` أو `vera-new.jpg`
3. تأكد من أن الصورة بجودة عالية (JPG أو PNG)

**مثال:**

```
images/
├── vera-mega.jpg (منتج 1)
├── vera-ferti.jpg (منتج 2)
└── product-3-new.jpg ← منتجك الجديد
```

---

### الخطوة 2️⃣: أضف المنتج في `data/products.json`

**افتح الملف:** `data/products.json`

**أضف منتجك قبل الإغلاق `]` مباشرة:**

```json
{
  "ID": "3",
  "name": "Your Product Name in English",
  "description": "Short description of the product",
  "image": "images/product-3-new.jpg",
  "fullDescription": "This is a detailed description of your product with full features and benefits..."
}
```

**مثال عملي فعلي:**

```json
{
  "ID": "3",
  "name": "Premium Vitamin Complex for Athletes",
  "description": "High-Performance Sports Nutrition Formula",
  "image": "images/vera-sports.jpg",
  "fullDescription": "Boosters muscle recovery and endurance with premium amino acids, creatine, and B-vitamins. Designed specifically for athletes and fitness enthusiasts..."
}
```

⚠️ **تنبيهات هامة:**

- استخدم رقم ID فريد (بعد آخر منتج موجود)
- تأكد من كتابة JSON بشكل صحيح (فواصل، علامات اقتباس)
- الصورة يجب أن تكون موجودة فعلاً في المجلد `images/`

**التنسيق الصحيح:**

```json
[
  { منتج 1 },
  { منتج 2 },
  { منتجك الجديد }  ← أضفه هنا قبل الإغلاق
]
```

---

### الخطوة 3️⃣: أضف ترجمات العربية في `data/ar.json`

**افتح الملف:** `data/ar.json`

**أضف هذه المفاتيح قبل الإغلاق `}` مباشرة:**

```json
"product_3_name": "اسم المنتج بالعربية",
"product_3_desc": "وصف قصير بالعربية",
"product_3_full": "الوصف الكامل التفصيلي بالعربية مع كل المميزات والفوائد..."
```

**مثال عملي:**

```json
"product_3_name": "مركب الفيتامينات المتقدم للرياضيين",
"product_3_desc": "صيغة تغذية رياضية عالية الأداء",
"product_3_full": "يعزز استرجاع العضلات والتحمل مع الأحماض الأمينية الممتازة والكرياتين وفيتامينات ب. مصمم خصيصاً للرياضيين ومحبي اللياقة البدنية..."
```

---

### الخطوة 4️⃣: أضف ترجمات الإنجليزية في `data/en.json`

**افتح الملف:** `data/en.json`

**أضف نفس المفاتيح بالإنجليزية قبل الإغلاق `}` مباشرة:**

```json
"product_3_name": "English product name",
"product_3_desc": "Short English description",
"product_3_full": "Full detailed English description..."
```

---

## 🎨 أمثلة كاملة

### مثال 1: منتج مكملات صحية

**في `products.json`:**

```json
{
  "ID": "3",
  "name": "Daily Wellness Supplement",
  "description": "Complete Health Support Formula",
  "image": "images/vera-wellness.jpg",
  "fullDescription": "Comprehensive daily supplement with vitamins, minerals, and antioxidants. Supports overall health, energy, and immune function. Contains natural ingredients and is scientifically formulated."
}
```

**في `ar.json`:**

```json
"product_3_name": "مكمل العافية اليومي",
"product_3_desc": "صيغة دعم صحي شامل",
"product_3_full": "مكمل يومي شامل يحتوي على فيتامينات ومعادن ومضادات أكسدة. يدعم الصحة العامة والطاقة والمناعة. يحتوي على مكونات طبيعية ومصاغ علمياً."
```

**في `en.json`:**

```json
"product_3_name": "Daily Wellness Supplement",
"product_3_desc": "Complete Health Support Formula",
"product_3_full": "Comprehensive daily supplement with vitamins, minerals, and antioxidants. Supports overall health, energy, and immune function. Contains natural ingredients and is scientifically formulated."
```

---

### مثال 2: منتج للعناية بالجلد

**في `products.json`:**

```json
{
  "ID": "4",
  "name": "Radiant Skin Care Complex",
  "description": "Advanced Beauty and Skin Care Formula",
  "image": "images/vera-beauty.jpg",
  "fullDescription": "Premium skin care supplement with collagen, hyaluronic acid, and botanical extracts. Promotes skin elasticity, hydration, and natural radiance. Ideal for maintaining youthful and glowing skin."
}
```

**في `ar.json`:**

```json
"product_4_name": "مركب العناية بالجلد المشع",
"product_4_desc": "صيغة متقدمة للعناية بالجمال والجلد",
"product_4_full": "مكمل رعاية جلد ممتاز يحتوي على الكولاجين وحمض الهيالورونيك والمستخلصات النباتية. يعزز المرونة والترطيب والتوهج الطبيعي للجلد. مثالي للحفاظ على جلد شاب ومشع."
```

---

## 🔍 نقاط مهمة

### ✓ يجب أن تفعل:

- ✅ استخدم IDs فريدة (1, 2, 3, 4...)
- ✅ تأكد من وجود الصورة في المجلد `images/`
- ✅ اكتب JSON بشكل صحيح (علامات اقتباس ، فواصل)
- ✅ أضف ترجمات كاملة للعربية والإنجليزية
- ✅ اختبر الموقع بعد الإضافة

### ✗ يجب أن تتجنب:

- ❌ استخدام ID مكرر
- ❌ صور غير موجودة في `images/`
- ❌ أخطاء في JSON (قوسين، فواصل)
- ❌ ترجمات ناقصة
- ❌ ARABICs إذا كانت الترجمة بالإنجليزية والعكس

---

## 🧪 اختبار المنتج الجديد

بعد إضافة المنتج:

1. **افتح الموقع** على المتصفح
2. **انتقل للصفحة الرئيسية** (index.html)
3. **انزل إلى قسم "منتجاتنا"** وتحقق من ظهور المنتج الجديد
4. **انقر على المنتج** للتحقق من صحة التفاصيل
5. **بدّل اللغة** (EN/AR) وتحقق من الترجمات

---

## 📱 الملفات السريعة

| الملف                 | الموقع                 | الغرض                        |
| --------------------- | ---------------------- | ---------------------------- |
| قاعدة بيانات المنتجات | `data/products.json`   | تخزين معلومات المنتجات       |
| الترجمات العربية      | `data/ar.json`         | الترجمات العربية للمنتجات    |
| الترجمات الإنجليزية   | `data/en.json`         | الترجمات الإنجليزية للمنتجات |
| مجلد الصور            | `images/`              | تخزين صور المنتجات           |
| الصفحة الرئيسية       | `index.html`           | تعرض المنتجات تلقائياً       |
| صفحة التفاصيل         | `product-details.html` | تفاصيل المنتج الواحد         |

---

## 💡 نصائح للترجمة الاحترافية

### للعربية:

- استخدم لغة عربية فصيحة أو فصيحة مع كلمات عامية شائعة
- صف الفوائد بوضوح وجاذبية
- استخدم علامات الترقيم بشكل صحيح

### للإنجليزية:

- استخدم لغة إنجليزية احترافية وواضحة
- اجعل الوصف جاذباً للعملاء
- تجنب الأخطاء الإملائية

---

## ⚠️ استكشاف الأخطاء

### المنتج لا يظهر:

1. تحقق من الملف `products.json` - هل JSON صحيح؟
2. تحقق من الصورة - هل الصورة موجودة في `images/`؟
3. امسح ذاكرة المتصفح (Ctrl+F5)
4. تحقق من رقم ID - هل هو فريد؟

### الترجمات لا تظهر:

1. تحقق من ملفات `ar.json` و `en.json`
2. هل المفاتيح صحيحة؟ `product_3_name`, `product_3_desc`, `product_3_full`
3. امسح ذاكرة المتصفح

### الصورة لا تظهر:

1. تحقق من مسار الصورة في `products.json`
2. تأكد من وجود الصورة في المجلد `images/`
3. استخدم `jpg` أو `png` فقط

---

## 📞 الدعم والمساعدة

إذا واجهت مشكلة:

1. اقرأ هذا الدليل مرة أخرى
2. تحقق من أمثلة المنتجات الموجودة
3. استخدم أدوات التحقق من JSON (JSONLint)

---

**شكراً لاستخدام VERA CARE! ✨**
