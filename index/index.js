const cabecalho=document.querySelector('#cabecalho')
const menu=document.querySelector('#menu')
const btn_home=document.querySelector('#btn_home')
const btn_novo=document.querySelector('#btn_novo')
const btn_pesquisar=document.querySelector('#btn_pesquisar')
const btn_gestao=document.querySelector('#btn_gestao')
const btn_sobre=document.querySelector('#btn_sobre')
const principal=document.querySelector('#principal')

btn_home.addEventListener("click",(evt)=>{
    selecionarAba(evt.target)
    window.open("../home/home.html","if_principal")
})
btn_novo.addEventListener("click",(evt)=>{
    selecionarAba(evt.target)
    window.open("../novo/novo.html","if_principal")
})
btn_sobre.addEventListener("click",(evt)=>{
    selecionarAba(evt.target)
    window.open("../sobre/sobre.html","if_principal")
})

const selecionarAba=(el)=>{
    const abas=[...document.querySelectorAll(".aba")]
    abas.forEach(e=>{
        e.classList.remove("abaSelecionada")
    })
    el.classList.add("abaSelecionada")
}