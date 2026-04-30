document.addEventListener('DOMContentLoaded', () => {
  // If not login page, load layout
  if (!window.location.pathname.includes('login.html')) {
    initLayout();
  }
});

function initLayout() {
  const sidebarHTML = `
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-logo">
        <i class="fas fa-graduation-cap" style="margin-right: 0.5rem;"></i>
        EduManage
      </div>
      <nav class="sidebar-nav">
        <ul class="nav-list">
          <li class="nav-item">
            <a href="dashboard.html" class="nav-link ${isActive('dashboard')}">
              <i class="fas fa-home"></i>
              ダッシュボード
            </a>
          </li>
          
          <li class="nav-section-title">受講生管理</li>
          <li class="nav-item">
            <a href="student_list.html" class="nav-link ${isActive('student')}">
              <i class="fas fa-users"></i>
              受講生一覧
            </a>
          </li>
          <li class="nav-item">
            <a href="enrollment.html" class="nav-link ${isActive('enrollment')}">
              <i class="fas fa-clipboard-list"></i>
              受講登録管理
            </a>
          </li>
          
          <li class="nav-section-title">講座・成績管理</li>
          <li class="nav-item">
            <a href="course_list.html" class="nav-link ${isActive('course')}">
              <i class="fas fa-book"></i>
              講座一覧
            </a>
          </li>
          <li class="nav-item">
            <a href="attendance.html" class="nav-link ${isActive('attendance')}">
              <i class="fas fa-calendar-check"></i>
              出欠管理
            </a>
          </li>
          <li class="nav-item">
            <a href="grades.html" class="nav-link ${isActive('grades')}">
              <i class="fas fa-chart-bar"></i>
              成績管理
            </a>
          </li>
          <li class="nav-item">
            <a href="schedule.html" class="nav-link ${isActive('schedule')}">
              <i class="fas fa-calendar-alt"></i>
              スケジュール
            </a>
          </li>
          
          <li class="nav-section-title">講師管理</li>
          <li class="nav-item">
            <a href="instructor_list.html" class="nav-link ${isActive('instructor')}">
              <i class="fas fa-chalkboard-teacher"></i>
              講師一覧
            </a>
          </li>
          
          <li class="nav-section-title">システム</li>
          <li class="nav-item">
            <a href="notifications.html" class="nav-link ${isActive('notification')}">
              <i class="fas fa-bell"></i>
              お知らせ管理
            </a>
          </li>
          <li class="nav-item">
            <a href="settings.html" class="nav-link ${isActive('settings')}">
              <i class="fas fa-cog"></i>
              システム設定
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  `;

  const headerHTML = `
    <header class="header">
      <div class="flex items-center">
        <button id="mobile-menu-btn" class="btn btn-icon btn-secondary" style="margin-right: 1rem; display: none;">
          <i class="fas fa-bars"></i>
        </button>
        <div class="search-bar" style="width: 300px;">
          <input type="text" class="form-control" placeholder="検索...">
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <button class="btn btn-icon btn-secondary position-relative">
          <i class="fas fa-bell"></i>
          <span style="position: absolute; top: 0; right: 0; width: 8px; height: 8px; background: var(--danger); border-radius: 50%;"></span>
        </button>
        <div class="avatar" style="cursor: pointer;" onclick="location.href='profile.html'">
          <img src="https://ui-avatars.com/api/?name=Admin+User&background=4f46e5&color=fff" alt="User Avatar">
        </div>
        <button class="btn btn-secondary btn-sm" onclick="logout()">
          <i class="fas fa-sign-out-alt"></i> ログアウト
        </button>
      </div>
    </header>
  `;

  // Inject into DOM
  const appContainer = document.getElementById('app');
  if (appContainer) {
    const mainContent = document.getElementById('main-content');
    
    // Insert sidebar
    appContainer.insertAdjacentHTML('afterbegin', sidebarHTML);
    
    // Insert header at the top of main-content
    if (mainContent) {
      mainContent.insertAdjacentHTML('afterbegin', headerHTML);
    }
  }

  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const sidebar = document.getElementById('sidebar');
  if (window.innerWidth <= 768 && mobileBtn) {
    mobileBtn.style.display = 'block';
    mobileBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }
}

function isActive(pathKeyword) {
  return window.location.pathname.includes(pathKeyword) ? 'active' : '';
}

function logout() {
  // Clear mock session
  localStorage.removeItem('isLoggedIn');
  window.location.href = 'login.html';
}

// Utility: Generate random ID
function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

// Check auth on page load
if (!window.location.pathname.includes('login.html')) {
  if (localStorage.getItem('isLoggedIn') !== 'true') {
    // For local testing without server, we might comment this out or just leave it.
    // Uncomment the below line to enforce login:
    // window.location.href = 'login.html';
  }
}
