export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  avatarUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  mediumUrl: string;
  xUrl: string;
  email: string;
  location: string;
  stats: {
    experience: string;
    projects: string;
    focus: string;
  };
}

export const PERSONAL_INFO: PersonalInfo = {
  name: "Prince Chinedu",
  role: "Smart Contract Engineer",
  tagline: "I think we should go FROGY with those Contracts. What do you THINK!",
  avatarUrl: "/PCChainLink.github.io/profile.png",
  githubUrl: "https://github.com/Chijulybuilds",
  linkedinUrl: "https://www.linkedin.com/in/prince-chinedu",
  mediumUrl: "https://medium.com/@princechimuanya18",
  xUrl: "https://x.com/PrinceChin41223",
  email: "princechimuanya18@gmail.com",
  location: "Nigeria",
  stats: {
    experience: "1+ Years",
    projects: "5+ Built",
    focus: "Solidity & DeFi",
  },
};

export const PROJECTS: Project[] = [
  {
    title: "Verifund-Lend",
    description: "DeFi lending protocol built with modern architecture, automated vault management, and custom interest rate strategy logic.",
    tags: ["Solidity", "Foundry", "DeFi", "Vaults"],
    github: "https://github.com/Chijulybuilds/Verifund-Lend",
    featured: true,
  },
  {
    title: "AgriBridge",
    description: "Commodity tokenization and decentralized finance platform connecting agricultural assets to Web3 liquidity.",
    tags: ["Solidity", "RWA", "ERC20", "Web3"],
    github: "https://github.com/Chijulybuilds/AgriBridge",
    featured: true,
  },
  {
    title: "Verifund Protocol",
    description: "Decentralized escrow and milestone-based payment infrastructure designed for trustless financial transactions.",
    tags: ["Solidity", "Escrow", "TypeScript", "Python"],
    github: "https://github.com/Chijulybuilds/Verifund",
    featured: true,
  },
  {
    title: "Lottery-Foundry",
    description: "Verifiably fair, automated lottery system using Chainlink VRF and Chainlink Automation for decentralized execution.",
    tags: ["Solidity", "Foundry", "Chainlink VRF", "Automation"],
    github: "https://github.com/Chijulybuilds/Lottery-Foundry",
    featured: true,
  },
  {
    title: "ERC721-CHIJULY",
    description: "Custom NFT smart contract implementation featuring gas-optimized metadata management and access controls.",
    tags: ["Solidity", "ERC721", "OpenZeppelin", "Testing"],
    github: "https://github.com/Chijulybuilds/ERC721-CHIJULY",
    featured: false,
  },
];

export const SKILLS: SkillCategory[] = [
  { category: "Languages", skills: ["Solidity", "TypeScript", "JavaScript", "Python"] },
  { category: "Frameworks & Tools", skills: ["Foundry", "Hardhat", "Node.js", "React", "Git", "Docker"] },
  { category: "Blockchain & DeFi", skills: ["Ethereum", "Chainlink", "ERC20 / ERC721", "DeFi Architecture", "Smart Contract Security"] },
  { category: "Testing", skills: ["Forge Unit Testing", "Fuzz Testing", "Static Analysis (Slither)"] },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2025",
    title: "Foundations in Smart Contract Development, NFT Architecture & Chainlink Integrations",
    description: "Engineered secure Smart Contracts, NFT systems and trustless automation tools using Chainlink VRF and keeper automation.",
  },
  {
    year: "2026",
    title: "DeFi Infrastructure & Real-World Assets",
    description: "Designed Verifund-Lend protocols, AgriBridge tokenization systems with an amazing Team, and cross-chain architecture while expanding full-stack tooling.",
  },
];
