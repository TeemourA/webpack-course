import * as $ from 'jquery';
import Post from '@models/Post';
import json from './assets/json.json';
import jsImg from './assets/pic.png';
import './styles/styles.css';
import xml from './assets/xml.xml';
import './styles/styles.less';
import './styles/styles.scss';

const post = new Post('Webpack Post Title', jsImg);

$('pre').addClass('code').html(post.toString());

console.log(post.toString());
console.log(jsImg);

// console.log('json:', json);
// console.log(xml);
