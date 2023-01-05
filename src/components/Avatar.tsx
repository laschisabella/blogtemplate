import { ImgHTMLAttributes } from 'react'
import style from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
	margin: boolean
}

export function Avatar({margin, ...props}:AvatarProps){
	return(
		<img 
			className={margin ? style.avatarMargin : style.avatar} 
			{...props}
		/>
	)
}


