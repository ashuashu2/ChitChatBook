import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */


export const users = [
  {
    _id: "t7cZfWIp-q",
    firstName: "Adarsh",
    lastName: "Balika",
    followers:[],
    following:[],
    username: "adarshbalika",
    password: "adarshBalika123",
    bio: "Be yourself!",
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp",
    website: "https://adasrshBalika.netlify.app/",
    createdAt: "2022-01-01T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "jwcZfWIp-j",
    firstName: "jenifer",
    lastName: "winget",
    followers:[],
    following:[],
    username: "jenniferwinget",
    password: "jenniferwinget123",
    bio: "live like a queen!",
    avatarUrl:
      "https://e1.pxfuel.com/desktop-wallpaper/678/333/desktop-wallpaper-jennifer-winget-iphone-jennifer-winget-thumbnail.jpg",
    createdAt: "2022-01-01T10:55:06+05:30",
    website: "https://jenniferwinget.netlify.app/",
    updatedAt: formatDate(),
  },
  {
    _id: "79Gksh9otl",
    firstName: "John",
    lastName: "Doe",
    followers:[],
    following:[],
    username: "johndoe",
    password: "johndoe123",
    bio: "Hello World",
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554207/socialmedia/avatars/john-doe_gbkuda.webp",
    website: "https://JohnDoe.netlify.app/",
    createdAt: "2022-01-02T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "1T6Be1QpLm",
    firstName: "Janny",
    lastName: "Sehgal",
    followers:[],
    following:[],
    username: "jannySehgal",
    password: "jannySehgal123",
    bio: "Whats in bio?",
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554256/socialmedia/avatars/jane-doe_il3cvx.webp",
    website: "https://JannySehgal.netlify.app/",
    createdAt: "2022-01-01T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "LCrc9f0Zl0",
    firstName: "Carl",
    lastName: "Smith",
    followers:[],
    following:[],
    username: "carlsmith",
    password: "carlsmith123",
    bio: "Whats in bio?",
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651563581/socialmedia/avatars/carl-smith_mehw0u.webp",
    website: "https://CarlSmith.netlify.app/",
    createdAt: "2022-01-03T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  

  {
    _id: "M1NR81Bzlz",
    firstName: "Alex",
    lastName: "Maxwell",
    followers:[],
    following:[],
    username: "alexmaxwell",
    password: "alexmaxwell123",
    bio: "What's up?",
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652525373/socialmedia/avatars/alex-maxwell.webp",
    website: "https://AlexMaxeell.netlify.app/",
    createdAt: "2022-01-05T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "qq8zWjEeXd",
    firstName: "Sophia",
    lastName: "Jones",
    followers:[],
    following:[],
    username: "sophiajones",
    password: "sophiajones123",
    bio: "Frontend Engineer",
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652525510/socialmedia/avatars/sophia-jones.webp",
    website: "https://SophiaJones.netlify.app/",
    createdAt: "2022-01-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  
];