import { format } from 'date-fns'

const today = Date.now()
const data = new Date(today)

const Data = () => {
  let mes = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ][data.getMonth()]

  return mes
}

const saudacao = () => {
  let saud
  let hora = data.getHours()
  if (hora < 12) {
    saud = 'Bom Dia'
  } else if (hora < 18) {
    saud = 'Boa tarde'
  } else {
    saud = 'Boa Noite'
  }

  return saud
}

Data.Saudacao = saudacao

export default Data
