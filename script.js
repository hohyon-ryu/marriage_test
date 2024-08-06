function loadQuiz() {
    const quizElement = document.getElementById('quiz');
    let quizHTML = '';

    quizData.questions.forEach((question, index) => {
        quizHTML += `
            <div class="question">
                <h3>${index + 1}. ${question.question}</h3>
                <div class="options">
                    ${question.options.map((option) => `
                        <div>
                            <input type="radio" name="q${index}" id="q${index}o${option.id}" value="${option.score}" required>
                            <label for="q${index}o${option.id}">${option.text}</label>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });

    quizElement.innerHTML = quizHTML;

    // Add event listeners to radio buttons
    const radioButtons = quizElement.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
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

    return { score, selectedScores };
}

function showResults(score, selectedScores) {
    const resultsElement = document.getElementById('results');
    const scoreElement = document.getElementById('score');
    const interpretationElement = document.getElementById('interpretation');
    const detailedResultsElement = document.getElementById('detailed-results');

    resultsElement.style.display = 'block';
    scoreElement.innerText = score;

    let interpretation = '';
    if (score >= 55) { // 80% of 68
        interpretation = '매우 균형 잡힌 관계 대처 능력';
    } else if (score >= 41) { // 60% of 68
        interpretation = '안정적인 관계 대처 능력';
    } else if (score >= 27) { // 40% of 68
        interpretation = '관계 대처 능력 향상 필요';
    } else {
        interpretation = '상당한 관계 스킬 개선 필요';
    }

    interpretationElement.innerText = interpretation;

    let detailedHTML = '';
    quizData.questions.forEach((question, index) => {
        const selectedOption = question.options.find(option => option.score === selectedScores[index]);
        detailedHTML += `
            <div class="result-item">
                <h4 data-score="${selectedOption.score}">질문 ${index + 1}: ${selectedOption.score}점</h4>
                <p>${question.question}</p>
                <p>당신의 선택: ${selectedOption.text}</p>
                <p>설명: ${selectedOption.explanation}</p>
            </div>
        `;
    });

    detailedResultsElement.innerHTML = detailedHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    loadQuiz();

    const form = document.getElementById('quiz-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const { score, selectedScores } = calculateScore(formData);
        showResults(score, selectedScores);
        document.getElementById('submit').style.display = 'none';
    });
});