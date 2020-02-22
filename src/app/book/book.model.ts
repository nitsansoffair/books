export interface Book {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo: { textSnippet: string };
}

export interface TransformedBook {
  id: string;
  title: string;
  autors: string[];
  description: string;
  imageLinks: string;
  publishedDate: Date;
  pdf: string;
}

export interface VolumeInfo {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: Date;
  description: string;
  industryIdentifiers: { type: string, identifier: number }[];
  readingModes: { text: string, image: string };
  pageCount: number;
  printType: string;
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: { containsEpubBubbles: boolean, containsImageBubbles: boolean };
  imageLinks: { smallThumbnail: string, thumbnail: string };
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}

export interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
  listPrice: { amount: number, currencyCode: string };
  retailPrice: { amount: number, currencyCode: string };
  buyLink: string;
  offers: { finskyOfferType: number, listPrice: { amountInMicros: number, currencyCode: string }, retailPrice: { amountInMicros: number, currencyCode: string } }[];
}

export interface AccessInfo {
  country: string;
  viewability: string;
  textToSpeechPermission: string;
  webReaderLink: string;
  accessViewStatus: string;
  embeddable: boolean;
  publicDomain: boolean;
  quoteSharingAllowed: boolean;
  epub: { isAvailable: boolean,  };
  pdf: { isAvailable: boolean, acsTokenLink: string };
}
