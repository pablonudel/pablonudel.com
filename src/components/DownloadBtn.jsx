import { useState } from "react"
import { userLang, translate, cvLang } from "../utils/lang"

export default function DownloadBtn() {
	const [lang, setLang] = useState(() =>
		cvLang[userLang] ? cvLang[userLang] : cvLang.en
	)
	const changeCVFile = () => {
		const k = Object.keys(cvLang)
		const i = k.indexOf(lang.label)
		const l = k.length - 1

		const nextLang = k[i + 1]
		i < l ? setLang(cvLang[nextLang]) : setLang(cvLang.en)
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
				className='pointer-events-auto mb-5 flex w-[65px] items-center justify-between rounded-e-full border-2 border-l-0 border-[#b7b7e5] bg-[#b7b7e5] px-3 py-2 text-[#252530] transition-all active:border-white active:bg-white'
			>
				<span className=' text-sm font-bold uppercase'>{lang.label}</span>
				<img
					src='./fonts/arrows-up-down-svgrepo-com.svg'
					className='ml-2 inline w-2'
				/>
			</button>
		</div>
	)
}
