export interface TwoColumnImgandDescription {
  img?: Map<string, string>;
  titleDescription?: Map<string, string>;
}





export interface OneColumnImgandDescription {
  img?: string;
  titleDescription?: Map<string, string>;
}


export interface OneColumnImgAltTitleDescription {
  img?: Map<string, string>;
  titleDescription?: Map<string, string>;
}


export interface OneColumnTwoImgandDescription {
  img?: string[][];
  titleDescription?: Map<string, string>;
}

export interface OneColumnTwoImgandDescription2 {
  img?: Map<string, Map<string, string>>;
  titleDescription?: Map<string, string>;
}



export interface WordAndImage {
  category?: string;
  title?: string;
  imgMain?: string;
  imgChild?: string;
  Alt?: string;
  topDescription?: string;
  topNote?: string;
  HTMLFile?: string;
  figma?: string;
  multipleImages?: Map<string, string>;
  video?: string;
  twoColumnImgandDescription?: TwoColumnImgandDescription[];
  twoColumn?: Map<string, string>;
  OneColumnImgandDescription?: OneColumnImgandDescription[];
  OneColumnImgAltTitleDescription?: OneColumnImgAltTitleDescription[];
  // Recommended desktop image dimensions: 1755 px x 1876 px
  // Recommended mobile image dimensions: 430 px x 3123 px
  twoColumnImages?: string[][];

  OneColumnTwoImgandDescription?: OneColumnTwoImgandDescription[];

  OneColumnTwoImgandDescription2?: OneColumnTwoImgandDescription2[];

  TwoColumnImgandAlt?: Map<string, string>;
}



