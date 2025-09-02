export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  extendedDescription: string;
  icon: string;
  technologies: string[];
  images: {
    main: string;
    gallery: Array<{
      url: string;
      caption: string;
    }>;
  };
  gradient: string;
}

export const projects: Project[] = [
  {
    id: 'tippmixpo',
    title: 'Tippmixpo Prematch EV+ Bothub',
    subtitle: 'Advanced Expected Value Calculator for Prematch Betting',
    description: 'EV+ Bothub',
    extendedDescription: 'Our Tippmixpo Prematch EV+ Bothub is a sophisticated betting automation system that identifies positive expected value opportunities in prematch markets. The platform analyzes thousands of betting lines in real-time, comparing bookmaker odds with true probability calculations to find profitable betting opportunities.',
    icon: 'fa-solid fa-calculator',
    technologies: ['Python', 'Node.js', 'PostgreSQL', 'React', 'Redis', 'Docker', 'WebSocket', 'TensorFlow', 'Kubernetes', 'AWS Lambda'],
    images: {
      main: 'https://placehold.co/1024x768/404040/ffffff?text=Real-time+EV%2B+Dashboard',
      gallery: [
        {
          url: 'https://placehold.co/600x400/f5f5f5/666666?text=Probability+Calculator',
          caption: 'Probability Calculator Interface'
        },
        {
          url: 'https://placehold.co/600x400/f5f5f5/666666?text=Bot+Configuration',
          caption: 'Automated Betting Bot Configuration'
        }
      ]
    },
    gradient: 'from-neutral-500 to-neutral-600'
  },
  {
    id: 'stake-leaderboard',
    title: 'Stake Leaderboard Analytics',
    subtitle: 'Comprehensive Player Performance Tracking System',
    description: 'Analytics',
    extendedDescription: 'The Stake Leaderboard Analytics platform provides in-depth analysis of player performance across various betting categories on Stake.com. Our system tracks player statistics, betting patterns, and performance metrics to identify top performers and emerging trends in the competitive betting landscape.',
    icon: 'fa-solid fa-crown',
    technologies: ['JavaScript', 'TypeScript', 'MongoDB', 'Express.js', 'Chart.js', 'Socket.io'],
    images: {
      main: '/images/projects/stake-leaderboard/Screenshot 2025-09-02 at 12.20.16.jpg',
      gallery: [
        {
          url: '/images/projects/stake-leaderboard/Screenshot 2025-09-02 at 12.21.24.jpg',
          caption: 'Player Performance Analytics'
        },
        {
          url: '/images/projects/stake-leaderboard/Screenshot 2025-09-02 at 12.22.35.jpg',
          caption: 'Comparative Statistics Interface'
        }
      ]
    },
    gradient: 'from-neutral-500 to-neutral-600'
  },
  {
    id: 'bet365-odds',
    title: 'Bet365 Odds Drop Analytics',
    subtitle: 'Real-time Odds Movement Detection System',
    description: 'Analytics',
    extendedDescription: 'Our Bet365 Odds Drop Analytics system monitors real-time odds movements across thousands of markets, detecting significant drops that may indicate insider information or market inefficiencies. The platform provides instant alerts and detailed analysis to help users capitalize on these opportunities.',
    icon: 'fa-solid fa-chart-line',
    technologies: ['Python', 'Node.js', 'Redis', 'WebSocket', 'React', 'MongoDB'],
    images: {
      main: '/images/projects/bet365/Screenshot 2025-09-02 at 12.27.41.jpg',
      gallery: [
        {
          url: '/images/projects/bet365/Screenshot 2025-09-02 at 12.30.21.jpg',
          caption: 'Market Movement Analysis'
        },
        {
          url: '/images/projects/bet365/Screenshot 2025-09-02 at 12.32.22.jpg',
          caption: 'Real-time Alert System'
        }
      ]
    },
    gradient: 'from-neutral-500 to-neutral-600'
  },
  {
    id: 'surebetfusion',
    title: 'Surebetfusion',
    subtitle: 'Advanced Arbitrage Betting Platform',
    description: 'Platform',
    extendedDescription: 'Surebetfusion is our comprehensive arbitrage betting platform that scans multiple bookmakers to identify risk-free betting opportunities. The system calculates optimal stake distributions and provides automated betting execution to maximize profits from price discrepancies.',
    icon: 'fa-solid fa-shield-halved',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Celery', 'React', 'Redis'],
    images: {
      main: '/images/projects/surebetfusion/Screenshot 2025-09-02 at 11.32.15.jpg',
      gallery: [
        {
          url: '/images/projects/surebetfusion/Screenshot 2025-09-02 at 11.34.16.jpg',
          caption: 'Stake Distribution Calculator'
        },
        {
          url: '/images/projects/surebetfusion/Screenshot 2025-09-02 at 11.34.35.jpg',
          caption: 'Profit Tracking Dashboard'
        }
      ]
    },
    gradient: 'from-neutral-600 to-neutral-600'
  },
  {
    id: 'betsmartai',
    title: 'BetSmartAI',
    subtitle: 'AI-Powered Betting Intelligence Application',
    description: 'App',
    extendedDescription: 'BetSmartAI combines machine learning algorithms with comprehensive sports data to provide intelligent betting recommendations. The application analyzes historical data, team performance, and market trends to generate accurate predictions and betting strategies.',
    icon: 'fa-solid fa-brain',
    technologies: ['Python', 'TensorFlow', 'React Native', 'FastAPI', 'PostgreSQL'],
    images: {
      main: '/images/projects/betsmartai/Screenshot 2025-09-02 at 11.36.37.jpg',
      gallery: [
        {
          url: '/images/projects/betsmartai/Screenshot 2025-09-02 at 12.11.05.jpg',
          caption: 'Machine Learning Model Training'
        },
        {
          url: '/images/projects/betsmartai/Screenshot 2025-09-02 at 12.11.21.jpg',
          caption: 'Prediction Results Interface'
        }
      ]
    },
    gradient: 'from-neutral-600 to-neutral-600'
  },
  {
    id: 'betburger-ev',
    title: 'Betburger EV+',
    subtitle: 'Expected Value Betting Simulator',
    description: 'Simulator',
    extendedDescription: 'The Betburger EV+ Simulator is a comprehensive tool for testing and optimizing betting strategies. It provides realistic simulation environments where users can test their strategies against historical data and market conditions.',
    icon: 'fa-solid fa-gamepad',
    technologies: ['Python', 'NumPy', 'Pandas', 'React', 'Chart.js'],
    images: {
      main: 'https://placehold.co/1024x768/404040/ffffff?text=Strategy+Simulator',
      gallery: [
        {
          url: 'https://placehold.co/600x400/f5f5f5/666666?text=Backtest+Results',
          caption: 'Strategy Backtesting Results'
        },
        {
          url: 'https://placehold.co/600x400/f5f5f5/666666?text=Risk+Analysis',
          caption: 'Risk Analysis Dashboard'
        }
      ]
    },
    gradient: 'from-neutral-600 to-neutral-600'
  },
  {
    id: 'bookie-bashing',
    title: 'Bookie Bashing',
    subtitle: 'Horse Racing Expected Value Platform',
    description: 'Horse Racing EV+',
    extendedDescription: 'Bookie Bashing specializes in horse racing markets, providing advanced analytics and EV+ calculations specifically tailored for horse racing betting. The platform considers track conditions, jockey performance, and historical race data.',
    icon: 'fa-solid fa-horse',
    technologies: ['Python', 'Django', 'MySQL', 'BeautifulSoup', 'React'],
    images: {
      main: 'https://placehold.co/1024x768/404040/ffffff?text=Horse+Racing+Analytics',
      gallery: [
        {
          url: 'https://placehold.co/600x400/f5f5f5/666666?text=Track+Conditions',
          caption: 'Track Conditions Analysis'
        },
        {
          url: 'https://placehold.co/600x400/f5f5f5/666666?text=Jockey+Stats',
          caption: 'Jockey Performance Statistics'
        }
      ]
    },
    gradient: 'from-neutral-700 to-neutral-800'
  },
  {
    id: 'maxbet-admiralbet',
    title: 'Maxbet & Admiralbet',
    subtitle: 'Dual Platform EV+ Integration',
    description: 'EV+ Bothub',
    extendedDescription: 'Our integrated solution for Maxbet and Admiralbet provides seamless EV+ calculations across both platforms. The system synchronizes odds, manages multiple accounts, and optimizes betting strategies for maximum profitability.',
    icon: 'fa-solid fa-anchor',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Puppeteer', 'React'],
    images: {
      main: '/images/projects/maxbet-admiralbet/Screenshot 2025-09-02 at 12.43.00.jpg',
      gallery: [
        {
          url: '/images/projects/maxbet-admiralbet/Screenshot 2025-09-02 at 12.45.56.jpg',
          caption: 'Multi-Account Management'
        },
        {
          url: '/images/projects/maxbet-admiralbet/Screenshot 2025-09-02 at 12.46.43.jpg',
          caption: 'Platform Synchronization Dashboard'
        }
      ]
    },
    gradient: 'from-neutral-700 to-neutral-700'
  },
  {
    id: 'cloudbet-ev',
    title: 'Cloudbet EV+',
    subtitle: 'Cryptocurrency Betting Automation',
    description: 'Bothub',
    extendedDescription: 'The Cloudbet EV+ Bothub is our specialized automation platform designed for cryptocurrency-based betting on Cloudbet. The system leverages the unique advantages of crypto betting, including faster transactions and enhanced privacy.',
    icon: 'fa-solid fa-cloud',
    technologies: ['Node.js', 'Web3.js', 'MongoDB', 'React', 'Puppeteer', 'Blockchain APIs'],
    images: {
      main: 'https://placehold.co/1024x768/404040/ffffff?text=Crypto+Dashboard',
      gallery: [
        {
          url: 'https://placehold.co/600x400/f5f5f5/666666?text=Transaction+Monitor',
          caption: 'Blockchain Transaction Monitor'
        },
        {
          url: 'https://placehold.co/600x400/f5f5f5/666666?text=Multi-Wallet+System',
          caption: 'Multi-Wallet Management System'
        }
      ]
    },
    gradient: 'from-neutral-700 to-neutral-700'
  },
  {
    id: 'sportsbook-api',
    title: 'Sportsbook Live Odds API',
    subtitle: 'Real-time Odds Data Distribution Platform',
    description: 'Odds API',
    extendedDescription: 'Our Sportsbook Live Odds API is a comprehensive data distribution platform that aggregates real-time odds from hundreds of bookmakers worldwide. The API provides lightning-fast access to live betting data with sub-second latency.',
    icon: 'fa-solid fa-database',
    technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'GraphQL', 'Redis', 'AWS CloudFront'],
    images: {
      main: '/images/projects/sportsbook-api/Screenshot 2025-09-02 at 12.53.13.jpg',
      gallery: [
        {
          url: '/images/projects/sportsbook-api/Screenshot 2025-09-02 at 12.55.30.jpg',
          caption: 'Global Bookmaker Integration Hub'
        },
        {
          url: '/images/projects/sportsbook-api/Screenshot 2025-09-02 at 12.57.07.jpg',
          caption: 'API Analytics and Monitoring Dashboard'
        }
      ]
    },
    gradient: 'from-neutral-800 to-neutral-700'
  },
  {
    id: 'telegram-insights',
    title: 'Telegram Betting Insights',
    subtitle: 'Automated Betting Intelligence Bot Network',
    description: 'Insights',
    extendedDescription: 'Our Telegram Betting Insights platform consists of an advanced network of intelligent bots that deliver real-time betting analysis, tips, and market insights directly to users\' Telegram channels.',
    icon: 'fa-brands fa-telegram',
    technologies: ['Python', 'Telegram Bot API', 'SQLite', 'NLTK', 'APScheduler', 'Asyncio'],
    images: {
      main: 'https://placehold.co/1024x768/404040/ffffff?text=Bot+Network',
      gallery: [
        {
          url: 'https://placehold.co/600x400/f5f5f5/666666?text=Content+Generation',
          caption: 'AI-Powered Content Generation'
        },
        {
          url: 'https://placehold.co/600x400/f5f5f5/666666?text=Subscriber+Dashboard',
          caption: 'Subscriber Management Dashboard'
        }
      ]
    },
    gradient: 'from-neutral-800 to-neutral-700'
  },
  {
    id: 'sofascore-darts',
    title: 'Sofascore Darts Scanner',
    subtitle: 'Specialized Darts Match Analysis System',
    description: 'Scanner',
    extendedDescription: 'The Sofascore Darts Scanner is our specialized system for analyzing darts matches and identifying betting opportunities in this unique sport. The platform integrates with Sofascore\'s comprehensive darts database.',
    icon: 'fa-solid fa-bullseye',
    technologies: ['Python', 'Scrapy', 'MySQL', 'Django', 'Requests', 'Matplotlib'],
    images: {
      main: 'https://placehold.co/1024x768/404040/ffffff?text=Darts+Analytics',
      gallery: [
        {
          url: 'https://placehold.co/600x400/f5f5f5/666666?text=Performance+Tracking',
          caption: 'Player Performance Tracking System'
        },
        {
          url: 'https://placehold.co/600x400/f5f5f5/666666?text=Tournament+Analysis',
          caption: 'Tournament Schedule and Analysis'
        }
      ]
    },
    gradient: 'from-neutral-800 to-neutral-700'
  }
];
