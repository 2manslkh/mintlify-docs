// scripts.js

console.log('scripts.js loaded');

function setupSidebar() {
  const sidebarContent = document.querySelector('#sidebar-content');
  if (!sidebarContent) {
    console.error('Sidebar content (#sidebar-content) not found');
    return;
  }

  // Create header container for logo and theme toggle
  const headerContainer = document.createElement('div');
  headerContainer.className = 'flex justify-between items-center mb-6';

  // Move the logo
  const logoLink = document.querySelector('div.flex.items-center.lg\\:px-12.h-16.min-w-0.px-4 a[href="/"]');
  if (logoLink) {
    const logoImgs = logoLink.querySelectorAll('img.nav-logo');
    logoImgs.forEach(img => {
      img.classList.add('px-1', 'h-6', 'max-w-48');
      img.classList.remove('h-7');
    });
    headerContainer.appendChild(logoLink);
  } else {
    console.error('Logo link not found');
  }

  // Move the theme toggle
  const themeToggle = document.querySelector('button[aria-label="Toggle dark mode"]');
  if (themeToggle) {
    const themeContainer = document.createElement('div');
    themeContainer.className = 'relative flex h-7 w-[3.25rem] items-center rounded-full border border-gray-200/70 dark:border-white/[0.07] hover:border-gray-200 dark:hover:border-white/10 p-1';
    const themeInner = document.createElement('div');
    themeInner.className = 'z-10 flex w-full items-center justify-between px-1';
    themeInner.appendChild(themeToggle);
    const toggleIndicator = document.createElement('div');
    toggleIndicator.className = 'absolute left-1 h-5 w-5 rounded-full bg-gray-100 dark:bg-white/[0.07] transition-transform duration-200 dark:translate-x-[1.40rem]';
    themeContainer.appendChild(themeInner);
    themeContainer.appendChild(toggleIndicator);
    headerContainer.appendChild(themeContainer);
  } else {
    console.error('Theme toggle not found');
  }

  // Create search container
  const searchContainer = document.createElement('div');
  searchContainer.className = 'flex flex-col gap-4 mt-6';
  const searchWrapper = document.createElement('div');
  searchWrapper.className = 'relative hidden lg:flex items-center flex-1 justify-center';

  // Move the search input (desktop and mobile)
  const searchButton = document.querySelector('#search-bar-entry, #search-bar-entry-mobile');
  if (searchButton) {
    searchWrapper.appendChild(searchButton);
    searchContainer.appendChild(searchWrapper);
  } else {
    console.error('Search button (#search-bar-entry or #search-bar-entry-mobile) not found');
  }

  // Insert containers at the top of the sidebar
  const navigationItems = sidebarContent.querySelector('#navigation-items');
  if (navigationItems) {
    sidebarContent.insertBefore(searchContainer, navigationItems);
    sidebarContent.insertBefore(headerContainer, searchContainer);
  } else {
    console.error('Navigation items (#navigation-items) not found');
    sidebarContent.prepend(searchContainer);
    sidebarContent.prepend(headerContainer);
  }
}

// Use MutationObserver to wait for the sidebar and topbar elements
const observer = new MutationObserver(() => {
  const sidebarContent = document.querySelector('#sidebar-content');
  const logoLink = document.querySelector('div.flex.items-center.lg\\:px-12.h-16.min-w-0.px-4 a[href="/"]');
  const themeToggle = document.querySelector('button[aria-label="Toggle dark mode"]');
  const searchButton = document.querySelector('#search-bar-entry, #search-bar-entry-mobile');

  if (sidebarContent && (logoLink || themeToggle || searchButton)) {
    setupSidebar();
    observer.disconnect(); // Stop observing once elements are found
  }
});

// Observe the document body for changes
observer.observe(document.body, { childList: true, subtree: true });

// Fallback: Try setup after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded fired');
  setupSidebar();
});