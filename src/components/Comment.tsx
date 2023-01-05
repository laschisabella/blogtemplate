import { ThumbsUp, Trash } from 'phosphor-react'
import style from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
	content: string,
	OnDeleteComment: (commentToDelete: string) => void
}

export function Comment({ content, OnDeleteComment }: CommentProps){

	const [likeCount, setLikeCount] = useState(0)

	function selectDeletedComment() {
		OnDeleteComment(content)
	}

	function handleLikeComment() {
		setLikeCount((state) => {
			return state + 1
		})
	}

	return(
		<div className={style.comment}>
			<Avatar margin={false} alt="teste" src="https://github.com/isabella-laschi.png" />
			<div className={style.commentBox}>
				<div className={style.commentContent}>
					<header>
						<strong className={style.author}>
							Isabella Laschi
						</strong>
						<button onMouseDown={selectDeletedComment} title='Deletar comentário'>
							<Trash size={25}/>
						</button>
					</header>
					<p>{content}</p>	
				</div>
				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp />
						Aplaudir <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	)
}