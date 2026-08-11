export default function Footer() {
  return (
    <footer className="no-print border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500 sm:px-6">
        <p className="font-medium text-slate-700">청년 고용·일자리 창출·기업 지원 프로그램 안내서</p>
        <p className="mt-1">
          본 안내서는 2026년 8월 기준 공개된 정부·경기도 공고문 및 보도자료를 바탕으로 제작되었습니다.
          정책은 예산 사정과 개정에 따라 수시로 변경될 수 있으므로, 신청 전 반드시 각 프로그램의
          출처 링크에서 최신 공고문을 확인하시기 바랍니다.
        </p>
        <p className="mt-3">공통 문의: 고용노동부 고객상담센터 1350 · 경기도미래세대재단 1877-2046</p>
      </div>
    </footer>
  )
}
