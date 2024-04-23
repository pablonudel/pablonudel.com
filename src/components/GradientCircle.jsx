import { GradientTexture } from "@react-three/drei"

export default function GradientCircle({
	position,
	radio,
	stops,
	colors,
	rotation,
}) {
	return (
		<mesh position={position} rotation={rotation}>
			<circleGeometry args={[radio, 64]} />
			<meshBasicMaterial>
				<GradientTexture stops={stops} colors={colors} />
			</meshBasicMaterial>
		</mesh>
	)
}
