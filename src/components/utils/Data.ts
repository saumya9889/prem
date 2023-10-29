import {
  Gamepad2,
  Headphones,
  Image,
  LucideIcon,
  Share2,
  Shirt,
  ShoppingCart,
  Ticket,
} from 'lucide-react';

export interface ISectionCardData {
  id: number;
  title: string;
  src: string;
  exp: string;
  snippetCount: number;
  progress: number;
  href?: string;
}

export interface IProjectSectionCardData {
  id: number;
  imageUrl?: string;
  icon?: string;
  title: string;
  techStack: string;
  href?: string;
}

export const projectCard: IProjectSectionCardData[] = [
  {
    id: 1,
    title: 'Amal Ecommerce',
    techStack: 'Next.js 13, React Hook Form, Typescript,GraphQL',
    imageUrl: 'amal.png',
    href: 'https://amal.com',
  },
  {
    id: 2,
    title: 'Cachy WebApp',
    techStack:
      'React.js, React Hook, Tailwind CSS',
    imageUrl: 'cachy.png',
    href: 'https://cachy.com',
  },
  {
    id: 3,
    title: 'pre web',
    techStack:
      'React.js, React Hook, Tailwind CSS',
    imageUrl: 'cachy.png',
    href: 'https://cachy.com',
  }
  
];

export const moreProjects = [
  {
    id: 1,
    title: 'Ez Clothing',
    techStack: 'Next.js 13, Drizzle, PostgreSql, Docker, ShadCn',
    icon: 'shirt',
    href: 'https://github.com/nwaliaez/ezClothing',
  },
  {
    id: 2,
    title: 'Ethereum Lottery',
    techStack: 'Solidity, Ethers, Hardhat, Chai',
    icon: 'lottery',
    href: 'https://github.com/nwaliaez/HardhatLottery',
  },
  {
    id: 3,
    title: 'File Sharing App',
    techStack: 'Node js, Express, Web Sockets, WebRTC, ReactJs',
    icon: 'share',
    href: 'https://github.com/nwaliaez/filetransfer-webrtc',
  },

  {
    id: 4,
    title: 'Snake Game',
    techStack: 'Next.js 13, Tailwind CSS, Typescript',
    icon: 'game',
    href: 'https://snake-nwaliaez.vercel.app/',
  },
];

export const frontendCard: ISectionCardData[] = [
  {
    id: 1,
    title: 'HTML, CSS',
    src: '/tech/frontend/htmlcss.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: 'Tailwind',
    src: '/tech/frontend/tailwind.jpg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 3,
    title: 'Javascript, Typescript',
    src: '/tech/frontend/jsts.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 85,
  },
  {
    id: 4,
    title: 'Reactjs',
    src: '/tech/frontend/reactjs.jpg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 5,
    title: 'Nextjs 13',
    src: '/tech/frontend/nextjs13.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
];

// export const backendCard: ISectionCardData[] = [
//   {
//     id: 1,
//     title: 'NodeJs',
//     src: '/tech/backend/nodejs.webp',
//     exp: '1 day ago',
//     snippetCount: 1128,
//     progress: 90,
//   },
//   {
//     id: 2,
//     title: 'ExpressJs',
//     src: '/tech/backend/express.png',
//     exp: '1 day ago',
//     snippetCount: 1128,
//     progress: 90,
//   },
//   {
//     id: 3,
//     title: 'DenoJs',
//     src: '/tech/backend/denojs.webp',
//     exp: '1 day ago',
//     snippetCount: 1128,
//     progress: 60,
//   },
//   {
//     id: 4,
//     title: 'Next Auth',
//     src: '/tech/backend/nextauth.png',
//     exp: '1 day ago',
//     snippetCount: 1128,
//     progress: 90,
//   },
//   {
//     id: 5,
//     title: 'PHP',
//     src: '/tech/backend/php.png',
//     exp: '1 day ago',
//     snippetCount: 1128,
//     progress: 70,
//   },
// ];

export const databaseCard: ISectionCardData[] = [
  {
    id: 1,
    title: 'MongoDB Bignner',
    src: '/tech/database/mongo.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  }, 
  {
    id: 2,
    title: 'PostgreSQL Bignner',
    src: '/tech/database/postgres.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  } 
];

export const devopsCards: ISectionCardData[] = [
 
  // {
  //   id: 2,
  //   title: 'Kubernetes',
  //   src: '/tech/devops/k8s.png',
  //   exp: '1 day ago',
  //   snippetCount: 1128,
  //   progress: 80,
  // },
  {
    id: 1,
    title: 'GIT',
    src: '/tech/devops/git.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 2,
    title: 'Jenkins Bignner',
    src: '/tech/devops/jenkins.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  // {
  //   id: 5,
  //   title: 'Terraform',
  //   src: '/tech/devops/terraform.png',
  //   exp: '1 day ago',
  //   snippetCount: 1128,
  //   progress: 60,
  // },
];

// export const web3Cards: ISectionCardData[] = [
//   {
//     id: 1,
//     title: 'Solidity',
//     src: '/tech/web3/solidity.jfif',
//     exp: '1 day ago',
//     snippetCount: 1128,
//     progress: 90,
//   },
//   {
//     id: 2,
//     title: 'Hardhat',
//     src: '/tech/web3/hardhat.jpeg',
//     exp: '1 day ago',
//     snippetCount: 1128,
//     progress: 80,
//   },
//   {
//     id: 3,
//     title: 'Metamask',
//     src: '/tech/web3/metamask.webp',
//     exp: '1 day ago',
//     snippetCount: 1128,
//     progress: 90,
//   },
//   {
//     id: 4,
//     title: 'Chainlink',
//     src: '/tech/web3/chainlink.png',
//     exp: '1 day ago',
//     snippetCount: 1128,
//     progress: 80,
//   },
//   {
//     id: 5,
//     title: 'OpenZeppelin',
//     src: '/tech/web3/openzeppelin.png',
//     exp: '1 day ago',
//     snippetCount: 1128,
//     progress: 70,
//   },
// ];

export const otherCards: ISectionCardData[] = [
  {
    id: 1,
    title: 'Rest API',
    src: '/tech/others/rest.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  // {
  //   id: 2,
  //   title: 'SOAP API',
  //   src: '/tech/others/soap.jpg',
  //   exp: '1 day ago',
  //   snippetCount: 1128,  
  //   progress: 70,
  // },
  {
    id: 3,
    title: 'GraphQl',
    src: '/tech/others/graphql.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
];
