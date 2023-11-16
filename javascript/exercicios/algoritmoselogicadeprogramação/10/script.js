/*
 Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima;

 "Paciente X possui o IMC de: Y"

 Onde X e o nome do paciente e Y e o IMC desse paciente.

 Crie uma funcao para fazer o calculo IMC
*/

// IMC - peso / altura x altura.


const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190, 
  },

  {
    name: "Alexandre",
    age: 27,
    weight: 70,
    height: 170,
  },

  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 120,
  },
]

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
  return `
    Paciente ${patient.name} possui o IMC de
    ${IMC(patient.weight, patient.height)}
  `
}

for (let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}




