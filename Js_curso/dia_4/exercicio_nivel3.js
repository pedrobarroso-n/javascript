let mes = prompt('Digite um mes ai').toLowerCase()

if (mes == 'janeiro' || mes == 'março' || mes == 'maio' || mes == 'julho' || mes == 'agosto' || mes == 'outobro' || mes == 'dezembro'){
    alert(`${mes.toUpperCase()} tem 31 dias`)
} else if(mes == 'abril' || mes == 'junho' || mes == 'setembro' || mes == 'novembro'){
    alert(`${mes.toUpperCase()} tem 30 dias`)
} else if (mes == 'fevereiro'){
    alert(`${mes.toUpperCase()} tem 28 dias (29 se for ano bissesto)`)
}