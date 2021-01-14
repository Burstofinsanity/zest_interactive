
// load texture

var luna =  new THREE.TextureLoader().load('images/moon.jpg');
var zoomed = false;
luna.wrapS = luna.wrapT = THREE.RepeatWrapping;
luna.anisotropy = 16;
luna.needsUpdate = true;
var min_zoom = 1200;
var max_zoom = 7900;
var Mover = 0;
var SkyPlus = 0;
var SkyMin = 5;
var roration_dif = new Array()
var animate_go = true;
var land_texture =  new THREE.TextureLoader().load('images/land.jpg');
land_texture.wrapS = luna.wrapT = THREE.RepeatWrapping;
land_texture.needsUpdate = true;
var land_bump=  new THREE.TextureLoader().load('images/earthbump10k.jpg');
land_bump.wrapS = luna.wrapT = THREE.RepeatWrapping;
land_bump.needsUpdate = true;
var land_spec=  new THREE.TextureLoader().load('images/earthspec10k.jpg');
land_spec.wrapS = luna.wrapT = THREE.RepeatWrapping;
land_spec.needsUpdate = true;
var clouds=  new THREE.TextureLoader().load('images/cloud_combined.png');
var normal =  new THREE.TextureLoader().load('images/normal.jpg');
	normal.wrapS = normal.wrapT = THREE.RepeatWrapping;
	normal.needsUpdate = true;
var skydome =  new THREE.TextureLoader().load('images/GAL.jpg');
skydome.wrapS = normal.wrapT = THREE.RepeatWrapping;
skydome.needsUpdate = true;
var particleMaterial;
var mySky = new THREE.MeshPhongMaterial({ map: skydome, emissive: 0x2b2c2a , bumpMap: normal });
mySky.side = THREE.DoubleSide;
var mlib = {
  '23':   new THREE.MeshBasicMaterial({ color: 0xf0f0f }),
  'moon':  new THREE.MeshPhongMaterial({ map: luna, emissive: 0x2b2c2a , bumpMap: normal }),
  'skydome':  new THREE.MeshPhongMaterial({ map: skydome, emissive: 0x2b2c2a , bumpMap: normal }),
  'land':  new THREE.MeshPhongMaterial({ map: land_texture, emissive: 0x2b2c2a , bumpMap: normal , bumpScale: 2, specularMap:land_spec , shininess:1, specular:new THREE.Color(0x000000)}),
  'clouds':  new THREE.MeshPhongMaterial({ map: clouds, emissive: 0x2b2c2a , alphaMap: clouds, transparent: true})
 // 'mars':  new THREE.MeshPhongMaterial({ map: mars, emissive: 0x2b2c2a })
}
var particleLight;

var particles = {
    count: 1800,
    particles: new THREE.Geometry(),
    particleMaterial: new THREE.PointsMaterial({
        color: 0x000000,
        size:20
    })
};

var planets = {
    scene: null,
    camera: null,
    renderer: null,
    container: null,
    controls: null,
    clock: null,
    stats: null,
	land: null,
	touch_points: [],

    projector:null,
    init: function() { // Initialization
        // create main scene
        this.scene = new THREE.Scene();

        var SCREEN_WIDTH = window.innerWidth,
            SCREEN_HEIGHT = window.innerHeight;

        // prepare camera
        var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 1, FAR = 20000;
        this.camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
        this.scene.add(this.camera);
        this.camera.position.set(1200, 10, -300);
        // prepare renderer
        this.renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});
        this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
        this.renderer.setClearColor(0x000000,0);
        this.renderer.sortObjects = false;

        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMapSoft = true;
		projector = new THREE.Projector();

        // prepare container
        this.container = document.createElement('div');
		this.container.id = "div_cont";
        document.body.appendChild(this.container);
        this.container.appendChild(this.renderer.domElement);
		document.getElementById("div_cont").childNodes[0].id = "canvas";
		

		document.addEventListener( 'dblclick', onDocumentMouseUp, false );
		document.addEventListener( 'touchend', onDocumentMouseUp, false );
        // events
        THREEx.WindowResize(this.renderer, this.camera);
		
        // prepare controls (OrbitControls)
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target = new THREE.Vector3(0, 0, 0);
		this.controls.maxDistance = max_zoom;
		this.controls.minDistance = min_zoom;
        // prepare clock
        this.clock = new THREE.Clock();

        // prepare stats
        

		var areaLight1 = new THREE.HemisphereLight( 0xffffff, 0xffffff,1.1	);
		this.scene.add(areaLight1);

		var landGeometry = new THREE.SphereGeometry(400, 800, 40 );
        this.land = new THREE.Mesh(landGeometry, mlib['land']);
		this.land.position.x = 0;
        this.land.position.y = 0;
		this.land.position.z = 0;
        this.scene.add(this.land);

		var customMaterial = new THREE.ShaderMaterial( 
				{
					uniforms: 
					{ 
						"c":   { type: "f", value: 0.6 },
						"p":   { type: "f", value: 4.0 },
						glowColor: { type: "c", value: new THREE.Color(0x44c3fe) },
						viewVector: { type: "v3", value: this.camera.position }
					},
					vertexShader:   document.getElementById( 'vertexShader'   ).textContent,
					fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
					side: THREE.BackSide,
					blending: THREE.AdditiveBlending,
					transparent: true
				}   );
					
				this.landGlow = new THREE.Mesh( landGeometry.clone(), customMaterial.clone() );
				this.landGlow.position = this.land.position;
				this.landGlow.scale.multiplyScalar(1.15);
				
	

		var cloudsG = new THREE.SphereGeometry(415, 800, 40 );
        clouds = new THREE.Mesh(cloudsG, mlib['clouds']);
		clouds.position.x = 0;
        clouds.position.y = 0;
		clouds.position.z = 0;
		clouds2 = clouds;
        this.scene.add(clouds);
        var cloudsG2 = new THREE.SphereGeometry(410, 800, 40 );
		this.clouds2 = new THREE.Mesh(cloudsG2, mlib['clouds']);
        this.clouds2.position.x = 0;
        this.clouds2.position.y = 0;
        this.clouds2.position.z = 0;
    	this.clouds2 = clouds;
		this.scene.add(clouds2);this.scene.add( this.landGlow );

		var moonGeometry = new THREE.SphereGeometry(80, 100, 20 );
        this.moon = new THREE.Mesh(moonGeometry, mlib['moon']);
       // moon.position.y = 500;
	    this.moon.position.set(0, 0, 500);//x,y,z
        this.scene.add(this.moon);


		var skyG = new THREE.SphereGeometry(8000, 100, 40 );
        sky = new THREE.Mesh(skyG, mySky);
		sky.position.x = 0;
        sky.position.y = 0;
		sky.position.z = 0;

        this.scene.add(sky);
}
};

