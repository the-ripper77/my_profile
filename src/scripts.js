// Sidebar toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarTrigger = document.getElementById('sidebar-trigger');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const main = document.querySelector('main');
    const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
    
    // Check if we're on mobile
    function isMobile() {
        return window.innerWidth <= 768;
    }
    
    // Initialize sidebar state
    function initSidebar() {
        if (isMobile()) {
            sidebar.classList.add('sidebar-hidden');
            main.classList.add('sidebar-hidden');
        } else {
            sidebar.classList.remove('sidebar-hidden');
            main.classList.remove('sidebar-hidden');
        }
    }
    
    // Toggle sidebar
    function toggleSidebar() {
        if (isMobile()) {
            sidebar.classList.toggle('sidebar-visible');
            sidebarOverlay.classList.toggle('active');
        }
    }
    
    // Close sidebar when clicking overlay
    function closeSidebar() {
        if (isMobile()) {
            sidebar.classList.remove('sidebar-visible');
            sidebarOverlay.classList.remove('active');
        }
    }
    
    // Event listeners
    sidebarTrigger.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);
    if (sidebarCloseBtn) {
        sidebarCloseBtn.addEventListener('click', closeSidebar);
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (!isMobile()) {
            sidebar.classList.remove('sidebar-visible');
            sidebarOverlay.classList.remove('active');
        }
        initSidebar();
    });
    
    // Initialize on page load
    initSidebar();
});

// Facebook-like Search Functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchDropdown = document.getElementById('search-dropdown');
    const searchItems = document.querySelectorAll('.search-item');
    const searchRemoveBtns = document.querySelectorAll('.search-item-remove');
    
    // Show dropdown when input is focused
    searchInput.addEventListener('focus', function() {
        searchDropdown.classList.add('show');
    });
    
    // Hide dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('#search')) {
            searchDropdown.classList.remove('show');
        }
    });
    
    // Handle search item clicks
    searchItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (!e.target.closest('.search-item-remove')) {
                const name = this.querySelector('.search-item-name').textContent;
                searchInput.value = name;
                searchDropdown.classList.remove('show');
                searchInput.blur();
            }
        });
    });
    
    // Handle remove buttons for recent searches
    searchRemoveBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const searchItem = this.closest('.search-item');
            searchItem.style.opacity = '0';
            setTimeout(() => {
                searchItem.remove();
            }, 200);
        });
    });
    
    // Keyboard navigation
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchDropdown.classList.remove('show');
            searchInput.blur();
        }
    });
});

// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle-btn');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    
    // Update toggle button icon based on current theme
    function updateToggleIcon() {
        const icon = darkModeToggle.querySelector('i');
        
        if (body.getAttribute('data-theme') === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }
    
    // Initialize toggle button
    updateToggleIcon();
    
    // Toggle dark mode
    darkModeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateToggleIcon();
        
        // Add smooth transition effect
        body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    });
});

// Scroll to Top Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    // Show/hide button based on scroll position
    function toggleBackToTopButton() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
            backToTopBtn.style.opacity = '1';
        } else {
            backToTopBtn.style.opacity = '0';
            setTimeout(() => {
                if (backToTopBtn.style.opacity === '0') {
                    backToTopBtn.style.display = 'none';
                }
            }, 300);
        }
    }
    
    // Scroll to top when button is clicked
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Listen for scroll events
    window.addEventListener('scroll', toggleBackToTopButton);
    
    // Initialize button state
    toggleBackToTopButton();
}); 