export interface Post {
  id: number;
  title: string;
  content: string;
}



export interface WordAndImage {
  title?: string;
  imgMain?: string;
  imgChild?: string;
  topDescription?: string;
  figma?: string;
  multipleImages?: string[];
  video?: string;
}



export const WordAndImageData: WordAndImage[] = [
  {  
    title: "ESIS", 
    imgMain: "/images/esis.jpg",
    imgChild: "/images/esis-1.jpeg"
  },
  { 
    title: "Akamai", 
    imgMain: "/images/akamai.jpg",
    imgChild: "/images/akamai-1.jpeg" 

  },
  { 
    title: "Boston Dynamics", 
    imgMain: "/images/boston-dynamics.jpg",
    imgChild: "/images/boston-dynamics-1.jpg"
  },
  { 
    title: "Resilence, Inc WordPress Development", 
    imgMain: "/images/resilence.jpg",
    topDescription: "My primary responsibility of the internship involved solving bugs. The design part of the internship mostly involved making sure the website worked on mobile and tablet devices. I was not supposed to focus primarily on designing or writing. This company is a non-profit startup with a focus on assisting in social health wellness for K–12 mental health.",
    posts: [
      {
        id: 1,
        title: "Resilence, Inc WordPress Development",
        content: "My primary responsibility of the internship involved solving bugs. The design part of the internship mostly involved making sure the website worked on mobile and tablet devices. I was not supposed to focus primarily on designing or writing. This company is a non-profit startup with a focus on assisting in social health wellness for K–12 mental health."
      }
    ],
    // twoColumn: new Map([
    //   [
    //     "/images/resilence-0.png",
    //     new Map([
    //       [
    //         "Sharp Corners",
    //         "According to various studies, sharp corners grab more attention. Using rounded corners on buttons that lead to sales would have less interactions."
    //       ]
    //     ])
    //   ],
    //   [
    //     "/images/resilence-1.png",
    //     new Map([
    //       [
    //         "Donate Button",
    //         "Many company meetings were about how to receive donations to expand. The donate button used to require scrolling. I recommended we have it visible once the user enters. This caused an increase in donations."
    //       ]
    //     ])
    //   ]
    // ])
    // twoColumn: new Map([["/images/resilence-0.png", "test", "Sharp Corners According to various studies, sharp corners grab more attention. Using rounded corners on buttons that lead to sales would have less interactions."], ["/images/resilence-1.png", "test1", "Title The large, bold, and yellow title or heading looks fairly hard to read. Yellow text on a white background has a very low contrast."]])
    // twoColumn: new Map([["apple", "red"], ["banana", "yellow"], ["cherry", "dark red"]])
  },
  { 
    title: "Front-End Development + Design", 
    imgMain: "/images/r6gamingguide.png" 
  },
  { 
    title: "Mobile Web Design", 
    imgMain: "/images/mobilewebdesign.png",
    figma:"https://embed.figma.com/proto/W0r4eQk95RhVOoeFRxIx24/IDT535_Final_Project?node-id=20-353&starting-point-node-id=20%3A353&embed-host=share"
  },
  { 
    title: "Captains Mobile Homepage & Branding Guidelines", 
    imgMain: "/images/captains.jpg",
    multipleImages: ["/images/captains-1.jpg", "/images/captains-2.jpg", "/images/captains-3.jpg"],
    figma:"https://embed.figma.com/proto/K1COfsd3YbRV25TEvviRCq/Captains_Homepage?kind=proto&node-id=1-13&page-id=0%3A1&scaling=min-zoom&embed-host=share"
  },
  { 
    title: "Stym Protein Powder Instruction Manual", 
    imgMain: "/images/stym.jpg",
    multipleImages: ["/images/stym-0.jpg", "/images/stym-1.jpg", "/images/stym-2.jpg","/images/stym-3.jpg", "/images/stym-4.jpg", "/images/stym-5.jpg"]
  },
  { 
    title: "Magazine", 
    imgMain: "/images/magazine.jpg",
    imgChild: "/images/magazine-0.jpg" 
  },
  { 
    title: "Infographic Poster", 
    imgMain: "/images/infographic-poster.jpg",
    imgChild: "/images/infographic-poster.jpg" 
  },
  { 
    title: "Inter Type Specimen Poster", 
    imgMain: "/images/Inter Type Specimen Poster.jpg",
    imgChild: "/images/Inter Type Specimen Poster-0.jpg" 
  },
  { 
    title: "Digital Card Game Prototype", 
    imgMain: "/images/Digital Card Game Prototype.gif",
    topDescription: "This project is a digital card game that involves graphic design theories. The topics covered are typefaces, color theory, and poster grid theory. To win the game, the first player to have no cards left over, wins.",
    video: "https://www-ccv.adobe.io/v1/player/ccv/4AQaxIMmJ9z/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
    multipleImages: ["/images/card-game.jpg", "/images/digital-card-game-1.jpg", "/images/digital-card-game.jpg"]
  },
  { 
    title: "\"Ice & Fire\" Kinetic Lettering", 
    imgMain: "/images/ice-&-fire-kinetic-lettering-0.gif",
    multipleImages: ["/images/ice-&-fire-kinetic-lettering-0.gif", "/images/ice-&-fire-kinetic-lettering-1.gif"]
  },
  { 
    title: "Roberson Museum Wayfinding", 
    imgMain: "/images/roberson-museum-wayfinding.jpg",
    imgChild: "/images/roberson-museum-wayfinding-0.jpg"
  },
  { 
    title: "Spread Page Designs", 
    imgMain: "/images/spread-page-designs.jpg",
    multipleImages: ["/images/spread-page-designs-0.jpg", "/images/spread-page-designs-1.jpg", "/images/spread-page-designs-2.jpg"]
  },
  { 
    title: "Interior Design", 
    imgMain: "/images/interior_design.jpg",
    imgChild: "/images/interior_design-0.jpg"
  }
];

const posts: MultiArray[] = [
  {
    multiTitle: 'Hello World',
    multiImg: '/images/hello.jpg',
    multiDesc: 'Intro post with image'
  },
  {
    multiTitle: 'Hello World',
    multiImg: '/images/hello.jpg',
    multiDesc: 'Intro post with image'
  }
];