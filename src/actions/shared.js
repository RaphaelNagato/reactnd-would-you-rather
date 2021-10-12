import { getInitialData } from "../utils/api";
import { getUsers } from "./users";
import { getQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";

const AUTHED_USER_ID = "sarah_edo";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(tweets));
      dispatch(setAuthedUser(AUTHED_USER_ID));
    });
  };
}
