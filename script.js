// ------------------------------
// 1. بتلات متحركة
// ------------------------------
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.innerHTML = ['🌸','🌺','🌹','💮','✨','💖'][Math.floor(Math.random()*6)];
    petal.style.left = Math.random() * 100 + '%';
    petal.style.fontSize = (15 + Math.random() * 20) + 'px';
    petal.style.animationDuration = (5 + Math.random() * 6) + 's';
    document.getElementById('petalsContainer').appendChild(petal);
    setTimeout(() => petal.remove(), 11000);
}
setInterval(createPetal, 700);

// ------------------------------
// 2. مؤشر كتابة (Typing effect)
// ------------------------------
const motivations = [
    "💖 إبتسامة حبيبك هديتنا الحقيقية ❤️❤️❤️",
    "كل قطعة مصنوعة يدويًا بحب🌸",
    "لأن الحب يستحق أن يُهدى بورق وخيط✨",
    "اختاري الهدية اللي تعبر عن مشاعرك🎀"
];
let motIndex = 0;
let charIndex = 0;
function typeMotivation() {
    if (charIndex < motivations[motIndex].length) {
        document.getElementById("motivationText").innerHTML = "✨ " + motivations[motIndex].substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeMotivation, 80);
    } else {
        setTimeout(() => {
            charIndex = 0;
            motIndex = (motIndex + 1) % motivations.length;
            typeMotivation();
        }, 3000);
    }
}
typeMotivation();

// ------------------------------
// 3. شعار يومي
// ------------------------------
const dailyMessages = {
    0: "💝 الأحد: يوم الورود البيضاء",
    1: "💖 الإثنين: ابدئي أسبوعك بهدية حب",
    2: "💗 الثلاثاء: اختاري الخيوط الوردية",
    3: "💕 الأربعاء: هدية منتصف الأسبوع",
    4: "💓 الخميس: استعدي لعطلة رومانسية",
    5: "💞 الجمعة: يوم العائلة والحب",
    6: "💘 السبت: نهاية أسبوع سعيدة بهدية"
};
const day = new Date().getDay();
document.getElementById("dailyBadge").innerHTML = dailyMessages[day];

// ------------------------------
// 4. فيديو الهيرو (ضعي رابطك هنا)
// ------------------------------
const heroVideo = document.getElementById("heroVideo");
if (heroVideo) {
    // ضعي رابط الفيديو أو GIF من TOP4TOP هنا
    heroVideo.src = "https://l.top4top.io/m_3771sao671.mp4"; // اكتبي الرابط هنا بالكامل
    heroVideo.load();
}

// ------------------------------
// 5. خلفية متغيرة حسب الوقت (نهار/ليل تلقائي + زر)
// ------------------------------
function setThemeByTime() {
    const hour = new Date().getHours();
    if (hour >= 19 || hour < 6) {
        document.body.classList.add('dark-mode', 'night');
        document.body.classList.remove('day');
        document.getElementById("themeToggle").innerHTML = "☀️";
    } else {
        document.body.classList.add('day');
        document.body.classList.remove('dark-mode', 'night');
        document.getElementById("themeToggle").innerHTML = "🌙";
    }
}
setThemeByTime();
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    document.getElementById("themeToggle").innerHTML = isDark ? "☀️" : "🌙";
});

// ------------------------------
// 6. المناسبات
// ------------------------------
const occasionSuggestions = {
    birthday: "🎂 عيد ميلاد: تاج ورقى باسم الشخص مع زهور صغيرة",
    eid: "🕌 بعد العيد: علبة ورد وخيوط ذهبية مكتوب عليها كل عام وأنتم بخير",
    engagement: "💍 خطوبة: صندوق ورقي أبيض وذهبي مع خيوط لؤلؤية",
    wedding: "🕯️ ذكرى زواج: لوحة خشبية بأسمائكم وتاريخ الزفاف",
    love: "💘 عيد حب: باقة ورد بالخيوط الحمراء + قلب منقوش عليه اسمكما",
    apology: "🕊️ اعتذار/صلح: رسالة معطرة بخيوط حرير + وردة بيضاء",
    distance: "✈️ بعيد عنك: خريطة ورقية للمسافة بينكما وخيط يوصلكما"
};
document.querySelectorAll('.occasion-card').forEach(card => {
    card.addEventListener('click', () => {
        const occ = card.dataset.occasion;
        document.getElementById('occasionMessage').innerHTML = `<strong>🎁 اقتراح هدية:</strong> ${occasionSuggestions[occ] || "هدية مميزة بتناسب مناسبتك الجميلة 💕"}`;
    });
});

// ------------------------------
// 7. المنتجات + تقييم + أفضل مبيع
// ------------------------------
let products = [
    { media: "https://l.top4top.io/p_3771f9a5l1.jpg", name: "قلب بالخيوط الوردي ♡", price: "25$", rating: 5, bestSeller: true },
    { media: "https://h.top4top.io/p_3771pjm5b1.jpg", name: "باقة ورق باسمكما ♡", price: "35$", rating: 4, bestSeller: false },
    { media: "https://a.top4top.io/p_37719s3n81.jpg", name: "صندوق الخيوط الذهبي ♡", price: "45$", rating: 5, bestSeller: false }
];