// Animate the scene
function animate() {

  	    requestAnimationFrame(animate);
        render();
        update();

}
function zoomLevel(inOut,Level){
	if(inOut)
		this.controls.dollyIn(Level);
		else
		this.controls.dollyOut(Level);
}
// Update controls and stats
function update() {
    planets.controls.update(planets.clock.getDelta());

    var timer = Date.now() * 0.000025;
    planets.moon.rotation.z = Math.cos(timer * 0.1) * 300;
	planets.moon.position.x = Math.cos(timer * 5) * 500;
	planets.moon.position.z = Math.sin(timer * 5) * 800;
	sky.rotation.y  = Mover/4;
    clouds.rotation.y = SkyPlus;
    clouds2.rotation.y = SkyMin;
	      
	if(animate_go)
      {
	    planets.land.rotation.y = Mover;
	    Mover = Mover + 0.005;
        SkyPlus = SkyPlus + 0.008;
        SkyMin = SkyMin + 0.006;
      }
  else
    {
		
       planets.camera.position.set(1200,10,-0);
	   planets.camera
      if(Mover > 3.5){Mover = Mover - 6.3;}
      var ph1 = Mover*100;
      var ph2 = ph1*2
      ph1 = Math.floor(ph2);
      ph2 = ph1/2;
      var ground = ph2 / 100;
      var rot_y  = ground;

      if(rot_y > 0 && rot_y < 0.05){
          ground = 0;
      }
      else
        if(rot_y < 0 && rot_y > 0.05){
            ground = 0;
        }
        else
      if(rot_y > 0 ){
        ground = rot_y - 0.05;

      }
      else
      if(rot_y < 0 ){
        ground = rot_y + 0.05;
      }
	  if(rot_y == 0 ){SkyPlus = SkyPlus + 0.004;
        SkyMin = SkyMin + 0.003;
	  }
      planets.land.rotation.y = ground;
      planets.sky.rotation.y  = ground / 4 ;
      Mover = ground
    }
}

// Render the scene
function render() {
    if (planets.renderer) {
        planets.renderer.render(planets.scene, planets.camera);
    }
}

// Initialize lesson on page load
function initializeLesson() {
    planets.init();
    animate();
}
var x = 0;
function onDocumentMouseUp(event){
	
		document.removeEventListener( 'dblclick', onDocumentMouseUp, false );	
		if(!zoomed){
		zoomed = true;
		var vector = new THREE.Vector3( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1, 0.5 );
		planets.projector = new THREE.Projector();
		planets.projector.unprojectVector( vector, planets.camera );
		var raycaster = new THREE.Raycaster( planets.camera.position, vector.sub( planets.camera.position ).normalize() );
		var intersects = raycaster.intersectObject( planets.landGlow);
		if ( intersects.length > 0 ) {
			var vid = document.getElementById('globe_video');
			$(vid).hide(0);
			var vid2 = document.getElementById('globe_video_2');
			$(vid2).show(0);
			vid2.loop = false;
			vid2.play();
			var x = 1;
			var y = 1;
			var zoom_interval = setInterval(function(){
				if(x > 0.9){
				x = planets.camera.scale.x - 0.003;
				y = planets.camera.scale.y - 0.003;
				}
				else
				if(x > 0.7){
				x = planets.camera.scale.x - 0.006;
				y = planets.camera.scale.y - 0.006;
				}
				else
				if(x > 0.5){
				x = planets.camera.scale.x - 0.009;
				y = planets.camera.scale.y - 0.009;
				}
				else
				{
					$('#fade_white').fadeIn(300);
						
					setTimeout(function(){
						$('#div_cont').css('display','none');
						$('#screen').show(300);
						$('#fade_white').fadeOut(500);	
						setTimeout(function(){$('#hot_spots').fadeIn(1000);},2500);
					},500);
				x = planets.camera.scale.x - 0.012;
				y = planets.camera.scale.y - 0.012;
				}
				console.log(x);
				if(x > 0.1){
					planets.camera.scale.set(x,y,1);
				}
				else{
					clearInterval(zoom_interval);
					planets.scene.remove(planets.land);
					planets.scene.remove(planets.landGlow);
					planets.scene.remove(sky);
					planets.scene.remove(planets.clouds);
					planets.scene.remove(planets.clouds2);
					planets.scene.remove(planets.moon);
					}
				},5);
			planets.camera.offset.x = 0;
			
		}
		}
	}



if (window.addEventListener)
    window.addEventListener('load', initializeLesson, false);
else if (window.attachEvent)
    window.attachEvent('onload', initializeLesson);
else 
	window.onload = initializeLesson;
