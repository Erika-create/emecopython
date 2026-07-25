function calculateResult() {
  const form = document.getElementById('quizForm');
  if (!form.checkValidity()) {
    alert("すべての質問に回答してください。");
    return;
  }

  let score_core_cs = 0;
  let score_data_sci = 0;
  let score_creative = 0;

  // Questions
  const s1 = document.querySelector('input[name="s1"]:checked').value;
  if (s1 === "1") {
    score_core_cs += 3;
  } else if (s1 === "3") {
    score_data_sci += 1;
    score_creative += 3;
  } else {
    score_data_sci += 2;
    score_creative += 2;
  }

  const s2 = document.querySelector('input[name="s2"]:checked').value;
  if (s2 === "A") {
    score_core_cs += 4;
    score_data_sci += 3;
  } else if (s2 === "B") {
    score_data_sci += 2;
    score_creative += 2;
  } else {
    score_core_cs -= 5;
    score_creative += 4;
  }

  const s3 = document.querySelector('input[name="s3"]:checked').value;
  if (s3 === "y") {
    score_core_cs += 5;
    score_data_sci += 2;
  } else {
    score_core_cs -= 5;
  }

  const s4 = parseInt(document.getElementById('s4').value);
  if (s4 === 1 || s4 === 2 || s4 === 3) {
    score_core_cs += 3;
    score_creative += 2;
  } else if (s4 === 4 || s4 === 5) {
    score_creative += 5;
  } else {
    score_data_sci += 5;
  }

  const s5 = document.querySelector('input[name="s5"]:checked').value;
  if (s5 === "1") {
    score_core_cs += 4;
    score_data_sci += 3;
  } else {
    score_creative += 4;
  }

  const s6 = document.querySelector('input[name="s6"]:checked').value;
  if (s6 === "1") {
    score_core_cs += 3;
  } else {
    score_data_sci += 3;
    score_creative += 3;
  }

  const s7 = document.querySelector('input[name="s7"]:checked').value;
  if (s7 === "1") {
    score_core_cs += 3;
    score_data_sci += 2;
  } else {
    score_creative += 3;
  }

  //result
  let max_score = Math.max(score_core_cs, score_data_sci, score_creative);
  let resultText = "";

  if (max_score === score_core_cs) {
    resultText = "<h3>★ 理系CSルート</h3><p>高校では理系を選び、数IIIや物理をしっかり武器にしましょう。<br>大学では情報理工学部などを目指し、システムの根本やAIの技術を深く学ぶのが最適です！</p>";
  } else if (max_score === score_data_sci) {
    resultText = "<h3>★ 文理融合のデータサイエンスルート</h3><p>数IIIは必要ないので、高校では数I・数IIや統計学に集中しましょう。<br>大学ではデータサイエンス学部や社会情報学部で、ITを社会問題やビジネスに活かす術を学ぶのが最適です！</p>";
  } else {
    resultText = "<h3>★ クリエイティブなWeb・HCIルート</h3><p>数IIIなどの難しい数学に縛られる必要はありません。<br>大学では情報デザイン学科やメディア学部で、Web・UI/UXなど人とITをつなぐデザインを学ぶのが最適です！</p>";
  }

  document.getElementById('resultContent').innerHTML = resultText;
  document.getElementById('result').style.display = 'block';

  //animation
  document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
}