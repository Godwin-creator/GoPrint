/**
 * selectors.js - Configuration centralisée des sélecteurs CSS
 * 
 * Ce fichier contient tous les sélecteurs CSS utilisés par GoPrint pour identifier
 * et supprimer les éléments indésirables lors du nettoyage de la page.
 * 
 * L'avantage de centraliser ces sélecteurs dans un fichier dédié est triple :
 * 1. Facilité de maintenance : pour ajouter ou retirer un sélecteur, on modifie un seul endroit
 * 2. Réutilisabilité : ces sélecteurs peuvent être importés par différents modules
 * 3. Clarté : la séparation entre configuration et logique rend le code plus lisible
 */

/**
 * Configuration des sélecteurs organisée par catégorie
 * 
 * Cette organisation en objet plutôt qu'en simple tableau présente plusieurs avantages.
 * Elle permet de documenter clairement le rôle de chaque groupe de sélecteurs et facilite
 * l'activation ou la désactivation de catégories entières selon les besoins futurs.
 * 
 * Par exemple, dans une version future avec des préférences utilisateur, on pourrait
 * permettre à l'utilisateur de choisir de conserver les commentaires ou les formulaires.
 */
const SELECTORS = {
  /**
   * Éléments de structure et de navigation
   * 
   * Ces éléments définissent la structure générale d'une page web moderne mais sont
   * généralement inutiles dans un document imprimé. Un en-tête de site avec son logo
   * et son menu de navigation n'apporte aucune valeur à un tutoriel technique imprimé.
   */
  structure: [
    'nav',                    // Barres de navigation principales
    'header',                 // En-têtes de page (logos, menus)
    'footer',                 // Pieds de page (liens, copyright)
    'aside',                  // Barres latérales et contenu secondaire
    '.sidebar',               // Variante avec classe CSS
    '.side-panel',            // Panneaux latéraux
    '.navigation',            // Éléments de navigation supplémentaires
    '.menu',                  // Menus de toutes sortes
    '.breadcrumb',            // Fils d'Ariane (navigation hiérarchique)
    '.breadcrumbs',           // Variante plurielle
  ],

  /**
   * Publicités et contenu commercial
   * 
   * Les publicités sont probablement les éléments les plus gênants lors de l'impression.
   * Elles consomment du papier et de l'encre pour afficher du contenu qui n'a aucun
   * rapport avec la documentation que l'utilisateur souhaite sauvegarder.
   */
  advertising: [
    '.ad',                    // Classe simple pour publicité
    '.ads',                   // Conteneurs de publicités multiples
    '.advert',                // Variante du nom
    '.advertisement',         // Nom complet
    '.advertising',           // Autre variante
    '[class*="ad-"]',         // Tous les éléments avec classe contenant "ad-"
    '[id*="ad-"]',            // Tous les éléments avec ID contenant "ad-"
    '[class*="_ad_"]',        // Format avec underscores
    '[class*="google-ad"]',   // Publicités Google spécifiques
    '[class*="sponsored"]',   // Contenu sponsorisé
    '.banner-ad',             // Bannières publicitaires
    'iframe[src*="ads"]',     // IFrames de publicités
    'iframe[src*="doubleclick"]', // Réseau publicitaire Google
  ],

  /**
   * Bannières de cookies et de consentement
   * 
   * Avec les réglementations RGPD et autres lois sur la vie privée, presque tous
   * les sites affichent désormais des bannières demandant le consentement pour
   * les cookies. Ces bannières n'ont évidemment aucune utilité dans un PDF.
   */
  cookies: [
    '.cookie-banner',         // Bannière de cookies standard
    '.cookie-notice',         // Avis de cookies
    '.cookie-consent',        // Demande de consentement
    '#cookie-consent',        // Variante avec ID
    '.cookie-policy',         // Politique de cookies
    '.gdpr-banner',           // Bannière RGPD
    '.privacy-notice',        // Avis de confidentialité
    '[class*="cookie"]',      // Tout élément avec "cookie" dans la classe
    '[id*="cookie"]',         // Tout élément avec "cookie" dans l'ID
  ],

  /**
   * Notifications et alertes
   * 
   * Les barres de notification en haut ou en bas de page sont courantes sur les sites
   * modernes. Elles annoncent des mises à jour, des événements ou des promotions, mais
   * perdent toute pertinence dans un document imprimé statique.
   */
  notifications: [
    '.notification',          // Notifications génériques
    '.notification-bar',      // Barres de notification
    '.alert-banner',          // Bannières d'alerte
    '.top-banner',            // Bannières en haut de page
    '.sticky-banner',         // Bannières collantes
    '.announcement',          // Annonces
    '.notice',                // Avis divers
    '[role="alert"]',         // Éléments avec rôle d'alerte ARIA
  ],

  /**
   * Boutons de partage social et interactions sociales
   * 
   * Les boutons permettant de partager sur Facebook, Twitter ou LinkedIn sont
   * omniprésents sur le web. Dans un PDF, ces boutons ne peuvent évidemment pas
   * fonctionner et ne font que gaspiller de l'espace.
   */
  social: [
    '.share-buttons',         // Groupes de boutons de partage
    '.social-share',          // Partage social
    '.social-sharing',        // Variante
    '.social-icons',          // Icônes de réseaux sociaux
    '.social-media',          // Médias sociaux
    '.share-bar',             // Barres de partage
    '.share-tools',           // Outils de partage
    '[class*="share"]',       // Tout ce qui contient "share"
    '[class*="social"]',      // Tout ce qui contient "social"
    '.follow-us',             // Boutons "Suivez-nous"
    '.connect',               // Boutons de connexion sociale
  ],

  /**
   * Widgets et éléments interactifs
   * 
   * Les widgets sont des petits composants interactifs comme les calculatrices,
   * les sondages, ou les outils de recherche. Ils nécessitent une interaction
   * utilisateur qui n'est pas possible dans un document imprimé.
   */
  widgets: [
    '.widget',                // Widgets génériques
    '.widgets',               // Conteneurs de widgets
    '.widget-area',           // Zones de widgets
    '.search-box',            // Boîtes de recherche
    '.search-form',           // Formulaires de recherche
    '[role="search"]',        // Éléments de recherche ARIA
    '.poll',                  // Sondages
    '.quiz',                  // Quiz interactifs
    '.calculator',            // Calculatrices
  ],

  /**
   * Formulaires et éléments d'entrée
   * 
   * Les formulaires permettent aux utilisateurs de soumettre des informations.
   * Dans un PDF, ces formulaires ne peuvent pas fonctionner et occupent inutilement
   * de l'espace qui pourrait être utilisé pour du contenu informatif.
   */
  forms: [
    'form',                   // Tous les formulaires
    '.form',                  // Formulaires avec classe
    '.comment-form',          // Formulaires de commentaires
    '.contact-form',          // Formulaires de contact
    '.newsletter',            // Inscriptions newsletter
    '.newsletter-form',       // Formulaires d'inscription
    '.subscription',          // Abonnements
    '.signup',                // Inscriptions
    '.login-form',            // Formulaires de connexion
    'input[type="search"]',   // Champs de recherche
  ],

  /**
   * Boutons et éléments interactifs génériques
   * 
   * Cette catégorie est plus délicate car certains boutons peuvent être informatifs
   * même s'ils ne sont pas fonctionnels. Cependant, dans la plupart des cas,
   * les boutons dans la documentation technique sont là pour des actions (télécharger,
   * copier le code, etc.) qui n'ont pas de sens dans un document statique.
   */
  interactive: [
    'button',                 // Tous les boutons HTML
    '.button',                // Boutons stylisés avec classe
    '.btn',                   // Abréviation courante de "button"
    '[role="button"]',        // Boutons définis par ARIA
    '.action-button',         // Boutons d'action
    '.download-button',       // Boutons de téléchargement
    '.copy-button',           // Boutons de copie (fréquents dans les docs)
    '.modal',                 // Fenêtres modales
    '.popup',                 // Popups
    '.dialog',                // Boîtes de dialogue
    '.overlay',               // Couches d'overlay
    '.lightbox',              // Lightboxes pour images
  ],

  /**
   * Sections de commentaires
   * 
   * Les sections de commentaires peuvent être volumineuses et contenir des discussions
   * qui ne sont pas directement pertinentes pour le contenu principal de la documentation.
   * Cette catégorie est marquée comme optionnelle car dans certains cas, les commentaires
   * peuvent contenir des informations précieuses (erreurs signalées, solutions alternatives).
   */
  comments: [
    '.comments',              // Sections de commentaires
    '#comments',              // Variante avec ID
    '.comment-section',       // Section de commentaires explicite
    '.discussion',            // Discussions
    '.replies',               // Réponses aux commentaires
    '[class*="comment"]',     // Tout ce qui contient "comment"
  ],

  /**
   * IFrames et contenu embarqué
   * 
   * Les IFrames permettent d'embarquer du contenu externe dans une page. Dans la plupart
   * des cas, ce contenu est soit publicitaire, soit interactif (vidéos, cartes), donc
   * non pertinent pour l'impression. Nous faisons des exceptions pour YouTube et Vimeo
   * car ces vidéos peuvent être accompagnées de métadonnées utiles.
   */
  iframes: [
    'iframe:not([src*="youtube"]):not([src*="vimeo"])',
    '.embed',                 // Conteneurs d'embeddings
    '.embedded-content',      // Contenu embarqué
    '[class*="iframe"]',      // Classes contenant "iframe"
  ],

  /**
   * Éléments de mise en page et de décoration
   * 
   * Ces éléments sont purement décoratifs et n'apportent aucune information.
   * Ils sont là pour rendre le site visuellement attractif mais sont superflus
   * dans un document imprimé où l'efficacité prime sur l'esthétique.
   */
  decorative: [
    '.decoration',            // Éléments décoratifs explicites
    '.spacer',                // Espaceurs invisibles
    '.divider',               // Séparateurs visuels
    '.background-image',      // Images de fond décoratives
    '[role="presentation"]',  // Éléments de présentation ARIA
    '[aria-hidden="true"]',   // Éléments cachés pour lecteurs d'écran
  ],
};

