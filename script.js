// 全局登录状态校验与退出逻辑
document.addEventListener("DOMContentLoaded", () => {
    // 退出登录逻辑
    const logoutLinks = document.querySelectorAll('a[href*="login.html"]');
    logoutLinks.forEach(link => {
        if(link.textContent.includes('退出登录')) {
            // 修改href防止直接跳转php
            link.href = "#";
            link.addEventListener("click", (e) => {
                e.preventDefault();
                localStorage.removeItem("isLoggedIn");
                // 判断当前是在根目录还是在html子目录
                const path = window.location.pathname;
                if(path.includes('/html/')) {
                    window.location.href = "../login.html";
                } else {
                    window.location.href = "./login.html";
                }
            });
        }
    });

    // 简单登录校验 (如果不在 login.html 且没登录，则跳转 login)
    // 注意: 这只是前端模拟，不具备真正的安全性
    const path = window.location.pathname;
    if (!path.includes('login.html')) {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn !== 'true') {
            if(path.includes('/html/')) {
                window.location.href = "../login.html";
            } else {
                window.location.href = "./login.html";
            }
        }
    }
});
