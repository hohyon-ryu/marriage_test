// Shuffle function to randomize array order
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function loadQuiz() {
  const quizElement = document.getElementById("quiz");
  let quizHTML = "";

  quizData.questions.forEach((question, index) => {
    // Shuffle the options for each question
    const shuffledOptions = shuffleArray([...question.options]);
    
    quizHTML += `
            <div class="question">
                <h3>${index + 1}. ${question.question}</h3>
                <div class="options">
                    ${shuffledOptions
                      .map(
                        (option) => `
                        <div>
                            <input type="radio" name="q${index}" id="q${index}o${option.id}" value="${option.score}" required>
                            <label for="q${index}o${option.id}">${option.text}</label>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            </div>
        `;
  });

  quizElement.innerHTML = quizHTML;

  // Add event listeners to radio buttons
  const radioButtons = quizElement.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", () => {
      // This will trigger the CSS rule to bold the label
      radio.checked = true;
    });
  });
}

function calculateScore(formData) {
  let score = 0;
  const selectedScores = [];

  quizData.questions.forEach((_, index) => {
    const selectedScore = parseInt(formData.get(`q${index}`));
    score += selectedScore;
    selectedScores.push(selectedScore);
  });

  // Scale the score to 0-100
  const maxPossibleScore = quizData.questions.length * 4; // Assuming max score per question is 4
  const scaledScore = Math.round((score / maxPossibleScore) * 100);

  return { score: scaledScore, selectedScores };
}

function showResults(score, selectedScores) {
  const resultsElement = document.getElementById("results");
  const scoreElement = document.getElementById("score");
  const interpretationElement = document.getElementById("interpretation");
  const detailedResultsElement = document.getElementById("detailed-results");
  const temperatureElement = document.getElementById("temperature");

  resultsElement.style.display = "block";
  scoreElement.innerText = score;

  // Update thermometer
  temperatureElement.style.height = `${score}%`;

  let interpretation = "";
  if (quizData.testName === "Christian Love and Values in Relationships Quiz") {
    if (score >= 85) {
      interpretation =
        "Very high level of Christian value-based communication: You consistently apply Christian principles in your marriage. You excel in making decisions and communicating based on biblical wisdom.";
    } else if (score >= 70) {
      interpretation =
        "Stable Christian value-based communication: You generally apply Christian principles in your marriage. Deeper biblical understanding and application in some areas could be beneficial.";
    } else if (score >= 50) {
      interpretation =
        "Need for improvement in applying Christian values: There is room for more consistent application of Christian principles in your marriage. Strengthening your faith foundation through Bible study and prayer could be helpful.";
    } else {
      interpretation =
        "Need for improvement in understanding and applying Christian values: You seem to have difficulty understanding and applying Christian principles in your marriage. Talking with a pastor or Christian counselor might be beneficial.";
    }
  } else {
    if (score >= 85) {
      interpretation = "매우 균형 잡힌 관계 대처 능력";
    } else if (score >= 70) {
      interpretation = "안정적인 관계 대처 능력";
    } else if (score >= 50) {
      interpretation = "관계 대처 능력 향상 필요";
    } else {
      interpretation = "상당한 관계 스킬 개선 필요";
    }
  }

  interpretationElement.innerText = interpretation;

  let detailedHTML = "";
  quizData.questions.forEach((question, index) => {
    const selectedOption = question.options.find(
      (option) => option.score === selectedScores[index]
    );
    const scaledOptionScore = Math.round((selectedOption.score / 4) * 100); // Scale option score to 0-100
    detailedHTML += `
            <div class="result-item">
                <h4 data-score="${scaledOptionScore}">${
      quizData.testName === "Christian Love and Values in Relationships Quiz"
        ? `Question`
        : `질문`
    } ${index + 1}: ${scaledOptionScore} ${
      quizData.testName === "Christian Love and Values in Relationships Quiz"
        ? `points`
        : `점`
    }</h4>
                <p>${question.question}</p>
                <p>${
                  quizData.testName ===
                  "Christian Love and Values in Relationships Quiz"
                    ? `Your choice`
                    : `당신의 선택`
                }: ${selectedOption.text}</p>
                <p>${
                  quizData.testName ===
                  "Christian Love and Values in Relationships Quiz"
                    ? `Explanation`
                    : `설명`
                }: ${selectedOption.explanation}</p>
            </div>
        `;
  });

  detailedResultsElement.innerHTML = detailedHTML;
}

document.addEventListener("DOMContentLoaded", () => {
  loadQuiz();

  const form = document.getElementById("quiz-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const { score, selectedScores } = calculateScore(formData);
    showResults(score, selectedScores);
    document.getElementById("submit").style.display = "none";
  });
});
