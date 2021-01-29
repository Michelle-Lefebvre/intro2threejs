// reference: https://threejsfundamentals.org/threejs/lessons/threejs-primitives.html

// import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js';

const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas});

  const fov = 40;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 1000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 40;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xAAAAAA);
      // create sphere
      const radius = 1.5;
      const widthSegments = 15;
      const heightSegments = 10;
      const geometry = new THREE.SphereBufferGeometry(radius, widthSegments, heightSegments);
      const material = new THREE.PointsMaterial({
        color: 'red',
        // sizeAttenuation: false,
        // size: 3,       // in pixels
          size: 0.1,     // in world units
      });
      const points = new THREE.Points(geometry, material);
      scene.add(points);
      camera.position.z = 5;

      const animate = function () {
        requestAnimationFrame(animate);

        points.rotation.x += 0.01;
        points.rotation.y += 0.01;

        renderer.render(scene, camera);
      };
      

      animate();