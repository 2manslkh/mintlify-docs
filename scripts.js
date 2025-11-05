// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  // Find the sidebar content container
  const sidebarContent = document.querySelector('#sidebar-content');
  if (!sidebarContent) return;

  // Create a container for logo, theme toggle, and search
  const headerContainer = document.createElement('div');
  headerContainer.className = 'flex justify-between items-center mb-6';

  // Move or clone the logo
  const logoLink = document.querySelector('a[href="/"].nav-logo').parentElement;
  if (logoLink) {
    const logoClone = logoLink.cloneNode(true);
    logoClone.querySelector('img.nav-logo').classList.add('px-1', 'h-6', 'max-w-48');
    headerContainer.appendChild(logoClone);
  }

  // Move or clone the theme toggle
  const themeToggle = document.querySelector('button[aria-label="Toggle dark mode"]');
  if (themeToggle) {
    const themeContainer = document.createElement('div');
    themeContainer.className = 'relative flex h-7 w-[3.25rem] items-center rounded-full border border-gray-200/70 dark:border-white/[0.07] hover:border-gray-200 dark:hover:border-white/10 p-1';
    const themeClone = themeToggle.cloneNode(true);
    themeClone.className = 'z-10 flex w-full items-center justify-between px-1';
    themeContainer.appendChild(themeClone);
    const toggleIndicator = document.createElement('div');
    toggleIndicator.className = 'absolute left-1 h-5 w-5 rounded-full bg-gray-100 dark:bg-white/[0.07] transition-transform duration-200 dark:translate-x-[1.40rem]';
    themeContainer.appendChild(toggleIndicator);
    headerContainer.appendChild(themeContainer);
  }

  // Move or clone the search input
  const searchButton = document.querySelector('#search-bar-entry');
  if (searchButton) {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'flex flex-col gap-4 mt-6';
    const searchWrapper = document.createElement('div');
    searchWrapper.className = 'relative hidden lg:flex items-center flex-1 justify-center';
    const searchClone = searchButton.cloneNode(true);
    searchWrapper.appendChild(searchClone);
    searchContainer.appendChild(searchWrapper);
    sidebarContent.insertBefore(searchContainer, sidebarContent.firstChild);
  }

  // Insert the header container at the top of the sidebar
  sidebarContent.insertBefore(headerContainer, sidebarContent.firstChild);
});