import React from 'react';

const MetaTags = ({ title, description, imageUrl }) => {
  React.useEffect(() => {
    setTimeout(() => {
      // Update document's meta tags
      document.title = title;
      document.querySelector('meta[name="description"]').setAttribute('content', description);
      document.querySelector('meta[property="og:title"]').setAttribute('content', title);
      document.querySelector('meta[property="og:description"]').setAttribute('content', description);
      document.querySelector('meta[property="og:image"]').setAttribute('content', imageUrl); // Use the provided imageUrl prop
      document.querySelector('meta[name="twitter:title"]').setAttribute('content', title);
      document.querySelector('meta[name="twitter:description"]').setAttribute('content', description);
    }, 0);
  }, [title, description, imageUrl]);

  return null; // This component doesn't render anything
};

export default MetaTags;
