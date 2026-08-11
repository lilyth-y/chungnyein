export type Category = 'youth' | 'jobCreation' | 'corporate'

export type Region = 'national' | 'gyeonggi'

export type Applicant = 'individual' | 'company' | 'both'

export interface SourceLink {
  label: string
  url: string
}

export interface Program {
  id: string
  title: string
  shortTitle?: string
  category: Category
  region: Region
  agency: string
  applicant: Applicant
  summary: string
  target: string
  benefit: string
  period: string
  howToApply: string[]
  documents?: string[]
  contact?: string
  sources: SourceLink[]
  tags: string[]
  note?: string
  status?: 'open' | 'closed' | 'seasonal'
}

export const CATEGORY_LABEL: Record<Category, string> = {
  youth: '청년 고용·취업 지원',
  jobCreation: '일자리 창출',
  corporate: '기업 지원',
}

export const CATEGORY_DESC: Record<Category, string> = {
  youth: '구직·재직 청년 개인을 위한 취업지원, 훈련, 자산형성, 생활 지원 프로그램',
  jobCreation: '기업의 신규 채용을 유도해 새로운 일자리를 만들어내는 채용연계형 지원사업',
  corporate: '기업의 고용 여력을 높이는 세제 혜택과 창업·사업화 지원 프로그램',
}

export const REGION_LABEL: Record<Region, string> = {
  national: '전국(중앙정부)',
  gyeonggi: '경기도',
}

export const APPLICANT_LABEL: Record<Applicant, string> = {
  individual: '청년(개인) 신청',
  company: '기업 신청',
  both: '기업+청년 각각 신청',
}
