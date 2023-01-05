import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'
import style from './Sidebar.module.css'

export function Sidebar() {
	return (
		<aside className={style.sidebar}>
			<img
				className={style.cover} 
				src="https://images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
			/>
			<div className={style.profile}>
				<Avatar margin={true} src="https://github.com/isabella-laschi.png" />
				<strong>Isabella Laschi</strong>
				<span>fullstack js developer</span>
			</div>
			<footer>
				<a href="#">
					<PencilLine size={20} /> 
					Editar perfil
				</a>
			</footer>

		</aside>
	)
}