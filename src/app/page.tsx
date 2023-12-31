import Header from './components/Header'
import Body from './components/Body'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll bg-gradiant-to-b from-slate-800 to-slate-600">
    <Header/>
    <Body/>
    <Experience/>
    <Skills/>
    <Contact/>
    </main>
  )
}
