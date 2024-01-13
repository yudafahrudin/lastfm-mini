const customHeaders = {
  "Content-Type": "application/json",
};

export const post = (url: string, data: any) => {
  try {
    return fetch(url, {
      method: "POST",
      headers: customHeaders,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {}
};
