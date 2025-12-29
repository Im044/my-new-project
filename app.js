const STORAGE_KEY = 'routineTrackerData';
const HABITS_KEY = 'routineTrackerHabits';

function initData() {
  if (!localStorage.getItem(HABITS_KEY)) {
    const defaultHabits = [
      { id: 1, name: 'Wake Up Early', category: 'Health', frequency: 'daily' },
      { id: 2, name: 'Exercise', category: 'Health', frequency: 'daily' },
      { id: 3, name: 'Meditate', category: 'Mindfulness', frequency: 'daily' },
      { id: 4, name: 'Work Session', category: 'Productivity', frequency: 'daily' },
      { id: 5, name: 'Read', category: 'Learning', frequency: 'daily' }
    ];
    localStorage.setItem(HABITS_KEY, JSON.stringify(defaultHabits));
  }
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({}));
  }
}

function getHabits() {
  return JSON.parse(localStorage.getItem(HABITS_KEY) || '[]');
}

function saveHabit(name, category, frequency) {
  const habits = getHabits();
  const newId = Math.max(...habits.map(h => h.id), 0) + 1;
  habits.push({ id: newId, name, category, frequency });
  localStorage.setItem(HABITS_KEY, JSON.stringify(habits));
}

function getTodayDate() {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

function updateDashboard() {
  const today = getTodayDate();
  const habits = getHabits();
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  const todayData = data[today] || {};
  const container = document.getElementById('habitsContainer');
  if (!container) return;
  container.innerHTML = '';
  habits.forEach(habit => {
    const isDone = todayData[habit.id] || false;
    const card = document.createElement('div');
    card.className = `habit-card ${isDone ? 'done' : ''}`;
    card.innerHTML = `<h3>${habit.name}</h3><p class="category">${habit.category}</p><button class="habit-toggle ${isDone ? 'checked' : ''}" onclick="toggleHabit(${habit.id})"></button>`;
    container.appendChild(card);
  });
  updateSummary(habits, todayData);
}

function updateSummary(habits, todayData) {
  const completed = Object.keys(todayData).length;
  const total = habits.length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  document.getElementById('completedCount').textContent = completed;
  document.getElementById('totalCount').textContent = total;
  document.getElementById('completionText').textContent = percentage + '% Complete';
  document.getElementById('progressFill').style.width = percentage + '%';
}

function toggleHabit(habitId) {
  const today = getTodayDate();
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  if (!data[today]) data[today] = {};
  if (data[today][habitId]) {
    delete data[today][habitId];
  } else {
    data[today][habitId] = true;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  updateDashboard();
}

function loadHabitsManagement() {
  const habitForm = document.getElementById('habitForm');
  if (habitForm) {
    habitForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('habitName').value;
      const category = document.getElementById('habitCategory').value;
      const frequency = document.getElementById('habitFrequency').value;
      saveHabit(name, category, frequency);
      habitForm.reset();
      displayHabitsList();
    });
  }
  displayHabitsList();
}

function displayHabitsList() {
  const habits = getHabits();
  const listContainer = document.getElementById('habitsList');
  if (!listContainer) return;
  listContainer.innerHTML = '<table><tr><th>Habit</th><th>Category</th><th>Action</th></tr>';
  habits.forEach(habit => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${habit.name}</td><td>${habit.category}</td><td><button onclick="deleteHabit(${habit.id}); displayHabitsList();">Delete</button></td>`;
    listContainer.appendChild(row);
  });
}

function deleteHabit(id) {
  const habits = getHabits().filter(h => h.id !== id);
  localStorage.setItem(HABITS_KEY, JSON.stringify(habits));
}

function loadStatistics() {
  const habits = getHabits();
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  const statsContainer = document.getElementById('statsContainer');
  if (!statsContainer) return;
  statsContainer.innerHTML = '';
  habits.forEach(habit => {
    const completed = Object.values(data).filter(day => day[habit.id]).length;
    const percentage = completed > 0 ? Math.round((completed / Math.max(Object.keys(data).length, 1)) * 100) : 0;
    const card = document.createElement('div');
    card.className = 'stat-card';
    card.innerHTML = `<h3>${habit.name}</h3><div class="stat-bar"><div class="stat-fill" style="width: ${percentage}%"></div></div><p>${completed} completions (${percentage}%)</p>`;
    statsContainer.appendChild(card);
  });
}

initData();
