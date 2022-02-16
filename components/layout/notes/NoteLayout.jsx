import Head from 'next/head'
import NoteBody from '../../notes/NoteBody'
import NoteHeader from '../../notes/NoteHeader'

const NoteLayout = ({ meta, source }) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.excerpt} />
        <meta property="og:image" content={meta.ogImage} />
      </Head>
      <NoteHeader meta={meta} />
      <NoteBody source={source} />
    </>
  )
}

export default NoteLayout
