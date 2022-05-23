document.addEventListener('DOMContentLoaded', function() {
	var modeToggle = document.getElementById('toggleMode');
	var mode = 0;
	console.log(mode);
	modeToggle.addEventListener('click', function() {
		if(mode === 0) {
			mode = 1
				document.documentElement.style.setProperty('--base', 'rgb(195, 186, 198)');
				document.documentElement.style.setProperty('--overlay', 'rgb(217, 224, 238)');
				modeToggle.src = './resources/sun.svg';
		} else {
			mode = 0
				document.documentElement.style.setProperty('--base', 'rgb(22, 19, 32)');
				document.documentElement.style.setProperty('--overlay', 'rgb(30, 30, 46)');
				modeToggle.src = './resources/moon.svg';
		}
	})
})
function alert(target) {
	target.style.display = 'block';
	setTimeout(function() {
		target.style.display = 'none';
	}, 1000)
}