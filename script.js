// Usar GSAP para scroll suave / animações / animações com rolagem
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

ScrollSmoother.create({
  smooth: 1.5,
  effects: true
})

// Animações de entrada
gsap.from(".hero", {
  opacity: 0,
  duration: 1
})

gsap.from("picture:nth-child(2)", {
  y: 60,
  duration: 1,
})

gsap.from("picture:nth-child(1)", {
  y: -60,
  duration: 1,
})


// Animações Card
// ScrollTrigger serve para ativar animações com a rolagem
gsap.from(".card", {
  opacity: 0,
  filter: "blur(10px)",
  stagger: .3,
  scrollTrigger: {
    trigger: ".cards",
    // markers: true, O "markers: true" serve para mostrar os marcadores de início e fim do ScrollTrigger
    start: "0% 80%", // quando 80% do viewport alcançar 0% do gatilho
    end: "100% 70%", // quando 70% do viewport alcançar 100% do gatilho
    scrub: true, // animação vinculada à rolagem e adicionar um numero inves de true faz a animação mais lenta no maximo colocar 3
  }
})

gsap.from(".secaoObrigado ul li", {
  opacity: 0,
  x: 40,
  filter: "blur(10px)",
  stagger: .1,
  scrollTrigger: {
    trigger: ".secaoObrigado ul",
    start: "0% 80%",
    end: "100% 50%",
    scrub: true,
  }
})

// Animações Footer
gsap.from("footer", {
  y: "-30%",
  immediateRender: false, // evita conflitos com o ScrollSmoother
  scrollTrigger: {
    trigger: "footer",
    scrub: true,
    invalidateOnRefresh: true, // garante que a animação seja recalculada ao redimensionar a janela
    end: "100% 100%",
  }
})

// Letras Surgindo
// Usar SplitText para dividir o texto em letras
const grupoTextoSplit = document.querySelectorAll(".textoSplit");

// Anima cada elemento do agrupamento para garantir que todos sejam animados sem estar ligado um ao outro
grupoTextoSplit.forEach((textoUnicoSplit) => {
  const split = SplitText.create(textoUnicoSplit, {
    type: "lines, words, chars", // dividir em palavras e caracteres
    mask: "lines" // aplicar máscara para animação
  });

  gsap.from(split.chars, {
    y: 40,
    opacity: 0,
    duration: .3,
    stagger: .03,
    scrollTrigger: {
      trigger: textoUnicoSplit,
    }
  });
})




// Pré Loader