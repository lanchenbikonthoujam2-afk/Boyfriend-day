document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const page1 = document.getElementById('page-1');
    const page2 = document.getElementById('page-2');
    const page3 = document.getElementById('page-3');
    const khangningiBtn = document.getElementById('khangningi-btn');
    const khangningdeBtn = document.getElementById('khangningde-btn');
    const body = document.body;

    // --- Page 2 Content (Khangningi Path) ---
    const khangningiContent = `
        <h1 style="color: #e91e63;">I just want to say I love you.</h1>
        <img src="kawaii-bunny.gif" alt="Kawaii Bunny GIF" style="max-width: 100%; height: auto; margin: 15px 0;">
        <p style="font-size: 1.4em;">You are my one only love in my life.</p>
        <p style="font-size: 1.4em;">Thank you for your Love🫠💗</p>
        <button id="next-page-2-btn" class="option-btn">Next Page</button>
        <button id="back-to-page-1-btn" class="option-btn back-btn">Go Back</button>
    `;

    // --- Page 3 Content (The Loyalty Message) ---
    const loyaltyContent = `
        <h1 style="color: #ff4081;">Nangi Namit yambado handk chahisina aroiba oisanu.</h1>
        <img src="source.gif" alt="Source GIF" style="max-width: 100%; height: auto; margin: 15px 0;">
        <p style="font-size: 1.4em; margin-top: 20px;">You are loyal by heart. But not by eyes. I know it and don't explain it to me.</p>
        <button id="continue-to-final-btn" class="option-btn">Next Page</button>
        <button id="back-to-page-2-btn" class="option-btn back-btn">Go Back</button>
    `;

    // --- Final Page Content (NOW HAS BACK BUTTON) ---
    const finalContent = `
        <h1 style="color: #e91e63;">Thank you aroibabw pabibagi.</h1>
        <p style="font-size: 1.4em;">Love you so much 😗.</p>
        <img src="cute.love.gif" alt="Cute Love GIF" style="max-width: 100%; height: auto; margin: 15px 0;">
        <button id="back-to-page-3-btn" class="option-btn back-btn" style="margin-top: 20px;">Go Back</button>
    `;

    // --- Balloon Function ---
    function triggerBalloons() {
        body.classList.add('celebrate');
        for (let i = 0; i < 20; i++) {
            const balloon = document.createElement('div');
            balloon.classList.add('balloon');
            balloon.style.left = `${Math.random() * 100}vw`; 
            balloon.style.animationDuration = `${5 + Math.random() * 5}s`; 
            body.appendChild(balloon);
            balloon.addEventListener('animationend', () => {
                balloon.remove();
            });
        }
        setTimeout(() => {
            body.classList.remove('celebrate');
        }, 11000); 
    }

    // --- Page Handlers ---
    function showPage1() {
        page2.style.display = 'none';
        page3.style.display = 'none';
        page1.style.display = 'block';
    }

    function showPage2(isKhangningde = false) {
        if (isKhangningde) {
            alert("You don't have choice😂");
            showPage1();
            return;
        }

        triggerBalloons(); 
        page1.style.display = 'none';
        page3.style.display = 'none';
        page2.style.display = 'block';
        
        page2.innerHTML = khangningiContent;
        
        // Attaches listeners to the buttons created in khangningiContent
        document.getElementById('next-page-2-btn').addEventListener('click', showPage3);
        document.getElementById('back-to-page-1-btn').addEventListener('click', showPage1);
    }

    function showPage3() {
        page2.style.display = 'none';
        page1.style.display = 'none'; 
        page3.style.display = 'block';
        
        page3.innerHTML = loyaltyContent;
        
        // Attaches listeners to the buttons created in loyaltyContent
        document.getElementById('continue-to-final-btn').addEventListener('click', showFinalPage);
        document.getElementById('back-to-page-2-btn').addEventListener('click', () => {
            showPage2(false); // Go back to Page 2 content
        });
    }

    function showFinalPage() {
        page2.style.display = 'none';
        page1.style.display = 'none'; 
        page3.style.display = 'block';

        page3.innerHTML = finalContent; 
        
        // ADDED: Logic for the back button on the final page
        document.getElementById('back-to-page-3-btn').addEventListener('click', showPage3); 
    }

    // --- Attach Event Listeners to Initial Buttons (on Page 1) ---
    khangningiBtn.addEventListener('click', () => showPage2(false));
    khangningdeBtn.addEventListener('click', () => showPage2(true));
});
