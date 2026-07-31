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

export const PERSONAL_INFO = {
  name: "Prince Chinedu",
  role: "Smart Contract Engineer",
  tagline: "I build secure decentralized protocols, tokenized financial systems, and production-ready smart contracts.",
  avatarUrl: "/profile.jpg", // Added avatar path
  githubUrl: "https://github.com/Chijulybuilds",
  linkedinUrl: "https://linkedin.com",
  location: "Nigeria",
  stats: {
    experience: "2+ Years",
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
    tags: ["Solidity", "Escrow", "TypeScript", "Ethers.js"],
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
    year: "2024",
    title: "Foundations in Smart Contract Development",
    description: "Began intensive Solidity engineering using Foundry, mastering OpenZeppelin security standards and testing strategies.",
  },
  {
    year: "2025",
    title: "NFT Architecture & Chainlink Integrations",
    description: "Engineered secure NFT systems and trustless automation tools using Chainlink VRF and keeper automation.",
  },
  {
    year: "2026",
    title: "DeFi Infrastructure & Real-World Assets",
    description: "Designed Verifund-Lend protocols, AgriBridge tokenization systems, and cross-chain architecture while expanding full-stack tooling.",
  },
];