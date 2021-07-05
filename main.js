
let dict = {
  "indicator": {
    "positive": {
      "name": "Позитивна",
      "class": "green"
    },
    "negative": {
      "name": "Негативна",
      "class": "error-light"
    },
    "cceptablea": {
      "name": "Прийнятна",
      "class": "attention_light"
    }
  }
}

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
    "category": "valyutaBalansu",
    "dynamika": [
      {
        "rik": 2019,
        "znachennya": 32143333.0
      },
      {
        "rik": 2018,
        "znachennya": 30557870.0
      },
      {
        "rik": 2017,
        "znachennya": 40368039.0
      }
    ],
    "znachymist": 0.25,
    "otsinka": 5.0,
    "pidsumkoveZnachennya": 1.25
  }
]

// finOperPokaznyky.map(e => {
//   let indicator = calculateIndicator(e.dynamika.map(d => d.znachennya))
//   let html = `
//   <div class="fin-section">

//                     <h3 id="dilovaAktyvnist">${e["type"]}</h3>
//                     <div class="content">
//                         <div class="title">
//                             <p class="left center">Загальна оцінка: <span class="${dict.indicator[indicator].class}">${dict.indicator[indicator].name}</span>|Сума по
//                                 блокам
//                                 показників: <span class="${dict.indicator[indicator].class}">3.25</span></p>
//                             <p class="right-blue">Методологія <img src="./image/arrow-blue.svg" alt="" /></p>
//                         </div>
//                         <p>
//                             <strong>Ділова активність</strong> <span class="grey">- це сукупність фінансових показників,
//                                 що характеризують параметри, які відображають зміни в оборотах компанії. Збалансована
//                                 позитивна зміна виручки, валюти балансу і оборотного капіталу свідчать про можливість
//                                 стійкого зростання бізнесу в цілому і його частки на ринку відповідно.</span>
//                         </p>

//                     </div>
//                 </div>
//   `
//   document.getElementById("fin-score-container").innerHTML = html
// })

// document.getElementById("znachymist").innerHTML = finOperPokaznyky.map(e => e.znachymist);
// document.getElementById('otsinka').innerHTML = finOperPokaznyky.map(e => e.otsinka);
// document.getElementById('pidsumkoveZnachennya').innerHTML = finOperPokaznyky[0]["pidsumkoveZnachennya"];




let dynamika = finOperPokaznyky.map(e => e.dynamika);
let rik = dynamika[0].map(e => e.rik).sort();
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
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: false
      }
    },
    scales: {

      y: {
        ticks: {
          display: false
        },
        grid: {
          color: function (context) {
            return 'rgba(255, 255, 255, 0.5)';
          },
        },

      },
      x: {

        grid: {
          borderDashOffset: 10,
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

function calculateIndicator(values) {
  if (values[0] > values[1] > values[2]) {
    return "negative"
  } else if (values[0] > values[1] < values[2]) {
    return "acceptable"
  } else {
    return "positive"
  }
}





//zagalna ocinka company
let zahalnaOtsinka = {
  "zahalnaDilovaAktyvnist": 3,
  "zahalnaRentabelnist": 3334,
  "operEfektyvnist": 3.25,
  "finZdorovya": 3.25
}

let otsinka = document.getElementById("dilova").innerHTML = zahalnaOtsinka.zahalnaDilovaAktyvnist;
let rentabelnist = document.getElementById("rentabelnist").innerHTML = zahalnaOtsinka.zahalnaRentabelnist;
let efektyvnist = document.getElementById("efektyvnist").innerHTML = zahalnaOtsinka.operEfektyvnist;
let finZdorovya = document.getElementById("finZdorovya").innerHTML = zahalnaOtsinka.finZdorovya;







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