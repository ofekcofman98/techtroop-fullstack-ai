const studentAnswers = {
  brBlds: {
    1: "a",
    2: "a",
    3: "c"
  },
  dvOna: {
    1: "a",
    2: "c",
    3: "c"
  },
  nmPrz: {
    1: "a",
    2: "b",
    3: "a"
  }
}
const studentGithubs = ["brBlds", "dvOna", "nmPrz"]
    
const distributions = {
  1: {},
  2: {},
  3: {}
}
    
const getDistributions = function (studentAnswers) {
  studentGithubs.forEach(sg => {
    let answers = studentAnswers[sg]
    
    Object.keys(answers).forEach(questionNumber => {
      let letterAnswer = answers[questionNumber]
    
      distributions[questionNumber][letterAnswer] ?
        distributions[questionNumber][letterAnswer]++ :
        distributions[questionNumber][letterAnswer] = 1
    })
  })
    
  return distributions
}

getDistributions(studentAnswers)

/*
    Time Complexity:

    getDistributions runs n=studentGithubs.kength * m=answers.length = O(n*m)
    
    num of answers is constant => m=O(1) => O(n*m) = O(n)
*/