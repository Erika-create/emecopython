
#main
subList = ["Maths", "Physics", "Biology", "Chemistry", "Computer Science"]
jobList = ["アプリ開発", "AI研究", "ゲーム制作", "Webデザイン", "UI/UX", "ビジネス", "マーケティング", "データ分析", "社会問題の解決"]
print("これはCSに興味のある女子高生のための大学での科目選択シミュレーターです。")

s1 = input("現在の文理への興味を教えて（1=理系、2=文系、3=わからない）：")
n1 = 0
if s1 == 1:
    n1 = 5
elif s1 == 2:
    n1 = 1
else:
    n1 = 3

s2 = input("数学への意欲（1=好き、2=普通、3=苦手）：")
n2 = Z
if s2 == 1:
    n2 = A
elif s2 == 2:
    n2 = B
else:
    n2 = C

n3 = 0
s3 = input("数IIIは取ろうと思う・または取っている？（y/n）：")
if s3 == "y":
    n3 = A
else:
    n3 = B #B and C, does not matter

print("将来やってみたいことは？")
for i in range(len(jobList)):
    print("・", jobList[i], "=", i+1)
s4 = input()

n4 = Z
if s4 == 1 or s4 == 2 or s4 == 3:
    n4 = A
elif s4 == 4 or s4 == 5:
    n4 = B
else:
    n4 = C

