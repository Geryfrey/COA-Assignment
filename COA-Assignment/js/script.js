document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const images = document.querySelectorAll('.img-gallery img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('fullsizeImage');
    const captionText = document.getElementById('caption');
    const closeModal = document.getElementsByClassName('close')[0];
    const thumbnailsContainer = document.getElementById('thumbnails');

        // Show modal with image and caption when 'Know more' button is clicked

    buttons.forEach((button, index) => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            const imgGallery = event.target.closest('.img-gallery');
            const img = imgGallery.querySelector('img');
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = imgGallery.querySelector('h2').textContent + ' - ' + imgGallery.querySelector('p').textContent;
            generateThumbnails(index); // Generate thumbnails
        });
    });

        // Show modal with image and caption when image is clicked

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            const imgGallery = img.closest('.img-gallery');
            captionText.innerHTML = imgGallery.querySelector('h2').textContent + ' - ' + imgGallery.querySelector('p').textContent;
            generateThumbnails(index); // Generate thumbnails
        });
    });

        // Close modal when 'X' is clicked

    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
        thumbnailsContainer.innerHTML = ''; // Clear thumbnails when modal is closed
    });

        // Close modal when clicking outside of it

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            thumbnailsContainer.innerHTML = ''; 
        }
    });

    // Function to generate thumbnails for navigation 
    function generateThumbnails(selectedIndex) {
        const thumbnails = document.querySelectorAll('.img-gallery img');
        thumbnails.forEach((thumb, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = thumb.src;
            thumbnail.alt = `Thumbnail ${index + 1}`;
            thumbnail.classList.add('thumbnail');
            if (index === selectedIndex) {
                thumbnail.classList.add('active-thumbnail'); // Highlight selected thumbnail
            }
            thumbnail.addEventListener('click', () => {
                modalImg.src = thumb.src;
                thumbnail.classList.add('active-thumbnail'); 
                thumbnails.forEach((otherThumb, otherIndex) => {
                    if (otherIndex !== index) {
                        otherThumb.classList.remove('active-thumbnail');
                    }
                });
            });
            thumbnailsContainer.appendChild(thumbnail);
        });
    }
});
