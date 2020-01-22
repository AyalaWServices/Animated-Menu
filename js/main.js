let buttom = document.getElementById('icon');
let links = document.getElementById('links');

let counter = 0;

buttom.addEventListener('click', function () {
	if (counter == 0) {
		links.className = ('links two');
		counter = 1
	} else {
		links.classList.remove('two');
		links.className = ('links one');
		counter = 0;
	}
});