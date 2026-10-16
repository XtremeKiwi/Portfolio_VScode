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
        `;
    }
}

customElements.define("portfolio-piece-header", PortfolioPieceHeader);
