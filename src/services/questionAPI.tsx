const APIheaders = {
  "Content-Type": "application/json",
};

export interface questionModel {
  question_id: string;
  question_content: string;
  category_id: number;
  id_user: string;
}

export const addQuestion = async ({
  question_id,
  question_content,
  category_id,
  id_user,
}: questionModel) => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/questions/add-question",
      {
        method: "POST",
        headers: APIheaders,
        body: JSON.stringify({
          question_id,
          question_content,
          category_id,
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

export const getAllQuestions = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/questions");

    if (!response.ok) throw new Error("Request failed");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
