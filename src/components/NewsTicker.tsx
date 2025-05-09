import React, { useState, useEffect, useRef } from 'react';

interface NewsItem {
  id: number;
  content: string;
  link?: string;
}

interface NewsTickerProps {
  isDarkMode?: boolean;
}

const NewsTicker: React.FC<NewsTickerProps> = ({ isDarkMode = false }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const tickerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  const newsItems: NewsItem[] = [
    { id: 1, content: "🚀 New feature released: Dark mode now available!", link: "/features" },
    { id: 2, content: "📢 Special offer: 20% discount for first-time customers", link: "/offers" },
    { id: 3, content: "🔔 Maintenance scheduled for May 30th at 23:00 PM ACT", link: "/status" },
    { id: 4, content: "🏆 We just won the Best Design Award 2023!", link: "/about" }
  ];

  useEffect(() => {
    const startTicker = () => {
      intervalRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % newsItems.length);
      }, 3000);
    };

    startTicker();

    // Pause on hover
    const tickerElement = tickerRef.current;
    const handleMouseEnter = () => clearInterval(intervalRef.current);
    const handleMouseLeave = () => startTicker();

    tickerElement?.addEventListener('mouseenter', handleMouseEnter);
    tickerElement?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(intervalRef.current);
      tickerElement?.removeEventListener('mouseenter', handleMouseEnter);
      tickerElement?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [newsItems.length]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Calculate the height of one news item for proper sliding
  const [itemHeight, setItemHeight] = useState<number>(0);
  useEffect(() => {
    if (contentRef.current) {
      const firstItem = contentRef.current.querySelector('div');
      if (firstItem) {
        setItemHeight(firstItem.clientHeight);
      }
    }
  }, []);

  return (
    <div 
      ref={tickerRef}
      className={`${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-800'} py-3 overflow-hidden transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <div className="font-bold mr-4 whitespace-nowrap">Latest News:</div>
          
          <div 
            className="flex-1 relative h-6 overflow-hidden"
            style={{ height: `${itemHeight}px` }}
          >
            <div 
              ref={contentRef}
              className="absolute left-0 w-full transition-transform duration-500"
              style={{ transform: `translateY(-${activeIndex * itemHeight}px)` }}
            >
              {newsItems.map((item) => (
                <div 
                  key={item.id} 
                  className="w-full flex-shrink-0 py-1 flex items-center"
                >
                  {item.link ? (
                    <a 
                      href={item.link} 
                      className={`hover:text-amber-400 transition-colors duration-300 ${isDarkMode ? 'hover:text-amber-300' : 'hover:text-amber-500'}`}
                    >
                      {item.content}
                    </a>
                  ) : (
                    <span>{item.content}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex ml-4 space-x-2">
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full transition-all ${activeIndex === index ? 
                  (isDarkMode ? 'bg-amber-300 w-4' : 'bg-amber-500 w-4') : 
                  (isDarkMode ? 'bg-gray-600' : 'bg-gray-400')}`}
                aria-label={`Go to news item ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;