
export interface WordAndImage {
  title: string;
  imgMain: string;
  imgChild?: string;
  figma?: string;
  description?: string;
}


export const WordAndImage: WordAndImage[] = [
  {  
    title: "ESIS", 
    imgMain: "/images/esis.jpg",
    imgChild: "/images/esis-1.jpeg"
  },
  { 
    title: "Akamai", 
    imgMain: "/images/akamai.png",
    imgChild: "/images/akamai-1.jpeg" 
  },
  { 
    title: "Boston Dynamics", 
    imgMain: "/images/boston-dynamics.jpg",
    imgChild: "/images/boston-dynamics-1.jpg"
  },
  { 
    title: "Resilence, Inc WordPress Development", 
    imgMain: "/images/resilence.jpg" 
  },
  { 
    title: "Front-End Development + Design", 
    imgMain: "/images/r6gamingguide.png" 
  },
  { 
    title: "Mobile Web Design", 
    imgMain: "/images/mobilewebdesign.png"
  },
];