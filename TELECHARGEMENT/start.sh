#!/bin/bash

echo "🚀 Démarrage automatique du Festival LAGHOUAT"

# Vérifier si MongoDB est installé
if ! command -v mongod &> /dev/null; then
    echo "❌ MongoDB n'est pas installé. Veuillez l'installer d'abord."
    echo "   Téléchargez depuis : https://www.mongodb.com/try/download/community"
    exit 1
fi

# Démarrer MongoDB en arrière-plan
echo "📦 Démarrage de MongoDB..."
mongod --dbpath ./data/db --fork --logpath ./data/mongodb.log 2>/dev/null || {
    mkdir -p data/db
    mongod --dbpath ./data/db --fork --logpath ./data/mongodb.log
}

# Aller dans le répertoire backend
cd backend

# Vérifier si .env existe
if [ ! -f .env ]; then
    echo "📝 Création du fichier .env pour le backend..."
    cp .env.example .env
fi

# Installer les dépendances Python
echo "📦 Installation des dépendances backend..."
pip install -r requirements.txt

# Démarrer le backend en arrière-plan
echo "🔧 Démarrage du serveur backend..."
python server.py &
BACKEND_PID=$!

# Attendre que le backend démarre
sleep 3

# Aller dans le répertoire frontend
cd ../frontend

# Vérifier si .env existe
if [ ! -f .env ]; then
    echo "📝 Création du fichier .env pour le frontend..."
    cp .env.example .env
fi

# Installer les dépendances Node.js
echo "📦 Installation des dépendances frontend..."
yarn install

# Démarrer le frontend
echo "🌐 Démarrage du serveur frontend..."
echo ""
echo "✅ Le site sera accessible sur : http://localhost:3000"
echo "✅ Interface admin : http://localhost:3000/admin/login"
echo "   👤 Utilisateur : admin"
echo "   🔑 Mot de passe : festival2025"
echo ""
echo "Pour arrêter les serveurs, utilisez Ctrl+C"

yarn start

# Nettoyer les processus en arrière-plan quand on quitte
trap "kill $BACKEND_PID 2>/dev/null; pkill mongod 2>/dev/null" EXIT