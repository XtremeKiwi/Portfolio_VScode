class OtherExperienceContainer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="other-experience-container">
                <div class="courses-wrapper">
                    <h2>Kursus beviser</h2>
                    <div class="courses">
                        <div class="courses-text">
                            <h3>Zenva</h3>
                            <p>Ud over min tid som studerende på Zealand Køge og Roskilde, har jeg også taget kurser inden for
                                programming, shaders og 3D grafik.</p>
                            <p>Det skal dog siges, at disse kurser var meget overfladiske, men en god introduktion til diverse emner.</p>
                        </div>
                        <a href="courses.html"><button>Zenva beviser</button></a>
                    </div>
                </div>

                <div class="other-experience-wrapper">
                    <h2>Anden erfaring</h2>
                    <div class="other-experience-content other-experience"></div>
                </div>
            </section>
        `;
    }
}

customElements.define("other-experience-container", OtherExperienceContainer);
