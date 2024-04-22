import { useState, useEffect } from "react"
import { userLang, translate } from "../utils/lang"

export default function DownloadBtn() {
	const languages = {
		en: {
			label: "en",
			file: "./cv/Pablo Nudel - Front-End Dev - en.pdf",
		},
		es: {
			label: "es",
			file: "./cv/Pablo Nudel - Front-End Dev - es.pdf",
		},
		fr: {
			label: "fr",
			file: "./cv/Pablo Nudel - Front-End Dev - fr.pdf",
		},
	}
	const [lang, setLang] = useState({})

	useEffect(() => {
		if (languages[userLang]) {
			setLang(languages[userLang])
		} else {
			setLang(languages.en)
		}
	}, [])

	const changeCVFile = () => {
		const k = Object.keys(languages)
		const i = k.indexOf(lang.label)
		const l = k.length - 1

		if (i < l) {
			const nextLang = k[i + 1]
			setLang(languages[nextLang])
		} else {
			setLang(languages.en)
		}
	}

	return (
		<div className='flex justify-center xl:justify-start'>
			<a
				href={lang.file}
				target='_blank'
				className='pointer-events-auto mb-5  rounded-s-full border-2 border-r-0 border-[#b7b7e5] px-4 py-2 text-white transition-all hover:bg-[#b7b7e5] hover:text-[#252530]'
			>
				{translate("download", "Download my CV")}
			</a>
			<button
				onClick={changeCVFile}
				className='pointer-events-auto mb-5 flex w-[75px] items-center justify-between rounded-e-full border-2 border-l-0 border-[#b7b7e5] bg-[#b7b7e5] px-3 py-2 text-[#252530] transition-all active:bg-white'
			>
				<p className='text-sm font-bold uppercase'>{lang.label}</p>
				<img
					src='./fonts/arrows-up-down-svgrepo-com.svg'
					className='ml-3 inline w-2'
				/>
			</button>
		</div>
	)
}
