/**
 * 서류명(또는 서류 설명 문구)에 특정 키워드가 포함되면, 그 서류를 온라인으로
 * 즉시 발급/신고할 수 있는 정부 포털 링크를 연결해줍니다.
 *
 * 주의: 아래 목록은 "정부 기관에서 온라인 발급이 가능한 증명서/신고서"만 다룹니다.
 * 임금대장, 통장사본, 사업계획서, 채용공고문처럼 신청자가 직접 작성/보유해야 하는
 * 서류는 발급 링크가 없는 게 정상입니다 (연결하면 오히려 오해를 줄 수 있어 제외).
 *
 * URL은 2026년 8월 웹 조사로 확인한 값이며, 정부 포털 개편 시 바뀔 수 있으니
 * 주기적으로(주간 업데이트 워크플로에서) 재확인이 필요합니다.
 */
export interface DocumentLink {
  keywords: string[]
  agency: string
  url: string
  note?: string
}

export const DOCUMENT_LINKS: DocumentLink[] = [
  {
    keywords: ['주민등록등본', '주민등록초본', '주민등록표', '주민등록 관련 서류'],
    agency: '정부24 (주민등록표 등본·초본 발급)',
    url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000015&HighCtgCD=A01010&tp_seq=01',
    note: '인터넷 발급은 무료이며 본인만 신청 가능합니다(대리인은 방문 발급).',
  },
  {
    keywords: ['가족관계증명서'],
    agency: '정부24 (가족관계증명서 발급)',
    url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000004&HighCtgCD=A01008&tp_seq=01',
  },
  {
    keywords: ['사업자등록증', '사업자등록증명'],
    agency: '정부24 (사업자등록증명 발급)',
    url: 'https://www.gov.kr/main?CappBizCD=12100000016&HighCtgCD=A09002&a=AA020InfoCappViewApp',
    note: '동일한 증명서를 국세청 홈택스(민원증명 > 즉시발급 증명)에서도 발급할 수 있습니다.',
  },
  {
    keywords: ['소득금액증명', '소득확인증명', '종합소득', '부가가치세과세표준증명', '납세증명'],
    agency: '국세청 홈택스 (민원증명 > 즉시발급 증명)',
    url: 'https://www.hometax.go.kr',
  },
  {
    keywords: ['세액공제신청서', '세액공제'],
    agency: '국세청 홈택스',
    url: 'https://www.hometax.go.kr',
  },
  {
    keywords: ['건강보험자격득실확인서', '국민연금 가입', '고용보험 가입확인', '4대보험'],
    agency: '4대사회보험 정보연계센터',
    url: 'https://www.4insure.or.kr',
  },
  {
    keywords: ['두루누리'],
    agency: '4대사회보험 정보연계센터 (두루누리 신청)',
    url: 'https://www.4insure.or.kr',
  },
  {
    keywords: ['보험관계성립신고서', '피보험자격취득신고서', '근로내용확인신고서', '보험가입증명원'],
    agency: '근로복지공단 고용·산재보험 토탈서비스',
    url: 'https://total.comwel.or.kr',
    note: '4대사회보험 정보연계센터(4insure.or.kr)에서도 동일 서식을 접수할 수 있습니다.',
  },
]

/** 서류 설명 문구에 매칭되는 첫 번째 발급 링크를 찾습니다. 없으면 undefined. */
export function findDocumentLink(documentText: string): DocumentLink | undefined {
  return DOCUMENT_LINKS.find((link) => link.keywords.some((kw) => documentText.includes(kw)))
}
