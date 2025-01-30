export const sendMessageToMantle = async (message) => {
    try {
      const response = await fetch('https://sozu-hackathon.onrender.com/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "query": message,
          "session_id": "1234"
        })
      });

      const data = await response.json();
    //   console.log(data)
      return data.response
      
  
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   }
  
    //   const data = await response.json();
    //   return data.choices[0].message.content;
      
    } catch (error) {
      console.error('API Error:', error);
      return "Sorry, there was an error processing your request.";
    }
  };