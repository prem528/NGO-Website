export interface BlogPost {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    imageUrl?: string;
  }
  
  export interface GalleryImage {
    id: string;
    url: string;
    caption: string;
    createdAt: string;
  }