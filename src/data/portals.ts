export interface Portal {
  name: string
  desc: string
  url: string
  usedFor: string
}

export const portals: Portal[] = [
  {
    name: '고용24',
    desc: '고용노동부가 운영하는 취업·고용 통합 플랫폼. 구직등록, 국민내일배움카드, 국민취업지원제도, 청년일자리도약장려금, 고용창출장려금 등 대부분의 중앙정부 고용 지원사업을 여기서 신청합니다.',
    url: 'https://www.work24.go.kr',
    usedFor: '청년일자리도약장려금 · 국민취업지원제도 · K-디지털 트레이닝 · 고용창출장려금',
  },
  {
    name: 'K-Startup(케이스타트업)',
    desc: '중소벤처기업부·창업진흥원이 운영하는 창업지원 통합 플랫폼. 예비창업패키지 등 정부 창업지원사업 공고 확인과 신청을 한곳에서 처리합니다.',
    url: 'https://www.k-startup.go.kr',
    usedFor: '예비창업패키지 · 초기창업패키지 · 창업도약패키지',
  },
  {
    name: '잡아바 어플라이',
    desc: '경기도 일자리 정책 전용 신청 플랫폼. 경기도일자리재단·경기도미래세대재단이 운영하는 대부분의 청년·기업 지원사업을 여기서 신청합니다.',
    url: 'https://apply.jobaba.net',
    usedFor: '경기청년 일자리 매치업 플러스 · 맞춤형 채용지원 서비스 · 청년 면접수당',
  },
  {
    name: '기업마당(bizinfo)',
    desc: '중소기업 지원사업 정보를 한곳에 모아 보여주는 통합 포털. 각 사업의 공고문과 신청 사이트 링크를 확인할 수 있습니다.',
    url: 'https://www.bizinfo.go.kr',
    usedFor: '정부 지원사업 공고문 열람',
  },
  {
    name: '정부24',
    desc: '정부 민원·서비스 통합 포털. 지원사업의 개요, 지원대상, 신청방법을 표준화된 형식으로 확인할 수 있습니다.',
    url: 'https://www.gov.kr',
    usedFor: '지원사업 개요 확인 · 서비스 상세 안내',
  },
  {
    name: '경기청년포털',
    desc: '경기도 청년정책을 한눈에 모아 안내하는 포털. 사업별 공고시기, 자격요건, 최신 공지사항을 확인할 수 있습니다.',
    url: 'https://youth.gg.go.kr',
    usedFor: '경기도 청년정책 공고시기 확인 · 최신 공지 확인',
  },
  {
    name: '홈택스',
    desc: '국세청이 운영하는 국세 전자신고 시스템. 통합고용세액공제 등 세제 지원은 법인세·소득세 신고 시 홈택스에서 신청합니다.',
    url: 'https://www.hometax.go.kr',
    usedFor: '통합고용세액공제 등 세액공제 신청',
  },
]
