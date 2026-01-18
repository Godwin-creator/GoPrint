# 📸 Guide pour Générer les Captures d'Écran - GoPrint

**Version :** 1.0.0  
**Date :** 18 janvier 2026

---

## 🎯 Objectif

Ce guide explique comment générer et placer les captures d'écran nécessaires pour le guide d'installation complet.

---

## 📋 Liste des Screenshots à Générer

| # | Nom Fichier | Description | Dossier |
|---|---|---|---|
| 1 | `01-extensions-page.png` | Page chrome://extensions/ | `assets/screenshots/` |
| 2 | `02-developer-mode.png` | Toggle "Mode Développeur" activé | `assets/screenshots/` |
| 3 | `03-load-extension-button.png` | Bouton "Charger l'extension non empaquetée" visible | `assets/screenshots/` |
| 4 | `04-extension-loaded.png` | Extension chargée dans la liste | `assets/screenshots/` |
| 5 | `05-goprint-icon.png` | Icône GoPrint dans la barre d'outils | `assets/screenshots/` |
| 6 | `06-print-preview.png` | Aperçu d'impression nettoyé | `assets/screenshots/` |
| 7 | `07-folder-selection.png` | Dialogue de sélection du dossier GoPrint | `assets/screenshots/` |
| 8 | `08-extension-menu.png` | Menu des extensions avec GoPrint épinglée | `assets/screenshots/` |
| 9 | `09-first-click.png` | Résultat du premier clic sur GoPrint | `assets/screenshots/` |
| 10 | `10-settings-result.png` | Résultat final du nettoyage | `assets/screenshots/` |

---

## 🎬 Étapes pour Générer chaque Screenshot

### Screenshot 1 : Page des Extensions

```
Fichier : 01-extensions-page.png
Taille   : 1280x720 (minimum)
Format   : PNG
```

**Procédure :**
1. Ouvrir Chrome/Edge/Brave
2. Accéder à `chrome://extensions/`
3. **Prendre une capture** (Print Screen ou F12 → Aperçu)
4. Montrer : Page des extensions vide, avant activation Mode Développeur

**Points importants visibles :**
- ✅ Barre d'adresse avec `chrome://extensions/`
- ✅ Aucune extension chargée
- ✅ Zone en haut à droite (pas de toggle visible encore)

---

### Screenshot 2 : Mode Développeur Activé

```
Fichier : 02-developer-mode.png
Taille   : 1280x720 (minimum)
Format   : PNG
```

**Procédure :**
1. Depuis la page des extensions
2. Cliquer sur le toggle **"Mode Développeur"** en haut à droite
3. Le toggle devient bleu/activé
4. **Prendre une capture**

**Points importants visibles :**
- ✅ Toggle "Mode Développeur" en haut à droite (ACTIVÉ = bleu)
- ✅ Les nouveaux boutons apparaissent en bas (dont "Charger l'extension")

---

### Screenshot 3 : Bouton "Charger l'Extension"

```
Fichier : 03-load-extension-button.png
Taille   : 400x200 (minimum)
Format   : PNG
```

**Procédure :**
1. Mode Développeur toujours activé
2. Zoomer sur la zone du bouton bleu "Charger l'extension non empaquetée"
3. **Prendre une capture rapprochée**

**Points importants visibles :**
- ✅ Bouton bleu "Charger l'extension non empaquetée"
- ✅ Bouton "Packer l'extension" à côté (optionnel)

---

### Screenshot 4 : Extension Chargée

```
Fichier : 04-extension-loaded.png
Taille   : 1280x500 (minimum)
Format   : PNG
```

**Procédure :**
1. Charger l'extension GoPrint (voir INSTALLATION.md)
2. Voir la fiche GoPrint dans la liste
3. **Prendre une capture** de la fiche complète

**Points importants visibles :**
- ✅ Nom : "GoPrint"
- ✅ Description
- ✅ Version : "1.0.0"
- ✅ Boutons d'action (Désactiver, Détails, Supprimer)
- ✅ Icône de l'extension

---

