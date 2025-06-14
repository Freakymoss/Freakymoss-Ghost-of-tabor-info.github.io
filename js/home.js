document.addEventListener("DOMContentLoaded", () => {
    // ✅ Inject global stylesheet
    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = "/style.css"; // absolute path for GitHub Pages; 
    document.head.appendChild(style);
    
    // Preconnect to Google Fonts
    const preconnect1 = document.createElement("link");
    preconnect1.rel = "preconnect";
    preconnect1.href = "https://fonts.googleapis.com";
    document.head.appendChild(preconnect1);

    const preconnect2 = document.createElement("link");
    preconnect2.rel = "preconnect";
    preconnect2.href = "https://fonts.gstatic.com";
    preconnect2.crossOrigin = ""; // or "use-credentials" if needed
    document.head.appendChild(preconnect2);

    // Load Sirin Stencil font
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href = "https://fonts.googleapis.com/css2?family=Sirin+Stencil&display=swap";
    document.head.appendChild(fontLink);

    // ✅ Create the Home button
    const homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    homeButton.onclick = () => {
    window.location.href = "/index.html";
    };

    // ✅ Optionally wrap in a container
    const container = document.createElement("div");
    container.id = "home-button-container";
    container.appendChild(homeButton);
    document.body.insertBefore(container, document.body.firstChild);
});
