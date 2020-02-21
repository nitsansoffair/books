interface VolumeInfo {
  title: string;
  authors: string[];
}

export class Book {
  constructor(public kind: string, id: string, etag: string, selfLink: string, volumeInfo: VolumeInfo) {}
}
