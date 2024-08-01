import { Lotties } from '../theme/Lotties';

export const getMimeTypeFromPath = path => {
    const extension = path.split('.').pop().toLowerCase();
    switch (extension) {
        case 'jpg':
        case 'jpeg':
            return 'image/jpeg';
        case 'png':
            return 'image/png';
        case 'mp4':
            return 'video/mp4';
        case 'mov':
            return 'video/quicktime';
        default:
            return 'application/octet-stream';
    }
};

export const getEmoji = value => {
    switch (value) {
        case 1:
            return Lotties.heartLottie;
        case 2:
            return Lotties.happyLottie;
        case 3:
            return Lotties.happyLottie;
        case 4:
            return Lotties.happyLottie;
        case 5:
            return Lotties.happyLottie;
        default:
            return Lotties.happyLottie;
    }
};
