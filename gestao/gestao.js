

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

  dgvDados.appendChild(dgvLinha)
}

fetch('http://localhost:8081/dados')
.then(res => res.json())
.then(res => {
  res.forEach(el => {
    createDataGridView(el,dgvDados)
    
  })
})