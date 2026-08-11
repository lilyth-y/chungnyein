import { portals } from '../data/portals'
import { ExternalLink, HelpCircle, ListChecks } from 'lucide-react'

const STEPS = [
  {
    title: '1. 나에게 맞는 카테고리 찾기',
    desc: '청년 개인 취업 준비 중이라면 "청년 고용·취업 지원", 신규 채용을 검토 중인 기업이라면 "일자리 창출"과 "기업 지원" 카테고리를 함께 확인하세요.',
  },
  {
    title: '2. 지원대상·자격요건 확인',
    desc: '연령, 거주지, 소득·재산, 기업 규모 등 세부 요건은 프로그램마다 다릅니다. 상세 페이지의 "지원 대상"을 꼼꼼히 확인하세요.',
  },
  {
    title: '3. 공고 시기와 마감일 체크',
    desc: '대부분의 경기도 사업은 연 1~2회 한정 모집이며 예산 소진 시 조기 마감됩니다. "신청 기간"을 확인하고 공고문을 미리 즐겨찾기 해두세요.',
  },
  {
    title: '4. 신청 포털 회원가입 및 서류 준비',
    desc: '고용24, K-Startup, 잡아바 어플라이 등 프로그램별 신청 포털에 미리 회원가입하고, "필요 서류" 목록을 참고해 서류를 준비하세요.',
  },
  {
    title: '5. 신청 후 진행 상황 관리',
    desc: '접수 후에는 문자·이메일 안내를 놓치지 않도록 확인하고, 회차별 서류 제출이 필요한 사업(예: 청년일자리도약장려금)은 마감일을 별도로 기록해두세요.',
  },
]

const FAQ = [
  {
    q: '여러 프로그램에 동시에 지원할 수 있나요?',
    a: '가능한 경우가 많지만, 국민취업지원제도처럼 유사한 정부·지자체 지원금을 이미 받고 있으면 참여가 제한되는 사업도 있습니다. 각 프로그램의 "지원 대상"에 있는 제외 요건을 꼭 확인하세요.',
  },
  {
    q: '경기도에 거주하지 않으면 경기도 사업에 신청할 수 없나요?',
    a: '경기도 사업은 대부분 공고일 기준 경기도 주민등록을 요구합니다. 다만 지역주도형 청년일자리사업처럼 채용 후 일정 기간 내 전입하면 인정되는 경우도 있으니 공고문을 확인하세요.',
  },
  {
    q: '기업이 여러 채용지원금을 동시에 받을 수 있나요?',
    a: '동일한 채용 건에 대해 성격이 유사한 두 가지 인건비 지원사업을 중복으로 받는 것은 대부분 제한됩니다. 세액공제(통합고용세액공제)는 인건비 직접 지원사업과는 별도로 병행 가능한 경우가 많지만, 최종 판단은 관할 고용센터·세무서 확인이 필요합니다.',
  },
  {
    q: '공고문에서 바뀐 내용이 이 책자와 다르면 어떻게 하나요?',
    a: '이 책자는 참고용 요약이며, 법적 효력이 있는 것은 각 기관의 공식 공고문입니다. 항상 프로그램 상세 페이지의 "출처" 링크에서 최신 공고문을 우선 확인하세요.',
  },
]

export default function Guide() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">신청 가이드</h1>
      <p className="mt-1 text-sm text-slate-500">
        프로그램을 처음 찾아보는 분들을 위한 공통 신청 절차와 주요 포털, 자주 묻는 질문을 정리했습니다.
      </p>

      <section className="mt-8">
        <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
          <ListChecks size={18} className="text-indigo-600" /> 신청 5단계
        </h2>
        <div className="mt-4 space-y-4">
          {STEPS.map((step) => (
            <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold text-slate-900">자주 쓰는 신청 포털</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {portals.map((portal) => (
            <a
              key={portal.name}
              href={portal.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900">{portal.name}</h3>
                <ExternalLink size={15} className="text-slate-400 group-hover:text-indigo-600" />
              </div>
              <p className="text-sm leading-relaxed text-slate-600">{portal.desc}</p>
              <p className="mt-1 text-xs text-slate-400">주요 활용: {portal.usedFor}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
          <HelpCircle size={18} className="text-indigo-600" /> 자주 묻는 질문
        </h2>
        <div className="mt-4 space-y-3">
          {FAQ.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-sm"
            >
              <summary className="cursor-pointer list-none font-semibold text-slate-900">
                {item.q}
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}
