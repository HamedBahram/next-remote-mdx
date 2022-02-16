import NoteTitle from './NoteTitle'
import NoteSubtitle from './NoteSubtitle'
import CoverImage from './CoverImage'

const NoteHeader = ({ meta }) => {
  const { title, coverImage, author, date, readTime } = meta

  return (
    <>
      <NoteTitle>{title}</NoteTitle>
      <NoteSubtitle author={author} date={date} readTime={readTime} />
      {coverImage && (
        <CoverImage title={title} src={coverImage} width={600} height={300} />
      )}
    </>
  )
}

export default NoteHeader
