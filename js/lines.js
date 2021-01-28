const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial( { color: 0x00FFFA } );// for dashed lines use LineDashedMaterial

// geometry of lines
/*Note that lines are drawn between each consecutive pair of vertices, 
but not between the first and last (the line is not closed.)
*/
const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 0, -10, 0 ) );
// points.push( new THREE.Vector3( 10, 0, 0 ) );


const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );

scene.add( line );
renderer.render( scene, camera );
