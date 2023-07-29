let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
//1,000 (mil) milisegundos es un segundo
  .pauseFor(1000)
  .typeString('Stephany Juárez')
  .pauseFor(300)
  .deleteChars(10)
  .start();