import Botao from '../Botao';
import Relogio from './relogio';
import style from './cronometro.module.scss';
import { tempoParaSegundos } from '../../common/utils/time';
import { ITarefa } from '../../types/tarefa';
import { useState, useEffect } from 'react';

interface Props {
    selecionado: ITarefa | undefined
}

export default function Cronometro({ selecionado }: Props) {

    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    },[selecionado]);
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>
                Escolhe um card e inicie o cronômetro
            </p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Relogio/>
            </div>
            <Botao/>
        </div>
    )   
}