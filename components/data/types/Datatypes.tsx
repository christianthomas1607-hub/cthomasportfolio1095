interface ImgandAlt {
  imagefile: string;
  Alt: string;
}

export interface TwoColumnImgandAlt {
  desktop: ImgandAlt;
  mobile: ImgandAlt;
}


export interface titleDescriptionTwoImagesOneColumn {
  title: string;
  description: string;
  TwoColumnImgandAlt: TwoColumnImgandAlt;
}

export interface titleDescriptionOneImageOneColumn {
  title: string;
  description: string;
  imagefile: string;
  Alt: string;
}


export interface titleAndDescription {
  title: string;
  description: string;
}


export interface titleDescriptionOneImageTwoColumn {
  titleAndDescription: titleAndDescription[];
  TwoColumnImgandAlt: TwoColumnImgandAlt;
}



export interface Datatypes {
    category: string;
    title: string;
    imgMain: string;
    topDescription: string;
    TwoColumnImgandAlt: TwoColumnImgandAlt;


    titleDescriptionTwoImagesOneColumn: titleDescriptionTwoImagesOneColumn[];

    titleDescriptionOneImageOneColumn: titleDescriptionOneImageOneColumn[];

    titleDescriptionOneImageTwoColumn: titleDescriptionOneImageTwoColumn[];
    multipleImages: ImgandAlt[];
    figma: string;
    video: string;
    HTMLFile: string;
    HTMLFileTest: string;
    topNote: string;
}