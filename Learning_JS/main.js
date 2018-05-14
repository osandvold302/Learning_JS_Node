/* main javascript file */

$(document).ready(function(){
	'use strict';

	// installing paper.js to use
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));

	//manipulate the area to paint in here
	var tool = new Tool();

	tool.onMouseDown = function(event){
		var c = Shape.Circle(event.point,20);
		c.fillColor = 'green';
	}

	var c2 = Shape.Circle(200,200,100);
	c2.fillColor = 'black';
	var text = new PointText(200,200);
	text.justfication = 'center';
	text.fillColor = 'white';
	text.fontSize = 20;
	text.content = 'hello world';
	// put the paper.js attributes on the screen
	paper.view.draw();
	
	console.log('main.js loaded');	
}); 
