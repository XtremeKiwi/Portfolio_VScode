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
        `;
    }
}

customElements.define("portfolio-header", PortfolioHeader);
