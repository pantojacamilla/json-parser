    // generate a scene object&#xD;&#xA;    var scene = new THREE.Scene();&#xD;&#xA;    scene.background = new THREE.Color(0x111111);&#xD;&#xA;    // generate a camera&#xD;&#xA;    var aspectRatio = window.innerWidth / window.innerHeight;&#xD;&#xA;    var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);&#xD;&#xA;    camera.position.set(0, 1, -150);&#xD;&#xA;    // generate a renderer&#xD;&#xA;    var renderer = new THREE.WebGLRenderer({antialias: true});&#xD;&#xA;    renderer.setPixelRatio(window.devicePixelRatio); // <3 retina&#xD;&#xA;    renderer.setSize(window.innerWidth, window.innerHeight); // canvas size&#xD;&#xA;    renderer.shadowMap.enabled = true;&#xD;&#xA;    renderer.shadowMap.type = THREE.PCFSoftShadowMap;&#xD;&#xA;    document.body.appendChild(renderer.domElement);&#xD;&#xA;    // generate controls&#xD;&#xA;    var controls = new THREE.TrackballControls(camera, renderer.domElement);&#xD;&#xA;    // generate some lights&#xD;&#xA;    var ambientLight = new THREE.AmbientLight(0xeeeeee);&#xD;&#xA;    scene.add(ambientLight);&#xD;&#xA;    // create light that casts shadows&#xD;&#xA;    var light = new THREE.PointLight(0xffffff);&#xD;&#xA;    light.position.set(0, 0, -100);&#xD;&#xA;    light.castShadow = true;&#xD;&#xA;    scene.add(light);&#xD;&#xA;    // render loop&#xD;&#xA;    function render() {&#xD;&#xA;      requestAnimationFrame(render);&#xD;&#xA;      renderer.render(scene, camera);&#xD;&#xA;      controls.update();&#xD;&#xA;    };&#xD;&#xA;    // draw some geometries&#xD;&#xA;    var geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );&#xD;&#xA;    var material = new THREE.MeshNormalMaterial( { color: 0xffff00 } );&#xD;&#xA;    var torus = new THREE.Mesh( geometry, material );&#xD;&#xA;    torus.position.set(0, 0, -10);&#xD;&#xA;    torus.castShadow = true;&#xD;&#xA;    scene.add( torus );&#xD;&#xA;    var geometry = new THREE.PlaneGeometry( 200, 200, 32 );&#xD;&#xA;    var material = new THREE.MeshBasicMaterial(&#xD;&#xA;      {color: 0xffff00, side: THREE.DoubleSide} );&#xD;&#xA;    var plane = new THREE.Mesh( geometry, material );&#xD;&#xA;    plane.receiveShadow = true;&#xD;&#xA;    scene.add( plane );&#xD;&#xA;    render();