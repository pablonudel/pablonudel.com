import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import SplitType from "split-type"
import { translate } from "../utils/lang"

gsap.registerPlugin(useGSAP)

export default function Roles({ className }) {
	const container = useRef()

	const titles = translate("roles", [
		"Web Developer",
		"Illustrator",
		"Motion Designer",
		"Graphic Designer",
	])

	useGSAP(
		() => {
			const tl = gsap.timeline({
				repeat: -1,
				delay: 1,
			})

			const splitTitles = []

			titles.forEach((title, index) => {
				splitTitles.push(
					new SplitType(`#title-${index}`, {
						types: "chars",
					})
				)
			})

			splitTitles.forEach(element => {
				tl.from(element.chars, {
					yPercent: -130,
					opacity: 0,
					stagger: 0.05,
					duration: 0.5,
					ease: "back.out",
				})
				tl.to(element.chars, {
					yPercent: 130,
					opacity: 0,
					stagger: 0.05,
					duration: 0.5,
					ease: "back.in",
					delay: 2,
				})
			})
		},
		{ scope: container, revertOnUpdate: true }
	)

	return (
		<div className={className}>
			{titles.map((title, index) => {
				return (
					<div ref={container} key={index} className='absolute overflow-hidden'>
						<p
							id={`title-${index}`}
							className='title m-0 ml-1 pt-1 font-light uppercase leading-none tracking-[5px] text-[#b7b7e5] xl:text-xl'
						>
							{title}
						</p>
					</div>
				)
			})}
		</div>
	)
}
