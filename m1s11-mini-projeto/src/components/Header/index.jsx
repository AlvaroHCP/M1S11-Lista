import { HeaderStyled } from './styled'
import { Grid } from '@mui/material'
import { Link } from '@mui/material'

function Header() {

    const toggleMode = () => {
        // setMode(mode === 'dark' ? 'light' : 'dark');
    };

    return (
        <>
            <HeaderStyled>
                {/* <Grid container
                    justifyContent={"space-between"}
                >
                    <Grid
                        textAlign={"center"}
                        xs={3}
                    >
                        <p>Início</p>
                    </Grid>
                    <Grid
                        textAlign={"center"}
                        xs={3}
                    >
                        <p>Sobre Mim</p>
                    </Grid>
                </Grid> */}



                <Grid container
                    width={'85%'}
                    justifyItems={"center"}
                    display={'grid'}
                    gap={1}
                    gridTemplateColumns={{
                        xs: 'repeat(3, 1fr)',
                    }}
                >
                    <section>
                        <img src="https://img.icons8.com/?size=512&id=14096&format=png" alt="Ícone Home" />
                        <Link to={'/'}>Início</Link>
                    </section>

                    <section>
                        <img src="https://img.icons8.com/?size=512&id=23400&format=png" alt="Ícone Pessoa" />
                        <Link to={'/sobre'}>Sobre Mim</Link>
                    </section>

                    <section>
                        <img src="https://img.icons8.com/?size=512&id=9emOgiekluvM&format=png" alt="Ícone Projetos" />
                        <Link to={'/projetos'}>Meus Projetos</Link>
                    </section>
                </Grid>

                <button onClick={toggleMode}>
                    <img
                        src="https://img.icons8.com/?size=512&id=AzYziyKyf28h&format=png"
                        alt="Dark Mode" />
                </button>

            </HeaderStyled >
        </>
    )
}

export { Header }