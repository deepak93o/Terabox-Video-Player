// document.getElementById('themeToggle').addEventListener('click', toggleTheme);

// function toggleTheme() {
//     document.body.classList.toggle('dark-mode');
// }

// function loadTasks() {
//     const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     const taskList = document.getElementById('taskList');
// }

const taskInput = document.getElementById('taskInput');
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        
        document.getElementById('video-form').addEventListener('submit', function(e) {
        e.preventDefault(); 

        const userInputUrl = document.getElementById('taskInput').value;

        const apiUrl = `https://terabox-watch.netlify.app/api2.html?url=${encodeURIComponent(userInputUrl)}`;

        document.getElementById('video-frame').src = apiUrl;
        });
    }
});

// Theme Toggle Button
/*
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
});
*/
// Connecting With API

document.getElementById('video-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const userInputUrl = document.getElementById('taskInput').value;

    const apiUrl = `https://terabox-watch.netlify.app/api2.html?url=${encodeURIComponent(userInputUrl)}`;

    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'block';

    const iframe = document.getElementById('video-frame');
    iframe.src = apiUrl;

    iframe.onload = function() {
        loadingElement.style.display = 'none'; 
        const videoPlayer = document.querySelector('.videoPlayer');
        videoPlayer.style.display = 'block';
        document.getElementById("video").scrollIntoView({ behavior: "smooth" });
    };
});