var btn = document.getElementById('btn');
var value = 0;

btn.addEventListener("click", function(){
	btn.innerHTML = "Click me again!";
	value += 50;
	btn.style.top = value + 'px';
});
