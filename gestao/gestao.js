
fetch('http://localhost:8081/idC', {
  method: 'POST', // Especifica o método POST
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data =>{
    const infoCtt=document.getElementById('infoCtt')
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
  infoCtt.appendChild(contato)

})

