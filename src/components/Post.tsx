import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import style from './Post.module.css'

interface Content {
	type: 'paragraph' | 'link',
	content: string
}

interface PostProps {
	author: {
		name: string,
		role: string,
		avatarUrl: string
	},

	publishedAt: Date,
	content: Content[]
}

export function Post({ author, content, publishedAt }:PostProps){

	// estado: variaveis que serão monitoradas (caso mudarem)
	// lado esquerdo: desestruturação de retorno de useState
	// lado direito: valor default
	const [comments, setComments] = useState([
		'Post bacana'
	])

	const [newCommentText, setNewCommentText] = useState('')

	function newCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity('')
		setNewCommentText(event.target.value)
	}

	function createNewComment(event: FormEvent) {
		event.preventDefault()

		// setComments: passar novo valor para array comments
		// ...comments: spread operator -> copia valores que já existem
		setComments([...comments, newCommentText])
		setNewCommentText('')
	}

	// formatar datas: biblioteca date-fns
	const publishedDateFormatted = format(publishedAt, "d 'de' LLLL ', às' HH'h'mm", {
		locale: ptBR,
	})

	const publishedDateRelative = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true
	})

	function deleteComment(commentToDelete: string) {
		const commentsWithoutDeletedOne = comments.filter(comment => {
			return comment != commentToDelete;
		})

		setComments(commentsWithoutDeletedOne)
	}

	function newCommentInvalid (event: InvalidEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity('Preencha o campo')
	}

	return(
		<article className={style.post}>
			<header>
				<div className={style.author}>
					<Avatar src={author.avatarUrl} margin={false}/>
					<div className={style.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>
				<time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
					{publishedDateRelative}
				</time>
			</header>
			<div className={style.content}>
				{content.map(line =>{
					let keyParagraph = Math.random()

					if (line.type == 'paragraph') {
						return <p key={keyParagraph}>{line.content}</p>
					} else if (line.type == 'link') {
						return <p key={keyParagraph}><a href={'#'}>{line.content}</a></p>
					}
				})}
			</div>

			<form onSubmit={createNewComment} className={style.commentForm}>
				<strong>Deixe seu feedback!</strong>
				<textarea
					placeholder='Deixe um comentário'
					value={newCommentText}
					onChange={newCommentChange}
					onInvalid={newCommentInvalid}
					required	
				/>
				<footer>
					<button 
						className={style.buttonPublicar} 
						type="submit"
						disabled={newCommentText.length == 0}
					>
						Publicar
					</button>
				</footer>
				
			</form>
			<footer className={style.commentList}>
				{comments.map(comment =>{
					return (
						<Comment 
							key={Math.random()} 
							content={comment} 
							OnDeleteComment={deleteComment}
						/>
					)
				})}
			</footer>
		</article>
	)
}

