// La Dolce Vita Prototype JavaScript

// Function to show a specific screen and hide others
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    
    // Show the selected screen
    document.getElementById(screenId).classList.remove('hidden');
    
    // Update active navigation item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to the appropriate nav item based on the screen
    let activeNavIndex = 0;
    
    if (screenId === 'home-screen') {
        activeNavIndex = 0;
    } else if (screenId === 'mottos-screen' || screenId === 'motto-detail-screen') {
        activeNavIndex = 1;
    } else if (screenId === 'youtube-screen') {
        activeNavIndex = 2;
    } else if (screenId === 'podcast-screen' || screenId === 'podcast-episode-screen') {
        activeNavIndex = 3;
    } else if (screenId === 'rewards-screen' || screenId === 'event-detail-screen') {
        activeNavIndex = 4;
    }
    
    document.querySelectorAll('.navbar .nav-item')[activeNavIndex].classList.add('active');
    
    // Scroll to top when changing screens
    window.scrollTo(0, 0);
}

// Function to toggle favorite button
function toggleFavorite(buttonId) {
    const button = document.getElementById(buttonId);
    const icon = button.querySelector('i');
    
    if (icon.textContent === 'favorite_border') {
        icon.textContent = 'favorite';
    } else {
        icon.textContent = 'favorite_border';
    }
}

// Function to toggle play/pause button
function togglePlayPause() {
    const playButton = document.getElementById('play-button');
    const icon = playButton.querySelector('i');
    
    if (icon.textContent === 'play_circle_filled') {
        icon.textContent = 'pause_circle_filled';
    } else {
        icon.textContent = 'play_circle_filled';
    }
}

// Function to close redemption confirmation
function closeConfirmation() {
    document.getElementById('redemption-confirmation').classList.add('hidden');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Setup favorite button event listeners
    const favoriteMottoBtn = document.getElementById('favorite-motto');
    if (favoriteMottoBtn) {
        favoriteMottoBtn.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent triggering parent click events
            toggleFavorite('favorite-motto');
        });
    }
    
    const detailFavoriteBtn = document.getElementById('detail-favorite-motto');
    if (detailFavoriteBtn) {
        detailFavoriteBtn.addEventListener('click', function(event) {
            event.stopPropagation();
            toggleFavorite('detail-favorite-motto');
        });
    }
    
    // Setup play button event listener
    const playBtn = document.getElementById('play-button');
    if (playBtn) {
        playBtn.addEventListener('click', togglePlayPause);
    }
    
    // Setup redeem button event listener
    const redeemBtn = document.getElementById('redeem-button');
    if (redeemBtn) {
        redeemBtn.addEventListener('click', function() {
            document.getElementById('redemption-confirmation').classList.remove('hidden');
        });
    }
    
    // Prevent default behavior for navigation links
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });
}); 