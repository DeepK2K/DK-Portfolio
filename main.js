import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { MeshBasicMaterial } from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#background"),
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30)
renderer.render(scene, camera);


const geometry = new THREE.RingGeometry(10, 15, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x232370, side: THREE.DoubleSide });
const ring = new THREE.Mesh(geometry, material);
scene.add(ring);


const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20)
const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight, ambientLight)
const lightHelper = new THREE.PointLightHelper(pointLight)
//const gridHelper = new THREE.GridHelper(200, 50)
//scene.add(lightHelper, gridHelper)
const controls = new OrbitControls(camera, renderer.domElement);

//stars
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff, });
  const star = new THREE.Mesh(geometry, material);
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(250));
  star.position.set(x, y, z);
  scene.add(star);
}

//background
const spaceTexture = new THREE.TextureLoader().load('solarsystem.jpg');
scene.background = spaceTexture;

//Me
const dkTexture = new THREE.TextureLoader().load('DeepAvatar.JPG')
const dk = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: dkTexture })
);
scene.add(dk)

//Moon
const moonTexture = new THREE.TextureLoader().load('MoonFlat.jpg')
const normalMoonTexture = new THREE.TextureLoader().load('PlanetTexture.jpg')
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalMoonTexture,
  })
);
scene.add(moon)
moon.position.setY(20)

//Mercury
const mercuryTexture = new THREE.TextureLoader().load('Mercury.jpg')

const mercury = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: mercuryTexture,
    normalMap: normalMoonTexture,
  })
);
scene.add(mercury)
mercury.position.setX(-20)
mercury.position.setY(25)
mercury.position.setZ(-30)

//Venus
const venusTexture = new THREE.TextureLoader().load('Venus.avif')

const venus = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: venusTexture,
    normalMap: normalMoonTexture,
  })
);
scene.add(venus)
venus.position.setX(-60)
venus.position.setY(25)
venus.position.setZ(-30)

//earth
const earthTexture = new THREE.TextureLoader().load('EarthFlat.jpg')
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(10, 32, 32),
  new THREE.MeshStandardMaterial({
    map: earthTexture,
  })
);
scene.add(earth)
earth.position.setX(-65)
earth.position.setY(20)
earth.position.setZ(-10)

//Mars
const marsTexture = new THREE.TextureLoader().load('Mars.jpeg')
const mars = new THREE.Mesh(
  new THREE.SphereGeometry(10, 32, 32),
  new THREE.MeshStandardMaterial({
    map: marsTexture,
    normalMap: normalMoonTexture,

  })
);
scene.add(mars)
mars.position.setX(-30)
mars.position.setY(-5)
mars.position.setZ(10)

const jupiterTexture = new THREE.TextureLoader().load('Jupiter.jpg')
const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(10, 32, 32),
  new THREE.MeshStandardMaterial({
    map: jupiterTexture,
    normalMap: normalMoonTexture,

  })
);
scene.add(jupiter)
jupiter.position.setX(30)
jupiter.position.setY(-1)
jupiter.position.setZ(20)


//Saturn 
const saturnTexture = new THREE.TextureLoader().load('Saturn.jpg');
const saturn = new THREE.Mesh(
  new THREE.SphereGeometry(12, 32, 32),
  new THREE.MeshStandardMaterial({
    map: saturnTexture,
    normalMap: normalMoonTexture,
  })
);
scene.add(saturn)
saturn.position.setX(90)
saturn.position.setY(25)
saturn.position.setZ(-15)

// Saturn ring
const saturnRingTexture = new THREE.TextureLoader().load('SaturnTexture.jpg');
const saturnRing = new THREE.Mesh(
  new THREE.RingGeometry(15, 25, 64),
  new THREE.MeshBasicMaterial({
    map: saturnRingTexture,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.7,
  })
);
saturnRing.rotation.x = Math.PI / 2;
saturn.add(saturnRing);
//Uranus
const uranusTexture = new THREE.TextureLoader().load('Uranus.jpg');
const uranus = new THREE.Mesh(
  new THREE.SphereGeometry(12, 32, 32),
  new THREE.MeshStandardMaterial({
    map: uranusTexture,
    normalMap: normalMoonTexture,
  })
);
scene.add(uranus)
uranus.position.setX(90)
uranus.position.setY(40)
uranus.position.setZ(-100)

//Neptune
const neptuneTexture = new THREE.TextureLoader().load('Neptune.jpg');
const neptune = new THREE.Mesh(
  new THREE.SphereGeometry(12, 32, 32),
  new THREE.MeshStandardMaterial({
    map: neptuneTexture,
    normalMap: normalMoonTexture,
  })
);
scene.add(neptune)
neptune.position.setX(50)
neptune.position.setY(50)
neptune.position.setZ(-200)
//Sun

const sunTexture = new THREE.TextureLoader().load('Sun.jpg')


const sun = new THREE.Mesh(
  new THREE.SphereGeometry(20, 32, 32),
  new THREE.MeshBasicMaterial({
    map: sunTexture,
    normalMap: normalMoonTexture,
  })
);
scene.add(sun)
sun.position.setX(0)
sun.position.setY(30)
sun.position.setZ(-60)

function animate() {
  requestAnimationFrame(animate)
  ring.rotation.x += 0.01;
  ring.rotation.y += 0.005;
  ring.rotation.z += 0.01;

  saturn.rotation.y += 0.01;
  saturn.rotation.x += 0.001;

  moon.rotation.x += 0.01;
  moon.rotation.y += 0.001;

  mars.rotation.y += 0.01;
  mars.rotation.x += 0.001;

  venus.rotation.y += 0.01;
  venus.rotation.x += 0.001;

  mercury.rotation.y += 0.01;
  mercury.rotation.x += 0.001;

  earth.rotation.y += 0.01;
  earth.rotation.x += 0.001;

  jupiter.rotation.y += 0.01;
  jupiter.rotation.x += 0.001;

  uranus.rotation.y += 0.01;
  uranus.rotation.x += 0.001;

  neptune.rotation.y += 0.01;
  neptune.rotation.x += 0.001;

  moon.position.x = earth.position.x + 20 * Math.sin(Date.now() * 0.0005);
  moon.position.z = earth.position.z + 20 * Math.cos(Date.now() * 0.0005);

  renderer.render(scene, camera)
}
animate()
Array(250).fill().forEach(addStar)
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;


  dk.rotation.y += 0.05;
  dk.rotation.z += 0.05;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.002;
  camera.position.y = t * -0.002;
}
document.body.onscroll = moveCamera