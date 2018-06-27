import { Image } from '../../shared/models/image.model';

export class Achievement {
    title: string;
    period: string;
    image: Image;
    content: string[] = [];
}
