import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'

const notesDirectory = path.join(process.cwd(), 'content')

export const getNoteBySlug = async slug => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(notesDirectory, `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })
  const { data, content } = matter(fileContent)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight
      ]
    }
  })
  const readTime = readingTime(content).text
  const note = {
    meta: { ...data, slug: realSlug, readTime },
    source: mdxSource
  }
  return note
}

export const getNoteMetaBySlug = slug => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(notesDirectory, `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })
  const { data, content } = matter(fileContent)
  const readTime = readingTime(content).text
  const meta = {
    ...data,
    slug: realSlug,
    readTime
  }
  return meta
}

export const getAllNotesMetaData = () => {
  const files = fs.readdirSync(notesDirectory)
  const notes = files
    .map(file => getNoteMetaBySlug(file))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
  return notes
}

export const getAllSlugs = () => {
  const files = fs.readdirSync(notesDirectory)
  const slugs = files.map(file => file.replace(/\.mdx$/, ''))
  return slugs
}
