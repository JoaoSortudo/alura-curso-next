import Image from 'next/image'
export function Avatar ({name, imageSrc}) {
    return (
        <ul>
            <li>
                <Image src={imageSrc} width={32} height={32}/>
            </li>
            <li>
                @{name}
            </li>
        </ul>
    )
}