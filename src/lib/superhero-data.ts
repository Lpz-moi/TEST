export interface Character {
  id: string;
  name: string;
  alias: string;
  universe: "DC" | "Marvel" | "Other";
  description: string;
  powers: string[];
  image: string;
  affiliation: string;
  firstAppearance: string;
  quotes: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: "Movie" | "Series" | "Comics" | "Games" | "News";
  universe: "DC" | "Marvel" | "Other";
  link: string;
}

export interface Universe {
  id: string;
  name: string;
  description: string;
  logo: string;
  primaryColor: string;
  characters: string[];
  backgroundImage: string;
}

export const heroQuotes = [
  "It's not who I am underneath, but what I do that defines me. - Batman",
  "With great power comes great responsibility. - Spider-Man",
  "I can do this all day. - Captain America",
  "Hope is like car keys. Easy to lose, but if you dig around, it's usually close by. - Superman",
  "Sometimes you have to take a leap of faith first. The trust part comes later. - Wonder Woman",
  "Heroes are made by the path they choose, not the powers they are gripped with. - Iron Man",
  "The future is worth it. All the pain. All the tears. The future is worth the fight. - The Flash",
  "Intelligence is a privilege, and it needs to be used for the greater good of people. - Doctor Octopus",
  "A hero can be anyone. Even a man doing something as simple as putting a coat around a young boy's shoulders. - Batman",
  "In a world of ordinary mortals, you are a Wonder Woman. - Steve Trevor",
];

export const characters: Character[] = [
  {
    id: "batman",
    name: "Bruce Wayne",
    alias: "Batman",
    universe: "DC",
    description:
      "The Dark Knight of Gotham City, using his wealth, intellect, and physical prowess to fight crime.",
    powers: [
      "Peak Human Conditioning",
      "Genius Intellect",
      "Master Detective",
      "Martial Arts Expert",
      "Advanced Technology",
    ],
    image: "/api/placeholder/400/600",
    affiliation: "Justice League, Batman Family",
    firstAppearance: "Detective Comics #27 (1939)",
    quotes: [
      "I am vengeance, I am the night, I am Batman!",
      "It's not who I am underneath, but what I do that defines me.",
    ],
  },
  {
    id: "superman",
    name: "Clark Kent",
    alias: "Superman",
    universe: "DC",
    description:
      "The Last Son of Krypton, protector of Earth and symbol of hope for humanity.",
    powers: [
      "Super Strength",
      "Flight",
      "Invulnerability",
      "Heat Vision",
      "X-Ray Vision",
      "Super Speed",
    ],
    image: "/api/placeholder/400/600",
    affiliation: "Justice League, Daily Planet",
    firstAppearance: "Action Comics #1 (1938)",
    quotes: [
      "There is a right and a wrong in the universe, and that distinction is not hard to make.",
      "Hope is like car keys. Easy to lose, but if you dig around, it's usually close by.",
    ],
  },
  {
    id: "wonder-woman",
    name: "Diana Prince",
    alias: "Wonder Woman",
    universe: "DC",
    description:
      "Amazonian warrior princess and champion of justice, truth, and equality.",
    powers: [
      "Super Strength",
      "Flight",
      "Enhanced Speed",
      "Lasso of Truth",
      "Indestructible Bracelets",
      "Combat Expertise",
    ],
    image: "/api/placeholder/400/600",
    affiliation: "Justice League, Themyscira",
    firstAppearance: "All Star Comics #8 (1941)",
    quotes: [
      "Only love can truly save the world.",
      "Sometimes you have to take a leap of faith first. The trust part comes later.",
    ],
  },
  {
    id: "spider-man",
    name: "Peter Parker",
    alias: "Spider-Man",
    universe: "Marvel",
    description:
      "Your friendly neighborhood Spider-Man, bitten by a radioactive spider and fighting crime in New York.",
    powers: [
      "Spider Sense",
      "Wall Crawling",
      "Super Strength",
      "Enhanced Agility",
      "Web-Slinging",
      "Genius Intellect",
    ],
    image: "/api/placeholder/400/600",
    affiliation: "Avengers, Fantastic Four",
    firstAppearance: "Amazing Fantasy #15 (1962)",
    quotes: [
      "With great power comes great responsibility.",
      "Anyone can wear the mask. You could wear the mask.",
    ],
  },
  {
    id: "iron-man",
    name: "Tony Stark",
    alias: "Iron Man",
    universe: "Marvel",
    description:
      "Genius billionaire philanthropist in a suit of powered armor, founding member of the Avengers.",
    powers: [
      "Powered Armor",
      "Genius Intellect",
      "Advanced Technology",
      "Flight",
      "Repulsors",
      "Arc Reactor",
    ],
    image: "/api/placeholder/400/600",
    affiliation: "Avengers, Stark Industries",
    firstAppearance: "Tales of Suspense #39 (1963)",
    quotes: [
      "I am Iron Man.",
      "Heroes are made by the path they choose, not the powers they are gripped with.",
    ],
  },
];

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "The Batman 2 Begins Filming This Summer",
    description:
      "Matt Reeves confirms production start date for the highly anticipated sequel starring Robert Pattinson.",
    image: "/api/placeholder/600/400",
    date: "2024-01-15",
    category: "Movie",
    universe: "DC",
    link: "#",
  },
  {
    id: "2",
    title: "Superman Legacy Cast Revealed",
    description:
      "James Gunn unveils the complete cast for the new Superman film, including Lois Lane and Lex Luthor.",
    image: "/api/placeholder/600/400",
    date: "2024-01-12",
    category: "Movie",
    universe: "DC",
    link: "#",
  },
  {
    id: "3",
    title: "Marvel Announces New Spider-Verse Series",
    description:
      "Disney+ greenlights animated series exploring multiple Spider-Man universes.",
    image: "/api/placeholder/600/400",
    date: "2024-01-10",
    category: "Series",
    universe: "Marvel",
    link: "#",
  },
  {
    id: "4",
    title: "Flashpoint Comic Event Returns",
    description:
      "DC Comics announces the return of the multiverse-shattering event with new storylines.",
    image: "/api/placeholder/600/400",
    date: "2024-01-08",
    category: "Comics",
    universe: "DC",
    link: "#",
  },
  {
    id: "5",
    title: "Arkham Asylum VR Game Announced",
    description:
      "Experience the terror of Gotham's infamous asylum in this new virtual reality experience.",
    image: "/api/placeholder/600/400",
    date: "2024-01-05",
    category: "Games",
    universe: "DC",
    link: "#",
  },
];

