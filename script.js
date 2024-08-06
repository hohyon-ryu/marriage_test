let quizData;

async function fetchQuizData() {
    try {
        const response = await fetch('/Users/will_ryu/workspace/personal/data.json');
        const data = await response.json();
        return data.questions;
    } catch (error) {
        console.error('Error fetching quiz data:', error);
        return [];
    }
}

async function loadQuiz() {
    quizData = await fetchQuizData();
    const quizElement = document.getElementById('quiz');
    let quizHTML = '';

    quizData.forEach((question, index) => {
        quizHTML += `
            <div class="question">
                <h3>${question.question}</h3>
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
}

function calculateScore(formData) {
    let score = 0;
    const selectedScores = [];

    quizData.forEach((_, index) => {
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
    if (score >= 65) {
        interpretation = '매우 균형 잡힌 관계 대처 능력';
    } else if (score >= 50) {
        interpretation = '안정적인 관계 대처 능력';
    } else if (score >= 35) {
        interpretation = '관계 대처 능력 향상 필요';
    } else {
        interpretation = '상당한 관계 스킬 개선 필요';
    }

    interpretationElement.innerText = interpretation;

    let detailedHTML = '';
    quizData.forEach((question, index) => {
        const selectedOption = question.options.find(option => option.score === selectedScores[index]);
        detailedHTML += `
            <div class="result-item">
                <h4>질문 ${index + 1}:</h4>
                <p>${question.question}</p>
                <p>당신의 선택: ${selectedOption.text}</p>
                <p>점수: ${selectedOption.score}</p>
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