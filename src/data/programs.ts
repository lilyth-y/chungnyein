import type { Program } from './types'

/**
 * 2026년 8월 기준 웹 조사 내용을 바탕으로 정리했습니다.
 * 정부/지자체 정책은 예산 상황에 따라 수시로 변경되므로,
 * 신청 전 반드시 각 프로그램의 "출처" 링크에서 최신 공고문을 확인하세요.
 */
export const programs: Program[] = [
  {
    id: 'youth-leap-allowance',
    title: '청년일자리도약장려금',
    category: 'jobCreation',
    region: 'national',
    agency: '고용노동부',
    applicant: 'both',
    summary:
      '기업이 만 15~34세 청년을 정규직으로 채용해 6개월 이상 고용을 유지하면 기업에는 인건비를, 비수도권 취업 청년에게는 근속 인센티브를 지원하는 대표 청년고용 사업입니다.',
    target:
      '(수도권) 수도권 5인 이상 우선지원대상기업이 취업애로청년(만 15~34세)을 정규직 채용 · (비수도권) 비수도권 5인 이상 우선지원대상기업 및 산업단지 입주 중견기업이 청년을 정규직 채용',
    benefit:
      '수도권: 기업에 1년간 최대 720만 원 · 비수도권: 기업에 1년간 최대 720만 원 + 6개월 이상 재직한 청년 본인에게 2년간 최대 720만 원(지역별 480/600/720만 원 차등) 근속 인센티브',
    period: '2026.1.1 ~ 2026.12.31 채용분까지 유효 (지역별 예산 소진 시 조기 마감)',
    howToApply: [
      '기업이 청년 채용 "전"에 고용24(work24.go.kr)에서 참여신청서 제출',
      '고용센터 승인 후 2026년 내 대상 청년 정규직 채용 (예외적으로 채용일로부터 3개월 이내 사후 신청 가능)',
      '6·9·12개월 차 고용유지 확인 후 회차별로 지급 신청 (임금대장, 통장사본 등 제출)',
    ],
    documents: ['참여신청서', '지급신청서', '임금지급 증빙자료(급여대장 등)', '기업 명의 통장 사본'],
    contact: '고용노동부 고객상담센터 1350',
    sources: [
      {
        label: '고용24 - 청년일자리도약장려금 제도안내',
        url: 'https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systClId=SC00000117&systId=SI00000318',
      },
      {
        label: '정책브리핑 - 2026년 청년일자리도약장려금 한눈에 알아보기',
        url: 'https://www.korea.kr/news/policyNewsView.do?newsId=148961581',
      },
    ],
    tags: ['채용지원금', '정규직채용', '청년고용', '중소기업'],
  },
  {
    id: 'national-employment-support',
    title: '국민취업지원제도',
    category: 'youth',
    region: 'national',
    agency: '고용노동부',
    applicant: 'individual',
    summary:
      '저소득·취업취약계층에게 맞춤형 취업지원서비스와 생계안정을 위한 구직촉진수당을 함께 제공하는 한국형 실업부조 제도입니다.',
    target:
      'Ⅰ유형: 만 15~69세 중위소득 60% 이하(청년특례 15~34세는 중위소득 120% 이하, 재산 5억 이하) · Ⅱ유형: 중위소득 100% 이하 또는 만 15~34세 청년(소득 무관)',
    benefit:
      'Ⅰ유형: 구직활동 이행 시 구직촉진수당 월 50~90만 원씩 6개월 지원(부양가족 있을 시 추가) + 취업성공수당 최대 150만 원 · Ⅱ유형: 취업활동비용 지원 · 공통: 심층상담, 직업훈련·일경험·복지서비스 연계',
    period: '상시 접수',
    howToApply: [
      '고용24(work24.go.kr) 구직등록 및 제도안내 온라인 교육(1·2회차) 수강',
      '고용24 온라인 신청 또는 거주지 관할 고용센터 방문 신청',
      '약 1개월 심사 후 유형 결정 및 취업활동계획 수립(대면상담 필요)',
    ],
    contact: '고용노동부 고객상담센터 1350',
    sources: [
      {
        label: '고용24 - 국민취업지원제도 취업지원신청 소개',
        url: 'https://m.work24.go.kr/ua/z/z/1300/selectEmssRqutIntro.do',
      },
      {
        label: '정부24 - 국민취업지원제도 서비스 상세',
        url: 'https://www.gov.kr/portal/rcvfvrSvc/dtlEx/149200005007',
      },
    ],
    tags: ['구직촉진수당', '실업부조', '취업지원서비스'],
  },
  {
    id: 'k-digital-training',
    title: 'K-디지털 트레이닝(국민내일배움카드)',
    category: 'youth',
    region: 'national',
    agency: '고용노동부',
    applicant: 'individual',
    summary:
      'AI·빅데이터 등 디지털 신기술 분야 실무 역량을 키울 수 있는 직업훈련 과정으로, 훈련비와 훈련장려금을 함께 지원합니다.',
    target: '구직자(실업자는 구직신청 필요) 및 재직자 · 국민내일배움카드 발급 대상자',
    benefit: '훈련비 전액 또는 일부 지원(과정별 상이) + 훈련장려금 월 최대 20만 원, 일부 과정 특별훈련수당 10~60만 원 추가',
    period: '연중 상시 (과정별 모집 시기 상이)',
    howToApply: [
      '고용24에서 국민내일배움카드 발급 신청 (실업자는 구직신청 선행)',
      '고용24에서 "K-디지털 트레이닝" 훈련유형으로 원하는 과정 검색',
      '온라인 진단·상담 완료 후 수강 신청 → 훈련기관 선발절차(면접 등) → 자기부담금 결제 후 합류',
    ],
    contact: '고용노동부 고객상담센터 1350',
    sources: [
      {
        label: '고용24 - K-디지털 트레이닝(국민내일배움카드) 제도안내',
        url: 'https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systClId=SC00000197&systId=SI00000423',
      },
      {
        label: '고용노동부 청년뉴딜 - K-디지털 트레이닝',
        url: 'https://moelyouth.work24.go.kr/',
      },
    ],
    tags: ['직업훈련', '디지털역량', '내일배움카드'],
  },
  {
    id: 'employment-creation-allowance',
    title: '고용창출장려금 (일자리 함께하기·국내복귀기업·신중년 적합직무)',
    category: 'corporate',
    region: 'national',
    agency: '고용노동부',
    applicant: 'company',
    summary:
      '근로시간 단축, 국내복귀(리쇼어링), 신중년 채용 등으로 근로자 수를 늘린 사업주를 지원하는 제도입니다. 2024년부터 신규 지원은 종료되어 기존 승인 건의 잔여 지급만 진행됩니다.',
    target: '2024년 이전 사업 참여 승인을 받은 사업주 (신규 신청 불가, 잔여 지급분 확인만 가능)',
    benefit:
      '(일자리 함께하기) 증가근로자 1인당 연 최대 480~960만 원 · (국내복귀기업) 우선지원대상기업 연 최대 720만 원, 중견기업 연 최대 360만 원 · (신중년 적합직무) 우선지원대상기업 연 최대 960만 원',
    period: '신규 신청 불가 - 기존 승인 사업주의 잔여 지급 확인만 가능',
    howToApply: [
      '고용24(work24.go.kr) 또는 사업장 소재지 관할 고용센터 기업지원 부서에서 잔여 지급분 여부 확인',
      '온라인(work24) 또는 방문·우편·팩스로 지급 신청',
    ],
    documents: ['지급신청서', '근로계약서', '월별 임금대장', '임금지급 증빙서류'],
    contact: '고용노동부 고객상담센터 1350 (3번→6번 사업주지원금)',
    sources: [
      {
        label: '정부24 - 고용창출장려금 서비스 상세',
        url: 'https://www.gov.kr/portal/service/serviceInfo/SD0000003276',
      },
      {
        label: '고용보험제도 - 고용안정장려금·고용창출장려금 신청방법',
        url: 'https://ei.work24.go.kr/ei/eih/eg/eb/ebEntrprBnef/retrieveEb0203Info.do',
      },
    ],
    tags: ['고용창출', '리쇼어링', '신중년'],
    note: '2024년부터 신규 지원이 종료된 사업입니다. 신규로 기업 채용 지원을 찾는다면 "청년일자리도약장려금" 또는 "통합고용세액공제"를 확인하세요.',
    status: 'closed',
  },
  {
    id: 'integrated-employment-tax-credit',
    title: '통합고용세액공제',
    category: 'corporate',
    region: 'national',
    agency: '기획재정부·국세청 (조세특례제한법 제29조의8)',
    applicant: 'company',
    summary:
      '상시근로자를 늘린 기업의 법인세·소득세를 최대 3년간 공제해주는 세제 지원 제도로, 청년 등을 채용하면 공제액이 더 커집니다.',
    target: '전년 대비 상시근로자 수가 증가한 중소·중견기업 (대기업은 일부 조건에서만 적용)',
    benefit:
      '중소기업이 청년(만 15~34세)·장애인·60세 이상·경력단절여성을 채용 시 1인당 연 최대 1,450만 원(수도권)·1,550만 원(비수도권), 3년간 공제 · 일반 근로자는 850만/950만 원 · 중견기업은 450만 원 수준 (2026년부터 고용유지기간이 길수록 공제액이 커지는 구조로 개편, 인원 감소 시 추징 방식도 완화)',
    period: '매 회계연도 법인세·소득세 신고 시 신청 (2026.1.1 이후 개시 과세연도부터 개편안 적용)',
    howToApply: [
      '연말 상시근로자 수 증가 여부와 인원 산정 기준(임원·최대주주 특수관계인·일용직·월60시간 미만 근로자 제외) 확인',
      '법인세/소득세 신고 시 홈택스에서 세액공제신청서(조특법 제29조의8) 작성·제출',
      '공제 후 2년(개편 후 유지기간 기준) 이상 고용을 유지해야 추징을 피할 수 있음',
    ],
    contact: '국세청 홈택스 또는 관할 세무서, 세무 전문가 상담 권장',
    sources: [
      {
        label: '다원세무회계 - 통합고용세액공제 2026 개정 핵심',
        url: 'https://enjoytax.net/blog/employment-tax-credit-2026-guide',
      },
      {
        label: '이택스뉴스 - [25년 세제개편안] 통합고용세액공제 고용유지 중심 개편',
        url: 'https://www.etaxnews.com/news/articleView.html?idxno=8142',
      },
    ],
    tags: ['세액공제', '법인세', '고용증대'],
    note: '세법 조항이므로 정확한 공제액과 사후관리 요건은 반드시 국세청 홈택스 안내 또는 세무 전문가를 통해 최종 확인하시기 바랍니다.',
  },
  {
    id: 'pre-startup-package',
    title: '예비창업패키지',
    category: 'corporate',
    region: 'national',
    agency: '중소벤처기업부·창업진흥원',
    applicant: 'individual',
    summary:
      '사업자등록이 없는 예비창업자의 창업 사업화를 지원해 양질의 일자리를 만들어내기 위한 대표 창업지원 프로그램입니다.',
    target: '공고일(2026년은 2026.1.22) 기준 사업자등록 및 법인 설립등기를 하지 않은 예비창업자',
    benefit: '사업화 자금 평균 0.4~0.5억 원(최대 1억 원, 단계별 차등 지원) + MVP 제작·멘토링 등 창업프로그램',
    period: '2026년도 접수는 2026.3.6~3.26 진행 (통상 매년 2월 공고, 3월 접수 - 연도별 신규 공고 확인 필요)',
    howToApply: [
      'K-Startup 누리집(www.k-startup.go.kr) 회원가입(개인) 후 로그인',
      '예비창업패키지 모집공고 확인 후 온라인 신청, 사업계획서 업로드',
      '서류평가 → 인큐베이팅 → 발표평가를 거쳐 최종 선정',
    ],
    documents: ['사업계획서', '증빙서류(공고문 별첨 참조)'],
    contact: '중소기업통합콜센터 1357, 창업진흥원 예비초기팀 044-410-1802~1809',
    sources: [
      {
        label: 'K-Startup 안내(정부24 서비스 상세)',
        url: 'https://www.gov.kr/portal/rcvfvrSvc/dtlEx/999000000074',
      },
      {
        label: '기업마당 - 2026년 예비창업패키지 모집공고',
        url: 'https://www.bizinfo.go.kr/sii/siia/selectSIIA200Detail.do?pblancId=PBLN_000000000119859',
      },
    ],
    tags: ['창업지원', 'K-Startup', '사업화자금'],
  },
  {
    id: 'gg-jobaba-matchup-plus',
    title: '경기청년 일자리 매치업 플러스',
    category: 'jobCreation',
    region: 'gyeonggi',
    agency: '경기도·경기도일자리재단',
    applicant: 'company',
    summary:
      '경기도 내 미취업 청년과 중소기업·사회적기업 간 일자리 미스매치를 줄이기 위해, 청년을 정규직으로 채용하는 기업에 인건비를 지원합니다.',
    target: '경기도에 사업장을 둔 중소기업·사회적기업으로, 도내 거주 19~39세 청년을 정규직 채용할 계획이 있는 기업 (북부특화형은 경기 북부 소재 기업만 해당)',
    benefit:
      '일반형: 도 생활임금 이상 지급 시 기준급여의 80%(월 최대 약 210만 원)를 3개월간 지원 · 북부특화형: 최저임금 이상 지급 시 기준급여의 최대 100%(월 최대 약 216만 원)를 3개월간 지원',
    period: '연 1회 이상 공고 (2026년 모집은 2.25 공고, 2.27 마감 - 매년 신규 공고 시기 상이)',
    howToApply: [
      '잡아바 어플라이(apply.jobaba.net) 접속 후 온라인 접수',
      '서류심사 및 현장 실사 진행',
      '선정위원회 심의를 거쳐 최종 참여기업 확정',
    ],
    contact: '경기도일자리재단',
    sources: [
      {
        label: '아시아경제 - 경기도일자리재단 청년 채용 기업 인건비 지원',
        url: 'https://www.asiae.co.kr/article/2026022510125830244',
      },
      {
        label: '경기도일자리재단 잡아바 어플라이',
        url: 'https://apply.jobaba.net',
      },
    ],
    tags: ['인건비지원', '중소기업', '사회적기업'],
  },
  {
    id: 'gg-customized-employment-support',
    title: '경기청년 맞춤형 채용지원 서비스',
    category: 'youth',
    region: 'gyeonggi',
    agency: '경기도일자리재단',
    applicant: 'individual',
    summary:
      '직업상담사 1:1 매칭을 통해 개인별 취업 준비 상황을 진단하고, 이력서 첨삭부터 모의면접까지 단계별로 취업 경쟁력을 키워주는 서비스입니다.',
    target: '공고일 기준 경기도에 거주하는 18~39세 미취업 청년 (회차별 150~250명 규모)',
    benefit: '직업상담사 1:1 맞춤형 컨설팅, 이력서·자기소개서 첨삭, 면접코칭, 면접캠프, AI 모의면접, 전·현직자 멘토링 등',
    period: '연 2회 모집 (1차 3월, 2차 8월 예정 - 선착순 조기마감 가능)',
    howToApply: [
      '잡아바 어플라이(apply.jobaba.net)에서 온라인 신청',
      '선착순 접수, 모집 인원 충족 시 조기 마감',
    ],
    contact: '경기도일자리재단 융합사업팀',
    sources: [
      {
        label: '매일일보 - 경기청년 맞춤형 채용지원 서비스 참여자 모집',
        url: 'https://www.m-i.kr/news/articleView.html?idxno=1340853',
      },
      {
        label: '경기도 - 2026년도 청년정책 사업별 공고시기 현황(PDF)',
        url: 'https://www.gg.go.kr/uploads/CONTENTS/site/gg/2026%EB%85%84%EB%8F%84+%EA%B2%BD%EA%B8%B0%EB%8F%84+%EC%B2%AD%EB%85%84%EC%A0%95%EC%B1%85+%EC%82%AC%EC%97%85%EB%B3%84+%EA%B3%B5%EA%B3%A0%EC%8B%9C%EA%B8%B0+%ED%98%84%ED%99%A9(%2726.2.20.%EA%B8%B0%EC%A4%80).pdf',
      },
    ],
    tags: ['취업컨설팅', '면접코칭', '멘토링'],
  },
  {
    id: 'gg-region-led-youth-job',
    title: '지역주도형 청년일자리사업',
    category: 'jobCreation',
    region: 'gyeonggi',
    agency: '행정안전부·경기도 내 각 시·군',
    applicant: 'both',
    summary:
      '지역 특성에 맞는 청년 일자리를 발굴해 참여 기업에는 인건비를, 청년에게는 안정적인 정규직 일자리와 지역 정착 기회를 제공하는 사업입니다.',
    target: '경기도 내 39세 이하 미취업·미창업 청년 및 시·군 소재 5인 이상 중소기업 등 (세부 자격은 시·군별 공고에 따라 상이)',
    benefit:
      '유형별로 지역혁신형(정규직 일자리), 상생기반대응형(창업 청년 성장·고용창출), 지역포용형(경력 쌓기), 지역정착형(정규직 일자리) 지원 · 예: 남양주 "내일드림 청년키움"은 인건비 월 최대 180만 원을 최대 2년간 지원',
    period: '2026.1 ~ 2026.12 (시·군별 공고 시기 상이, 일부 지자체는 기존 인원만 지원하고 신규 모집 없음)',
    howToApply: [
      '거주지 관할 시·군청 일자리 관련 부서 또는 경기청년포털(youth.gg.go.kr) 공고 확인',
      '시·군별 채용 공고에 따라 참여기업 및 청년 각각 신청',
    ],
    contact: '경기도 청년기회과 031-8008-3473',
    sources: [
      {
        label: '경기청년포털 - 지역주도형 청년일자리사업',
        url: 'https://youth.gg.go.kr/gg/intro/youth-policy-job-test.do?articleNo=7648&mode=view',
      },
      {
        label: '남양주시청 - 지역주도형 청년일자리사업(내일드림 청년키움)',
        url: 'https://www.nyj.go.kr/www/contents.do?key=2919',
      },
    ],
    tags: ['지역일자리', '시군사업', '정규직채용'],
    note: '시·군별로 사업명과 지원 조건이 다르므로 반드시 거주지 관할 시·군 공고를 확인해야 합니다.',
  },
  {
    id: 'gg-interview-allowance',
    title: '경기도 청년 면접수당',
    category: 'youth',
    region: 'gyeonggi',
    agency: '경기도·경기도미래세대재단',
    applicant: 'individual',
    summary:
      '취업 면접에 참여하는 과정에서 드는 교통비·복장비 등의 부담을 줄여주기 위해 면접 1회당 지역화폐를 지급하는 사업입니다.',
    target:
      '공고일 기준 경기도에 주민등록된 18~39세(1986.1.1~2008.12.31 출생) 청년 · 병역의무 이행자는 이행 기간(최대 3년)만큼 연장되어 최대 42세까지 신청 가능',
    benefit: '면접 1회당 5만 원, 연간 최대 3회(최대 15만 원) 지역화폐 지급 (면접 후 취업 여부와 무관하게 신청 가능)',
    period: '연 2회 모집 (2026년 1차 6.24~7.23, 2차 11월 예정)',
    howToApply: [
      '잡아바 어플라이(apply.jobaba.net) 접속 후 온라인 신청',
      '신청서, 면접확인서, 채용공고문, 주민등록 관련 서류 등 제출',
      '자격·면접 참여 사실 확인 후 지역화폐 지급',
    ],
    documents: ['면접확인서', '채용공고문', '주민등록 관련 서류'],
    contact: '경기도미래세대재단 1877-2046',
    sources: [
      {
        label: '아주경제 - 경기도 청년 면접수당 1차 모집',
        url: 'https://www.ajunews.com/view/20260617100827685',
      },
      {
        label: '경기청년포털 - 2026년 청년 면접수당 변경사항 안내',
        url: 'https://youth.gg.go.kr/gg/intro/notice.do?articleNo=8947&mode=view',
      },
    ],
    tags: ['면접비지원', '지역화폐', '구직활동'],
  },
  {
    id: 'gg-youth-worker-account',
    title: '경기도 청년 노동자 통장',
    category: 'youth',
    region: 'gyeonggi',
    agency: '경기도·경기도미래세대재단',
    applicant: 'individual',
    summary:
      '중소기업 등에 재직 중인 청년 노동자가 매월 일정액을 저축하면 경기도가 지원금을 더해 만기 시 목돈을 돌려주는 자산형성 지원 사업입니다.',
    target: '경기도 거주, 만 19~39세 근로 청년, 가구 소득인정액이 기준 중위소득 120% 이하 (약 2,100명 규모)',
    benefit: '본인이 매월 10만 원씩 24개월 저축 → 만기 시 약 580만 원(도 적립금 + 지역화폐 100만 원 포함) 지급',
    period: '연 1회 모집 (직전 14기는 8.1~8.18 접수, 이후 회차 일정은 공고 확인)',
    howToApply: [
      '청년 노동자 통장 누리집(account.gfgf.kr) 접속',
      '온라인 비대면 접수로 신청서 및 재직·소득 증빙 제출',
      '선정 후 매월 약정 금액 자동이체 저축 시작',
    ],
    contact: '경기도미래세대재단',
    sources: [
      {
        label: '경기도 - 2026년도 청년정책 사업별 공고시기 현황(PDF)',
        url: 'https://www.gg.go.kr/uploads/CONTENTS/site/gg/2026%EB%85%84%EB%8F%84+%EA%B2%BD%EA%B8%B0%EB%8F%84+%EC%B2%AD%EB%85%84%EC%A0%95%EC%B1%85+%EC%82%AC%EC%97%85%EB%B3%84+%EA%B3%B5%EA%B3%A0%EC%8B%9C%EA%B8%B0+%ED%98%84%ED%99%A9(%2726.2.20.%EA%B8%B0%EC%A4%80).pdf',
      },
      {
        label: '청년 노동자 통장 누리집',
        url: 'https://account.gfgf.kr',
      },
    ],
    tags: ['자산형성', '저축지원', '재직청년'],
  },
  {
    id: 'gg-youth-welfare-point',
    title: '청년 복지포인트',
    category: 'youth',
    region: 'gyeonggi',
    agency: '경기도일자리재단',
    applicant: 'individual',
    summary:
      '중소기업 등에 재직 중인 청년 노동자의 열악한 복리후생을 개선하고 장기근속을 유도하기 위해 복지포인트를 지원합니다.',
    target: '경기도 거주, 도내 중소·중견기업/소상공인업체/비영리법인(공공기관 제외) 재직 19~39세 청년 (연 10,000명 규모)',
    benefit: '1년간 총 120만 원 복지포인트 지원 (반기별 60만 원)',
    period: '연 1회 모집 (통상 7월경, 연도별 공고 확인 필요)',
    howToApply: [
      '경기도일자리재단 청년노동자지원 누리집에서 온라인 신청',
      '재직 사실 및 사업장 요건 증빙 제출',
    ],
    contact: '경기도일자리재단 1577-0014',
    sources: [
      {
        label: '경기도일자리재단 - 근로자지원(청년 복지포인트)',
        url: 'http://gjf.or.kr/main/main_biz/list.do?lclsf_sn=119&sclsf_sn=308',
      },
    ],
    tags: ['복지포인트', '재직청년', '장기근속'],
  },
  {
    id: 'gg-sme-youth-worker-support',
    title: '중소기업 청년노동자 지원사업',
    category: 'youth',
    region: 'gyeonggi',
    agency: '경기도일자리재단',
    applicant: 'individual',
    summary:
      '중소기업 재직 청년 노동자의 임금 격차를 보전해 장기근속을 유도하고, 중소기업과 청년 구직자 간 일자리 미스매치를 해소하기 위한 사업입니다.',
    target: '경기도 거주, 도내 중소기업 재직 19~39세 청년 (약 2,000명 규모)',
    benefit: '2년간 총 480만 원(반기별 120만 원) 지역화폐 지원',
    period: '연 1회 모집 (통상 9월경, 연도별 공고 확인 필요)',
    howToApply: [
      '경기도일자리재단 청년노동자지원 누리집에서 온라인 신청',
      '재직 사실 및 소득 증빙 제출',
    ],
    contact: '경기도일자리재단 1577-0014',
    sources: [
      {
        label: '경기도일자리재단 - 근로자지원(중소기업 청년노동자 지원)',
        url: 'http://gjf.or.kr/main/main_biz/list.do?lclsf_sn=119&sclsf_sn=308',
      },
    ],
    tags: ['임금보전', '중소기업재직', '지역화폐'],
  },
]

export function getProgramById(id: string) {
  return programs.find((p) => p.id === id)
}
