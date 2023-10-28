import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
