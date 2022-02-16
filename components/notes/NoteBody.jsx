import { MDXRemote } from 'next-mdx-remote'
import 'highlight.js/styles/atom-one-dark.css'
import MDXComponents from '@components/mdx/MDXComponents'

const NoteBody = ({ source }) => {
  return (
    <article className="prose max-w-none prose-a:no-underline prose-pre:!p-0 dark:prose-invert">
      <MDXRemote {...source} components={MDXComponents} />
    </article>
  )
}

export default NoteBody
