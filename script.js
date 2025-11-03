/**
 * RedTeamDev Portfolio
 * Theme switching, smooth scrolling, and interactive features
 * Structure designed for future backend integration
 */

// ===== THEME MANAGEMENT =====
const THEME_KEY = 'portfolio-theme';
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

/**
 * Initialize theme from localStorage or system preference
 */
function initTheme() {
    let savedTheme = localStorage.getItem(THEME_KEY);
    
    // If no saved theme, check system preference
    if (!savedTheme) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        savedTheme = prefersDark ? 'dark' : 'light';
    }
    
    applyTheme(savedTheme);
}

/**
 * Apply theme and update UI
 * @param {string} theme - 'dark' or 'light'
 */
function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.body.classList.toggle('light-theme', !isDark);
    
    // Update icon
    const icon = themeToggleBtn.querySelector('i');
    icon.classList.toggle('fa-moon', isDark);
    icon.classList.toggle('fa-sun', !isDark);
    
    // Save preference
    localStorage.setItem(THEME_KEY, theme);
}

/**
 * Toggle between dark and light themes
 */
function toggleTheme() {
    const isDarkMode = !document.body.classList.contains('light-theme');
    const newTheme = isDarkMode ? 'light' : 'dark';
    applyTheme(newTheme);
}

themeToggleBtn.addEventListener('click', toggleTheme);

// ===== SMOOTH SCROLLING =====
/**
 * Smooth scroll navigation for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== SCROLL TO TOP BUTTON =====
const scrollToTopBtn = document.getElementById('scroll-to-top');

/**
 * Show/hide scroll to top button based on scroll position
 */
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

/**
 * Scroll to top on button click
 */
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== INTERACTIVE ELEMENTS =====
/**
 * Add interactivity to project cards
 */
const projectLinks = document.querySelectorAll('.project-link');
projectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Replace with actual project routing logic
        console.log('Project clicked:', link.textContent);
    });
});

/**
 * Handle resume download
 */
const resumeDownloadBtn = document.getElementById('resume-download');
if (resumeDownloadBtn) {
    resumeDownloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // TODO: Replace with actual resume file path
        console.log('Resume download initiated. Replace with actual file path.');
        // Example: window.location.href = '/path/to/resume.pdf';
        alert('Resume link will be set up. Update the src in script.js');
    });
}

// ===== BACKEND INTEGRATION HOOKS =====
/**
 * Placeholder for future API calls
 * These functions can be extended to integrate with backend
 */

/**
 * Fetch projects from backend
 * @returns {Promise<Array>} Array of project objects
 */
async function fetchProjects() {
    try {
        // TODO: Replace with actual API endpoint
        // const response = await fetch('/api/projects');
        // const projects = await response.json();
        // return projects;
        console.log('fetchProjects() - Ready for backend integration');
        return [];
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}

/**
 * Fetch blog posts from backend
 * @returns {Promise<Array>} Array of blog post objects
 */
async function fetchBlogPosts() {
    try {
        // TODO: Replace with actual API endpoint
        // const response = await fetch('/api/blog/posts');
        // const posts = await response.json();
        // return posts;
        console.log('fetchBlogPosts() - Ready for backend integration');
        return [];
    } catch (error) {
        console.error('Error fetching blog posts:', error);
    }
}

/**
 * Submit contact form
 * @param {FormData} formData - Form data to submit
 * @returns {Promise<Object>} Response from server
 */
async function submitContactForm(formData) {
    try {
        // TODO: Replace with actual API endpoint
        // const response = await fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // });
        // return await response.json();
        console.log('submitContactForm() - Ready for backend integration');
        return { success: true };
    } catch (error) {
        console.error('Error submitting form:', error);
    }
}

// ===== INITIALIZATION =====
/**
 * Initialize all components on page load
 */
function init() {
    initTheme();
    console.log('Portfolio initialized. Ready for backend integration.');
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}