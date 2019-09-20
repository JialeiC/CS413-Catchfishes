var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(500, 500, {backgroundColor: 0xFFEFDB});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var cat = new PIXI.Sprite(PIXI.Texture.fromImage("CAT.jpg"));
cat.setTransform(0, 0, 0.2, 0.2, 0, 0, 0, 0, 0);
cat.position.x = 110;
cat.position.y = 110;
stage.addChild(cat);

var fish1 = new PIXI.Sprite(PIXI.Texture.fromImage("Fish1.jpg"));
fish1.setTransform(0, 0, 0.1, 0.1, 0, 0, 0, 0, 0);
fish1.position.x = 50;
fish1.position.y = 50;
stage.addChild(fish1);

var fish2 = new PIXI.Sprite(PIXI.Texture.fromImage("Fish2.jpg"));
fish2.setTransform(0, 0, 0.1, 0.1, 0, 0, 0, 0, 0);
fish2.position.x = 250;
fish2.position.y = 320;
stage.addChild(fish2);

var fish3 = new PIXI.Sprite(PIXI.Texture.fromImage("Fish3.jpg"));
fish3.setTransform(0, 0, 0.1, 0.1, 0, 0, 0, 0, 0);
fish3.position.x = 350;
fish3.position.y = 220;
stage.addChild(fish3);

var sun = new PIXI.Sprite(PIXI.Texture.fromImage("sun.jpg"));
sun.setTransform(0, 0, 0.15, 0.15, 0, 0, 0, 0, 0);
sun.position.x = 450;
sun.position.y = 20;
stage.addChild(sun);


function mouseHandler(e) {
  cat.position.x = Math.floor(Math.random() * 400) + 20;
  cat.position.y = Math.floor(Math.random() * 400) + 20;
     if ((cat.position.x< 370) &&(cat.position.x>300)) {
               stage.removeChild(fish3);
     }
          if ((cat.position.x<450) &&(cat.position.x>400)) {
               stage.removeChild(fish2);
      }

}
cat.interactive = true;
cat.on('mousedown', mouseHandler);



function animate() {
  requestAnimationFrame(animate);
     sun.rotation += 0.01;
  renderer.render(stage);
}

animate();
