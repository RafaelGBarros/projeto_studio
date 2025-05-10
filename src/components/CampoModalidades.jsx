
export default function CampoSobre({ titulo, desc, texto,imagem}) {
    return (
        <main className="CampoSobre">
            <h1>{titulo}</h1>
            <h2>{desc}</h2>
            <p>{texto}</p>
        </main>
    )
}