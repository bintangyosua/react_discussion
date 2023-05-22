const APIheaders = {
  "Content-Type": "application/json",
};

export const loginAPI = async (id_user: string, password_user: string) => {
  try {
    const response = await fetch("http://localhost:3000/api/signin", {
      method: "POST",
      headers: APIheaders,
      body: JSON.stringify({ id_user, password_user }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const checkLoginStatus = async () => {
  const storedLoggedIn = localStorage.getItem("loggedIn");
  return storedLoggedIn === "true";
};

export const logoutAPI = async () => {
  const sessionId = localStorage.getItem("sessionId");
  try {
    await fetch(`http://localhost:3000/api/logout?sessionId=${sessionId}`);
  } catch (err) {
    console.error(err);
  }
};
