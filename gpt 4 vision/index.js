import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const imgURL = "https://scrimba.com/links/egg-image";

const response = await openai.chat.completions.create({
  model: "gpt-4-vision-preview",
  messages: [
    {
      role: "user",
      content: [
        { type: "text", text: "Write a short, engaging, and creative story from this image" },
        {
          type: "image_url",
          image_url: {
            url: imgURL
          }
        }
      ]
    }
  ]
});
console.log(response.choices[0]);

document.body.innerHTML = `<img src="${imgURL}" alt="Image to analyze">`;