let otherExperience = ''

otherExperienceData.forEach((otherexperience) => {
    otherExperience += `
        <div class="other-experience-text">
            <h3>${otherexperience.experienceTitle}</h3>
                <p>${otherexperience.date}</p>
            </div>
            <div class="other-experience-description">
                <p>${otherexperience.jobDescription}</p>
            </div>
    `
});

document.querySelector(".other-experience").innerHTML = otherExperience;