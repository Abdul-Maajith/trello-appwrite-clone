import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    // Todos in the body fo the POST req
    const { todos } = await request.json();
    console.log(todos);
    

    // Communicating with the openAI GPT
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        temperature: 0.5,
        n: 1,
        stream: false,  
        messages: [
            {
                role: "system",
                content: `When responding, welcome the user always as Mr.Abdul and say welcome to the PAPAFAM Todo App! Limit the response to 200 character`,
            },
            {
                role: "user",
                content: `Hi There, provide a summary of the following todos. Count how many todos are in each category such as To do, in progress and done, then tell the user to have a productive day! Here's the data: ${JSON.stringify(todos)}`
            }
        ]
    })

    const { data } = response;

    console.log(data.choices[0].message);
    return NextResponse.json(data.choices[0].message);
    
}