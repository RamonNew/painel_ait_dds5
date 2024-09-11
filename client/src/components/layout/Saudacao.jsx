import { useEffect, useState } from "react";
import styles from './Saudacao.module.css';

// Criando função Saudacao
function Saudacao() {
    //Criando estado da saudação
    const [saudacaoPeriodo, setSaudacaoPeriodo] = useState('');

    //Chamando função de saudação e definindo um intervalo de 1 segundo
    useEffect(() => {
        atualizaSaudacao();
        const intervalo = setInterval(atualizaSaudacao,1000);
        return ()=>{
            clearInterval(intervalo);
        }
    }, [])

    // Criando texto da saudação do cabeçalho
    function atualizaSaudacao() {
        // Declarando objeto do tipo Date
        const agora = new Date();

        // Obtendo hora em inteiro exemplo 07:35:00 retorna 7
        const hora = agora.getHours();

        //  Obtendo dia da semana em inteiro iniciando em domingo que retorna 0 e sabado que retorna 6
        const dia = agora.getDay();

        // Declarando variavel do texto da saudação
        let textoSaudacao = '';

        // Definindo array com dias da semana
        const diaSemana = [
            'Domingo',
            'Segunda-Feira',
            'Terça-Feira',
            'Quarta-Feira',
            'Quinta-Feira',
            'Sexta-Feira',
            'Sabado'
        ];

        // Adicioanando o dia da semana ao textoSaudacao
        textoSaudacao += diaSemana[dia];
        // Adicionando saudação ao textoSaudacao

        if (hora>=18){
            textoSaudacao += ' Boa Noite';
        }else if(hora>=12){
            textoSaudacao += ' Boa Tarde';
        }else{
            textoSaudacao += ' Bom Dia';
        }
        //Chamadno função de atribuição
        setSaudacaoPeriodo(textoSaudacao);
    }


    return (
        <div className={styles.saudacao}>{saudacaoPeriodo}</div>
    )
}

export default Saudacao;