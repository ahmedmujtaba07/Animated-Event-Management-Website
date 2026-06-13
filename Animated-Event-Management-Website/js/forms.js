// ============================================
// FORMS.JS - Ali's Forms Developer
// Registration Form + Contact Form + Validation
// ============================================

// ---- CONTACT FORM ----
function submitContactForm() {
    const firstName = document.getElementById('firstName')?.value.trim();
    const lastName  = document.getElementById('lastName')?.value.trim();
    const email     = document.getElementById('email')?.value.trim();
    const subject   = document.getElementById('subject')?.value;
    const message   = document.getElementById('message')?.value.trim();

    const successMsg = document.getElementById('successMsg');
    const errorMsg   = document.getElementById('errorMsg');

    // Hide previous messages
    successMsg?.classList.remove('show');
    errorMsg?.classList.remove('show');

    // Validation
    if (!firstName || !lastName || !email || !subject || !message) {
        errorMsg?.classList.add('show');
        setTimeout(() => errorMsg?.classList.remove('show'), 4000);
        return;
    }
    if (!isValidEmail(email)) {
        errorMsg.textContent = '❌ Please enter a valid email address.';
        errorMsg?.classList.add('show');
        setTimeout(() => errorMsg?.classList.remove('show'), 4000);
        return;
    }

    // Success
    successMsg?.classList.add('show');
    setTimeout(() => successMsg?.classList.remove('show'), 5000);

    // Reset form
    ['firstName','lastName','email','phone','subject','message'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
}

// ---- REGISTRATION FORM ----
function submitRegistrationForm() {
    const name  = document.getElementById('regName')?.value.trim();
    const email = document.getElementById('regEmail')?.value.trim();
    const phone = document.getElementById('regPhone')?.value.trim();
    const event = document.getElementById('regEvent')?.value;

    const successMsg = document.getElementById('regSuccess');
    const errorMsg   = document.getElementById('regError');

    successMsg?.classList.remove('show');
    errorMsg?.classList.remove('show');

    if (!name || !email || !event) {
        errorMsg?.classList.add('show');
        setTimeout(() => errorMsg?.classList.remove('show'), 4000);
        return;
    }
    if (!isValidEmail(email)) {
        if (errorMsg) errorMsg.textContent = '❌ Please enter a valid email address.';
        errorMsg?.classList.add('show');
        setTimeout(() => errorMsg?.classList.remove('show'), 4000);
        return;
    }
    if (phone && !isValidPhone(phone)) {
        if (errorMsg) errorMsg.textContent = '❌ Please enter a valid phone number.';
        errorMsg?.classList.add('show');
        setTimeout(() => errorMsg?.classList.remove('show'), 4000);
        return;
    }

    // Success
    successMsg?.classList.add('show');
    setTimeout(() => successMsg?.classList.remove('show'), 5000);

    ['regName','regEmail','regPhone','regEvent'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
}

// ---- HELPERS ----
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isValidPhone(phone) {
    return /^[\+\d\s\-\(\)]{7,15}$/.test(phone);
}

// ---- REAL-TIME VALIDATION FEEDBACK ----
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') || this.value) {
                validateField(this);
            }
        });
        input.addEventListener('input', function() {
            this.style.borderColor = '';
        });
    });
});

function validateField(field) {
    const val = field.value.trim();
    if (!val && field.type !== 'tel') {
        field.style.borderColor = '#f87171';
    } else if (field.type === 'email' && !isValidEmail(val)) {
        field.style.borderColor = '#f87171';
    } else {
        field.style.borderColor = '#00ffff';
    }
}
