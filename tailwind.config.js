module.exports = {
    content: [
      './_site/**/*.html', // Process all HTML files in the _site directory
      './_includes/**/*.html', // Process all include files
      './_layouts/**/*.html', // Process all layout files
      './_posts/*.{html,md}', // Process all markdown or HTML files in the posts
      './*.{html,md}', // Process all markdown or HTML files at the root level
      // Add more paths as needed
    ],
    theme: {
      // Your theme configurations
    },
    plugins: [
      require('@tailwindcss/typography'),
      // Add other plugins here
    ],
    // Add any other configurations you might need
  }
  