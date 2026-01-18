# 📲 Guide d'Installation Complet - GoPrint

**Version :** 1.0.0  
**Date :** 18 janvier 2026  
**Statut :** ✅ En développement / Mode développeur

---

## 🎯 Objectif

Ce guide vous permettra d'installer et de charger GoPrint dans votre navigateur Chromium (Chrome, Edge, Brave, etc.) pour tester l'extension en mode développeur.

---

## 📋 Prérequis

- ✅ **Navigateur** : Chrome, Edge, Brave, ou tout navigateur basé sur Chromium
- ✅ **Git** : Pour cloner le dépôt (optionnel si vous téléchargez le ZIP)
- ✅ **Accès administrateur** : Pour certains navigateurs d'entreprise

---

## 🚀 Installation Étape par Étape

### Étape 1 : Obtenir le Code Source

#### Option A : Avec Git (Recommandé)

```bash
git clone https://github.com/Godwin-creator/GoPrint.git
cd GoPrint
```

#### Option B : Télécharger le ZIP

1. Allez sur https://github.com/Godwin-creator/GoPrint
2. Cliquez sur **Code** (bouton vert)
3. Sélectionnez **Download ZIP**
4. Extraire le fichier ZIP dans un dossier de votre choix

### Étape 2 : Ouvrir la Page des Extensions

#### Pour Chrome/Chromium

1. **Ouvrir le navigateur**
2. **Taper dans la barre d'adresse :**
   ```
   chrome://extensions/
   ```
3. **Appuyer sur Entrée**

**Screenshot attendu :** Page des extensions avec bouton "Charger l'extension non empaquetée"
- 📸 Emplacement : `assets/screenshots/01-extensions-page.png`

#### Pour Edge

1. **Taper dans la barre d'adresse :**
   ```
   edge://extensions/
   ```
2. **Appuyer sur Entrée**

#### Pour Brave

1. **Taper dans la barre d'adresse :**
   ```
   brave://extensions/
   ```
2. **Appuyer sur Entrée**

### Étape 3 : Activer le Mode Développeur

1. **Chercher le toggle "Mode Développeur"** en haut à droite de la page
2. **Cliquer dessus** pour activer

**Screenshot attendu :** Toggle "Mode Développeur" activé
- 📸 Emplacement : `assets/screenshots/02-developer-mode.png`

### Étape 4 : Charger l'Extension

1. **Cliquer sur "Charger l'extension non empaquetée"**
   - Bouton bleu qui apparaît après activation du Mode Développeur

**Screenshot attendu :** Dialogue d'exploration de fichiers
- 📸 Emplacement : `assets/screenshots/03-load-extension-button.png`

2. **Naviguer vers le dossier GoPrint**
   - Si cloné avec Git : `C:\Users\EDOHB\Cloud MEGA\Documents\GoPrint`
   - Si ZIP téléchargé : Dossier d'extraction + `GoPrint-main`

3. **Sélectionner le dossier GoPrint** (celui contenant `manifest.json`)

4. **Cliquer sur "Sélectionner ce dossier"**

**Screenshot attendu :** Extension chargée avec icône visible
- 📸 Emplacement : `assets/screenshots/04-extension-loaded.png`

### Étape 5 : Vérifier le Chargement

Après le chargement réussi, vous devriez voir :

1. **L'extension listée** sur la page `chrome://extensions/`
2. **L'icône de GoPrint** dans la barre d'outils (coin haut-droit)
   - Icône verte avec le logo GoPrint

**Screenshot attendu :** Icône GoPrint dans la barre d'outils
- 📸 Emplacement : `assets/screenshots/05-goprint-icon.png`

---

## ✅ Tester l'Installation

### Test Rapide (2 minutes)

1. **Ouvrir une page de test**
   ```
   file:///C:/Users/EDOHB/Cloud%20MEGA/Documents/GoPrint/tests/test-pages/doc-simple.html
   ```

2. **Cliquer sur l'icône GoPrint** dans la barre d'outils

3. **Vérifier dans l'aperçu d'impression :**
   - ✅ Navigation disparaît
   - ✅ Header disparaît
   - ✅ Footer disparaît
   - ✅ Contenu texte reste visible

