/* ============================================
   Finance Department of India Portal
   Search Functionality — Client-side Search Engine
   ============================================ */

$(document).ready(function () {

  /* ---- Searchable Index ---- */
  var searchIndex = [
    /* Schemes */
    { title: 'Startup India', category: 'Scheme', desc: 'Empowering entrepreneurs with funding, mentorship, and simplified compliance.', url: 'scheme-details.html?scheme=startup-india', icon: 'bi-rocket-takeoff' },
    { title: 'MSME Support Fund', category: 'Scheme', desc: 'Credit guarantee and financial assistance for micro, small and medium enterprises.', url: 'scheme-details.html?scheme=msme-support', icon: 'bi-building-gear' },
    { title: 'Women Entrepreneurship', category: 'Scheme', desc: 'Dedicated financial programs supporting women-led businesses across India.', url: 'scheme-details.html?scheme=women-entrepreneurship', icon: 'bi-gender-female' },
    { title: 'Digital India Finance', category: 'Scheme', desc: 'Driving cashless economy with digital payments and fintech innovation.', url: 'scheme-details.html?scheme=digital-india', icon: 'bi-cpu' },
    { title: 'Pradhan Mantri Awas Yojana', category: 'Scheme', desc: 'Housing for all initiative with interest subsidy on home loans.', url: 'scheme-details.html?scheme=pmay', icon: 'bi-house-door' },
    { title: 'Jan Dhan Yojana', category: 'Scheme', desc: 'Financial inclusion — zero-balance bank accounts for all citizens.', url: 'scheme-details.html?scheme=jan-dhan', icon: 'bi-bank2' },
    { title: 'Kisan Samman Nidhi', category: 'Scheme', desc: 'Direct income support of ₹6,000 annually to farmer families.', url: 'scheme-details.html?scheme=kisan-samman', icon: 'bi-tree' },
    { title: 'MUDRA Yojana', category: 'Scheme', desc: 'Micro Units Development and Refinance Agency loans up to ₹10 Lakh.', url: 'scheme-details.html?scheme=mudra-yojana', icon: 'bi-lightning' },
    { title: 'Atal Pension Yojana', category: 'Scheme', desc: 'Guaranteed pension scheme for unorganized sector workers.', url: 'scheme-details.html?scheme=atal-pension', icon: 'bi-shield-check' },

    /* Budget */
    { title: 'Union Budget 2026-27', category: 'Budget', desc: 'Complete budget document with key highlights and allocations.', url: 'budget-details.html', icon: 'bi-wallet2' },
    { title: 'Budget Allocation Overview', category: 'Budget', desc: 'Key financial allocations across major sectors of the Indian economy.', url: 'budget.html', icon: 'bi-bar-chart-line' },
    { title: 'Economic Survey 2025-26', category: 'Budget', desc: 'Annual economic analysis and outlook for India.', url: 'budget-details.html?section=survey', icon: 'bi-graph-up-arrow' },
    { title: 'Expenditure Details', category: 'Budget', desc: 'Detailed breakdown of government expenditure across departments.', url: 'budget-details.html?section=expenditure', icon: 'bi-cash-stack' },

    /* Services */
    { title: 'GST Services', category: 'Service', desc: 'File and track GST returns online.', url: 'tax-services.html', icon: 'bi-receipt-cutoff' },
    { title: 'Income Tax Filing', category: 'Service', desc: 'Online income tax return filing and guidelines.', url: 'tax-services.html', icon: 'bi-percent' },
    { title: 'Tax Services', category: 'Service', desc: 'Comprehensive tax services portal for citizens and businesses.', url: 'tax-services.html', icon: 'bi-receipt' },
    { title: 'Citizen Portal', category: 'Service', desc: 'Essential financial services for citizens at your fingertips.', url: 'citizen-services.html', icon: 'bi-people' },
    { title: 'Apply for Schemes', category: 'Service', desc: 'Apply for government financial schemes online.', url: 'apply.html', icon: 'bi-pencil-square' },
    { title: 'Reports & Downloads', category: 'Service', desc: 'Download fiscal reports, budget documents, and circulars.', url: 'reports.html', icon: 'bi-file-earmark-arrow-down' },
    { title: 'Financial Aid & Subsidies', category: 'Service', desc: 'Information on subsidies and financial assistance programs.', url: 'service-details.html', icon: 'bi-currency-rupee' },

    /* News */
    { title: 'Union Budget 2026-27: Key Highlights', category: 'News', desc: 'Record allocations for infrastructure, healthcare, and education sectors.', url: 'news-details.html?news=budget-highlights', icon: 'bi-newspaper' },
    { title: 'Digital Payment Transactions Cross 20B Monthly', category: 'News', desc: 'UPI ecosystem sets global benchmarks with unprecedented growth.', url: 'news-details.html?news=digital-payments', icon: 'bi-phone' },
    { title: 'G20 Finance Ministers Praise India', category: 'News', desc: 'India\'s fiscal management receives accolades at the G20 summit.', url: 'news-details.html?news=g20-praise', icon: 'bi-globe' },

    /* Pages */
    { title: 'About the Ministry', category: 'Page', desc: 'Learn about the Finance Ministry — its history, mission, and structure.', url: 'about.html', icon: 'bi-info-circle' },
    { title: 'Leadership', category: 'Page', desc: 'Meet the leadership team of the Finance Ministry.', url: 'leadership.html', icon: 'bi-people' },
    { title: 'Mission & Vision', category: 'Page', desc: 'Our mission, vision, and core values.', url: 'mission.html', icon: 'bi-bullseye' },
    { title: 'Organization Structure', category: 'Page', desc: 'Department hierarchy and organizational chart.', url: 'organization.html', icon: 'bi-diagram-3' },
    { title: 'Contact Us', category: 'Page', desc: 'Get in touch with the Finance Department.', url: 'contact.html', icon: 'bi-telephone' },
    { title: 'Citizen Login', category: 'Page', desc: 'Login to access citizen services and track applications.', url: 'login.html', icon: 'bi-person-circle' },
    { title: 'FAQ', category: 'Page', desc: 'Frequently asked questions about GST, tax filing, schemes and more.', url: 'faq.html', icon: 'bi-question-circle' },
    { title: 'Financial Analytics', category: 'Page', desc: 'Interactive charts and data on India\'s financial performance.', url: 'analytics.html', icon: 'bi-pie-chart' },
    { title: 'Media & Press Releases', category: 'Page', desc: 'Photo gallery, press releases, and media coverage.', url: 'media.html', icon: 'bi-camera-reels' }
  ];

  var $input = $('#navSearchInput');
  var $results = $('#searchResults');

  if (!$input.length) return;

  /* ---- Category colors ---- */
  var catColors = {
    'Scheme': '#10b981',
    'Budget': '#2563eb',
    'Service': '#f4a020',
    'News': '#ef4444',
    'Page': '#8b5cf6'
  };

  /* ---- Live Search ---- */
  $input.on('input', function () {
    var query = $(this).val().trim().toLowerCase();

    if (query.length < 2) {
      $results.removeClass('show').html('');
      return;
    }

    var matches = searchIndex.filter(function (item) {
      return item.title.toLowerCase().indexOf(query) !== -1 ||
             item.desc.toLowerCase().indexOf(query) !== -1 ||
             item.category.toLowerCase().indexOf(query) !== -1;
    }).slice(0, 8); // Max 8 results

    if (matches.length === 0) {
      $results.html('<div class="search-no-result"><i class="bi bi-search me-2"></i>No results found for "' + query + '"</div>').addClass('show');
      return;
    }

    var html = '';
    matches.forEach(function (item) {
      var highlightedTitle = item.title.replace(
        new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi'),
        '<mark>$1</mark>'
      );
      html += '<a href="' + item.url + '" class="search-result-item">' +
        '<div class="search-result-icon"><i class="bi ' + item.icon + '"></i></div>' +
        '<div class="search-result-info">' +
          '<div class="search-result-title">' + highlightedTitle + '</div>' +
          '<div class="search-result-desc">' + item.desc + '</div>' +
        '</div>' +
        '<span class="search-result-cat" style="background:' + (catColors[item.category] || '#6c757d') + '">' + item.category + '</span>' +
      '</a>';
    });

    $results.html(html).addClass('show');
  });

  /* ---- Close on outside click ---- */
  $(document).on('click', function (e) {
    if (!$(e.target).closest('#navSearchWrap').length) {
      $results.removeClass('show');
    }
  });

  /* ---- Close on Escape ---- */
  $input.on('keydown', function (e) {
    if (e.key === 'Escape') {
      $results.removeClass('show');
      $input.blur();
    }
  });

});