### Screenshot 5 : Icône GoPrint dans la Barre d'Outils

```
Fichier : 05-goprint-icon.png
Taille   : 600x100 (minimum)
Format   : PNG
```

**Procédure :**
1. Avec l'extension chargée
2. Regarder la **barre d'outils** (coin haut-droit)
3. Chercher l'**icône verte GoPrint**
4. **Prendre une capture** de cette zone

**Points importants visibles :**
- ✅ Icône GoPrint dans la barre d'outils
- ✅ Tooltip "GoPrint - Imprimer la page nettoyée" au survol

---

### Screenshot 6 : Aperçu d'Impression Nettoyé

```
Fichier : 06-print-preview.png
Taille   : 1280x720 (minimum)
Format   : PNG
```

**Procédure :**
1. Ouvrir `tests/test-pages/doc-simple.html`
2. Cliquer sur l'icône GoPrint
3. La boîte d'impression s'ouvre avec **aperçu nettoyé**
4. **Prendre une capture** de l'aperçu

**Points importants visibles :**
- ✅ Navigation supprimée (pas de nav en haut)
- ✅ Header supprimé
- ✅ Contenu texte visible
- ✅ Boîte de dialogue "Imprimer" ouverte

---

### Screenshot 7 : Dialogue de Sélection du Dossier

```
Fichier : 07-folder-selection.png
Taille   : 800x600 (minimum)
Format   : PNG
```

**Procédure :**
1. Depuis `chrome://extensions/` avec Mode Développeur activé
2. Cliquer sur "Charger l'extension non empaquetée"
3. Un **dialogue d'exploration** s'ouvre
4. **Prendre une capture** montrant le dossier GoPrint sélectionné

**Points importants visibles :**
- ✅ Chemin du dossier GoPrint
- ✅ Fichier `manifest.json` visible dans le dossier
- ✅ Bouton "Sélectionner ce dossier"

---

### Screenshot 8 : Menu des Extensions (Épingler GoPrint)

```
Fichier : 08-extension-menu.png
Taille   : 400x300 (minimum)
Format   : PNG
```

**Procédure :**
1. Cliquer sur l'icône "**puzzle**" dans la barre d'outils
2. Un **menu des extensions** apparaît
3. GoPrint devrait être visible dans la liste
4. **Prendre une capture** du menu

**Points importants visibles :**
- ✅ Icône du puzzle (extensions manager)
- ✅ Liste des extensions
- ✅ GoPrint avec icône verte
- ✅ Bouton épingle pour épingler GoPrint

---

### Screenshot 9 : Premier Clic sur GoPrint

```
Fichier : 09-first-click.png
Taille   : 1280x720 (minimum)
Format   : PNG
```

**Procédure :**
1. Ouvrir n'importe quelle page (ex: `doc-simple.html`)
2. Cliquer sur l'**icône GoPrint**
3. Voir les **logs en console** (F12)
4. **Prendre une capture** avec la console ouverte

**Points importants visibles :**
- ✅ Icône GoPrint dans la barre d'outils
- ✅ Console DevTools ouverte (F12)
- ✅ Logs commençant par `[GoPrint]`
- ✅ Messages de progression du nettoyage

---

### Screenshot 10 : Résultat Final du Nettoyage

```
Fichier : 10-settings-result.png
Taille   : 1280x720 (minimum)
Format   : PNG
```

**Procédure :**
1. Cliquer sur l'icône GoPrint
2. Observer l'**aperçu d'impression**
3. Comparer avant/après
4. **Prendre une capture** montrant le résultat

**Points importants visibles :**
- ✅ Page nettoyée dans l'aperçu
- ✅ Navigation supprimée
- ✅ Contenu lisible
- ✅ Boîte de dialogue "Imprimer" prête

---

## 🎞️ Outils pour Prendre des Screenshots

### Outil 1 : Capture d'Écran Windows (Intégré)

```
Windows + Maj + S
```

**Avantages :**
- ✅ Intégré à Windows
- ✅ Aucune installation
- ✅ Permet de sélectionner une zone

