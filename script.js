let scene, camera, renderer;

init();
animate();

function init(){

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x87ceeb);

  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.z = 10;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(100,100),
    new THREE.MeshBasicMaterial({color:0x3c8f3c})
  );

  ground.rotation.x = -Math.PI/2;
  scene.add(ground);

  document.getElementById("info").textContent = "Mundo cargado ✔";

}

function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene,camera);
}
