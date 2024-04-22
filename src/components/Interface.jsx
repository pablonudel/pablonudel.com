import "../index.css"
import { SocialIcon } from "react-social-icons"
import Roles from "./Roles"
import { translate } from "../utils/lang"
import DownloadBtn from "./DownloadBtn"

export default function Interface() {
	return (
		<div className=' pointer-events-none fixed z-10 flex h-dvh w-dvw flex-col justify-between gap-y-20 p-5 text-center md:p-10 xl:justify-center xl:p-24 xl:text-left'>
			<div>
				<p className='mb-3 font-sans text-2xl font-light text-[#b7b7e5] md:ml-[2px] md:text-3xl'>
					{translate("hi", "Hi! I'm")}
				</p>
				<p className='text-4xl font-light text-white md:text-5xl xl:text-6xl'>
					Pablo Nudel
				</p>
				<Roles className='flex justify-center xl:justify-start' />
			</div>
			<div>
				<p className='mb-10 italic text-white'>
					{translate("comingSoon", "New website coming soon!")}
				</p>
				<DownloadBtn />
				<div className='pointer-events-auto flex justify-center gap-x-3 xl:justify-start '>
					<SocialIcon
						url='https://www.linkedin.com/in/pablonudel/'
						target='_blank'
						bgColor='currentColor'
						fgColor='transparent'
						style={{ height: 30, width: 30 }}
						className='sicons'
					/>
					<SocialIcon
						url='https://github.com/pablonudel'
						target='_blank'
						bgColor='currentColor'
						fgColor='transparent'
						style={{ height: 30, width: 30 }}
						className='sicons'
					/>
					<SocialIcon
						network='email'
						href='mailto:pablonudel@gmail.com'
						target='_blank'
						bgColor='currentColor'
						fgColor='transparent'
						style={{ height: 30, width: 30 }}
						className='sicons'
					/>
				</div>
			</div>
		</div>
	)
}
