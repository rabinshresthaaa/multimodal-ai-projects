import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

const image = await openai.images.generate({ 
  model: "dall-e-3",
  prompt: "An expressionist painting showing a figure standing on a bridge, clutching their face in a state of panic or despair, with a wide-open mouth that seems to be emitting a scream. The background features a tumultuous sky with swirling patterns of red, orange, and blue, which echo the turmoil of the central figure. The setting appears to be a long bridge with railing, receding into the distance where two figures can be seen in the background, and a body of water below the bridge reflects the swirling patterns of the sky. The colors are bold and the brushwork is loose and fluid, conveying a strong sense of emotion and psychological intensity."
});
console.log(image.data);

document.body.innerHTML = `<img src="${image.data[0].url}" alt="AI-generated image">`;