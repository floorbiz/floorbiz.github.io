// JavaScript Document
function get_scroll(){
  var scrOfX = 0, scrOfY = 0;
  if( typeof( window.pageYOffset ) == 'number' ) {
    //Netscape compliant
    scrOfY = window.pageYOffset;
    scrOfX = window.pageXOffset;
  } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
    //DOM compliant
    scrOfY = document.body.scrollTop;
    scrOfX = document.body.scrollLeft;
  } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
    //IE6 standards compliant mode
    scrOfY = document.documentElement.scrollTop;
    scrOfX = document.documentElement.scrollLeft;
  }
  return scrOfY;
}

function hover_mousemove(event){
	if (!event){
        event = window.event;
    }
	
	var mousePos = mouseCoords(event);
	
	hovbox = document.getElementById('hoverbox');
	hovbox.style.left = (mousePos.x - 50) + "px";
	hovbox.style.top = (mousePos.y + 50) + "px";
}

function hover_up(imgurl){
	document.getElementById('hoverbox').style.display='block';
	document.getElementById('hoverbox_image').src = imgurl;
	
}

function hover_down(){
	document.getElementById('hoverbox').style.display='none';
	document.getElementById('hoverbox_image').src = '';
}

function mouseCoords(event){
	if(event.pageX || event.pageY){
		return {x:event.pageX, y:event.pageY};
	}
	return {
		x:event.clientX + (document.body.scrollLeft + document.documentElement.scrollLeft) - document.body.clientLeft,
		y:event.clientY + (document.body.scrollTop + document.documentElement.scrollTop)  - document.body.clientTop
	};
}