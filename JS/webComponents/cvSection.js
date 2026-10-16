class CvSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="cv-and-fact-background">
                <div class="cv-and-fact-container">
                    <div class="cv-container">
                        <div class="cv-wrapper">
                            <h2>Arbejdserfaring</h2>
                            <div class="cv-content work-experience"></div>
                        </div>
                    </div>

                    <div class="fact-container">
                        <div class="fact-wrapper">
                            <h2>Nogle fakta om mig</h2>
                            <div class="fact-list">
                                <ul class="fact-list-items">
                                    <li>Jeg er selvlært 3D kunstner/designer</li>
                                    <li>Jeg har lavet nogle simple små spil i Unity og Godot</li>
                                    <li>Min mest dyrebare egendel er min Custom Gibson Flying V guitar</li>
                                    <li>Jeg syntes den bedste film til dato, er den originale Alien</li>
                                    <li>Jeg er kæmpe fan af Warhammer 40.000 universet</li>
                                    <li>Jeg er den stolte ejer af 3, 3D printere</li>
                                    <li>Heavy Metal og Hård elektronisk musik er mine ynglings genre</li>
                                    <li>Jeg skal have mindst to kopper sort kaffe om morgenen</li>
                                </ul>
                            </div>
                        </div>

                        <div class="recommendation-wrapper">
                            <h2>Anbefalinger</h2>
                            <div class="recommendation">
                                <div class="recommendation-text">
                                    <h3>Zealand Connected Starters</h3>
                                    <p>Svetlana Drevskich</p>
                                </div>
                                <a href="PDFs/anbefaling Kiwi.pdf" download><button>Download PDF</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("cv-section", CvSection);
