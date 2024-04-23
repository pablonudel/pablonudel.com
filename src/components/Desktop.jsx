import {
	ContactShadows,
	useTexture,
	useGLTF,
	Center,
	useVideoTexture,
} from "@react-three/drei"
import { extend } from "@react-three/fiber"
import { geometry } from "maath"
import ScreenText from "./ScreenText"

extend(geometry)

export default function Desktop() {
	const { nodes } = useGLTF("./desktop/desktop.glb")
	const desktopBake = useTexture("./desktop/desktopBake.jpg")
	const videoTexture = useVideoTexture("./screen.mp4")
	desktopBake.flipY = false

	return (
		<>
			<group>
				<ContactShadows blur={0.1} opacity={0.5} frames={60} scale={10} />

				<group scale={0.12}>
					<mesh geometry={nodes.desktop.geometry}>
						<meshBasicMaterial map={desktopBake} />
					</mesh>
					<mesh geometry={nodes.lamp.geometry} position={nodes.lamp.position}>
						<meshBasicMaterial color={[1.7, 2, 1.6]} />
					</mesh>
					<mesh
						geometry={nodes.glasses.geometry}
						position={nodes.glasses.position}
						rotation={nodes.glasses.rotation}
					>
						<meshBasicMaterial color={"#ffffff"} opacity={0.3} transparent />
					</mesh>
					<Center position={[0, 6.8, 1]}>
						<ScreenText />
					</Center>
					<mesh
						position={[-9.75, 1.925, 2.1]}
						rotation={[-0.43, 0, 0]}
						scale={1.8}
					>
						<roundedPlaneGeometry args={[3, 1.9, 0.1]} />
						<meshBasicMaterial map={videoTexture} toneMapped={false} />
					</mesh>
				</group>
			</group>
		</>
	)
}

useGLTF.preload("./desktop/desktop.glb")
useTexture.preload("./desktop/desktopBake.jpg")
