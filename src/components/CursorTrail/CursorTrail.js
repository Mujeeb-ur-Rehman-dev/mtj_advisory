import React, { useEffect, useState } from 'react';
import './CursorTrail.css';

const CursorTrail = () => {
    const [trailElements, setTrailElements] = useState([]);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Check if screen is medium or larger (768px+)
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        // Initial check
        checkScreenSize();

        // Listen for window resize
        window.addEventListener('resize', checkScreenSize);
        
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    useEffect(() => {
        // Only add mouse tracking if on desktop
        if (!isDesktop) return;

        let lastTime = 0;
        const throttleDelay = 100; // Only create trail every 100ms (reduces quantity)

        const handleMouseMove = (e) => {
            const currentTime = Date.now();
            
            // Throttle to reduce trail quantity
            if (currentTime - lastTime < throttleDelay) {
                return;
            }
            
            lastTime = currentTime;
            
            // Create new trail element with size variation
            const newElement = {
                id: Date.now() + Math.random(),
                x: e.clientX,
                y: e.clientY,
                timestamp: currentTime,
                size: Math.random() * 20 + 10 // Random size between 10-30px
            };
            
            setTrailElements(prev => {
                // Keep only last 8 elements (reduces quantity)
                const updated = [...prev, newElement];
                return updated.slice(-8);
            });
            
            // Remove old elements after animation
            setTimeout(() => {
                setTrailElements(prev => prev.filter(el => el.id !== newElement.id));
            }, 1000);
        };

        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isDesktop]); // Re-run effect when isDesktop changes

    // Don't render anything on mobile
    if (!isDesktop) {
        return null;
    }

    return (
        <div className="cursor-trail-container">
            {trailElements.map((element, index) => (
                <div
                    key={element.id}
                    className="trail-element"
                    style={{
                        left: element.x,
                        top: element.y,
                        width: `${element.size}px`,
                        height: `${element.size}px`,
                        // Size variation: bigger to smaller based on index
                        transform: `translate(-50%, -50%) scale(${1 - (index * 0.1)})`
                    }}
                />
            ))}
        </div>
    );
};

export default CursorTrail;
