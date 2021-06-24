    let scene, camera, renderer;&#xD;&#xA;    var raycaster, mouse, INTERSECTED;&#xD;&#xA;    let SCREEN_WIDTH = window.innerWidth&#xD;&#xA;    let SCREEN_HEIGHT = window.innerHeight&#xD;&#xA;    let canvas = document.getElementById('scene')&#xD;&#xA;    let objects = []&#xD;&#xA;    init();&#xD;&#xA;    animate();&#xD;&#xA;    $(".hamburger").on("click", function () {&#xD;&#xA;      $(".hamburger").toggleClass("active");&#xD;&#xA;      $("#scene").toggleClass("slide-left");;&#xD;&#xA;    });&#xD;&#xA;    function init() {&#xD;&#xA;      renderer = new THREE.WebGLRenderer({&#xD;&#xA;        canvas: canvas,&#xD;&#xA;        antialias: true&#xD;&#xA;      });&#xD;&#xA;      renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);&#xD;&#xA;      renderer.setClearColor(0x000000);&#xD;&#xA;      &#xD;&#xA;      scene = new THREE.Scene();&#xD;&#xA;      &#xD;&#xA;      camera = new THREE.PerspectiveCamera(&#xD;&#xA;        100, SCREEN_WIDTH / SCREEN_HEIGHT, .1, 10000);&#xD;&#xA;      camera.position.set(0, 0, 10);&#xD;&#xA;      camera.lookAt(new THREE.Vector3(0, 0, 0));&#xD;&#xA;      &#xD;&#xA;      var geometry = new THREE.SphereGeometry(5, 32, 32);&#xD;&#xA;      var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );&#xD;&#xA;      sphere = new THREE.Mesh(geometry, material);&#xD;&#xA;      objects.push(sphere)&#xD;&#xA;      scene.add(sphere);&#xD;&#xA;      &#xD;&#xA;      raycaster = new THREE.Raycaster();&#xD;&#xA;      mouse = new THREE.Vector2();&#xD;&#xA;      &#xD;&#xA;      document.addEventListener('mousemove', onDocumentMouseMove, false);&#xD;&#xA;      document.addEventListener('mousemove', onHover, false);&#xD;&#xA;      document.addEventListener('click', onClick, false);&#xD;&#xA;      window.addEventListener('resize', render, false);&#xD;&#xA;      &#xD;&#xA;      scene.add(new THREE.AmbientLight(0x333333));&#xD;&#xA;      var light = new THREE.DirectionalLight(0xffffff, 0.8);&#xD;&#xA;      light.position.set(50, 3, 5);&#xD;&#xA;      scene.add(light);&#xD;&#xA;    }&#xD;&#xA;    function animate() {&#xD;&#xA;      requestAnimationFrame(animate);&#xD;&#xA;      render();&#xD;&#xA;    }&#xD;&#xA;    function onDocumentMouseMove(event) {&#xD;&#xA;      event.preventDefault();&#xD;&#xA;      mouse.x = (event.clientX  / SCREEN_WIDTH) * 2 - 1;&#xD;&#xA;      mouse.y = - (event.clientY / SCREEN_HEIGHT) * 2 + 1;&#xD;&#xA;    }&#xD;&#xA;    function onClick() {&#xD;&#xA;      raycaster.setFromCamera(mouse, camera);&#xD;&#xA;      var intersects = raycaster.intersectObjects(objects);&#xD;&#xA;      console.log("I was click: ", intersects)&#xD;&#xA;    }&#xD;&#xA;    function onHover() {&#xD;&#xA;      raycaster.setFromCamera(mouse, camera);&#xD;&#xA;      var intersects = raycaster.intersectObjects(objects);&#xD;&#xA;      &#xD;&#xA;      if (intersects.length > 0) {&#xD;&#xA;        if (INTERSECTED != intersects[0].object) {&#xD;&#xA;          if (INTERSECTED) INTERSECTED.remove(INTERSECTED.sphere);&#xD;&#xA;          INTERSECTED = intersects[0].object//.geometry;&#xD;&#xA;          &#xD;&#xA;          var geometry = new THREE.SphereGeometry(5.1, 32, 32);&#xD;&#xA;          var material = new THREE.MeshBasicMaterial({&#xD;&#xA;            color: 0xff5521,&#xD;&#xA;            opacity: 0.01&#xD;&#xA;          });&#xD;&#xA;          sphere1 = new THREE.Mesh(geometry, material);&#xD;&#xA;          INTERSECTED.sphere = sphere1&#xD;&#xA;          INTERSECTED.add(sphere1);&#xD;&#xA;        }&#xD;&#xA;      } else {&#xD;&#xA;        if (INTERSECTED) INTERSECTED.remove(INTERSECTED.sphere);&#xD;&#xA;        INTERSECTED = null;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    function render() {&#xD;&#xA;      sphere.rotation.x += 0.01&#xD;&#xA;      camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;&#xD;&#xA;      camera.updateProjectionMatrix();&#xD;&#xA;      renderer.render(scene, camera);&#xD;&#xA;    };