**Inconvénients :**
- ❌ Sauvegarde manuelle requise

---

### Outil 2 : Firefox Developer Tools (Si Chrome ne suffit pas)

```
F12 → ⋮ (menu) → Capturer une capture d'écran
```

**Avantages :**
- ✅ Capture pleine page
- ✅ Redimensionne automatiquement

---

### Outil 3 : Chrome DevTools Intégré

```
F12 → Ctrl+Maj+P → "Capture screenshot"
```

**Avantages :**
- ✅ Capture de la vue actuelle
- ✅ Intégré au navigateur

---

## 📁 Organisation des Fichiers

Après génération des screenshots, la structure devrait être :

```
GoPrint/
├── assets/
│   ├── logo.png
│   ├── screenshots/
│   │   ├── 01-extensions-page.png
│   │   ├── 02-developer-mode.png
│   │   ├── 03-load-extension-button.png
│   │   ├── 04-extension-loaded.png
│   │   ├── 05-goprint-icon.png
│   │   ├── 06-print-preview.png
│   │   ├── 07-folder-selection.png
│   │   ├── 08-extension-menu.png
│   │   ├── 09-first-click.png
│   │   └── 10-settings-result.png
│   └── ... (autres assets)
```

---

## ✅ Optimisation des Images

Pour optimiser les fichiers PNG :

1. **Redimensionner** à la taille recommandée
2. **Compresser** avec TinyPNG (https://tinypng.com/)
3. **Format** : PNG ou WebP
4. **Taille cible** : < 500KB par image

**Outils recommandés :**
- **TinyPNG** : Compression en ligne
- **ImageMagick** : Ligne de commande
- **GIMP** : Édition complète

---

## 🎨 Recommandations de Conception

### Résolution

- **Minimum** : 1280x720 (720p)
- **Idéal** : 1920x1080 (1080p)
- **Format** : 16:9

### Contenu à Montrer

- ✅ URL dans la barre d'adresse
- ✅ Barre d'outils visible
- ✅ Éléments clés surlignés
- ✅ Pas d'informations sensibles visibles

### Annotations (Optionnel)

- **Flèches** pointant vers les éléments clés
- **Boîtes** autour des boutons importants
- **Texte** expliquant ce qui se passe

**Outil** : Snagit, Markup Anywhere, ou Paint

---

## 📤 Ajouter les Screenshots au Git

```bash
# Ajouter les screenshots
git add assets/screenshots/

# Vérifier les fichiers
git status

# Commiter
git commit -m "docs: ajouter captures d'écran pour guide d'installation

- 10 captures d'écran du processus d'installation
- Screenshots du processus de chargement de l'extension
- Aperçus du résultat du nettoyage
- Tailles optimisées pour documentation"

# Pusher
git push origin main
```

---

## ✨ Checklist Génération Screenshots

Pour chaque screenshot :

- [ ] Généré en haute résolution (min 1280x720)
- [ ] Sauvegardé en PNG/WebP
- [ ] Comprimé (< 500KB)
- [ ] Nommé correctement (`01-*`, `02-*`, etc.)
- [ ] Placé dans `assets/screenshots/`
- [ ] Visible et claire
- [ ] Pas d'informations sensibles
- [ ] Référencé dans INSTALLATION.md

---

## 🎯 Prochaines Étapes

1. **Générer** les 10 screenshots
2. **Optimiser** les tailles
3. **Ajouter** au dossier `assets/screenshots/`
4. **Commiter** et pusher
5. **Vérifier** que INSTALLATION.md affiche les images

---

## 📞 Aide

Si vous avez des questions sur :
- **Comment prendre une screenshot** → Voir outils ci-dessus
- **Où placer les fichiers** → `assets/screenshots/`
- **Nomenclature** → `01-nom.png`, `02-nom.png`, etc.

---

**Prêt à générer les screenshots ? 🎬**

Une fois complétés, votre guide d'installation sera complet avec visuels !

---

**Généré :** 18 janvier 2026  
**Version :** 1.0.0  
**Statut :** ✅ À suivre pour générer screenshots
