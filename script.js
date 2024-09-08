var _a;
//listing elements
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    //Get references to form elements using their IDs
    var profilepictureInput = document.getElementById("profilepicture");
    //type assertion
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    //** 
    var usernameElement = document.getElementById("username");
    if (profilepictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillsElement &&
        //** 
        usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //** 
        var username = usernameElement.value;
        var uniquePath = "resume/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        //picture elements
        var profilepicturefile = (_a = profilepictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureURL = profilepicturefile ?
            URL.createObjectURL(profilepicturefile) : "";
        //create ResumeOutput
        var resumeOutput = "\n    <h2>Resume</h2>\n    ".concat(profilepictureURL ? "\n    <img src=\"".concat(profilepictureURL, "\"alt=\"profile picture\"  class = \"profilePicture\">") : "", "\n    <p><strong>Name:</strong> ").concat(name_1, " </p>\n    <p><strong>Email:</strong> ").concat(email, " </p>\n    <p><strong>phone Number :</strong>  ").concat(phone, "</p>\n    \n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n       <h3>Work Experience</h3>\n    <p> ").concat(experience, " </p>\n\n       <h3>Skills</h3>\n    <p> ").concat(skills, " </p>\n    ");
        //**
        var downloadLink = document.createElement("a");
        downloadLink.href = "data:text/html;charset=uft-8, " + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = "Download your 2024 Resume";
        //Resume output
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.style.display = "block";
        }
    }
    else {
        console.error("One or more form elements are missing");
    }
});
