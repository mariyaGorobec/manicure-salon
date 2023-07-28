import Menu from "../../components/Menu/Menu";
import style from "./AboutUs.module.scss"

function AboutUs(){
    document.body.style.backgroundImage="linear-gradient(#4ad8d6, #8970ef)";
    return (
        <div className={style.conteiner}>
            <Menu></Menu>
        </div>
    );
}

export default AboutUs;