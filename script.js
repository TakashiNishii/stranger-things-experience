// Usar GSAP para scroll suave / animações / animações com rolagem
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

ScrollSmoother.create({
  smooth: 1.5,
  effects: true
})

