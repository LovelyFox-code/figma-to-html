

let finOperPokaznyky = [
  {
    "type": "dilovaAktyvnist",
    "category": "vyruchka",
    "dynamika": [
      {
        "rik": 2019,
        "znachennya": 36852545.0
      },
      {
        "rik": 2018,
        "znachennya": 34464262.0
      },
      {
        "rik": 2017,
        "znachennya": 17849182.0
      }
    ],
    "znachymist": 0.7,
    "otsinka": 10.0,
    "pidsumkoveZnachennya": 3.5
  },
  {
    "type": "dilovaAktyvnist",
    "category": "valyutaBalansu"
  }
]
document.getElementById("znachymist").innerHTML = finOperPokaznyky.map(e => e.znachymist);
document.getElementById('otsinka').innerHTML = finOperPokaznyky.map(e => e.otsinka);
document.getElementById('pidsumkoveZnachennya').innerHTML = finOperPokaznyky.map(e => e.pidsumkoveZnachennya);

let dynamika = finOperPokaznyky.map(e => e.dynamika);
let rik = dynamika[0].map(e => e.rik);
let znachennya = dynamika[0].map(e => e.znachennya);

var xValues = rik;
var yValues = znachennya;



new Chart("chart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: true,
      lineTension: 0,
      backgroundColor: "rgba(255, 132, 139, 0.28)",
      borderColor: "#FF848B",
      color: "white",
      data: yValues,
      pointRadius: 4,
      borderWidth: 2,
      pointBackgroundColor: "white"
    }]
  },
  options: {
    legend: {display: false},
    responsive: true,
    plugins: {
      title: {
        display: false
      }
    },
    scales: {

      y: {
        grid: {
          color: function (context) {
            return 'rgba(255, 255, 255, 0.5)';
          },
        },

      },
      x: {
        grid: {
          color: function (context) {
            return 'rgba(255, 255, 255, 0.5)';
          },
        },

        ticks: {
          color: '#FFFFFF',
        }
      }

    }
  },
});











//   "dynamika": [
//     {
//       "rik": 2019,
//       "znachennya": 32143333.0
//     },
//     {
//       "rik": 2018,
//       "znachennya": 30557870.0
//     },
//     {
//       "rik": 2017,
//       "znachennya": 40368039.0
//     }
//   ],
//   "znachymist": 0.25,
//   "otsinka": 5.0,
//   "pidsumkoveZnachennya": 1.25
// },
// {
//   "type": "dilovaAktyvnist",
//   "category": "oborotnyyKapital",
//   "dynamika": [
//     {
//       "rik": 2019,
//       "znachennya": -11408005.0
//     },
//     {
//       "rik": 2018,
//       "znachennya": -8060905.0
//     },
//     {
//       "rik": 2017,
//       "znachennya": -12327483.0
//     }
//   ],
//   "znachymist": 0.25,
//   "otsinka": 5.0,
//   "pidsumkoveZnachennya": 1.25
// },
// {
//   "type": "dilovaAktyvnist",
//   "category": "chastkaOborotnohoKapitalu",
//   "dynamika": [
//     {
//       "rik": 2019,
//       "znachennya": -30.956
//     },
//     {
//       "rik": 2018,
//       "znachennya": -23.389
//     },
//     {
//       "rik": 2017,
//       "znachennya": -69.065
//     }
//   ],
//   "znachymist": 0.15,
//   "otsinka": 5.0,
//   "pidsumkoveZnachennya": 0.75
// }