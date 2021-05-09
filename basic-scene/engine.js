// A scene is like a set for your 3D animations, lights, cameras and objects. 
const scene = new THREE.Scene();

// Mesh - a combination of geometry (the shape) and a material (how it looks)

//Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0xff0000});
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh)

// Camera (not visible - just a point of view. Think of the old meaning of camera meaning a view rather than a tangible object)
// There are different types of camera. Below is the default.
// Two parameters - vertical field of view in degrees (small = zoomed in, big = zoomed out), the aspect ratio (the width of the render divided by the height of the render)
const sizes = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 1;

scene.add(camera)

//Renderer - the scene through your camera on a canvas
const canvas = document.querySelector(".webgl");

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
