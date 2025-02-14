export default function Card({background, name, link}){
    return (
        <>
            <section className="flex-container">
                <section className="flex-item" style={{backgroundImage: background}}>
                    <p className="card">{name}</p>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img src="/assets/github-mark-white.png" alt="github" class="inside"/>
                    </a>
                </section>
            </section>
        </>
    )
}
