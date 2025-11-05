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

  // Move or create the logo
  let logoLink = document.querySelector('a[href="/"]');
  if (!logoLink) {
    console.warn('Logo link not found, creating fallback');
    logoLink = document.createElement('a');
    logoLink.href = '/';
    logoLink.innerHTML = `
      <span class="sr-only">JPEG Documentation home page</span>
      <img class="nav-logo w-auto relative object-contain block dark:hidden px-1 h-6 max-w-48" src="/logo/light.svg" alt="light logo">
      <img class="nav-logo w-auto relative object-contain hidden dark:block px-1 h-6 max-w-48" src="/logo/dark.svg" alt="dark logo">
    `;
  } else {
    const logoImgs = logoLink.querySelectorAll('img');
    logoImgs.forEach(img => {
      img.classList.add('px-1', 'h-6', 'max-w-48');
      img.classList.remove('h-7');
      if (img.src.includes('light')) img.classList.add('block', 'dark:hidden');
      if (img.src.includes('dark')) img.classList.add('hidden', 'dark:block');
    });
  }
  headerContainer.appendChild(logoLink);

  // Move or create the theme toggle
  let themeToggle = document.querySelector('button[aria-label*="dark mode i"], button[aria-label*="theme"]');
  if (!themeToggle) {
    console.warn('Theme toggle not found, creating fallback');
    themeToggle = document.createElement('button');
    themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    themeToggle.className = 'relative flex h-7 w-[3.25rem] items-center rounded-full border border-gray-200/70 dark:border-white/[0.07] hover:border-gray-200 dark:hover:border-white/10 p-1';
    themeToggle.innerHTML = `
      <div class="z-10 flex w-full items-center justify-between px-1">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" class="size-3 text-gray-600 dark:text-gray-600 fill-current">
          <g clip-path="url(#clip0_2880_7340)">
            <path d="M8 1.11133V2.00022" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M12.8711 3.12891L12.2427 3.75735" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M14.8889 8H14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M12.8711 12.8711L12.2427 12.2427" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M8 14.8889V14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M3.12891 12.8711L3.75735 12.2427" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M1.11133 8H2.00022" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M3.12891 3.12891L3.75735 3.75735" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M8.00043 11.7782C10.0868 11.7782 11.7782 10.0868 11.7782 8.00043C11.7782 5.91402 10.0868 4.22266 8.00043 4.22266C5.91402 4.22266 4.22266 5.91402 4.22266 8.00043C4.22266 10.0868 5.91402 11.7782 8.00043 11.7782Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </g>
          <defs><clipPath id="clip0_2880_7340"><rect width="16" height="16" fill="white"></rect></clipPath></defs>
        </svg>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" class="size-3 text-gray-300 dark:text-gray-300 fill-current">
          <g clip-path="url(#clip0_2880_7355)">
            <path d="M11.5556 10.4445C8.48717 10.4445 6.00005 7.95743 6.00005 4.88899C6.00005 3.68721 6.38494 2.57877 7.03294 1.66943C4.04272 2.22766 1.77783 4.84721 1.77783 8.0001C1.77783 11.5592 4.66317 14.4445 8.22228 14.4445C11.2196 14.4445 13.7316 12.3948 14.4525 9.62321C13.6081 10.1414 12.6187 10.4445 11.5556 10.4445Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </g>
          <defs><clipPath id="clip0_2880_7355"><rect width="16" height="16" fill="white"></rect></clipPath></defs>
        </svg>
      </div>
      <div class="absolute left-1 h-5 w-5 rounded-full bg-gray-100 dark:bg-white/[0.07] transition-transform duration-200 dark:translate-x-[1.40rem]"></div>
    `;
  }
  const themeContainer = document.createElement('div');
  themeContainer.className = 'relative flex h-7 w-[3.25rem] items-center rounded-full border border-gray-200/70 dark:border-white/[0.07] hover:border-gray-200 dark:hover:border-white/10 p-1';
  themeContainer.appendChild(themeToggle);
  headerContainer.appendChild(themeContainer);

  // Create search container
  const searchContainer = document.createElement('div');
  searchContainer.className = 'flex flex-col gap-4 mt-6';
  const searchWrapper = document.createElement('div');
  searchWrapper.className = 'relative hidden lg:flex items-center flex-1 justify-center';

  // Move the search input
  const searchButton = document.querySelector('#search-bar-entry, #search-bar-entry-mobile');
  if (searchButton) {
    searchWrapper.appendChild(searchButton);
  } else {
    console.warn('Search button not found, creating fallback');
    const searchButton = document.createElement('button');
    searchButton.type = 'button';
    searchButton.id = 'search-bar-entry';
    searchButton.setAttribute('aria-label', 'Open search');
    searchButton.className = 'flex pointer-events-auto rounded-xl w-full items-center text-sm leading-6 h-9 pl-3.5 pr-3 text-gray-500 dark:text-white/50 bg-background-light dark:bg-background-dark dark:brightness-[1.1] dark:ring-1 dark:hover:brightness-[1.25] ring-1 ring-gray-400/30 hover:ring-gray-600/30 dark:ring-gray-600/30 dark:hover:ring-gray-500/30 justify-between truncate gap-2 min-w-[43px]';
    searchButton.innerHTML = `
      <div class="flex items-center gap-2 min-w-[42px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search min-w-4 flex-none text-gray-700 hover:text-gray-800 dark:text-gray-400 hover:dark:text-gray-200">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
        <div class="truncate min-w-0">Search...</div>
      </div>
      <span class="flex-none text-xs font-semibold">⌘K</span>
    `;
    searchWrapper.appendChild(searchButton);
  }
  searchContainer.appendChild(searchWrapper);

  // Insert containers at the top of sidebar-content
  sidebarContent.prepend(searchContainer);
  sidebarContent.prepend(headerContainer);
}

// Use MutationObserver to wait for elements
const observer = new MutationObserver(() => {
  const sidebarContent = document.querySelector('#sidebar-content');
  const logoLink = document.querySelector('a[href="/"]');
  const themeToggle = document.querySelector('button[aria-label*="dark mode i"], button[aria-label*="theme"]');
  const searchButton = document.querySelector('#search-bar-entry, #search-bar-entry-mobile');

  if (sidebarContent && (logoLink || themeToggle || searchButton)) {
    console.log('Elements found, setting up sidebar');
    setupSidebar();
    observer.disconnect();
  }
});

observer.observe(document.body, { childList: true, subtree: true, attributes: true });

// Fallback: Try setup after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded fired');
  setupSidebar();
});