import axios from "axios";

export const getQuestionsByUser = (id_user: string) => {
  try {
    const res = axios.get(
      `http://localhost:3000/api/profile/${id_user}/questions`
    );
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const getThreadsByUser = (id_user: string) => {
  try {
    const res = axios.get(
      `http://localhost:3000/api/profile/${id_user}/threads`
    );
    return res;
  } catch (error) {
    console.error(error);
  }
};
