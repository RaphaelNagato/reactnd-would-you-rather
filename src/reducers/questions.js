import {
  ADD_ANSWER_TO_QUESTION,
  CREATE_NEW_QUESTION,
  GET_QUESTIONS,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    default:
      return state;

    case ADD_ANSWER_TO_QUESTION:
      const { authUser, qid, answer } = action.answerToQuestion;

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authUser),
          },
        },
      };

    case CREATE_NEW_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
  }
}
