import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

import './App.css'

const Cube = ({ position, size, color }) => {
  const ref = useRef()

  useFrame((state, delta) => {
    ref.current.rotation.x += delta * 0.5
    ref.current.rotation.y += delta * 0.75
  })

  return (
    <mesh 
      position={position}
      ref={ref}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial 
        color={color}
      />
    </mesh>
  )
}

const styles = {
  nav: {
    width: "100%",
    padding: "12px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid ",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
    links: {
    listStyle: "none",
    display: "flex",
    gap: "24px",
    fontSize: "18px",
  },
    linkItem: {
    cursor: "pointer",
    transition: "color 0.2s",
  },
  menuButton: {
    display: "none",
    fontSize: "24px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },

  cubeSpin:{
    size: "500px"
  }
};

function App() {

  return (

    <>
      <header>
        <nav style={styles.nav}>
          <div style={styles.logo}>Piracy in anime</div>
          <ul style={styles.links}>
            <li style={styles.linkItem}>Home</li>
            <li style={styles.linkItem}>About</li>
            <li style={styles.linkItem}>Contact</li>
          </ul>
          <button style={styles.menuButton}>☰</button>
        </nav>
      </header>

      <div style={{ width: "50vw", height: "50vh" }}>
        <Canvas className='canvas' style={styles.cubeSpin}>

          <directionalLight position={[0, 0, 2]} />
          <ambientLight intensity={0.4} />

          <Cube position={[0, 0, 0]} size={[3, 3, 3]} color={"red"}/>

        </Canvas>
      </div>

    </>
    
  )
}

export default App