import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ButtonImageRoutes } from '../../components/Button/ButtonImageRoutes'
import { HomeStyled } from './styled'

function Home() {
    return (
        <>
            <Header />

            <HomeStyled>
                {/* <ButtonImageRoutes /> */}

                <h2>Até aqui!</h2>
                <h2>O que aprendi?</h2>
                <h2>Conquistas!</h2>

            </HomeStyled>

            <Footer />
        </>
    )
}

export { Home }