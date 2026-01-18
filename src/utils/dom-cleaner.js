/**
 * dom-cleaner.js - Module utilitaire pour le nettoyage du DOM
 * 
 * Ce module exporte les fonctions de nettoyage du DOM et utilise
 * les sélecteurs centralisés depuis config/selectors.js
 * 
 * Cette séparation permet une meilleure modularité et une réutilisabilité
 * du code de nettoyage dans différents contextes.
 */

import { SELECTORS } from '../config/selectors.js';

/**
 * Récupère tous les sélecteurs CSS organisés en un seul tableau
 * 
 * @returns {Array<string>} - Tableau de tous les sélecteurs CSS
 */
function getAllSelectors() {
  const allSelectors = [];
  
  // Parcourt toutes les catégories de sélecteurs
  Object.values(SELECTORS).forEach(selectorsArray => {
    allSelectors.push(...selectorsArray);
  });
  
  return allSelectors;
}

/**
 * Supprime les éléments du DOM basés sur les sélecteurs configurés
 * 
 * Cette fonction :
 * - Récupère tous les sélecteurs depuis la configuration centralisée
 * - Identifie tous les éléments correspondant à ces sélecteurs
 * - Les supprime du DOM
 * - Retourne le nombre d'éléments supprimés
 * 
 * @returns {number} - Nombre d'éléments supprimés
 */
export function cleanDOM() {
  const selectors = getAllSelectors();
  let removedCount = 0;

  selectors.forEach(selector => {
    try {
      // Utilise querySelectorAll pour trouver tous les éléments correspondant au sélecteur
      const elements = document.querySelectorAll(selector);
      
      // Supprime chaque élément trouvé
      elements.forEach(element => {
        element.remove();
        removedCount++;
      });
    } catch (error) {
      // Si le sélecteur est invalide, on le signale mais on continue
      console.warn(`[GoPrint] Sélecteur invalide: "${selector}"`, error.message);
    }
  });

  return removedCount;
}

/**
 * Supprime les éléments d'une catégorie spécifique
 * 
 * Utile si on souhaite nettoyer partiellement la page ou appliquer
 * des configurations utilisateur (ex: conserver les formulaires)
 * 
 * @param {string} category - Nom de la catégorie (ex: 'structure', 'ads', 'forms')
 * @returns {number} - Nombre d'éléments supprimés
 */
export function cleanCategory(category) {
  if (!SELECTORS[category]) {
    console.warn(`[GoPrint] Catégorie non trouvée: "${category}"`);
    return 0;
  }

  const selectors = SELECTORS[category];
  let removedCount = 0;

  selectors.forEach(selector => {
    try {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        element.remove();
        removedCount++;
      });
    } catch (error) {
      console.warn(`[GoPrint] Sélecteur invalide dans ${category}: "${selector}"`, error.message);
    }
  });

  return removedCount;
}

/**
 * Obtient les catégories disponibles
 * 
 * @returns {Array<string>} - Liste des noms des catégories
 */
export function getAvailableCategories() {
  return Object.keys(SELECTORS);
}

/**
 * Obtient les sélecteurs d'une catégorie spécifique
 * 
 * Utile pour le débogage ou pour afficher à l'utilisateur quels éléments
 * seront supprimés dans une catégorie donnée
 * 
 * @param {string} category - Nom de la catégorie
 * @returns {Array<string>|null} - Sélecteurs de la catégorie ou null si introuvable
 */
export function getCategorySelectors(category) {
  return SELECTORS[category] || null;
}
