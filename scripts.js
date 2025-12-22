function handlePageChange() {
    const content = document.getElementById('content');
    if (content) {
        if (window.location.pathname.includes('about-us')) {
            content.classList.remove('isolate');
            content.classList.add('full-page-mode');
        } else {
            // Optional: Re-add them if navigating away to a normal page
            content.classList.add('isolate');
            content.classList.remove('full-page-mode');
        }
    }
}

// 1. Run on initial load
if (document.readyState === 'complete') {
    handlePageChange();
} else {
    window.addEventListener('load', handlePageChange);
}

// 2. Watch for SPA navigation changes
const observer = new MutationObserver((mutations) => {
    handlePageChange();
});

// Watch the body for changes in the page content
observer.observe(document.body, {
    childList: true,
    subtree: true
});