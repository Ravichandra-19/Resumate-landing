exports.handler = async (event, context) => {
    // Parse the request body
    const data = JSON.parse(event.body);
  
    // Extract information from the request
    const { email } = data;
  
    // Add logic to save the email to your database or a service
    // For this example, we'll just return a success message
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Successfully added to the waitlist!' }),
    };
  };
  