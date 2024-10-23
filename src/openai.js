const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({ apiKey: ""});
const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message) {
    try{
  const res = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',  
    messages: [{ role: 'user', content: message }],
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  });
  return res.data.choices[0].message.content;
} catch (error) {
    console.error("OpenAI API error:", error.response?.status, error.response?.data);
    throw error;
  }
}
