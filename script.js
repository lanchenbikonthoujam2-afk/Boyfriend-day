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
        <p style="font-size: 1.4em;">You are my one only love in my life.</p>
        <p style="font-size: 1.4em;">Thank you for your Love🫠💗</p>
        <button id="next-page-2-btn" class="option-btn">Next Page</button>
        <button id="back-to-page-1-btn" class="option-btn back-btn">Go Back</button>
    `;

    // --- Page 3 Content (The Loyalty Message) ---
    const loyaltyContent = `
        <h1 style="color: #ff4081;">Nangi Namit yambado handk chahisina aroiba oisanu.</h1>
        <p style="font-size: 1.4em; margin-top: 20px;">You are loyal by heart. But not by eyes. I know it and don't explain it to me.</p>
        <button id="continue-to-final-btn" class="option-btn">Next Page</button>
        <button id="back-to-page-2-btn" class="option-btn back-btn">Go Back</button>
    `;

    // --- Final Page Content ---
    const finalContent = `
        <h1 style="color: #e91e63;">Thank you aroibabw pabibagi.</h1>
        <p style="font-size: 1.4em;">Love you so much 😗.</p>
        <img src="cute.love.gif" alt="Cute Love GIF" style="max-width: 100%; height: auto; margin: 15px 0;">
    `;

    // --- Balloon Function ---
    function triggerBalloons() {
        body.classList.add('celebrate');
        for (let i = 0; i < 20; i++) {
            const balloon = document.createElement('div');
            balloon.classList.add('balloon');
            // Give it a random horizontal starting position
            balloon.style.left = `${Math.random() * 100}vw`; 
            // Give it a slightly random, long duration
            balloon.style.animationDuration = `${5 + Math.random() * 5}s`; 
            body.appendChild(balloon);

            // Remove the balloon after its animation ends
            balloon.addEventListener('animationend', () => {
                balloon.remove();
            });
        }
        // Remove 'celebrate' class after animation finishes (or after a set time)
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
            // New Logic: If they choose Khangningde, alert and go back to page 1
            alert("You don't have choice😂");
            showPage1();
            return;
        }

        // If they choose Khangningi: Trigger balloons, show page 2 content
        triggerBalloons(); 
        page1.style.display = 'none';
        page3.style.display = 'none';
        page2.style.display = 'block';
        
        page2.innerHTML = khangningiContent;
        
        // Attach event listeners for the buttons on Page 2's new content
        document.getElementById('next-page-2-btn').addEventListener('click', showPage3);
        document.getElementById('back-to-page-1-btn').addEventListener('click', showPage1);
    }

    function showPage3() {
        // Show the Loyalty Message page
        page2.style.display = 'none';
        page1.style.display = 'none'; // Ensure page 1 is hidden
        page3.style.display = 'block';
        
        page3.innerHTML = loyaltyContent;
        
        // Attach event listeners for the buttons on Page 3's new content
        document.getElementById('continue-to-final-btn').addEventListener('click', showFinalPage);
        document.getElementById('back-to-page-2-btn').addEventListener('click', () => {
            showPage2(false); // Go back to Page 2 content
        });
    }

    function showFinalPage() {
        // Show the final message
        page3.innerHTML = finalContent; // Overwrite Page 3 with the final content
    }

    // --- Attach Event Listeners to Initial Buttons ---
    khangningiBtn.addEventListener('click', () => showPage2(false));
    khangningdeBtn.addEventListener('click', () => showPage2(true));
});
