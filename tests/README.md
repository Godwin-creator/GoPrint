# Tests - GoPrint

## Structure

Ce dossier contient tous les éléments nécessaires pour tester l'extension GoPrint avant sa publication.

```
tests/
├── test-pages/              # Pages HTML de test
│   ├── doc-simple.html      # Page simple avec éléments basiques
│   └── doc-complex.html     # Page complexe avec multimedia
├── manual-test-plan.md      # Plan complet de tests manuels
└── README.md                # Ce fichier
```

## Pages de Test

### 1. `doc-simple.html`

Page HTML légère pour tester le nettoyage basique.

**Contient :**
- Navigation, Header, Footer
- Barre latérale
- Publicités simples
- Bannière de cookies
- Boutons de partage
- Contenu texte et code

**Utilisation :**
```bash
# Ouvrir directement dans le navigateur
file:///C:/Users/EDOHB/Cloud MEGA/Documents/GoPrint/tests/test-pages/doc-simple.html

# Ou via un serveur local
python -m http.server
# Puis accéder à http://localhost:8000/tests/test-pages/doc-simple.html
```

**Éléments à supprimer :**
-  Barre de navigation
-  Header gradient
-  Footer
-  Barre latérale grise
-  Publicités
-  Bannière cookies
-  Boutons de partage

**Éléments à conserver :**
-  Contenu texte
-  Titres (H2, H3)
-  Blocs de code
-  Listes
-  Liens avec URLs

### 2. `doc-complex.html`

Page HTML complexe avec plusieurs sections, multimedia et contenus avancés.

**Contient :**
- Navigation sticky
- Header avec gradient
- Barre latérale avec contenu secondaire
- Publicités multiples
- Bannière cookies
- Formulaire newsletter
- Section commentaires
- Tables de données
- Grilles de cartes
- Images (placeholders)
- Alerts avec différents styles
- Blockquotes

**Utilisation :**
```bash
file:///C:/Users/EDOHB/Cloud MEGA/Documents/GoPrint/tests/test-pages/doc-complex.html
```

**Éléments à supprimer :**
-  Navigation sticky
-  Header avec gradient
-  Aside/Barre latérale
-  Publicités multiples
-  Bannière cookies
-  Formulaire newsletter
-  Section commentaires
-  Footer
-  Tous les boutons

**Éléments à conserver :**
-  Titres et sections
-  Tables
-  Grilles de contenu
-  Texte et paragraphes
-  Blocs de code
-  Alerts/Messages
-  Liens avec URLs
-  Images

## Plan de Tests

Consulter [manual-test-plan.md](manual-test-plan.md) pour :
- Instructions de configuration
- Tests détaillés par catégorie
- Critères d'acceptation
- Raport de test template

## Procédure de Test Rapide

1. **Installer l'extension** (consulter [INSTALLATION.md](../INSTALLATION.md) pour instructions détaillées avec captures d'écran)
   ```
   chrome://extensions/ → Mode Développeur ON → Charger extension non empaquetée → Sélectionner GoPrint/
   ```

2. **Tester sur page simple**
   - Ouvrir `doc-simple.html`
   - Cliquer icône GoPrint
   - Vérifier disparition des éléments

3. **Tester sur page complexe**
   - Ouvrir `doc-complex.html`
   - Cliquer icône GoPrint
   - Valider que contenu reste lisible

4. **Générer PDF**
   - Dans boîte d'impression : "Enregistrer en PDF"
   - Vérifier qualité et complétude

5. **Tester sur sites réels**
   - GitHub (docs techniques)
   - Medium (articles)
   - Stack Overflow (Q&A)

## Checklist de Validation

### Avant chaque test
- [ ] Extension chargée dans le navigateur
- [ ] Console développeur ouverte (pour voir logs)
- [ ] Page complètement chargée

### Pendant le test
- [ ] Cliquer icône GoPrint
- [ ] Vérifier les logs en console
- [ ] Examiner l'aperçu d'impression
- [ ] Valider les éléments supprimés/conservés

### Après le test
- [ ] Générer PDF de test
- [ ] Vérifier contenu du PDF
- [ ] Documenter résultats

## Points Critiques à Vérifier

1. **Pas d'erreur JavaScript**
   - Ouvrir DevTools (F12)
   - Chercher des erreurs rouges
   - **Résultat attendu :** Aucune erreur

2. **Navigation supprimée**
   - Aucune barre de nav visible
   - Aucun menu horizontal/vertical
   - **Résultat attendu :** Page commence directement avec le contenu

3. **Publicités supprimées**
   - Aucune zone jaune/grise annonces
   - Aucun bloc marketing
   - **Résultat attendu :** Uniquement contenu pertinent

4. **Cookies disparus**
   - Aucune bannière en bas
   - Aucune popup consentement
   - **Résultat attendu :** Page "propre" sans dérangements

5. **Contenu intact**
   - Tous les titres visibles
   - Tout le texte conservé
   - Blocs de code lisibles
   - Liens cliquables
   - **Résultat attendu :** Structure et hiérarchie préservées

## Outils Recommandés

### Serveur Local
```bash
# Python 3
python -m http.server

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

### Inspection
- DevTools Chrome (F12)
- Console pour logs GoPrint
- Onglet Elements pour vérifier suppression DOM

### Documentation
- MDN Web Docs : https://developer.mozilla.org/
- Chrome DevTools Guide : https://developer.chrome.com/docs/devtools/

## Dépannage

### "Extension non chargée"
→ Vérifier que le dossier GoPrint contient manifest.json

### "Rien ne se passe au clic"
→ Vérifier console (F12) pour erreurs
→ Vérifier que page n'est pas une page système (chrome://)

### "PDF vide ou incomplet"
→ Vérifier que page est complètement chargée
→ Attendre quelques secondes avant impression
→ Essayer Ctrl+P manuel après nettoyage

### "Certains éléments ne disparaissent pas"
→ Vérifier sélecteur CSS dans SELECTORS
→ Ajouter nouveau sélecteur si besoin
→ Tester avec querySelector() en console

## Contribution aux Tests

Pour ajouter une nouvelle page de test :

1. Créer nouveau fichier `doc-[nom].html` dans `test-pages/`
2. Inclure éléments similaires à doc-simple.html ou doc-complex.html
3. Documenter les éléments attendus à supprimer
4. Ajouter un test case dans manual-test-plan.md

## Ressources

- **GoPrint GitHub :** https://github.com/Godwin-creator/GoPrint
- **Manifest V3 :** https://developer.chrome.com/docs/extensions/mv3/
- **CSS Selectors :** https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors

---

**Version :** 1.0.0  
**Dernière mise à jour :** 18 janvier 2026  
**Statut :**  Actif
