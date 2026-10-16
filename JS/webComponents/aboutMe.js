class AboutMe extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="about-me-container">
                <div class="about-me-wrapper">
                    <div class="about-me-intro">
                        <h3>Hejsa og velkommen til mit portefølje! Mit navn er Kiwi Mai, jeg er multimediedesigner, og læser
                            top-up i webudvikling hos Zealand Roskilde</h3>
                    </div>
                </div>

                <div class="about-me-skills">
                    <div class="about-me-image-container image">
                        <img class="about-me-image" src="img/Portrait 2.png" alt="Billede af mig, Kiwi Mai">
                    </div>

                    <div class="about-me-skill-example adobe">
                        <h3>Adobe</h3>
                        <ul>
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>Premier Pro</li>
                            <li>After Effects</li>
                            <li>InDesign</li>
                        </ul>
                    </div>

                    <div class="about-me-skill-example threeD">
                        <h3>3D</h3>
                        <ul>
                            <li>Blender</li>
                            <li>Substance Painter</li>
                            <li>Zbrush</li>
                            <li>Marvelous Designer</li>
                        </ul>
                    </div>

                    <div class="about-me-skill-example programming">
                        <h3>Programmering</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Vue.JS</li>
                            <li>Git</li>
                        </ul>
                    </div>

                    <div class="about-me-skill-example other">
                        <h3>Andet</h3>
                        <ul>
                            <li>Mixcraft 9 (D.A.W)</li>
                            <li>Chitubox</li>
                            <li>WordPress</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                </div>

                <section class="wisdom-generator-container">
                    <button id="wisdom-button" onclick="wisdomGenerator()">Ny visdom</button>
                    <span id="wisdom-span"></span>
                </section>
            </section>
        `;
    }
}

customElements.define("about-me", AboutMe);
