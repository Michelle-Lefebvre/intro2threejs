const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75, // field of view in degrees
    window.innerWidth / window.innerHeight, // aspect ratio use width of element divided by the height
    0.1, // near clipping plane means objects further away won't be seen
    1000 // far clipping plane
);

const renderer = new THREE.WebGLRenderer( {antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.append(renderer.domElement);

const geometry = new THREE.SphereGeometry( 5, 32, 32 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00, opacity: 0.7} );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

// const directionalLight = new THREE.DirectionalLight(0xffffff,1.2);
// directionalLight.position.x = 3;
// directionalLight.position.y = 4;
// directionalLight.position.z = 4;

// renderer.render(scene, directionalLight);


