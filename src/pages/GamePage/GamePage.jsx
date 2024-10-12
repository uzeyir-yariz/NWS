import { useState, useEffect } from "react";

// Rastgele sayı üretme fonksiyonu
const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const GamePage = () => {
  const quest_number = 20;
  const [number1, setNumber1] = useState(generateRandomNumber(1, 10));
  const [number2, setNumber2] = useState(generateRandomNumber(1, 10));
  const [sum, setSum] = useState(number1 + number2);
  const [choices, setChoices] = useState([]);
  const [progress, setProgress] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false); // Oyun bitiş durumu

  useEffect(() => {
    setSum(number1 + number2);
  }, [number1, number2]);

  useEffect(() => {
    const correctAnswer = sum;
    const wrongAnswers = [];

    // todo: burada for döngüsü kullanmayı dene
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
    // ! ! ! ! ! bundan sonra ki kodu değiştirme ! ! ! ! !

    const allChoices = [...wrongAnswers, correctAnswer].sort(
      () => Math.random() - 0.5 // todo: Fisher-Yates algoritması dene
    );
    setChoices(allChoices);
  }, [sum]);

  const handleUserChoice = (choice) => {
    // todo: bu kısmı success yada fail olarak değiştirme bunu true yada false olarak ayarla
    if (choice === sum) {
      setProgress([...progress, "success"]);
    } else {
      setProgress([...progress, "fail"]);
    }

    // 20 soruya ulaşıldığında oyun biter
    if (progress.length + 1 === quest_number) {
      setIsGameOver(true);
    } else { // todo: kodu kısalt
      const newNumber1 = generateRandomNumber(1, 10);
      const newNumber2 = generateRandomNumber(1, 10);
      setNumber1(newNumber1);
      setNumber2(newNumber2);
    }
  };

  const correctAnswers = progress.filter(
    (status) => status === "success"
  ).length;
  const incorrectAnswers = progress.length - correctAnswers;

  return (
    <div className="center">
      {isGameOver ? (
        <div className="text-center d-flex flex-column gap-4">
          <h1>Oyun Bitti!</h1>
          <p>Doğru Cevaplar: {correctAnswers}</p>
          <p>Yanlış Cevaplar: {incorrectAnswers}</p>
          <button className="btn btn-success" onClick={() => window.location.reload()}>Tekrar Oyna</button>
        </div>
      ) : (
        <div className="text-center d-flex flex-column gap-4">
          <h5 className="display-5 fw-bolder">{`${number1} + ${number2} = ?`}</h5>

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
                  color: status === "success" ? "green" : "red",
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
