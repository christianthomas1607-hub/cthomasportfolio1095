
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
    title: "Concepts", 
    imgMain: "/images/mobilewebdesign.png" 
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