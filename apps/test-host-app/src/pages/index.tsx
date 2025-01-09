import React, { useState, useEffect } from 'react';

const IndexPage = () => {
  // Explicitly define the state type as string | null
  const [iframeSrc, setIframeSrc] = useState<string | null>(null);

  // Listen for messages from the Angular app
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log('Message received from Angular:', event.data);
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div style={{ marginBottom: '10px' }}>
        <button
          onClick={() => setIframeSrc('http://localhost:4200')}
          style={{ marginRight: '10px' }}
        >
          ML PWA
        </button>
        <button onClick={() => setIframeSrc('http://localhost:4300')}>
          Project Player
        </button>
      </div>
      {iframeSrc && (
        <iframe
          src={iframeSrc}
          style={{
            width: '100%',
            height: '90vh',
            border: 'none',
          }}
          title="Angular App"
        ></iframe>
      )}
    </div>
  );
};

export default IndexPage;
