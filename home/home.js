const dgvDados = document.getElementById('dgvDados')
const resPesquisa = document.getElementById('resultado');
let TitleOfDgvExist=false;
let WastheResearchDone = false;

const operationsdashboard= function(){
  
}

const createDataGridView = function(el, dgvDados) {
  const dgvLinha = document.createElement("div");
  dgvLinha.setAttribute("class","dgvLinha");

  const c1 = document.createElement("div");
  c1.setAttribute("class","c1");
  c1.innerHTML = el.id;
  dgvLinha.appendChild(c1)

  const c2 = document.createElement("div");
  c2.setAttribute("class","c2");
  c2.innerHTML = el.nome;
  dgvLinha.appendChild(c2)
            
  const c3 = document.createElement("div");
  c3.setAttribute("class","c3");
  c3.innerHTML = el.celular;
  dgvLinha.appendChild(c3)

  const c4 = document.createElement("div");
  c4.setAttribute("class","c4");
  c4.innerHTML = el.email;
  dgvLinha.appendChild(c4)

  const c5 = document.createElement("div");
  c5.setAttribute("class","c5");
  c5.innerHTML = el.dtnasc;
  dgvLinha.appendChild(c5)

  const painelDeOperações = document.createElement('div')
  painelDeOperações.setAttribute("class","pdo");
  painelDeOperações.innerHTML = '...';
  dgvLinha.appendChild(painelDeOperações)

  painelDeOperações.addEventListener('click', function(e) {
    const divPdo = document.createElement('div')
    divPdo.setAttribute('class','divpdo')

    const btnpdo = document.createElement('button')
    btnpdo.innerHTML = 'Editar'
    divPdo.appendChild(btnpdo)

    document.body.appendChild(divPdo)

    console.log(e.target.parentNode.firstChild)
  });

  dgvDados.appendChild(dgvLinha)
}
fetch('http://localhost:8081/dados')
.then(res => res.json())
.then(res => {
  res.forEach(el => {
    createDataGridView(el,dgvDados)
  })
})

  const btnlimpar=function(resPesquisa){
    const btnLimpar = document.createElement('button');
    btnLimpar.addEventListener('click', function(){
        TitleOfDgvExist=false;
       resPesquisa.innerHTML='';
       });
       btnLimpar.setAttribute('class',"btnlimpar")
       btnLimpar.innerHTML = 'Limpar';
      resPesquisa.appendChild(btnLimpar)
     };

const createTitleOfDgv=function(resPesquisa){
  TitleOfDgvExist=true
  resPesquisa.innerHTML="Resultado da Pesquisa: "

  const dgvContatos=document.createElement('div')
  dgvContatos.setAttribute('id','dgvContatos')

  const dgvTitulos=document.createElement('div')
  dgvTitulos.setAttribute('class','dgvTitulos')

  const c1=document.createElement('div')
  c1.setAttribute('class','c1')
  c1.innerHTML="Id";
  dgvTitulos.appendChild(c1)
  const c2=document.createElement('div')
  c2.setAttribute('class','c2')
  c2.innerHTML="Nome";
  dgvTitulos.appendChild(c2)
  const c3=document.createElement('div')
  c3.setAttribute('class','c3')
  c3.innerHTML="Celular";
  dgvTitulos.appendChild(c3)
  const c4=document.createElement('div')
  c4.setAttribute('class','c4')
  c4.innerHTML="E-mail";
  dgvTitulos.appendChild(c4)
  const c5=document.createElement('div')
  c5.setAttribute('class','c5')
  c5.innerHTML="Data de Nascimento";
  dgvTitulos.appendChild(c5)
  
  dgvContatos.appendChild(dgvTitulos)
  resPesquisa.appendChild(dgvContatos)


}

document.getElementById('BtnPesquisa').addEventListener('click', function(e) {
  e.preventDefault();
  let nome = document.getElementById('inputPesquisa').value;
  fetch('http://localhost:8081/buscar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({nome: nome}),
  })
  .then(response => response.json())
  .then(data =>{

   

    if(TitleOfDgvExist==false){
      WastheResearchDone=true
      createTitleOfDgv(resPesquisa)
      const contato=document.createElement('div')
      contato.setAttribute('class','contato')

      const idContato=document.createElement('p')
        idContato.innerHTML=data[0].id;
        idContato.setAttribute("class","c1");
      contato.appendChild(idContato)

    const nomeContato=document.createElement('p')
      nomeContato.innerHTML=data[0].nome;
      nomeContato.setAttribute("class","c2");
    contato.appendChild(nomeContato)

    const celularContato=document.createElement('p')
      celularContato.innerHTML=data[0].celular;
      celularContato.setAttribute("class","c3");
    contato.appendChild(celularContato)

    const emailContato=document.createElement('p')
      emailContato.innerHTML=data[0].email;
      emailContato.setAttribute("class","c4");
    contato.appendChild(emailContato)

    const dtnascContato=document.createElement('p')
      dtnascContato.innerHTML=data[0].dtnasc;
      dtnascContato.setAttribute("class","c5");

    contato.appendChild(dtnascContato)
    resPesquisa.appendChild(contato)
    }else{
      const contato=document.createElement('div')
      contato.setAttribute('class','contato')

      const idContato=document.createElement('p')
        idContato.innerHTML=data[0].id;
        idContato.setAttribute("class","c1");
      contato.appendChild(idContato)

    const nomeContato=document.createElement('p')
      nomeContato.innerHTML=data[0].nome;
      nomeContato.setAttribute("class","c2");
    contato.appendChild(nomeContato)

    const celularContato=document.createElement('p')
      celularContato.innerHTML=data[0].celular;
      celularContato.setAttribute("class","c3");
    contato.appendChild(celularContato)

    const emailContato=document.createElement('p')
      emailContato.innerHTML=data[0].email;
      emailContato.setAttribute("class","c4");
    contato.appendChild(emailContato)

    const dtnascContato=document.createElement('p')
      dtnascContato.innerHTML=data[0].dtnasc;
      dtnascContato.setAttribute("class","c5");
      
    contato.appendChild(dtnascContato)
    resPesquisa.appendChild(contato)
    }

    if(WastheResearchDone==true){
      btnlimpar(resPesquisa)
    }

  })
});

