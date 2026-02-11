import React, { useMemo } from 'react';
import mtjf_logo from '../../images/slider/mtjf_logo.png';

const brandsData = [
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: mtjf_logo,
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    }
];

const BrandArea = ({ className = '', speed = 100 }) => {
    // Duplicate the list once for seamless infinite scroll
    const marqueeItems = useMemo(() => [...brandsData, ...brandsData], []);
  
    return (
      <section className={`brands-section ${className}`}>
        <div className="brands-container">
          <h2 className="title">Trusted By</h2>
  
          {/* CSS variable controls animation speed in seconds */}
          <div
            className="brands-marquee"
            aria-label="Partner brands scrolling list"
          >
            <div className="brands-track" role="list" aria-live="off">
              {marqueeItems.map((brand, i) => (
                <div className="brand-item" role="listitem" key={`brand-${i}`}>
                  <a
                    href={brand.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={brand.alt}
                  >
                    <img
                      src={brand.image}
                      alt={brand.alt}
                      width="120"
                      height="60"
                      loading="lazy"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default BrandArea;