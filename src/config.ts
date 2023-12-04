interface AppConfig {
  port: number;
}

const config: AppConfig = {
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
};

export default config;
