import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">페이지를 찾을 수 없습니다</h1>
      <p className="text-slate-500">요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
      <Link
        to="/"
        className="mt-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
      >
        홈으로 돌아가기
      </Link>
    </div>
  )
}
