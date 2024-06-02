export interface MuseumItem {
    category: string;
    description: string;
    cultureDesc: string;
    materialType: string;
    objectName: string;
    section: string;
  }
  
  export interface MuseumData {
    MuseumData: MuseumItem[];
  }
  