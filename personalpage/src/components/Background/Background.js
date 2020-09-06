import React, { Component } from "react";
import * as THREE from "three";
import circle from "assets/icons/circle.png";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-color: hsla(0, 0%, 15%, 0.4);
`;

const BackgroundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -9999;
`;

class Background extends Component {
  constructor() {
    super();
    this.state = {
      mouseX: null,
    };
  }

  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
    this.camera.position.z = 100;
    this.camera.position.x = 1;
    this.camera.position.y = 1;
    // this.camera.rotation.x = Math.PI / 2;
    this.scene.add(this.camera);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor("0x000000", 1);
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    this.starGeo = new THREE.Geometry();
    for (let i = 0; i < 6000; i++) {
      const star = new THREE.Vector3(
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
        Math.random() * 600 - 300
      );
      this.starGeo.vertices.push(star);
    }
    this.sprite = new THREE.TextureLoader().load(circle);
    this.starMaterial = new THREE.PointsMaterial({
      color: 0xaaaaaa,
      size: 0.9,
      map: this.sprite,
    });
    this.stars = new THREE.Points(this.starGeo, this.starMaterial);
    this.scene.add(this.stars);

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.animate();

    window.addEventListener("mousemove", this.onMouseMove, false);
    window.addEventListener("resize", this.handleResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize, false);
  }

  animate = () => {
    this.starGeo.verticesNeedUpdate = true;
    this.stars.rotateY(0.0005 + Math.random() * 0.0008);
    this.mouseX = this.mouse.x;
    this.raycaster.setFromCamera(this.mouse, this.camera);
    this.camera.position.x = this.mouse.x * 3;
    this.camera.position.y = this.mouse.y * 3;
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate);
  };

  handleResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  };

  onMouseMove = (event) => {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  render() {
    return (
      <Wrapper>
        <BackgroundWrapper
          ref={(mount) => {
            this.mount = mount;
          }}
        />
      </Wrapper>
    );
  }
}
export default Background;
