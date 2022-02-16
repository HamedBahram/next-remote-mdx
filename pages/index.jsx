import Notes from '@components/notes/Notes'
import { getAllNotesMetaData } from '@lib/notes'

const Home = ({ notes }) => {
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">Notes</h1>
      <Notes notes={notes} />
    </>
  )
}

export async function getStaticProps() {
  const notes = getAllNotesMetaData()

  return {
    props: {
      notes
    }
  }
}

export default Home
