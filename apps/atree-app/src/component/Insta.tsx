import React, { useEffect, useState } from 'react';

const Insta: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);

    // Load Instagram embed script dynamically
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);
  const handleClick = () => {
    window.open(
      'https://www.instagram.com/env_edu_india',
      '_blank',
      'noopener noreferrer'
    );
  };
  if (!isClient) return null;
  return (
    <div className="boxes3">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/env_edu_india"
        data-instgrm-version="12"
        style={{
          background: '#FFF',
          border: '0',
          borderRadius: '3px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          padding: '0',
          height: undefined,
          maxHeight: '100%',
          width: 'calc(100vw - 64px)',
        }}
        onClick={handleClick}
      >
        <div style={{ padding: '16px' }}>
          <a
            id="main_link"
            href="env_edu_india"
            style={{
              background: '#FFFFFF',
              lineHeight: '0',
              padding: '0 0',
              textAlign: 'center',
              textDecoration: 'none',
              width: '100%',
            }}
            target="_blank"
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  backgroundColor: '#F4F4F4',
                  borderRadius: '50%',
                  flex: '0',
                  height: '40px',
                  marginRight: '14px',
                  width: '40px',
                }}
              ></div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flex: '1',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#F4F4F4',
                    borderRadius: '4px',
                    flex: '0',
                    height: '14px',
                    marginBottom: '6px',
                    width: '100px',
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: '#F4F4F4',
                    borderRadius: '4px',
                    flex: '0',
                    height: '14px',
                    width: '60px',
                  }}
                ></div>
              </div>
            </div>
            <div style={{ padding: '19% 0' }}></div>
          </a>
          <p
            style={{
              color: '#c9c8cd',
              fontFamily: 'Arial,sans-serif',
              fontSize: '14px',
              lineHeight: '17px',
              marginBottom: '0',
              marginTop: '8px',
              overflow: 'hidden',
              padding: '8px 0 7px',
              textAlign: 'center',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            <a
              href="env_edu_india"
              style={{
                color: '#c9c8cd',
                fontFamily: 'Arial,sans-serif',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 'normal',
                lineHeight: '17px',
                textDecoration: 'none',
              }}
              target="_blank"
            >
              Shared post
            </a>{' '}
            on{' '}
            <time
              style={{
                fontFamily: 'Arial,sans-serif',
                fontSize: '14px',
                lineHeight: '17px',
              }}
            >
              Time
            </time>
          </p>
        </div>
      </blockquote>
      <script async src="https://www.instagram.com/embed.js"></script>
    </div>
  );
};

export default Insta;
