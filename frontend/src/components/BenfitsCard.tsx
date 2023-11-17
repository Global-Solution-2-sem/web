type cardProps = {
    image: string
    title: string
    text: string
    index: number
    alt: string
}

export default function BenefitsCard({ image, title, text, index, alt }: cardProps) {
    return (
        <div className="benefit-card">
            <img src={image} className="image" alt={alt} />
            <div className="benefit-text-container">
                <h3>{index + 1}</h3>
                <div className="benefit-card-info">
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}