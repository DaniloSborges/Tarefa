const resultado = document.getElementById("resultado");
const attForm = document.getElementById('attForm');

function imprimirJSON() {
    resultado.innerHTML = '';
    let url = '../aplicacao/search.php';

    console.log(`Conectando a ${url}`)

    let Cliente = document.getElementById('Cliente')
        // com axios
    axios.get(url)
        .then(resp => {
            console.log('Recebendo dados!');

            let table = '<table>'
            resp.data.forEach(obj => {
                console.log(obj)
                table += '<tr>'
                Object.entries(obj).map(([key, value]) => {
                    table += `<td>${value}</td>`
                });
                table += '</tr>'
            });
            Cliente.innerHTML += table + '</table>';
        })
        .catch(error => {
            console.log(`Erro ao conectar:\n\n${error.message}`)
            console.log(error)
        });
}


function buscaCliente_nomeJs() {
    resultado.innerHTML = '';
    let busca_nome = document.getElementById('busca_nome');
    let busca = document.getElementById('nome_busca_cliente').value;
    let url = `../aplicacao/search_nome.php?busca=${busca}`;
    console.log(`Conectando a ${url}`)

    axios.get(url, { query: { busca } })
        .then(resp => {
            console.log('Recebendo dados!');

            let table = '<table>'
            resp.data.forEach(obj => {
                table += '<tr>'
                Object.entries(obj).map(([key, value]) => {
                    table += `<td>${value}</td>`
                });
                table += '</tr>'
            });
            busca_nome.innerHTML += table + '</table>';
        })
        .catch(error => {
            console.log(`Erro ao conectar:\n\n${error.message}`)
            console.log(error)
        });
    event.preventDefault();
}

function insertClienteJs() {
    event.preventDefault();

    resultado.innerHTML = ''; //seta a div de resultado como vazia
    let nome = insert.nome.value;
    let cpf = insert.cpf.value;
    let login = insert.login.value;
    let senha = insert.senha.value;
    let cliente = new Cliente(nome, cpf, login, senha); //instancia um novo objeto usando o construtor
    let url = '../aplicacao/insert.php';
    axios.post(url, JSON.stringify(cliente))
        .then(resp => {
            console.log(resp)
            console.log(resp.data)
            resultado.innerHTML = resp.data;
        })

    .catch(error => console.error('Erro ao tentar acessar o php:', error));
}


//     fetch(url, {
//             method: "POST",
//             body: JSON.stringify(Cliente)
//         })
//         .then(response => response.text())
//         .then(function result(data) {
//             resultado.innerHTML = data;
//         })
//         .catch(error => console.error('Erro ao tentar acessar o php:', error));
//     event.preventDefault();
// }


function alterClienteJs() {
    event.preventDefault();

    let busca = alter.busca.value;
    let url = `../aplicacao/search_altera.php?busca=${busca}`;
    console.log(`Conectando a ${url}`)

    axios.get(url, { query: { busca } })
        .then(resp => {
            attForm.style.display = 'block';
            att.nome.value = resp.data.nome;
            att.cpf.value = resp.data.cpf;
            att.login.value = resp.data.login;
            att.senha.value = resp.data.senha;
        })
        .catch(error => console.error('Erro ao tentar acessar o php:', error));

}

function attClienteJs() {
    event.preventDefault();

    resultado.innerHTML = ''; //seta a div de resultado como vazia
    let busca = alter.busca.value;
    let nome = att.nome.value;
    let cpf = att.cpf.value;
    let login = att.login.value;
    let senha = att.senha.value;
    let clienteAtt = new Cliente(nome, cpf, login, senha, busca); //instancia um novo objeto usando o construtor
    let url = '../aplicacao/alter.php';
    axios.post(url, JSON.stringify(clienteAtt))
        .then(resp => {
            resultado.innerHTML = resp.data;
            attForm.style.display = 'none';
        })
        .catch(error => console.error('Erro ao tentar acessar o php:', error));

}

function deleteClienteJs() {
    event.preventDefault();

    let busca = deletar.busca.value;
    let url = `../aplicacao/delete.php?busca=${busca}`;
    console.log(`Conectando a ${url}`)

    axios.get(url, { query: { busca } })
        .catch(error => console.error('Erro ao tentar acessar o php:', error));
}

//construtor usado no insert
var Cliente = function(nome, cpf, login, senha, busca) {
    this.busca = busca;
    this.nome = nome;
    this.cpf = cpf;
    this.login = login;
    this.senha = senha;
}