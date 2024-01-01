const btnform=document.getElementById('btnform')


//coletando e enviando
btnform.addEventListener('click',(e)=>{
    e.preventDefault();
    var id=document.getElementById('f_id').value;
    var nome=document.getElementById('f_nome').value;
    var celular=document.getElementById('f_celular').value;
    var email=document.getElementById('f_email').value;
    var dtnasc=document.getElementById('f_dtnasc').value;

    fetch('http://localhost:8081/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id: id, nome: nome, celular: celular, email: email, dtnasc: dtnasc}),
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((error) => {
        console.error('Erro:', error);
      });
    
})