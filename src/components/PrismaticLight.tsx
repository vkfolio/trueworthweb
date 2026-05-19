import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = `
  void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`

const fragmentShader = `
  precision highp float;

  uniform float u_time;
  uniform float u_intensity;
  uniform vec2 u_mouse;
  uniform vec2 u_resolution;

  float vignette(vec2 uv) {
    return max(1.0 - dot(uv * 0.8, uv * 0.8), 0.0);
  }

  mat2 rot(float a) {
    float c = cos(a);
    float s = sin(a);
    return mat2(c, -s, s, c);
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy - u_resolution * 0.5) / min(u_resolution.x, u_resolution.y);

    float t = u_time;
    float vi = vignette(uv);

    // Mouse influence - very subtle
    uv += (u_mouse * 0.3) * vignette(uv * 0.5);

    vec2 p = uv;
    p = rot(sin(p.y * 2.0 + t * 0.3) * 0.08) * p;
    p = rot(cos(p.x * 1.5 + t * 0.2) * 0.06) * p;

    // Multi-layered bloom - REDUCED intensities
    float bloom = exp(-length(p) * 4.0) * (0.4 + 0.3 * sin(t * 0.5));
    bloom += exp(-length(p - vec2(0.1, 0.05)) * 5.0) * 0.2;
    bloom += exp(-length(p + vec2(0.08, -0.06)) * 6.0) * 0.15;
    bloom += exp(-length(p - vec2(-0.05, 0.08)) * 7.0) * 0.1;
    bloom *= vi;

    // Purple/Cyan prism accent flare - very subtle
    float prismPhase = t * 0.4 + length(p) * 2.5;
    float prismR = sin(prismPhase) * 0.5 + 0.5;
    float prismG = sin(prismPhase + 2.094) * 0.5 + 0.5;
    float prismB = sin(prismPhase + 4.189) * 0.5 + 0.5;
    vec3 prismColor = vec3(prismR, prismG, prismB) * exp(-length(p) * 4.0) * 0.08;

    // White core - DIMMED significantly
    vec3 core = vec3(1.0, 0.97, 0.92) * exp(-length(p) * 10.0) * 0.6;

    // Combine core and prism
    vec3 col = core + prismColor;

    // Add warm-tinted bloom - REDUCED
    col += vec3(1.0, 0.92, 0.85) * bloom * 0.8;

    // Subtle color fringe
    col += vec3(0.4, 0.3, 0.5) * exp(-abs(p.y) * 12.0) * exp(-abs(p.x) * 4.0) * 0.06;

    // Apply intensity and radial falloff
    col *= u_intensity * vi;

    // Film grain
    float grain = (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233)) + fract(t * 0.1) * 100.0) * 43758.5453) - 0.5) * 0.015;
    col += grain;

    // Gamma shaping
    col = pow(max(col, vec3(0.0)), vec3(0.95));

    gl_FragColor = vec4(col, 1.0);
  }
`

function PrismaticQuad({ intensity = 0.5 }: { intensity?: number }) {
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_intensity: { value: intensity },
      u_mouse: { value: new THREE.Vector2(0, 0) },
      u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    }),
    [intensity]
  )

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    const handleResize = () => {
      if (materialRef.current) {
        materialRef.current.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight)
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value = state.clock.elapsedTime
      materialRef.current.uniforms.u_mouse.value.lerp(
        new THREE.Vector2(mouseRef.current.x, mouseRef.current.y),
        0.05
      )
    }
  })

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}

export default function PrismaticLight({ intensity = 0.5, className = '' }: { intensity?: number; className?: string }) {
  return (
    <div className={className} style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <Canvas
        orthographic
        camera={{ zoom: 1, position: [0, 0, 1] }}
        style={{ width: '100%', height: '100%' }}
        gl={{ antialias: false, alpha: false }}
        dpr={Math.min(window.devicePixelRatio, 1.5)}
      >
        <PrismaticQuad intensity={intensity} />
      </Canvas>
    </div>
  )
}
