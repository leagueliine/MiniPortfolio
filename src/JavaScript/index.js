 let aba = document.getElementsByClassName('aba');
 let conteudo = document.getElementsByClassName('info');
 let texto = document.getElementById('spanTitulo');

let typeWriter = function (elemento) {
  const textArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textArray.forEach((letra, i) => {
    setTimeout( () => elemento.innerHTML += letra, 60 * i)
  });
 };

 typeWriter(texto)

  let selectSession0 = function(){
    aba[1].classList.add('selecionada')
    conteudo[1].classList.add('selecionada')
    if(aba){
      aba[0].classList.contains('selecionada') &&
      conteudo[0].classList.contains('selecionada')
    }
    aba[0].classList.remove('selecionada')
    conteudo[0].classList.remove('selecionada')
  };

  let selectSession1 = function(){
    aba[0].classList.add('selecionada')
    conteudo[0].classList.add('selecionada')
    if(aba){
      aba[1].classList.contains('selecionada') &&
      conteudo[1].classList.contains('selecionada')
    }
    aba[1].classList.remove('selecionada')
    conteudo[1].classList.remove('selecionada')
  };

  aba[1].addEventListener('click', function(){
    selectSession0();
  });
 
  aba[0].addEventListener('click', function(){
    selectSession1();
  });
 

