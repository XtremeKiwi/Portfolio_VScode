class PortfolioHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <div class="title-and-contact">
                    <h1 id="header-title" class="header-name">{ KIWI-MAI }</h1>
                    <div>
                        <a class="contact-info" href="mailto:KiwiMai@protonmail.com">
                            <marquee class="marquee-info" direction="left" height="100%" scrollamount="4">
                                KiwiMai@protonmail.com &emsp;&emsp;&emsp; +45 22 97 84 84
                            </marquee>
                            <div class="contact-tooltip">
                                <span>KiwiMai@protonmail.com</span>
                                <span>+45 22 97 84 84</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="portfolio-downloads">
                    <div class="download-wrapper">
                        <a class="downloads" href="./PDFs/Kiwi CV.pdf" download>
                            <img src="./img/file-arrow-down-solid-full.svg" alt="pil icon">
                        </a>
                        <p>Kiwi CV</p>
                    </div>
                    <div class="download-wrapper">
                        <a class="downloads" href="./PDFs/Eksamensbevis Multimediedesigner Kiwi.pdf" download>
                            <img src="./img/graduation-cap-solid-full.svg" alt="Graduation cap icon">
                        </a>
                        <p>Eksamensbevis</p>
                    </div>
                    <div class="download-wrapper">
                        <a class="downloads-squid" href="https://squiddigital.dk/" target="_blank">
                            <img src="./img/Mascot 1@4x.webp" alt="Squid Digital Logo">
                        </a>
                        <p>Squid Digital</p>
                    </div>
                </div>
            </header>
            <div class="portfolio-menu">
                <button class="portfolio-menu-toggle" type="button" aria-expanded="false"
                    aria-controls="portfolio-menu-panel">
                    Portfolio pieces
                </button>
                <nav class="portfolio-menu-panel" id="portfolio-menu-panel" aria-label="Portfolio pieces" aria-hidden="true" inert>
                    <h2>Portfolio pieces</h2>
                    <ul>
                        <li><a href="./portfolioPiecesDir/homoware.html">Homoware</a></li>
                        <li><a href="./portfolioPiecesDir/gradeAid.html">GradeAid</a></li>
                        <li><a href="./portfolioPiecesDir/fjordenesBådebyggeri.html">Fjordenes Bådebyggeri</a></li>
                        <li><a href="./portfolioPiecesDir/zealandStudiestart.html">Zealand Studiestart</a></li>
                        <li><a href="./portfolioPiecesDir/zealandButterfly.html">Zealand Butterfly</a></li>
                        <li><a href="./portfolioPiecesDir/svampenBob.html">Svampen Bob</a></li>
                        <li><a href="./portfolioPiecesDir/nerfThis.html">Nerf This</a></li>
                        <li><a href="./portfolioPiecesDir/demonChicken.html">Demon Chicken</a></li>
                        <li><a href="./portfolioPiecesDir/beholder.html">Beholder</a></li>
                        <li><a href="./portfolioPiecesDir/hjemmeDecoration.html">Hjemme Dekoration og Smykker</a></li>
                        <li><a href="./portfolioPiecesDir/dysphoriaMiniaturesSTLs.html">Dysphoria Miniatures STLs</a></li>
                        <li><a href="./portfolioPiecesDir/dysphoriaMiniatures.html">Dysphoria Miniatures</a></li>
                    </ul>
                </nav>
            </div>
        `;

        const menu = this.querySelector(".portfolio-menu");
        const toggle = this.querySelector(".portfolio-menu-toggle");
        const panel = this.querySelector(".portfolio-menu-panel");

        const setMenuOpen = (isOpen) => {
            menu.classList.toggle("is-open", isOpen);
            toggle.setAttribute("aria-expanded", String(isOpen));
            panel.setAttribute("aria-hidden", String(!isOpen));
            panel.inert = !isOpen;

            if (isOpen) {
                document.addEventListener("click", onDocumentClick);
                document.addEventListener("keydown", onDocumentKeydown);
            } else {
                document.removeEventListener("click", onDocumentClick);
                document.removeEventListener("keydown", onDocumentKeydown);
            }
        };

        const onDocumentClick = (event) => {
            if (!this.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        const onDocumentKeydown = (event) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
                toggle.focus();
            }
        };

        toggle.addEventListener("click", () => {
            setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
        });

        panel.addEventListener("click", (event) => {
            if (event.target instanceof Element && event.target.closest("a")) {
                setMenuOpen(false);
            }
        });

        this._setMenuOpen = setMenuOpen;
    }

    disconnectedCallback() {
        this._setMenuOpen(false);
    }
}

customElements.define("portfolio-header", PortfolioHeader);
