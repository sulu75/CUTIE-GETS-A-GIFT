document.addEventListener('DOMContentLoaded', function() {
    const openGiftBtn = document.getElementById('openGiftBtn');
    const signInModal = document.getElementById('signInModal');
    const closeBtn = document.querySelector('.close');
    const signInForm = document.getElementById('signInForm');

    openGiftBtn.addEventListener('click', function() {
        signInModal.style.display = 'block';
    });

  
    closeBtn.addEventListener('click', function() {
        signInModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === signInModal) {
            signInModal.style.display = 'none';
        }
    });

    const errorMessage = document.getElementById('errorMessage');

   
    
    signInForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = signInForm.querySelector('input[type="text"]').value.trim();
        const codeInput = signInForm.querySelector('input[type="password"]').value.trim();
        errorMessage.textContent = '';
        
        if (nameInput === 'sulu' && codeInput === '1234') {
            signInModal.style.display = 'none';
            setTimeout(function() {
                window.location.href = 'welcome.html';
            }, 900);
        } else {
            errorMessage.textContent = 'You are not cutie';
            signInForm.reset();
        }
    });

  

    const inputs = signInForm.querySelectorAll('input');
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            errorMessage.textContent = '';
        });
    });
});

