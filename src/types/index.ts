export type DashboardCard = {
    title: string
    change: number
    amount: number
}
export type Order = {
    name: string
    type: string
    items: number
    change: number
}
export type Card = {
    id: number
    title: string
    description: string
}
export type Column = {
    id: number
    title: string
    cards: Card[]
}
export type Board = {
    columns: Column[]
}
