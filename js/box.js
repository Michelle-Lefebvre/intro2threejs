const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75, // field of view in degrees
        window.innerWidth / window.innerHeight, // aspect ratio use width of element divided by the height
        0.1, // near clipping plane means objects further away won't be seen
        1000 // far clipping plane
      );

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      // create box
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00fffa });
    //   const material = new THREE.MeshBasicMaterial({ color: 0x00fffa, side: THREE.DoubleSide }); // to render back side
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;

      const animate = function () {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      animate();