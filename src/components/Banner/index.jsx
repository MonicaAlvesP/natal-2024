import BannerHero from "@img/BannerHero.png";
import GloboNatalino from '@img/globo-natalino.png';

import s from './banner.module.scss';

export const Banner = () => {
  return (
    <section className={s.container}>
      <div className={s.hero}>
        <img src={BannerHero} alt="Papai noel e seus duendes em sua fabrica de presentes natalinos" />
      </div>
      <div className={s.content}>
        <img src={GloboNatalino} alt="globo de neve com arvore de natal" />
        <p>A origem do globo de neve é incerta, mas acredita-se que tenha surgido na Europa no século XIX, tornando-se um símbolo de magia, afeto e encantamento, especialmente no Natal, trazendo um toque de nostalgia e maravilha para as celebrações e encantando gerações ao redor do mundo.</p>
      </div>
    </section>
  )
}