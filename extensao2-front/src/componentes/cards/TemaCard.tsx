type Props = {
    id: number,
    title: string
    teacher: string
    course: string
    field: string
}

export function TemaCard({ id, title, teacher, course, field }: Props) {
    return (
        <div className="grid grid-cols-4 gap-4 bg-white p-8 text-primary">
            <div className="flex items-center max-w-[70%] min-w-0">
                <span className="block font-bold">{title}</span>
            </div>

            <div className="flex items-center justify-start gap-2 min-w-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>

                <span className="block truncate">{teacher}</span>
            </div>

            <div className="flex items-center min-w-0">
                <span className="block truncate">{course}</span>
            </div>

            <div className="flex items-center min-w-0">
                <span className="block truncate">{field}</span>
            </div>
        </div>
    )
}
