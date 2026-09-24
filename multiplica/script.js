// ====== Seleção de elementos do DOM ======
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close-btn');
const btnModais = document.querySelectorAll('.btn-modal');
const btnLikes = document.querySelectorAll('.btn-like');
const imgWrappers = document.querySelectorAll('.img-wrapper');

// ====== Revelar VERDADE/MENTIRA ao clicar na imagem ======
imgWrappers.forEach(function (wrapper) {
  wrapper.addEventListener('click', function () {
    // Alterna a classe .revealed (mostra o selo e o texto explicativo)
    wrapper.classList.toggle('revealed');
  });
});

// ====== Abrir o modal ao clicar em "Saiba mais" ======
btnModais.forEach(function (btn) {
  btn.addEventListener('click', function () {
    // Preenche o título e o texto do modal com os dados do botão clicado
    modalTitle.textContent = btn.getAttribute('data-title');
    modalText.textContent = btn.getAttribute('data-text');

    // Remove a classe .hidden para exibir o modal
    modal.classList.remove('hidden');
  });
});

// ====== Fechar o modal pelo botão "X" ======
closeBtn.addEventListener('click', function () {
  modal.classList.add('hidden');
});

// ====== Fechar o modal clicando fora do conteúdo ======
modal.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});

// ====== Fechar o modal ao pressionar a tecla ESC ======
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
  }
});

// ====== Sistema de curtidas ======
btnLikes.forEach(function (btn) {
  btn.addEventListener('click', function () {
    // Lê o valor atual do atributo data-likes
    let likes = parseInt(btn.getAttribute('data-likes'));

    // Alterna entre curtir e descurtir
    if (btn.classList.contains('liked')) {
      likes--;
      btn.classList.remove('liked');
    } else {
      likes++;
      btn.classList.add('liked');
    }

    // Atualiza o atributo data-likes
    btn.setAttribute('data-likes', likes);

    // Atualiza o texto do contador no span.like-count
    btn.querySelector('.like-count').textContent = likes;
  });
});