function station() {
  let estacao = String(prompt('Qual o mês').toLowerCase())
  let add = document.getElementById('text')
  const up = result => {
    return result[0].toUpperCase() + result.slice(1)
  }
  const replaceMarco = re => {
    return re.replace('c', 'ç')
  }

  if (
    estacao === 'janeiro' ||
    estacao === 'fevereiro' ||
    replaceMarco(estacao) === 'março'
  ) {
    add.innerHTML = `No mês de ${up(
      replaceMarco(estacao)
    )}, estamos na estação <strong>VERÃO</strong>`
  } else if (estacao === 'abril' || estacao === 'maio' || estacao === 'junho') {
    add.innerHTML = `No mês de ${up(
      estacao
    )}, estamos na estação <strong>OUTONO</strong>`
  } else if (
    estacao === 'julho' ||
    estacao === 'agosto' ||
    estacao === 'setembro'
  ) {
    add.innerHTML = `No mês de ${up(
      estacao
    )}, estamos na estação <strong>INVERNO</strong>`
  } else if (
    estacao === 'outubro' ||
    estacao === 'novembro' ||
    estacao === 'dezembro'
  ) {
    add.innerHTML = `No mês de ${up(
      estacao
    )}, estamos na estação <strong>PRIMAVERA</strong>`
  } else {
    alert('Digite um mês válido')
  }
  console.log(estacao)
  console.log(up)
}

// switch (estacao) {
//   case 'janeiro':
//   case 'fevereiro':
//   case 'março':
//     add.innerHTML = `No mês de ${up(
//       estacao
//     )}, estamos na estação <strong>VERÃO</strong>`
//     break
//   case 'abril':
//   case 'maio':
//   case 'junho':
//     add.innerHTML = `No mês de ${up(
//       estacao
//     )}, estamos na estação <strong>OUTONO</strong>`
//     break
//   case 'julho':
//   case 'agosto':
//   case 'setembro':
//     add.innerHTML = `No mês de ${up(
//       estacao
//     )}, estamos na estação <strong>INVERNO</strong>`
//     break
//   case 'outubro':
//   case 'novembro':
//   case 'dezembro':
//     add.innerHTML = `No mês de ${up(
//       estacao
//     )}, estamos na estação <strong>PRIMAVERA</strong>`
//     break
// }
