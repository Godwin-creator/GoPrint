/**
 * timestamp.js - Module utilitaire pour la gestion des timestamps et formatages de dates
 * 
 * Ce module fournit des fonctions utilitaires pour générer des timestamps,
 * formater les dates pour l'affichage et gérer les fuseaux horaires
 */

import { TIMING } from '../config/constants.js';

/**
 * Génère un timestamp ISO 8601 actuel
 * 
 * @returns {string} - Timestamp ISO (ex: "2024-01-18T14:30:45.123Z")
 */
export function getCurrentTimestamp() {
  return new Date().toISOString();
}

/**
 * Génère un timestamp lisible pour l'affichage
 * 
 * Format: "18 janvier 2024 à 14:30:45"
 * 
 * @param {Date} date - Date à formater (optionnel, utilise la date actuelle par défaut)
 * @param {string} locale - Locale pour le formatage (optionnel)
 * @returns {string} - Date formatée de manière lisible
 */
export function getReadableTimestamp(date = new Date(), locale = 'fr-FR') {
  return date.toLocaleString(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

/**
 * Génère un timestamp court pour les fichiers (format: YYYYMMDD_HHMMSS)
 * 
 * Utile pour nommer les fichiers téléchargés ou les versions sauvegardées
 * 
 * @param {Date} date - Date à formater (optionnel)
 * @returns {string} - Timestamp court (ex: "20240118_143045")
 */
export function getShortTimestamp(date = new Date()) {
  const pad = (num) => String(num).padStart(2, '0');
  
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}_${pad(date.getHours())}${pad(date.getMinutes())}${pad(date.getSeconds())}`;
}

/**
 * Crée un objet Date à partir d'un timestamp ISO 8601
 * 
 * @param {string} isoString - String ISO 8601
 * @returns {Date|null} - Objet Date ou null si invalide
 */
export function parseISO(isoString) {
  try {
    return new Date(isoString);
  } catch (error) {
    console.warn(`[GoPrint] Timestamp ISO invalide: "${isoString}"`);
    return null;
  }
}

/**
 * Calcule la différence en millisecondes entre deux timestamps
 * 
 * @param {Date|string} startTime - Timestamp de début
 * @param {Date|string} endTime - Timestamp de fin (optionnel, utilise la date actuelle par défaut)
 * @returns {number} - Différence en millisecondes
 */
export function getTimeDifference(startTime, endTime = new Date()) {
  const start = startTime instanceof Date ? startTime : parseISO(startTime);
  const end = endTime instanceof Date ? endTime : parseISO(endTime);

  if (!start || !end) {
    console.warn('[GoPrint] Impossible de calculer la différence de temps avec des timestamps invalides');
    return 0;
  }

  return end.getTime() - start.getTime();
}

/**
 * Convertit une durée en millisecondes en format lisible (ex: "2s", "1m 30s")
 * 
 * @param {number} milliseconds - Durée en millisecondes
 * @returns {string} - Durée formatée
 */
export function formatDuration(milliseconds) {
  if (milliseconds < 0) return '0ms';

  if (milliseconds < 1000) {
    return `${Math.round(milliseconds)}ms`;
  }

  if (milliseconds < 60000) {
    return `${(milliseconds / 1000).toFixed(1)}s`;
  }

  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.round((milliseconds % 60000) / 1000);

  return `${minutes}m ${seconds}s`;
}

/**
 * Crée un délai en utilisant les constantes de timing
 * 
 * @param {string} timingKey - Clé du délai dans TIMING (ex: 'BEFORE_PRINT')
 * @returns {Promise} - Promise qui se résout après le délai
 */
export function delayByTiming(timingKey) {
  const delay = TIMING[timingKey] || TIMING.BEFORE_PRINT;
  return new Promise(resolve => setTimeout(resolve, delay));
}

/**
 * Obtient la date actuelle formatée selon un pattern personnalisé
 * 
 * @param {string} pattern - Pattern (ex: "DD/MM/YYYY", "YYYY-MM-DD")
 * @returns {string} - Date formatée selon le pattern
 */
export function formatDateByPattern(pattern, date = new Date()) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return pattern
    .replace('DD', day)
    .replace('MM', month)
    .replace('YYYY', year)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
}

/**
 * Crée un horodatage de débogage avec tous les détails
 * 
 * @returns {Object} - Objet avec tous les formats de timestamps
 */
export function getDebugTimestamp() {
  return {
    iso: getCurrentTimestamp(),
    readable: getReadableTimestamp(),
    short: getShortTimestamp(),
    timestamp: Date.now()
  };
}
