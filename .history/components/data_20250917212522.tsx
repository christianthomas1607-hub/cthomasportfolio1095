
export interface WordAndImage {
  title: string;
  imgMain: string;
  imgChild?: string;
}


export const WordAndImage: WordAndImage[] = [
  {  
    title: "ESIS", 
    imgMain: "/images/esis.jpg",
    imgChild: "/images/esis-1.jpeg"
  },
  { 
    title: "Akamai", 
    imgMain: "/images/akamai.png"
    imgChild: "/images/esis-1.jpeg" 
  },
  { 
    title: "Designs", 
    imgMain: "/images/globe.svg" 
  },
  { 
    title: "Code", 
    imgMain: "/images/vercel.svg" 
  },
];