/**
 * Fonction utilitaire pour obtenir tous les sélecteurs sous forme de tableau plat
 * 
 * Cette fonction transforme notre objet organisé en un simple tableau contenant
 * tous les sélecteurs. C'est pratique quand on veut appliquer tous les sélecteurs
 * d'un coup sans se soucier de leur catégorie.
 * 
 * @returns {string[]} Tableau contenant tous les sélecteurs CSS
 */
export function getAllSelectors() {
  // Object.values() récupère toutes les valeurs de l'objet (donc nos tableaux)
  // flat() aplatit ces tableaux de tableaux en un seul tableau
  return Object.values(SELECTORS).flat();
}

/**
 * Fonction pour obtenir les sélecteurs d'une ou plusieurs catégories spécifiques
 * 
 * Cette fonction permet une utilisation plus granulaire des sélecteurs. Par exemple,
 * si un utilisateur souhaite garder les commentaires mais supprimer tout le reste,
 * on peut facilement exclure la catégorie "comments".
 * 
 * @param {...string} categories - Noms des catégories à inclure
 * @returns {string[]} Tableau des sélecteurs des catégories demandées
 */
export function getSelectorsByCategory(...categories) {
  return categories
    .filter(cat => SELECTORS[cat]) // Vérifier que la catégorie existe
    .map(cat => SELECTORS[cat])    // Récupérer les tableaux de sélecteurs
    .flat();                        // Aplatir en un seul tableau
}

/**
 * Fonction pour obtenir toutes les catégories disponibles
 * 
 * Utile pour construire une interface utilisateur permettant de choisir
 * quelles catégories d'éléments supprimer. Cela sera particulièrement pratique
 * pour la version 2.0 avec les préférences utilisateur.
 * 
 * @returns {string[]} Tableau des noms de catégories
 */
export function getCategories() {
  return Object.keys(SELECTORS);
}

/**
 * Export par défaut de tous les sélecteurs pour une utilisation simple
 */
export default SELECTORS;