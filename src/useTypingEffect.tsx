import { useEffect, useState } from 'react';

type TypingEffectProps = {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
};

export const useTypingEffect = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
}: TypingEffectProps): JSX.Element => {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const textToType = texts[textIndex];

    if (isTyping) {
      if (currentText !== textToType) {
        timeout = setTimeout(() => {
          setCurrentText((prevText) => {
            const remainingText = textToType.slice(0, prevText.length + 1);
            return remainingText;
          });
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
          setIsDeleting(true);
        }, delayBetweenTexts);
      }
    } else if (isDeleting) {
      if (currentText !== '') {
        timeout = setTimeout(() => {
          setCurrentText((prevText) => {
            const remainingText = prevText.slice(0, prevText.length - 1);
            return remainingText;
          });
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);

  const pipeAnimationStyle = {
    animation: 'blink-animation 1s infinite',
    opacity: isTyping || isDeleting ? 1 : 0,
    transition: 'opacity 0.5s ease-in-out',
  };

  return (
    <span>
      {currentText}
      <span style={pipeAnimationStyle} className="pipe-animation">|</span>
      <style>
        {`
          @keyframes blink-animation {
           to  {
           
            opacity:0;
            }
            from {
           
              opacity:1;
            }
          }

          .pipe-animation {
            font-weight: 600;
            ;
          }
        `}
      </style>
    </span>
  );
};




























