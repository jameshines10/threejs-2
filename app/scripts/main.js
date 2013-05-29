var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);        			

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 1);

document.body.appendChild(renderer.domElement);

var triangle = new THREE.Geometry();
var square = new THREE.Geometry();  

triangle.vertices.push( new THREE.Vector3( 0, 20, 0 ));
triangle.vertices.push( new THREE.Vector3( -20, -20, 0 )); 
triangle.vertices.push( new THREE.Vector3( 20, -20, 0 ));  

triangle.faces.push( new THREE.Face3( 0, 1, 2 ) );      			

square.vertices.push( new THREE.Vector3( 20, 20, 0 ));    			
square.vertices.push( new THREE.Vector3( -20, 20, 0 ));
square.vertices.push( new THREE.Vector3( -20, -20, 0 ));
square.vertices.push( new THREE.Vector3( 20, -20, 0 ));

square.faces.push( new THREE.Face4(0, 1, 2, 3) );   

var material = new THREE.MeshBasicMaterial({color: 0xffffff}); 

var triangleMesh = new THREE.Mesh( triangle, material );
var squareMesh = new THREE.Mesh( square, material );

triangleMesh.position.x = -25;
squareMesh.position.x = 25;           

scene.add(triangleMesh);
scene.add(squareMesh);          

camera.position.z = 50;

renderer.render(scene, camera);