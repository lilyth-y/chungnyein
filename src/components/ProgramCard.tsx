import { Link } from 'react-router-dom'
import type { Program } from '../data/types'
import { APPLICANT_LABEL } from '../data/types'
import CategoryBadge from './CategoryBadge'
import RegionBadge from './RegionBadge'
import { ArrowRight, Building2, User, Users } from 'lucide-react'

const APPLICANT_ICON = {
  individual: User,
  company: Building2,
  both: Users,
}

export default function ProgramCard({ program }: { program: Program }) {
  const Icon = APPLICANT_ICON[program.applicant]

  return (
    <Link
      to={`/programs/${program.id}`}
      className="group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex flex-wrap items-center gap-2">
        <CategoryBadge category={program.category} />
        <RegionBadge region={program.region} />
        {program.status === 'closed' && (
          <span className="inline-flex items-center rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
            신규접수 종료
          </span>
        )}
      </div>

      <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-700">
        {program.title}
      </h3>

      <p className="line-clamp-2 text-sm leading-relaxed text-slate-600">{program.summary}</p>

      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500">
        <span className="inline-flex items-center gap-1.5">
          <Icon size={14} />
          {APPLICANT_LABEL[program.applicant]}
        </span>
        <span className="inline-flex items-center gap-1 font-medium text-indigo-600 group-hover:gap-2 transition-all">
          자세히 보기 <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  )
}
