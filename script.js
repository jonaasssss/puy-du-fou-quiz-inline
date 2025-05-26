let currentQuestion = 0;

// 初始化每个角色的得分
let scoreMap = {
  "Joan of Arc": 0,
  "Actress": 0,
  "Viking": 0,
  "Eagle": 0,
  "Roman": 0,
  "Musketeer": 0
};

// 加载当前题目
function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById('question-text').innerText = q.text;
  document.getElementById('optionA').innerText = q.optionA.text;
  document.getElementById('optionB').innerText = q.optionB.text;
}

// 处理选择
function choose(option) {
  const selected = option === 'A' ? questions[currentQuestion].optionA : questions[currentQuestion].optionB;
  selected.roles.forEach(role => scoreMap[role]++);

  currentQuestion++;

  if (currentQuestion >= questions.length) {
    // 存储得分到本地（用于结果页）
    localStorage.setItem('scores', JSON.stringify(scoreMap));
    window.location.href = 'result.html';
  } else {
    loadQuestion();
  }
}

// 初始加载
window.onload = loadQuestion;
