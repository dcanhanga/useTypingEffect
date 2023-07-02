import { useTypingEffect } from './useTypingEffect';

export const TypingComponent = () => {
  const texts = [
    "Sou um desenvolvedor web apaixonado por criar experiências digitais incríveis.",
    "Com conhecimentos em HTML, CSS e JavaScript, estou sempre em busca de aprender novas tecnologias.",
    "Adoro enfrentar desafios e encontrar soluções criativas para problemas complexos.",
    "Estou sempre aberto a novos projetos e colaborações interessantes.",
    "Seja bem-vindo ao meu website. Vamos construir coisas incríveis juntos!"
  ];

  const currentText = useTypingEffect({ texts });

  return (
    <div>
      <h1>
      Olá, sou Domingos Canhanga. <br />
      {currentText}
      </h1>
    </div>
  );
}

