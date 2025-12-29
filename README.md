# Routine Tracker

A simple, minimalist habit and routine tracking web application built with vanilla HTML, CSS, and JavaScript.

## Features

✅ **Daily Habit Tracking** - Check off habits you complete each day
✅ **Habit Management** - Add, edit, and delete your habits
✅ **Statistics Dashboard** - View completion rates and progress
✅ **Dark Theme** - Eye-friendly dark mode interface
✅ **Local Storage** - All data saved in your browser (no login required)
✅ **Responsive Design** - Works on desktop, tablet, and mobile
✅ **No Dependencies** - Pure HTML, CSS, and JavaScript

## How to Use

### 1. Access the App
- Open `index.html` in your web browser
- No installation or server setup required!

### 2. Dashboard (index.html)
- View all your habits for today
- Click the checkbox button to mark habits as complete
- See your daily completion percentage

### 3. Manage Habits (habits.html)
- Add new habits with name, category, and frequency
- View all your existing habits
- Delete habits you no longer want to track

### 4. Statistics (stats.html)
- See completion rates for each habit
- Track your progress over time
- Visual progress bars show your consistency

## File Structure

```
my-new-project/
├── index.html      # Main dashboard page
├── habits.html     # Habit management page
├── stats.html      # Statistics page
├── app.js          # Core application logic
├── style.css       # Styling and dark theme
└── README.md       # This file
```

## Technology Stack

- **HTML5** - Structure and semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **JavaScript (ES6)** - Logic and interactivity
- **localStorage API** - Data persistence in browser

## Default Habits

The app comes with 5 default habits:
1. Wake Up Early (Health)
2. Exercise (Health)
3. Meditate (Mindfulness)
4. Work Session (Productivity)
5. Read (Learning)

You can delete these and add your own!

## Deployment

### Deploy to GitHub Pages
1. Push this repository to GitHub
2. Go to repository Settings > Pages
3. Set source to `main` branch
4. Your site will be live at `https://yourusername.github.io/my-new-project/`

### Deploy Anywhere
- Copy all files to any web server
- Works on any static hosting (Netlify, Vercel, etc.)
- Works locally - just open index.html

## Data Storage

All your habits and completion data are stored in your browser's localStorage. This means:
- ✅ Privacy - Your data never leaves your device
- ✅ Fast - No server calls needed
- ✅ Offline - Works without internet
- ⚠️ Local to device - Data is cleared if you clear browser cache

## Future Enhancements

- Cloud sync with Firebase
- Export data as JSON/CSV
- Habit templates
- Reminders via browser notifications
- Mobile app version

## License

Free to use and modify for personal projects.

## Author

Created by Im044

Happy tracking! 🎯
