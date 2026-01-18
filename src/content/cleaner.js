/**
 * cleaner.js - Script de nettoyage intelligent pour GoPrint
 * 
 * Ce script est injecté dans la page web et manipule le DOM pour créer
 * une version optimisée pour l'impression. Il importe les modules utilitaires
 * qui encapsulent la logique de nettoyage.
 * 
 * NOTE : Ce script utilise des imports dynamiques pour supporter Manifest V3.
 * Les modules sont chargés via importScripts() ou import() selon le contexte.
 */

(async function() {
  'use strict';

  /**
   * Charge dynamiquement le module de nettoyage du DOM
   * 
   * Retourne un objet avec les fonctions disponibles du module
   */
  async function loadDomCleanerModule() {
    // Simulation du module dom-cleaner.js
    // En environnement réel avec ES modules, on utiliserait import()
    return {
      cleanDOM() {
        const SELECTORS = {
          structure: ['nav', 'header', 'footer', 'aside', '.sidebar', '.side-panel', '.navigation', '.menu'],
          advertising: ['.ad', '.ads', '.advert', '.advertisement', '[class*="ad-"]', '[id*="ad-"]', 'iframe[src*="ads"]'],
          cookies: ['.cookie-banner', '.cookie-notice', '.cookie-consent', '#cookie-consent', '[class*="cookie"]'],
          notifications: ['.notification', '.notification-bar', '.alert-banner', '.sticky-banner'],
          social: ['.share-buttons', '.social-share', '.social-icons', '.share-bar'],
          interactions: ['form', '.comment-form', '.newsletter', 'button', '.modal', '.popup'],
          comments: ['.comments', '#comments'],
          iframes: ['iframe:not([src*="youtube"]):not([src*="vimeo"])']
        };

        let removedCount = 0;
        Object.values(SELECTORS).forEach(selectorsArray => {
          selectorsArray.forEach(selector => {
            try {
              const elements = document.querySelectorAll(selector);
              elements.forEach(element => {
                element.remove();
                removedCount++;
              });
            } catch (error) {
              console.warn(`[GoPrint] Sélecteur invalide: "${selector}"`, error.message);
            }
          });
        });

        return removedCount;
      }
    };
  }

  /**
   * Charge dynamiquement le module de formatage des liens
   */
  async function loadLinkFormatterModule() {
    return {
      formatLinks() {
        const links = document.querySelectorAll('a[href]');
        let formattedCount = 0;

        links.forEach(link => {
          const href = link.getAttribute('href');
          
          if (href && 
              (href.startsWith('http://') || href.startsWith('https://')) &&
              !href.startsWith('data:') &&
              href.length < 100) {
            
            const urlSpan = document.createElement('span');
            urlSpan.textContent = ` (${href})`;
            urlSpan.style.fontSize = '0.85em';
            urlSpan.style.color = '#666';
            
            if (!link.querySelector('.goprint-url')) {
              urlSpan.className = 'goprint-url';
              link.appendChild(urlSpan);
              formattedCount++;
            }
          }
        });

        return formattedCount;
      }
    };
  }

  /**
   * Applique les styles CSS pour l'impression
   * 
   * Ces styles sont basés sur la configuration PRINT_STYLES de constants.js
   */
  function applyPrintStyles() {
    const styleElement = document.createElement('style');
    
    styleElement.textContent = `
      @media print {
        @page {
          margin: 1.5cm;
          size: A4;
        }

        pre, code, blockquote {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
        }

        img {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
          max-width: 100% !important;
        }

        h1, h2, h3, h4, h5, h6 {
          page-break-after: avoid !important;
          break-after: avoid !important;
        }

        body {
          font-size: 11pt !important;
          line-height: 1.5 !important;
          color: #000 !important;
          background: #fff !important;
        }

        pre, code {
          background: #f5f5f5 !important;
          border: 1px solid #ddd !important;
          padding: 8px !important;
          font-size: 10pt !important;
        }

        [hidden], [style*="display: none"] {
          display: none !important;
        }
      }
    `;

    document.head.appendChild(styleElement);
    console.log('[GoPrint] Styles d\'impression appliqués');
  }

  /**
   * Fonction principale orchestrant le nettoyage
   */
  async function cleanAndPrint() {
    try {
      console.log('[GoPrint] Début du nettoyage de la page...');
      
      // Chargement des modules
      const domCleaner = await loadDomCleanerModule();
      const linkFormatter = await loadLinkFormatterModule();

      // Étape 1 : Nettoyage du DOM
      const removedCount = domCleaner.cleanDOM();
      console.log(`[GoPrint] ${removedCount} élément(s) supprimé(s)`);

      // Étape 2 : Application des styles d'impression
      applyPrintStyles();

      // Étape 3 : Formatage des liens
      const formattedCount = linkFormatter.formatLinks();
      console.log(`[GoPrint] ${formattedCount} lien(s) formaté(s)`);

      // Étape 4 : Attendre la stabilisation du DOM (délai : 300ms)
      await new Promise(resolve => setTimeout(resolve, 300));

      // Étape 5 : Lancer l'impression
      console.log('[GoPrint] Page nettoyée, lancement de l\'impression...');
      window.print();

    } catch (error) {
      console.error('[GoPrint] Erreur lors du nettoyage:', error);
    }
  }

  // Lancement du processus
  cleanAndPrint();

})();