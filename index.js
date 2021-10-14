//Essa função trabalha a troca de imagens de uma lâmpada, que gera a sensação de que a lâmpada está sendo ligada e desligada.
function trocar(filelamp){
    document.querySelector('.imagem').setAttribute('src', 'images/'+filelamp);
}