// scripts.js
const waitForElements = () => {
  const sidebarContent = document.querySelector('#sidebar-content');
  if (!sidebarContent) {
    setTimeout(waitForElements, 100);
    return;
  }
  
document.addEventListener('DOMContentLoaded', () => {
  // Find the sidebar content container
  const sidebarContent = document.querySelector('#sidebar-content');
  if (!sidebarContent) {
    console.error('Sidebar content (#sidebar-content) not found');
    return;
  }

  // Create header container for logo and theme toggle
  const headerContainer = document.createElement('div');
  headerContainer.className = 'flex justify-between items-center mb-6';

  // Move the logo
  const logoLink = document.querySelector('a[href="/"]');
  if (logoLink) {
    const logoImgs = logoLink.querySelectorAll('img.nav-logo');
    logoImgs.forEach(img => {
      img.classList.add('px-1', 'h-6', 'max-w-48');
      img.classList.remove('h-7'); // Remove old height class if present
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

  // Move the search input
  const searchButton = document.querySelector('#search-bar-entry');
  if (searchButton) {
    searchWrapper.appendChild(searchButton);
    searchContainer.appendChild(searchWrapper);
  } else {
    console.error('Search button (#search-bar-entry) not found');
  }

  // Insert the header and search containers at the top of the sidebar
  const navigationItems = sidebarContent.querySelector('#navigation-items');
  if (navigationItems) {
    sidebarContent.insertBefore(searchContainer, navigationItems);
    sidebarContent.insertBefore(headerContainer, searchContainer);
  } else {
    console.error('Navigation items (#navigation-items) not found');
    sidebarContent.prepend(searchContainer);
    sidebarContent.prepend(headerContainer);
  }
});
  };
document.addEventListener('DOMContentLoaded', waitForElements);
  