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

  // ABRI E FECHAR ACCORDION --------------------------------------    
  const triggers = document.querySelectorAll(".accordion-trigger");

  triggers.forEach(trigger => {
    trigger.addEventListener("click", function () {
      const item    = this.parentNode;   // .accordion-item
      const iconImg = this.querySelector(".accordion-icon img");
  
      // Verifica se já está aberto
      if (item.classList.contains("open")) {
        // FECHAR
        item.classList.remove("open");
        iconImg.style.transform = "rotate(0deg)";
      } else {
        // ABRIR
        item.classList.add("open");
        iconImg.style.transform = "rotate(180deg)";
      }
    });
  });
  
// FORMULARIO DE CONTATO (FORMATANDO)
const inputTelefone = document.getElementById("telefone");

function formatarTelefone(value) {
  
  let v = value.replace(/\D/g, ""); 

  if (v.length <= 2) {
    v = v.replace(/^(\d{0,2})/, "($1");
  } else if (v.length <= 3) {
    v = v.replace(/^(\d{2})(\d{0,1})/, "($1) $2");
  } else if (v.length <= 7) {
    v = v.replace(/^(\d{2})(\d)(\d{0,4})/, "($1) $2 $3");
  } else {
    v = v.replace(/^(\d{2})(\d)(\d{4})(\d{0,4}).*/, "($1) $2 $3-$4");
  }

  return v;
}

inputTelefone.addEventListener("input", (e) => {
  e.target.value = formatarTelefone(e.target.value);
});

// ENVIAR DADOS DO FORMULARIO 
const form = document.querySelector(".contato-form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const nomeVal     = document.getElementById("nome").value.trim();
  const telefoneVal = document.getElementById("telefone").value.trim();
  const emailVal    = document.getElementById("email").value.trim();

  let mensagem = `Olá, gostaria de mais informações.(Direito Previdenciário)\n\n`;
  mensagem += `*Nome:* ${nomeVal}\n`;
  mensagem += `*Telefone:* ${telefoneVal}\n`;
  mensagem += `*E-mail:* ${emailVal}`;

  const numeroDestino = "5565999915441";

  const urlWhats = `https://api.whatsapp.com/send?phone=${numeroDestino}&text=${encodeURIComponent(mensagem)}`;

  window.open(urlWhats, "_blank");
});

// FAQ

const btnVerMais     = document.querySelector(".faq-toggle-btn");
const extraFaqItem   = document.querySelector(".faq-item-extra");
const icon           = document.querySelector(".faq-icon");
const btnVerMaisText = document.querySelector(".faq-btn-text");

let perguntasVisiveis = false;

btnVerMais.addEventListener("click", () => {
  if (!perguntasVisiveis) {
    // ABRIR
    extraFaqItem.classList.add("open");
    btnVerMaisText.textContent = "Ver Menos Perguntas"; 
    icon.style.transform = "rotate(180deg)";  
    perguntasVisiveis = true;
  } else {
    // FECHAR
    extraFaqItem.classList.remove("open");
    btnVerMaisText.textContent = "Ver Mais Perguntas";
    icon.style.transform = "rotate(0deg)";    
    perguntasVisiveis = false;
  }
});

