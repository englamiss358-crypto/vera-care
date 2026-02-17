# 🚀 نشر VERA CARE على GitHub

تم بنجاح إنشاء أول commit local. الآن اتبع هذه الخطوات لنشر المشروع على GitHub:

---

## 📝 الخطوة 1: إنشاء repository جديد على GitHub

1. اذهب إلى [GitHub.com](https://github.com)
2. اضغط على **"+"** الزاوية العلوية اليمنى
3. اختر **"New repository"**
4. امل البيانات:
   - **Repository name:** `vera-care` (أو أي اسم تفضله)
   - **Description:** `Pharmaceutical website with multilingual support (Arabic/English)`
   - **Visibility:** اختر **Public** (عام) أو **Private** (خاص)
   - **Initialize:** لا تختر "Add README" لأننا بالفعل لدينا واحد
5. اضغط **"Create repository"**

---

## 🔗 الخطوة 2: الربط مع التخزين البعيد

بعد إنشاء repository على GitHub، ستحصل على رابط يشبه هذا:

```
https://github.com/YOUR_USERNAME/vera-care.git
```

**شغل هذه الأوامر في PowerShell:**

```powershell
cd d:\lamisswork\vera-clean

# ربط المستودع البعيد
git remote add origin https://github.com/YOUR_USERNAME/vera-care.git

# تغيير اسم الفرع من master إلى main (اختياري)
git branch -M main

# رفع الملفات
git push -u origin main
```

⚠️ **استبدل:**

- `YOUR_USERNAME` باسم مستخدمك على GitHub

---

## 🔐 الخطوة 3: المصادقة

عند محاولة الرفع لأول مرة، قد يطلب GitHub المصادقة.

**خيارات المصادقة:**

### الخيار 1: HTTPS مع Personal Access Token ⭐ (الأسهل)

1. اذهب إلى GitHub Settings → Developer settings → Personal access tokens
2. اضغط **Generate new token**
3. اختر الصلاحيات: `repo`, `write:packages`, `workflow`
4. انسخ الـ token
5. عند الطلب في الـ Terminal:
   - **Username:** اسم مستخدمك
   - **Password:** الصق الـ token (ليس كلمة السر)

### الخيار 2: SSH (أكثر أماناً ولكن معقد قليلاً)

```powershell
# إنشاء مفاتيح SSH
ssh-keygen -t rsa -b 4096 -f "$env:USERPROFILE\.ssh\id_rsa"

# إضافة المفتاح العام إلى GitHub
# انسخ محتوى: C:\Users\YourUsername\.ssh\id_rsa.pub
# وأضفه في GitHub Settings → SSH Keys
```

---

## 📤 الخطوة 4: الرفع النهائي

**الأمر الأساسي:**

```powershell
cd d:\lamisswork\vera-clean
git push -u origin main
```

**إذا كنت تستخدم master بدلاً من main:**

```powershell
git push -u origin master
```

---

## ✅ التحقق من النجح

بعد الرفع:

1. اذهب إلى `https://github.com/YOUR_USERNAME/vera-care`
2. يجب أن ترى جميع الملفات موجودة
3. اضغط على README.md للتحقق

---

## 🔄 الأوامر المستقبلية

**لكل تعديل جديد:**

```powershell
cd d:\lamisswork\vera-clean

# 1. إضافة التعديلات
git add .

# 2. عمل commit
git commit -m "وصف التعديل هنا"

# 3. الرفع
git push
```

---

## 📋 التسلسل الكامل في أمر واحد

```powershell
cd d:\lamisswork\vera-clean

# إذا كانت أول مرة:
git remote add origin https://github.com/YOUR_USERNAME/vera-care.git
git branch -M main

# الرفع:
git push -u origin main
```

---

## 🎉 بعد الرفع

**يمكنك الآن:**

- ✅ إنشاء README جميل في GitHub
- ✅ فتح Issues للمشاكل والطلبات
- ✅ نشر الموقع مجاناً على GitHub Pages
- ✅ مشاركة المشروع مع الآخرين
- ✅ التعاون مع فريق التطوير

---

## 🌐 نشر الموقع على GitHub Pages (مجاني)

إذا كنت تريد استضافة الموقع مجاناً:

1. اذهب إلى **Settings** → **Pages**
2. اختر **Branch:** `main` و **Folder:** `/ (root)`
3. اضغط **Save**
4. الموقع سيكون متاح على:
   ```
   https://YOUR_USERNAME.github.io/vera-care
   ```

---

## ⚠️ نصائح أخيرة

- **لا تنشر بيانات حساسة** (مفاتيح API، كلمات مرور)
- **استخدم ملفات commit واضحة** لتسهيل المتابعة
- **أضف .gitignore** لملفات غير مهمة
- **اختبر الموقع** قبل الرفع

---

**شكراً لاستخدام VERA CARE! 🚀**

إذا واجهت أي مشاكل، أكتبلي! 💬
