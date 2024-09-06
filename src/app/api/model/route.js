import {NextResponse} from "next/server"
import OpenAI from "openai"

const OPENROUTER_API_KEY = process.env.OPENAI_API_KEY;
const TITLE = process.env.TITLE;
const SITE_URL = process.env.SITE_URL;
const systemPrompt = `
Generate a fun and educational blog-style article suitable for children about the subject: "{subject}". The content should be engaging, playful, and easy to understand, written in a tone that keeps children interested. Structure the article into four detailed sections:
1. Introduction: Start with an intriguing fact or question about the subject to hook the reader. Make it a few sentences long, with some details to spark curiosity.
2. Explanation: Provide a more detailed and thorough explanation of the topic. It should have multiple paragraphs that go deeper into the subject, explaining important concepts in a simple way.
3. Fun Facts: Share several interesting or surprising facts related to the topic. Add explanations and details for each fact to keep the reader engaged.
4. Conclusion: Summarize the key points with a thoughtful ending, and provide a final engaging thought that encourages children to think more about the subject.

Ensure that each section is at least 3-5 sentences long, and the overall length of the article should be around 400-500 words. Output the article in the following JSON structure:
{
    "title": "<A catchy title for the blog>",
    "content": {
        "introduction": "<The introductory paragraph>",
        "explanation": "<The explanation section with multiple paragraphs>",
        "fun_facts": "<The fun facts section with detailed facts>",
        "conclusion": "<The concluding section with a thoughtful ending>"
    },
    "image_description": "<A description of the ideal image that would complement the article>"
}
`

const POST = async(req) =>{
    const openai = new OpenAI({ // Create a new instance of the OpenAI client
        baseURL: "https://openrouter.ai/api/v1",
        apiKey: OPENROUTER_API_KEY,
        defaultHeaders: {
            "HTTP-Referer": SITE_URL, // Optional, for including your app on openrouter.ai rankings.
            "X-Title": TITLE, // Optional. Shows in rankings on openrouter.ai.
        }
    })
    const data = await req.text()

    const completion = await openai.chat.completions.create(
        {
            model: "meta-llama/llama-3.1-8b-instruct:free",
            messages: [
                {
                    role: "system",
                    content: systemPrompt
                },
                {
                    role: "user",
                    content: data
                }
            ],
            response_format: {type: 'json_object'},
        }
    )

    const blog_data = completion.choices[0].message.content
   
    return NextResponse.json(blog_data)
}

export {POST}