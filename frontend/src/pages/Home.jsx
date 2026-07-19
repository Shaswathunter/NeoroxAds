import { useMemo, useState } from 'react'
import Hero from '../components/Hero.jsx'
import GamesSection from '../components/GamesSection.jsx'
import About from '../components/About.jsx'
import games from '../data/games.js'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')

const resultCount = 0;
  return (
    <>
      <Hero searchTerm={searchTerm} onSearchChange={setSearchTerm} resultCount={resultCount} />
      <GamesSection searchTerm={searchTerm} />
      <About />
    </>
  )
}
