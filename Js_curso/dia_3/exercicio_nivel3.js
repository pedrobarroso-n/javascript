let horario = new Date()

horario.getMinutes < 10
    ? console.log(`${horario.getDate()}/${horario.getMonth()+1}/${horario.getFullYear()} 0${horario.getHours()}:${horario.getMinutes()}`)
    : console.log(`${horario.getDate()}/${horario.getMonth()+1}/${horario.getFullYear()} ${horario.getHours()}:${horario.getMinutes()}`)