const path = require('path');
const dotenv = require('dotenv')

dotenv.config({ path: path.resolve(__dirname, '../../.env') });  // This is for take the .env file from the root of the project en take the PORT of that file

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  }
};