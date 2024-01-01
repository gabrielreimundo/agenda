const btnform=document.getElementById('botoesForm')


//coletando e enviando
btnform.addEventListener('submit',(e)=>{
    e.preventDefault();
    var id=document.getElementById('f_id').value;
    var nome=document.getElementById('f_nome').value;
    var celular=document.getElementById('inp_custo').value;
    var preço=document.getElementById('inp_preço').value;
    var Qtd_estoque=document.getElementById('inp_Qestoque').value;
    var codigo=document.getElementById('inp_codigo').value;

    fetch('http://localhost:8081/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({nome: nome, custo: custo, preço: preço, Qtd_estoque: Qtd_estoque, codigo: codigo}),
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((error) => {
        console.error('Erro:', error);
      });
    
})