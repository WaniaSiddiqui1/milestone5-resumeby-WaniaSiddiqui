//listing elements
document.getElementById("resumeForm")?.addEventListener("submit", function(event) {
    event.preventDefault();


    //Get references to form elements using their IDs
    const profilepictureInput = document.getElementById(
        "profilepicture"
    ) as HTMLInputElement;


    //type assertion
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as
     HTMLTextAreaElement;
    const experienceElement = document.getElementById("experience") as
     HTMLTextAreaElement;
    const skillsElement = document.getElementById("skills") as
     HTMLTextAreaElement;
//** 
     const usernameElement = document.getElementById(
        "username"
     ) as HTMLInputElement;

    if(profilepictureInput &&
         nameElement &&
          emailElement && 
          phoneElement && 
          educationElement && 
          experienceElement &&
           skillsElement &&
        //** 
        usernameElement)
           
       {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        //** 
        const username = usernameElement.value;
        const uniquePath = `resume/${username.replace(/\s+/g, '_')}_cv.html`

        //picture elements
        const profilepicturefile = profilepictureInput.files?.[0];
        const profilepictureURL = profilepicturefile?
        URL.createObjectURL(profilepicturefile):"";





        //create ResumeOutput
    const resumeOutput = `
    <h2>Resume</h2>
    ${
    profilepictureURL? `
    <img src="${profilepictureURL}"alt="profile picture"  class = "profilePicture">` : ""}
    <p><strong>Name:</strong> ${name} </p>
    <p><strong>Email:</strong> ${email} </p>
    <p><strong>phone Number :</strong>  ${phone}</p>
    
    <h3>Education</h3>
    <p>${education}</p>

       <h3>Work Experience</h3>
    <p> ${experience} </p>

       <h3>Skills</h3>
    <p> ${skills} </p>
    `;


 //**
const downloadLink = document.createElement("a")
downloadLink.href = "data:text/html;charset=uft-8, " + encodeURIComponent(resumeOutput)
downloadLink.download = uniquePath;
downloadLink.textContent = "Download your 2024 Resume";
  
        //Resume output
    const resumeOutputElement = document.getElementById("resumeOutput")
    if(resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;

        resumeOutputElement.style.display = "block";
    } 
       } else {
        console.error("One or more form elements are missing");
    }
    
    

});
