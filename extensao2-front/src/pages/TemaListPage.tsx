import TemaList from "../componentes/cards/TemaList";
import { temas } from "../mocks/tema";

export default function TemaListPage() {
    return (
        <main>
            <div className="flex flex-col gap-4">
                <section>
                    <h1 className="text-4xl font-bold">Temas</h1>
                    <span>Encontre temas disponíveis e gerencie suas áreas de interesse.</span>
                </section>

                <div className="flex flex-col">
                    <div className="flex w-full">
                        <input type="text" />
                    </div>

                    <div className="flex gap-4">
                        <section>
                            <div className="w-96 h-full bg-primary">

                            </div>
                        </section>
                        <section>
                            <div>
                                <TemaList 
                                    temas={temas}
                                />
                            </div>
                        </section>
                    </div>

                </div>
            </div>

        </main>
    )
}