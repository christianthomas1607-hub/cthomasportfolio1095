
export interface WordAndImage {
  title: string;
  imgMain: string;
  imgChild: string | null;
}


export const WordAndImage: WordAndImage[] = [
  {  title: "ESIS", 
    imgMain: "/images/esis.jpg" },
  { title: "Concepts", 
    imgMain: "/images/mobilewebdesign.png" },
  { title: "Designs", 
    imgMain: "/images/globe.svg" },
  { title: "Code", 
    imgMain: "/images/vercel.svg" },
];