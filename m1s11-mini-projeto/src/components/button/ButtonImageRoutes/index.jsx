import { ButtonStyled } from "./styled";
import { Link } from 'react-router-dom'

function ButtonImageRoutes({ imageSource, altName, route, buttonName }) {
    return (
        <ButtonStyled>

            <Link to={route} style={{ display: 'flex' }}>
                <img src={imageSource} alt={altName} />
                {buttonName}
            </Link>

        </ButtonStyled>
    )
}

export { ButtonImageRoutes }