export const urlLookup = "http://btax.mandakh.org:8000/lookup/";
export const sendRequest = async (url, body) => {
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw "Something went wrong."
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.warn(error);
  }
};
