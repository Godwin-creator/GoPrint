# GoPrint - Extension Navigateur pour Impression Intelligente

![Logo GoPrint](assets/logo.png)

## À Propos du Projet

GoPrint est une extension de navigateur conçue spécialement pour les étudiants en génie logiciel et les développeurs qui ont besoin d'imprimer ou de sauvegarder de la documentation technique en PDF. Cette extension va bien au-delà des fonctionnalités natives des navigateurs en offrant un nettoyage intelligent du contenu avant l'impression.

Le projet a été développé dans le contexte où l'optimisation de la consommation de données et la création de documents hors-ligne de haute qualité sont des priorités essentielles. GoPrint transforme automatiquement les pages web encombrées en documents PDF propres, légers et parfaitement lisibles.

## Problème Résolu

Lorsque vous imprimez une page web depuis votre navigateur, vous obtenez souvent un résultat décevant qui contient des publicités, des barres de navigation, des boutons de partage social et d'autres éléments inutiles qui gaspillent du papier et de l'encre. De plus, les blocs de code sont fréquemment coupés entre deux pages, ce qui rend la lecture difficile.

GoPrint résout ces problèmes en appliquant un processus de nettoyage intelligent appelé "Smart Clean" qui supprime automatiquement tous les éléments non essentiels et optimise la mise en page pour l'impression.

## Fonctionnalités Principales

### Nettoyage Automatique (Smart Clean)

L'extension analyse la structure de la page web et supprime intelligemment tous les éléments qui n'apportent aucune valeur à la documentation technique. Cela inclut les publicités, les bannières de cookies, les en-têtes et pieds de page, les barres latérales, les boutons de partage social et les iframes.

### Optimisation de la Mise en Page

GoPrint injecte automatiquement des styles CSS spécifiques pour l'impression qui contrôlent les marges de page et empêchent la coupure des blocs de code ou des citations importantes entre deux pages. Cette optimisation garantit que votre documentation reste lisible et professionnelle.

### Conservation des Liens Hypertextes

Tous les liens présents dans le document original restent cliquables dans le PDF généré. De plus, l'URL complète de chaque lien est automatiquement affichée à côté du texte du lien, ce qui permet de retrouver facilement les sources même si le document est imprimé sur papier.

### Utilisation Simplifiée

Un simple clic sur l'icône de l'extension déclenche immédiatement le processus de nettoyage et ouvre la boîte de dialogue d'impression de votre système d'exploitation. Aucune configuration compliquée, aucun menu intermédiaire, juste une efficacité maximale.

## Installation

### Depuis le Code Source

Pour installer GoPrint à partir du code source, vous devez d'abord cloner le dépôt GitHub sur votre ordinateur. Ouvrez votre terminal et exécutez la commande suivante :

```bash
git clone https://github.com/Godwin-creator/GoPrint.git
cd GoPrint
```

Ensuite, ouvrez votre navigateur Chrome ou tout navigateur basé sur Chromium comme Edge ou Brave. Accédez à la page des extensions en tapant `chrome://extensions/` dans la barre d'adresse. Activez le mode développeur en cliquant sur le bouton situé en haut à droite de la page.

Cliquez sur le bouton "Charger l'extension non empaquetée" et sélectionnez le dossier GoPrint que vous venez de cloner. L'extension sera immédiatement installée et son icône apparaîtra dans la barre d'outils de votre navigateur.

### Depuis le Chrome Web Store (à venir)

Une fois le développement terminé et l'extension publiée, vous pourrez l'installer directement depuis le Chrome Web Store en un seul clic.

## Guide d'Utilisation

### Utilisation Basique

L'utilisation de GoPrint est intentionnellement simple pour ne pas interrompre votre flux de travail. Lorsque vous êtes sur une page web que vous souhaitez imprimer ou sauvegarder en PDF, cliquez simplement sur l'icône verte de GoPrint dans la barre d'outils de votre navigateur.

L'extension va immédiatement analyser la page, supprimer tous les éléments non essentiels, appliquer les styles d'impression optimisés et ouvrir la boîte de dialogue d'impression de votre système d'exploitation. À ce stade, vous pouvez choisir d'imprimer physiquement le document ou de le sauvegarder au format PDF.

### Cas d'Usage Recommandés

GoPrint est particulièrement efficace pour imprimer de la documentation technique provenant de sites comme Stack Overflow, GitHub, Medium, les documentations officielles de frameworks et de langages de programmation, ainsi que les articles de blog techniques. Ces types de pages contiennent généralement beaucoup d'éléments de navigation et de publicités qui polluent l'impression standard.

