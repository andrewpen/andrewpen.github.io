import React from 'react'
import Link from 'next/link'

const links = [
    { href: 'https://google.com', label: 'link 1' },
    { href: 'https://google.com', label: 'link 2' },
].map(link => ({
    
    key: `nav-link-${link.href}-${link.label}`,
}))

const Nav = () => (
    <nav>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            {links.map(({ key, href, label }) => (
                <li key={key}>
                    <a href={href}>{label}</a>
                </li>
            ))}
        </ul>

        <style jsx>{`
        :global(body) {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
              Helvetica, sans-serif;
          }
        `}</style>
    </nav>
)

export default Nav