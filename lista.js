var botaoenter = document.getElementById('enter');
var input = document.getElementById('userInput');
var ul = document.getElementById('ul');
var li = document.getElementsByTagName('li');

/////para controlar os caracters////
function inputlength() {
  return input.value.length;
}
//////função para criar elemento///
function criarelementolista() {
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = '';

  function tarefaselecionada() {
    li.classList.toggle('selecionado');
  }
  li.addEventListener('click', tarefaselecionada);
  var dBtn = document.createElement('Button');
  dBtn.appendChild(document.createTextNode('Excluir'));
  li.appendChild(dBtn);
  dBtn.addEventListener('click', deletar);
  function deletar() {
    li.classList.add('delete');
  }
}

function addaf() {
  if (inputlength() > 0) {
    criarelementolista();
  }
}
function addkey() {
  if (inputlength() > 0 && event.which === 13) {
    criarelementolista();
  }
}
botaoenter.addEventListener('click', addaf);
input.addEventListener('keypress', addkey);
