# Guide de Développement - GoPrint

## 📋 Table des Matières

1. [Setup Initial](#setup-initial)
2. [Architecture](#architecture)
3. [Structure des Fichiers](#structure-des-fichiers)
4. [Workflow de Développement](#workflow-de-développement)
5. [Ajouter une Nouvelle Catégorie](#ajouter-une-nouvelle-catégorie)
6. [Debugging](#debugging)
7. [Bonnes Pratiques](#bonnes-pratiques)

---

## Setup Initial

### Prérequis

- **Node.js** (optionnel, pour les serveurs locaux)
- **Git** pour le contrôle de version
- **Navigateur moderne** : Chrome, Edge, Brave, Chromium
- **Éditeur de code** : VS Code recommandé

### Cloner le Projet

```bash
git clone https://github.com/Godwin-creator/GoPrint.git
cd GoPrint
```

### Charger l'Extension en Développement

1. Ouvrir `chrome://extensions/` (ou équivalent)
2. Activer **Mode Développeur** (coin supérieur droit)
3. Cliquer **Charger l'extension non empaquetée**
4. Sélectionner le dossier `GoPrint`

### Serveur Local (Optionnel)

Pour tester les pages avec un serveur HTTP réel :

```bash
# Python 3
python -m http.server

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

Puis accéder à `http://localhost:8000/tests/test-pages/`

---

## Architecture

### Vue d'Ensemble

```
Extension GoPrint
├── Background (Service Worker)
│   └── Écoute les clics utilisateur
│
├── Content Script (Injection dans la page)
│   ├── Charge dynamiquement les modules utilitaires
│   ├── Exécute le nettoyage du DOM
│   ├── Applique les styles CSS
│   ├── Formate les liens
│   └── Déclenche window.print()
│
├── Configuration (Centralisée)
│   ├── Constants (délais, marges, etc.)
│   └── Selectors (sélecteurs CSS organisés)
│
└── Utilitaires (Modules réutilisables)
    ├── DOM Cleaner
    ├── Link Formatter
    └── Timestamp
```

### Flux d'Exécution

```
1. Utilisateur clique icône GoPrint
   ↓
2. Service Worker détecte le clic
   ↓
3. Injecte CSS d'impression (print-styles.css)
   ↓
4. Injecte script de nettoyage (cleaner.js)
   ↓
5. cleaner.js charge les modules utilitaires
   ↓
6. Supprime les éléments non essentiels
   ↓
7. Applique styles d'impression
   ↓
8. Formate les liens avec URLs
   ↓
9. Déclenche window.print()
   ↓
10. Utilisateur choisit : imprimer ou sauvegarder PDF
```

---

## Structure des Fichiers

```
GoPrint/
├── manifest.json                 # Configuration extension (Manifest V3)
├── README.md                     # Documentation principale
├── DEVELOPMENT.md                # Ce fichier
│
├── src/
│   ├── background/
│   │   └── service-worker.js     # Écoute des événements
│   │
│   ├── content/
│   │   ├── cleaner.js            # Script injecté dans la page
│   │   └── print-styles.css      # Styles d'impression
│   │
│   ├── config/
│   │   ├── constants.js          # Constantes globales (délais, etc.)
│   │   └── selectors.js          # Sélecteurs CSS centralisés
│   │
│   └── utils/
│       ├── dom-cleaner.js        # Nettoyage du DOM
│       ├── link-formatter.js     # Formatage des liens
│       └── timestamp.js          # Gestion des timestamps
│
├── tests/
│   ├── README.md                 # Guide des tests
│   ├── manual-test-plan.md       # Plan détaillé de tests manuels
│   └── test-pages/
│       ├── doc-simple.html       # Page simple
│       └── doc-complex.html      # Page complexe
│
└── icons/
    ├── icon-16.png
    ├── icon-32.png
    ├── icon-48.png
    └── icon-128.png
```

---

## Workflow de Développement

### 1. Créer une Branche

```bash
git checkout -b feature/ma-nouvelle-feature
```

### 2. Faire des Modifications

Éditer les fichiers pertinents dans `src/`

### 3. Tester les Modifications

```bash
# Recharger l'extension
- Aller à chrome://extensions/
- Cliquer le bouton "Recharger" sur GoPrint

# Vérifier les changements
- Ouvrir page de test
- Cliquer icône GoPrint
- Vérifier résultat
- Ouvrir console (F12) pour logs
```

### 4. Valider le Code

```bash
# Vérifier qu'aucune erreur en console
# Vérifier que les logs GoPrint sont corrects
# Tester sur plusieurs pages
```

### 5. Commiter et Pusher

```bash
git add src/
git commit -m "feat: description de la modification"
git push origin feature/ma-nouvelle-feature
```

### 6. Pull Request

- Créer une PR sur GitHub
- Décrire les changements
- Laisser le responsable du projet review

---

## Ajouter une Nouvelle Catégorie

### Exemple : Ajouter la Suppression des "Widgets"

#### Étape 1 : Ajouter le Sélecteur

Éditer `src/config/selectors.js` :

```javascript
export const SELECTORS = {
  // ... catégories existantes ...
  
  widgets: [              // ← Nouvelle catégorie
    '.widget',            // Widgets génériques
    '[class*="widget-"]', // Classes avec "widget-"
    '.sidebar-widget',    // Widgets de barre latérale
    '.custom-widget',     // Widgets personnalisés
  ]
};
```

#### Étape 2 : Mettre à Jour le Nettoyeur

Éditer `src/content/cleaner.js` - ajouter dans `loadDomCleanerModule()` :

```javascript
async function loadDomCleanerModule() {
  return {
    cleanDOM() {
      const SELECTORS = {
        // ... autres catégories ...
        widgets: [
          '.widget',
          '[class*="widget-"]',
          '.sidebar-widget',
          '.custom-widget',
        ]
      };
      
      // Reste du code inchangé
    }
  };
}
```

#### Étape 3 : Ajouter des Tests

Éditer `tests/manual-test-plan.md` - ajouter une section :

```markdown
### 2.X Nettoyage des Widgets

**Éléments à tester :** `.widget`, `[class*="widget-"]`

**Test #XX : Suppression des Widgets**
- [ ] Ouvrir page avec widgets
- [ ] Cliquer sur l'icône GoPrint
- [ ] Vérifier que les widgets disparaissent
- [ ] **Résultat attendu :** Tous les widgets supprimés
```

#### Étape 4 : Ajouter des Éléments de Test

Ajouter des widgets à `tests/test-pages/doc-complex.html` :

```html
<div class="widget">
  <h4>Mon Widget</h4>
  <p>Contenu du widget à supprimer</p>
</div>

<div class="sidebar-widget">
  <p>Widget de barre latérale</p>
</div>
```

#### Étape 5 : Tester

```bash
# Recharger l'extension (chrome://extensions/)
# Ouvrir page de test
# Cliquer icône GoPrint
# Vérifier que widgets disparaissent
```

---

## Debugging

### Voir les Logs

1. **Ouvrir DevTools** : F12 ou Ctrl+Maj+I
2. **Console Tab** : Voir tous les logs
3. **Chercher "GoPrint"** : Tous les logs de GoPrint commencent par `[GoPrint]`

### Logs Disponibles

```javascript
[GoPrint] Début du nettoyage de la page...
[GoPrint] 15 élément(s) supprimé(s)
[GoPrint] Styles d'impression appliqués
[GoPrint] 8 lien(s) formaté(s)
[GoPrint] Page nettoyée, lancement de l'impression...
[GoPrint] Sélecteur invalide: ".invalid" Error: ...
```

### Inspecter les Éléments

```javascript
// Dans la console DevTools, accéder à des éléments
document.querySelectorAll('nav')          // Tous les navs
document.querySelectorAll('.ad')          // Toutes les publis
document.querySelectorAll('a')            // Tous les liens
```

### Test d'un Sélecteur

```javascript
// Dans la console, avant de cliquer GoPrint
document.querySelectorAll('.mon-selecteur')  // Voir s'il y a des éléments
```

### Points de Rupture (Breakpoints)

1. Éditer `src/content/cleaner.js`
2. Ajouter `debugger;` où vous voulez arrêter
3. Recharger l'extension et la page
4. DevTools va pausser au breakpoint

Exemple :

```javascript
async function cleanAndPrint() {
  debugger;  // ← Pause d'exécution ici
  
  console.log('[GoPrint] Début du nettoyage...');
  // ...
}
```

---

## Bonnes Pratiques

### 1. Nommage Clair

```javascript
// ✅ BON
const removeUnwantedElements = () => { ... }

// ❌ MAUVAIS
const clean = () => { ... }
```

### 2. Commentaires Explicatifs

```javascript
// ✅ BON - Explique POURQUOI
// Attendre 300ms pour que le navigateur stabilise le DOM
// après la suppression des éléments
await delayByTiming(TIMING.BEFORE_PRINT);

// ❌ MAUVAIS - Explique seulement QUOI (évident du code)
// Attendre 300 millisecondes
setTimeout(() => {}, 300);
```

### 3. Modularité

```javascript
// ✅ BON - Fonctions petites et réutilisables
export function cleanDOM() { ... }
export function cleanCategory(category) { ... }

// ❌ MAUVAIS - Tout dans une seule fonction
function doEverything() {
  // 500 lignes de code
}
```

### 4. Gestion d'Erreurs

```javascript
// ✅ BON
try {
  const elements = document.querySelectorAll(selector);
  elements.forEach(el => el.remove());
} catch (error) {
  console.warn(`[GoPrint] Sélecteur invalide: "${selector}"`, error.message);
}

// ❌ MAUVAIS - Pas de gestion d'erreur
const elements = document.querySelectorAll(selector);
elements.forEach(el => el.remove());
```

### 5. Documentation JSDoc

```javascript
// ✅ BON
/**
 * Formate une URL pour affichage
 * 
 * @param {string} url - L'URL à formater
 * @returns {string} - URL formatée
 */
export function formatURL(url) { ... }

// ❌ MAUVAIS
function f(u) { ... }
```

### 6. Tests Avant Push

```bash
# Avant de pusher, vérifier :
✅ Extension se charge sans erreur
✅ Logs GoPrint corrects en console
✅ Pas d'erreur JavaScript
✅ Doc-simple.html se nettoie correctement
✅ Doc-complex.html se nettoie correctement
✅ PDF généré correctement
```

### 7. Messages de Commit Clairs

```bash
# ✅ BON
git commit -m "feat: ajouter support des widgets
- Ajouter sélecteur .widget à SELECTORS
- Mettre à jour tests manuels
- Ajouter widgets à doc-complex.html"

# ❌ MAUVAIS
git commit -m "fix stuff"
```

---

## Ressources

### Documentation

- [Manifest V3](https://developer.chrome.com/docs/extensions/mv3/)
- [Content Scripts](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)
- [Service Workers](https://developer.chrome.com/docs/extensions/mv3/service_workers/)
- [MDN CSS Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)

### Outils

- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [VS Code Extensions](https://marketplace.visualstudio.com/)

### Communauté

- [GitHub Issues](https://github.com/Godwin-creator/GoPrint/issues)
- [Chrome Extensions Discord](https://discord.gg/chrome-extensions)

---

## Questions Fréquentes

### Q : Comment recharger l'extension après une modification ?
**R :** Aller à `chrome://extensions/` et cliquer le bouton "Recharger" sur GoPrint

### Q : Comment voir les logs de GoPrint ?
**R :** F12 → Console → Filtrer "GoPrint"

### Q : Pourquoi mon sélecteur CSS ne marche pas ?
**R :** Tester d'abord avec `document.querySelectorAll()` dans la console

### Q : Comment tester sur une vraie page web ?
**R :** Aller sur n'importe quel site (GitHub, Medium, etc.) et cliquer l'icône GoPrint

### Q : Comment déboguer un problème ?
**R :** Lire manual-test-plan.md → Reproduire l'issue → Vérifier console → Ajouter breakpoints si nécessaire

---

**Merci pour vos contributions à GoPrint ! 🚀**

---

**Version :** 1.0.0  
**Dernière mise à jour :** 18 janvier 2026  
**Auteur :** Komi Godwin EDOH BEDI
