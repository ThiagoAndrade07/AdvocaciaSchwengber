const icnCardapio    = document.querySelector(".icn-cardapio");
        const icnCardapioJS  = document.querySelector(".icn-cardapio-js");
        const ulHeader       = document.querySelector(".ul-header");
  
        function abrirMenu() {
          icnCardapio.style.display = "none";     
          icnCardapioJS.style.display = "block";   
          ulHeader.style.display = "block";        
        }
  
        function fecharMenu() {
          icnCardapioJS.style.display = "none"; 
          ulHeader.style.display = "none";   
          icnCardapio.style.display = "block";    
        }
  
        icnCardapio.addEventListener("click", abrirMenu);
        icnCardapioJS.addEventListener("click", fecharMenu);




// ANIMAÇÃO NOSSAS AREAS
// Seletor de TODOS os elementos que terão efeito (pode ser .fade-in, .fade-left etc.)
const targets = document.querySelectorAll('.fade-in, .fade-left, .fade-down');

// Configurações do Intersection Observer
const observerOptions = {
  root: null,     // Usa o viewport atual como "container"
  threshold: 0.1  // Quando 10% do elemento estiver visível na tela
};

// Função que o observer chamará a cada mudança de interseção
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    // Se o elemento estiver visível (intersecting = true)
    if (entry.isIntersecting) {
      // Adiciona a classe .show para iniciar a animação
      entry.target.classList.add('show');
      // Se quiser que anime apenas uma vez, parar de observar
      observer.unobserve(entry.target);
    }
  });
}

// Criando o IntersectionObserver
const observer = new IntersectionObserver(handleIntersection, observerOptions);

// Ativando a observação para cada elemento
targets.forEach((target) => {
  observer.observe(target);
});
