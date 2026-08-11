import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProgramById } from '../data/programs'
import { APPLICANT_LABEL } from '../data/types'
import { findDocumentLink } from '../data/documentLinks'
import CategoryBadge from '../components/CategoryBadge'
import RegionBadge from '../components/RegionBadge'
import {
  AlertTriangle,
  ArrowLeft,
  Building2,
  CalendarClock,
  ExternalLink,
  FileText,
  Phone,
  Printer,
  Target,
  Wallet,
} from 'lucide-react'

export default function ProgramDetail() {
  const { id } = useParams<{ id: string }>()
  const program = id ? getProgramById(id) : undefined

  if (!program) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <p className="text-slate-600">해당 프로그램을 찾을 수 없습니다.</p>
        <Link to="/programs" className="mt-4 inline-block text-indigo-600 hover:underline">
          전체 프로그램 목록으로 돌아가기
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link
        to="/programs"
        className="no-print inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-800"
      >
        <ArrowLeft size={15} /> 전체 프로그램
      </Link>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <CategoryBadge category={program.category} />
        <RegionBadge region={program.region} />
        {program.status === 'closed' && (
          <span className="inline-flex items-center rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
            신규접수 종료
          </span>
        )}
      </div>

      <h1 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">{program.title}</h1>
      <p className="mt-1 text-sm text-slate-500">
        주관: {program.agency} · {APPLICANT_LABEL[program.applicant]}
      </p>
      <p className="mt-4 text-base leading-relaxed text-slate-700">{program.summary}</p>

      {program.note && (
        <div className="mt-5 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <AlertTriangle size={18} className="mt-0.5 shrink-0" />
          <p>{program.note}</p>
        </div>
      )}

      <div className="mt-8 space-y-6">
        <Section icon={Target} title="지원 대상">
          <p className="whitespace-pre-line text-sm leading-relaxed text-slate-700">{program.target}</p>
        </Section>

        <Section icon={Wallet} title="지원 내용">
          <p className="whitespace-pre-line text-sm leading-relaxed text-slate-700">{program.benefit}</p>
        </Section>

        <Section icon={CalendarClock} title="신청 기간">
          <p className="text-sm leading-relaxed text-slate-700">{program.period}</p>
        </Section>

        <Section icon={Building2} title="신청 방법">
          <ol className="space-y-3">
            {program.howToApply.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-slate-700">{step}</span>
              </li>
            ))}
          </ol>
        </Section>

        {program.documents && program.documents.length > 0 && (
          <Section icon={FileText} title="필요 서류">
            <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
              {program.documents.map((doc) => {
                const link = findDocumentLink(doc)
                return (
                  <li key={doc} className="flex flex-col gap-1 border-b border-dashed border-slate-100 pb-2 last:border-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                    <span className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                      <span>{doc}</span>
                    </span>
                    {link && (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex shrink-0 items-center gap-1 self-start rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700 hover:bg-indigo-100 sm:self-auto"
                        title={link.note}
                      >
                        <ExternalLink size={12} />
                        {link.agency}에서 온라인 발급
                      </a>
                    )}
                  </li>
                )
              })}
            </ul>
            <p className="mt-3 text-xs leading-relaxed text-slate-400">
              위 바로가기가 없는 서류(사업계획서, 임금대장, 통장사본 등)는 신청자가 직접 작성·준비해야 하는
              서류입니다. 온라인 발급 서류도 포털 개편에 따라 화면 구성이 바뀔 수 있습니다.
            </p>
          </Section>
        )}

        {program.contact && (
          <Section icon={Phone} title="문의처">
            <p className="text-sm leading-relaxed text-slate-700">{program.contact}</p>
          </Section>
        )}
      </div>

      <div className="mt-8 flex flex-wrap gap-2 no-print">
        {program.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-500"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-sm font-bold text-slate-900">출처 및 신청 사이트</h2>
        <ul className="mt-3 space-y-2">
          {program.sources.map((source) => (
            <li key={source.url}>
              <a
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-indigo-600 hover:underline"
              >
                <ExternalLink size={14} />
                {source.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-relaxed text-slate-400">
          정책 정보는 예산·개정 상황에 따라 변경될 수 있습니다. 신청 전 반드시 위 출처 링크에서 최신 공고문을
          확인하세요.
        </p>
      </div>

      <button
        type="button"
        onClick={() => window.print()}
        className="no-print mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
      >
        <Printer size={15} /> 이 페이지 인쇄 / PDF로 저장
      </button>
    </div>
  )
}

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Target
  title: string
  children: ReactNode
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5">
      <h2 className="flex items-center gap-2 text-sm font-bold text-slate-900">
        <Icon size={16} className="text-indigo-600" />
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  )
}