**Screenshot attendu :** Aperçu d'impression nettoyé
- 📸 Emplacement : `assets/screenshots/06-print-preview.png`

### Test Complet (30 minutes)

Consulter [tests/manual-test-plan.md](../tests/manual-test-plan.md) pour les 26 cas de test complets.

---

## 📊 Structure des Fichiers Installation

Après le clonage/extraction, votre dossier devrait ressembler à :

```
GoPrint/
├── manifest.json              ← Fichier important
├── README.md
├── INSTALLATION.md            ← Ce fichier
├── src/
│   ├── background/
│   │   └── service-worker.js
│   ├── content/
│   │   ├── cleaner.js
│   │   └── print-styles.css
│   ├── config/
│   ├── utils/
│   └── ... (autres fichiers)
├── tests/
│   └── test-pages/
│       ├── doc-simple.html
│       └── doc-complex.html
└── assets/
    ├── logo.png
    └── screenshots/
        ├── 01-extensions-page.png
        ├── 02-developer-mode.png
        ├── ... (autres screenshots)
```

---

## 🔧 Dépannage

### ❌ Problème : "Le bouton 'Charger l'extension' n'apparaît pas"

**Solution :**
1. Vérifier que le **Mode Développeur est activé** (toggle en haut à droite)
2. Si ce n'est pas le cas, cliquer sur le toggle
3. La page se rafraîchit et les boutons apparaissent

**Screenshot attendu :** Mode Développeur activé
- 📸 Emplacement : `assets/screenshots/02-developer-mode.png`

---

### ❌ Problème : "Erreur lors du chargement : manifest.json non trouvé"

**Solution :**
1. S'assurer que vous sélectionnez le **dossier GoPrint** (celui contenant `manifest.json`)
2. Ne pas sélectionner un sous-dossier comme `src/` ou `tests/`
3. Vérifier le chemin : `C:\...\GoPrint\manifest.json` devrait exister

**Chemin correct :** `C:\Users\EDOHB\Cloud MEGA\Documents\GoPrint` ✅  
**Chemin incorrect :** `C:\Users\EDOHB\Cloud MEGA\Documents\GoPrint\src` ❌

---

### ❌ Problème : "L'icône GoPrint n'apparaît pas dans la barre d'outils"

**Solution :**
1. Vérifier que l'extension est **activée** (toggle en haut à droite)
2. Vérifier qu'il n'y a **pas d'erreurs** en rouge dans la liste
3. **Recharger** la page (F5)
4. Vérifier le **coin haut-droit** - parfois cachée par d'autres icônes
5. Cliquer sur le **"puzzle" pour afficher les extensions**

**Screenshot attendu :** Menu des extensions montrant GoPrint
- 📸 Emplacement : `assets/screenshots/08-extension-menu.png`

---

### ❌ Problème : "L'extension se charge mais rien ne se passe"

