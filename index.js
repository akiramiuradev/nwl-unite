let participantes = [
 {
    nome: "Diego Fernandes",
    email: "diego.fern@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
  {
    nome: "John Doe",
    email: "john.doe@example.com",
    dataInscricao: new Date(2024, 2, 23, 10, 15),
    dataCheckIn: new Date(2024, 2, 26, 8, 30)
  },
  {
    nome: "Jane Smith",
    email: "jane.smith@example.com",
    dataInscricao: new Date(2024, 2, 24, 14, 45),
    dataCheckIn: new Date(2024, 2, 27, 12, 10)
  },
  {
    nome: "Alice Johnson",
    email: "alice.johnson@example.com",
    dataInscricao: new Date(2024, 2, 25, 17, 30),
    dataCheckIn: new Date(2024, 2, 28, 14, 45)
  },
  {
    nome: "Bob Williams",
    email: "bob.williams@example.com",
    dataInscricao: new Date(2024, 2, 26, 20, 50),
    dataCheckIn: new Date(2024, 2, 29, 17, 20)
  },
  {
    nome: "Eva Brown",
    email: "eva.brown@example.com",
    dataInscricao: new Date(2024, 2, 27, 8, 10),
    dataCheckIn: new Date(2024, 2, 30, 20, 40)
  },
  {
    nome: "Michael Davis",
    email: "michael.davis@example.com",
    dataInscricao: new Date(2024, 2, 28, 12, 25),
    dataCheckIn: new Date(2024, 3, 1, 9, 55)
  },
  {
    nome: "Sara Miller",
    email: "sara.miller@example.com",
    dataInscricao: new Date(2024, 2, 29, 16, 40),
    dataCheckIn: new Date(2024, 3, 2, 15, 10)
  },
  {
    nome: "David Wilson",
    email: "david.wilson@example.com",
    dataInscricao: new Date(2024, 2, 30, 19, 5),
    dataCheckIn: new Date(2024, 3, 3, 18, 30)
  },
  {
    nome: "Sophia Lee",
    email: "sophia.lee@example.com",
    dataInscricao: new Date(2024, 2, 31, 22, 20),
    dataCheckIn: new Date(2024, 3, 4, 21, 50)
  }
]

participantes.sort((a, b) => b.dataInscricao - a.dataInscricao);

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)

  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

  if(participante.dataCheckIn == null) {
    dataCheckIn = `
    <button data-email="${participante.email}" onclick="fazerCheckIn(event)">
      Confirmar check-in
    </button>
    `
  }


  return `
  <tr>
      <td>
        <strong>
          ${participante.nome}
        </strong>
        <br>
        <small>
          ${participante.email}
        </small>
      </td>
      <td>${dataInscricao}</td>
      <td>${dataCheckIn}</td>
    <tr>
  `
}

const atualizarLista = (participantes) => {
  let output = ""
  //estrutura de repetição - loop
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }
  // substituir informação do HTML
  document.querySelector('tbody').innerHTML= output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosForm = new FormData (event.target)
  
  const participante = {
    nome: dadosForm.get('nome'),
    email: dadosForm.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  const participanteExiste = participantes.find((p) => {
    return p.email == participante.email
  })

  if(participanteExiste) {
    alert("Email já cadastrado!")
    return
  }
  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  event.target.querySelector('[name ="nome"]').value = ""
  event.target.querySelector('[name ="email"]').value = ""
}

const fazerCheckIn = (event) => {

  if(confirm("Tem certeza que quer fazer o check-in?") == false) {
    return
  }
  
  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email
  })
  participante.dataCheckIn = new Date()
  atualizarLista(participantes)
}