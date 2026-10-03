import Button from "../componentes/button/Button";
import TemaList from "../componentes/cards/TemaList";
import Input from "../componentes/input/Input";
import { temas } from "../mocks/tema";

export default function TemaListPage() {
    function handleSugerirTemaClick() {
        // ...
    }

    return (
        <main>
            <div className="flex flex-col gap-4">
                <section>
                    <h1 className="text-4xl font-bold">Temas</h1>
                    <span>Encontre temas disponíveis e gerencie suas áreas de interesse.</span>
                </section>

                <div className="flex flex-col gap-4">
                    <div className="flex justify-end gap-2">
                        <Button
                            text="Sugerir Tema"
                            className="px-6 font-bold bg-linear-to-r from-secondary-light to-secondary hover:bg-linear-to-l"
                            handleClick={handleSugerirTemaClick}
                        />

                        <Input 
                            placeholder="Pesquise por um tema..."
                            className="border border-primary"
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            }
                        />
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