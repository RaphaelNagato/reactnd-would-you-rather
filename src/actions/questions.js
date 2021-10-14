import { saveQuestionAnswer } from "../utils/api";
import { addAnswerToUser } from "./users";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION";

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

export function handleAddAnswerToQuestionAndUser(qid, answer) {
  return (dispatch, getState) => {
    const { authUser } = getState();
    console.log(authUser);
    const authedUser = authUser;
    return saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => dispatch(addAnswerToQuestion({ authUser, qid, answer })))
      .then(() => dispatch(addAnswerToUser({ authUser, qid, answer })))
      .catch((err) => console.error(err));
  };
}
