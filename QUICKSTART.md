#  Guide d'Action Rapide - GoPrint v1.0.0

##  Vous êtes ici

Toute la session de modularisation et test est **complétée** 

---

##  Prochaines Actions Recommandées

###  Immédiat (Aujourd'hui)

#### Option 1 : Tester l'Extension
```bash
# Étape 1 : Charger l'extension
1. Ouvrir chrome://extensions/
2. Cliquer "Charger l'extension non empaquetée"
3. Sélectionner dossier C:\...\GoPrint (le repo cloné, son adresse en local)

# Étape 2 : Tester page simple
1. Ouvrir : file:///C:/.../GoPrint/tests/test-pages/doc-simple.html
2. Cliquer icône GoPrint (verte dans la barre d'outils)
3. Vérifier dans l'aperçu d'impression que :
   - Navigation disparaît 
   - Header disparaît 
   - Publicités disparaissent 
   - Contenu texte reste 
   
# Étape 3 : Tester page complexe
1. Ouvrir : file:///C:/.../GoPrint/tests/test-pages/doc-complex.html
2. Cliquer icône GoPrint
3. Valider résultats similaires
```

#### Option 2 : Lire la Documentation
```bash
# Pour développeurs
1. Lire : DEVELOPMENT.md
2. Comprendre architecture
3. Explorer src/utils/*.js

# Pour testeurs
1. Lire : tests/manual-test-plan.md
2. Exécuter les 26 tests
3. Documenter résultats

# Pour tous
1. Lire : STATUS.md (résumé exécutif)
2. Lire : COMPLETION_SUMMARY.md (détails)
3. Consulter README.md principal
```

#### Option 3 : Tester sur Sites Réels
```bash
# Tester sur 5 sites réels
1. GitHub (documentation)
   - Allez à github.com
   - Consultez README ou documentation
   - Cliquez GoPrint
   - Générez PDF

2. Medium (articles)
   - Lisez un article
   - Cliquez GoPrint
   - Vérifiez nettoyage

3. Stack Overflow (Q&A)
   - Consultez une question
   - Cliquez GoPrint
   - Vérifiez résultats

4. MDN Web Docs (référence)
   - Consultez documentation
   - Cliquez GoPrint
   - Vérifiez qualité

5. Site personnel (test)
   - Allez sur votre site
   - Cliquez GoPrint
   - Vérifiez résultats
```

---

###  Court Terme (Cette Semaine)

#### Test Complet
```bash
1. Exécuter tous les 26 cas de test (manual-test-plan.md)
2. Documenter résultats pour chaque test
3. Identifier bugs ou améliorations
4. Noter quels sélecteurs fonctionnent mal

Format simple :
- Test #X : [NOM]
- Résultat :  PASSÉ /  ÉCHOUÉ
- Notes : [Observations]
```

#### Optimisation
```bash
1. Analyser logs de console
2. Ajouter sélecteurs manquants
3. Affiner sélecteurs existants
4. Tester itérativement
```

#### Documentation des Bugs
```bash
Si vous trouvez un bug :
1. Ouvrir GitHub Issues
2. Créer issue avec :
   - Description du bug
   - Page de test ou site réel
   - Screenshot si possible
   - Logs de console
   - Navigateur/Version
```

---

###  Moyen Terme (Ce Mois)

#### Améliorations
```bash
1. Ajouter UI popup pour configuration
2. Implémenter nettoyage sélectif par catégorie
3. Ajouter raccourcis clavier (ex: Ctrl+Shift+P)
4. Support multi-langue

Consulter DEVELOPMENT.md → "Ajouter une nouvelle catégorie"
```

#### Publication
```bash
1. Préparer pour Chrome Web Store
2. Créer descriptions marketing
3. Préparer screenshots
4. Soumettre pour review
```

---

##  Documents à Consulter

### Pour Démarrer Rapidement
| Besoin | Document | Temps |
|--------|----------|-------|
| Vue d'ensemble | [STATUS.md](STATUS.md) | 5 min |
| Tester l'extension | [tests/README.md](tests/README.md) | 10 min |
| Voir ce qui a changé | [COMPLETION_SUMMARY.md](COMPLETION_SUMMARY.md) | 10 min |

