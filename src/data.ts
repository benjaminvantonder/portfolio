export const personal = {
  name: 'Benjamin van Tonder',
  tagline: 'full-stack developer & UI architect',
  email: 'vantonderbenna@gmail.com',
  github: 'https://benjaminvantonder.github.io',
  location: 'Centurion, Gauteng',
};

export const about = [
  'I build clean, performant web applications with modern tooling.',
  'Specializing in React, TypeScript, and the Node.js ecosystem, I focus on creating interfaces that are both beautiful and functional.',
  "When I'm not coding, you'll find me exploring new tech, contributing to open source, or perfecting my pour-over coffee recipe.",
];

export const skills = [
  { name: 'TypeScript', level: 5, color: 'var(--accent-cyan)' },
  { name: 'React', level: 5, color: 'var(--accent-cyan)' },
  { name: 'Node.js', level: 4, color: 'var(--accent-green)' },
  { name: 'Python', level: 3, color: 'var(--accent-yellow)' },
  { name: 'PostgreSQL', level: 3, color: 'var(--accent-purple)' },
  { name: 'Docker', level: 3, color: 'var(--accent-cyan)' },
  { name: 'Git', level: 4, color: 'var(--accent-orange)' },
  { name: 'Tailwind CSS', level: 4, color: 'var(--accent-cyan)' },
  { name: 'GraphQL', level: 3, color: 'var(--accent-pink)' },
  { name: 'Rust', level: 2, color: 'var(--accent-orange)' },
  { name: 'AWS', level: 3, color: 'var(--accent-yellow)' },
  { name: 'Next.js', level: 4, color: 'var(--accent-green)' },
];

export interface Project {
  title: string;
  desc: string;
  tech: string[];
  links: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    title: 'Synthwave Dashboard',
    desc: 'Real-time analytics dashboard with live data streaming, custom charts, and dark synthwave aesthetics.',
    tech: ['React', 'TypeScript', 'D3.js', 'WebSocket'],
    links: [
      { label: 'live', url: '#' },
      { label: 'source', url: '#' },
    ],
  },
  {
    title: 'Flux E-Commerce',
    desc: 'Full-featured e-commerce platform with Stripe integration, admin panel, and inventory management.',
    tech: ['Next.js', 'PostgreSQL', 'Stripe', 'Redis'],
    links: [
      { label: 'live', url: '#' },
      { label: 'source', url: '#' },
    ],
  },
  {
    title: 'Pixel CLI',
    desc: 'Terminal-based pixel art editor written in Rust. Features layers, export, and Vim-like keybindings.',
    tech: ['Rust', 'Termion', 'WebAssembly'],
    links: [
      { label: 'crate', url: '#' },
      { label: 'source', url: '#' },
    ],
  },
  {
    title: 'Weather Lens',
    desc: 'Minimal weather app with beautiful data visualization, location detection, and 7-day forecasts.',
    tech: ['React', 'TypeScript', 'Chart.js', 'OpenWeather'],
    links: [
      { label: 'live', url: '#' },
      { label: 'source', url: '#' },
    ],
  },
];

export const socials = [
  { label: 'github', url: 'https://benjaminvantonder.github.io' },
  { label: 'email', url: 'mailto:vantonderbenna@gmail.com' },
];
