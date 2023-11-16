/*
 * Crie uma lista de pacientes
  * Cada paciente dentro da lista devera conter: 
      *Nome
      *Idade
      *Peso
      *Altura
    * Escreva uma lista contendo o nome dos pacientes
*/
// Criacao de objetos

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

let patientsNames = []

for(let patient of patients) {
  patientsNames.push(patient.name)
}

alert("Patient 1 - Name: " + patients[0].name + ", Weight: " + patients[0].weight + " Kg" + ", Height: " + patients[0].height)

//alert(patientsNames)