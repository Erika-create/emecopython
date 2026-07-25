//dictionary
const translations = {
  ja: {
    badge: "高校生向け進路診断",
    title: "CS科目選択・進路シミュレーター",
    subtitle: "あなたにぴったりのコンピューターサイエンスの学び方や高校での科目選択ルートを見つけよう！",
    q1_title: "1. 現在の文理への興味を教えてください",
    q1_o1: "理系", q1_o2: "文系", q1_o3: "まだわからない",
    q2_title: "2. 数学への意欲はどのくらい？",
    q2_o1: "好き・得意", q2_o2: "普通", q2_o3: "苦手",
    q3_title: "3. 数IIIは取ろうと思う・または取っている？",
    q3_o1: "はい（取る / 取っている）", q3_o2: "いいえ（取らない）",
    q4_title: "4. 将来やってみたいことは？",
    q4_o1: "アプリ開発", q4_o2: "AI研究", q4_o3: "ゲーム制作", q4_o4: "Webデザイン", q4_o5: "UI/UXデザイン", q4_o6: "ビジネス企画", q4_o7: "マーケティング", q4_o8: "データ分析", q4_o9: "社会問題の解決",
    q5_title: "5. 何かを『作る』としたら、どっちにワクワクする？",
    q5_o1: "パズルのような謎解きや、仕組み・ロジックを考えること",
    q5_o2: "イラストを描く、動画を作る、見た目をデザインすること",
    q6_title: "6. スマホのアプリがバグったり不便な時、どう思う？",
    q6_o1: "「なんでこうなるんだろう？」と原因や裏側の仕組みを調べたくなる",
    q6_o2: "「もっとこうなれば使いやすいのに！」と新しいアイデアを考える方が楽しい",
    q7_title: "7. 一番時間を忘れて熱中できる瞬間はどれ？",
    q7_o1: "1人で黙々と作業して、パズルを解くように形を完成させていくとき（個人作業）",
    q7_o2: "友達とアイデアを出し合ったり、全体の計画を立てて進め方をまとめるとき（チーム）",
    submit_btn: "診断結果を見る",
    result_title: "【診断結果】おすすめの進路",
    res_core_cs_title: "★ 理系CSルート",
    res_core_cs_desc: "高校では理系を選び、数IIIや物理をしっかり武器にしましょう。<br>大学では情報理工学部などを目指し、システムの根本やAIの技術を深く学ぶのが最適です！",
    res_data_sci_title: "★ 文理融合のデータサイエンスルート",
    res_data_sci_desc: "数IIIは必要ないので、高校では数I・数IIや統計学に集中しましょう。<br>大学ではデータサイエンス学部や社会情報学部で、ITを社会問題やビジネスに活かす術を学ぶのが最適です！",
    res_creative_title: "★ クリエイティブなWeb・HCIルート",
    res_creative_desc: "数IIIなどの難しい数学に縛られる必要はありません。<br>大学では情報デザイン学科やメディア学部で、Web・UI/UXなど人とITをつなぐデザインを学ぶのが最適です！",
    alert_msg: "すべての質問に回答してください。"
  },
  en: {
    badge: "Career Simulator for High Schoolers",
    title: "CS Subject & Career Simulator",
    subtitle: "Discover the best Computer Science learning pathway and high school course selection for you!",
    q1_title: "1. What is your current interest in STEM vs. Humanities?",
    q1_o1: "STEM (Science/Maths)", q1_o2: "Humanities/Arts", q1_o3: "Not sure yet",
    q2_title: "2. How motivated are you about Mathematics?",
    q2_o1: "Love / Good at it", q2_o2: "Average", q2_o3: "Not confident",
    q3_title: "3. Do you plan to take Advanced Math (Math III / Calculus)?",
    q3_o1: "Yes (Taking / Planning to take)", q3_o2: "No",
    q4_title: "4. What field are you interested in for the future?",
    q4_o1: "App Development", q4_o2: "AI Research", q4_o3: "Game Development", q4_o4: "Web Design", q4_o5: "UI/UX Design", q4_o6: "Business Planning", q4_o7: "Marketing", q4_o8: "Data Analysis", q4_o9: "Social Problem Solving",
    q5_title: "5. When creating something, which excites you more?",
    q5_o1: "Solving logic puzzles and thinking about underlying systems",
    q5_o2: "Designing visuals, drawing illustrations, or editing videos",
    q6_title: "6. How do you react when an app glitches or feels inconvenient?",
    q6_o1: "'Why is this happening?' - I want to investigate the root cause",
    q6_o2: "'It'd be better if it worked like this!' - I enjoy brainstorming improvements",
    q7_title: "7. When do you lose track of time the most?",
    q7_o1: "Working solo silently to complete something like a puzzle (Solo)",
    q7_o2: "Brainstorming and planning project steps with friends (Teamwork)",
    submit_btn: "View My Pathway Results",
    result_title: "【Result】 Recommended Pathway",
    res_core_cs_title: "★ Pure Computer Science Route",
    res_core_cs_desc: "Choose the Science track in high school and focus on Advanced Calculus and Physics.<br>At university, aim for Computer Science or Software Engineering to master core algorithms and AI technologies!",
    res_data_sci_title: "★ Data Science & Social Tech Route",
    res_data_sci_desc: "Advanced Calculus is not strictly necessary; focus on Statistics and Applied Math.<br>Aim for Data Science or Information Systems departments to learn how to apply IT to business and social challenges!",
    res_creative_title: "★ Creative Web & HCI Route",
    res_creative_desc: "No need to stress over complex mathematics.<br>Explore Human-Computer Interaction (HCI), Interactive Media, or Web Design to bridge the gap between people and technology!",
    alert_msg: "Please answer all questions."
  }
};

