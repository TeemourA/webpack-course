import Post from './Post';
import json from './assets/json.json';
import jsImg from './assets/pic.png';
import './styles/styles.css';

const post = new Post('Webpack Post Title', jsImg);

console.log('json:', json);
console.log(post.toString());
