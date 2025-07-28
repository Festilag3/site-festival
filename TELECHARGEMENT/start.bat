@echo off
echo 🚀 Démarrage automatique du Festival LAGHOUAT

REM Vérifier si MongoDB est accessible
where mongod >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo ❌ MongoDB n'est pas installé ou pas dans le PATH.
    echo    Téléchargez depuis : https://www.mongodb.com/try/download/community
    pause
    exit /b 1
)

REM Créer le répertoire pour MongoDB
if not exist "data\db" mkdir data\db

REM Démarrer MongoDB
echo 📦 Démarrage de MongoDB...
start /min mongod --dbpath data\db --logpath data\mongodb.log

REM Attendre que MongoDB démarre
timeout /t 3 /nobreak >nul

REM Aller dans le répertoire backend
cd backend

REM Créer .env si nécessaire
if not exist ".env" (
    echo 📝 Création du fichier .env pour le backend...
    copy .env.example .env >nul
)

REM Installer les dépendances Python
echo 📦 Installation des dépendances backend...
pip install -r requirements.txt >nul

REM Démarrer le backend
echo 🔧 Démarrage du serveur backend...
start /min python server.py

REM Attendre que le backend démarre
timeout /t 3 /nobreak >nul

REM Aller dans le répertoire frontend
cd ..\frontend

REM Créer .env si nécessaire
if not exist ".env" (
    echo 📝 Création du fichier .env pour le frontend...
    copy .env.example .env >nul
)

REM Installer les dépendances Node.js
echo 📦 Installation des dépendances frontend...
call yarn install

REM Démarrer le frontend
echo 🌐 Démarrage du serveur frontend...
echo.
echo ✅ Le site sera accessible sur : http://localhost:3000
echo ✅ Interface admin : http://localhost:3000/admin/login
echo    👤 Utilisateur : admin
echo    🔑 Mot de passe : festival2025
echo.
echo Pour arrêter les serveurs, fermez cette fenêtre

call yarn start

pause