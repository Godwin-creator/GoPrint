# 📦 Assets - GoPrint

## Structure

```
assets/
├── logo.png                 # Logo de l'extension (220x220px minimum)
├── icon-*.png              # Icônes pour l'extension (16x16, 32x32, 48x48, 128x128)
└── screenshots/            # Captures d'écran du guide d'installation
    ├── 01-extensions-page.png
    ├── 02-developer-mode.png
    ├── 03-load-extension-button.png
    ├── 04-extension-loaded.png
    ├── 05-goprint-icon.png
    ├── 06-print-preview.png
    ├── 07-folder-selection.png
    ├── 08-extension-menu.png
    ├── 09-first-click.png
    └── 10-settings-result.png
```

## Logo

**Fichier :** `logo.png`  
**Dimensions :** 220x220px minimum (idéalement 512x512px)  
**Format :** PNG transparent  
**Utilisation :** Affichage dans README.md et descriptions

## Icônes de l'Extension

**Fichiers :** `icon-16.png`, `icon-32.png`, `icon-48.png`, `icon-128.png`  
**Dimensions :** 16x16, 32x32, 48x48, 128x128 pixels  
**Format :** PNG transparent  
**Utilisation :** Barre d'outils, liste des extensions, Chrome Web Store

**Référence dans manifest.json :**
```json
"icons": {
  "16": "icons/icon-16.png",
  "32": "icons/icon-32.png",
  "48": "icons/icon-48.png",
  "128": "icons/icon-128.png"
}
```

## Screenshots

**Dossier :** `assets/screenshots/`  
**Format :** PNG (recommandé) ou WebP  
**Taille** : 1280x720px minimum (1920x1080px idéal)  
**Compression :** < 500KB par image

### Liste des Screenshots à Générer

Voir [SCREENSHOTS_GUIDE.md](../SCREENSHOTS_GUIDE.md) pour instructions complètes sur comment générer chaque screenshot.

| # | Nom | Description |
|---|---|---|
| 01 | `extensions-page.png` | Page chrome://extensions/ |
| 02 | `developer-mode.png` | Toggle Mode Développeur activé |
| 03 | `load-extension-button.png` | Bouton "Charger l'extension" |
| 04 | `extension-loaded.png` | Extension dans la liste |
| 05 | `goprint-icon.png` | Icône dans la barre d'outils |
| 06 | `print-preview.png` | Aperçu d'impression nettoyé |
| 07 | `folder-selection.png` | Dialogue de sélection dossier |
| 08 | `extension-menu.png` | Menu des extensions |
| 09 | `first-click.png` | Console après premier clic |
| 10 | `settings-result.png` | Résultat final nettoyage |

## Optimisation des Images

### Outils Recommandés

1. **TinyPNG** (https://tinypng.com/)
   - Compression en ligne
   - PNG et WebP
   - Gratuit

2. **ImageMagick** (CLI)
   ```bash
   convert input.png -quality 85 -resize 1280x720 output.png
   ```

3. **GIMP**
   - Édition complète
   - Export optimisé

### Recommandations

- **PNG :** Format par défaut, support transparent
- **WebP :** Format moderne, compression meilleure
- **Taille cible :** 50-200KB par image
- **Compression :** Lossy acceptable pour screenshots

## Utilisation dans la Documentation

### En Markdown

```markdown
![Description alternative](assets/logo.png)
![Screenshot 1](assets/screenshots/01-extensions-page.png)
```

### En HTML

```html
<img src="assets/logo.png" alt="Logo GoPrint" width="220">
```

## Guidelines

### Logo

- ✅ Fond transparent
- ✅ Lisible à petite taille (16px minimum)
- ✅ Icône clairement identifiable
- ✅ Respecte la couleur de l'extension (vert)

### Screenshots

- ✅ Texte lisible (police ≥ 12px)
- ✅ Barre d'adresse visible
- ✅ Éléments clés visibles
- ✅ Pas d'informations sensibles
- ✅ Résolution cohérente

### Icônes

- ✅ Même design à toutes les tailles
- ✅ Lisible au plus petit format (16px)
- ✅ Transparent si possible
- ✅ Cohérent avec le logo

## Ajouter des Fichiers

```bash
# Créer le dossier screenshots s'il n'existe pas
mkdir -p assets/screenshots

# Ajouter les images au git
git add assets/
git commit -m "docs: ajouter assets (logo, icônes, screenshots)"
git push origin main
```

## Lignes Directrices de Marque

### Couleurs

- **Primaire :** Vert (#667eea)
- **Secondaire :** Violet (#764ba2)
- **Accent :** Texte noir sur fond blanc
- **Logo :** Gradient vert-violet

### Police

- **Titres :** Segoe UI Bold ou similaire
- **Corps :** Segoe UI Regular ou sans-serif

### Style

- Moderne et clean
- Minimaliste
- Axé sur la clarté

## Maintenance

### Mettre à Jour

Si le design change :

1. **Créer une nouvelle version** des assets
2. **Nommer avec version** : `logo-v2.png`
3. **Mettre à jour** les références
4. **Commiter** avec message clair

```bash
git commit -m "design: mettre à jour assets pour v1.1
- Nouveau logo avec meilleur contraste
- Icônes redessinées
- Screenshots mis à jour"
```

---

**Status :** ✅ Prêt pour ajout des assets

Pour ajouter les screenshots, consulter [SCREENSHOTS_GUIDE.md](../SCREENSHOTS_GUIDE.md)

---

**Généré :** 18 janvier 2026  
**Version :** 1.0.0  
**Auteur :** Komi Godwin EDOH BEDI
