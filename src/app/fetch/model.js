import { createClient } from 'pexels';


const fetchData = async(slug) => {
    console.log("fetchingggg...")
    try {
        // Make a POST request to your API route
        const response = await fetch('/api/model', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Specify that you're sending JSON data
            },
            body: JSON.stringify({ slug }) // Convert your data object to a JSON string
        });

        // Check if the response is okay (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not okay');
        }

        // Parse the JSON response
        const result = await response.json();
        if (result.error) {
            console.error(result.error);
            return;
        }

        // Handle the blog data (ensure it's safe JSON)
        return result;
        
        // Use the result as needed in your application
    } catch (error) {
        console.error('Fetch error:', error);
    }
};

const fetchImg = async(query)=>{
    try{
        const client = createClient('s0YGvd0H1PJgWxF1hz5ePrIWtvZqhoTKBkffEtJWjgwHYArLlmvpi3kT');

        const photos = await client.photos.search({ query, per_page: 1 })
        
        return photos;

    }catch(error){
        console.error('Fetch error:', error);
    }

}
export {fetchData, fetchImg}