import { useRef, useState, useEffect } from "react"
import { Float, Text3D } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export default function ScreenText() {
	const text = "<Hello World/>"
	const splited = text.split("")
	const screenText = useRef()

	const [move, setMove] = useState(false)
	const randomCoord = []

	useEffect(() => {
		screenText.current.children.forEach(children => {
			randomCoord.push({
				x: (2 * Math.random() - 1) * 3,
				y: (2 * Math.random() - 1) * 3,
				z: Math.random() * 6,
				deg: Math.PI * 2 * Math.random(),
			})
		})
	})

	useEffect(() => {
		const timer = setTimeout(() => {
			setMove(false)
		}, 1000)
		return () => clearTimeout(timer)
	}, [move])

	const mouseGroup = () => {
		setMove(true)
	}

	function moveLetters(children, index, scale, coord, factor, lambda, delta) {
		coord.forEach(c => {
			children.position[c] = THREE.MathUtils.damp(
				children.position[c],
				randomCoord[index][c] * factor,
				lambda,
				delta
			)
			children.scale[c] = THREE.MathUtils.damp(
				children.scale[c],
				scale,
				lambda,
				delta
			)
		})
		children.rotation.x = THREE.MathUtils.damp(
			children.rotation.x,
			randomCoord[index].deg * factor,
			lambda,
			delta
		)
	}

	useFrame((state, delta) => {
		screenText.current.children.forEach((children, index) => {
			move
				? moveLetters(children, index, 1.3, ["x", "y", "z"], 1.5, 6, delta)
				: moveLetters(children, index, 1, ["x", "y", "z"], 0, 1, delta)
		})
	})

	return (
		<>
			<group ref={screenText} onPointerOver={!move ? mouseGroup : null}>
				{splited.map((letter, index) => {
					return (
						<Float
							key={index}
							speed={5}
							floatIntensity={0.2}
							rotationIntensity={0.1}
						>
							<Text3D
								font='./fonts/Source Code Pro SemiBold_Italic.json'
								size={0.6}
								height={0.2}
								position={[index * 0.45, 0, 0]}
							>
								{letter}
								<meshStandardMaterial color={[0.4, 0.4, 0.8]} wireframe />
							</Text3D>
						</Float>
					)
				})}
			</group>
		</>
	)
}
