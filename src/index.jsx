import "@fontsource-variable/comfortaa"
import "./index.css"
import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { Canvas } from "@react-three/fiber"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import Experience from "./Experience"
import Interface from "./components/Interface"
import Loading from "./components/Loading"
import AnimatedCursor from "react-animated-cursor"
import { translate } from "./utils/lang"

document.title = `Pablo Nudel • ${translate("title", "Jr Web Developer")}`

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Analytics />
		<SpeedInsights />
		{window.innerWidth > 1279 && (
			<AnimatedCursor
				innerSize={12}
				outerSize={24}
				innerScale={0.5}
				outerScale={2}
				color='207, 207, 255'
			/>
		)}
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
			<EffectComposer disableNormalPass>
				<Bloom mipmapBlur />
			</EffectComposer>
			<Suspense fallback={null}>
				<Experience />
			</Suspense>
		</Canvas>
	</React.StrictMode>
)
