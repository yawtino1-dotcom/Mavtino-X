// Tabs
const tabs = {
  contactsTab: document.getElementById('contactsTab'),
  groupsTab: document.getElementById('groupsTab'),
  storiesTab: document.getElementById('storiesTab'),
  newsfeedTab: document.getElementById('newsfeedTab'),
  gamesTab: document.getElementById('gamesTab'),
  marketplaceTab: document.getElementById('marketplaceTab'),
  walletTab: document.getElementById('walletTab'),
  liveTab: document.getElementById('liveTab')
};

const sections = {
  contactsSection: document.getElementById('contactsSection'),
  groupsSection: document.getElementById('groupsSection'),
  storiesSection: document.getElementById('storiesSection'),
  newsfeedSection: document.getElementById('newsfeedSection'),
  gamesSection: document.getElementById('gamesSection'),
  marketplaceSection: document.getElementById('marketplaceSection'),
  walletSection: document.getElementById('walletSection'),
  liveSection: document.getElementById('liveSection')
};

// Switch sections
Object.keys(tabs).forEach(tabKey => {
  tabs[tabKey].addEventListener('click', () => {
    // Remove active from tabs
    Object.values(tabs).forEach(t => t.classList.remove('active'));
    tabs[tabKey].classList.add('active');

    // Hide all sections
    Object.values(sections).forEach(sec => sec.classList.remove('active'));

    // Show selected section
    const sectionId = tabKey.replace('Tab', 'Section');
    sections[sectionId].classList.add('active');
  });
});

// Dark/Light Mode
const toggleTheme = document.getElementById('toggleTheme');
toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});
