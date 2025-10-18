// Constants
const C4_PRICE = 400000000;
const BLACK_MONEY_PRICE = 10000;

// DOM Elements
const c4Input = document.getElementById('c4-quantity');
const blackMoneyInput = document.getElementById('black-money-quantity');
const c4TotalWrapper = document.getElementById('c4-total-wrapper');
const c4TotalElement = document.getElementById('c4-total');
const breakdownCard = document.getElementById('breakdown-card');
const exchangeAmountElement = document.getElementById('exchange-amount');
const profitAmountElement = document.getElementById('profit-amount');
const resetBtn = document.getElementById('reset-btn');
const themeToggle = document.getElementById('theme-toggle');

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('ko-KR').format(Math.floor(amount));
}

// Calculate C4
function calculateC4() {
    const quantity = parseInt(c4Input.value) || 0;
    const total = quantity * C4_PRICE;
    
    if (quantity > 0) {
        c4TotalWrapper.style.display = 'block';
        c4TotalElement.textContent = `₩${formatCurrency(total)}`;
    } else {
        c4TotalWrapper.style.display = 'none';
    }
}

// Calculate Black Money
function calculateBlackMoney() {
    const quantity = parseInt(blackMoneyInput.value) || 0;
    const totalRaw = quantity * BLACK_MONEY_PRICE;
    
    if (quantity > 0) {
        const exchangeAmount = totalRaw * 0.7;
        const profitAmount = totalRaw * 0.2;
        
        breakdownCard.style.display = 'block';
        exchangeAmountElement.textContent = `₩${formatCurrency(exchangeAmount)}`;
        profitAmountElement.textContent = `₩${formatCurrency(profitAmount)}`;
    } else {
        breakdownCard.style.display = 'none';
    }
}

// Reset all values
function resetCalculator() {
    Swal.fire({
        title: '계산 초기화',
        text: '모든 입력값을 초기화하시겠습니까?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: '초기화',
        cancelButtonText: '취소',
        confirmButtonColor: 'hsl(217, 91%, 60%)',
        cancelButtonColor: 'hsl(217, 18%, 24%)',
        background: document.body.classList.contains('dark-mode') ? 'hsl(217, 19%, 18%)' : '#ffffff',
        color: document.body.classList.contains('dark-mode') ? 'hsl(217, 10%, 95%)' : 'hsl(217, 19%, 15%)',
    }).then((result) => {
        if (result.isConfirmed) {
            c4Input.value = '';
            blackMoneyInput.value = '';
            c4TotalWrapper.style.display = 'none';
            breakdownCard.style.display = 'none';
            
            Swal.fire({
                title: '초기화 완료!',
                text: '모든 값이 초기화되었습니다.',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false,
                background: document.body.classList.contains('dark-mode') ? 'hsl(217, 19%, 18%)' : '#ffffff',
                color: document.body.classList.contains('dark-mode') ? 'hsl(217, 10%, 95%)' : 'hsl(217, 19%, 15%)',
            });
        }
    });
}

// Toggle dark mode
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// Event Listeners
c4Input.addEventListener('input', calculateC4);
blackMoneyInput.addEventListener('input', calculateBlackMoney);
resetBtn.addEventListener('click', resetCalculator);
themeToggle.addEventListener('click', toggleTheme);

// Initialize
initTheme();