### Pour Développer
| Besoin | Document | Temps |
|--------|----------|-------|
| Setup et architecture | [DEVELOPMENT.md](DEVELOPMENT.md) | 20 min |
| Ajouter une catégorie | [DEVELOPMENT.md](DEVELOPMENT.md#ajouter) | 30 min |
| Déboguer un problème | [DEVELOPMENT.md](DEVELOPMENT.md#debugging) | 15 min |

### Pour Tester
| Besoin | Document | Temps |
|--------|----------|-------|
| Guide rapide | [tests/README.md](tests/README.md) | 5 min |
| Tous les cas de test | [tests/manual-test-plan.md](tests/manual-test-plan.md) | 60 min |
| Dépannage | [tests/README.md](tests/README.md#dépannage) | 10 min |

---

##  Commandes Utiles

### Charger l'Extension
```
chrome://extensions/
→ Mode Développeur (coin haut-droit)
→ Charger extension non empaquetée
→ Sélectionner dossier GoPrint
```

### Recharger l'Extension (Après Modification)
```
chrome://extensions/
→ Cliquer le bouton "Recharger" sur GoPrint
```

### Voir les Logs
```
F12 → Onglet Console → Chercher "[GoPrint]"
```

### Ouvrir une Page de Test
```
Méthode 1 - Fichier local
file:///C:/.../GoPrint/tests/test-pages/doc-simple.html

Méthode 2 - Serveur local (si Python installé)
python -m http.server
→ Aller à http://localhost:8000/tests/test-pages/
```

### Git - Vérifier Historique
```bash
git log --oneline           # Voir tous les commits
git log -3 --stat           # Voir derniers 3 commits avec fichiers
git diff HEAD~3 HEAD        # Voir changements des 3 derniers commits
```

---

##  Fichiers Clés à Connaître

```
UTILISER CES FICHIERS POUR...

src/utils/dom-cleaner.js
  → Comprendre comment fonctione le nettoyage du DOM
  → Ajouter nouvelle logique de suppression

src/utils/link-formatter.js
  → Comprendre formatage des URLs
  → Améliorer formatage des liens

src/content/cleaner.js
  → Voir le flux principal d'exécution
  → Modifier orchestration du nettoyage

src/config/selectors.js
  → AJOUTER/MODIFIER les sélecteurs à supprimer
  → Point central de configuration

tests/test-pages/doc-simple.html
  → Page pour tester les sélecteurs basiques
  → AJOUTER nouveaux éléments pour nouveaux sélecteurs

tests/test-pages/doc-complex.html
  → Page pour tester les cas complexes
  → AJOUTER multimedia et contenus variés

tests/manual-test-plan.md
  → VOIR tous les cas de test
  → COPIER template pour documenter tests
```

---

##  Apprentissage Rapide

### Architecture en 5 Étapes

```
1. Utilisateur clique icône GoPrint
   → Fichier : manifest.json (action)

2. Service Worker détecte
   → Fichier : src/background/service-worker.js

3. Injecte CSS + Script
   → Fichiers : src/content/print-styles.css + cleaner.js

4. Script utilise configuration
   → Fichiers : src/config/constants.js + selectors.js

5. Modules utilitaires exécutent logique
   → Fichiers : src/utils/*.js
```

### Code Flow Simplifié

```javascript
cleanAndPrint() {
  // 1. Load utilities
  const domCleaner = loadDomCleanerModule()
  const linkFormatter = loadLinkFormatterModule()
  
  // 2. Clean
  domCleaner.cleanDOM()        // Supprimer éléments
  applyPrintStyles()           // Appliquer CSS
  linkFormatter.formatLinks()  // Formater liens
  
  // 3. Print
  await delay(300)
  window.print()
}
```

---

##  Troubleshooting Rapide

### Problème : "Rien ne se passe"
```
1. Vérifier extension est chargée (chrome://extensions/)
2. Vérifier icône apparaît dans la barre (coin haut-droit)
3. Vérifier console (F12) pour erreurs rouges
4. Vérifier page n'est pas système (chrome://)
```

### Problème : "Extension se charge mais pas de effet"
```
1. Ouvrir console (F12)
2. Cliquer icône GoPrint
3. Chercher "[GoPrint]" dans les logs
4. Lire les erreurs ou avertissements
5. Si rien, peut être que aucun élément ne match
```

### Problème : "Certains éléments ne disparaissent pas"
```
1. Ouvrir console (F12)
2. Taper : document.querySelectorAll('.mon-selecteur')
3. Si 0 résultat : sélecteur est mauvais, ajouter correct
4. Si X résultats : sélecteur marche, modifier config
```

---

##  Checklist Avant de Continuer

- [ ] J'ai lu STATUS.md
- [ ] J'ai lu DEVELOPMENT.md OU tests/README.md
- [ ] J'ai chargé l'extension dans le navigateur
- [ ] J'ai testé au moins sur doc-simple.html
- [ ] Je connais où chercher en cas de problem
- [ ] J'ai compris le flux de nettoyage
- [ ] Je sais où ajouter un nouveau sélecteur

---

##  Prochain Milestone

**Objectif :** Tester sur 5 sites réels + documenter

**Délai suggéré :** 1-2 jours

**Checklist :**
- [ ] Tester sur GitHub
- [ ] Tester sur Medium
- [ ] Tester sur Stack Overflow
- [ ] Tester sur MDN
- [ ] Tester sur site perso
- [ ] Documenter résultats
- [ ] Identifier bugs
- [ ] Proposer améliorations

---

##  Besoin d'Aide ?

1. **Pour questions techniques** → Lire DEVELOPMENT.md
2. **Pour questions de test** → Lire tests/README.md ou manual-test-plan.md
3. **Pour utilisation** → Lire README.md
4. **Pour détails complets** → Lire COMPLETION_SUMMARY.md

---

##  Go ! 

Vous êtes prêt.e à :

1.  Tester l'extension
2.  Développer de nouvelles features
3.  Déboguer les problèmes
4.  Itérer sur le feedback

**Commencez par :** [Charger l'extension](#charger-lextension) et tester sur `doc-simple.html`

Bonne chance ! 

---

**Généré :** 18 janvier 2026  
**Version :** 1.0.0  
**Statut :**  Prêt pour action