**Solution :**
1. **Ouvrir la console** (F12)
2. **Onglet Console**
3. **Cliquer sur l'icône GoPrint**
4. Vérifier les logs commençant par `[GoPrint]`
5. Si erreurs en rouge, consulter [DEVELOPMENT.md](../DEVELOPMENT.md#debugging)

---

### ❌ Problème : "Certains fichiers semblent manquants"

**Solution :**
1. Vérifier que vous avez **bien cloné tout le dépôt**
2. Vérifier la présence de tous les fichiers dans `src/utils/` :
   - `dom-cleaner.js` ✅
   - `link-formatter.js` ✅
   - `timestamp.js` ✅
3. Si ZIP téléchargé, vérifier que l'extraction est **complète**

---

## 📲 Navigateurs Supportés

| Navigateur | Version Min. | Statut | URL Extensions |
|-----------|-------------|--------|-----------------|
| Chrome | 88+ | ✅ Supporté | `chrome://extensions/` |
| Edge | 88+ | ✅ Supporté | `edge://extensions/` |
| Brave | 1.0+ | ✅ Supporté | `brave://extensions/` |
| Opera | 74+ | ✅ Supporté | `opera://extensions/` |
| Chromium | 88+ | ✅ Supporté | `chrome://extensions/` |
| Firefox | N/A | ❌ Non supporté (MV2) | - |
| Safari | N/A | ❌ Non supporté | - |

---

## 🎓 Après l'Installation

### Étapes Suivantes

1. **Lire le guide d'utilisation**
   - Consulter [README.md](../README.md) section "Guide d'Utilisation"

2. **Tester sur une page de test**
   - [doc-simple.html](../tests/test-pages/doc-simple.html)
   - [doc-complex.html](../tests/test-pages/doc-complex.html)

3. **Tester sur des sites réels**
   - GitHub
   - Medium
   - Stack Overflow
   - MDN Web Docs

4. **Lire la documentation technique** (optionnel)
   - [DEVELOPMENT.md](../DEVELOPMENT.md) pour développeurs
   - [tests/manual-test-plan.md](../tests/manual-test-plan.md) pour testeurs

---

## 📸 Dossier des Captures d'Écran

Les captures d'écran suivantes devraient être présentes dans `assets/screenshots/` :

```
assets/screenshots/
├── 01-extensions-page.png          Page des extensions (chrome://extensions/)
├── 02-developer-mode.png           Toggle "Mode Développeur" activé
├── 03-load-extension-button.png    Bouton "Charger l'extension non empaquetée"
├── 04-extension-loaded.png         Extension chargée dans la liste
├── 05-goprint-icon.png             Icône GoPrint dans la barre d'outils
├── 06-print-preview.png            Aperçu d'impression nettoyé
├── 07-folder-selection.png         Dialogue de sélection du dossier
├── 08-extension-menu.png           Menu des extensions avec GoPrint
├── 09-first-click.png              Premier clic sur l'icône GoPrint
└── 10-settings-result.png          Résultat du nettoyage
```

**⚠️ À générer :** Ces captures doivent être prises et ajoutées au dossier `assets/screenshots/`

---

## 🔒 Sécurité et Confidentialité

### Données Collectées

**L'extension ne collecte AUCUNE donnée :**
- ❌ Pas de tracking
- ❌ Pas d'envoi à des serveurs
- ❌ Pas d'analyse d'usage
- ✅ Tout s'exécute localement sur votre navigateur

### Permissions Requises

L'extension demande uniquement :
- **`activeTab`** : Pour savoir quel onglet est actif
- **`scripting`** : Pour injecter le script de nettoyage
- **`http://*/*` et `https://*/*`** : Pour fonctionner sur toutes les pages web

---

## 🆘 Obtenir de l'Aide

### En Cas de Problème

1. **Consulter ce guide** (INSTALLATION.md)
2. **Lire la section Dépannage** ci-dessus
3. **Consulter [DEVELOPMENT.md](../DEVELOPMENT.md)** - FAQ
4. **Ouvrir une issue** sur [GitHub](https://github.com/Godwin-creator/GoPrint/issues)

### Ressources Utiles

- 📖 [Guide d'Utilisation](../README.md)
- 🔧 [Guide de Développement](../DEVELOPMENT.md)
- 🧪 [Plan de Tests](../tests/manual-test-plan.md)
- ⚡ [Guide Rapide](../QUICKSTART.md)

---

## ✨ Prochaines Étapes

Après installation réussie :

1. ✅ **Tester** sur les pages fournies
2. ✅ **Explorer** la documentation
3. ✅ **Tester** sur vos sites préférés
4. ✅ **Réporter** les bugs trouvés
5. ✅ **Contribuer** (optionnel)

---

## 📝 Checklist Installation

- [ ] Git installé (ou ZIP téléchargé)
- [ ] Code source obtenu
- [ ] Navigateur Chromium ouverts
- [ ] Page `chrome://extensions/` ouverte
- [ ] Mode Développeur activé
- [ ] Dossier GoPrint sélectionné
- [ ] Extension chargée avec succès
- [ ] Icône GoPrint visible dans la barre d'outils
- [ ] Test rapide réussi (page doc-simple.html)
- [ ] Documentations lues

---

**Installation Complétée ! 🎉**

Vous êtes maintenant prêt à utiliser GoPrint. Consultez le [README.md](../README.md) pour le guide d'utilisation complet.

---

**Généré :** 18 janvier 2026  
**Version :** 1.0.0  
**Auteur :** Komi Godwin EDOH BEDI  
**Statut :** ✅ COMPLET - À mettre à jour avec screenshots
