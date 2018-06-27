export class Achievement {
    title: string;
    period: string;
    image: AchievementImage;
    content: string[] = [];
}

class AchievementImage {
    path: string;
    alt: string;
    isPadImage: boolean
}