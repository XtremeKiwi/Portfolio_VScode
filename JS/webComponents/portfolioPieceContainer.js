class PortfolioPieceContainer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="portfolio-piece-container">
                <div class="portfolio-wrapper">
                    <div class="UI-webdev">
                        <h3>Web Design</h3>
                        <div class="portfolio-grid1">
                            <div class="portfolio-piece"></div>
                        </div>
                    </div>
                </div>

                <div class="portfolio-wrapper">
                    <div class="threedee">
                        <h3>3D</h3>
                        <div class="portfolio-grid2">
                            <div class="portfolio-piece"></div>
                        </div>
                    </div>
                </div>

                <div class="portfolio-wrapper">
                    <div class="graphic-design">
                        <h3>Fysiske produkter & STLs</h3>
                        <div class="portfolio-grid3">
                            <div class="portfolio-piece"></div>
                        </div>
                    </div>
                </div>

                <div class="portfolio-wrapper">
                    <div class="concept-art">
                        <h3>Koncept kunst</h3>
                        <div class="portfolio-grid4">
                            <div class="portfolio-piece"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("portfolio-piece-container", PortfolioPieceContainer);
