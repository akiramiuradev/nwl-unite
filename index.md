// objeto javascript
const participante = {
  nome: "Diego";
  email: "diego@gmail.com";
  dataInscricao: new Date(2024, 2, 22, 19, 20);
  dataCheckIn: new Date(2024, 2, 25, 22, 00);
}

// array
let participantes = [
  {
    nome: "Diego";
    email: "diego@gmail.com";
    dataInscricao: new Date(2024, 2, 22, 19, 20);
    dataCheckIn: new Date(2024, 2, 25, 22, 00);
  }

for(let participante of participantes) {
output = output + criarNovoParticipante(participante)
}