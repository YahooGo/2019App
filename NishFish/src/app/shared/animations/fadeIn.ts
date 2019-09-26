import { trigger, style, transition, animate } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
    transition('void => *', [
        style({ opacity: 0 }),
        animate(1600, style({ opacity: 1 }))
    ]),
    transition('* => void', [
        animate(1600, style({ opacity: 0 }))
    ])
]);
