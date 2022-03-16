import { Tag } from './tag.model'

export class Publication
{
    idPublicacion: number;
    owner: string;
    title: string;
    description: string;
    img: string;
    status:string;
    tags: Tag[];
}