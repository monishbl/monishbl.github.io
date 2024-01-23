function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
function validateForm() {
            // Phone number validation
            var phoneNumberInput = document.getElementById('phoneNumber');
            var phoneNumberError = document.getElementById('phoneNumberError');
            var phoneNumberRegex = /^\d{10}$/;
            if (!phoneNumberRegex.test(phoneNumberInput.value)) {
                phoneNumberError.textContent = 'Please enter a valid 10-digit phone number.';
                return false;
            } else {
                phoneNumberError.textContent = '';
            }

            // Email validation
            var emailInput = document.getElementById('email');
            var emailError = document.getElementById('emailError');
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email address.';
                return false;
            } else {
                emailError.textContent = '';
            }

            return true;
        }
       var modal = document.getElementById('imagePopup');
    var popupImage = document.getElementById('popupImage');
    
    function openImagePopup(imagePath) {
        modal.classList.remove('hidden');
        popupImage.src = imagePath;

        // Close the modal when the window loses focus
        window.addEventListener('focusout', closeImagePopup);
    }

    function closeImagePopup() {
        modal.classList.add('hidden');
        window.removeEventListener('focusout', closeImagePopup);
    }