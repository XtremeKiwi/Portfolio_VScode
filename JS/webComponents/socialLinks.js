class SocialLinks extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="SoMe-container">
                <div class="SoMe-links">
                    <a href="https://www.linkedin.com/in/kiwi-mai-54b0b81bb/" target="_blank">
                        <img src="img/linkedin-brands-solid-full.svg" alt="LinkedIn logo">
                        <p>LinkedIn</p>
                    </a>
                </div>
                <div class="SoMe-links">
                    <a href="https://github.com/XtremeKiwi" target="_blank">
                        <img src="img/github-brands-solid-full.svg" alt="Github logo">
                        <p>Github</p>
                    </a>
                </div>
                <div class="SoMe-links">
                    <a href="https://www.artstation.com/xtremekiwi" target="_blank">
                        <img src="img/artstation-brands-solid-full.svg" alt="ArtStation logo">
                        <p>ArtStation</p>
                    </a>
                </div>
            </section>
        `;
    }
}

customElements.define("social-links", SocialLinks);
