<!DOCTYPE html>
<html lang="zh">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>遇</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
    <div class="container right-panel-active">
        <!-- 注册 -->
        <div class="container__form container--signup">
            <form action="register.php" method="post" class="form" id="form1">
                <h2 class="form__title">注册账号</h2>
                <input type="text" placeholder="用户名" class="input" name="username" />
                <input type="password" placeholder="密码（大于6位）" class="input" name="userPwd" />
                <input type="password" placeholder="确认密码" class="input" name="reuserPwd" />
                <input type="submit" class="btn" value="点击注册"  >
            </form>
        </div>

        <!-- 登录 -->
        <div class="container__form container--signin">
            <form action="login.php" method="post" class="form" id="form2">
                <h2 class="form__title">欢迎登录</h2>
                <input type="text" placeholder="用户名" class="input" name="username" />
                <input type="password" placeholder="密码" class="input" name="userPwd" />
                <a href="#" class="link">忘记密码?</a>
                <input type="submit" class="btn" value="登录">
                
            </form>
        </div>

        <!-- 重叠 -->
        <div class="container__overlay">
            <div class="overlay">
                <div class="overlay__panel overlay--left">
                    <button class="btn" id="signIn">已有账号，直接登录</button>
                </div>
                <div class="overlay__panel overlay--right">
                    <button class="btn" id="signUp">没有账号，点击注册</button>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="script.js"></script>
</html>