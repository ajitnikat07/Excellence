// Form Validation
const form = document.getElementById('registrationForm');
const successMessage = document.getElementById('successMessage');

// Validation Rules
const validationRules = {
    firstName: {
        required: true,
        minLength: 2,
        pattern: /^[a-zA-Z\s]+$/,
        message: 'First name must be at least 2 characters and contain only letters'
    },
    lastName: {
        required: true,
        minLength: 2,
        pattern: /^[a-zA-Z\s]+$/,
        message: 'Last name must be at least 2 characters and contain only letters'
    },
    email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Please enter a valid email address'
    },
    phone: {
        required: true,
        pattern: /^[0-9\-\+\(\)\s]{10,}$/,
        message: 'Please enter a valid phone number (at least 10 digits)'
    },
    dob: {
        required: true,
        validate: validateDOB,
        message: 'You must be at least 16 years old'
    },
    gender: {
        required: true,
        message: 'Please select a gender'
    },
    address: {
        required: true,
        minLength: 5,
        message: 'Address must be at least 5 characters'
    },
    city: {
        required: true,
        minLength: 2,
        pattern: /^[a-zA-Z\s]+$/,
        message: 'City must be at least 2 characters and contain only letters'
    },
    state: {
        required: true,
        minLength: 2,
        pattern: /^[a-zA-Z\s]+$/,
        message: 'State must be at least 2 characters and contain only letters'
    },
    zipcode: {
        required: true,
        pattern: /^[0-9]{5,6}$/,
        message: 'Zip code must be 5-6 digits'
    },
    rollNumber: {
        required: true,
        minLength: 3,
        message: 'Roll number must be at least 3 characters'
    },
    course: {
        required: true,
        message: 'Please select a course'
    },
    branch: {
        required: true,
        message: 'Please select a branch'
    },
    year: {
        required: true,
        message: 'Please select a year'
    },
    cgpa: {
        validate: validateCGPA,
        message: 'CGPA must be between 0 and 10'
    },
    terms: {
        required: true,
        message: 'You must agree to terms and conditions'
    }
};

// Validation Functions
function validateDOB(value) {
    if (!value) return false;
    const dob = new Date(value);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    
    return age >= 16;
}

function validateCGPA(value) {
    if (!value) return true; // Optional field
    const cgpa = parseFloat(value);
    return !isNaN(cgpa) && cgpa >= 0 && cgpa <= 10;
}

// Get error element ID
function getErrorElementId(fieldName) {
    return fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/([A-Z])/g, '$1') + 'Error';
}

// Validate single field
function validateField(fieldName) {
    const field = document.getElementById(fieldName);
    const rules = validationRules[fieldName];
    const errorElement = document.getElementById(getErrorElementId(fieldName));
    let isValid = true;
    let errorMessage = '';

    if (!rules) return true;

    const value = fieldName === 'terms' ? field.checked : field.value.trim();

    // Check if required
    if (rules.required && !value) {
        isValid = false;
        errorMessage = rules.message || `${fieldName} is required`;
    }

    // Check minimum length
    if (isValid && rules.minLength && value.length < rules.minLength) {
        isValid = false;
        errorMessage = rules.message;
    }

    // Check pattern
    if (isValid && rules.pattern && value && !rules.pattern.test(value)) {
        isValid = false;
        errorMessage = rules.message;
    }

    // Check custom validation
    if (isValid && rules.validate && value) {
        if (!rules.validate(value)) {
            isValid = false;
            errorMessage = rules.message;
        }
    }

    // Update UI
    if (!isValid && errorMessage) {
        field.classList.add('error');
        errorElement.textContent = errorMessage;
        errorElement.classList.add('show');
    } else {
        field.classList.remove('error');
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }

    return isValid;
}

// Validate entire form
function validateForm() {
    let isFormValid = true;
    
    for (const fieldName in validationRules) {
        if (!validateField(fieldName)) {
            isFormValid = false;
        }
    }

    return isFormValid;
}

// Add real-time validation
Object.keys(validationRules).forEach(fieldName => {
    const field = document.getElementById(fieldName);
    if (field) {
        field.addEventListener('blur', () => validateField(fieldName));
        field.addEventListener('input', () => {
            if (field.classList.contains('error')) {
                validateField(fieldName);
            }
        });
        field.addEventListener('change', () => {
            if (field.classList.contains('error')) {
                validateField(fieldName);
            }
        });
    }
});

// Form Submission
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
        scrollToFirstError();
        return;
    }

    // Disable submit button
    const submitBtn = form.querySelector('.btn-submit');
    const originalContent = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Registering...';

    try {
        // Simulate API call
        await simulateApiCall();

        // Show success message
        showSuccessMessage();

        // Reset form
        setTimeout(() => {
            form.reset();
            successMessage.classList.remove('show');
        }, 3000);
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalContent;
    }
});

// Simulate API call
function simulateApiCall() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1500);
    });
}

// Show success message
function showSuccessMessage() {
    successMessage.classList.add('show');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 5000);
}

// Scroll to first error
function scrollToFirstError() {
    const errorElements = document.querySelectorAll('.error-message.show');
    if (errorElements.length > 0) {
        const firstError = errorElements[0].closest('.form-group');
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Reset form action
const resetBtn = form.querySelector('.btn-reset');
resetBtn.addEventListener('click', () => {
    // Clear all error messages and error classes
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
        el.classList.remove('show');
    });
    
    document.querySelectorAll('.form-group input, .form-group select, .form-group textarea')
        .forEach(el => {
            el.classList.remove('error');
        });
    
    successMessage.classList.remove('show');
});

// Format phone number as user types
const phoneField = document.getElementById('phone');
if (phoneField) {
    phoneField.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        let formattedValue = '';
        
        if (value.length > 0) {
            if (value.length <= 3) {
                formattedValue = value;
            } else if (value.length <= 6) {
                formattedValue = value.slice(0, 3) + '-' + value.slice(3);
            } else {
                formattedValue = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
            }
        }
        
        e.target.value = formattedValue;
    });
}

// Format zip code
const zipcodeField = document.getElementById('zipcode');
if (zipcodeField) {
    zipcodeField.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 6);
    });
}

// Prevent form submission on Enter in input fields (except textarea)
document.querySelectorAll('.form-group input, .form-group select').forEach(field => {
    field.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
        }
    });
});

// Add smooth interactions
document.querySelectorAll('.form-group input, .form-group select, .form-group textarea')
    .forEach(field => {
        field.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.01)';
        });
        
        field.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });

console.log('Form validation and interactivity initialized successfully!');