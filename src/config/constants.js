/**
 * constants.js - Constantes de configuration pour GoPrint
 * 
 * Ce fichier centralise toutes les valeurs de configuration de l'extension.
 * Plutôt que d'avoir des "nombres magiques" dispersés dans le code, nous
 * les regroupons ici avec des noms explicites et une documentation claire.
 * 
 * Cette approche facilite grandement les ajustements futurs et rend le code
 * beaucoup plus maintenable et compréhensible.
 */

/**
 * Configuration des délais et temporisations
 * 
 * Les délais sont exprimés en millisecondes. Ces valeurs contrôlent le timing
 * des différentes opérations de l'extension pour garantir que le navigateur
 * a le temps d'appliquer tous les changements avant de passer à l'étape suivante.
 */
export const TIMING = {
  /**
   * Délai avant le déclenchement de l'impression
   * 
   * Ce délai de 300ms laisse au navigateur le temps de :
   * - Appliquer tous les styles CSS injectés
   * - Recalculer la mise en page après suppression des éléments
   * - Stabiliser le DOM avant la capture pour l'impression
   * 
   * Un délai trop court pourrait causer des rendus incomplets, tandis qu'un
   * délai trop long créerait une latence perceptible et frustrante pour l'utilisateur.
   * 300ms représente le meilleur compromis : assez long pour la stabilité,
   * assez court pour rester imperceptible à l'œil humain.
   */
  BEFORE_PRINT: 300,

  /**
   * Délai de debounce pour les opérations répétées
   * 
   * Si l'utilisateur clique plusieurs fois rapidement sur l'icône de l'extension,
   * ce délai empêche le lancement de multiples opérations simultanées qui
   * pourraient causer des conflits ou des comportements imprévisibles.
   */
  DEBOUNCE: 500,

  /**
   * Timeout pour les opérations d'injection de scripts
   * 
   * Si l'injection d'un script prend plus de ce temps, on considère qu'il y a
   * eu une erreur et on abandonne l'opération. Cette valeur généreuse de 5
   * secondes permet de gérer même les pages très lourdes sur des connexions lentes.
   */
  INJECTION_TIMEOUT: 5000,
};

/**
 * Configuration des styles d'impression
 * 
 * Ces valeurs contrôlent l'apparence des documents imprimés. Elles sont définies
 * ici plutôt que directement dans le CSS car elles pourraient devenir configurables
 * par l'utilisateur dans une version future.
 */
export const PRINT_STYLES = {
  /**
   * Marges de la page imprimée
   * 
   * Les marges sont exprimées en centimètres, qui est l'unité standard pour
   * les documents physiques. Une marge de 1.5cm offre un bon équilibre entre
   * l'utilisation de l'espace disponible et la nécessité de laisser une zone
   * de sécurité pour l'impression (les imprimantes ne peuvent pas imprimer
   * jusqu'au bord absolu du papier).
   */
  PAGE_MARGIN: '1.5cm',

  /**
   * Format de papier standard
   * 
   * Le format A4 est le standard international pour les documents (sauf en
   * Amérique du Nord où c'est le Letter). Nous utilisons A4 car c'est le
   * format le plus répandu dans le monde, particulièrement en Afrique.
   */
  PAPER_SIZE: 'A4',

  /**
   * Orientation de la page
   * 
   * Portrait est l'orientation standard pour les documents textuels.
   * L'orientation paysage (landscape) pourrait être ajoutée comme option
   * pour les tableaux larges ou les diagrammes horizontaux.
   */
  ORIENTATION: 'portrait',

  /**
   * Taille de police du corps de texte
   * 
   * 11pt est la taille optimale pour la lecture sur papier. C'est légèrement
   * plus grand que la taille standard de 10pt utilisée dans beaucoup de documents,
   * ce qui améliore la lisibilité sans gaspiller excessivement d'espace.
   */
  BODY_FONT_SIZE: '11pt',

  /**
   * Interligne du corps de texte
   * 
   * Un interligne de 1.6 crée un espacement confortable qui améliore la lisibilité
   * sans être trop généreux. C'est légèrement plus aéré que le standard de 1.5.
   */
  LINE_HEIGHT: 1.6,

  /**
   * Taille de police pour les blocs de code
   * 
   * Les blocs de code utilisent une police légèrement plus petite (9pt) car
   * le code contient généralement plus de caractères par ligne et nécessite
   * de maximiser l'utilisation horizontale de l'espace.
   */
  CODE_FONT_SIZE: '9pt',

  /**
   * Couleur de fond pour les blocs de code
   * 
   * Un gris très clair (#f5f5f5) distingue visuellement le code du texte normal
   * tout en consommant un minimum d'encre. C'est un compromis parfait entre
   * clarté visuelle et économie de ressources.
   */
  CODE_BACKGROUND: '#f5f5f5',

  /**
   * Couleur de bordure pour les blocs de code
   * 
   * Une bordure gris clair (#ddd) renforce la séparation visuelle sans être
   * trop marquée, ce qui économise l'encre tout en gardant une bonne lisibilité.
   */
  CODE_BORDER_COLOR: '#ddd',
};

