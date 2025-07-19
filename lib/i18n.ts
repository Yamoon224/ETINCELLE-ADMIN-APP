export const translations = {
  fr: {
    // Navigation
    dashboard: "Tableau de bord",
    establishments: "Les établissements",
    portfolio: "Portefeuille",
    announcements: "Annonces",
    profile: "Profile",
    settings: "Paramètre",
    logout: "Déconnexion",

    // Login
    connection: "CONNEXION",
    enterAddress: "Entrer votre adresse",
    enterCode: "Entrer le code d'accès",
    validate: "VALIDÉ",

    // Dashboard
    totalBalance: "SOLDES TOTAL",
    today: "Aujourd'hui",
    thisWeek: "Cette semaine",
    thisMonth: "Ce mois",
    revenue: "Revenus",
    expenses: "Dépenses",
    profit: "Bénéfices",
    establishments: "Établissements",
    activeUsers: "Utilisateurs actifs",
    newRegistrations: "Nouvelles inscriptions",

    // Establishments
    total: "Total",
    restaurants: "Les restaurant",
    hotels: "Les Hotels",
    showTotal: "Montre total",
    serverCount: "Nombre de serveur",
    usageCount: "Nombre d'utilisation",
    registrationDate: "Date d'inscription",
    subscriptionEnd: "Fin d'abonnement",
    search: "Recherche",

    // Announcements
    enterprise: "Entreprise",
    notificationPush: "Notification push",
    floatingAd: "Annonce flottant",
    createFloatingAd: "Création Annonces flottante",
    detailsFloatingAd: "Details Annonces flottante",
    addImage: "AJOUTER UNE IMAGE",
    addImageFormat: "Ajouter des images de format JPG/PNG",
    productName: "Nom du produit",
    pasteLink: "Coller le lient",
    targetEstablishment: "Etablissement cible",
    country: "Pays",
    cities: "Villes",
    enterMessage: "Entrer un message",
    publish: "Publier",
    modify: "Modifier",
    distributed: "DISTRIBUÉE",
    views: "VUES",

    // Settings
    language: "Langue",
    theme: "Thème",
    light: "Clair",
    dark: "Sombre",
    notifications: "Notifications",
    privacy: "Confidentialité",
    account: "Compte",

    // Common
    generalSearch: "Recherche générale",
    loading: "Chargement...",
    save: "Enregistrer",
    cancel: "Annuler",
    edit: "Modifier",
    delete: "Supprimer",
  },
  en: {
    // Navigation
    dashboard: "Dashboard",
    establishments: "Establishments",
    portfolio: "Portfolio",
    announcements: "Announcements",
    profile: "Profile",
    settings: "Settings",
    logout: "Logout",

    // Login
    connection: "CONNECTION",
    enterAddress: "Enter your address",
    enterCode: "Enter access code",
    validate: "VALIDATE",

    // Dashboard
    totalBalance: "TOTAL BALANCE",
    today: "Today",
    thisWeek: "This week",
    thisMonth: "This month",
    revenue: "Revenue",
    expenses: "Expenses",
    profit: "Profit",
    establishments: "Establishments",
    activeUsers: "Active users",
    newRegistrations: "New registrations",

    // Establishments
    total: "Total",
    restaurants: "Restaurants",
    hotels: "Hotels",
    showTotal: "Show total",
    serverCount: "Server count",
    usageCount: "Usage count",
    registrationDate: "Registration date",
    subscriptionEnd: "Subscription end",
    search: "Search",

    // Announcements
    enterprise: "Enterprise",
    notificationPush: "Push notification",
    floatingAd: "Floating ad",
    createFloatingAd: "Create floating ad",
    detailsFloatingAd: "Floating ad details",
    addImage: "ADD IMAGE",
    addImageFormat: "Add JPG/PNG format images",
    productName: "Product name",
    pasteLink: "Paste link",
    targetEstablishment: "Target establishment",
    country: "Country",
    cities: "Cities",
    enterMessage: "Enter message",
    publish: "Publish",
    modify: "Modify",
    distributed: "DISTRIBUTED",
    views: "VIEWS",

    // Settings
    language: "Language",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    notifications: "Notifications",
    privacy: "Privacy",
    account: "Account",

    // Common
    generalSearch: "General search",
    loading: "Loading...",
    save: "Save",
    cancel: "Cancel",
    edit: "Edit",
    delete: "Delete",
  },
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.fr
