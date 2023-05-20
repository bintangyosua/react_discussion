// auth.ts

export const get = async (url: string) => {
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error("Request failed");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const post = async (url: string, body: object) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      ...body,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error("Request Failed");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const put = async (url: string, body: RequestInit) => {
  try {
    const response = await fetch(url, {
      method: "PUT",
      ...body,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error("Request Failed");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const remove = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Request Failed");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