let currentLang = 'ja';
let lastResultKey = null; // 診断結果保持用

// 言語切替機能
function setLanguage(lang) {
  currentLang = lang;

  // ボタンの見た目更新
  document.getElementById('btn-ja').classList.toggle('active', lang === 'ja');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');

  // HTML内の全テキストを更新
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  // もしすでに結果が表示されていたら、結果の文章も翻訳更新する
  if (lastResultKey) {
    displayResult(lastResultKey);
  }
}

// 診断計算機能
function calculateResult() {
  const form = document.getElementById('quizForm');
  if (!form.checkValidity()) {
    alert(translations[currentLang].alert_msg);
    return;
  }

  let score_core_cs = 0;
  let score_data_sci = 0;
  let score_creative = 0;

  // Q1
  const s1 = document.querySelector('input[name="s1"]:checked').value;
  if (s1 === "1") score_core_cs += 3;
  else if (s1 === "3") { score_data_sci += 1; score_creative += 3; }
  else { score_data_sci += 2; score_creative += 2; }

  // Q2
  const s2 = document.querySelector('input[name="s2"]:checked').value;
  if (s2 === "A") { score_core_cs += 4; score_data_sci += 3; }
  else if (s2 === "B") { score_data_sci += 2; score_creative += 2; }
  else { score_core_cs -= 5; score_creative += 4; }

  // Q3
  const s3 = document.querySelector('input[name="s3"]:checked').value;
  if (s3 === "y") { score_core_cs += 5; score_data_sci += 2; }
  else score_core_cs -= 5;

  // Q4
  const s4 = parseInt(document.getElementById('s4').value);
  if ([1, 2, 3].includes(s4)) { score_core_cs += 3; score_creative += 2; }
  else if ([4, 5].includes(s4)) score_creative += 5;
  else score_data_sci += 5;

  // Q5
  const s5 = document.querySelector('input[name="s5"]:checked').value;
  if (s5 === "1") { score_core_cs += 4; score_data_sci += 3; }
  else score_creative += 4;

  // Q6
  const s6 = document.querySelector('input[name="s6"]:checked').value;
  if (s6 === "1") score_core_cs += 3;
  else { score_data_sci += 3; score_creative += 3; }

  // Q7
  const s7 = document.querySelector('input[name="s7"]:checked').value;
  if (s7 === "1") { score_core_cs += 3; score_data_sci += 2; }
  else score_creative += 3;

  // 判定
  let max_score = Math.max(score_core_cs, score_data_sci, score_creative);

  if (max_score === score_core_cs) lastResultKey = 'core_cs';
  else if (max_score === score_data_sci) lastResultKey = 'data_sci';
  else lastResultKey = 'creative';

  displayResult(lastResultKey);
  document.getElementById('result').style.display = 'block';
  document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
}

// 結果描画用ヘルパー関数
function displayResult(key) {
  const t = translations[currentLang];
  let title = "", desc = "";

  if (key === 'core_cs') {
    title = t.res_core_cs_title;
    desc = t.res_core_cs_desc;
  } else if (key === 'data_sci') {
    title = t.res_data_sci_title;
    desc = t.res_data_sci_desc;
  } else {
    title = t.res_creative_title;
    desc = t.res_creative_desc;
  }

  document.getElementById('resultContent').innerHTML = `<h3>${title}</h3><p>${desc}</p>`;
}