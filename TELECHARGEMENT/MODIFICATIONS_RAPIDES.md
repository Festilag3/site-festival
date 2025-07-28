# Guide Rapide - Modifications Manuelles

## 🎯 Actions Rapides

### 1. Démarrage rapide
**Windows :** Double-cliquez sur `start.bat`
**Mac/Linux :** Exécutez `./start.sh` dans le terminal

### 2. Accès Admin
- URL : http://localhost:3000/admin/login
- Utilisateur : `admin`
- Mot de passe : `festival2025`

### 3. Fichiers à modifier

#### Informations du festival
📁 `frontend/src/data/mock.js`
- Titre, dates, description
- Programme des événements
- Informations de contact

#### Design et couleurs  
📁 `frontend/src/index.css`
- Couleurs principales (lignes 20-25)
- Police et typographie
- Mise en page

#### Images
📁 `frontend/public/images/`
- Ajoutez vos images ici
- Référencez avec `/images/nom-image.jpg`

### 4. Modifications courantes

#### Changer le titre
```javascript
// Dans mock.js
name: {
  fr: "Nouveau titre en français",
  ar: "العنوان الجديد بالعربية", 
  en: "New title in English"
}
```

#### Ajouter un événement
```javascript
// Dans mock.js → program
{
  time: "14:00",
  title: { fr: "Nouvel événement", ar: "حدث جديد", en: "New event" },
  location: { fr: "Salle 2", ar: "القاعة 2", en: "Room 2" }
}
```

#### Changer les couleurs
```css
/* Dans index.css */
:root {
  --primary-color: #votre-couleur;
  --secondary-color: #votre-couleur;
}
```

### 5. Après modifications
- Frontend : Rechargement automatique
- Backend : Redémarrer `python server.py`

## 🔧 Dépannage Express

### Site ne marche pas
1. MongoDB démarré ? `mongod`
2. Backend démarré ? `python server.py` 
3. Frontend démarré ? `yarn start`

### Admin ne marche pas
- Vérifiez : http://localhost:8001/api/admin/status
- Si erreur, redémarrez le backend

### Images ne s'affichent pas
- Placez dans `frontend/public/images/`
- Utilisez `/images/nom.jpg` (pas `./images/`)

---
**🎨 Bon développement !**