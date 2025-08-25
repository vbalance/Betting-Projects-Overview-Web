// Application constants

export const APP_CONFIG = {
  name: 'BetTech Solutions',
  description: 'Building the Future of Betting Software',
  url: 'https://bettech-solutions.com',
  email: 'contact@bettech-solutions.com',
  phone: '+1 (555) 123-4567',
} as const;

export const COMPANY_STATS = {
  activeProjects: 12,
  bookmakerIntegrations: 50,
  systemUptime: '24/7',
  yearsExperience: 5,
} as const;

export const BREAKPOINTS = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  widescreen: 1280,
} as const;

export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

export const ROUTES = {
  home: '#home',
  projects: '#projects',
  contact: '#contact',
} as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/bettech-solutions',
  linkedin: 'https://linkedin.com/company/bettech-solutions',
  twitter: 'https://twitter.com/bettech_solutions',
} as const;

export const PROJECT_CATEGORIES = {
  'EV+ Bothub': 'Expected Value Automation',
  'Analytics': 'Data Analysis Platform',
  'Platform': 'Complete Solution',
  'App': 'Mobile Application',
  'Simulator': 'Strategy Testing',
  'Scanner': 'Opportunity Detection',
  'API': 'Data Integration',
  'Insights': 'Intelligence Platform',
} as const;
