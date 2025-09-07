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
// Chat logic
const contacts = document.querySelectorAll('.contact');
const chatWith = document.getElementById('chatWith');
const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const typingIndicator = document.getElementById('typingIndicator');
const imageInput = document.getElementById('imageInput');

let activeContact = null;

// Switch active contact
contacts.forEach(contact => {
  contact.addEventListener('click', () => {
    contacts.forEach(c => c.classList.remove('active-contact'));
    contact.classList.add('active-contact');
    activeContact = contact.dataset.name;
    chatWith.textContent = activeContact;
    chatMessages.innerHTML = ''; // clear previous chat for demo
  });
});

// Typing indicator simulation
messageInput.addEventListener('input', () => {
  if(activeContact) {
    typingIndicator.textContent = Typing...;
    setTimeout(() => { typingIndicator.textContent = ''; }, 1000);
  }
});

// Send message
sendBtn.addEventListener('click', () => {
  if(!activeContact) return alert("Select a contact first!");
  const msgText = messageInput.value.trim();
  const file = imageInput.files[0];

  if(msgText === '' && !file) return;

  let msgDiv = document.createElement('div');
  msgDiv.classList.add('message', 'sent');

  if(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.style.maxWidth = '200px';
      img.style.borderRadius = '8px';
      msgDiv.appendChild(img);
      chatDivAppend(msgDiv);
    }
    reader.readAsDataURL(file);
  }

  if(msgText) {
    msgDiv.textContent = msgText;
    const statusSpan = document.createElement('span');
    statusSpan.classList.add('status');
    statusSpan.textContent = '✓'; // sent
    msgDiv.appendChild(statusSpan);
    chatDivAppend(msgDiv);
  }

  messageInput.value = '';
  imageInput.value = '';
});

// Append message and scroll
function chatDivAppend(div) {
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
// Chat logic
const contacts = document.querySelectorAll('.contact');
const chatWith = document.getElementById('chatWith');
const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const typingIndicator = document.getElementById('typingIndicator');
const imageInput = document.getElementById('imageInput');

let activeContact = null;

// Switch active contact
contacts.forEach(contact => {
  contact.addEventListener('click', () => {
    contacts.forEach(c => c.classList.remove('active-contact'));
    contact.classList.add('active-contact');
    activeContact = contact.dataset.name;
    chatWith.textContent = activeContact;
    chatMessages.innerHTML = ''; // clear previous chat for demo
  });
});

// Typing indicator simulation
messageInput.addEventListener('input', () => {
  if(activeContact) {
    typingIndicator.textContent = Typing...;
    setTimeout(() => { typingIndicator.textContent = ''; }, 1000);
  }
});

// Send message
sendBtn.addEventListener('click', () => {
  if(!activeContact) return alert("Select a contact first!");
  const msgText = messageInput.value.trim();
  const file = imageInput.files[0];

  if(msgText === '' && !file) return;

  let msgDiv = document.createElement('div');
  msgDiv.classList.add('message', 'sent');

  // Image message
  if(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.style.maxWidth = '200px';
      img.style.borderRadius = '8px';
      msgDiv.appendChild(img);
      chatDivAppend(msgDiv);
      simulateStatus(msgDiv);
    }
    reader.readAsDataURL(file);
  }

  // Text message
  if(msgText) {
    msgDiv.textContent = msgText;
    const statusSpan = document.createElement('span');
    statusSpan.classList.add('status');
    statusSpan.textContent = '✓'; // sent
    msgDiv.appendChild(statusSpan);
    chatDivAppend(msgDiv);
    simulateStatus(msgDiv);
  }

  messageInput.value = '';
  imageInput.value = '';
});

// Append message and scroll
function chatDivAppend(div) {
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Simulate delivered and read ticks
function simulateStatus(messageDiv) {
  const statusSpan = messageDiv.querySelector('.status');
  // Delivered after 1s
  setTimeout(() => {
    statusSpan.textContent = '✓✓';
  }, 1000);
  // Read after 2s
  setTimeout(() => {
    statusSpan.style.color = 'blue';
  }, 2000);
}
