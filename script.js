project_data = [
{
    "title":"Semantic Analysis",
    "description":"Detect Cyberbully on social media and take instant action by Government and Promote business based on people's insight about different insights.",
    "duration":"Aug 2023",
    "techStack":["Python","Nodejs","Reactjs","BS4"],
    "github":"https://github.com/Sumitpathak721/Sentiment-analysis"
},
{
    "title":"Fake Account Detection",
    "description":"Prevent users from being fraud by scammers on Twitter and enhancing user trust by swiftly identifying and eliminating fake accounts.",
    "duration":"Sept 2023",
    "techStack":["Python","Nodejs","pickle.py","Reactjs","Decision TreeClassification"],
    "github":"https://github.com/Sumitpathak721/Fake-Account-detection"
}
,{
    "title": "Programming Language(Java Compiler with advance syntax)", "description": "Built Language which empowering programmer to write dynamic programming with java features",
    "techStack": ["JAVA", "File-handeling"],
    "duration": "Jan 2023",
    "github": "https://github.com/Sumitpathak721/DJ-language"
},
{
    "title": 'Social Duniya(Social Media Webiste)',
    "description": "Develop Social media website model with user authentication system",
    "techStack": ["NodeJs", "Express", "MongoDB", "EJS", "Jquery", "CSS"],
    "duration": "Nov 2022",
    "github": "https://github.com/Sumitpathak721/Social_Duniya"
},
{
    "title": 'Weather forecast website',
    "description": "Gives real time weather detail according to user City",
    "techStack": ["NodeJs", "Express", "MongoDB", "EJS", "Jquery", "CSS"],
    "duration": "Sep 2022",
    "github": "https://github.com/Sumitpathak721/Weather_Forecast"
},
{
    "title": 'Evolve Artistry Website',
    "description": "Designed a sophisticated artistry website using Django, beautifully displaying a variety of artworks and empowering artists to showcase their creativity.",
    "techStack": ["Django", "Python", "SQLite", "EJS", "CSS", "JS"], "duration": "Aug 2022",
    "github": "https://github.com/Sumitpathak721/Evolves-Artistry"
},
{
    "title": 'Ship-fight Game website',
    "description": "Delivering an exciting shotting game built using JQUERY",
    "techStack": ["JS", "Jquery", "CSS", "HTML"], "duration": "March 2022",
    "github": "https://github.com/Sumitpathak721/Ship-Fight",
    "active": "https://sumitpathak721.github.io/Ship-Fight/"
},
{
    "title": 'ChatBot',
    "description": "Aims is to provide answers to user queries by leveraging past data stored in text files",
    "techStack": ["Python", "File handeling", "Regex.py"],
    "duration": "Dec 2021",
    "github": "https://github.com/Sumitpathak721/AI-ChatBot"
}
]
let text = "";
for(let i=0;i<project_data.length;i++){
    text+=`<div class="project">
    <h3 class="prj-title">${project_data[i].title}</h3>
    <p class="prj-duration">(${project_data[i].duration})</p>
    <div class="prj-detail">
        <p class="prj-desc">${project_data[i].description}</p>
        <div class="prj-techStack">`;
    
    project_data[i].techStack.map((tech)=>(
        text+=`<span>${tech}</span>`
    ))
    text+=`</div>
    </div>
    <div class="prj-links">
        <a href=${project_data[i].github} alt=${project_data[i].title} target="_blank"
            style='background-color:rgb(61, 162, 61)'><i
                class="fa fa-github"></i>Github</a>`
    text+=(project_data[i].active)?`<a href=${project_data[i].active} alt=${project_data[i].title} target="_blank"
            style='background-color:rgb(0 102 255)'><i class="fa fa-globe"></i>Live</a>`:
        ``
    text+=`</div>
</div>
`
document.getElementById("project_content").innerHTML=text;
}

document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
    if (e.ctrlKey && 
        (e.keyCode === 67 || 
         e.keyCode === 85 || 
         e.keyCode === 83 ||
         e.keyCode === 117)) {
        e.preventDefault();
    }
};
