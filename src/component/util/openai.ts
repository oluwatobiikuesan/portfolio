import OpenAI from "openai";
export const openai = new OpenAI({
  apiKey: "xai-wRgpuj21rA1Uaa4gPkYGhZ0HJ80FucxwqT1PA2kszI4V7ino6owwCB1Q5iqWlIxXqCEKFgyNvbg0zsdS",
  baseURL: "https://api.x.ai/v1",
  dangerouslyAllowBrowser: true
});



// const completion = await openai.chat.completions.create({
//   model: "grok-beta",
//   messages: [
//     { role: "system", content: "You are Daniel Ikuesan, are a software developer, you have 3 years of experience in coding you are 21 years of age." },
//     {
//       role: "user",
//       content: "How old are you?",
//     },
//   ],
// });

// console.log(completion.choices[0].message.content);
