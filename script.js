// C4 계산
function calculateC4() {
  const count = parseInt(document.getElementById('c4Count').value);
  const resultDiv = document.getElementById('c4Result');
  const totalEl = document.getElementById('c4Total');

  if (isNaN(count) || count <= 0) {
    Swal.fire({
      icon: 'warning',
      title: '입력 오류',
      text: 'C4 갯수를 올바르게 입력하세요!',
      confirmButtonColor: '#00b4ff'
    });
    return;
  }

  const total = count * 400000000;
  totalEl.textContent = total.toLocaleString();

  resultDiv.classList.remove('hidden');
  resultDiv.classList.add('animate__slideInUp');
}

// 검은돈 계산
function calculateBlackMoney() {
  const count = parseInt(document.getElementById('blackMoneyCount').value);
  const resultDiv = document.getElementById('blackMoneyResult');

  if (isNaN(count) || count <= 0) {
    Swal.fire({
      icon: 'warning',
      title: '입력 오류',
      text: '검은돈 갯수를 올바르게 입력하세요!',
      confirmButtonColor: '#00b4ff'
    });
    return;
  }

  const base = count * 10000;
  const exchange = base * 0.7;
  const profit = base * 0.2;

  resultDiv.innerHTML = `
    <p>환전금액 70%: ${exchange.toLocaleString()}원</p>
    <p>수익금액 20%: ${profit.toLocaleString()}원</p>
    <p class="text-gray-400">환전70% + 수익20% + 서버회수10%</p>
  `;

  resultDiv.classList.remove('hidden');
  resultDiv.classList.add('animate__slideInUp');
}
