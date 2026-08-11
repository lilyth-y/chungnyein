import { Link } from 'react-router-dom'
import { programs } from '../data/programs'
import { CATEGORY_DESC, CATEGORY_LABEL, type Category } from '../data/types'
import ProgramCard from '../components/ProgramCard'
import { ArrowRight, Briefcase, Building2, Rocket } from 'lucide-react'

const CATEGORY_ICON: Record<Category, typeof Briefcase> = {
  youth: Briefcase,
  jobCreation: Rocket,
  corporate: Building2,
}

const CATEGORY_ORDER: Category[] = ['youth', 'jobCreation', 'corporate']

export default function Home() {
  const nationalCount = programs.filter((p) => p.region === 'national').length
  const gyeonggiCount = programs.filter((p) => p.region === 'gyeonggi').length
  const featured = programs.slice(0, 3)

  return (
    <div>
      <section className="border-b border-slate-200 bg-gradient-to-b from-indigo-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-600">
            2026년 청년·기업 지원사업 안내서
          </p>
          <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            청년 고용, 일자리 창출, 기업 지원 프로그램을
            <br />
            한곳에서 찾고 신청 방법까지 확인하세요
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            전국 단위 고용노동부·중소벤처기업부 사업부터 경기도의 청년·기업 지원사업까지,
            지원대상·지원내용·신청방법·출처를 한 페이지씩 정리했습니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
            >
              전체 프로그램 보기 <ArrowRight size={16} />
            </Link>
            <Link
              to="/guide"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              신청 가이드 보기
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat label="전체 프로그램" value={`${programs.length}개`} />
            <Stat label="전국(중앙정부)" value={`${nationalCount}개`} />
            <Stat label="경기도" value={`${gyeonggiCount}개`} />
            <Stat label="주요 신청 포털" value="7곳" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-xl font-bold text-slate-900">카테고리별로 살펴보기</h2>
        <p className="mt-1 text-sm text-slate-500">
          이 책자는 청년 개인, 일자리 창출, 기업 지원 세 가지 관점으로 프로그램을 나눠 안내합니다.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {CATEGORY_ORDER.map((category) => {
            const Icon = CATEGORY_ICON[category]
            const count = programs.filter((p) => p.category === category).length
            return (
              <Link
                key={category}
                to={`/programs?category=${category}`}
                className="group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon size={22} />
                </span>
                <h3 className="text-lg font-bold text-slate-900">{CATEGORY_LABEL[category]}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{CATEGORY_DESC[category]}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-indigo-600 group-hover:gap-2 transition-all">
                  {count}개 프로그램 보기 <ArrowRight size={14} />
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-bold text-slate-900">이런 프로그램부터 확인해보세요</h2>
          <Link to="/programs" className="text-sm font-medium text-indigo-600 hover:underline">
            전체 보기
          </Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </section>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-indigo-100 bg-white/70 p-4">
      <p className="text-2xl font-bold text-indigo-700">{value}</p>
      <p className="mt-0.5 text-xs text-slate-500">{label}</p>
    </div>
  )
}
