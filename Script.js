document.addEventListener('DOMContentLoaded', function () {
    // Function to load different content based on the page selection
    function loadContent(page) {
        let content = '';

        if (page === 'home') {
            content = `
                <h1>Welcome to the Anxiety Management Guide</h1>
                <p>This is the home page. Explore the menu to learn more about dealing with anxiety.</p>
            `;
        } else if (page === 'anxiety') {
            content = `
                <h1>Dealing with Anxiety</h1>
                <img src="Images/calm.jpg" alt="Calming Scene">
                <h2>What is Anxiety?</h2>
                <p>Stress is a temporary response to feeling under pressure. A small amount of stress can be positive, as it helps you cope with challenging situations. Anxiety is a normal emotional response to a stressful situation. However, it becomes a problem when it persists.</p>
                <h2>Symptoms of Anxiety</h2>
                <ul>
                    <li>Emotional overwhelm</li>
                    <li>Irritability</li>
                    <li>Difficulty concentrating</li>
                    <li>Racing thoughts and constant worrying</li>
                </ul>
                <h2>How to Manage Anxiety</h2>
                <ul>
                    <li>Sleep well – aim for 8 to 12 hours of quality sleep.</li>
                    <li>Eat a balanced diet – avoid stimulants like caffeine and high-sugar foods.</li>
                    <li>Exercise regularly – physical activity helps release tension and improves sleep.</li>
                    <li>Talk to friends or family – sharing how you feel can reduce anxiety.</li>
                </ul>
            `;
        } else if (page === 'quiz') {
            content = `
                <h1>Anxiety Quiz</h1>
                <p>Test your knowledge about anxiety and how to manage it.</p>
            `;
        } else if (page === 'directory') {
            content = `
                <h1>Directory</h1>
                <p>Find resources and contacts to help with managing anxiety.</p>
            `;
        } else if (page === 'meditation') {
            content = `
                <h1>Meditation</h1>
                <p>Explore meditation techniques to manage stress and anxiety.</p>
            `;
        }

        document.getElementById('content').innerHTML = content;
    }

    // Event listener for navigation links to load content dynamically
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            loadContent(targetPage);  // Load corresponding page content
        });
    });

    // Interactive Appointment Form: Confirmation message after submission
    const appointmentForm = document.querySelector('.appointment-form form');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.querySelector('input[name="name"]').value;
            const email = document.querySelector('input[name="email"]').value;
            alert(`Thank you, ${name}! Your appointment request has been received. We will contact you at ${email} shortly.`);
            appointmentForm.reset();
        });
    }

    // Meditation Session: Play audio/video with dynamic feedback
    const playButtons = document.querySelectorAll('.play-btn');
    const mediaPlayerAudio = document.querySelector('audio');
    const mediaPlayerVideo = document.querySelector('video');
    
    playButtons.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            const sessionTitle = btn.parentElement.querySelector('h3').textContent;
            alert(`Now playing: ${sessionTitle}`);
            if (index === 0 && mediaPlayerAudio) {
                mediaPlayerAudio.play();
            } else if (index === 1 && mediaPlayerVideo) {
                mediaPlayerVideo.play();
            }
        });
    });

    // Favorites Section: Save to favorites interaction
    const favoriteButton = document.querySelector('.favorite-btn');
    if (favoriteButton) {
        favoriteButton.addEventListener('click', function () {
            alert("This session has been saved to your favorites!");
        });
    }

    // Smooth scrolling for navigation links
    const smoothScrollLinks = document.querySelectorAll('nav ul li a');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Professional Cards Hover Effect
    const professionalCards = document.querySelectorAll('.professional-card');
    professionalCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });

    // Scheduling an Appointment feedback
    const scheduleButtons = document.querySelectorAll('.schedule-btn');
    scheduleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const doctorName = this.parentElement.querySelector('h3').textContent;
            alert(`You have selected to schedule an appointment with ${doctorName}.`);
        });
    });

    // Media Player Controls for Audio and Video
    if (mediaPlayerAudio) {
        mediaPlayerAudio.addEventListener('play', function () {
            console.log('Audio is playing');
        });
        mediaPlayerAudio.addEventListener('pause', function () {
            console.log('Audio is paused');
        });
    }

    if (mediaPlayerVideo) {
        mediaPlayerVideo.addEventListener('play', function () {
            console.log('Video is playing');
        });
        mediaPlayerVideo.addEventListener('pause', function () {
            console.log('Video is paused');
        });
    }

    // Scroll to Top Button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = "⬆️";
    scrollTopBtn.classList.add('scroll-top-btn');
    scrollTopBtn.style.position = 'fixed';
    scrollTopBtn.style.bottom = '20px';
    scrollTopBtn.style.right = '20px';
    scrollTopBtn.style.padding = '10px';
    scrollTopBtn.style.borderRadius = '50%';
    scrollTopBtn.style.border = 'none';
    scrollTopBtn.style.backgroundColor = '#5cb85c';
    scrollTopBtn.style.color = 'white';
    scrollTopBtn.style.fontSize = '18px';
    scrollTopBtn.style.cursor = 'pointer';
    scrollTopBtn.style.display = 'none';
    document.body.appendChild(scrollTopBtn);

    // Show/Hide Scroll button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    // Scroll to top when the button is clicked
    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
