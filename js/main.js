// Initialize AOS
AOS.init({
	duration : 2000,
	once : true,
	offset: 100,
})

// Initialize Smooth Scroll
$('#nav a').smoothScroll();

// Initialize TypeWriter
let introtxt = document.getElementById('typewriter');
let typewriter = new Typewriter(introtxt, {
	strings: ['Sam Burkett', 'Software Developer'],
	autoStart: true,
	loop: true,
});

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