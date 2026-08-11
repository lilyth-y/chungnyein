import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { programs } from '../data/programs'
import type { Category, Region } from '../data/types'
import { CATEGORY_LABEL, REGION_LABEL } from '../data/types'
import ProgramCard from '../components/ProgramCard'
import { Search } from 'lucide-react'

const CATEGORY_OPTIONS: Category[] = ['youth', 'jobCreation', 'corporate']
const REGION_OPTIONS: Region[] = ['national', 'gyeonggi']

export default function ProgramList() {
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState('')

  const category = params.get('category') as Category | null
  const region = params.get('region') as Region | null

  const filtered = useMemo(() => {
    return programs.filter((p) => {
      if (category && p.category !== category) return false
      if (region && p.region !== region) return false
      if (query.trim()) {
        const haystack = `${p.title} ${p.summary} ${p.tags.join(' ')} ${p.agency}`.toLowerCase()
        if (!haystack.includes(query.trim().toLowerCase())) return false
      }
      return true
    })
  }, [category, region, query])

  function toggleParam(key: 'category' | 'region', value: string) {
    const next = new URLSearchParams(params)
    if (next.get(key) === value) {
      next.delete(key)
    } else {
      next.set(key, value)
    }
    setParams(next, { replace: true })
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">전체 프로그램</h1>
      <p className="mt-1 text-sm text-slate-500">
        카테고리·지역으로 필터링하거나 프로그램명, 키워드로 검색해보세요.
      </p>

      <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="프로그램명, 기관, 키워드로 검색 (예: 세액공제, 창업, 면접수당)"
            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-500">카테고리</span>
          {CATEGORY_OPTIONS.map((c) => (
            <FilterChip
              key={c}
              active={category === c}
              onClick={() => toggleParam('category', c)}
              label={CATEGORY_LABEL[c]}
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-500">지역</span>
          {REGION_OPTIONS.map((r) => (
            <FilterChip
              key={r}
              active={region === r}
              onClick={() => toggleParam('region', r)}
              label={REGION_LABEL[r]}
            />
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-slate-500">총 {filtered.length}개 프로그램</p>

      {filtered.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
          조건에 맞는 프로그램이 없습니다. 필터를 조정해보세요.
        </div>
      ) : (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      )}
    </div>
  )
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean
  onClick: () => void
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
        active
          ? 'bg-indigo-600 text-white'
          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
      }`}
    >
      {label}
    </button>
  )
}
