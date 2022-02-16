import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-emerald-400 p-4 text-white">
      <nav className="mx-auto max-w-2xl px-4">
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
