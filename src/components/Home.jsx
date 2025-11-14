import { useState, Suspense } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './Home.css'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Going_merry from '../../public/Going_merry'
 

function Home() {

  return (
    <>
    <Canvas>
      <ambientLight />
      <OrbitControls enableZoom={false} />
      <Suspense fallback={null}>
        < Going_merry />
      </Suspense>
      <Environment preset='sunset'/>
    </Canvas>
      
    </>
  )
}

export default Home
