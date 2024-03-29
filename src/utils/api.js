const API_URL = process.env.REACT_APP_API_URL;

const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}`);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    // Handle error
    console.error('Error fetching data:', error);
    return null;
  }
};

export { fetchData };
