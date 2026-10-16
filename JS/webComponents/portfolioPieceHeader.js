class PortfolioPieceHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header id="header-portfolio">
                <div id="back-button">
                    <a href="../index.html"><button id="return-button"><</button>
                        <h4>Tilbage</h4></a>
                </div>

                <h1 id="header-title" class="header-name">{ KIWI-MAI }</h1>
                <div id="gap-fill"></div>
            </header>
            <div class="portfolio-menu">
                <button class="portfolio-menu-toggle" type="button" aria-expanded="false"
                    aria-controls="portfolio-piece-menu-panel">
                    Portfolio pieces
                </button>
                <nav class="portfolio-menu-panel" id="portfolio-piece-menu-panel" aria-label="Portfolio pieces"
                    aria-hidden="true" inert>
                    <h2>Portfolio pieces</h2>
                    <ul>
                        <li><a href="./beholder.html">Beholder</a></li>
                        <li><a href="./demonChicken.html">Demon Chicken</a></li>
                        <li><a href="./dysphoriaMiniatures.html">Dysphoria Miniatures</a></li>
                        <li><a href="./dysphoriaMiniaturesSTLs.html">Dysphoria Miniatures STLs</a></li>
                        <li><a href="./fjordenesBådebyggeri.html">Fjordenes Bådebyggeri</a></li>
                        <li><a href="./gradeAid.html">GradeAid</a></li>
                        <li><a href="./hjemmeDecoration.html">Hjemme Dekoration og Smykker</a></li>
                        <li><a href="./homoware.html">Homoware</a></li>
                        <li><a href="./nerfThis.html">Nerf This</a></li>
                        <li><a href="./svampenBob.html">Svampen Bob</a></li>
                        <li><a href="./zealandButterfly.html">Zealand Butterfly</a></li>
                        <li><a href="./zealandStudiestart.html">Zealand Studiestart</a></li>
                    </ul>
                </nav>
            </div>
        `;

        const menu = this.querySelector(".portfolio-menu");
        const toggle = this.querySelector(".portfolio-menu-toggle");
        const panel = this.querySelector(".portfolio-menu-panel");

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

        this._setMenuOpen = setMenuOpen;
    }

    disconnectedCallback() {
        this._setMenuOpen(false);
    }
}

customElements.define("portfolio-piece-header", PortfolioPieceHeader);
