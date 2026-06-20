// Grab DOM form and link elements
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');

const toSignUpLink = document.getElementById('toSignUp');
const toSignInLink = document.getElementById('toSignIn');

// --- 1. Form Toggling Navigation ---
toSignUpLink.addEventListener('click', (e) => {
    e.preventDefault(); // Stop default anchor link jump behaviour
    signInForm.classList.add('hidden');
    signUpForm.classList.remove('hidden');
});

toSignInLink.addEventListener('click', (e) => {
    e.preventDefault();
    signUpForm.classList.add('hidden');
    signInForm.classList.remove('hidden');
});

// --- 2. Handle Frontend Sign In Validation ---
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simulation placeholder verification logic
    if(email && password) {
        alert(`Success! Logging in user: ${email}`);
        signInForm.reset();
    }
});

// --- 3. Handle Frontend Sign Up Validation ---
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    // Strict Password Matching Verification
    if (password !== confirmPassword) {
        alert("Validation Error: Passwords do not match!");
        return;
    }

    if (password.length < 6) {
        alert("Validation Error: Password must be at least 6 characters long.");
        return;
    }

    alert(`Account successfully created for: ${email}\nYou can now sign in!`);
    signUpForm.reset();
    
    // Smooth transition back to Sign In state UI panel
    signUpForm.classList.add('hidden');
    signInForm.classList.remove('hidden');
});