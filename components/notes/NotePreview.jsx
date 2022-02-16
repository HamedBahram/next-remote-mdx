import Link from 'next/link'
import React from 'react'

const NotePreview = ({ meta }) => {
  const { title, slug, excerpt, author, date, tags, readTime } = meta

  const formattedDate = new Date(date).toLocaleDateString('en-CA', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })

  return (
    <li className="flex-1 rounded-md p-8 shadow-md">
      <Link href={`/notes/${slug}`}>
        <a>
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="text-sm font-light text-zinc-600">{excerpt}</p>
          <time className="mb-4 block text-sm">{readTime}</time>
          <p className="italic">{author.name}</p>
          <time className="text-sm text-blue-400">{formattedDate}</time>
          <ul className="mt-4 flex gap-2 text-xs">
            {tags.map(tag => (
              <li
                key={tag}
                className="rounded bg-zinc-200 px-2 py-0.5 text-blue-400"
              >
                {tag}
              </li>
            ))}
          </ul>
        </a>
      </Link>
    </li>
  )
}

export default NotePreview
