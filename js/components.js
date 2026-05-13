/* ============================================
   Finance Department of India Portal
   Shared Components — Navbar & Footer Injection
   ============================================ */

(function () {
  'use strict';

  /* ---- Determine active page ---- */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(page) {
    if (Array.isArray(page)) return page.indexOf(currentPage) !== -1 ? 'active' : '';
    return currentPage === page ? 'active' : '';
  }

  /* ---- Navbar HTML ---- */
  var navbarHTML = `
  <nav class="navbar navbar-expand-lg navbar-finance" id="mainNavbar">
    <div class="container-fluid px-3 px-xl-5">
      <a class="navbar-brand" href="index.html">
        <img src="images/logo.png" alt="Finance Department of India Logo">
        <span>Finance Dept. of India</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav ms-auto align-items-lg-center">
          <li class="nav-item">
            <a class="nav-link ${isActive('index.html')}" href="index.html">Home</a>
          </li>

          <!-- Ministry Dropdown -->
          <li class="nav-item dropdown mega-dropdown">
            <a class="nav-link dropdown-toggle ${isActive(['about.html','leadership.html','mission.html','organization.html'])}" href="#" data-bs-toggle="dropdown" aria-expanded="false">Ministry</a>
            <div class="dropdown-menu mega-menu-wrap">
              <div class="mega-menu-grid">
                <div class="mega-col">
                  <h6><i class="bi bi-building me-1"></i> About</h6>
                  <a href="about.html"><i class="bi bi-info-circle"></i> About Ministry</a>
                  <a href="leadership.html"><i class="bi bi-people"></i> Leadership</a>
                  <a href="mission.html"><i class="bi bi-bullseye"></i> Mission &amp; Vision</a>
                  <a href="organization.html"><i class="bi bi-diagram-3"></i> Organization</a>
                </div>
                <div class="mega-col">
                  <h6><i class="bi bi-file-earmark-text me-1"></i> Policies</h6>
                  <a href="reports.html"><i class="bi bi-journal-text"></i> Policy Documents</a>
                  <a href="reports.html"><i class="bi bi-file-earmark-ruled"></i> Circulars &amp; Orders</a>
                  <a href="reports.html"><i class="bi bi-shield-check"></i> RTI Information</a>
                  <a href="faq.html"><i class="bi bi-question-circle"></i> FAQ</a>
                </div>
                <div class="mega-col">
                  <h6><i class="bi bi-graph-up me-1"></i> Statistics</h6>
                  <a href="analytics.html"><i class="bi bi-bar-chart-line"></i> Financial Analytics</a>
                  <a href="analytics.html"><i class="bi bi-pie-chart"></i> Economic Indicators</a>
                  <a href="reports.html"><i class="bi bi-clipboard2-data"></i> Annual Reports</a>
                </div>
                <div class="mega-col">
                  <h6><i class="bi bi-link-45deg me-1"></i> Quick Access</h6>
                  <a href="contact.html"><i class="bi bi-telephone"></i> Contact Us</a>
                  <a href="login.html"><i class="bi bi-person-circle"></i> Citizen Login</a>
                  <a href="apply.html"><i class="bi bi-pencil-square"></i> Apply Online</a>
                  <a href="media.html"><i class="bi bi-camera-reels"></i> Media Gallery</a>
                </div>
              </div>
            </div>
          </li>

          <!-- Budget Dropdown -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle ${isActive(['budget.html','budget-details.html'])}" href="#" data-bs-toggle="dropdown" aria-expanded="false">Budget</a>
            <ul class="dropdown-menu dropdown-glass">
              <li><a class="dropdown-item" href="budget.html"><i class="bi bi-wallet2 me-2"></i>Union Budget</a></li>
              <li><a class="dropdown-item" href="budget-details.html"><i class="bi bi-cash-stack me-2"></i>Expenditure Details</a></li>
              <li><a class="dropdown-item" href="budget-details.html?section=survey"><i class="bi bi-graph-up me-2"></i>Economic Survey</a></li>
              <li><a class="dropdown-item" href="reports.html"><i class="bi bi-file-earmark-pdf me-2"></i>Budget Reports</a></li>
            </ul>
          </li>

          <!-- Schemes -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle ${isActive(['schemes.html','scheme-details.html'])}" href="#" data-bs-toggle="dropdown" aria-expanded="false">Schemes</a>
            <ul class="dropdown-menu dropdown-glass">
              <li><a class="dropdown-item" href="schemes.html"><i class="bi bi-grid me-2"></i>All Schemes</a></li>
              <li><a class="dropdown-item" href="scheme-details.html?scheme=startup-india"><i class="bi bi-rocket-takeoff me-2"></i>Startup India</a></li>
              <li><a class="dropdown-item" href="scheme-details.html?scheme=msme-support"><i class="bi bi-building-gear me-2"></i>MSME Support</a></li>
              <li><a class="dropdown-item" href="scheme-details.html?scheme=mudra-yojana"><i class="bi bi-lightning me-2"></i>MUDRA Yojana</a></li>
              <li><hr class="dropdown-divider" style="border-color:rgba(255,255,255,0.1);"></li>
              <li><a class="dropdown-item" href="apply.html"><i class="bi bi-pencil-square me-2"></i>Apply for Scheme</a></li>
            </ul>
          </li>

          <!-- Services -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle ${isActive(['services.html','tax-services.html','citizen-services.html','service-details.html'])}" href="#" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
            <ul class="dropdown-menu dropdown-glass">
              <li><a class="dropdown-item" href="tax-services.html"><i class="bi bi-receipt me-2"></i>Tax Services</a></li>
              <li><a class="dropdown-item" href="citizen-services.html"><i class="bi bi-people me-2"></i>Citizen Portal</a></li>
              <li><a class="dropdown-item" href="service-details.html"><i class="bi bi-gear me-2"></i>Service Details</a></li>
              <li><a class="dropdown-item" href="reports.html"><i class="bi bi-file-earmark-arrow-down me-2"></i>Reports &amp; Downloads</a></li>
            </ul>
          </li>

          <!-- Analytics -->
          <li class="nav-item">
            <a class="nav-link ${isActive('analytics.html')}" href="analytics.html">Analytics</a>
          </li>

          <!-- Reports -->
          <li class="nav-item">
            <a class="nav-link ${isActive('reports.html')}" href="reports.html">Reports</a>
          </li>

          <!-- Media -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle ${isActive(['media.html','news.html','news-details.html'])}" href="#" data-bs-toggle="dropdown" aria-expanded="false">Media</a>
            <ul class="dropdown-menu dropdown-glass">
              <li><a class="dropdown-item" href="news.html"><i class="bi bi-newspaper me-2"></i>News &amp; Updates</a></li>
              <li><a class="dropdown-item" href="media.html"><i class="bi bi-camera-reels me-2"></i>Photo Gallery</a></li>
              <li><a class="dropdown-item" href="media.html"><i class="bi bi-megaphone me-2"></i>Press Releases</a></li>
            </ul>
          </li>

          <!-- Contact CTA -->
          <li class="nav-item">
            <a class="nav-link nav-cta" href="contact.html">Contact</a>
          </li>
        </ul>

        <!-- Nav Extras -->
        <div class="nav-extras d-none d-lg-flex">
          <div class="nav-search" id="navSearchWrap">
            <i class="bi bi-search"></i>
            <input type="text" placeholder="Search..." id="navSearchInput" autocomplete="off">
            <div class="search-results-dropdown" id="searchResults"></div>
          </div>
          <button class="nav-icon-btn" id="notifBtn" title="Notifications">
            <i class="bi bi-bell"></i>
            <span class="nav-badge">3</span>
          </button>
          <button class="nav-icon-btn" id="darkToggle" title="Toggle Dark Mode">
            <i class="bi bi-moon-fill"></i>
          </button>
          <a href="login.html" class="nav-icon-btn" title="Citizen Login">
            <i class="bi bi-person-circle"></i>
          </a>
        </div>
      </div>
    </div>
  </nav>

  <!-- Notification Popup -->
  <div class="notification-popup" id="notifPopup">
    <div class="notif-header"><h6 class="mb-0">Notifications</h6><button class="btn-close btn-close-white btn-sm" id="notifClose"></button></div>
    <div class="notif-body">
      <div class="notif-item unread"><i class="bi bi-megaphone-fill text-gold"></i><div><strong>Union Budget 2026-27 Released</strong><p class="mb-0">Key highlights and allocations now available for download.</p><small>2 hours ago</small></div></div>
      <div class="notif-item unread"><i class="bi bi-lightning-fill text-gold"></i><div><strong>GST Filing Deadline Extended</strong><p class="mb-0">New deadline: August 31, 2026 for FY 2025-26.</p><small>5 hours ago</small></div></div>
      <div class="notif-item"><i class="bi bi-graph-up-arrow text-gold"></i><div><strong>GDP Growth at 7.2%</strong><p class="mb-0">India leads among major economies in Q1 2026.</p><small>1 day ago</small></div></div>
    </div>
  </div>`;

  /* ---- Footer HTML ---- */
  var footerHTML = `
  <footer class="footer" id="siteFooter">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-3">
          <div class="footer-brand">
            <h5><i class="bi bi-bank2 me-2 text-gold"></i>Finance Dept. of India</h5>
            <p>The Ministry of Finance manages the administration of finances of the Government of India and economic policy making.</p>
            <div class="footer-social">
              <a href="#" aria-label="Twitter"><i class="bi bi-twitter-x"></i></a>
              <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
              <a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
              <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-4">
          <h5>Quick Links</h5>
          <ul class="footer-links">
            <li><a href="about.html">About Ministry</a></li>
            <li><a href="budget.html">Union Budget</a></li>
            <li><a href="schemes.html">Schemes</a></li>
            <li><a href="tax-services.html">Tax Services</a></li>
            <li><a href="citizen-services.html">Citizen Portal</a></li>
            <li><a href="analytics.html">Analytics</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-4">
          <h5>Important</h5>
          <ul class="footer-links">
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="login.html">Citizen Login</a></li>
            <li><a href="apply.html">Apply Online</a></li>
            <li><a href="leadership.html">Leadership</a></li>
            <li><a href="reports.html">Reports</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-4">
          <h5>Policies</h5>
          <ul class="footer-links">
            <li><a href="faq.html">Privacy Policy</a></li>
            <li><a href="faq.html">Terms of Use</a></li>
            <li><a href="faq.html">Accessibility</a></li>
            <li><a href="reports.html">RTI Portal</a></li>
            <li><a href="faq.html">Disclaimer</a></li>
            <li><a href="faq.html">Sitemap</a></li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h5>Gallery</h5>
          <div class="footer-mini-gallery">
            <img src="images/about.png" alt="Finance Ministry Meeting">
            <img src="images/startup.png" alt="Startup Summit">
            <img src="images/gallery-1.png" alt="Economic Conference">
            <img src="images/digital-india.png" alt="Digital India">
            <img src="images/rural-banking.png" alt="Rural Banking">
            <img src="images/tax-office.png" alt="Tax Services">
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="mb-0">&copy; 2026 Finance Department of India. All Rights Reserved. |
          <a href="faq.html" class="text-gold">Privacy</a> |
          <a href="faq.html" class="text-gold">Terms</a> |
          <a href="faq.html" class="text-gold">Accessibility</a> |
          Designed with <i class="bi bi-heart-fill text-gold"></i> for India
        </p>
      </div>
    </div>
  </footer>`;

  /* ---- Inject Components ---- */
  function injectComponents() {
    /* Navbar */
    var navPlaceholder = document.getElementById('navbar-placeholder');
    if (navPlaceholder) {
      navPlaceholder.innerHTML = navbarHTML;
    }

    /* Footer */
    var footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
      footerPlaceholder.innerHTML = footerHTML;
    }

    /* Add scrolled class for non-home pages */
    if (currentPage !== 'index.html') {
      var nav = document.querySelector('.navbar-finance');
      if (nav) nav.classList.add('scrolled');
    }

    /* Init notification popup */
    initNotifications();
  }

  /* ---- Notifications Panel ---- */
  function initNotifications() {
    var notifBtn = document.getElementById('notifBtn');
    var notifPopup = document.getElementById('notifPopup');
    var notifClose = document.getElementById('notifClose');

    if (notifBtn && notifPopup) {
      notifBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        notifPopup.classList.toggle('show');
        var badge = notifBtn.querySelector('.nav-badge');
        if (badge) badge.style.display = 'none';
      });
      if (notifClose) {
        notifClose.addEventListener('click', function () {
          notifPopup.classList.remove('show');
        });
      }
      document.addEventListener('click', function (e) {
        if (!notifPopup.contains(e.target) && e.target !== notifBtn) {
          notifPopup.classList.remove('show');
        }
      });
    }
  }

  /* ---- Run on DOM Ready ---- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectComponents);
  } else {
    injectComponents();
  }

})();
