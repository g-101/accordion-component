// retorna uma lista dos elementos com a class icon

const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
  //pecorre a lista e armazena o elemento pai de cada icon
  // nesse caso o elemento pai é a div .item
  const item = icon.parentElement;

  icon.addEventListener('click', function () {
    // A cada clique vai verificar se existe active,
    // se não existir ele força e coloca a classe active.
    item.classList.toggle('active');
  });
});
