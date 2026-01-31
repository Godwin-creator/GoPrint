// Service Worker pour GoPrint
// Ce fichier écoute les événements de l'extension et coordonne les actions

chrome.action.onClicked.addListener(async (tab) => {
  try {
    // Vérification de sécurité : on s'assure que l'onglet a bien un ID valide
    // et qu'il ne s'agit pas d'une page système de Chrome (chrome://, edge://, etc.)
    if (!tab.id || tab.url.startsWith('chrome://') || tab.url.startsWith('edge://')) {
      console.warn('GoPrint ne peut pas fonctionner sur cette page système');
      return;
    }

    // Étape 1 : Injection du fichier CSS d'impression
    // Ce CSS contient toutes les règles @media print qui optimisent la mise en page
    await chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      files: ['src/content/print-styles.css']
    });

    // Étape 2 : Injection du script de nettoyage
    // Ce script va manipuler le DOM de la page pour supprimer les éléments indésirables
    // et préparer la page pour l'impression
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['src/content/cleaner.js']
    });

    // À ce stade, le script cleaner.js a été injecté et exécuté
    // Il a nettoyé la page et déclenché automatiquement window.print()
    console.log('GoPrint a traité la page avec succès');

  } catch (error) {
    // Gestion des erreurs : si quelque chose ne fonctionne pas,
    // on affiche un message d'erreur dans la console pour le débogage
    console.error('Erreur lors du traitement GoPrint:', error);
    
    // Dans une version future, on pourrait afficher une notification
    // à l'utilisateur pour l'informer que quelque chose s'est mal passé
  }
});

/**
 * Événement déclenché lors de l'installation de l'extension
 * C'est utile pour initialiser des paramètres ou afficher un message de bienvenue
 */
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('GoPrint a été installé avec succès !');
    // Dans une version future, on pourrait ouvrir une page d'accueil
    // ou afficher un tutoriel pour les nouveaux utilisateurs
  } else if (details.reason === 'update') {
    console.log('GoPrint a été mis à jour vers la version', chrome.runtime.getManifest().version);
  }
});