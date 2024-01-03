import React, { FC, useCallback } from 'react'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'
import type { Container, Engine } from 'tsparticles-engine'
import styles from './index.module.less'

const BgA: FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine)
    // await loadFull(engine)
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container)
  }, [])
  return (
        <div className={styles.bga_main}>
            {/* <canvas ref={canvas} id="canvas"></canvas> */}
            <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={{
              name: 'Basic',
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: 'push'
                  },
                  onHover: {
                    enable: true,
                    mode: 'attract'
                  },
                  resize: true
                },
                modes: {
                  push: {
                    quantity: 4
                  },
                  attract: {
                    easing: 'ease-out-quad',
                    distance: 500,
                    duration: 20,
                    speed: 2,
                    factor: 1
                  }
                }
              },
              particles: {
                color: {
                  value: '#000'
                },
                links: {
                  color: '#000',
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1
                },
                collisions: {
                  enable: true
                },
                move: {
                  direction: 'none',
                  enable: true,
                  outModes: {
                    default: 'bounce'
                  },
                  random: true,
                  speed: 4,
                  straight: false
                },
                number: {
                  density: {
                    enable: true,
                    area: 800
                  },
                  value: 40
                },
                opacity: {
                  value: 0.5
                },
                shape: {
                  type: 'circle'
                },
                size: {
                  value: { min: 1, max: 3 }
                }
              },
              detectRetina: true
            }} />
            <Particles />
        </div>
  )
}

export default BgA
