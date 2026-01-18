/**
 * link-formatter.js - Module utilitaire pour le formatage des liens
 * 
 * Ce module gère la normalisation et la validation des URLs
 * avant leur utilisation lors de l'impression
 */

import { URL_CONFIG } from '../config/constants.js';

/**
 * Normalise une URL en gérant les chemins relatifs et absolus
 * 
 * @param {string} url - L'URL à normaliser
 * @param {string} baseUrl - L'URL de base du document (optionnel)
 * @returns {string} - L'URL normalisée
 */
export function normalizeURL(url, baseUrl = window.location.href) {
  if (!url) return '';

  // Si c'est une URL absolue, on la retourne telle quelle
  if (/^https?:\/\//.test(url) || /^\/\//.test(url)) {
    return url;
  }

  // Si c'est un chemin relatif, on le convertit en URL absolue
  try {
    return new URL(url, baseUrl).href;
  } catch (error) {
    console.warn(`[GoPrint] URL invalide: "${url}"`, error.message);
    return '';
  }
}

/**
 * Valide si une URL est valide et accessible
 * 
 * @param {string} url - L'URL à valider
 * @returns {boolean} - true si l'URL semble valide
 */
export function isValidURL(url) {
  if (!url) return false;

  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Filtre les liens d'une liste selon les critères configurés
 * 
 * @param {Array<HTMLAnchorElement>} links - Liste des éléments <a> à filtrer
 * @returns {Array<HTMLAnchorElement>} - Liens filtrés
 */
export function filterLinks(links) {
  if (!Array.isArray(links)) {
    return [];
  }

  return links.filter(link => {
    const href = link.getAttribute('href');
    
    // Exclut les ancres internes et les liens vides
    if (!href || href.startsWith('#')) {
      return false;
    }

    // Exclut les protocoles de non-navigation
    if (/^(javascript|mailto|tel|sms):/.test(href)) {
      return false;
    }

    return true;
  });
}

/**
 * Extrait le domaine d'une URL
 * 
 * @param {string} url - L'URL à analyser
 * @returns {string} - Le domaine ou une chaîne vide
 */
export function extractDomain(url) {
  if (!isValidURL(url)) {
    return '';
  }

  try {
    return new URL(url).hostname;
  } catch (error) {
    return '';
  }
}

/**
 * Vérifie si une URL est interne (même domaine que la page actuelle)
 * 
 * @param {string} url - L'URL à vérifier
 * @returns {boolean} - true si c'est un lien interne
 */
export function isInternalLink(url) {
  if (!isValidURL(url)) {
    return false;
  }

  try {
    const urlDomain = new URL(url).hostname;
    const currentDomain = window.location.hostname;
    return urlDomain === currentDomain;
  } catch (error) {
    return false;
  }
}

/**
 * Récupère les statistiques sur les liens d'une page
 * 
 * @returns {Object} - Objet avec statistiques (totalLinks, internalLinks, externalLinks, invalidLinks)
 */
export function getLinkStatistics() {
  const allLinks = Array.from(document.querySelectorAll('a'));
  const validLinks = filterLinks(allLinks);
  
  let internalLinks = 0;
  let externalLinks = 0;

  validLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (isInternalLink(href)) {
      internalLinks++;
    } else {
      externalLinks++;
    }
  });

  return {
    totalLinks: allLinks.length,
    validLinks: validLinks.length,
    internalLinks,
    externalLinks,
    invalidLinks: allLinks.length - validLinks.length
  };
}
