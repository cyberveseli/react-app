module.exports = {
  branches: "main",
  repositoryUrl: "https://github.com/cyberveseli/react-app.git",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};
