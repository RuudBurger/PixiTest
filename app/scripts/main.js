// create an new instance of a pixi stage
var interactive = true,
	meter = new FPSMeter(),
	stage = new PIXI.Stage(0xF5F5F5, interactive),
	height = window.innerHeight,
	width = window.innerWidth;

// create a renderer instance.
p(width, height);
var renderer = PIXI.autoDetectRenderer(width, height, {
	antialias: true
});

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

requestAnimFrame(animate);

var graphics = [];
for(var i = 0; i < 10; i++){
	var dim = 20 * Math.random();

	var g = new PIXI.Graphics();
	g.x = width * Math.random();
	g.y = height * Math.random();
	g.pivot.x = dim/2;
	g.pivot.y = dim/2;

	g.beginFill(0xDDDDDD);

	// draw a rectangle
	g.drawRect(0, 0, dim, dim);

	stage.addChild(g);

	graphics.push(g);
}

function animate(){

	requestAnimFrame(animate);

	// just for fun, lets rotate mr rabbit a little
	graphics.forEach(function(g){
		g.rotation += 0.01;
	})

	// render the stage
	renderer.render(stage);

	meter.tick();
}