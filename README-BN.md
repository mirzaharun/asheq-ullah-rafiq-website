# Firebase-সহ আশেক উল্লাহ রফিক ওয়েবসাইট

এই প্যাকেজে মূল ওয়েবসাইট, Firebase-ভিত্তিক Admin Panel, আপনার দেওয়া Firebase Web App config এবং Admin UID-সহ Firestore rules রয়েছে। Firebase Console-এ Firestore Database তৈরি করে Rules প্রকাশ এবং Hosting deploy না করা পর্যন্ত অনলাইন ডেটা সংরক্ষণ চালু হবে না।

## ফিচার
- Firebase Authentication দিয়ে ইমেইল/পাসওয়ার্ড অ্যাডমিন লগইন
- পরিচিতি, নাম, পদবি, আসন, সংক্ষিপ্ত পরিচিতি, অফিস ও ইমেইল সম্পাদনা
- Firestore-এ পরিবর্তন সংরক্ষণ এবং মূল ওয়েবসাইটে লাইভ কনটেন্ট লোড
- আপডেট/সংবাদ যোগ ও মুছে ফেলা; পাবলিক ওয়েবসাইটে সর্বশেষ আপডেট প্রদর্শন
- Firestore Security Rules-এ নির্দিষ্ট Admin UID ছাড়া লেখার অনুমতি নেই

## Firebase চালু করার ধাপ
1. Firebase Console-এ একটি Project তৈরি করুন: https://console.firebase.google.com/
2. Project settings > General > Your apps থেকে Web App তৈরি করে config নিন।
3. আপনার দেওয়া Firebase Web App config ইতিমধ্যে `firebase-config.js`-এ যুক্ত করা হয়েছে।
4. Authentication > Sign-in method থেকে Email/Password চালু করুন।
5. Authentication > Users থেকে আপনার Admin user তৈরি করুন।
6. আপনার দেওয়া Admin UID ইতিমধ্যে `firebase/firestore.rules`-এ যুক্ত করা হয়েছে।
7. Firestore Database তৈরি করুন এবং `firebase/firestore.rules`-এর নিয়মগুলো Rules ট্যাবে Publish করুন।
8. পুরো ফোল্ডারটি Firebase Hosting বা অন্য HTTPS static hosting-এ deploy করুন। `file://` দিয়ে খুললে Firebase module/import ঠিকমতো কাজ নাও করতে পারে।
9. `/admin.html` খুলে Admin email/password দিয়ে লগইন করুন।

## গুরুত্বপূর্ণ নিরাপত্তা
- Firebase config-এ API key থাকা স্বাভাবিক; নিরাপত্তা নির্ভর করে Authentication ও Firestore Rules-এর ওপর।
- Admin UID Firestore Rules-এ নির্দিষ্ট করা আছে; এটি ওয়েবসাইটের সাধারণ HTML/JavaScript-এ রাখা হয়নি।
- Admin user-এর পাসওয়ার্ড কারও সঙ্গে শেয়ার করবেন না।
- এই সংস্করণে ছবি আপলোডের জন্য Firebase Storage যুক্ত করা হয়নি; পরের ধাপে Storage ও image manager যোগ করা যাবে।

## ফাইল
- `index.html` — Firebase থেকে কনটেন্ট পড়ে দেখায় এমন মূল ওয়েবসাইট
- `admin.html` — অ্যাডমিন প্যানেল
- `firebase-config.js` — আপনার Firebase Web App config
- `js/firebase.js` — Firebase initialization
- `js/public.js` — পাবলিক ওয়েবসাইটে ডেটা লোড
- `js/admin.js` — লগইন, সম্পাদনা, প্রকাশ, মুছে ফেলা
- `firebase/firestore.rules` — Firestore নিরাপত্তা বিধি
- `source/original-upload.html` — আপলোড করা মূল HTML ফাইল
