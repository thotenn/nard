declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_ADMIN_URL: string;
      REACT_APP_ADMIN_PORT: string;
      REACT_APP_API_URL: string;
      REACT_APP_API_KEY: string;
      REACT_APP_ENV: "development" | "production" | "test";
      NODE_ENV: "development" | "production" | "test";
      PORT?: string;
      PWD: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};