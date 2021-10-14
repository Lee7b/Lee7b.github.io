const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)"); // Not currently using, but may at some point

// Initialize dark mode control
darkModeControl();

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