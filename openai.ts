import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-BqRc841yrrOM2biDulE58wDw",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
export default openai;
