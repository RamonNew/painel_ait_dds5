const propriedades = [
    'data',
    'data_hora_inicio',
    'data_hora_fim',
    'turma',
    'instrutor',
    'unidade_curricular',
    'ambiente'
];

export function hasProperty(aula){
    return propriedades.every(prop=>aula.hasOwnProperty(prop));
}

export function isNullOrEmpty(valor){
    return valor === null || valor === '' || valor === undefined;
}

export function verificaAula(aula){
    if(hasProperty(aula)){
        return !propriedades.every(prop=>isNullOrEmpty(aula[prop]));
    }else{
        return false;
    }
}