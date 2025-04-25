// const BASE_URL = "http://127.0.0.1:8000"; // uncomment for dev testing
const BASE_URL = 'https://colorgen-backend.onrender.com';

export default async function getData(imageFile) {
  const request = `${BASE_URL}/get-color-palette`;
  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const response = await fetch(request, {
      method: "POST",
      body: formData
    });
    // console.log("Response:", response);

    if (!response.ok) {
      throw new Error("Failed to Fetch Data");
    }

    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error("Error While Fetching Data:", error);
    return null;
  }
}
