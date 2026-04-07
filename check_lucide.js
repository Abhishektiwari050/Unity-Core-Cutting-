const lucide = require('lucide-react');
const keys = Object.keys(lucide);
console.log('Total keys:', keys.length);
console.log('Keys containing "Linkedin":', keys.filter(k => k.toLowerCase().includes('linkedin')));
console.log('Keys containing "Instagram":', keys.filter(k => k.toLowerCase().includes('instagram')));
console.log('Keys containing "Facebook":', keys.filter(k => k.toLowerCase().includes('facebook')));
console.log('Keys containing "Twitter":', keys.filter(k => k.toLowerCase().includes('twitter')));
