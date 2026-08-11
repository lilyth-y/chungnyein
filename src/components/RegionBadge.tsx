import type { Region } from '../data/types'
import { REGION_LABEL } from '../data/types'
import { MapPin } from 'lucide-react'

export default function RegionBadge({ region }: { region: Region }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-300">
      <MapPin size={12} />
      {REGION_LABEL[region]}
    </span>
  )
}
