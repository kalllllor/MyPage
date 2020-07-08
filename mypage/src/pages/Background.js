import React, { Component } from "react";
import * as THREE from "three";
import circle from "../assets/circle.png"

import "../css/pages/background.css"


class Background extends Component {
    componentDidMount() {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;
        this.scene = new THREE.Scene();
        //Camera
        this.camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
        this.camera.position.z = 100;
        // this.camera.rotation.x = Math.PI / 2;
        this.scene.add(this.camera)

        //Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setClearColor("0x000000", 1);
        this.renderer.setSize(width, height);
        this.mount.appendChild(this.renderer.domElement);

        this.starGeo = new THREE.Geometry();
        for (let i = 0; i < 6000; i++) {
            let star = new THREE.Vector3(
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
            map: this.sprite
        });
        this.stars = new THREE.Points(this.starGeo, this.starMaterial);
        this.scene.add(this.stars);

        this.animate();

        window.addEventListener('resize', this.handleResize, false)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize, false)
    }

    animate = () => {
        this.starGeo.verticesNeedUpdate = true;
        this.stars.rotateY(0.0005 + Math.random() * 0.0008);
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.animate);
    }

    handleResize = () => {
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
    }

    render() {
        return (
            <div className="background"
                ref={mount => {
                    this.mount = mount;
                }}
            />
        );
    }
}
export default Background;
