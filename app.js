const LETTERS = ["A", "B", "C", "D"];

const MODES = {
    adult: {
        title: "Adult knowledge test",
        detail: "36 questions · miss no more than 6",
        count: 36,
        passCount: 30
    },
    teen: {
        title: "Permit test (under 18)",
        detail: "46 questions · miss no more than 8",
        count: 46,
        passCount: 38
    },
    quick: {
        title: "Quick practice",
        detail: "20 questions · 80% to pass",
        count: 20,
        passCount: 16
    }
};

const state = {
    mode: "adult",
    questions: [],
    index: 0,
    answers: [],
    locked: false
};

const els = {
    startScreen: document.getElementById("start-screen"),
    quizScreen: document.getElementById("quiz-screen"),
    resultsScreen: document.getElementById("results-screen"),
    reviewScreen: document.getElementById("review-screen"),
    bankCount: document.getElementById("bank-count"),
    modeButtons: document.querySelectorAll("[data-mode]"),
    startBtn: document.getElementById("start-btn"),
    endBtn: document.getElementById("end-btn"),
    progressFill: document.getElementById("progress-fill"),
    questionNumber: document.getElementById("question-number"),
    scoreDisplay: document.getElementById("score-display"),
    categoryTag: document.getElementById("category-tag"),
    questionText: document.getElementById("question-text"),
    optionsContainer: document.getElementById("options-container"),
    feedback: document.getElementById("feedback-container"),
    feedbackMessage: document.getElementById("feedback-message"),
    explanation: document.getElementById("explanation"),
    nextBtn: document.getElementById("next-btn"),
    submitBtn: document.getElementById("submit-btn"),
    resultIcon: document.getElementById("result-icon"),
    resultTitle: document.getElementById("result-title"),
    scoreCircle: document.getElementById("score-circle"),
    finalScore: document.getElementById("final-score"),
    resultMessage: document.getElementById("result-message"),
    correctCount: document.getElementById("correct-count"),
    incorrectCount: document.getElementById("incorrect-count"),
    totalCount: document.getElementById("total-count"),
    reviewBtn: document.getElementById("review-btn"),
    retryBtn: document.getElementById("retry-btn"),
    homeBtn: document.getElementById("home-btn"),
    reviewContainer: document.getElementById("review-container"),
    backToResultsBtn: document.getElementById("back-to-results-btn"),
    retryFromReviewBtn: document.getElementById("retry-from-review-btn")
};

