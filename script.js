/*const pergunta = document.getElementById('pergunta'); /*esta pegando o elemento do html com o id pergunta
const resposta = document.getElementById('informacoes__resposta'); /*esta pegando o elemento do html com o id resposta

pergunta.addEventListener('click', () => { /* função que executa algo depois de certa ação ocorrer, onde ocorreu a ação? no pergunta
    if (informacoes__resposta.style.display === 'block') {
        informacoes__resposta.style.display = 'none'; /*se ja estuver clicado, vai sumir
    } else {
        informacoes__resposta.style.display = 'block'; /* se ainda n ta aparecendo, vai aparecer 
    }
});

document.addEventListener('click', (event) => { /* document -> se refere a todo o documento html
    if (event.target !== pergunta && event.target !== resposta) {
        informacoes__resposta.style.display = 'none';
    }
}); */

const pergunta = document.querySelectorAll('.informacoes__pergunta'); /*esta pegando o elementos do html que tem .informacoes__pergunta como classe*/
const resposta = document.querySelectorAll('.informacoes__resposta'); 

pergunta.forEach((paragraph, index) => { /* vai criar um indice para cada classe com o mesmo nome, lembrando que as classes foram criadas em paragrafos, por isso tá 'paragraph'*/
    paragraph.addEventListener('click', () => { /* função que executa algo depois de certa ação ocorrer, onde ocorreu a ação? no paragrafo. qual foi a acao? um clique*/
        if (resposta[index].style.display === 'block') {
            resposta[index].style.display = 'none'; /*se ja estiver clicado, vai sumir*/
        } else {
            resposta[index].style.display = 'block'; /* se ainda n ta aparecendo, vai aparecer */
        }
    });
});

document.addEventListener('click', (event) => { /* document -> se refere a todo o documento html*/
    for (let i=0; i < pergunta.length; i++){ /* teve que criar um fro para acessar cada elemento com a mesma classe, um por um*/
        if (event.target !== pergunta[i] && event.target !== resposta[i]) {
            resposta[i].style.display = 'none';
        }
    }
/* essa segunda parte ta fazendo que: quando houver qualquer clique que não for na pergunta ou na resposta, vai sumir a informaçao. ou seja qualquer clique na tela, exceto nesses dois lugares, vai fazer a informação sumir*/
});