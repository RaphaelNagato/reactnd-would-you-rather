import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { addAnswerToUser } from "./users";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION";
export const CREATE_NEW_QUESTION = "CREATE_NEW_QUESTION";

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}

function addAnswerToQuestion({ authUser, qid, answer }) {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    answerToQuestion: {
      authUser,
      qid,
      answer,
    },
  };
}

function createNewQuestion(question) {
  return {
    type: CREATE_NEW_QUESTION,
    question,
  };
}

export function handleNewQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authUser } = getState();
    const author = authUser;
    return saveQuestion({ optionOneText, optionTwoText, author }).then(
      (question) => {
        console.log(question);
        dispatch(createNewQuestion(question));
      }
    );
  };
}

export function handleAddAnswerToQuestionAndUser(qid, answer) {
  return (dispatch, getState) => {
    const { authUser } = getState();
    const authedUser = authUser;
    return saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => dispatch(addAnswerToQuestion({ authUser, qid, answer })))
      .then(() => dispatch(addAnswerToUser({ authUser, qid, answer })))
      .catch((err) => console.error(err));
  };
}
