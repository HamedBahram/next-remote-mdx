import Avatar from '../utils/Avatar'
import NoteMeta from './NoteMeta'

const NoteSubtitle = ({ author, date, readTime }) => {
  return (
    <div className="mb-6 flex items-center gap-2 text-sm font-light text-zinc-400">
      <Avatar name={author.name} src={author.picture} />
      <NoteMeta author={author} date={date} readTime={readTime} />
    </div>
  )
}

export default NoteSubtitle
