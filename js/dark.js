function darkModeControl() {
	const darkCheck = document.getElementById('night-light-checkbox');

	darkCheck.addEventListener('click', () => {
	  if (darkCheck.checked) {
		document.body.classList.add('dark');
		updateImagesForTheme('dark');
		localStorage.setItem('sb-theme', 'dark');
	  } else {
		document.body.classList.remove('dark');
		updateImagesForTheme('light');
		localStorage.removeItem('sb-theme');
	  }
	})
  
	if (localStorage.getItem('sb-theme')) {
	  document.body.className = 'dark';
	  updateImagesForTheme('dark');
	  darkCheck.checked = true;
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