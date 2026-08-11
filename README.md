# 청년일자리 지원사업 안내 (chungnyein)

청년 고용·취업 지원, 일자리 창출, 기업 지원 프로그램(전국 + 경기도)을 한 곳에서 찾아보고 신청 방법을 확인할 수 있는 웹 애플리케이션입니다.

- 배포 주소: https://lilyth-y.github.io/chungnyein/
- 스택: React + TypeScript + Vite + Tailwind CSS, React Router(HashRouter)

## 로컬 개발

```bash
npm install
npm run dev
```

## 빌드 / 수동 배포

```bash
npm run build     # dist/ 생성
npm run deploy    # gh-pages 브랜치로 배포 (수동으로 즉시 배포하고 싶을 때)
```

## 데이터 구조

프로그램 정보는 `src/data/programs.ts`에 배열로 저장되어 있고, 타입 정의는 `src/data/types.ts`에 있습니다. 새 프로그램을 추가하거나 기존 정보를 수정할 때는 이 파일만 편집하면 됩니다.

## 자동 업데이트 (GitHub Actions)

이 저장소에는 두 개의 워크플로가 있습니다.

### 1. `Weekly Program Data Update` (`.github/workflows/weekly-program-update.yml`)

- **주기**: 매주 월요일 11:00 KST (cron `0 2 * * 1`, UTC 기준)에 자동 실행되며, GitHub Actions 탭에서 수동 실행(`workflow_dispatch`)도 가능합니다.
- **동작**: Cursor CLI(`cursor-agent`)가 `src/data/programs.ts`에 있는 모든 프로그램의 공식 출처(source) 링크를 다시 확인하고, 마감일/지원금액/상태 등이 바뀐 것이 확인되면 데이터를 수정합니다. 확인되지 않은 내용은 임의로 추측하지 않고 `note` 필드에 "확인 필요"로만 남깁니다.
- **안전장치**: 에이전트는 `src/data/**` 파일만 수정할 수 있고, `git`/`gh`/`rm` 명령은 실행할 수 없도록 CLI 권한이 제한되어 있습니다. 변경 사항이 있으면 **직접 배포하지 않고** 새 브랜치를 만들어 Pull Request만 생성합니다 — 실제 사이트에는 사람이 PR을 검토하고 머지해야 반영됩니다.
- **필요한 설정**: 저장소 secret으로 `CURSOR_API_KEY`가 있어야 합니다. (아래 "최초 설정" 참고)

### 2. `Build and Deploy to GitHub Pages` (`.github/workflows/deploy.yml`)

- `master` 브랜치에 push가 발생하면(예: 위 주간 업데이트 PR을 머지했을 때) 자동으로 `npm run build`를 실행하고 결과를 `gh-pages` 브랜치에 배포합니다. AI가 개입하지 않는 결정적(deterministic) 단계라 안전합니다.

### 최초 설정 (1회만)

1. [cursor.com](https://cursor.com) 대시보드에서 CLI용 API 키를 발급받습니다.
2. 저장소에 secret으로 등록합니다.

   ```bash
   gh secret set CURSOR_API_KEY --repo lilyth-y/chungnyein
   ```

   또는 GitHub 저장소 → Settings → Secrets and variables → Actions → New repository secret 에서 직접 등록해도 됩니다.
3. 등록 후에는 매주 월요일 11시에 자동으로 실행되며, 필요하면 Actions 탭에서 "Run workflow"로 즉시 실행해 볼 수도 있습니다.

### 주의사항 / 한계

- PC를 켜둘 필요는 없습니다 — GitHub의 클라우드 러너에서 실행됩니다.
- 자동 생성된 PR은 정부 지원사업처럼 정확도가 중요한 정보이므로, 머지 전에 반드시 내용을 검토하세요. `weekly-update-summary.md`로 전달되는 PR 본문에 어떤 값이 바뀌었고 어떤 출처를 근거로 했는지 요약되어 있습니다.
- `CURSOR_API_KEY`가 없으면 워크플로는 바로 실패(fail-fast)하고 아무것도 수정하지 않습니다.
