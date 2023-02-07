import Botao from '../Botao';
import Relogio from './relogio';
import style from './cronometro.module.scss';

export default function Cronometro () {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>
                Escolhe um card e inicie o cronômetro
            </p>
            <div className={style.relogioWrapper}>
                <Relogio/>
            </div>
            <Botao>
                Começar!!
            </Botao>
        </div>
    )   
}