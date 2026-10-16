class PortfolioPieceHeader extends HTMLElement {
    connectedCallback() {
        const rootPrefix = this.hasAttribute("root-page") ? "./" : "../";
        const portfolioPrefix = this.hasAttribute("root-page") ? "./portfolioPiecesDir/" : "./";

        this.innerHTML = `
            <header id="header-portfolio">
                <div id="back-button">
                    <a href="${rootPrefix}index.html"><button id="return-button"><</button>
                        <h4>Tilbage</h4></a>
                </div>

                <h1 id="header-title" class="header-name">{ KIWI-MAI }</h1>
                <div id="gap-fill"></div>
            </header>
            <div class="portfolio-scroll-progress" role="progressbar" aria-label="Page scroll progress"
                aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                <span class="portfolio-scroll-progress-fill"></span>
            </div>
            <div class="portfolio-menu">
                <button class="portfolio-menu-toggle" type="button" aria-expanded="false"
                    aria-controls="portfolio-piece-menu-panel">
                    Portfolio pieces
                </button>
                <nav class="portfolio-menu-panel" id="portfolio-piece-menu-panel" aria-label="Portfolio pieces"
                    aria-hidden="true" inert>
                    <h2>Portfolio pieces</h2>
                    <ul>
                        <li><a href="${portfolioPrefix}beholder.html">Beholder</a></li>
                        <li><a href="${portfolioPrefix}demonChicken.html">Demon Chicken</a></li>
                        <li><a href="${portfolioPrefix}dysphoriaMiniatures.html">Dysphoria Miniatures</a></li>
                        <li><a href="${portfolioPrefix}dysphoriaMiniaturesSTLs.html">Dysphoria Miniatures STLs</a></li>
                        <li><a href="${portfolioPrefix}fjordenesBådebyggeri.html">Fjordenes Bådebyggeri</a></li>
                        <li><a href="${portfolioPrefix}gradeAid.html">GradeAid</a></li>
                        <li><a href="${portfolioPrefix}hjemmeDecoration.html">Hjemme Dekoration og Smykker</a></li>
                        <li><a href="${portfolioPrefix}homoware.html">Homoware</a></li>
                        <li><a href="${portfolioPrefix}nerfThis.html">Nerf This</a></li>
                        <li><a href="${portfolioPrefix}svampenBob.html">Svampen Bob</a></li>
                        <li><a href="${portfolioPrefix}zealandButterfly.html">Zealand Butterfly</a></li>
                        <li><a href="${portfolioPrefix}zealandStudiestart.html">Zealand Studiestart</a></li>
                    </ul>
                    <h2>Anbefalinger</h2>
                    <ul>
                        <li><a href="${rootPrefix}PDFs/anbefaling Kiwi.pdf" download>Download anbefaling (PDF)</a></li>
                    </ul>
                    <h2>Kursus beviser</h2>
                    <ul>
                        <li><a href="${rootPrefix}courses.html">Kursus beviser</a></li>
                    </ul>
                </nav>
            </div>
        `;

        const menu = this.querySelector(".portfolio-menu");
        const toggle = this.querySelector(".portfolio-menu-toggle");
        const panel = this.querySelector(".portfolio-menu-panel");
        const progressBar = this.querySelector(".portfolio-scroll-progress");
        const progressFill = this.querySelector(".portfolio-scroll-progress-fill");

        const updateScrollProgress = () => {
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollableHeight > 0
                ? Math.min(100, Math.max(0, (window.scrollY / scrollableHeight) * 100))
                : 0;
            const roundedProgress = Math.round(progress);

            progressFill.style.transform = `scaleX(${progress / 100})`;
            progressBar.setAttribute("aria-valuenow", String(roundedProgress));
            progressBar.setAttribute("aria-valuetext", `${roundedProgress}%`);
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

        toggle.addEventListener("click", () => {
            setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
        });

        panel.addEventListener("click", (event) => {
            if (event.target instanceof Element && event.target.closest("a")) {
                setMenuOpen(false);
            }
        });

        window.addEventListener("scroll", updateScrollProgress, { passive: true });
        window.addEventListener("resize", updateScrollProgress);
        updateScrollProgress();

        this._updateScrollProgress = updateScrollProgress;
        this._setMenuOpen = setMenuOpen;
    }

    disconnectedCallback() {
        this._setMenuOpen(false);
        window.removeEventListener("scroll", this._updateScrollProgress);
        window.removeEventListener("resize", this._updateScrollProgress);
    }
}

customElements.define("portfolio-piece-header", PortfolioPieceHeader);
