interface ImgandAlt {
  imagefile: string;
  Alt: string;
}

export interface TwoColumnImgandAlt {
  desktop: ImgandAlt;
  mobile: ImgandAlt;
}


export interface titleDescription2Images {
  title: string;
  description: string;
  TwoColumnImgandAlt: TwoColumnImgandAlt;
}


export interface Datatypes {
    category: string;
    title: string;
    imgMain: string;
    topDescription: string;
    TwoColumnImgandAlt: TwoColumnImgandAlt;
    titleDescription2Images: titleDescription2Images;
}