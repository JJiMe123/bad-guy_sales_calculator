// C4 계산
document.getElementById("c4CalcBtn").addEventListener("click", () => {
  const c4Count = Number(document.getElementById("c4Count").value) || 0;
  const c4Price = 400000000;
  const c4Total = c4Count * c4Price;

  const resultDiv = document.getElementById("c4Result");
  resultDiv.innerHTML = `
    <b>갯수:</b> ${c4Count.toLocaleString()}개<br>
    <b>총 금액:</b> ${c4Total.toLocaleString()}원
  `;

  resultDiv.classList.add("show");
  resultDiv.classList.remove("hidden");
});

// 검은돈 계산
document.getElementById("blackMoneyCalcBtn").addEventListener("click", () => {
  const count = Number(document.getElementById("blackMoneyCount").value) || 0;
  const price = 10000;
  const total = count * price;

  const exchange = total * 0.7;
  const profit = total * 0.2;
  // 서버회수(10%)는 표시하지 않음

  const resultDiv = document.getElementById("blackMoneyResult");
  resultDiv.innerHTML = `
    <b>갯수:</b> ${count.toLocaleString()}개<br>
    <b>총 금액:</b> ${total.toLocaleString()}원<br><br>
    ┣ 환전금액(70%): <b>${exchange.toLocaleString()}원</b><br>
    ┗ 수익금액(20%): <b>${profit.toLocaleString()}원</b>
  `;

  resultDiv.classList.add("show");
  resultDiv.classList.remove("hidden");
});
