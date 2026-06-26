let experience = '';

workExperienceData.forEach((workexperience) => {
    experience += `
        <div class="cv-section">
            <div class="cv-section-title-role-date">
                <div class="cv-section-title-role">
                    <h3>${workexperience.companyName}</h3>
                    <p>${workexperience.jobTitle}</p>
                </div>
                <p class="cv-section-date">${workexperience.date}</p>
            </div>
            <div class="cv-section-text">
                <p>
                    ${workexperience.jobDescription}
                </p>
            </div>
        </div>
    `
});

document.querySelector(".work-experience").innerHTML = experience;