export interface Image {
  id: string;
  urls: URL;
  alt_description: string;
  results: Image[];
}

interface URL {
  small: string;
}
