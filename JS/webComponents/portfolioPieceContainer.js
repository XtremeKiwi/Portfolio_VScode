class PortfolioPieceContainer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="portfolio-piece-container">
                <div class="portfolio-wrapper">
                    <div class="portfolio-wrapper-progress" role="progressbar" aria-label="Web Design scroll progress"
                        aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                        <span class="portfolio-wrapper-progress-fill"></span>
                    </div>
                    <div class="UI-webdev">
                        <h3>Web Design</h3>
                        <div class="portfolio-grid1">
                            <div class="portfolio-piece"></div>
                        </div>
                    </div>
                </div>

                <div class="portfolio-wrapper">
                    <div class="portfolio-wrapper-progress" role="progressbar" aria-label="3D scroll progress"
                        aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                        <span class="portfolio-wrapper-progress-fill"></span>
                    </div>
                    <div class="threedee">
                        <h3>3D</h3>
                        <div class="portfolio-grid2">
                            <div class="portfolio-piece"></div>
                        </div>
                    </div>
                </div>

                <div class="portfolio-wrapper">
                    <div class="portfolio-wrapper-progress" role="progressbar"
                        aria-label="Fysiske produkter og STLs scroll progress"
                        aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                        <span class="portfolio-wrapper-progress-fill"></span>
                    </div>
                    <div class="graphic-design">
                        <h3>Fysiske produkter & STLs</h3>
                        <div class="portfolio-grid3">
                            <div class="portfolio-piece"></div>
                        </div>
                    </div>
                </div>

                <div class="portfolio-wrapper">
                    <div class="portfolio-wrapper-progress" role="progressbar" aria-label="Koncept kunst scroll progress"
                        aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                        <span class="portfolio-wrapper-progress-fill"></span>
                    </div>
                    <div class="concept-art">
                        <h3>Koncept kunst</h3>
                        <div class="portfolio-grid4">
                            <div class="portfolio-piece"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this._portfolioWrappers = [...this.querySelectorAll(".portfolio-wrapper")];
        this._updateWrapperProgress = (wrapper) => {
            const progressBar = wrapper.querySelector(".portfolio-wrapper-progress");
            const progressFill = wrapper.querySelector(".portfolio-wrapper-progress-fill");
            const scrollableHeight = wrapper.scrollHeight - wrapper.clientHeight;
            const progress = scrollableHeight > 0
                ? Math.min(100, Math.max(0, (wrapper.scrollTop / scrollableHeight) * 100))
                : 0;
            const roundedProgress = Math.round(progress);

            progressFill.style.transform = `scaleX(${progress / 100})`;
            progressBar.setAttribute("aria-valuenow", String(roundedProgress));
            progressBar.setAttribute("aria-valuetext", `${roundedProgress}%`);
        };

        this._updateAllWrapperProgress = () => {
            this._portfolioWrappers.forEach((wrapper) => this._updateWrapperProgress(wrapper));
        };

        this._onWrapperScroll = (event) => this._updateWrapperProgress(event.currentTarget);
        this._portfolioWrappers.forEach((wrapper) => {
            wrapper.addEventListener("scroll", this._onWrapperScroll, { passive: true });
        });

        this._portfolioContentObserver = new MutationObserver(() => this._updateAllWrapperProgress());
        this._portfolioContentObserver.observe(this, { childList: true, subtree: true });
        window.addEventListener("resize", this._updateAllWrapperProgress);
        this._updateAllWrapperProgress();
    }

    disconnectedCallback() {
        this._portfolioWrappers.forEach((wrapper) => {
            wrapper.removeEventListener("scroll", this._onWrapperScroll);
        });
        this._portfolioContentObserver.disconnect();
        window.removeEventListener("resize", this._updateAllWrapperProgress);
    }
}

customElements.define("portfolio-piece-container", PortfolioPieceContainer);
