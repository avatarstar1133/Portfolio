document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Khôi phục trạng thái giao diện đã lưu từ LocalStorage
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
        body.className = savedTheme;
    } else {
        // Mặc định chọn Light Theme nếu chưa từng cấu hình
        body.className = 'light-theme';
    }

    // Hàm cập nhật trạng thái Icon trên nút bấm
    const updateIcon = () => {
        if (body.classList.contains('dark-theme')) {
            themeBtn.textContent = '☀️'; // Hiện mặt trời khi đang ở Dark Mode
        } else {
            themeBtn.textContent = '🌙'; // Hiện mặt trăng khi đang ở Light Mode
        }
    };
    
    updateIcon();

    // Lắng nghe sự kiện chuyển đổi theme
    themeBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.className = 'light-theme';
            localStorage.setItem('portfolio-theme', 'light-theme');
        } else {
            body.className = 'dark-theme';
            localStorage.setItem('portfolio-theme', 'dark-theme');
        }
        updateIcon();
    });
});