let testimonials = [
    { text: "الهدية جاتني بالاسم المنقوش عليه، زوجي انبهر 🤍", author: "سارة", rating: 5 },
    { text: "أجمل بوكيه ورد شفته بحياتي، خيوط ذهبية وناعمة", author: "مريم", rating: 5 },
    { text: "توصيل سريع والشغل يدوي دقيق جدًا", author: "نورا", rating: 4 }
];

function showLoader(show) {
    const loader = document.getElementById("loaderOverlay");
    if (loader) loader.style.display = show ? "flex" : "none";
}
function showToast(msg) {
    const toast = document.getElementById("toastNotification");
    toast.innerHTML = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
}

function renderProducts() {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;
    grid.innerHTML = "";
    products.forEach((p, idx) => {
        const card = document.createElement("div");
        card.className = "product-card";
        let bestBadge = p.bestSeller ? '<div class="best-seller-badge">⭐ الأكثر مبيعاً هذا الأسبوع</div>' : '';
        let ratingStars = '';
        for (let i = 1; i <= 5; i++) {
            ratingStars += `<span class="rating-star ${i <= p.rating ? 'selected' : ''}" data-product="${idx}" data-star="${i}">★</span>`;
        }
        card.innerHTML = `
            ${bestBadge}
            <img class="product-media" src="${p.media}" alt="${p.name}" data-product-idx="${idx}">
            <div class="product-name">${p.name}</div>
            <div class="product-price">${p.price}</div>
            <div class="rating">${ratingStars}</div>
            <div class="share-buttons">
                <button class="share-btn whatsapp-share" data-name="${p.name}" data-price="${p.price}">💬 واتساب</button>
                <button class="share-btn copy-product" data-name="${p.name}">🔗 نسخ الرابط</button>
            </div>
        `;
        grid.appendChild(card);
    });
    
    // معاينة سريعة
    document.querySelectorAll('.product-media').forEach(img => {
        img.addEventListener('click', (e) => {
            const idx = img.dataset.productIdx;
            const p = products[idx];
            document.getElementById("modalImg").src = p.media;
            document.getElementById("modalName").innerText = p.name;
            document.getElementById("modalPrice").innerText = p.price;
            document.getElementById("quickViewModal").style.display = "flex";
        });
    });
    
    // تقييم النجوم
    document.querySelectorAll('.rating-star').forEach(star => {
        star.addEventListener('click', (e) => {
            const productIdx = parseInt(star.dataset.product);
            const starVal = parseInt(star.dataset.star);
            products[productIdx].rating = starVal;
            renderProducts();
            const newTestimonial = {
                text: `⭐ أعجبتني جداً ${products[productIdx].name} تستحق ${starVal} نجوم!`,
                author: "عميلة جديدة",
                rating: starVal
            };
            testimonials.unshift(newTestimonial);
            renderTestimonials();
            showToast("🎀 شكراً لتقييمك! رأيك ظهر في قسم الآراء");
        });
    });
    
    // مشاركة
    document.querySelectorAll('.whatsapp-share').forEach(btn => {
        btn.addEventListener('click', () => {
            let name = btn.dataset.name;
            let price = btn.dataset.price;
            window.open(`https://wa.me/?text=${encodeURIComponent(`🛍️ أريد شراء ${name} بسعر ${price} من Velora 💖`)}`, '_blank');
        });
    });
    document.querySelectorAll('.copy-product').forEach(btn => {
        btn.addEventListener('click', () => {
            let productName = btn.dataset.name;
            navigator.clipboard.writeText(window.location.href + "?product=" + encodeURIComponent(productName));
            showToast("✅ تم نسخ رابط المنتج");
        });
    });
}

function renderTestimonials() {
    const grid = document.getElementById("testimonialsGrid");
    if (!grid) return;
    grid.innerHTML = "";
    testimonials.slice(0, 6).forEach(t => {
        let stars = '★'.repeat(t.rating) + '☆'.repeat(5-t.rating);
        const div = document.createElement("div");
        div.className = "testimonial-card";
        div.innerHTML = `"${t.text}"<br>— ${t.author}<br><span style="color:gold">${stars}</span>`;
        grid.appendChild(div);
    });
}

renderProducts();
renderTestimonials();

// ------------------------------
// 8. إغلاق المعاينة السريعة
// ------------------------------
document.querySelector(".close-modal")?.addEventListener("click", () => {
    document.getElementById("quickViewModal").style.display = "none";
});
document.getElementById("modalOrderBtn")?.addEventListener("click", () => {
    const name = document.getElementById("modalName").innerText;
    window.open(`https://wa.me/?text=${encodeURIComponent(`أريد طلب ${name} من Velora 💖`)}`, '_blank');
});

// ------------------------------
// 9. مشاركة الموقع
// ------------------------------
document.getElementById("shareWhatsappBtn")?.addEventListener("click", () => {
    window.open(`https://wa.me/?text=${encodeURIComponent("مرحباً، تعالوا شوفوا هدايا Velora الجميلة: " + window.location.href)}`, '_blank');
});
document.getElementById("copyPageLinkBtn")?.addEventListener("click", () => {
    navigator.clipboard.writeText(window.location.href);
    showToast("🔗 تم نسخ رابط الموقع");
});

console.log("%c𝑽𝑬𝑳𝑶𝑹𝑨 | الموقع جاهز - متجاوب بالكامل مع لاب توب وموبايل 💖", "color:#c779b0; font-size:18px");