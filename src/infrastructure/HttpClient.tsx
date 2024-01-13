const customHeaders = {
  "Content-Type": "application/json",
};

async function get<T>(url: string, config: string = ""): Promise<T> {
  const response = fetch(url + config, {
    method: "GET",
    headers: customHeaders,
  });
  return (await response).json();
}

export default {
  get,
};
