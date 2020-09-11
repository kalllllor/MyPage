import React, { Component } from "react";
import * as THREE from "three";
import { WebGLRenderer } from "three";
import {
  GodRaysEffect,
  EffectPass,
  RenderPass,
  EffectComposer,
} from "postprocessing";
import circle from "assets/icons/circle.png";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
`;

const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -9999;
`;

const BackgroundShadow = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border: 0;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  background-color: hsla(0, 0%, 15%, 0.4);
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
    this.camera.position.z = 300;
    this.camera.position.x = 1;
    this.camera.position.y = 1;

    this.scene.add(this.camera);

    this.renderer = new WebGLRenderer({
      powerPreference: "high-performance",
      antialias: false,
      stencil: false,
      depth: false,
    });
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
      color: 0xddf4fe,
      size: 0.8,
      map: this.sprite,
    });
    this.stars = new THREE.Points(this.starGeo, this.starMaterial);
    this.scene.add(this.stars);

    this.circleGeo = new THREE.CircleGeometry(25, 50);
    this.circleMat = new THREE.MeshBasicMaterial({ color: 0xddf4fe });
    this.circle = new THREE.Mesh(this.circleGeo, this.circleMat);
    this.circle.position.set(0, 0, 0);
    this.circle.scale.setX(1.2);
    this.scene.add(this.circle);

    this.earthGeo = new THREE.CircleGeometry(35, 50);
    this.earthMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    this.earth = new THREE.Mesh(this.earthGeo, this.earthMat);
    this.earth.position.set(0, -60, 20);
    this.earth.scale.setX(1.1);
    this.scene.add(this.earth);

    this.godraysEffect = new GodRaysEffect(this.camera, this.circle, {
      resolutionScale: 1,
      density: 0.8,
      decay: 0.95,
      weight: 0.9,
      samples: 100,
    });
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.effectPass = new EffectPass(this.camera, this.godraysEffect);
    this.effectPass.renderToScreen = true;

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(this.renderPass);
    this.composer.addPass(this.effectPass);

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
    this.stars.rotateY(0.0001 + Math.random() * 0.0002);
    this.mouseX = this.mouse.x;
    this.raycaster.setFromCamera(this.mouse, this.camera);
    this.camera.position.x = this.mouse.x * 3;
    this.camera.position.y = this.mouse.y * 3;
    this.composer.render(0.1);
    if (this.earth.position.y < -40) {
      this.earth.position.y += 0.01;
    }
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
        <BackgroundShadow />
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
