import websiteConfig from "../../website.config.mjs";

export const languages = {
  en: 'English',
  fr: 'Français',
};

export const defaultLang = websiteConfig.defaultLanguage;

export const ui = {
  en: {
    'article.author.name': 'by {name}',
    'footer.charactersCount': '{characters} characters',
    'footer.wordsCount': '{words} words',
    'nav.links': 'Links',
    'nav.linkedMentions': 'Linked Mentions',
    'nav.tableOfContents': 'Table of Contents',
    '404.title': 'Document not found',
    '404.description': 'The document you are looking for does not exist.',
  },
  es: {
    'article.author.name': 'por {name}',
    'footer.charactersCount': '{characters} caracteres',
    'footer.wordsCount': '{words} palabras',
    'nav.links': 'Enalces',
    'nav.linkedMentions': 'Menciones',
    'nav.tableOfContents': 'Tabla de Contenidos',
    '404.title': "Documento no encontrado",
    '404.description': 'El documento que buscas no existe.',
  },
} as const;