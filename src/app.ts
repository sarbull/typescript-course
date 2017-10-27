import { add } from './module';

const result = add(2, 3);

setTimeout(() => {
    import('./module').then(module => {
        console.log(module.add(2, 3))
    })
}, 5000 );

