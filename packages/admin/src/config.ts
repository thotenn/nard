interface Config {
  apiUrl: string;
  port: number | string;
}

const config: Config = {
  apiUrl: process.env.REACT_APP_ADMIN_URL || "http://localhost:3001",
  port: process.env.REACT_APP_ADMIN_PORT || 3001,
};

export default config;
