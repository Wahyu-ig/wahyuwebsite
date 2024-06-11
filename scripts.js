document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const username = document.getElementById('username').value;

    // Hide login container and show welcome container with animation
    document.getElementById('login-container').style.transform = 'rotateY(180deg)';
    setTimeout(() => {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('welcome-container').style.display = 'block';
        document.getElementById('welcome-container').style.transform = 'rotateY(0)';
        
        // Apply animation to all text elements
        document.querySelectorAll('.animate-text').forEach((element, index) => {
            setTimeout(() => {
                element.style.animation = 'move 1s forwards';
            }, index * 1000); // Stagger the animation start times
        });
    }, 300);

    // Set welcome message with the username
    document.getElementById('user-name').textContent = username;
});

// Tampilkan dan sembunyikan tampilan kedua
document.getElementById('show-second-view-btn').addEventListener('click', function() {
    document.getElementById('second-view-container').style.display = 'block';
});

document.getElementById('hide-second-view-btn').addEventListener('click', function() {
    document.getElementById('second-view-container').style.display = 'none';
});