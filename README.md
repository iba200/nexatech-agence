# Nexatech Agence Website

Site web corporate pour **Nexatech Sénégal**, une agence de transformation digitale. Ce projet présente les services de l'agence, ses produits (ImmoGest) et son portfolio.

## 🚀 Technologies

*   **Backend** : Flask (Python)
*   **Frontend** : HTML5, TailwindCSS
*   **Animations** : AOS (Animate On Scroll), Alpine.js

## 📋 Fonctionnalités

*   **Accueil** : Présentation dynamique, chiffres clés, témoignages.
*   **Services** : Détail des offres (Web, Mobile, Marketing).
*   **ImmoGest** : Landing page dédiée au logiciel de gestion locative.
*   **Portfolio** : Galerie filtrable des réalisations.
*   **Contact** : Formulaire intégré (Formspree) et informations de localisation.
*   **Responsive Design** : Optimisé pour tous les écrans (Mobile-first).

## 🛠️ Installation et Démarrage

### Prérequis

*   Python 3.8+
*   Node.js & npm (uniquement pour modifier le CSS)

### 1. Cloner le projet

```bash
git clone https://github.com/iba200/nexatech-agence.git
cd nexatech-agence
```

### 2. Installer les dépendances Python

Il est recommandé d'utiliser un environnement virtuel.

```bash
# Créer l'environnement virtuel (Windows)
py -m venv venv
# Activer l'environnement
.\venv\Scripts\activate

# Installer les paquets
pip install -r requirements.txt
```

### 3. (Optionnel) Compiler le CSS

Si vous modifiez les fichiers Tailwind dans `static/css/input.css` ou les classes dans les templates :

```bash
# Installer les dépendances Node
npm install

# Lancer le mode watch
npm run watch:css

# Ou compiler pour la production
npm run build:css
```

### 4. Lancer l'application

```bash
python app.py
```

Le site sera accessible à l'adresse : [http://127.0.0.1:5000](http://127.0.0.1:5000)

## 📁 Structure du Projet

```
nexatech-agence/
├── app.py              # Point d'entrée Flask
├── templates/          # Vues HTML (Jinja2)
├── static/             # Assets (CSS, JS, Images)
├── tailwind.config.js  # Configuration Tailwind
└── requirements.txt    # Dépendances Python
```

## 📄 Licence

Ce projet est sous licence ISC.
