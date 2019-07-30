import { IFrontMatterData } from '@website/templates/interface';

export interface IMenuDataItem extends IFrontMatterData {
  meta: IFrontMatterData;
  link?: string;
}

export interface IMenuData {
  [key: string]: IMenuData | IMenuDataItem[];
}
