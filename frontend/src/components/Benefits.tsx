import BenefitsCard from "./BenfitsCard";

export default function Benefits() {
    return (
        <section className="benefits-container">
            <h3>Vantagens</h3>
            <div className="benefits-card-container">
                <BenefitsCard />
                <BenefitsCard />
                <BenefitsCard />
            </div>
        </section>
    )
}