import axios from "axios";

const APIheaders = {
  "Content-Type": "application/json",
};

interface ThreadModel {
  thread_id: string;
  thread_content: string;
  question_id: string;
  id_user: string;
}

export const addThread = async ({
  thread_id,
  thread_content,
  question_id,
  id_user,
}: ThreadModel) => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/questions/:question_id/threads",
      {
        method: "POST",
        headers: APIheaders,
        body: JSON.stringify({
          thread_id,
          thread_content,
          question_id,
          id_user,
        }),
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllThreads = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/questions/threads");

    if (!response.ok) throw new Error("Request failed");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAllThreadsV2 = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/questions/threads"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllThreadsByQuestionId = async (question_id: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/questions/${question_id}/threads`
    );
    if (!response.ok) throw new Error("Request failed");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
