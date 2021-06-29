
var canvas = new fabric.Canvas('MyCanvas')

ball_x = 0;
ball_y = 0;
hole_x = 800;
hole_y = 400;

hole_object = "";
ball_object = "";

block_image_width = 5;
block_image_height = 5;

function load_img(){
     console.log("hole")
	fabric.Image.fromURL( "golf-h.png",  function(Img){
		hole_object=Img
		hole_object.scaleToWidth(50)
		hole_object.scaleToHeight(50)
		hole_object.set({
			top:hole_y,left:hole_x
		});
		canvas.add(hole_object);
});
}

load_img()

function new_img(){
	console.log("hole")
   fabric.Image.fromURL( "ball.png",  function(Img){
	   ball_object=Img
	   ball_object.scaleToWidth(50)
	   ball_object.scaleToHeight(50)
	   ball_object.set({
		   top:ball_y,left:ball_x
	   });
	   canvas.add(ball_object);
});
}

new_img()

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ball_x == hole_x) && (ball_y == hole_y)){
		canvas.remove("ball.png");
		document.getElementById("Goal").innerHTML = "You have hit the goal";
		document.getElementById("MyCanvas").style.borderColor = "red";
	}
	
	{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right()
			console.log("right");
		}
	}
	
	function up()
	{
		//upward
		if(ball_y >= 50){
			ball_y = ball_y - 10
		    canvas.remove(ball_object);
			new_img()
		}
	}

	function down()
	{
		//downward
		if(ball_y <= 450){
			ball_y = ball_y + 10
		    canvas.remove(ball_object);
			new_img()
		}
	}

	function left()
	{
		if(ball_x >= 5)
		{
			//left
			ball_x = ball_x - 10;
			canvas.remove(ball_object)
			new_img()
		}
	}
	function right()
	{
		if(ball_x <= 1050)
		{
			//right
			ball_x = ball_x + 10;
			console.log("right")
			canvas.remove(ball_object)
			new_img()
		}
	}
}
