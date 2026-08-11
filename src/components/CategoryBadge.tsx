import type { Category } from '../data/types'
import { CATEGORY_LABEL } from '../data/types'

const STYLES: Record<Category, string> = {
  youth: 'bg-blue-50 text-blue-700 ring-blue-600/20',
  jobCreation: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  corporate: 'bg-amber-50 text-amber-800 ring-amber-600/20',
}

export default function CategoryBadge({ category }: { category: Category }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${STYLES[category]}`}
    >
      {CATEGORY_LABEL[category]}
    </span>
  )
}
