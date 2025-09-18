
export interface WordAndImage {
  title: string;
  imgMain: string;
  imgChild?: string;
  description?: string;
  figma?: string;
  multipleImages?: string[];
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
    imgMain: "/images/mobilewebdesign.png",
    figma:"https://www.figma.com/proto/W0r4eQk95RhVOoeFRxIx24/IDT535_Final_Project?kind=proto&node-id=20-353&page-id=0%3A1&scaling=scale-down&starting-point-node-id=20%3A353&t=S6nOGYmJIlHjVfrA-1&type=design&viewport=-263%2C1019%2C1"
  },
  { 
    title: "Captains Branding Guidelines", 
    imgMain: "/images/captains.jpg",
    
  },
  
];