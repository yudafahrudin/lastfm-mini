const customHeaders = {
  "Content-Type": "application/json",
};

async function get<T>(url: string): Promise<T> {
  const response = fetch(url, {
    method: "GET",
    headers: customHeaders,
  });
  return (await response).json();
}

export default {
  get,
};
