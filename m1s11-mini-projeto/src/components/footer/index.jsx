import FooterStyled from "./styled";
// import  from 'react-bootstrap/Col'
import { InfoAlvaroRodape } from "../infoAlvaroRodape";
import { ButtonImageLink } from "../button/buttonImageLink";

function Footer() {
    return (
        <FooterStyled>
            <InfoAlvaroRodape />

            <ButtonImageLink
                buttonName={"LinkedIn"}
                hRef={"https://www.linkedin.com/in/alvarohpimentel"}
                altName={"LinkedIn Logo"}
                imageSource={"https://img.icons8.com/?size=512&id=13930&format=png"}
            />

            <ButtonImageLink
                buttonName={"GitHub"}
                hRef={"https://github.com/AlvaroHCP"}
                altName={"GitHub Logo"}
                imageSource={"https://img.icons8.com/?size=512&id=12599&format=png"}
            />

        </FooterStyled>
    )
}

export { Footer }