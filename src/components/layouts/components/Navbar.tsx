import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { matchPath, useLocation, useNavigate } from 'react-router-dom'

const MENU = [
  { label: 'Home', path: '/' },
  { label: 'Chair & Committee', path: '/chair-committee' },
  { label: 'Call For Papers', path: '/call-for-papers' },
  { label: 'Paper Submission', path: '/paper-submission' },
  { label: 'Keynote Session', path: '/keynote-session' },
  { label: 'Hotels', path: '/hotels' },
  { label: 'Fieldtrip', url: 'https://www.ak-rt.org/da_nang' },
  { label: 'Agenda', path: '/agenda' },
]

export const Navbar = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const listenScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', listenScroll)
    return () => window.removeEventListener('scroll', listenScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled ? 'bg-black/60 backdrop-blur-xl' : 'bg-transparent backdrop-blur-xs'
      }`}
    >
      <header className="container text-white mx-auto px-6 py-2 grid grid-cols-2 xl:grid-cols-6 items-center">
        <div className="text-4xl font-bold tracking-wider col-span-1">
          <img src="/assets/logo2.png" alt="" className="max-w-14" />
        </div>
        <div className="flex items-center gap-8 justify-end col-span-1 xl:col-span-5">
          <nav className="hidden xl:flex gap-8 text-sm font-medium uppercase tracking-wide">
            <a href="#" className="hover:text-gray-300">
              Sponsors
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact Us
            </a>
            <a href="#" className="hover:text-gray-300">
              Venue/Travel
            </a>
            <a href="#" className="hover:text-gray-300">
              Important Dates
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:flex items-center">
              <Input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-white/30 text-white placeholder:text-gray-300 lg:min-w-72 w-full h-8 focus-visible:ring-0"
              />
              <Search className="absolute right-2 w-4 h-4 text-gray-300" />
            </div>
            <Button
              variant={'danger'}
              className="font-bold rounded-sm px-6 text-sm h-8"
              onClick={() => navigate('/call-for-papers')}
            >
              Registration
            </Button>
          </div>
        </div>
      </header>

      <div className="bg-red-600/90 text-white scrollbar-hide">
        <ul className="flex whitespace-nowrap items-center gap-x-8 md:gap-x-10 container mx-auto px-4 text-xs md:text-sm">
          {MENU.map((item) => {
            const isActive = item.path && matchPath(item.path, pathname) !== null
            return (
              <li key={item.path}>
                <div
                  onClick={() =>
                    item.url ? window.open(item.url, '_blank') : navigate(item.path || '/')
                  }
                  className={`px-4 py-2 cursor-pointer font-bold transition ${
                    isActive ? 'bg-white text-red-600' : 'hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="hidden md:block bg-gray-300/80 py-1">
        <div className="container mx-auto flex flex-wrap gap-x-8 px-4 text-white text-sm">
          {['Quick Access', 'Speaker Biographies', 'Past Conferences', 'Special Issues', 'FAQ'].map(
            (item) => (
              <span key={item} className="cursor-pointer hover:underline font-semibold">
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </nav>
  )
}
