function testText() {
  const {
    getItems,
    getInfo
  } = require('@alheimsins/b5-johnson-120-ipip-neo-pi-r')

  console.log(getItems('en', true)) // returns English shuffeled
  console.log(getInfo()) // returns test info
}

function testResult() {
  const {
    getInfo,
    getTemplate,
    getDomain,
    getFacet
  } = require('@alheimsins/b5-result-text')

  console.log(getInfo()) // returns modules info
  console.log(getTemplate('no')) // returns template for language
  console.log(getDomain({
    language: 'no',
    domain: 'O'
  })) // returns content of a domain for given language

  console.log(getFacet({
    language: 'no',
    domain: 'O',
    facet: 2
  })) // returns content of a facet for a given domain and language
}

function testScore() {
  const calculateScore = require('@alheimsins/bigfive-calculate-score')
  const result = {
    "timeElapsed": -51,
    "ip": "127.0.0.1",
    "lang": "en",
    "test": "50-IPIP-NEO-PI-R",
    "totalQuestions": 50,
    "answers": [{
        "domain": "A",
        "facet": "1",
        "score": "3"
      },
      {
        "domain": "A",
        "facet": "1",
        "score": "3"
      },
      {
        "domain": "E",
        "facet": "1",
        "score": "3"
      },
      {
        "domain": "E",
        "facet": "2",
        "score": "3"
      }
    ]
  }

  const score = calculateScore(result);
  console.log(score.E.facet['2'])
}


// testText()
// testResult()
testScore()