import { db } from "./firebase.js";
import { doc, getDoc, collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
const configReady = !Object.values((await import("../firebase-config.js")).firebaseConfig).some(v => String(v).includes("YOUR_"));
if (configReady) {
  try {
    const snap = await getDoc(doc(db, "siteContent", "main"));
    if (snap.exists()) {
      const data = snap.data();
      document.querySelectorAll("[data-content]").forEach(el => {
        const key = el.dataset.content; if (typeof data[key] === "string") {
          el.textContent = data[key];
          if (key === "email" && el.tagName === "A") el.href = `mailto:${data[key]}`;
        }
      });
      if (data.pageTitle) document.title = data.pageTitle;
    }
    const q = query(collection(db, "siteUpdates"), orderBy("createdAt", "desc"));
    const items = await getDocs(q);
    if (!items.empty) {
      const section = document.getElementById("live-updates");
      const list = document.getElementById("live-updates-list");
      items.forEach(d => { const x=d.data(); const article=document.createElement("article"); article.className="live-update";
        const h=document.createElement("h3"); h.textContent=x.title || "আপডেট";
        const p=document.createElement("p"); p.textContent=x.body || ""; article.append(h,p);
        if (x.createdAt?.toDate) { const t=document.createElement("time"); t.textContent=x.createdAt.toDate().toLocaleDateString("bn-BD"); article.append(t); }
        list.append(article); }); section.hidden=false;
    }
  } catch (err) { console.warn("Firebase content load skipped:", err); }
}
