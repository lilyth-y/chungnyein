import { Link, NavLink } from 'react-router-dom'
import { BookOpenText } from 'lucide-react'

const NAV = [
  { to: '/', label: '홈' },
  { to: '/programs', label: '전체 프로그램' },
  { to: '/guide', label: '신청 가이드' },
]

export default function Header() {
  return (
    <header className="no-print sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2 text-slate-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <BookOpenText size={18} />
          </span>
          <span className="text-base font-bold leading-tight sm:text-lg">
            청년고용·일자리 지원 안내서
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
