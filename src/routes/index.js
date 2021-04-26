const quizzes = require('../../data/quizzes.json');

/**
 * Returns a list of quizzes with titles and IDs
 */
async function getQuizzes(req, res, next) {
  res.send(quizzes);

}

/**
 * Returns quiz data for the given ID, omitting the answers
 */

function omit(obj, omitKey) {
  return Object.keys(obj).reduce((result, key) => {
    if (key !== omitKey) {
       result[key] = obj[key];
    }
    return result;
  }, {});
}

async function getQuiz(req, res, next) {
  const id = req.params.id
  const quiz = quizzes[Object.keys(quizzes)[id]]
  const questions = quiz["questions"]

  for (let i = 0; i < Object.keys(questions).length; i++){
    onlyQuestions = omit(questions[i], "answer")
    questions[i] = onlyQuestions
  }

  if (!quiz) res.status(404).send('No valid ID');

  res.send(quiz);

}
/**
 * Handles a quiz submission and returns a graded result
 */
async function postQuiz(req, res, next) {
  const schema = {

  }
  req.body.questions
}

module.exports = {
  getQuizzes,
  getQuiz,
  postQuiz,
};
