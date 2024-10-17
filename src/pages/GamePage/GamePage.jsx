import { useState, useEffect } from "react";

// Rastgele sayı üretme fonksiyonu
const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Dizi karıştırma fonksiyonu
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) { // Buradaki hata düzeltildi
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const GamePage = () => {
  const quest_number = 20;
  const [number1, setNumber1] = useState(generateRandomNumber(1, 10));
  const [number2, setNumber2] = useState(generateRandomNumber(1, 10));
  const operation = "*"; // İşlem türü
  const [prevNumbers, setPrevNumbers] = useState({ prevNumber1: null, prevNumber2: null }); // Önceki sayılar
  const [sum, setSum] = useState(number1 + number2);
  const [choices, setChoices] = useState([]);
  const [progress, setProgress] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false); // Oyun bitiş durumu

  useEffect(() => {
    // Doğru cevabı güncelle
    if (operation === "+") {
      setSum(number1 + number2);
    } else {
      setSum(number1 * number2);
    }
  }, [number1, number2, operation]);

  useEffect(() => {
    const correctAnswer = sum;
    const wrongAnswers = [];

    while (wrongAnswers.length < 3) {
      const wrongAnswer = generateRandomNumber(
        correctAnswer - 3,
        correctAnswer + 3
      );
      if (
        wrongAnswer !== correctAnswer &&
        !wrongAnswers.includes(wrongAnswer)
      ) {
        wrongAnswers.push(wrongAnswer);
      }
    }

    setChoices(shuffle([...wrongAnswers, correctAnswer]));
  }, [sum]);

  const generateNewNumbers = (prevNumber1, prevNumber2) => {
    let newNumber1, newNumber2;
    do {
      newNumber1 = generateRandomNumber(1, 10);
      newNumber2 = generateRandomNumber(1, 10);
    } while (
      (newNumber1 === prevNumber1 && newNumber2 === prevNumber2) || // Aynı kombinasyon
      (newNumber1 === prevNumber2 && newNumber2 === prevNumber1) // Ters kombinasyon
    );
    return { newNumber1, newNumber2 };
  };

  const handleUserChoice = (choice) => {
    if (choice === sum) {
      setProgress([...progress, true]);
    } else {
      setProgress([...progress, false]);
    }

    if (progress.length + 1 === quest_number) {
      setIsGameOver(true);
    } else {
      const { newNumber1, newNumber2 } = generateNewNumbers(
        prevNumbers.prevNumber1,
        prevNumbers.prevNumber2
      );

      setNumber1(newNumber1);
      setNumber2(newNumber2);

      // Önceki sayıları güncelle
      setPrevNumbers({ prevNumber1: newNumber1, prevNumber2: newNumber2 });
    }
  };

  const correctAnswers = progress.filter((status) => status === true).length;
  const incorrectAnswers = progress.length - correctAnswers;

  return (
    <div className="center">
      {isGameOver ? (
        <div className="text-center d-flex flex-column gap-4">
          <h1>Oyun Bitti!</h1>
          <p>Doğru Cevaplar: {correctAnswers}</p>
          <p>Yanlış Cevaplar: {incorrectAnswers}</p>
          <button
            className="btn btn-success"
            onClick={() => window.location.reload()}
          >
            Tekrar Oyna
          </button>
        </div>
      ) : (
        <div className="text-center d-flex flex-column gap-4">
          <h5 className="display-5 fw-bolder">{`${number1} ${operation === "*" ? "." : operation} ${number2} = ?`}</h5>

          <div className="btn-group">
            {choices.map((choice, index) => (
              <button
                className="btn btn-primary btn-lg p-4"
                key={index}
                onClick={() => handleUserChoice(choice)}
              >
                {choice}
              </button>
            ))}
          </div>

          {/* Footer: Progress Bar */}
          <div>
            {progress.map((status, index) => (
              <span
                key={index}
                style={{
                  color: status ? "green" : "red",
                }}
              >
                #
              </span>
            ))}

            {[...Array(quest_number - progress.length)].map((_, index) => (
              <span key={index}>#</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePage;
