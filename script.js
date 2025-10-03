document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const page1 = document.getElementById('page-1');
    const page2 = document.getElementById('page-2');
    const page3 = document.getElementById('page-3');
    const khangningiBtn = document.getElementById('khangningi-btn');
    const khangningdeBtn = document.getElementById('khangningde-btn');

    // --- Page 2 Content (Khangningi Path) ---
    const khangningiContent = `
        <h1 style="color: #e91e63;">I just want to say I love you.</h1>
        <p style="font-size: 1.4em;">You are my one only love in my life.</p>
        <p style="font-size: 1.4em;">Thank you for your Love🫠💗</p>
        <button id="next-page-2-btn">Next Page</button>
    `;

    // --- Page 3 Content (The Final Page) ---
    const finalContent = `
        <h1 style="color: #e91e63;">Thank you aroibabw pabibagi.</h1>
        <p style="font-size: 1.4em;">Love you so much 😗.</p>
        <img src="cute.love.gif" alt="Cute Love GIF" style="max-width: 100%; height: auto; margin: 15px 0;">
    `;

    // --- Handlers ---
    function showPage2(isKhangningde = false) {
        // Hide Page 1 and show Page 2
        page1.style.display = 'none';
        page3.style.display = 'none';
        page2.style.display = 'block';

        if (isKhangningde) {
            // If they chose Khangningde, show the "no choice" message, then the Khangningi content
            page2.innerHTML = `
                <h1 style="color: #ff4081;">You don't have choice😂</h1>
                <p style="font-size: 1.2em;">(Please click next)</p>
                <button id="continue-to-khangningi-btn">Next</button>
            `;
            document.getElementById('continue-to-khangningi-btn').addEventListener('click', () => {
                // After the "no choice" message, load the Khangningi content and the next button
                page2.innerHTML = khangningiContent;
                document.getElementById('next-page-2-btn').addEventListener('click', showPage3);
            });

        } else {
            // If they chose Khangningi directly, just load the Khangningi content
            page2.innerHTML = khangningiContent;
            document.getElementById('next-page-2-btn').addEventListener('click', showPage3);
        }
    }

    function showPage3() {
        // Hide Page 2 and show Page 3 (The Loyalty Message)
        page2.style.display = 'none';
        page3.style.display = 'block';
        page3.innerHTML = `
            <h1 style="color: #ff4081;">Nangi Namit yambado handk chahisina aroiba oisanu.</h1>
            <p style="font-size: 1.4em; margin-top: 20px;">You are loyal by heart. But not by eyes. I know it and don't explain it to me.</p>
            <button id="continue-to-final-btn">Next Page</button>
        `;
        document.getElementById('continue-to-final-btn').addEventListener('click', showFinalPage);
    }

    function showFinalPage() {
        // Show the final message
        page3.innerHTML = finalContent; // Overwrite Page 3 with the final content
    }

    // --- Attach Event Listeners to Initial Buttons ---
    khangningiBtn.addEventListener('click', () => showPage2(false));
    khangningdeBtn.addEventListener('click', () => showPage2(true));
});


