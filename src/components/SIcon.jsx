import "../index.css"
import { SocialIcon } from "react-social-icons"

export default function SIcon({ url, network, href }) {
	return (
		<SocialIcon
			url={url}
			network={network}
			href={href}
			target='_blank'
			bgColor='currentColor'
			fgColor='transparent'
			style={{ height: 33, width: 33 }}
			className='sicons'
		/>
	)
}
