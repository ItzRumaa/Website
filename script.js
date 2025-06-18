document.addEventListener('DOMContentLoaded', () => {
    
    const surpriseButton = document.getElementById('surpriseButton');
    const surpriseContent = document.getElementById('surpriseContent');

    
    const photoElements = document.querySelectorAll('.photo-gallery div[data-fact]');
    
    
    const factModal = document.getElementById('factModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalImage = document.getElementById('modalImage');
    const modalFact = document.getElementById('modalFact');

    if (surpriseButton && surpriseContent) {
        surpriseButton.addEventListener('click', () => {
            surpriseContent.classList.toggle('hidden');
            if (!surpriseContent.classList.contains('hidden')) {
                
                surpriseButton.textContent = 'ნახე კიდევ ერთხელ?';
            } else {
                
                surpriseButton.textContent = 'სიურპრიზი!';
            }
        });
    } else {
        console.error("ვერ მოიძებნა 'surpriseButton' ან 'surpriseContent' ელემენტები.");
    }

    
    photoElements.forEach(photoDiv => {
        photoDiv.addEventListener('click', () => {
            const imgSrc = photoDiv.querySelector('img').src; 
            const factText = photoDiv.dataset.fact; 

            if (modalImage && modalFact && factModal) {
                modalImage.src = imgSrc; 
                modalFact.textContent = factText; 
                factModal.classList.remove('hidden'); 
                factModal.classList.add('modal-fade-in'); 
            } else {
                console.error("ვერ მოიძებნა მოდალური ელემენტები: modalImage, modalFact, ან factModal.");
            }
        });
    });

    
    if (closeModalBtn && factModal) {
        closeModalBtn.addEventListener('click', () => {
            factModal.classList.remove('modal-fade-in');
            factModal.classList.add('modal-fade-out');
            
            factModal.addEventListener('animationend', () => {
                factModal.classList.add('hidden');
                factModal.classList.remove('modal-fade-out');
            }, { once: true }); 
        });
    } else {
        console.error("ვერ მოიძებნა 'closeModalBtn' ან 'factModal' ელემენტები.");
    }

    
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !factModal.classList.contains('hidden')) {
            if (factModal) {
                factModal.classList.remove('modal-fade-in');
                factModal.classList.add('modal-fade-out');
                factModal.addEventListener('animationend', () => {
                    factModal.classList.add('hidden');
                    factModal.classList.remove('modal-fade-out');
                }, { once: true });
            }
        }
    });

    
    if (factModal) {
        factModal.addEventListener('click', (event) => {
            
            if (event.target === factModal) {
                factModal.classList.remove('modal-fade-in');
                factModal.classList.add('modal-fade-out');
                factModal.addEventListener('animationend', () => {
                    factModal.classList.add('hidden');
                    factModal.classList.remove('modal-fade-out');
                }, { once: true });
            }
        });
    }
});