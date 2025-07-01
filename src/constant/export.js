import school from '../assets/school-board.JPG';
import banking from '../assets/img160.JPG'
import atm from '../assets/img81.JPG'
import flooring from '../assets/flooring.JPG'
import home from '../assets/img28.JPG'
import partition from '../assets/img118.JPG'
import branding from '../assets/img43.JPG'
import led from '../assets/ambulance.JPG'
import bg from '../assets/bg.avif'

export const service =[{
    name:'Home Interiors',
    desc:'jfbhjkebvjk',
    image: home
},
{
    name:'Branding',
    desc:'jfbhjkebvjk',
    image: branding
},
{
    name:'ATM Renovation',
    desc:'jfbhjkebvjk',
    image: atm
},
{
    name:'Flooring',
    desc:'Branding creates a distinct identity for a business in the minds of your target audience and the general population',
    image: flooring
},
{
    name:'LED Signage',
    desc:'jfbhjkebvjk',
    image: led
},

{
    name:'Partition',
    desc:'jfbhjkebvjk',
    image: partition
},
{
    name:'School Work',
    desc:'jfbhjkebvjk',
    image: school
},
{
    name:'Bank Furniture',
    desc:'jfbhjkebvjk',
    image: banking
},
{
    name:'Glass',
    desc:'jfbhjkebvjk',
    image: school
},
]

export const projects = [
  {
    id: 1,
    title:'Home Interiors',
    thumbnail: home
  },
  {
    id: 2,
    title: 'Branding',
    thumbnail: bg
  },
  {
    id: 3,
    title: 'ATM Renovation',
    thumbnail:bg
  },
  {
    id: 4,
    title: "Partition",
    thumbnail:bg
  },
  {
    id: 5,
    title: "Bank Furniture",
    thumbnail: bg
  },
  {
    id: 6,
    title: "Floor Designing",
    thumbnail: bg
  },
  {
    id: 7,
    title: "LED Signage",
    thumbnail: bg
  },
  {
    id: 10,
    title: "School Work",
  },

];


export const projectImages = {
  "School Work": Array.from({ length: 20 }, (_, i) => `img${i + 1}.JPG`),
  "Home Interiors": Array.from({ length: 20 }, (_, i) => `img${i + 21}.JPG`),
  "Branding": Array.from({ length: 20 }, (_, i) => `img${i + 41}.JPG`),
  "Flooring": Array.from({ length: 20 }, (_, i) => `img${i + 61}.JPG`),
  "ATM Renovation": Array.from({ length: 20 }, (_, i) => `img${i + 81}.JPG`),
  "Partition": Array.from({ length: 20 }, (_, i) => `img${i + 101}.JPG`),
  "LED Signage": Array.from({ length: 20 }, (_, i) => `img${i + 121}.JPG`),
  "Bank Furniture": Array.from({ length: 20 }, (_, i) => `img${i + 141}.JPG`),
  "Glass": Array.from({ length: 20 }, (_, i) => `img${i + 161}.JPG`)
};



