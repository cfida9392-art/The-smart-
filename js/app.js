/* THE SMART MODERN PUBLIC SCHOOL - Common App Functions */

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
  }

  // Header scroll effect
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Set active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});

// Format date
function formatDate(dateStr) {
  const date = new Date(dateStr);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return {
    day: date.getDate(),
    month: months[date.getMonth()],
    full: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
  };
}

// Show alert in form
function showAlert(container, message, type = 'error') {
  const existing = container.querySelector('.alert');
  if (existing) existing.remove();
  
  const alert = document.createElement('div');
  alert.className = `alert alert-${type}`;
  alert.innerHTML = `<span>${type === 'error' ? '⚠️' : '✅'}</span> ${message}`;
  container.insertBefore(alert, container.firstChild);
  
  if (type === 'success') {
    setTimeout(() => alert.remove(), 4000);
  }
}

// Modal helpers
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('active');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('active');
}

// Close modal on overlay click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
  }
});

// Protect dashboard pages
function protectPage(requiredRole) {
  if (!SchoolDB.requireAuth(requiredRole)) {
    window.location.href = requiredRole === 'admin' ? 'admin-login.html' : 
                           requiredRole === 'teacher' ? 'teacher-login.html' : 'student-login.html';
    return false;
  }
  return true;
}

// Logout
function handleLogout() {
  SchoolDB.logout();
  window.location.href = 'index.html';
}

// Render notices for homepage
function renderHomeNotices() {
  const container = document.getElementById('home-notices');
  if (!container) return;
  
  const notices = SchoolDB.getNotices().slice(0, 3);
  container.innerHTML = notices.map(n => {
    const d = formatDate(n.date);
    return `
      <div class="notice-item">
        <div class="notice-date">
          <div class="day">${d.day}</div>
          <div class="month">${d.month}</div>
        </div>
        <div class="notice-content">
          <h4>${n.title}</h4>
          <p>${n.content.substring(0, 100)}...</p>
        </div>
      </div>
    `;
  }).join('');
}

// Render events for homepage
function renderHomeEvents() {
  const container = document.getElementById('home-events');
  if (!container) return;
  
  const events = SchoolDB.getEvents().slice(0, 3);
  container.innerHTML = events.map(e => {
    const d = formatDate(e.date);
    return `
      <div class="event-item">
        <div class="event-date">
          <div class="day">${d.day}</div>
          <div class="month">${d.month}</div>
        </div>
        <div class="event-content">
          <h4>${e.title}</h4>
          <p>${e.description.substring(0, 80)}... • ${e.time} • ${e.venue}</p>
        </div>
      </div>
    `;
  }).join('');
}

// Login form handler
function handleLogin(formId, role, redirectUrl) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = form.querySelector('[name="username"]').value.trim();
    const password = form.querySelector('[name="password"]').value;
    const alertContainer = form;

    if (!username || !password) {
      showAlert(alertContainer, 'Please fill in all fields.');
      return;
    }

    const result = SchoolDB.login(username, password, role);
    if (result.success) {
      showAlert(alertContainer, 'Login successful! Redirecting...', 'success');
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 800);
    } else {
      showAlert(alertContainer, result.message);
    }
  });
}
