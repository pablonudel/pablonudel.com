import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import Desktop from "./components/Desktop"
import GradientCircle from "./components/GradientCircle"

export default function Experience() {
	const { size } = useThree(state => state)

	const cursor = {}
	cursor.x = 0
	cursor.y = 0

	const Xpos = () => {
		if (window.innerWidth < 1279) return -0.8
		if (1280 <= window.innerWidth && window.innerWidth < 1536) return 0
		return 0.1
	}

	const Ypos = () => {
		if (window.innerWidth < 640) return 4
		return 3
	}

	document.addEventListener("mousemove", CursorPos)
	document.addEventListener("touchmove", CursorPos)

	function CursorPos(e) {
		e.type === "touchmove"
			? ((cursor.x = e.touches[0].clientX / size.width - 0.5),
				(cursor.y = e.touches[0].clientY / size.height - 0.5))
			: ((cursor.x = e.clientX / size.width - 0.5),
				(cursor.y = e.clientY / size.height - 0.5))
	}

	useFrame((state, delta) => {
		const { camera } = state
		camera.position.x = THREE.MathUtils.damp(
			camera.position.x,
			-cursor.x + 0.8,
			3,
			delta
		)
		camera.position.y = THREE.MathUtils.damp(
			camera.position.y,
			cursor.y + 1.5,
			3,
			delta
		)
		camera.position.z = THREE.MathUtils.damp(
			camera.position.z,
			Ypos() - Xpos() * 0.5,
			3,
			delta
		)

		camera.lookAt(-0.8 - Xpos(), 0.4, 0)
	})

	return (
		<>
			<Desktop />
			<GradientCircle
				position={[1.5, -1, -2.2]}
				rotation={[0, 0, -Math.PI * 0.5]}
				radio={4}
				stops={[0, 0.25, 0.5, 1]}
				colors={["#19191d", "#19191d", "#252530", "#252530"]}
			/>

			<GradientCircle
				position={[-1.5, -0.2, -1.5]}
				rotation={[0, 0, 0]}
				radio={1.5}
				stops={[0, 0.25, 0.5, 1]}
				colors={["#19191d", "#19191d", "#252530", "#252530"]}
			/>
			<GradientCircle
				position={[0, 0, -1]}
				rotation={[0, 0, -Math.PI * 0.2]}
				radio={1.5}
				stops={[0, 0.5, 1]}
				colors={["#774E35", "#252530", "#252530"]}
			/>
		</>
	)
}
