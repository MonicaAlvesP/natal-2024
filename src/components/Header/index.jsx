import MiniArvore from '@img/mini-arvore.png'
import { useState } from "react";

import s from "./header.module.scss";

export const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <section className={s.logoTitle}>
        <img src={MiniArvore} alt="mini arvore de natal" />
        <h1>Feliz Natal</h1>
      </section>
      <nav>
        <div className={s.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`${s.menu} ${isOpen ? s.active : ''}`}>
          <li>Inicio</li>
          <li>Curiosidades</li>
          <li>Galeria</li>
        </ul>
      </nav>
    </header>
  )
}