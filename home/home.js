const dgvDados=document.getElementById('dgvDados')
const resPesquisa=document.getElementById('resultado')

fetch('http://localhost:8081/dados')
.then(res=>res.json())
.then(res=>{
  res.forEach(el => {
    const dgvLinha=document.createElement("div");

    //dgvDados.innerHTML="";

    dgvLinha.setAttribute("class","dgvLinha");

    const c1=document.createElement("div");
    c1.setAttribute("class","c1");
    c1.innerHTML=el.id;
    dgvLinha.appendChild(c1)

    const c2=document.createElement("div");
    c2.setAttribute("class","c2");
    c2.innerHTML=el.nome;
    dgvLinha.appendChild(c2)
              
    const c3=document.createElement("div");
    c3.setAttribute("class","c3");
    c3.innerHTML=el.celular;
    dgvLinha.appendChild(c3)

    const c4=document.createElement("div");
    c4.setAttribute("class","c4");
    c4.innerHTML=el.email;
    dgvLinha.appendChild(c4)

    const c5=document.createElement("div");
    c5.setAttribute("class","c5");
    c5.innerHTML=el.dtnasc;
    dgvLinha.appendChild(c5)

    dgvDados.appendChild(dgvLinha)
  });
})

document.getElementById('BtnPesquisa').addEventListener('click', function(e) {
  e.preventDefault();
  let query = document.getElementById('inputPesquisa').value;
  // Faça uma solicitação para a API com a consulta
  fetch('http://localhost:8081/pesquisa', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({query: query}),
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((error) => {
    console.error('Erro:', error);
  });

});


fetch('http://localhost:8081/pesquisa', {
  method: 'GET',
})
.then(response => response.json())
.then(data => {
  console.log(data);
  const resPesquisa = document.getElementById('resPesquisa'); 
  data.forEach(el => {
    const result = document.createElement('p');
    result.setAttribute('class', 'resultadoPesquisa');
    result.innerHTML = el.nome; 
    resPesquisa.appendChild(result);
  });
})
.catch((error) => {
  console.error('Erro:', error);
});

