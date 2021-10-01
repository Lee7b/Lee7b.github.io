const currentTheme = localStorage.getItem("theme");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)"); // Not currently using, but may at some point

if (currentTheme === "dark") {
	document.body.classList.add("dark");
	updateImagesForTheme("dark");
}

function toggleDarkMode() {
	document.body.classList.toggle('dark');

	// Update storage and images for dark mode
	if (document.body.classList.contains("dark")) {
		localStorage.setItem("theme", "dark");
		updateImagesForTheme("dark");
	} else {
		localStorage.setItem("theme", "light");
		updateImagesForTheme("light");
	}
}

function updateImagesForTheme(theme) {
	let aboutImage = document.getElementById("about-content-image");
	let skillsImage = document.getElementById("skills-image");
	let projectsImage = document.getElementById("projects-image");

	if (theme === "dark") {
		aboutImage.src = "/img/aboutmeimgdark.svg";
		skillsImage.src = "/img/skillsimgdark.svg";
		projectsImage.src = "/img/projectsimgdark.svg";
	} else {
		aboutImage.src = "/img/aboutmeimg.svg";
		skillsImage.src = "/img/skillsimg.svg";
		projectsImage.src = "/img/projectsimg.svg";
	}
}

// Initialize AOS
AOS.init({
	duration : 2000,
	once : true,
	offset: 100,
})

// Initialize TypeWriter
let typewriterText = document.getElementById('typewriter');
let typewriter = new Typewriter(typewriterText, {
	delay: 100,
	deleteSpeed: 40
});
typewriter
	.typeString('hi there. <br /> my name is sam.')
	.pauseFor(2000)
	.typeString("<br/> i'm a full stack developer.")
	.start();

// Initialize popover
$('#prj1btn').popover({
	content: "You're already here silly!",
	placement: 'right',
	trigger: 'focus',
	toggle: 'popover',
	animation: true
});

// Update the show more button when clicked
function updateShowMoreBtn() {
	document.getElementById('showmorebtn').classList.add('disabled');
	setTimeout(function(){document.getElementById('showmorebtn').classList.remove('disabled');},500);

	let button = document.getElementById('showmoretxt');
	button.innerHTML === 'Show More' ? button.innerHTML = 'Show Less' : button.innerHTML = 'Show More'
}