export const universes: Universe[] = [
  {
    id: "dc",
    name: "DC Universe",
    description:
      "The world of Superman, Batman, Wonder Woman and the Justice League. A universe of hope, heroism, and mythic storytelling.",
    logo: "🦇",
    primaryColor: "#3b82f6",
    characters: ["batman", "superman", "wonder-woman"],
    backgroundImage: "/api/placeholder/800/600",
  },
  {
    id: "marvel",
    name: "Marvel Universe",
    description:
      "Home to Spider-Man, the Avengers, and the X-Men. A universe where heroes are flawed, relatable, and endlessly entertaining.",
    logo: "⚡",
    primaryColor: "#ef4444",
    characters: ["spider-man", "iron-man"],
    backgroundImage: "/api/placeholder/800/600",
  },
  {
    id: "other",
    name: "Other Universes",
    description:
      "Explore worlds beyond DC and Marvel, including The Boys, Invincible, Hellboy, and countless indie heroes.",
    logo: "🌟",
    primaryColor: "#8b5cf6",
    characters: [],
    backgroundImage: "/api/placeholder/800/600",
  },
];

export const getRandomQuote = (): string => {
  return heroQuotes[Math.floor(Math.random() * heroQuotes.length)];
};

export const getCharactersByUniverse = (universe: string): Character[] => {
  return characters.filter(
    (char) => char.universe.toLowerCase() === universe.toLowerCase(),
  );
};

export const getNewsByUniverse = (universe: string): NewsItem[] => {
  return newsItems.filter(
    (news) => news.universe.toLowerCase() === universe.toLowerCase(),
  );
};

export const searchCharacters = (query: string): Character[] => {
  const lowercaseQuery = query.toLowerCase();
  return characters.filter(
    (char) =>
      char.name.toLowerCase().includes(lowercaseQuery) ||
      char.alias.toLowerCase().includes(lowercaseQuery) ||
      char.description.toLowerCase().includes(lowercaseQuery),
  );
};
