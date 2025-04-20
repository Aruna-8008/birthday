// Form elements
const form = document.getElementById('birthdayForm');
const formSlide = document.getElementById('formSlide');
const happySlide = document.getElementById('happySlide');
const sorrySlide = document.getElementById('sorrySlide');
const displayName = document.getElementById('displayName');
const balloonContainer = document.getElementById('balloon-container');

// Balloon colors
const balloonColors = ['#ff6b6b', '#4ecdc4', '#45aaf2', '#a55eea', '#f7b731'];

// Create balloons
function createBalloons() {
    // Clear existing balloons
    balloonContainer.innerHTML = '';
    
    // Create 15 balloons
    for (let i = 0; i < 15; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.top = Math.random() * 100 + '%';
        balloon.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
        balloon.style.background = balloonColors[Math.floor(Math.random() * balloonColors.length)];
        balloon.style.animationDuration = Math.random() * 6 + 4 + 's';
        balloon.style.animationDelay = Math.random() * 2 + 's';
        
        // Add click event to pop balloon
        balloon.addEventListener('click', function() {
            balloon.classList.add('popped');
            setTimeout(() => {
                balloon.remove();
            }, 500);
        });
        
        balloonContainer.appendChild(balloon);
    }
}

// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    
    if(name && birthdate) {
        displayName.textContent = name;
        
        // Create balloons and pop them after a delay
        createBalloons();
        
        // Pop all balloons after 1 second
        setTimeout(() => {
            const balloons = document.querySelectorAll('.balloon');
            balloons.forEach(balloon => {
                balloon.classList.add('popped');
                setTimeout(() => {
                    balloon.remove();
                }, 500);
            });
            
            // Show happy slide after balloons pop
            formSlide.classList.remove('active');
            happySlide.classList.add('active');
        }, 1000);
    }
});

// Navigation functions
function showNextSlide() {
    happySlide.classList.remove('active');
    sorrySlide.classList.add('active');
}

function showFormSlide() {
    sorrySlide.classList.remove('active');
    formSlide.classList.add('active');
    document.getElementById('birthdayForm').reset();
}

// Create initial balloons when page loads
createBalloons();