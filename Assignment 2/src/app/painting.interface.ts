export interface Painting {
    title: string;
    painter: string;
    year: number;
    culturalOrigin: string;
  }
  
  export interface PaintingsData {
    Paintings: Painting[];
  }
  