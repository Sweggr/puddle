// ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
// ┃                                                Player                                                             ┃
// ┃  Manages the input object that                                                                                    ┃
// ┃  can place entities into Puddle                                                                                   ┃
// ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛


PDL.player = {
	spawnInterval:200,
	spawnTimer:0,

	update:(delta)=>{
		if(PDL.gPad.up   ){PDL.camDY-=PDL.camSpeed;}	
		if(PDL.gPad.down ){PDL.camDY+=PDL.camSpeed;}	
		if(PDL.gPad.left ){PDL.camDX-=PDL.camSpeed;}	
		if(PDL.gPad.right){PDL.camDX+=PDL.camSpeed;}	

		//left-Click to create shrimps	
		if(PDL.mouse.lClick){;
			PDL.player.spawnTimer+=delta;
			if(PDL.player.spawnTimer>=PDL.player.spawnInterval){
				var worldX = PDL.mouse.worldX;
				var worldY = PDL.mouse.worldY;
				if(PDL.pointRectCollide(worldX,worldY,1,1,PDL.width-1,PDL.height-1)){
					new PDL.shrimp(PDL.mouse.worldX,PDL.mouse.worldY,PDL.mouse.vx,PDL.mouse.vy); 
				}
				PDL.player.spawnTimer=0;
			}
		}
	}
}





