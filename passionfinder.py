#main
jobList = ["アプリ開発", "AI研究", "ゲーム制作", "Webデザイン", "UI/UX", "ビジネス", "マーケティング", "データ分析", "社会問題の解決"]
print("これはCSに興味のある女子高生のための大学での科目選択シミュレーターです。")
score_core_cs = 0
score_data_sci = 0
score_creative = 0

s1 = 0
while s1 != 1 and s1 != 2 and s1 != 3:
    s1 = int(input("現在の文理への興味を教えて（1=理系、2=文系、3=わからない）："))
if s1 == 1:
    score_core_cs += 3
elif s1 == 3:
    score_data_sci += 1
    score_creative += 3
else:
    score_data_sci += 2
    score_creative += 2

s2 = ""
while s2 != "A" and s2 != "B" and s2 != "C":
    s2 = input("数学への意欲（A=好き、B=普通、C=苦手）：")
if s2 == "A":
    score_core_cs += 4
    score_data_sci += 3
elif s2 == "B":
    score_data_sci += 2
    score_creative += 2
else:
    score_core_cs -= 5
    score_creative += 4

s3 = ""
while s3 != "y" and s3 != "n":
    s3 = input("数IIIは取ろうと思う・または取っている？（y/n）：")
if s3 == "y":
    score_core_cs += 5
    score_data_sci += 2
else:
    score_core_cs -= 5


s4 = 0
while s4 < 1 or s4 > len(jobList)+1:
    print("将来やってみたいことは？")
    for i in range(len(jobList)):
        print("・", i+1, "=", jobList[i])
    s4 = int(input())
if s4 == 1 or s4 == 2 or s4 == 3:
    score_core_cs += 3
    score_creative += 2
elif s4 == 4 or s4 == 5:
    score_creative += 5
else:
    score_data_sci += 5

s5 = 0
while s5 != 1 and s5 != 2:
    print("何かを作るとしたら、どっちにワクワクする？")
    s5 = int(input("1=パズルのような謎解きや、仕組み・ロジックを考えること、2=イラストを描く、動画を作る、見た目をデザインすること"))
if s5 == 1:
    score_core_cs += 4
    score_data_sci += 3
else:
    score_creative += 4

s6 = 0
while s6 != 1 and s6 != 2:
    print("\nスマホのアプリやゲームがバグったり、日常のルールで不便なことがあったとき、どう思う？")
    s6 = int(input("1=「なんでこうなるんだろう？」と原因を突き止めたり、裏側の仕組みを調べたくなる。\n2=「もっとこうなれば使いやすいのに！」と、新しいアイデアや改善策を考える方が楽しい。"))
if s6 == 1:
    score_core_cs += 3
else:
    score_data_sci += 3
    score_creative += 3

s7 = 0
while s7 != 1 and s7 != 2:
    print("\n学校の探究学習や文化祭の準備、趣味の作業で、一番時間を忘れて熱中できる瞬間はどれ？")
    s7 = int(input("1=1人で黙々と作業して、パズルを解くように形を完成させていくとき（個人作業）。\n2=友達とアイデアを出し合ったり、全体の計画を立てて進め方をまとめるとき（チーム）。"))
if s7 == 1:
    score_core_cs += 3
    score_data_sci += 2
else:
    score_creative += 3


max_score = 0
if score_core_cs >= score_data_sci and score_core_cs >= score_creative:
    max_score = score_core_cs
elif score_data_sci >= score_core_cs and score_data_sci >= score_creative:
    max_score = score_data_sci
else:
    max_score = score_creative

print("【診断結果】おすすめの進路")
if max_score == score_core_cs:
    print("理系CSルート：")
    print("高校では理系を選び、数IIIや物理を学びましょう。\n大学では情報理工学部などを目指し、システミの根本を学ぶのが最適です。")
elif max_score == score_data_sci:
    print("文理融合のデータサイエンス：")
    print("数IIIは必要ないので、高校では数Iや数II、統計学に集中しましょう。")
    print("大学ではデータサイエンス学部や社会情報学部で、ITを社会に活かす術を学びましょう。")
else:
    print("クリエイティブなルート：")
    print("数IIIなどは必要ありません。大学では情報デザイン学科やメディア学部で、Web・UI/UXなどを学びましょう。")