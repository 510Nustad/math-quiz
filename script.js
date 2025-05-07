// Three.js dynamic background setup :contentReference[oaicite:7]{index=7}
import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

const canvas = document.getElementById('bg-canvas');
const scene = new THREE.Scene();

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  1000
);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio);

// Handle window resize :contentReference[oaicite:8]{index=8}
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  // Add custom animations here if desired
  renderer.render(scene, camera);
}

animate();
