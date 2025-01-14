import Holambra from '@img/natal-iluminado-holambra.png';
import Gramado from '@img/natal-de-luz-gramado.png';
import Petropolis from '@img/natal-imperial-petropolis.png';

import s from './galerry.module.scss';

export const Galerry = () => {
  return (
    <section className={s.container}>
      <div className={s.Box}>
        <img src={Holambra} alt="Natal Iluminado em Holambra" />
        <div className={s.Info}>
          <h3>Natal Iluminado em Holambra</h3>
          <p>Venha vivenciar a magia do Natal em Holambra!</p>
        </div>
      </div>

      <div className={s.Box}>
        <img src={Gramado} alt="Natal de Luz em Gramado" />
        <div className={s.Info}>
          <h3>Natal de Luz em Gramado</h3>
          <p>Desfrute do encantador Natal de Luz em Gramado.</p>
        </div>
      </div>

      <div className={s.Box}>
        <img src={Petropolis} alt="Natal Imperial em Petrópolis" />
        <div className={s.Info}>
          <h3>Natal Imperial em Petrópolis</h3>
          <p>Explore a tradição natalina em Petrópolis.</p>
        </div>
      </div>
    </section>
  )
}