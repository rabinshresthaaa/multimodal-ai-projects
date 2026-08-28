import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

const image = await openai.images.generate({ 
    model: "dall-e-3", 
    prompt: "A detailed sticker of an astronaut's helmet. The visor is reflecting Earth from space, showing continents from a distance. The helmet should appear metallic, with visible knobs, ridges, and a sense of depth, styled in black and white with high contrast against a light background",
    size: "1792x1024",
    quality: "hd",
    style: "natural"
});
console.log(image.data)

document.body.innerHTML = `<img src="${image.data[0].url}" alt="AI-generated image">`;