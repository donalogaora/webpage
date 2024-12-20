// Shop Stuff

// Phone Stand Image Fade
const imageElement = document.getElementById('toggle-image');

// Select the image and the color circles
const colorCircles = document.querySelectorAll('.circle');
const toggleImage = document.getElementById('toggle-image');
let selectedColor = ''; // Store the selected color

// Loop through each color circle and add a click event listener
colorCircles.forEach(circle => {
    circle.addEventListener('click', () => {
        // Get the data-color attribute value from the clicked circle
        selectedColor = circle.getAttribute('data-color');
        
        // Update the image source based on the color selected
        toggleImage.src = `/assets/shop/${selectedColor}_3d_printed_phone_stand_preview.png`;  // Static color image

        // Update the selected circle styling
        colorCircles.forEach(c => c.classList.remove('selected')); // Remove "selected" class from all circles
        circle.classList.add('selected'); // Add "selected" class to the clicked circle
    });
});

// Circle Hover and Selection Logic
const circles = document.querySelectorAll('.circle');
const orderButton = document.getElementById('shop-order-button');  // Ensure the ID matches in HTML

// Add click event listeners to the circles
circles.forEach(circle => {
    circle.addEventListener('click', function() {
        // Remove the "selected" class from all circles immediately
        circles.forEach(c => c.classList.remove('selected'));

        // Mark this circle as selected immediately
        this.classList.add('selected');
    });
});

// Add click event listener to the order button
orderButton.addEventListener('click', function() {
    if (selectedColor) {
        // If a color is selected, navigate to its data-link
        const link = document.querySelector(`.circle[data-color="${selectedColor}"]`).getAttribute('data-link');
        window.location.href = link; // This will redirect to the color's PayPal link
    } else {
        // If no color is selected, prompt the user to select one
        alert('Please select a color first!');
    }
});

// Circle Hover Effect
circles.forEach((circle) => {
    circle.addEventListener('mouseover', () => {
        circle.style.borderColor = 'red'; // Change the ring color to red on hover
    });
    circle.addEventListener('mouseout', () => {
        if (!circle.classList.contains('selected')) {
            circle.style.borderColor = ''; // Reset border color when not selected
        }
    });
});
