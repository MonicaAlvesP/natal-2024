import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import Presentes from "@img/presentes.png";

import s from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={s.container}>
      <section className={s.socialIcons}>
        <FaLinkedin />
        <FaInstagram />
        <FaGithub />
      </section>

      <section className={s.info}>
        <h4>Aluna: <span>Mônica Alves Pereira</span></h4>
        <h4>Instrutora: <span>Fernanda Corrêa</span></h4>
        <h4>Facilitador: <span>João Pedro Belo</span></h4>
        <p>Layout criado para fins natalistícos na escola vai na web</p>
      </section>

      <section>
        <img src={Presentes} alt="Presentes de Natal" />
      </section>
    </footer>
  )
}