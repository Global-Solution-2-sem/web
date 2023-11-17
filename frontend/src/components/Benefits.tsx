import BenefitsCard from "./BenfitsCard";
import vantagem1 from '../assets/vantagem-1.jpg'
import vantagem2 from '../assets/vantagem-2.jpg'
import vantagem3 from '../assets/vantagem-3.jpg'


export default function Benefits() {
    const data = [
        {
            image: vantagem2,
            title: 'Centralização das informações',
            text: 'Todas as informações essenciais reunidas em um só lugar, facilitando o acesso dados de saúde.',
            alt: 'Imagem de um celular'
        },
        {
            image: vantagem1,
            title: 'Acompanhamento Preventivo',
            text: 'Identificação de padrões e antecipação de possíveis problemas de saúde.',
            alt: 'Imagem de médicos'
        },
        {
            image: vantagem3,
            title: 'Privacidade Reforçada',
            text: 'Garantia de total confidencialidade, especialmente com a edição/cadastro exclusivo para médicos.',
            alt: 'Imagem de cyber segurança'
        }
    ]
    return (
        <section className="benefits-container">
            <h3>Vantagens</h3>
            <div className="benefits-card-container">
                {data.map((item, index) =>
                    <BenefitsCard key={index} image={item.image} text={item.text} title={item.title} index={index} alt={item.alt} />
                )}
            </div>
        </section>
    )
}