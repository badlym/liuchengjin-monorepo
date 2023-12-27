import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const Terrain: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 场景设置
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xa0a0a0) // 设置背景色

    // 相机设置
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    )
    camera.position.set(0, 50, 100) // 设置相机位置

    // 渲染器设置
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight) // 设置渲染器大小
    mountRef.current?.appendChild(renderer.domElement) // 将渲染器的DOM元素添加到React组件

    // 添加轨道控制器，允许通过鼠标操作来旋转视角
    const controls = new OrbitControls(camera, renderer.domElement)

    // 地形几何体设置
    const planeGeometry = new THREE.PlaneGeometry(100, 100, 32, 32) // 创建平面几何体
    const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00, wireframe: true }) // 创建材料
    const plane = new THREE.Mesh(planeGeometry, planeMaterial) // 创建网格
    plane.rotation.x = -Math.PI / 2 // 将平面旋转为水平
    scene.add(plane) // 将平面添加到场景中

    // 添加光源
    const ambientLight = new THREE.AmbientLight(0x404040) // 环境光
    scene.add(ambientLight)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5) // 平行光
    directionalLight.position.set(0, 1, 0) // 设置平行光位置
    scene.add(directionalLight)

    // 动画循环
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update() // 更新控制器
      renderer.render(scene, camera) // 渲染场景
    }

    animate()

    // 组件卸载时进行清理
    return () => {
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} />
}

export default Terrain