export const WordAndImageData: WordAndImage[] = [
  { 
    category: "Websites", 
    title: "Boston Dynamics", 
    imgMain: "boston-dynamics.jpg",
    OneColumnTwoImgandDescription2: [
      {
        img: new Map([
          [
            "New Atlas",
            new Map([
            [
            "boston_dynamics__atlas_desktop.jpeg",
            "Atlas Desktop"
            ],
            [
            "boston_dynamics__atlas_mobile.jpeg",
            "Atlas Mobile"
            ]
            ])
          ]
        ]),
        titleDescription: new Map([
          ["New Atlas Theme & Products",
            "Boston Dynamics had a huge marketing campaign for the new Atlas at the beginning of January 2026."
            + " " + "Primary aspects were YouTube videos, display shows, and it was featured on 60 Minutes. I added the" 
            + " " + "new Atlas themed content and products to the store, bringing awareness of the new Atlas."
            + " " + "\n\nThere are some big improvements I would like to make. I would like to make the top banner display" 
            + " " + "bigger on mobile. The marketing team would rather ensure the image is consistent though." 
            + " " + "I would also like to make the initially seen content load faster with lazy loading when I get the time."
          ]
        ])
      }
      
    ],
    OneColumnImgAltTitleDescription: [{
        img: new Map([
          ["holiday-2025-boston-dynamics.jpeg",
            "2025 Holiday Sale Setup"
          ]
        ]),
        titleDescription: new Map([
          ["2025 Holiday Sale Setup",
            "A banner, 5 new products, and 2 discounts were set up. Boston Dynamics promoted the sale on social media."
          ]
        ])
      },
      {
        img: new Map([
          ["holiday-2025-products-boston-dynamics.jpeg",
            "2025 Holiday Sale Setup Products"
          ]
        ]),
        titleDescription: new Map([
          ["Complete List of Products",
            "Much of the web content was added by me. Some images were provided by Boston Dynamics. Content was formatted to have proper performance, SEO, and verified for accuracy."
          ]
        ])
      }
    ]
    
  },

  { 
    category: "Websites", 
    title: "Chubb", 
    imgMain: "chubb.jpg",
    // imgChild: "esis-1.jpeg",
    TwoColumnImgandAlt: new Map([
          ["chubb_desktop.jpeg",
            "Chubb Desktop"
          ],
          ["chubb_mobile.jpeg",
            "Chubb Mobile"
          ]
        ])
  },
  { 
    category: "Websites",
    title: "Akamai", 
    imgMain: "akamai.jpg",
    // imgChild: "akamai-1.jpeg"
    TwoColumnImgandAlt: new Map([
          ["akamai_desktop.jpeg",
            "Akamai Desktop"
          ],
          ["akamai_mobile.jpeg",
            "Akamai Mobile"
          ]
        ])
    // twoColumnImages: [
    //   ["akamai_desktop.jpeg", "akamai_mobile.jpeg"]
    // ]
  },
  { 
    category: "Websites", 
    title: "Resilence, Inc", 
    imgMain: "resilence.jpg",
    topDescription: "My primary responsibility of the internship involved solving bugs through WordPress. The design part of the internship mostly involved making sure the website worked on mobile and tablet devices. I was not supposed to focus primarily on designing or writing. This company is a non-profit startup with a focus on assisting in social health wellness for K–12 mental health.",
    twoColumnImgandDescription: [{
        img: new Map([
          ["resilence-0.png",
            "Sharp Corners, Donate Button"
          ]
        ]),
        // img: "resilence-0.png",
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
        img: new Map([
          ["resilence-1.png",
            "Title, Colors, Logo, Explanation/Mission"
          ]
        ]),
        // img: "resilence-1.png",
        titleDescription: new Map([
          ["Title",
            "The large, bold, and yellow title or heading looks fairly hard to read. Yellow text on a white background has a very low contrast."
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
    
    // twoColumn: new Map([
    //   [
    //     "resilence-0.png",
    //     new Map([
    //       [
    //         "Sharp Corners",
    //         "According to various studies, sharp corners grab more attention. Using rounded corners on buttons that lead to sales would have less interactions."
    //       ]
    //     ])
    //   ],
    //   [
    //     "resilence-1.png",
    //     new Map([
    //       [
    //         "Donate Button",
    //         "Many company meetings were about how to receive donations to expand. The donate button used to require scrolling. I recommended we have it visible once the user enters. This caused an increase in donations."
    //       ]
    //     ])
    //   ]
    // ])
   
  // }
  
  { 
    category: "Websites", 
    title: "Rainbow Six Siege Gaming Guide", 
    imgMain: "r6gamingguide.png",
    topDescription: "This project was coded, designed, and written by me. HTML 5, CSS 3, and Vanilla JavaScript were used to code this project. This website is supposed to be responsive to various screen sizes. The SEO and accessibility still needs to be worked on. This website was created to assist entry-level to mid-level gamers of a video game called Rainbow Six Siege. Certain data may be outdated, due to constant updates of the game."
    ,twoColumnImgandDescription: [{
        img: new Map([
          ["r6gamingguide-0.png",
            "Dark Theme, Grabbing Attention, Top 3"
          ]
        ]),
        // img: "r6gamingguide-0.png",
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
        img: new Map([
          ["r6gamingguide-1.png",
            "Light Button, Name and Icon, Operator Description"
          ]
        ]),
        // img: "r6gamingguide-1.png",
        titleDescription: new Map([
          ["Light Button",
            "Shows currently what page the user is on. This not only shows a difference in color, but also shows a difference in shape. Using a lighter color also works similarly to how the video game works when buttons are highlighted."
          ],
          ["Name and Icon",
            "The name and icon are supposed to help communicate what operator is being talked about through horizontal and vertical spacing. The icon is very similar to the real operator icons, but still fully designed by me."
          ]
          ,
          ["Operator Description",
            "The description helps communicate what strategies each operator specifically excels at."
          ]
        ])
      },
      {
        img: new Map([
          ["r6gamingguide-2.png",
            "Name and GIF, Operator Tip"
          ]
        ]),
        // img: "r6gamingguide-1.png",
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
        img: new Map([
          ["r6gamingguide-3.png",
            "Key, Camera Location"
          ]
        ]),
        // img: "r6gamingguide-2.png",
        titleDescription: new Map([
          ["Key",
            "I chose red as it is the most saturated color. Circles would be a good shape for me to hint locations. Adding shadows may help add more contrast to the circles, but may also add visual noise."
          ],
          ["Camera Location",
            "Cameras are ways in which the enemy team who defends the building, spy on what the attacking team does. It is important to destroy these cameras by shooting them. If destroyed, the enemy team cannot spy on the attacking player."
          ]
        ])
      }
      ,{
        img: new Map([
          ["r6gamingguide-4.png",
            "Map Name, Spawn Peeks GIF"
          ]
        ]),
        // img: "r6gamingguide-3.png",
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
    category: "Websites", 
    title: "Prime One", 
    imgMain: "mobilewebdesign.png",
    figma:"https://embed.figma.com/proto/W0r4eQk95RhVOoeFRxIx24/IDT535_Final_Project?node-id=20-353&starting-point-node-id=20%3A353&embed-host=share"
  },
  { 
    category: "Websites", 
    title: "The Captains", 
    imgMain: "captains.jpg",
    multipleImages: new Map([
          ["captains-1.jpg",
            "Logo"
          ],
          ["captains-2.jpg",
            "Typefaces"
          ],
          ["captains-3.jpg",
            "Colors"
          ],
        ])
        ,
    // multipleImages: ["captains-1.jpg", "captains-2.jpg", "captains-3.jpg"],
    figma:"https://embed.figma.com/proto/K1COfsd3YbRV25TEvviRCq/Captains_Homepage?kind=proto&node-id=1-13&page-id=0%3A1&scaling=min-zoom&embed-host=share"
  }
  // ,
  // { 
  //   category: "Print Design", 
  //   title: "Stym Instruction Manual", 
  //   imgMain: "stym.jpg",
  //   multipleImages: ["stym-0.jpg", "stym-1.jpg", "stym-2.jpg","stym-3.jpg", "stym-4.jpg", "stym-5.jpg"]
  // },
  // { 
  //   category: "Print Design",
  //   title: "Magazine", 
  //   imgMain: "magazine.jpg",
  //   imgChild: "magazine-0.jpg" 
  // },
  // { 
  //   category: "Print Design",
  //   title: "Infographic Poster", 
  //   imgMain: "infographic-poster.jpg",
  //   imgChild: "infographic-poster.jpg" 
  // },
  // { 
  //   category: "Print Design",
  //   title: "Inter Type Specimen Poster", 
  //   imgMain: "Inter Type Specimen Poster.jpg",
  //   imgChild: "Inter Type Specimen Poster-0.jpg" 
  // }
  ,
  { 
    category: "Websites",
    title: "Digital Card Game Prototype", 
    imgMain: "Digital Card Game Prototype.gif",
    topDescription: "This project is a digital card game that involves graphic design theories. The topics covered are typefaces, color theory, and poster grid theory. To win the game, the first player to have no cards left over, wins.",
    video: "https://www-ccv.adobe.io/v1/player/ccv/4AQaxIMmJ9z/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
    multipleImages: new Map([
          ["card-game.jpg",
            "Design Theory: Shows a list of types of cards. One group is textual and one is group is visual that shows what the associated textual card communicates."
          ],
          ["digital-card-game-1.jpg",
            "A diagram that shows the steps of how the card game works."
          ],
          ["digital-card-game.jpg",
            "A visual representation of how the card game was built in Figma."
          ]
        ])
        
    // multipleImages: ["card-game.jpg", "digital-card-game-1.jpg", "digital-card-game.jpg"]
  },
  { 
    category: "Motion Design",
    title: "\"Ice & Fire\" Kinetic Lettering", 
    imgMain: "ice-&-fire-kinetic-lettering-0.gif",
    multipleImages: new Map([
          ["ice-&-fire-kinetic-lettering-0.gif",
            "Logo"
          ],
          ["ice-&-fire-kinetic-lettering-1.gif",
            "Typefaces"
          ]
        ])
        ,
    // multipleImages: ["ice-&-fire-kinetic-lettering-0.gif", "ice-&-fire-kinetic-lettering-1.gif"]
  }
  // ,
  // { 
  //   category: "Print Design",
  //   title: "Roberson Museum Wayfinding", 
  //   imgMain: "roberson-museum-wayfinding.jpg",
  //   imgChild: "roberson-museum-wayfinding-0.jpg"
  // },
  // { 
  //   category: "Print Design",
  //   title: "Spread Page Designs", 
  //   imgMain: "spread-page-designs.jpg",
  //   multipleImages: ["spread-page-designs-0.jpg", "spread-page-designs-1.jpg", "spread-page-designs-2.jpg"]
  // }
  ,
  { 
    category: "Interior Design",
    title: "Interior Design", 
    imgMain: "interior_design.jpg",
    imgChild: "interior_design-0.jpg"
  }
  ,
  { 
    category: "Email Design",
    title: "Back to School",
    imgMain: "backtoschool.png"
    ,HTMLFile:"/emails/8_11_back_to_school_V2_V3.html"
  }
  ,
  { 
    category: "Email Design",
    title: "October Events 🎃",
    topNote: "None of the images were designed by me except the bottom image for a discount code.",
    imgMain: "halloween-first_image.jpg"
    ,HTMLFile:"/emails/9_24_AAP_trick_or_treat_tickets_V16.html"
  }
  ,
  { 
    category: "Email Design",
    title: "Save Your Cords w/ Heavy Duty Promos",
    imgMain: "Cordsemail.jpg"
    ,HTMLFile:"/emails/09_08_HDP_Cable_Verified_By_Henry.html"
  }
  ,
  { 
    category: "Email Design",
    title: "Wine for Wolves 🐺",
    topNote: "None of the images were designed by me, except the encounters image.",
    imgMain: "Wine for Wolves.jpg"
    ,HTMLFile:"/emails/8_21_AAP_wine_for_wolves_tickets_V31.html"
  }
  ,
  { 
    category: "Email Design",
    title: "Get Cool-er with Heavy Duty Promos",
    imgMain: "Get Cool-er with Heavy Duty Promos.jpg"
    ,HTMLFile:"/emails/7_21_cooler_HDP_V5.html"
  }
  ,
  { 
    category: "Email Design",
    title: "Summer Events",
    topNote: "None of the images were designed by me, except the “Oh Baby! Animal Meet & Greet” image.",
    imgMain: "summerevents.jpg"
    ,HTMLFile:"/emails/8_13_summer_events_V14.html"
  }
];