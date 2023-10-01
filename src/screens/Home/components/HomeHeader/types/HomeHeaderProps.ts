import { Company } from "../../../../../models/Company";

export type HomeHeaderProps = {
    company?: Company | null
    totals: Totals
    handleOpenOptions: () => void
}

type Totals = {
    income: number
    received: number
    missing: number
}