import { add } from './module';
import { join } from 'lodash';
import './style.scss';

const result = add(2, 3);

setTimeout(() => {
    import('./module').then(module => {
        console.log(module.add(2, 3))
    })
}, 5000 );

declare const _:any;
console.log(_.join(['Hello', 'webpack'], ' '));

// declare const join:any;

console.log(join(['Hello', 'webpack'], ' '));