import openai from './config/open-ai.js'

async function main() {
    const chatComplition = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
            {role: 'user', content: 'What is capital of Pakistan?'}
        ]       
    });

    console.log(chatComplition.data.choices[0].message.content);
}
main();