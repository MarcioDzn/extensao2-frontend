import { TemaCard } from "./TemaCard"

type Tema = {
    id: number
    title: string
    teacher: string
    field: string
    course: string
}

type Props = {
    temas: Tema[]
}

export default function TemaList({ temas }: Props) {
    return (
        <div className="p-8 rounded-2xl border-2 border-primary text-sm">
            <div className="flex items-center gap-2 mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                </svg>

                <h1 className="text-xl font-bold text-primary">
                    Temas disponíveis
                </h1>
            </div>

            <div className="w-full h-px bg-primary"/>

            <div className="grid grid-cols-4 gap-4 px-8 py-4 font-bold text-primary">
                <span>TEMA</span>
                <span>PPROFESSOR</span>
                <span>CURSO</span>
                <span>ÁREA</span>
            </div>

            <div className="w-full h-px bg-primary"/>

            <div>
                {
                    temas.map((tema: Tema) => (
                        <>
                            <TemaCard 
                                key={tema.id}
                                title={tema.title} 
                                teacher={tema.teacher} 
                                course={tema.course} 
                                field={tema.field}
                            />

                            <div className="w-full h-px bg-primary"/>
                        </>

                    ))
                }
            </div>  
        </div>
    ) 
}