### Astuces pour de Meilleurs Résultats

Pour obtenir les meilleurs résultats avec GoPrint, assurez-vous que la page est complètement chargée avant de cliquer sur l'icône de l'extension. Si la page contient des images importantes pour la compréhension du contenu, vérifiez qu'elles sont bien visibles avant de lancer l'impression.

## Architecture Technique

### Technologies Utilisées

GoPrint est développé en utilisant HTML, CSS et JavaScript pur (Vanilla JS) sans aucune dépendance externe. Cette approche garantit que l'extension reste légère, rapide et facile à maintenir. L'extension est conforme à la spécification Manifest V3 de Google, qui représente la dernière génération d'extensions Chrome.

### Structure du Projet

Le projet est organisé de manière modulaire avec une séparation claire des responsabilités. Le dossier `src/background/` contient le service worker qui gère les événements de l'extension. Le dossier `src/content/` contient les scripts qui sont injectés dans les pages web pour effectuer le nettoyage. Le dossier `src/utils/` contient des fonctions réutilisables pour manipuler le DOM et formater les liens.

### Fonctionnement Interne

Lorsque vous cliquez sur l'icône de GoPrint, le service worker détecte cet événement et utilise l'API `chrome.scripting.executeScript` pour injecter le script de nettoyage dans l'onglet actif. Ce script parcourt le DOM de la page, identifie et supprime les éléments non essentiels selon une liste de sélecteurs CSS prédéfinis, puis injecte des styles CSS spécifiques pour l'impression. Enfin, le script déclenche automatiquement la fonction `window.print()` du navigateur.

## Fonctionnalités Avancées (Version 2.0)

### Mode Encre Éco

Cette fonctionnalité future permettra de forcer un contraste élevé avec du texte noir sur fond blanc, ce qui économise considérablement l'encre lors des impressions physiques. Cette option sera particulièrement utile pour les étudiants qui impriment beaucoup de documentation.

### Exportation Markdown

Au lieu de générer un PDF, cette fonctionnalité permettra d'exporter le contenu nettoyé directement au format Markdown. Cela facilitera l'intégration de la documentation dans des outils de prise de notes académiques populaires comme Obsidian, Notion ou Logseq.

### Horodatage Automatique

Cette fonctionnalité ajoutera automatiquement une petite ligne en bas de la dernière page du PDF généré qui indiquera la date et l'heure de création ainsi que l'URL source de la page. Cela améliore la traçabilité et permet de savoir quand un document a été créé.

## Contribution au Projet

Les contributions à GoPrint sont les bienvenues et encouragées. Si vous souhaitez améliorer l'extension, commencez par forker le dépôt GitHub et créer une nouvelle branche pour votre fonctionnalité ou correction de bug. Assurez-vous que votre code respecte les conventions de style existantes et testez minutieusement vos modifications avant de soumettre une pull request.

Pour signaler un bug ou proposer une nouvelle fonctionnalité, ouvrez une issue sur GitHub en décrivant clairement le problème ou la suggestion. Plus votre description est détaillée, plus il sera facile pour l'équipe de comprendre et de résoudre le problème.

## Tests et Qualité

Le dossier `tests/test-pages/` contient des pages HTML de test qui simulent différents types de contenu web. Vous pouvez utiliser ces pages pour vérifier que l'extension fonctionne correctement avant de déployer une nouvelle version. Le fichier `tests/manual-test-plan.md` contient un plan de tests détaillé qui liste tous les scénarios à vérifier.

## Licence

Ce projet est distribué sous licence MIT, ce qui signifie que vous êtes libre de l'utiliser, de le modifier et de le distribuer pour des projets personnels ou commerciaux. Consultez le fichier LICENSE pour plus de détails sur vos droits et responsabilités.

## Contact et Support

Pour toute question, suggestion ou demande de support, vous pouvez ouvrir une issue sur GitHub ou contacter l'équipe de développement par email. Nous faisons de notre mieux pour répondre rapidement à toutes les demandes.

## Remerciements

Merci à tous les étudiants et développeurs qui ont testé les versions préliminaires de GoPrint et fourni des retours précieux. Votre contribution a permis d'améliorer considérablement la qualité de l'extension.

---

Développé avec ❤️ pour la communauté des développeurs africains

**Version actuelle :** 1.0.0  
**Dernière mise à jour :** Janvier 2026# GoPrint