/**
 * Configuration du formatage des liens
 * 
 * Ces paramètres contrôlent comment les liens hypertextes sont traités
 * dans le document imprimé.
 */
export const LINK_FORMATTING = {
  /**
   * Afficher l'URL après le texte du lien
   * 
   * Cette option permet d'inclure l'URL complète après chaque lien pour que
   * les utilisateurs puissent retrouver les ressources même avec un document papier.
   * Dans une version future, cela pourrait devenir une option désactivable.
   */
  SHOW_URL: true,

  /**
   * Longueur maximale d'URL à afficher
   * 
   * Les URLs très longues (plus de 100 caractères) sont tronquées car elles
   * casseraient la mise en page et seraient de toute façon difficiles à retaper
   * manuellement. Cette limite représente environ une ligne de texte complète.
   */
  MAX_URL_LENGTH: 100,

  /**
   * Préfixes d'URL à exclure de l'affichage
   * 
   * Ces types d'URLs ne sont pas affichés car ils ne sont pas utiles dans
   * un document imprimé. Les liens internes (#section) pointent vers des parties
   * du même document, et les URLs data: contiennent des données encodées illisibles.
   */
  EXCLUDED_PREFIXES: ['#', 'javascript:', 'data:', 'mailto:'],

  /**
   * Taille de police relative pour les URLs affichées
   * 
   * Les URLs sont affichées à 85% de la taille du texte normal (0.85em) pour
   * qu'elles soient discrètes tout en restant lisibles. Elles ne doivent pas
   * dominer visuellement le contenu principal.
   */
  URL_FONT_SIZE: '0.85em',

  /**
   * Couleur du texte des URLs
   * 
   * Un gris moyen (#666) rend les URLs moins proéminentes que le texte principal
   * tout en maintenant un contraste suffisant pour la lisibilité.
   */
  URL_COLOR: '#666',
};

/**
 * Configuration des messages de console
 * 
 * Ces préfixes permettent d'identifier rapidement les messages de GoPrint
 * dans la console du navigateur, ce qui est très utile pour le débogage.
 */
export const CONSOLE = {
  /**
   * Préfixe pour tous les messages de console
   * 
   * Ce préfixe apparaît au début de chaque log, facilitant le filtrage
   * des messages de GoPrint parmi tous les autres logs de la page.
   */
  PREFIX: 'GoPrint',

  /**
   * Activation des logs détaillés
   * 
   * En mode développement, on veut voir tous les détails des opérations.
   * En production, on pourrait vouloir désactiver les logs pour ne pas
   * polluer la console des utilisateurs finaux.
   */
  VERBOSE: true,
};

/**
 * Configuration des fonctionnalités avancées (Version 2.0)
 * 
 * Ces options sont prévues pour les fonctionnalités futures mentionnées
 * dans le cahier des charges. Elles sont déjà définies ici pour montrer
 * la vision à long terme du projet et faciliter l'implémentation future.
 */
export const FEATURES = {
  /**
   * Mode Encre Éco (A1 du cahier des charges)
   * 
   * Quand activé, ce mode force un contraste maximal (noir sur blanc)
   * et supprime toutes les couleurs pour économiser l'encre lors des
   * impressions physiques.
   */
  INK_SAVER_MODE: {
    enabled: false,
    forceBlackText: true,
    forceWhiteBackground: true,
    removeBackgroundImages: true,
  },

  /**
   * Exportation Markdown (A2 du cahier des charges)
   * 
   * Cette fonctionnalité permettra d'exporter le contenu nettoyé au format
   * Markdown plutôt qu'en PDF, pour une intégration facile dans des outils
   * de prise de notes comme Obsidian ou Notion.
   */
  MARKDOWN_EXPORT: {
    enabled: false,
    preserveCodeBlocks: true,
    preserveLinks: true,
    includeImages: true,
  },

  /**
   * Horodatage automatique (A3 du cahier des charges)
   * 
   * Ajoute une ligne en bas du document avec la date, l'heure et l'URL source.
   * Cela améliore la traçabilité et permet de savoir quand un document a été créé.
   */
  AUTO_TIMESTAMP: {
    enabled: false,
    includeDate: true,
    includeTime: true,
    includeUrl: true,
    format: 'dd/mm/yyyy HH:MM',
    position: 'bottom',
  },
};

