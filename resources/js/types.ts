export interface LengthAwarePaginator {
    data: any[]
    total: number
    per_page: number
    current_page: number
    last_page: number
    from: number
    to: number
}
