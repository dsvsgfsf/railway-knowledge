@echo off
chcp 65001 >nul
echo ================================================
echo   铁路知识智能查询系统 - Git 初始化脚本
echo ================================================
echo.

:: 检查 Git 是否安装
where git >nul 2>&1
if %errorlevel% neq 0 (
    echo [错误] 未检测到 Git！
    echo 请先安装 Git: https://git-scm.com/download/win
    pause
    exit /b 1
)

echo [OK] 检测到 Git
echo.

:: 进入部署目录
cd /d "%~dp0"
echo 当前目录: %cd%
echo.

:: 初始化 Git 仓库
echo [1/5] 初始化 Git 仓库...
git init
if %errorlevel% neq 0 (
    echo [错误] Git 初始化失败
    pause
    exit /b 1
)
echo.

:: 添加所有文件
echo [2/5] 添加所有文件到暂存区...
git add .
echo.

:: 初始提交
echo [3/5] 创建初始提交...
git commit -m "Initial commit: 铁路知识智能查询系统 v1.0"
echo.

:: 检查远程仓库
echo [4/5] 检查远程仓库配置...
git remote -v
echo.

:: 提示用户连接远程仓库
echo [5/5] 配置完成！
echo.
echo ================================================
echo   下一步：连接到 GitHub
echo ================================================
echo.
echo 方法1 - 命令行:
echo   1. 在 GitHub 创建新仓库 (railway-knowledge)
echo   2. 运行以下命令:
echo      git remote add origin https://github.com/YOUR_USERNAME/railway-knowledge.git
echo      git branch -M main
echo      git push -u origin main
echo.
echo 方法2 - GitHub Desktop:
echo   1. 打开 GitHub Desktop
echo   2. File > Add Local Repository
echo   3. 选择此文件夹
echo   4. Publish to GitHub
echo.
echo 方法3 - VS Code:
echo   1. 在 VS Code 中打开此文件夹
echo   2. 点击 Source Control 图标
echo   3. 输入提交信息并点击 Commit
echo   4. 点击 Publish Branch
echo.
echo ================================================
echo.
pause
