module.exports = {
  apps: [
    {
      name: "video-worker",
      script: "./workers/worker.ts",
      interpreter: "node",
      node_args: "tsx",
      watch: false,
      env: {
        REDIS_HOST: process.env.REDIS_HOST || "158.69.211.52",
        REDIS_PORT: "6379",
        REDIS_PASSWORD: process.env.REDIS_PASSWORD || undefined, // if set
      }
    }
  ]
};