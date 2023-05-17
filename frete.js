function calcularFrete() {
    const cep = document.getElementById('cep').value;
    
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        const endereco = data.logradouro + ', ' + data.bairro + ', ' + data.localidade + ', ' + data.uf;
        document.getElementById('resultado').innerHTML = `O frete para ${endereco} é de R$ 10,00.`; // substitua 10,00 pelo valor do frete real
      })
      .catch(error => console.error(error));
  }