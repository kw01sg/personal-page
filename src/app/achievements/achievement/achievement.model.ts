import { Image } from '../../shared/models/image.model';

export class Achievement {
    title: string;
    id: string;
    period: string;
    image: Image;
    content: string[] = [];
}
