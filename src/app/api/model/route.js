import {NextResponse} from "next/server"
import OpenAI from "openai"

const OPENROUTER_API_KEY = process.env.OPENAI_API_KEY;
const TITLE = process.env.TITLE;
const SITE_URL = process.env.SITE_URL;

const POST = async(req) =>{
    const openai = new OpenAI({ // Create a new instance of the OpenAI client
        baseURL: "https://openrouter.ai/api/v1",
        apiKey: OPENROUTER_API_KEY,
        defaultHeaders: {
            "HTTP-Referer": SITE_URL, // Optional, for including your app on openrouter.ai rankings.
            "X-Title": TITLE, // Optional. Shows in rankings on openrouter.ai.
        }
    })
    const {subject, title} = await req.json()

    try {
        const completion = await openai.chat.completions.create({
            model: "microsoft/phi-3-medium-128k-instruct:free",
            messages: [
                {
                    role: "system",
                    content: "Generate a fun and educational blog-style article for children based on the subject and title provided."
                },
                {
                    role: "user",
                    content: `
                    Subject: ${subject}
                    ${title ? `Title: ${title}` : ""}

                    Generate a fun and educational blog-style article suitable for children about the subject: "${subject}"${
                        title ? ` with a special focus on the title: "${title}"` : ""
                    }.
                    The content should be engaging, playful, and easy to understand, written in a tone that keeps children interested. Structure the article into four detailed sections:
                    1. Introduction: Start with an intriguing fact or question about the subject to hook the reader. Make it a few sentences long, with some details to spark curiosity.
                    2. Explanation: Provide a more detailed and thorough explanation of the topic. It should have multiple paragraphs that go deeper into the subject, explaining important concepts in a simple way.
                    3. Fun Facts: Share several interesting or surprising facts related to the topic. Add explanations and details for each fact to keep the reader engaged.
                    4. Conclusion: Summarize the key points with a thoughtful ending, and provide a final engaging thought that encourages children to think more about the subject.

                    Ensure that each section is at least 3-5 sentences long, and the overall length of the article should be around 400-500 words.

                    In addition, instead of an image description, provide a **search query** that can be used to find an appropriate image for the article's topic using Pexels or other image search platforms. The search query should be simple and directly related to the subject of the article.

                    Output the article in the following JSON structure:

                    {
                    "title": "A long and descriptive title",
                    "content": {
                        "introduction": "A playful, intriguing introduction that engages the reader with a long and interesting fact or question.",
                        "explanation": "A detailed explanation in multiple paragraphs, including examples, fun facts, and interesting stories. Keep it long but properly formatted.",
                        "fun_facts": "Several fun facts listed in bullet points with some in-depth details where appropriate.",
                        "conclusion": "A detailed conclusion that wraps up the topic, keeping it light and fun."
                    },
                    "image_search_query": "A relevant search query to find an appropriate image for the article."
                    }

                    Please ensure the JSON is properly formatted and easy to parse.
                    `
                }
            ],
            response_format: 'json', // Ensure response format is proper JSON
        });

        // Safely parse and handle completion
        const completionResponse = completion.choices[0]?.message?.content;
        // Parse the response content to validate JSON
        console.log(completionResponse);
        let blog_data = JSON.parse(completionResponse);

        // Return parsed data
        return NextResponse.json(blog_data);
    } catch (error) {
        console.error("Error in OpenAI completion:", error);
        return NextResponse.json({ error: 'Failed to generate or parse blog content' });
    }

}

export {POST}