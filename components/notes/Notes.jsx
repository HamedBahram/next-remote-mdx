import NotePreview from './NotePreview'

const Notes = ({ notes }) => {
  return (
    <ul className="flex gap-4">
      {notes.map(meta => (
        <NotePreview key={meta.slug} meta={meta} />
      ))}
    </ul>
  )
}

export default Notes
