const GNLogo = require('./images/GNLogo2.png');
const Slogo = require('./images/SLogo1.png');
const CLlogo = require('./images/CLLogo1.png');
const GIlogo = require('./images/GILogo1.png');
// const ALlogo = require('./images/ALLogo3.png');
const DAlogo = require('./images/DALogo2.png');
const GCTlogo = require('./images/GCTLogo1.png');
const GCElogo = require('./images/GCSLogo.png');
const Plogo = require('./images/1PLogo2.png');
const RTlogo = require('./images/RTLogo3.png');
const ARlogo = require('./images/ARLogo2.png');
const RClogo = require('./images/RCLogo.png');
const RDlogo = require('./images/RDLogo.png');
const goodnews1 = require('./images/GoodNews1.jpg');
const goodnews2 = require('./images/GoodNews2.jpg');
const goodnews3 = require('./images/GoodNews3.jpg');
const growinginstructions1 = require('./images/GrowingInstructions1.jpg');
const growinginstructions2 = require('./images/GrowingInstructions2.jpg');
const growinginstructions3 = require('./images/GrowingInstructions3.jpg');
const greatcommissionsimplified = require('./images/GreatCommissionSimplified.jpg');
const christianlife1 = require('./images/ChristianLife1.jpg');
const goodnewspdf = require('./Files/GoodNews.pdf');
const growinginstructionspdf = require('./Files/GrowingInstructions.pdf');
const christianlifepdf = require('./Files/ChristianLife.pdf');
const greatcommissionsimplifiedpdf = require('./Files/GreatCommissionSimplified.pdf');



export default {
  "files": [
    {
      "id": "1",
      "name": "The Good News",
      "content": goodnewspdf,
      "images": [goodnews1, goodnews2, goodnews3],
      "logo": GNLogo
    },
    {
      "id": "2",
      "name": "A way to share The Good News",
      "content": 'N/A',
      "images": 'N/A',
      "logo": Slogo
    },
    {
      "id": "3",
      "name": "The Christian Life",
      "content": christianlifepdf,
      "images": [christianlife1],
      "logo": CLlogo
    },
    {
      "id": "4",
      "name": "Growing Instructions",
      "content": growinginstructionspdf,
      "images": [growinginstructions1, growinginstructions2, growinginstructions3],
      "logo": GIlogo
    },
    {
      "id": "5",
      "name": "A Discipleship Atlas",
      "content": 'N/A',
      "images": 'N/A',
      "logo": DAlogo
    },
    {
      "id": "6",
      "name": "1T3 Plan",
      "content": 'N/A',
      "images": 'N/A',
      "logo": Plogo
    },
    {
      "id": "7",
      "name": "A Theology of the Great Commission",
      "content": 'N/A',
      "images": 'N/A',
      "logo": GCTlogo
    },
    {
      "id": "8",
      "name": "The Greact Commission - Simply Explained",
      "content": greatcommissionsimplifiedpdf,
      "images": [greatcommissionsimplified],
      "logo": GCElogo
    },
    {
      "id": "9",
      "name": "Resolving Conflict",
      "content": 'N/A',
      "images": 'N/A',
      "logo": RClogo
    },
    {
      "id": "10",
      "name": "Reasonable Trust",
      "content": 'N/A',
      "images": 'N/A',
      "logo": RTlogo
    },
    {
      "id": "11",
      "name": "Reasonable Design",
      "content": 'N/A',
      "images": 'N/A',
      "logo": RDlogo
    },
    {
      "id": "12",
      "name": "Additional Resources",
      "content": 'N/A',
      "images": 'N/A',
      "logo": ARlogo
    },
  ]
} 