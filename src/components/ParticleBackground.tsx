"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import type { Container, Engine } from "@tsparticles/engine";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  if (!init) return null;

  return (
    <div className="absolute inset-0 z-0">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab", // Neural network connection on hover
              },
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.8,
                  color: "#00F0FF"
                }
              },
            },
          },
          particles: {
            color: {
              value: "#00F0FF", // Pulsar Blue
            },
            links: {
              color: "#E0E6ED", // Neutron White
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.8,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                width: 800,
                height: 800
              },
              value: 70, // Number of nodes (neurons)
            },
            opacity: {
              value: 0.4,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
