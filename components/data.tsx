export interface Post {
  img?: string;
  titleDescription?: Map<string, string>;
}



export interface WordAndImage {
  category?: string;
  title?: string;
  imgMain?: string;
  imgChild?: string;
  topDescription?: string;
  HTMLFile?: string;
  figma?: string;
  multipleImages?: string[];
  video?: string;
  post?: Post[];
  twoColumn?: Map<string, Map<string[], string[]>>;
}



export const WordAndImageData: WordAndImage[] = [
  { 
    category: "Web Design", 
    title: "ESIS", 
    imgMain: "/images/esis.jpg",
    imgChild: "/images/esis-1.jpeg"
  },
  { 
    category: "Web Design", 
    title: "Akamai", 
    imgMain: "/images/akamai.jpg",
    imgChild: "/images/akamai-1.jpeg" 

  },
  { 
    category: "Web Design", 
    title: "Boston Dynamics", 
    imgMain: "/images/boston-dynamics.jpg",
    imgChild: "/images/boston-dynamics-1.jpg"
  },
  { 
    category: "Web Design", 
    title: "Resilence, Inc WordPress Development", 
    imgMain: "/images/resilence.jpg",
    // topDescription: "My primary responsibility of the internship involved solving bugs. The design part of the internship mostly involved making sure the website worked on mobile and tablet devices. I was not supposed to focus primarily on designing or writing. This company is a non-profit startup with a focus on assisting in social health wellness for K–12 mental health.",
    post: [{
        img: "/images/resilence-0.png",
        titleDescription: new Map([
          ["Sharp Corners",
            "According to various studies, sharp corners grab more attention. Using rounded corners on buttons that lead to sales would have less interactions."
          ],
          ["Donate Button",
            "Many company meetings were about how to receive donations to expand. The donate button used to require scrolling. I recommended we have it visible once the user enters. This caused an increase in donations."
          ]
        ])
      },
      {
        img: "/images/resilence-1.png",
        titleDescription: new Map([
          ["Title",
            "The large, bold, and yellow title or heading looks fairly hard to read. Yellow text on a white background has a very low contrast."
          ],
          ["Colors",
            "The colors have a very low contrast on white. Increasing the contrast also causes a very swampy look of colors. The yellow turns to dark brown and the green turns to a muddy dark green."
          ],
          ["Colors",
            "The colors have a very low contrast on white. Increasing the contrast also causes a very swampy look of colors. The yellow turns to dark brown and the green turns to a muddy dark green."
          ],
          ["Logo",
            "The logo does not look as professional compared to many other logos. There is too much going on, causing less readability as this logo is scaled down."
          ],
          ["Explanation/Mission",
            "Moving the explanation above the buttons lets possible customers know why they should be interested in this company. Scrolling down requires extra effort from the customer. The last sentence is also a list with grammatical errors."
          ]
        ])
      }
    ]
  },
    
  //   twoColumn: new Map([
  //     [
  //       "/images/resilence-0.png",
  //       new Map([
  //         [
  //           "Sharp Corners",
  //           "According to various studies, sharp corners grab more attention. Using rounded corners on buttons that lead to sales would have less interactions."
  //         ]
  //       ])
  //     ],
  //     [
  //       "/images/resilence-1.png",
  //       new Map([
  //         [
  //           "Donate Button",
  //           "Many company meetings were about how to receive donations to expand. The donate button used to require scrolling. I recommended we have it visible once the user enters. This caused an increase in donations."
  //         ]
  //       ])
  //     ]
  //   ])
  //   twoColumn: new Map([["/images/resilence-0.png", "test", "Sharp Corners According to various studies, sharp corners grab more attention. Using rounded corners on buttons that lead to sales would have less interactions."], ["/images/resilence-1.png", "test1", "Title The large, bold, and yellow title or heading looks fairly hard to read. Yellow text on a white background has a very low contrast."]])
  //   twoColumn: new Map([["apple", "red"], ["banana", "yellow"], ["cherry", "dark red"]])
  // }
  
  { 
    category: "Web Design", 
    title: "Front-End Development + Design", 
    imgMain: "/images/r6gamingguide.png",
    topDescription: "This project was coded, designed, and written by me. HTML 5, CSS 3, and Vanilla JavaScript were used to code this project. This website is supposed to be responsive to various screen sizes. The SEO and accessibility still needs to be worked on. This website was created to assist entry-level to mid-level gamers of a video game called Rainbow Six Siege. Certain data may be outdated, due to constant updates of the game."
    ,post: [{
        img: "/images/r6gamingguide-0.png",
        titleDescription: new Map([
          ["Dark Theme",
            "Using a dark theme helps the user when gaming at night, while having this on their phone. Having a light theme is too distracting when multitasking. A theme switcher could be added to help the user choose. A light theme is although preferred by older populations and for reading. This website has a target audience of young adults and has light reading."
          ],
          ["Grabbing Attention",
            "The illustrations are for grabbing attention but not too much. This was moreover recommended by my professor. It is something different to see over the actual images of the operators."
          ],
          ["Top 3",
            "This is more for knowing the top 3 operators and guns because of constant patch notes. Patch notes tend to be about balancing certain operators and guns."
          ]
        ])
      },
      {
        img: "/images/r6gamingguide-1.png",
        titleDescription: new Map([
          ["Name and GIF",
            "The name helps identify the operator. The GIF shows how the operator's ability works."
          ],
          ["Operator Tip",
            "The tip provides the recommended ways on how to use an operator's ability. There are many tips about how to use an operator, but this section covers the most used tips. "
          ]
        ])
      },
      {
        img: "/images/r6gamingguide-2.png",
        titleDescription: new Map([
          ["Key",
            "I chose red as it is the most saturated color. Circles would be a good shape for me to hint locations. Adding shadows may help add more contrast to the circles, but may also add visual noise."
          ],
          ["Camera Location",
            "Cameras are ways in which the enemy team who defends the building, spy on what the attacking team does. It is important to destroy these cameras by shooting them. If destroyed, the enemy team cannot spy on the attacking player."
          ]
        ])
      },
      {
        img: "/images/r6gamingguide-3.png",
        titleDescription: new Map([
          ["Map Name",
            "The map name helps clarify what map the GIF is on. This section is more for mid-level players because it is dangerous to peek through a window. An enemy could kill the player peeking a window easily, if not well trained."
          ],
          ["Spawn Peeks GIF",
            "The GIF indicates quickly how to perform a peek at the best location on each map. It is a lot easier to use this website over searching through many YouTube videos, to find spawn peek locations for specific maps."
          ]
        ])
      }
    ]
  },
  { 
    category: "Web Design", 
    title: "Mobile Web Design", 
    imgMain: "/images/mobilewebdesign.png",
    figma:"https://embed.figma.com/proto/W0r4eQk95RhVOoeFRxIx24/IDT535_Final_Project?node-id=20-353&starting-point-node-id=20%3A353&embed-host=share"
  },
  { 
    category: "Web Design", 
    title: "Captains Mobile Homepage & Branding Guidelines", 
    imgMain: "/images/captains.jpg",
    multipleImages: ["/images/captains-1.jpg", "/images/captains-2.jpg", "/images/captains-3.jpg"],
    figma:"https://embed.figma.com/proto/K1COfsd3YbRV25TEvviRCq/Captains_Homepage?kind=proto&node-id=1-13&page-id=0%3A1&scaling=min-zoom&embed-host=share"
  }
  // ,
  // { 
  //   category: "Print Design", 
  //   title: "Stym Instruction Manual", 
  //   imgMain: "/images/stym.jpg",
  //   multipleImages: ["/images/stym-0.jpg", "/images/stym-1.jpg", "/images/stym-2.jpg","/images/stym-3.jpg", "/images/stym-4.jpg", "/images/stym-5.jpg"]
  // },
  // { 
  //   category: "Print Design",
  //   title: "Magazine", 
  //   imgMain: "/images/magazine.jpg",
  //   imgChild: "/images/magazine-0.jpg" 
  // },
  // { 
  //   category: "Print Design",
  //   title: "Infographic Poster", 
  //   imgMain: "/images/infographic-poster.jpg",
  //   imgChild: "/images/infographic-poster.jpg" 
  // },
  // { 
  //   category: "Print Design",
  //   title: "Inter Type Specimen Poster", 
  //   imgMain: "/images/Inter Type Specimen Poster.jpg",
  //   imgChild: "/images/Inter Type Specimen Poster-0.jpg" 
  // }
  ,
  { 
    category: "Web Design",
    title: "Digital Card Game Prototype", 
    imgMain: "/images/Digital Card Game Prototype.gif",
    topDescription: "This project is a digital card game that involves graphic design theories. The topics covered are typefaces, color theory, and poster grid theory. To win the game, the first player to have no cards left over, wins.",
    video: "https://www-ccv.adobe.io/v1/player/ccv/4AQaxIMmJ9z/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
    multipleImages: ["/images/card-game.jpg", "/images/digital-card-game-1.jpg", "/images/digital-card-game.jpg"]
  },
  { 
    category: "Motion Design",
    title: "\"Ice & Fire\" Kinetic Lettering", 
    imgMain: "/images/ice-&-fire-kinetic-lettering-0.gif",
    multipleImages: ["/images/ice-&-fire-kinetic-lettering-0.gif", "/images/ice-&-fire-kinetic-lettering-1.gif"]
  }
  // ,
  // { 
  //   category: "Print Design",
  //   title: "Roberson Museum Wayfinding", 
  //   imgMain: "/images/roberson-museum-wayfinding.jpg",
  //   imgChild: "/images/roberson-museum-wayfinding-0.jpg"
  // },
  // { 
  //   category: "Print Design",
  //   title: "Spread Page Designs", 
  //   imgMain: "/images/spread-page-designs.jpg",
  //   multipleImages: ["/images/spread-page-designs-0.jpg", "/images/spread-page-designs-1.jpg", "/images/spread-page-designs-2.jpg"]
  // }
  ,
  { 
    category: "Interior Design",
    title: "Interior Design", 
    imgMain: "/images/interior_design.jpg",
    imgChild: "/images/interior_design-0.jpg"
  }
  ,
  { 
    category: "Email Design",
    title: "Back to School",
    imgMain: "/images/backtoschool.png"
    ,HTMLFile:"/emails/8_11_back_to_school_V2_V3.html"
  }
  ,
  { 
    category: "Email Design",
    title: "Trick or Treat Events 10/18 & 10/19 🎃, October Events 🗓️, 30% Off Fall Encounters 🍂",
    imgMain: "/images/halloween-first_image.jpg"
    ,HTMLFile:"/emails/9_24_AAP_trick_or_treat_tickets_V16.html"
  }
];