interface ImgandAlt {
  imagefile: string;
  Alt: string;
}

export interface TwoColumnImgandAlt {
  desktop: ImgandAlt;
  mobile: ImgandAlt;
}


export interface titleDescriptionTwoImages {
  title: string;
  description: string;
  TwoColumnImgandAlt: TwoColumnImgandAlt;
}


export interface titleAndDescription {
  title: string;
  description: string;
}


export interface titleDescriptionOneImage {
  titleAndDescription: titleAndDescription[];
  TwoColumnImgandAlt: TwoColumnImgandAlt;
}

export interface Datatypes {
    category: string;
    title: string;
    imgMain: string;
    topDescription: string;
    TwoColumnImgandAlt: TwoColumnImgandAlt;
    titleDescriptionTwoImages: titleDescriptionTwoImages[];
    titleDescriptionOneImage: titleDescriptionOneImage[];
    multipleImages: ImgandAlt[];
    figma: string;
    HTMLFile: string;
    topNote: string;
}