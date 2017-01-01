function drag(id){
	var obj = document.getElementById(id);
	var disX = 0;
	var disY = 0;
	obj.onmousedown = function(ev){
		var disX = ev.pageX - obj.offsetLeft;
		var disY = ev.pageY - obj.offsetTop;

		obj.onmousemove = function(ev){
			obj.style.left = ev.pageX - disX + 'px';
			obj.style.top = ev.pageY - disY + 'px';
		}
	}
}