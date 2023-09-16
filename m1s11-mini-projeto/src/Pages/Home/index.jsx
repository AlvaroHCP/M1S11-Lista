import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ButtonImageRoutes } from '../../components/Button/ButtonImageRoutes'
import { HomeStyled } from './styled'

function Home() {
    return (
        <div>
            <Header />

            <HomeStyled>
                {/* <ButtonImageRoutes /> */}

                <h2>Até aqui!</h2>
                <p>Eu sou um entusiasta de tecnologia que ama aprender coisas novas. Físico de formação,
                    segui na área acadêmica por alguns anos, conquistando título de Mestre e Doutor
                    em Optica Quântica.
                </p>
                <p>
                    Decidi mudar de carreira buscando evolução pessoal e profissional no mercado de
                    trabalho, e por isso, escolhi uma carreira em ascenção e na qual me sinto
                    extremamente confortável, que é lidando com programação e desenvolvimento de sistemas.
                </p>
                <h2>O que aprendi?</h2>
                <p>
                    Na área acadêmica aprendi muito sobre auto-gestão, gerenciamento de projetos de pesquisa
                    e desenvolvimento, resiliência, determinação, consistência, constância, comunicação
                    em público através de apresentações de trabalhos em congressos nacionais e internacionais,
                    a trabalhar em equipe, além de habilidades técnicas.
                </p>
                <h2>Conquistas!</h2>
                <p>
                    Participei de projetos de elaboração de protocolos experimentais de comunicação
                    utilizando técnicas de mecânica quântica, e projetos de metrologia quântica, no qual minha
                    tese de doutorado foi produzida, onde propuz uma nova maneira mais eficiente
                    confiável de medir deslocamentos de feixes de laser. Panorama importantíssimo para a área
                    de fotônica integrada, tida como uma das mais promissoras áreas para o desenvolvimento da
                    computação quântica.
                </p>
                <p>
                    Desenvolvi vários softwares de captação de dados, assim como de análise de dados, utilizando
                    estatística e modelos físicos para aferir e testar hipóteses dentro do método científico.
                </p>
                <p>
                    Esses softwares desenvolvidos foram em Mathematica, que usa as linguagens C++/Java como base,
                    LabView, que é uma linguagem de programação visual mais ao estilo Visual Basic, no estilo
                    Drag and Drop de estruturas de programação, em C, para performance de cálculos matemáticos,
                    e em python, para análises estatísticas com mais facilidade e entrega mais intuitiva de
                    resultados.
                </p>

            </HomeStyled>

            <Footer />
        </div>
    )
}

export { Home }