/**
 * Configuration des règles de compatibilité
 * 
 * Ces règles permettent de gérer les différences entre navigateurs et
 * d'assurer que l'extension fonctionne correctement sur tous les navigateurs
 * basés sur Chromium.
 */
export const COMPATIBILITY = {
  /**
   * Navigateurs supportés
   * 
   * Liste des navigateurs sur lesquels GoPrint a été testé et fonctionne
   * correctement. Cette liste peut être utilisée pour afficher un avertissement
   * si l'utilisateur utilise un navigateur non supporté.
   */
  SUPPORTED_BROWSERS: ['chrome', 'edge', 'brave', 'opera'],

  /**
   * Version minimale de Chromium requise
   * 
   * Manifest V3 requiert une version relativement récente de Chromium.
   * Cette valeur permet de vérifier que le navigateur de l'utilisateur
   * est suffisamment récent.
   */
  MIN_CHROME_VERSION: 88,

  /**
   * Préfixes CSS à utiliser pour la compatibilité
   * 
   * Certaines propriétés CSS nécessitent encore des préfixes spécifiques aux
   * navigateurs pour fonctionner correctement. Cette liste permet de générer
   * automatiquement ces préfixes quand nécessaire.
   */
  CSS_PREFIXES: ['-webkit-', '-moz-', '-ms-', '-o-'],
};

/**
 * Configuration de la gestion des erreurs
 * 
 * Ces paramètres contrôlent comment l'extension réagit face aux erreurs
 * et comment elle communique ces erreurs à l'utilisateur ou au développeur.
 */
export const ERROR_HANDLING = {
  /**
   * Afficher les erreurs à l'utilisateur
   * 
   * En production, on veut éviter de montrer des erreurs techniques brutes
   * aux utilisateurs. En développement, par contre, c'est très utile.
   */
  SHOW_USER_ERRORS: false,

  /**
   * Logger toutes les erreurs dans la console
   * 
   * Même si on ne montre pas les erreurs à l'utilisateur, on veut toujours
   * les enregistrer dans la console pour pouvoir diagnostiquer les problèmes.
   */
  LOG_ERRORS: true,

  /**
   * Nombre maximum de tentatives en cas d'échec
   * 
   * Si une opération échoue (par exemple, l'injection d'un script), on peut
   * réessayer automatiquement un certain nombre de fois avant d'abandonner.
   */
  MAX_RETRIES: 2,

  /**
   * Délai entre les tentatives (en millisecondes)
   * 
   * Quand on réessaye une opération qui a échoué, on attend un peu avant
   * de réessayer pour laisser le temps au navigateur de se stabiliser.
   */
  RETRY_DELAY: 1000,
};

/**
 * Informations sur la version de l'extension
 * 
 * Ces informations sont utilisées pour les logs, les messages d'erreur et
 * la page "À propos" de l'extension.
 */
export const VERSION_INFO = {
  /**
   * Numéro de version actuel
   * 
   * Ce numéro suit le versionnage sémantique : MAJOR.MINOR.PATCH
   * où MAJOR change pour les modifications incompatibles, MINOR pour les
   * nouvelles fonctionnalités compatibles, et PATCH pour les corrections de bugs.
   */
  VERSION: '1.0.0',

  /**
   * Nom de la version
   * 
   * Un nom convivial pour cette version qui peut être utilisé dans les
   * communications avec les utilisateurs.
   */
  VERSION_NAME: 'Foundation',

  /**
   * Date de publication de cette version
   * 
   * Permet de savoir l'âge de la version installée chez l'utilisateur.
   */
  RELEASE_DATE: '2026-01-18',

  /**
   * URL du dépôt GitHub
   * 
   * Permet aux utilisateurs de consulter le code source, signaler des bugs
   * ou contribuer au projet.
   */
  REPOSITORY: 'https://github.com/votre-username/GoPrint',
};

/**
 * Export par défaut d'un objet contenant toutes les configurations
 * 
 * Cette approche permet d'importer facilement toutes les constantes d'un coup
 * avec une seule instruction : import CONFIG from './constants.js'
 */
export default {
  TIMING,
  PRINT_STYLES,
  LINK_FORMATTING,
  CONSOLE,
  FEATURES,
  COMPATIBILITY,
  ERROR_HANDLING,
  VERSION_INFO,
};