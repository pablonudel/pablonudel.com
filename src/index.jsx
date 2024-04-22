import "@fontsource-variable/comfortaa"
import "./index.css"
import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { Canvas } from "@react-three/fiber"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { Environment } from "@react-three/drei"
import Experience from "./Experience"
import Interface from "./components/Interface"
import Loading from "./components/Loading"
import AnimatedCursor from "react-animated-cursor"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AnimatedCursor
			innerSize={12}
			outerSize={24}
			innerScale={0.5}
			outerScale={2}
			color='207, 207, 255'
		/>
		<Loading />
		<Interface />
		<Canvas
			flat
			camera={{
				fov: 50,
				near: 0.1,
				far: 200,
			}}
		>
			<color args={["#19191d"]} attach='background' />
			<Environment background={false} preset='apartment' />
			<EffectComposer disableNormalPass>
				<Bloom mipmapBlur />
			</EffectComposer>
			<Suspense fallback={null}>
				<Experience />
			</Suspense>
		</Canvas>
	</React.StrictMode>
)
