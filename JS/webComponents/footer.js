class PortfolioFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <marquee width="100%" direction="left" height="100%" scrollamount="8" class="marquee-footer">
                    <div class="footer-text">
                        <h1>Kontakt mig! &emsp;</h1>
                        <h1>{ KIWI-MAI }&emsp;</h1>
                        <section>
                            <h2>KiwiMai@protonmail.com </h2>
                            <h2>+45 22 97 84 84</h2>
                        </section>
                    </div>
                </marquee>
            </footer>
        `;
    }
}

customElements.define("portfolio-footer", PortfolioFooter);
