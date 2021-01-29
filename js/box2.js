// import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js';

function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
    });

    // renderer.setClearColor( 0xffffff ); // background color
    // renderer = new THREE.WebGLRenderer( { canvas, alpha: true } ); // init like this
renderer.setClearColor( 0xA9A9A9, 0 ); // second param is opacity, 0 => transparent


    const fov = 75;
    const aspect = 2; // the canvas default
    const near = 0.1;
    const far = 5;
    // const widthCanvas = 1500;
    // const heightCanvas = 500;
    // renderer.setSize(widthCanvas, heightCanvas);
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;

    const scene = new THREE.Scene();

    {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);
    }

    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    function makeInstance(geometry, color, x) {
        const material = new THREE.MeshPhongMaterial({color});
    
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
    
        cube.position.x = x;
    
        return cube;
      }

    const cubes = [
        makeInstance(geometry, 0xFF1B78, -1.5), // color: disruptive rose
        makeInstance(geometry, 0x00FFFA, 0), // color: connected cyan
        makeInstance(geometry, 0x0DFDB4, 1.5) // color: transformative turquoise
    ];

    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
          renderer.setSize(width, height, false);
        }
        return needResize;
      }

    /* to fix stretching https://threejsfundamentals.org/threejs/lessons/threejs-responsive.html
    set the aspect of the camera to the aspect of the canvas display size
    */
    function render(time) {
        time *= 0.001; // convert time to seconds

        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        }

        cubes.forEach((cube, ndx) => {
            const speed = 1 + ndx * .1;
            const rot = time * speed;
            cube.rotation.x = rot;
            cube.rotation.y = rot;
        });

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

}

main();