function shuffle(list) {
    const copy = list.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function prepareQuestion(item) {
    const order = item.options.map((_, index) => index);
    const shuffled = shuffle(order);
    return {
        question: item.question,
        category: item.category,
        explanation: item.explanation,
        options: shuffled.map((index) => item.options[index]),
        correct: shuffled.indexOf(item.correct)
    };
}

function showScreen(id) {
    document.querySelectorAll(".screen").forEach((screen) => {
        screen.classList.toggle("active", screen.id === id);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function correctSoFar() {
    return state.answers.filter((answer) => answer && answer.isCorrect).length;
}

function startTest() {
    const mode = MODES[state.mode];
    const count = Math.min(mode.count, QUESTION_BANK.length);
    state.questions = shuffle(QUESTION_BANK).slice(0, count).map(prepareQuestion);
    state.index = 0;
    state.answers = new Array(count).fill(null);
    state.locked = false;
    showScreen("quiz-screen");
    renderQuestion();
}

function renderQuestion() {
    const current = state.questions[state.index];
    const total = state.questions.length;
    const progress = (state.index / total) * 100;

    els.progressFill.style.width = `${progress}%`;
    els.questionNumber.textContent = `Question ${state.index + 1} of ${total}`;
    els.scoreDisplay.textContent = `Correct: ${correctSoFar()}`;
    els.categoryTag.textContent = current.category;
    els.questionText.textContent = current.question;
    els.optionsContainer.innerHTML = "";
    els.feedback.classList.add("hidden");
    els.feedback.classList.remove("correct", "incorrect");
    els.nextBtn.classList.add("hidden");
    els.submitBtn.classList.add("hidden");
    state.locked = false;

    current.options.forEach((text, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "option";
        button.dataset.index = String(index);
        button.innerHTML = `<span class="option-letter">${LETTERS[index]}</span><span>${text}</span>`;
        button.addEventListener("click", () => selectOption(index));
        els.optionsContainer.appendChild(button);
    });
}

function selectOption(index) {
    if (state.locked) {
        return;
    }

    state.locked = true;
    const current = state.questions[state.index];
    const isCorrect = index === current.correct;
    const options = els.optionsContainer.querySelectorAll(".option");

    state.answers[state.index] = {
        selected: index,
        correct: current.correct,
        isCorrect
    };

    options.forEach((option, optionIndex) => {
        option.disabled = true;
        if (optionIndex === current.correct) {
            option.classList.add("correct");
        } else if (optionIndex === index) {
            option.classList.add("incorrect");
        }
    });

    els.feedback.classList.remove("hidden", "correct", "incorrect");
    els.feedback.classList.add(isCorrect ? "correct" : "incorrect");
    els.feedbackMessage.textContent = isCorrect ? "Correct" : "Incorrect";
    els.explanation.textContent = current.explanation;
    els.scoreDisplay.textContent = `Correct: ${correctSoFar()}`;
    els.progressFill.style.width = `${((state.index + 1) / state.questions.length) * 100}%`;

    const isLast = state.index === state.questions.length - 1;
    if (isLast) {
        els.submitBtn.classList.remove("hidden");
        els.submitBtn.focus();
    } else {
        els.nextBtn.classList.remove("hidden");
        els.nextBtn.focus();
    }
}

function nextQuestion() {
    if (state.index < state.questions.length - 1) {
        state.index += 1;
        renderQuestion();
    }
}

function finishTest() {
    const total = state.questions.length;
    const correct = correctSoFar();
    const incorrect = total - correct;
    const percent = Math.round((correct / total) * 100);
    const passCount = MODES[state.mode].passCount;
    const passed = correct >= Math.min(passCount, total);
    const missed = total - passCount;

    els.resultIcon.className = `result-icon ${passed ? "pass" : "fail"}`;
    els.resultIcon.textContent = passed ? "✓" : "✕";
    els.resultTitle.textContent = passed ? "You passed" : "Not quite yet";
    els.scoreCircle.style.borderColor = passed ? "var(--success)" : "var(--error)";
    els.finalScore.textContent = `${percent}%`;
    els.correctCount.textContent = String(correct);
    els.incorrectCount.textContent = String(incorrect);
    els.totalCount.textContent = String(total);

    if (passed) {
        els.resultMessage.textContent = `You answered ${correct} of ${total} correctly. That meets the ${passCount}-correct bar for this practice test.`;
    } else {
        els.resultMessage.textContent = `You needed ${passCount} correct (no more than ${missed} wrong). Review the misses, then try another set.`;
    }

    showScreen("results-screen");
}

function renderReview() {
    els.reviewContainer.innerHTML = "";

    state.questions.forEach((item, index) => {
        const answer = state.answers[index];
        const card = document.createElement("article");
        card.className = `review-item ${answer && answer.isCorrect ? "correct" : "incorrect"}`;

        const heading = document.createElement("p");
        heading.className = "review-question";
        heading.textContent = `${index + 1}. ${item.question}`;
        card.appendChild(heading);

        if (answer && !answer.isCorrect) {
            const yours = document.createElement("p");
            yours.className = "review-answer user-incorrect";
            yours.innerHTML = `<span class="review-answer-label">Your answer:</span>${item.options[answer.selected]}`;
            card.appendChild(yours);
        }

        const correct = document.createElement("p");
        correct.className = "review-answer correct-answer";
        correct.innerHTML = `<span class="review-answer-label">Correct:</span>${item.options[item.correct]}`;
        card.appendChild(correct);

        const why = document.createElement("p");
        why.className = "explanation";
        why.textContent = item.explanation;
        card.appendChild(why);

        els.reviewContainer.appendChild(card);
    });

    showScreen("review-screen");
}

function goHome() {
    showScreen("start-screen");
}

function selectMode(mode) {
    state.mode = mode;
    els.modeButtons.forEach((button) => {
        button.classList.toggle("selected", button.dataset.mode === mode);
    });
}

els.modeButtons.forEach((button) => {
    button.addEventListener("click", () => selectMode(button.dataset.mode));
});

els.startBtn.addEventListener("click", startTest);
els.endBtn.addEventListener("click", goHome);
els.nextBtn.addEventListener("click", nextQuestion);
els.submitBtn.addEventListener("click", finishTest);
els.reviewBtn.addEventListener("click", renderReview);
els.retryBtn.addEventListener("click", startTest);
els.homeBtn.addEventListener("click", goHome);
els.backToResultsBtn.addEventListener("click", () => showScreen("results-screen"));
els.retryFromReviewBtn.addEventListener("click", startTest);

document.addEventListener("keydown", (event) => {
    if (!els.quizScreen.classList.contains("active")) {
        return;
    }

    const key = event.key;
    if (!state.locked && ["1", "2", "3", "4", "a", "b", "c", "d", "A", "B", "C", "D"].includes(key)) {
        const map = { a: 0, b: 1, c: 2, d: 3, A: 0, B: 1, C: 2, D: 3 };
        const index = map[key] !== undefined ? map[key] : Number(key) - 1;
        if (index >= 0 && index < state.questions[state.index].options.length) {
            selectOption(index);
        }
        return;
    }

    if (event.key === "Enter" && state.locked) {
        if (!els.nextBtn.classList.contains("hidden")) {
            nextQuestion();
        } else if (!els.submitBtn.classList.contains("hidden")) {
            finishTest();
        }
    }
});

els.bankCount.textContent = String(QUESTION_BANK.length);
selectMode("adult");
