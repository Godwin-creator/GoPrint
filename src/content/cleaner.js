// cleaner.js - Script de nettoyage intelligent pour GoPrint
// Ce script est injecté dans la page web et manipule le DOM pour créer
// une version optimisée pour l'impression

(function() {
  'use strict';

  /**
   * Liste des sélecteurs CSS des éléments à supprimer
   * 
   * Chaque sélecteur représente un type d'élément qui pollue généralement
   * l'impression et qui n'apporte aucune valeur à la documentation technique.
   * 
   * Pensez à cette liste comme à un filtre anti-spam : on identifie tous les
   * types de contenu indésirable qu'on veut bloquer.
   */
  const ELEMENTS_TO_REMOVE = [
    // Éléments de navigation
    'nav',           // Barres de navigation principales
    'header',        // En-têtes de page avec logos et menus
    'footer',        // Pieds de page avec liens et informations légales
    
    // Barres latérales et widgets
    'aside',         // Contenu secondaire dans les barres latérales
    '.sidebar',      // Barres latérales (variante avec classe CSS)
    '.widget',       // Widgets divers (météo, publicités, etc.)
    
    // Publicités et tracking
    '.ad',           // Publicités avec classe "ad"
    '.ads',          // Conteneurs de publicités multiples
    '.advertisement', // Publicités avec nom complet
    '[class*="ad-"]', // Tous les éléments avec une classe commençant par "ad-"
    'iframe[src*="ads"]', // IFrames contenant des publicités
    
    // Bannières et notifications
    '.cookie-banner',     // Bannières de cookies
    '.cookie-notice',     // Avis de cookies
    '#cookie-consent',    // Consentement aux cookies
    '.notification-bar',  // Barres de notification
    '.alert-banner',      // Bannières d'alerte
    
    // Boutons de partage et interactions sociales
    '.share-buttons',     // Boutons de partage sur réseaux sociaux
    '.social-share',      // Partage social
    '.social-icons',      // Icônes de réseaux sociaux
    '.share-bar',         // Barre de partage
    
    // Formulaires et interactions
    'form',          // Formulaires (recherche, inscription, etc.)
    '.comment-form', // Formulaires de commentaires
    '.newsletter',   // Inscriptions à la newsletter
    
    // Éléments interactifs non pertinents pour l'impression
    'button',        // Tous les boutons
    '.modal',        // Fenêtres modales
    '.popup',        // Popups
    '.overlay',      // Couches d'overlay
    
    // Commentaires (optionnel, selon le cas d'usage)
    '.comments',     // Sections de commentaires
    '#comments',     // Sections de commentaires (variante avec ID)
    
    // IFrames génériques (souvent des publicités ou du contenu externe)
    'iframe:not([src*="youtube"]):not([src*="vimeo"])', // Tous les iframes sauf vidéos
  ];

  /**
   * Fonction principale de nettoyage
   * 
   * Cette fonction orchestre toutes les étapes du processus de nettoyage.
   * Elle supprime les éléments indésirables, applique les styles d'impression,
   * formate les liens et déclenche l'impression.
   */
  function cleanAndPrint() {
    console.log('GoPrint : Début du nettoyage de la page...');

    // Étape 1 : Suppression des éléments indésirables
    removeUnwantedElements();

    // Étape 2 : Application des styles pour éviter les coupures de page
    applyPrintStyles();

    // Étape 3 : Formatage des liens pour afficher leur URL
    formatLinks();

    // Étape 4 : Petite pause pour laisser le navigateur appliquer tous les changements
    // Cette pause est importante car le DOM a besoin d'un moment pour se "stabiliser"
    // après toutes nos modifications. C'est comme laisser la poussière retomber
    // après avoir rangé une pièce.
    setTimeout(() => {
      console.log('GoPrint : Page nettoyée, lancement de l\'impression...');
      window.print();
    }, 300);
  }

  /**
   * Supprime tous les éléments non essentiels de la page
   * 
   * Cette fonction parcourt notre liste de sélecteurs CSS et supprime
   * tous les éléments correspondants du DOM. C'est comme passer l'aspirateur
   * dans toute la maison en suivant une checklist de toutes les pièces à nettoyer.
   */
  function removeUnwantedElements() {
    let removedCount = 0;

    // Pour chaque sélecteur dans notre liste
    ELEMENTS_TO_REMOVE.forEach(selector => {
      try {
        // On recherche tous les éléments qui correspondent à ce sélecteur
        const elements = document.querySelectorAll(selector);
        
        // Pour chaque élément trouvé, on le supprime du DOM
        elements.forEach(element => {
          element.remove();
          removedCount++;
        });
      } catch (error) {
        // Si un sélecteur est invalide, on affiche une erreur mais on continue
        // avec les autres sélecteurs. On ne veut pas que tout s'arrête à cause
        // d'un seul sélecteur problématique.
        console.warn(`GoPrint : Sélecteur invalide "${selector}"`, error);
      }
    });

    console.log(`GoPrint : ${removedCount} élément(s) supprimé(s)`);
  }

  /**
   * Applique des styles CSS pour optimiser l'impression
   * 
   * Cette fonction injecte des règles CSS directement dans le document
   * pour contrôler la mise en page lors de l'impression. Ces règles empêchent
   * notamment la coupure des blocs de code entre deux pages.
   */
  function applyPrintStyles() {
    // Création d'un élément <style> qui contiendra notre CSS
    const styleElement = document.createElement('style');
    
    // Définition des règles CSS spécifiques pour l'impression
    styleElement.textContent = `
      @media print {
        /* Configuration des marges de page */
        @page {
          margin: 1.5cm;
          size: A4;
        }

        /* Éviter la coupure des blocs de code entre les pages */
        pre, code, blockquote {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
        }

        /* Éviter la coupure des images */
        img {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
          max-width: 100% !important;
        }

        /* Éviter la coupure des titres avec leur contenu suivant */
        h1, h2, h3, h4, h5, h6 {
          page-break-after: avoid !important;
          break-after: avoid !important;
        }

        /* Optimisation de la typographie pour l'impression */
        body {
          font-size: 11pt !important;
          line-height: 1.5 !important;
          color: #000 !important;
          background: #fff !important;
        }

        /* Amélioration du contraste des blocs de code */
        pre, code {
          background: #f5f5f5 !important;
          border: 1px solid #ddd !important;
          padding: 8px !important;
          font-size: 10pt !important;
        }

        /* Masquer les éléments cachés du DOM */
        [hidden], [style*="display: none"] {
          display: none !important;
        }
      }
    `;

    // Injection du style dans le <head> du document
    document.head.appendChild(styleElement);
    console.log('GoPrint : Styles d\'impression appliqués');
  }

  /**
   * Formate les liens pour afficher leur URL
   * 
   * Cette fonction ajoute l'URL complète à côté de chaque lien dans le texte.
   * Ainsi, même si le document est imprimé sur papier, les utilisateurs
   * pourront retrouver facilement les sources en tapant l'URL manuellement.
   */
  function formatLinks() {
    // Sélection de tous les liens de la page
    const links = document.querySelectorAll('a[href]');
    let formattedCount = 0;

    links.forEach(link => {
      const href = link.getAttribute('href');
      
      // On ne formate que les liens HTTP/HTTPS (pas les liens internes comme #section)
      // et on évite les URLs très longues ou les URLs de données (data:)
      if (href && 
          (href.startsWith('http://') || href.startsWith('https://')) &&
          !href.startsWith('data:') &&
          href.length < 100) {
        
        // Création d'un élément <span> qui contiendra l'URL
        const urlSpan = document.createElement('span');
        urlSpan.textContent = ` (${href})`;
        urlSpan.style.fontSize = '0.85em';
        urlSpan.style.color = '#666';
        
        // Ajout de l'URL après le texte du lien
        // On vérifie que le lien n'a pas déjà été formaté pour éviter les doublons
        if (!link.querySelector('.goprint-url')) {
          urlSpan.className = 'goprint-url';
          link.appendChild(urlSpan);
          formattedCount++;
        }
      }
    });

    console.log(`GoPrint : ${formattedCount} lien(s) formaté(s)`);
  }

  // Lancement automatique du processus de nettoyage et d'impression
  // Ce code s'exécute dès que le script est injecté dans la page
  cleanAndPrint();

})();