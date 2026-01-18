# Plan de Tests Manuel - GoPrint

## Vue d'Ensemble

Ce document décrit le plan de tests manuel pour valider le fonctionnement de l'extension GoPrint. Il couvre les différentes catégories de sélecteurs CSS et les cas d'usage critiques.

---

## 1. Préparation de l'Environnement de Test

### 1.1 Installation de l'Extension

1. Ouvrir Chrome, Edge ou Brave
2. Accéder à `chrome://extensions/` (ou l'équivalent pour votre navigateur)
3. Activer le **Mode Développeur** (coin supérieur droit)
4. Cliquer sur **Charger l'extension non empaquetée**
5. Sélectionner le dossier `GoPrint`
6. Vérifier que l'icône GoPrint apparaît dans la barre d'outils

### 1.2 Pages de Test

Deux pages HTML de test sont fournies :
- **`tests/test-pages/doc-simple.html`** - Page simple avec éléments basiques
- **`tests/test-pages/doc-complex.html`** - Page complexe avec multimedia et contenus avancés

Ces pages peuvent être :
- Ouvertes directement dans le navigateur (`file://` URL)
- Servies via un serveur local (ex: `python -m http.server`)

---

## 2. Tests par Catégorie de Sélecteurs

### 2.1 Nettoyage de la Structure (Navigation et En-têtes)

**Éléments à tester :** `nav`, `header`, `footer`, `aside`, `.sidebar`

**Test #1 : Suppression de la Navigation**
- [ ] Ouvrir `doc-simple.html`
- [ ] Cliquer sur l'icône GoPrint
- [ ] Vérifier que la barre de navigation en haut disparaît
- [ ] La boîte de dialogue d'impression devrait s'ouvrir
- [ ] **Résultat attendu :** Aucune barre de navigation visible dans l'aperçu

**Test #2 : Suppression du Header**
- [ ] Ouvrir `doc-simple.html`
- [ ] Cliquer sur l'icône GoPrint
- [ ] Vérifier que le header coloré (titre principal) disparaît
- [ ] **Résultat attendu :** Aucun en-tête bleu/violet en haut de la page

**Test #3 : Suppression du Footer**
- [ ] Ouvrir `doc-simple.html`
- [ ] Cliquer sur l'icône GoPrint
- [ ] Vérifier que le footer en bas (copyright) disparaît
- [ ] **Résultat attendu :** Pas de contenu gris foncé en bas de page

**Test #4 : Suppression de la Barre Latérale**
- [ ] Ouvrir `doc-complex.html`
- [ ] Cliquer sur l'icône GoPrint
- [ ] Vérifier que la barre latérale (grise avec texte) disparaît
- [ ] **Résultat attendu :** Contenu principal plus large, sans barre latérale

### 2.2 Nettoyage des Publicités

**Éléments à tester :** `.ad`, `.ads`, `.advertisement`, `[class*="ad-"]`, `iframe[src*="ads"]`

**Test #5 : Suppression des Publicités Simples**
- [ ] Ouvrir `doc-complex.html`
- [ ] Cliquer sur l'icône GoPrint
- [ ] Vérifier que les boîtes jaunes avec texte "Publicité" disparaissent
- [ ] **Résultat attendu :** 2-3 blocs publicitaires complètement supprimés

**Test #6 : Suppression des Conteneurs d'Annonces**
- [ ] Ouvrir `doc-simple.html`
- [ ] Cliquer sur l'icône GoPrint
- [ ] Vérifier que le bloc `.ads` disparaît
- [ ] **Résultat attendu :** Zone de contenu commercial supprimée

### 2.3 Nettoyage des Bannières de Cookies

**Éléments à tester :** `.cookie-banner`, `.cookie-notice`, `[class*="cookie"]`

**Test #7 : Suppression de la Bannière de Cookies**
- [ ] Ouvrir `doc-simple.html` ou `doc-complex.html`
- [ ] Cliquer sur l'icône GoPrint
- [ ] Vérifier que la bannière cookies (en bas de page, noire) disparaît
- [ ] **Résultat attendu :** Aucune bannière de cookies visible

**Test #8 : Suppression Complète des Éléments Cookies**
- [ ] Vérifier que tous les éléments avec "cookie" dans la classe sont supprimés
- [ ] **Résultat attendu :** Aucun élément de consentement visible

### 2.4 Nettoyage des Éléments Sociaux

**Éléments à tester :** `.share-buttons`, `.social-share`, `.social-icons`

**Test #9 : Suppression des Boutons de Partage**
- [ ] Ouvrir `doc-complex.html`
- [ ] Cliquer sur l'icône GoPrint
- [ ] Vérifier que les boutons "Twitter, Facebook, LinkedIn" disparaissent
- [ ] **Résultat attendu :** Zone de boutons de partage complètement supprimée

**Test #10 : Absence de Réseaux Sociaux**
- [ ] Vérifier que tout contenu lié aux réseaux sociaux est absent
- [ ] **Résultat attendu :** Pas d'icônes ou de liens sociaux visibles

### 2.5 Nettoyage des Formulaires et Interactions

**Éléments à tester :** `form`, `.newsletter`, `button`

**Test #11 : Suppression des Formulaires**
- [ ] Ouvrir `doc-complex.html`
- [ ] Cliquer sur l'icône GoPrint
- [ ] Vérifier que la zone newsletter (gradient) disparaît
- [ ] **Résultat attendu :** Zone de formulaire complètement supprimée

**Test #12 : Suppression des Boutons**
- [ ] Vérifier que tous les boutons interactifs sont supprimés
- [ ] **Résultat attendu :** Aucun bouton visible dans l'aperçu

### 2.6 Nettoyage des Commentaires

**Éléments à tester :** `.comments`, `#comments`

**Test #13 : Suppression de la Section Commentaires**
- [ ] Ouvrir `doc-complex.html`
- [ ] Cliquer sur l'icône GoPrint
- [ ] Vérifier que la section "Commentaires" disparaît
- [ ] **Résultat attendu :** Pas de commentaires utilisateur visibles

---

## 3. Tests de Conservation d'Éléments

### 3.1 Conservation du Contenu Principal

**Test #14 : Contenu Texte Conservé**
- [ ] Ouvrir `doc-simple.html`
- [ ] Cliquer sur l'icône GoPrint
- [ ] Vérifier que les paragraphes de texte restent visibles
- [ ] **Résultat attendu :** Tout le contenu principal est conservé

**Test #15 : Titres Conservés**
- [ ] Vérifier que les `<h2>` et `<h3>` restent visibles
- [ ] **Résultat attendu :** Structure hiérarchique du document intacte

**Test #16 : Listes Conservées**
- [ ] Vérifier que les listes à puces et numérotées restent visibles
- [ ] **Résultat attendu :** Tous les éléments `<ul>` et `<ol>` conservés

### 3.2 Conservation du Code et des Exemples

**Test #17 : Blocs de Code Préservés**
- [ ] Ouvrir `doc-simple.html` ou `doc-complex.html`
- [ ] Cliquer sur l'icône GoPrint
- [ ] Vérifier que les blocs `<pre>` et `<code>` restent visibles
- [ ] **Résultat attendu :** Code avec coloration de fond intacte

**Test #18 : Citations Préservées**
- [ ] Vérifier que les `<blockquote>` restent visibles
- [ ] **Résultat attendu :** Citations avec border-left intactes

### 3.3 Conservation des Liens

**Test #19 : Liens Cliquables**
- [ ] Ouvrir `doc-complex.html`
- [ ] Cliquer sur l'icône GoPrint
- [ ] Dans l'aperçu, vérifier que les liens `<a>` restent visibles
- [ ] Les URLs doivent être affichées à côté du texte du lien
- [ ] **Résultat attendu :** "MDN Web Docs (https://developer.mozilla.org/...)"

**Test #20 : Formatage des URLs**
- [ ] Vérifier que les URLs courtes sont affichées
- [ ] Les URLs très longues (> 100 caractères) devraient être ignorées
- [ ] **Résultat attendu :** Format cohérent de "texte (URL)"

---

## 4. Tests de Performance et Stabilité

### 4.1 Temps de Traitement

**Test #21 : Vitesse sur Page Simple**
- [ ] Ouvrir `doc-simple.html`
- [ ] Ouvrir la console (F12)
- [ ] Cliquer sur l'icône GoPrint
- [ ] Vérifier que les logs commencent immédiatement
- [ ] **Résultat attendu :** Traitement < 1 seconde

**Test #22 : Vitesse sur Page Complexe**
- [ ] Ouvrir `doc-complex.html`
- [ ] Cliquer sur l'icône GoPrint
- [ ] Vérifier que le traitement reste < 2 secondes
- [ ] **Résultat attendu :** Pas de blocage visible

### 4.2 Gestion des Erreurs

**Test #23 : Sélecteurs Invalides**
- [ ] Ouvrir la console (F12)
- [ ] Cliquer sur l'icône GoPrint
- [ ] Vérifier qu'aucune erreur JavaScript n'est levée
- [ ] Les avertissements pour sélecteurs invalides sont acceptables
- [ ] **Résultat attendu :** Pas d'erreur critique

---

## 5. Tests d'Impression et PDF

### 5.1 Aperçu d'Impression

**Test #24 : Aperçu Avant Impression**
- [ ] Ouvrir n'importe quelle page de test
- [ ] Cliquer sur l'icône GoPrint
- [ ] Observer l'aperçu dans la boîte de dialogue d'impression
- [ ] Vérifier que :
  - [ ] Navigation disparaît
  - [ ] Publicités disparaissent
  - [ ] Contenu principal reste lisible
  - [ ] Mise en page est propre
- [ ] **Résultat attendu :** Aperçu professionnel sans clutter

### 5.2 Export PDF

**Test #25 : Sauvegarde en PDF**
- [ ] Cliquer sur "Enregistrer en PDF" dans la boîte d'impression
- [ ] Sauvegarder le fichier
- [ ] Ouvrir le PDF généré
- [ ] Vérifier que :
  - [ ] Aucun en-tête de site
  - [ ] Aucune publicité
  - [ ] Aucune barre latérale
  - [ ] Tout le contenu est présent
- [ ] **Résultat attendu :** PDF professionnel et lisible

**Test #26 : Qualité du PDF**
- [ ] Vérifier que le texte est net et lisible
- [ ] Vérifier que les images sont conservées si présentes
- [ ] Vérifier que la mise en page est cohérente
- [ ] **Résultat attendu :** Qualité PDF acceptable

---

## 6. Tests sur Sites Réels

Après validation sur les pages de test, tester sur des sites réels :

**Sites Recommandés :**
- [ ] **GitHub** (documentation technique) - Dépôt GoPrint
- [ ] **Stack Overflow** (questions/réponses)
- [ ] **Medium** (articles)
- [ ] **W3Schools** (tutoriels)
- [ ] **Documentation MDN** (référence web)

**Pour Chaque Site :**
1. Accéder à un article/documentation
2. Cliquer sur l'icône GoPrint
3. Vérifier que les éléments de navigation/publicités disparaissent
4. Générer un PDF
5. Vérifier la qualité et lisibilité

---

## 7. Critères d'Acceptation

### Critères Obligatoires 

- [x] Tous les sélecteurs CSS s'exécutent sans erreur
- [x] Navigation supprimée sur toutes les pages de test
- [x] Publicités supprimées sur toutes les pages de test
- [x] Bannière cookies supprimée sur toutes les pages de test
- [x] Contenu principal conservé intact
- [x] URLs affichées à côté des liens
- [x] Aucune erreur JavaScript en console
- [x] Temps de traitement < 2 secondes
- [x] PDF généré avec qualité acceptable

### Critères Optionnels 💡

- [ ] Configuration utilisateur pour sélectionner les catégories
- [ ] Mode encre écologique (contraste élevé)
- [ ] Exportation en Markdown
- [ ] Horodatage automatique dans les PDFs

---

## 8. Raport de Test

### Template pour Documenter les Résultats

```
Test #[N] : [Titre du Test]
Date : [YYYY-MM-DD]
Testeur : [Nom]
URL/Page : [doc-simple.html ou URL réelle]
Navigateur : [Chrome/Edge/Brave] Version [X.X.X]

Résultat :  PASSÉ /  ÉCHOUÉ

Observation :
[Décrire ce qui s'est passé]

Notes :
[Observations additionnelles]
```

---

## 9. Checklist de Validation Finale

Avant de considérer la version comme prête à la production :

- [ ] Tous les tests obligatoires passent
- [ ] Aucun bug critique trouvé
- [ ] Documentation mise à jour
- [ ] Code review effectuée
- [ ] Performance acceptable
- [ ] Compatibilité navigateur vérifiée
- [ ] Tests sur sites réels validés
- [ ] README.md mis à jour avec instructions de test

---

**Dernière mise à jour :** 18 janvier 2026  
**Version testée :** 1.0.0  
**Statut :** En cours de test
