import Image from 'next/image'
export function CardPost ({ post }) {
    return (
        <article>
            <header>
                <figure>
                    <Image/>
                </figure>
            </header>
            <section>
                titulo
                texto
            </section>
            <footer>
                <Avatar />
            </footer>
        </article>
    )
}