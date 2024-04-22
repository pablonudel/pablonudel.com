import { useProgress } from "@react-three/drei"

export default function Loading() {
	const { progress } = useProgress()

	return (
		<>
			<div
				className={`absolute z-20 flex h-dvh w-dvw items-center justify-center bg-[#19191d] font-light tracking-widest text-white ${
					progress === 100 && `pointer-events-none opacity-0`
				} transition-opacity delay-500 duration-500`}
			>
				<p
					className={`text-center ${
						progress === 100 && `opacity-0`
					} transition-opacity duration-500`}
				>
					<span className='text-3xl'>{progress}%</span>
					<br />
					<span className='text-md text-cyan-600'>Loaded</span>
				</p>
			</div>
		</>
	)
}
