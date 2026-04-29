<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=yes">
    <title>𝑽𝑬𝑳𝑶𝑹𝑨 هدايا من القلب</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap" rel="stylesheet">
</head>
<body>

    <!-- خلفيات -->
    <div class="animated-bg" id="animatedBg"></div>
    <div class="petals-container" id="petalsContainer"></div>
    <canvas id="sparkleCanvas"></canvas>
    <div class="hearts-bg" id="heartsBg"></div>

    <!-- موسيقى -->
    <audio id="bgMusic" loop>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3">
    </audio>
    <button class="music-toggle" id="musicToggle" title="تشغيل الموسيقى">🎵</button>

    <!-- زر تبديل الوضع -->
    <button class="theme-toggle" id="themeToggle">🌙</button>

    <!-- أيقونة السلة -->
    <button class="cart-icon-btn" id="cartIconBtn">
        🛒 <span class="cart-count" id="cartCount">0</span>
    </button>

    <!-- شريط التنقل العلوي -->
    <nav class="top-nav desktop-only">
        <div class="logo-area">
            <img src="https://i.top4top.io/p_377142gkw1.jpg" alt="Velora" onerror="this.style.display='none'">
            <span class="brand-name">𝑽𝑬𝑳𝑶𝑹𝑨</span>
        </div>
        <ul class="nav-menu">
            <li><a href="#home" class="nav-box">الرئيسية 🏠</a></li>
            <li><a href="#products" class="nav-box">المنتجات 🎁</a></li>
            <li><a href="#occasions" class="nav-box">المناسبات 🌸</a></li>
            <li><a href="#testimonials" class="nav-box">الآراء 💬</a></li>
            <li><a href="#contact" class="nav-box">تواصل 📞</a></li>
        </ul>
    </nav>

    <main class="main-content">

        <!-- كلمة تحفيزية -->
        <div class="motivation-card" id="motivationText">✨</div>

        <!-- شعار يومي -->
        <div class="daily-badge" id="dailyBadge"></div>

        <!-- عداد تنازلي -->
        <div class="countdown-wrapper glass" id="countdownSection">
            <div class="countdown-title">🎉 عرض العيد الخاص — ينتهي قريباً!</div>
            <div class="countdown-timer">
                <div class="time-block"><span id="cdDays">00</span><label>أيام</label></div>
                <div class="time-sep">:</div>
                <div class="time-block"><span id="cdHours">00</span><label>ساعات</label></div>
                <div class="time-sep">:</div>
                <div class="time-block"><span id="cdMinutes">00</span><label>دقائق</label></div>
                <div class="time-sep">:</div>
                <div class="time-block"><span id="cdSeconds">00</span><label>ثواني</label></div>
            </div>
        </div>

        <!-- هيرو -->
        <section id="home" class="hero">
            <div class="hero-video-container">
                <video id="heroVideo" autoplay muted loop playsinline poster="https://via.placeholder.com/800x400?text=Velora">
                    <source src="https://l.top4top.io/m_3771sao671.mp4" type="video/mp4">
                </video>
                <div class="hero-overlay"></div>
            </div>
            <div class="hero-text">
                <h1 class="typing-logo" id="typingLogo">هدايا بالحب 🎀</h1>
                <p>ورق، خيوط، ومشاعر ... نصنع لحظات لا تنسى لأحبائك</p>
                <button class="cta-btn glow-on-hover" onclick="document.getElementById('products').scrollIntoView({behavior:'smooth'})">تسوقي الآن ✨</button>
            </div>
        </section>

        <!-- مناسبات -->
        <section id="occasions" class="occasions glass">
            <h2>✦ اختاري هدية حسب المناسبة ✦</h2>
            <div class="occasions-grid">
                <div class="occasion-card" data-occasion="birthday">عيد ميلاد 🎂</div>
                <div class="occasion-card" data-occasion="eid">بعد العيد 🕌</div>
                <div class="occasion-card" data-occasion="engagement">خطوبة 💍</div>
                <div class="occasion-card" data-occasion="wedding">ذكرى زواج 🕯️</div>
                <div class="occasion-card" data-occasion="love">عيد حب 💘</div>
                <div class="occasion-card" data-occasion="apology">اعتذار/صلح 🕊️</div>
                <div class="occasion-card" data-occasion="distance">بعيد عنك ✈️</div>
            </div>
            <div id="occasionMessage" class="occasion-message"></div>
        </section>

        <!-- منتجات -->
        <section id="products" class="products">
            <h2>منتجاتنا اليدوية ✨</h2>

            <!-- شريط البحث والفلترة -->
            <div class="products-controls">
                <div class="search-bar-wrap">
                    <span class="search-icon">🔍</span>
                    <input type="text" id="productSearch" placeholder="ابحثي عن منتج..." class="search-input">
                </div>
                <div class="filter-btns">
                    <button class="filter-btn active" data-filter="all">الكل</button>
                    <button class="filter-btn" data-filter="price-asc">الأقل سعراً ↑</button>
                    <button class="filter-btn" data-filter="rating">الأعلى تقييماً ⭐</button>
                    <button class="filter-btn" data-filter="bestseller">الأكثر مبيعاً 🏆</button>
                </div>
            </div>

            <div class="products-grid" id="productsGrid"></div>
        </section>

        <!-- مؤشر تحميل -->
        <div id="loaderOverlay" class="loader-overlay" style="display: none;">
            <div class="beating-heart">💗</div>
        </div>

        <!-- آراء بالصور -->
        <section id="testimonials" class="testimonials glass">
            <h2>💬 ماذا يقولون عنا؟</h2>
            <div class="add-photo-review">
                <label class="upload-review-btn" for="reviewPhotoInput">📸 أضيفي صورة هديتك + رأيك</label>
                <input type="file" id="reviewPhotoInput" accept="image/*" style="display:none">
                <input type="text" id="reviewTextInput" placeholder="اكتبي رأيك هنا..." class="review-text-input">
                <input type="text" id="reviewNameInput" placeholder="اسمك" class="review-name-input">
                <button class="cta-btn" id="submitReviewBtn" style="margin-top:8px;">نشر الرأي 💖</button>
            </div>
            <div class="testimonials-grid" id="testimonialsGrid"></div>
        </section>

        <!-- تواصل -->
        <section id="contact" class="contact-section glass">
            <h2>📞 تواصل معنا</h2>
            <div class="social-bar">
                <a href="https://www.instagram.com/velora0_3" target="_blank" class="social-icon insta">𝒊𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎 📷</a>
                <a href="https://www.tiktok.com/@velora_0_3?_r=1&_t=ZS-95x3MJL5T7Y" target="_blank" class="social-icon tiktok">𝑻𝑰𝑲 𝑻𝑶𝑲 🎵</a>
                <button class="social-icon whatsapp" id="shareWhatsappBtn">مشاركة واتساب 💬</button>
                <button class="social-icon copyLink" id="copyPageLinkBtn">نسخ رابط الموقع 🔗</button>
            </div>
        </section>

        <footer>
            <p>𝑽𝑬𝑳𝑶𝑹𝑨 | لأن الحب يستحق أن يُهدى بورق وخيط ❤️</p>
        </footer>
    </main>

    <!-- شريط تنقل سفلي للموبايل -->
    <div class="bottom-nav mobile-only" id="bottomNav">
        <a href="#home" class="bottom-nav-item">🏠<span>الرئيسية</span></a>
        <a href="#products" class="bottom-nav-item">🎁<span>المنتجات</span></a>
        <a href="#testimonials" class="bottom-nav-item">💬<span>الآراء</span></a>
        <a href="#contact" class="bottom-nav-item">📞<span>تواصل</span></a>
    </div>

    <!-- Toast -->
    <div id="toastNotification" class="toast-notification"></div>

    <!-- معاينة سريعة -->
    <div id="quickViewModal" class="modal">
        <div class="modal-content glass">
            <span class="close-modal">&times;</span>
            <img id="modalImg" src="" alt="">
            <h3 id="modalName"></h3>
            <p id="modalPrice"></p>
            <p id="modalDesc" class="modal-desc">هدية يدوية مصنوعة بحب من ورق وخيوط. تنقش باسمكما وتوصلك مغلقة بوردة.</p>
            <button id="modalOrderBtn" class="cta-btn">أطلبه الآن 💖</button>
        </div>
    </div>

    <!-- سلة المشتريات -->
    <div id="cartModal" class="modal">
        <div class="modal-content glass" style="max-width:500px;">
            <span class="close-modal" id="closeCart">&times;</span>
            <h2 style="margin-bottom:16px;">🛒 سلة المشتريات</h2>
            <div id="cartItems"></div>
            <div class="cart-total" id="cartTotal"></div>
            <button class="cta-btn" id="cartCheckoutBtn" style="width:100%;margin-top:16px;">إتمام الطلب عبر واتساب 💬</button>
        </div>
    </div>

    <!-- لوحة التحكم -->
    <div id="adminModal" class="modal">
        <div class="modal-content glass" style="max-width:600px;max-height:90vh;overflow-y:auto;">
            <span class="close-modal" id="closeAdmin">&times;</span>
            <h2>🛡️ لوحة التحكم — Velora Admin</h2>
            <div class="admin-stats" id="adminStats"></div>
            <hr style="margin:18px 0;border-color:#f0c0e0;">
            <h3 style="margin-bottom:12px;">➕ إضافة منتج جديد</h3>
            <div class="admin-form">
                <input type="text" id="adminName" placeholder="اسم المنتج" class="admin-input">
                <input type="text" id="adminPrice" placeholder="السعر (مثال: 30$)" class="admin-input">
                <input type="text" id="adminMedia" placeholder="رابط الصورة" class="admin-input">
                <label class="admin-check"><input type="checkbox" id="adminBestSeller"> أكثر مبيعاً ⭐</label>
                <button class="cta-btn" id="adminAddBtn">إضافة المنتج ✅</button>
            </div>
            <hr style="margin:18px 0;border-color:#f0c0e0;">
            <h3 style="margin-bottom:12px;">📦 المنتجات الحالية</h3>
            <div id="adminProductsList"></div>
            <hr style="margin:18px 0;border-color:#f0c0e0;">
            <h3 style="margin-bottom:12px;">📋 سجل النشاط (Logs)</h3>
            <div id="adminLogs" class="admin-logs"></div>
        </div>
    </div>

    <!-- زر خفي للأدمن -->
    <div id="adminTrigger" class="admin-trigger" title="Admin"></div>

    <script src="script.js"></script>
</body>
</html>
