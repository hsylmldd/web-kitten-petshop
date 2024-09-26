// script.js
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Existing scroll event listener
window.addEventListener('scroll', function() {
    const navbarLinks = document.querySelectorAll('.navbar-light .nav-link');
    const sections = document.querySelectorAll('section');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navbarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });

    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// New code to handle modal content
document.addEventListener('DOMContentLoaded', function() {
    const moreInfoButtons = document.querySelectorAll('.btn-more-info');
    
    moreInfoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const petId = this.getAttribute('data-pet-id');
            let petDetails = '';

            switch (petId) {
                case 'fluffy':
                    petDetails = `
                        <p><strong>Name:</strong> Fluffy</p>
                        <p><strong>Description:</strong> Fluffy is a playful and affectionate female cat who loves to be around people. She enjoys interactive toys and cuddles.</p>
                    `;
                    break;
                case 'charlie':
                    petDetails = `
                        <p><strong>Name:</strong> Charlie</p>
                        <p><strong>Description:</strong> Charlie is a friendly and energetic male cat. He is very curious and loves to explore new places.</p>
                    `;
                    break;
                case 'lucky':
                    petDetails = `
                        <p><strong>Name:</strong> Lucky</p>
                        <p><strong>Description:</strong> Lucky is a gentle and calm male cat. He has a sweet temperament and enjoys lounging in sunny spots.</p>
                    `;
                    break;
                case 'magdalene':
                    petDetails = `
                        <p><strong>Name:</strong> Magdalene</p>
                        <p><strong>Description:</strong> Magdalene is a shy but loving female cat. She takes a little time to warm up but becomes very affectionate once she feels comfortable.</p>
                    `;
                    break;
                case 'bella':
                    petDetails = `
                        <p><strong>Name:</strong> Bella</p>
                        <p><strong>Description:</strong> Bella is an outgoing and playful female cat. She loves playing with other cats and enjoys interactive games.</p>
                    `;
                    break;
                case 'max':
                    petDetails = `
                        <p><strong>Name:</strong> Max</p>
                        <p><strong>Description:</strong> Max is a confident and social male cat. He enjoys being the center of attention and loves to show off his tricks.</p>
                    `;
                    break;
                case 'daisy':
                    petDetails = `
                        <p><strong>Name:</strong> Daisy</p>
                        <p><strong>Description:</strong> Daisy is a young and energetic female cat. She is very playful and loves to chase after toys.</p>
                    `;
                    break;
                case 'rocky':
                    petDetails = `
                        <p><strong>Name:</strong> Rocky</p>
                        <p><strong>Description:</strong> Rocky is a strong and independent male cat. He enjoys exploring and has a bold personality.</p>
                    `;
                    break;
                default:
                    petDetails = '<p>No details available.</p>';
            }

            document.getElementById('petMoreInfoText').innerHTML = petDetails;
        });
    });

    // New code to handle product image switching
    window.showProductImage = function(productId) {
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            const overlay = card.querySelector('.product-overlay');
            const img = card.querySelector('img');

            if (card.getAttribute('onclick') === `showProductImage('${productId}')`) {
                // Show the overlay image and hide the main image
                overlay.style.display = 'flex';
                img.style.display = 'none';
            } else {
                // Hide the overlay image and show the main image
                overlay.style.display = 'none';
                img.style.display = 'block';
            }
        });
    };
});



document.addEventListener('DOMContentLoaded', function() {
    var blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(function(card) {
        card.addEventListener('click', function() {
            var modal = document.getElementById('blogModal');
            var modalTitle = modal.querySelector('.blog-modal-title');
            var modalImage = modal.querySelector('.blog-modal-image');
            var modalBody = modal.querySelector('.blog-modal-body p');

            modalTitle.textContent = card.getAttribute('data-title');
            modalImage.src = card.getAttribute('data-image');
            modalBody.textContent = card.getAttribute('data-text');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([-6.3705, 106.8286], 13); // Koordinat Universitas Indonesia

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-6.3705, 106.8286]).addTo(map)
        .bindPopup('Universitas Indonesia, Depok')
        .openPopup();
});

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Kecepatan animasi (ms)

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});
