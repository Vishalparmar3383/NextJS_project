// # Updated Library Management System Seeding Script
// # Creates 6 librarians, 10 patrons, 1 admin, and 100 diverse library items
// # Uses real book cover images from Open Library API
// # Distributes items evenly among all librarians with variety

const { PrismaClient } = require("./generated/prisma");
const bcrypt = require("bcryptjs");
const fs = require("fs");

const prisma = new PrismaClient();

// Enhanced function to build image URLs from ISBN using Open Library API
function buildImageUrlFromIsbn(isbn) {
  if (!isbn) return null;
  // Clean the ISBN (remove any spaces or hyphens)
  const cleanIsbn = isbn.toString().replace(/[-\s]/g, '');
  return `https://covers.openlibrary.org/b/isbn/${cleanIsbn}-L.jpg`;
}

// Comprehensive list of 100 diverse library items with real data
const COMPREHENSIVE_LIBRARY_ITEMS = [
  // Classic Fiction (Items 1-15)
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "9780061120084",
    year: 1960,
    genre: "Classic Fiction",
    item_type: "book",
    publisher: "J.B. Lippincott & Co.",
    language: "English",
    pages: 281,
    subject: "American Literature",
    keywords: "racism, justice, childhood, American South",
    description: "A gripping tale of racial injustice and childhood innocence in the American South.",
    location: "Fiction Section A-1",
    quantity: 3
  },
  {
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    year: 1949,
    genre: "Dystopian Fiction",
    item_type: "book",
    publisher: "Secker & Warburg",
    language: "English",
    pages: 328,
    subject: "Political Fiction",
    keywords: "totalitarianism, surveillance, dystopia",
    description: "A dystopian social science fiction novel about totalitarian control and surveillance.",
    location: "Fiction Section B-1",
    quantity: 4
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isbn: "9780141439518",
    year: 1813,
    genre: "Romance",
    item_type: "book",
    publisher: "T. Egerton",
    language: "English",
    pages: 432,
    subject: "British Literature",
    keywords: "romance, marriage, social class, England",
    description: "A romantic novel about Elizabeth Bennet and Mr. Darcy in Georgian England.",
    location: "Fiction Section C-1",
    quantity: 2
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "9780743273565",
    year: 1925,
    genre: "Literary Fiction",
    item_type: "book",
    publisher: "Scribner",
    language: "English",
    pages: 180,
    subject: "American Literature",
    keywords: "jazz age, wealth, American dream",
    description: "A classic American novel set in the Jazz Age, exploring themes of wealth, love, and the American Dream.",
    location: "Fiction Section A-2",
    quantity: 3
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    isbn: "9780544003415",
    year: 1954,
    genre: "Fantasy",
    item_type: "book",
    publisher: "George Allen & Unwin",
    language: "English",
    pages: 1216,
    subject: "Fantasy Literature",
    keywords: "fantasy, magic, adventure, middle-earth",
    description: "Epic high-fantasy novel about the journey to destroy the One Ring.",
    location: "Fiction Section F-1",
    quantity: 3
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    isbn: "9780747532699",
    year: 1997,
    genre: "Fantasy",
    item_type: "book",
    publisher: "Bloomsbury",
    language: "English",
    pages: 223,
    subject: "Fantasy Literature",
    keywords: "magic, wizards, school, friendship, adventure",
    description: "First book in the Harry Potter series about a young wizard's adventures.",
    location: "Fiction Section F-2",
    quantity: 6
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    isbn: "9780316769174",
    year: 1951,
    genre: "Coming-of-age",
    item_type: "book",
    publisher: "Little, Brown and Company",
    language: "English",
    pages: 277,
    subject: "American Literature",
    keywords: "adolescence, alienation, identity",
    description: "A controversial novel about teenage rebellion and alienation.",
    location: "Fiction Section C-2",
    quantity: 2
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    isbn: "9780062315007",
    year: 1988,
    genre: "Philosophical Fiction",
    item_type: "book",
    publisher: "HarperOne",
    language: "English",
    pages: 163,
    subject: "Philosophy",
    keywords: "journey, dreams, destiny, spirituality",
    description: "A philosophical novel about following one's dreams and destiny.",
    location: "Fiction Section P-1",
    quantity: 4
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    isbn: "9780441172719",
    year: 1965,
    genre: "Science Fiction",
    item_type: "book",
    publisher: "Chilton Books",
    language: "English",
    pages: 688,
    subject: "Science Fiction",
    keywords: "space, desert planet, politics, ecology",
    description: "Epic science fiction novel set on the desert planet Arrakis.",
    location: "Fiction Section SF-1",
    quantity: 3
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isbn: "9780547928227",
    year: 1937,
    genre: "Fantasy",
    item_type: "book",
    publisher: "George Allen & Unwin",
    language: "English",
    pages: 366,
    subject: "Fantasy Literature",
    keywords: "adventure, dwarves, dragon, treasure",
    description: "The enchanting prelude to The Lord of the Rings.",
    location: "Fiction Section F-3",
    quantity: 4
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    isbn: "9780060850524",
    year: 1932,
    genre: "Dystopian Fiction",
    item_type: "book",
    publisher: "Chatto & Windus",
    language: "English",
    pages: 311,
    subject: "Political Fiction",
    keywords: "dystopia, society, technology, freedom",
    description: "A dystopian novel about a technologically advanced but dehumanized society.",
    location: "Fiction Section B-2",
    quantity: 2
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    isbn: "9780141441146",
    year: 1847,
    genre: "Gothic Romance",
    item_type: "book",
    publisher: "Smith, Elder & Co.",
    language: "English",
    pages: 532,
    subject: "British Literature",
    keywords: "orphan, gothic, romance, feminism",
    description: "A bildungsroman following the experiences of its eponymous heroine.",
    location: "Fiction Section G-1",
    quantity: 2
  },
  {
    title: "The Shining",
    author: "Stephen King",
    isbn: "9780307743657",
    year: 1977,
    genre: "Horror",
    item_type: "book",
    publisher: "Doubleday",
    language: "English",
    pages: 447,
    subject: "Horror Fiction",
    keywords: "horror, supernatural, hotel, isolation",
    description: "Psychological horror novel about a family isolated in a haunted hotel.",
    location: "Fiction Section H-1",
    quantity: 2
  },
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    isbn: "9780307588371",
    year: 2012,
    genre: "Psychological Thriller",
    item_type: "book",
    publisher: "Crown Publishing Group",
    language: "English",
    pages: 419,
    subject: "Contemporary Fiction",
    keywords: "thriller, marriage, disappearance, twist",
    description: "Psychological thriller about a wife's disappearance and the secrets it reveals.",
    location: "Fiction Section T-1",
    quantity: 4
  },
  {
    title: "Murder on the Orient Express",
    author: "Agatha Christie",
    isbn: "9780062693662",
    year: 1934,
    genre: "Mystery",
    item_type: "book",
    publisher: "Collins Crime Club",
    language: "English",
    pages: 256,
    subject: "Crime Fiction",
    keywords: "mystery, detective, murder, train",
    description: "Hercule Poirot investigates a murder aboard the famous Orient Express.",
    location: "Fiction Section M-1",
    quantity: 2
  },

  // Non-Fiction & Biographies (Items 16-30)
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    isbn: "9780062316097",
    year: 2014,
    genre: "History",
    item_type: "book",
    publisher: "Harper",
    language: "English",
    pages: 443,
    subject: "Anthropology",
    keywords: "human evolution, civilization, society, culture",
    description: "An exploration of the history and impact of the human species on Earth.",
    location: "Non-fiction Section H-1",
    quantity: 3
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isbn: "9781451648539",
    year: 2011,
    genre: "Biography",
    item_type: "book",
    publisher: "Simon & Schuster",
    language: "English",
    pages: 656,
    subject: "Biography",
    keywords: "technology, innovation, Apple, entrepreneur",
    description: "Authorized biography of Apple co-founder Steve Jobs.",
    location: "Biography Section B-1",
    quantity: 2
  },
  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    isbn: "9780553380163",
    year: 1988,
    genre: "Science",
    item_type: "book",
    publisher: "Bantam Books",
    language: "English",
    pages: 256,
    subject: "Physics",
    keywords: "cosmology, black holes, universe, physics",
    description: "Popular science book about cosmology and the nature of the universe.",
    location: "Science Section S-1",
    quantity: 4
  },
  {
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen Covey",
    isbn: "9781982137274",
    year: 1989,
    genre: "Self-Help",
    item_type: "book",
    publisher: "Free Press",
    language: "English",
    pages: 381,
    subject: "Personal Development",
    keywords: "productivity, leadership, success, habits",
    description: "Self-help book about principles for personal and professional effectiveness.",
    location: "Self-Help Section SH-1",
    quantity: 5
  },
  {
    title: "Into the Wild",
    author: "Jon Krakauer",
    isbn: "9780385486804",
    year: 1996,
    genre: "Travel/Adventure",
    item_type: "book",
    publisher: "Villard",
    language: "English",
    pages: 207,
    subject: "Travel Literature",
    keywords: "adventure, wilderness, Alaska, survival",
    description: "True story of Christopher McCandless's journey into the Alaskan wilderness.",
    location: "Travel Section T-1",
    quantity: 2
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    isbn: "9781524763138",
    year: 2018,
    genre: "Memoir",
    item_type: "book",
    publisher: "Crown Publishing",
    language: "English",
    pages: 448,
    subject: "Biography",
    keywords: "memoir, first lady, inspiration, politics",
    description: "Memoir of former First Lady Michelle Obama.",
    location: "Biography Section B-2",
    quantity: 3
  },
  {
    title: "Educated",
    author: "Tara Westover",
    isbn: "9780399590504",
    year: 2018,
    genre: "Memoir",
    item_type: "book",
    publisher: "Random House",
    language: "English",
    pages: 334,
    subject: "Education",
    keywords: "education, family, survival, transformation",
    description: "A memoir about education, family, and the transformative power of learning.",
    location: "Biography Section B-3",
    quantity: 2
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    isbn: "9780735211292",
    year: 2018,
    genre: "Self-Help",
    item_type: "book",
    publisher: "Avery",
    language: "English",
    pages: 320,
    subject: "Personal Development",
    keywords: "habits, productivity, behavior change, success",
    description: "A guide to building good habits and breaking bad ones.",
    location: "Self-Help Section SH-2",
    quantity: 4
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    isbn: "9780374533557",
    year: 2011,
    genre: "Psychology",
    item_type: "book",
    publisher: "Farrar, Straus and Giroux",
    language: "English",
    pages: 499,
    subject: "Psychology",
    keywords: "psychology, decision making, cognitive bias",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    location: "Psychology Section P-1",
    quantity: 3
  },
  {
    title: "The Immortal Life of Henrietta Lacks",
    author: "Rebecca Skloot",
    isbn: "9781400052172",
    year: 2010,
    genre: "Science",
    item_type: "book",
    publisher: "Crown Publishers",
    language: "English",
    pages: 381,
    subject: "Medical Science",
    keywords: "medical ethics, cell biology, biography",
    description: "The story of how HeLa cells became one of the most important tools in medicine.",
    location: "Science Section S-2",
    quantity: 2
  },
  {
    title: "Freakonomics",
    author: "Steven Levitt",
    isbn: "9780061234002",
    year: 2005,
    genre: "Economics",
    item_type: "book",
    publisher: "William Morrow",
    language: "English",
    pages: 315,
    subject: "Economics",
    keywords: "economics, statistics, social science",
    description: "A rogue economist explores the hidden side of everything.",
    location: "Economics Section E-1",
    quantity: 3
  },
  {
    title: "The Power of Now",
    author: "Eckhart Tolle",
    isbn: "9781577314806",
    year: 1997,
    genre: "Spirituality",
    item_type: "book",
    publisher: "New World Library",
    language: "English",
    pages: 236,
    subject: "Spirituality",
    keywords: "mindfulness, spirituality, present moment",
    description: "A guide to spiritual enlightenment.",
    location: "Spirituality Section SP-1",
    quantity: 2
  },
  {
    title: "Man's Search for Meaning",
    author: "Viktor Frankl",
    isbn: "9780807014295",
    year: 1946,
    genre: "Psychology",
    item_type: "book",
    publisher: "Beacon Press",
    language: "English",
    pages: 165,
    subject: "Psychology",
    keywords: "psychology, Holocaust, meaning, survival",
    description: "A Holocaust survivor's account of life in Nazi concentration camps.",
    location: "Psychology Section P-2",
    quantity: 3
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    isbn: "9780307887894",
    year: 2011,
    genre: "Business",
    item_type: "book",
    publisher: "Crown Business",
    language: "English",
    pages: 336,
    subject: "Business",
    keywords: "entrepreneurship, startup, innovation, business",
    description: "How today's entrepreneurs use continuous innovation to create radically successful businesses.",
    location: "Business Section BU-1",
    quantity: 3
  },
  {
    title: "Quiet: The Power of Introverts",
    author: "Susan Cain",
    isbn: "9780307352156",
    year: 2012,
    genre: "Psychology",
    item_type: "book",
    publisher: "Crown Publishers",
    language: "English",
    pages: 333,
    subject: "Psychology",
    keywords: "introversion, personality, psychology, society",
    description: "The power of introverts in a world that can't stop talking.",
    location: "Psychology Section P-3",
    quantity: 2
  },

  // Children's Books (Items 31-40)
  {
    title: "Where the Wild Things Are",
    author: "Maurice Sendak",
    isbn: "9780064431781",
    year: 1963,
    genre: "Children's Picture Book",
    item_type: "book",
    publisher: "Harper & Row",
    language: "English",
    pages: 40,
    subject: "Children's Literature",
    keywords: "imagination, adventure, childhood, monsters",
    description: "Classic children's picture book about Max's journey to the land of Wild Things.",
    location: "Children's Section CH-1",
    quantity: 5
  },
  {
    title: "The Cat in the Hat",
    author: "Dr. Seuss",
    isbn: "9780394800011",
    year: 1957,
    genre: "Children's Picture Book",
    item_type: "book",
    publisher: "Random House",
    language: "English",
    pages: 61,
    subject: "Early Reader",
    keywords: "rhyme, fun, chaos, responsibility",
    description: "Beloved children's book about a mischievous cat who visits two children.",
    location: "Children's Section CH-2",
    quantity: 4
  },
  {
    title: "Charlotte's Web",
    author: "E.B. White",
    isbn: "9780064400558",
    year: 1952,
    genre: "Children's Novel",
    item_type: "book",
    publisher: "Harper & Brothers",
    language: "English",
    pages: 192,
    subject: "Children's Literature",
    keywords: "friendship, farm animals, life and death",
    description: "Timeless story of friendship between a pig named Wilbur and a spider named Charlotte.",
    location: "Children's Section CH-3",
    quantity: 3
  },
  {
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    isbn: "9780399226908",
    year: 1969,
    genre: "Children's Picture Book",
    item_type: "book",
    publisher: "World Publishing Company",
    language: "English",
    pages: 32,
    subject: "Early Learning",
    keywords: "metamorphosis, counting, days of week, growth",
    description: "Classic picture book teaching about metamorphosis and the days of the week.",
    location: "Children's Section CH-4",
    quantity: 4
  },
  {
    title: "Goodnight Moon",
    author: "Margaret Wise Brown",
    isbn: "9780064430173",
    year: 1947,
    genre: "Children's Picture Book",
    item_type: "book",
    publisher: "Harper & Brothers",
    language: "English",
    pages: 32,
    subject: "Bedtime Story",
    keywords: "bedtime, routine, comfort, sleep",
    description: "Beloved bedtime story about a young rabbit saying goodnight to everything.",
    location: "Children's Section CH-5",
    quantity: 5
  },
  {
    title: "The Lion, the Witch and the Wardrobe",
    author: "C.S. Lewis",
    isbn: "9780064471046",
    year: 1950,
    genre: "Children's Fantasy",
    item_type: "book",
    publisher: "Geoffrey Bles",
    language: "English",
    pages: 208,
    subject: "Fantasy Literature",
    keywords: "Narnia, fantasy, adventure, allegory",
    description: "First published book in The Chronicles of Narnia fantasy series.",
    location: "Children's Section CH-6",
    quantity: 3
  },
  {
    title: "Matilda",
    author: "Roald Dahl",
    isbn: "9780142410370",
    year: 1988,
    genre: "Children's Novel",
    item_type: "book",
    publisher: "Jonathan Cape",
    language: "English",
    pages: 240,
    subject: "Children's Literature",
    keywords: "telekinesis, school, reading, empowerment",
    description: "Story of a brilliant girl with telekinetic powers who overcomes adversity.",
    location: "Children's Section CH-7",
    quantity: 4
  },
  {
    title: "The Giving Tree",
    author: "Shel Silverstein",
    isbn: "9780060256654",
    year: 1964,
    genre: "Children's Picture Book",
    item_type: "book",
    publisher: "Harper & Row",
    language: "English",
    pages: 64,
    subject: "Life Lessons",
    keywords: "selflessness, giving, love, relationships",
    description: "Allegorical picture book about the relationship between a tree and a boy.",
    location: "Children's Section CH-8",
    quantity: 3
  },
  {
    title: "Green Eggs and Ham",
    author: "Dr. Seuss",
    isbn: "9780394800165",
    year: 1960,
    genre: "Children's Picture Book",
    item_type: "book",
    publisher: "Beginner Books",
    language: "English",
    pages: 62,
    subject: "Early Reader",
    keywords: "persistence, trying new things, vocabulary",
    description: "Simple vocabulary book about trying new things, written with only 50 words.",
    location: "Children's Section CH-9",
    quantity: 4
  },
  {
    title: "The Adventures of Tom Sawyer",
    author: "Mark Twain",
    isbn: "9780486400778",
    year: 1876,
    genre: "Adventure",
    item_type: "book",
    publisher: "American Publishing Company",
    language: "English",
    pages: 274,
    subject: "Children's Literature",
    keywords: "adventure, childhood, Mississippi, friendship",
    description: "Classic adventure novel about a mischievous boy growing up along the Mississippi River.",
    location: "Children's Section CH-10",
    quantity: 3
  },

  // Academic Textbooks (Items 41-50)
  {
    title: "Campbell Biology",
    author: "Neil A. Campbell",
    isbn: "9780134093413",
    year: 2016,
    genre: "Textbook",
    item_type: "book",
    publisher: "Pearson",
    language: "English",
    pages: 1488,
    subject: "Biology",
    keywords: "cell biology, genetics, evolution, ecology",
    description: "Comprehensive undergraduate biology textbook covering all major areas.",
    location: "Textbook Section T-1",
    quantity: 5
  },
  {
    title: "Calculus: Early Transcendentals",
    author: "James Stewart",
    isbn: "9781285741550",
    year: 2015,
    genre: "Mathematics Textbook",
    item_type: "book",
    publisher: "Cengage Learning",
    language: "English",
    pages: 1368,
    subject: "Mathematics",
    keywords: "calculus, derivatives, integrals, limits",
    description: "Standard calculus textbook for undergraduate mathematics courses.",
    location: "Textbook Section T-2",
    quantity: 4
  },
  {
    title: "Psychology: The Science of Mind and Behaviour",
    author: "Michael W. Passer",
    isbn: "9780077128883",
    year: 2014,
    genre: "Psychology Textbook",
    item_type: "book",
    publisher: "McGraw-Hill",
    language: "English",
    pages: 896,
    subject: "Psychology",
    keywords: "cognitive psychology, behavior, research methods",
    description: "Comprehensive introduction to psychological science and research.",
    location: "Textbook Section T-3",
    quantity: 3
  },
  {
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    isbn: "9780262533058",
    year: 2009,
    genre: "Computer Science Textbook",
    item_type: "book",
    publisher: "MIT Press",
    language: "English",
    pages: 1312,
    subject: "Computer Science",
    keywords: "algorithms, data structures, complexity, programming",
    description: "Comprehensive textbook on algorithms and data structures.",
    location: "Textbook Section T-4",
    quantity: 3
  },
  {
    title: "Principles of Economics",
    author: "N. Gregory Mankiw",
    isbn: "9781305585126",
    year: 2017,
    genre: "Economics Textbook",
    item_type: "book",
    publisher: "Cengage Learning",
    language: "English",
    pages: 888,
    subject: "Economics",
    keywords: "microeconomics, macroeconomics, markets, policy",
    description: "Introduction to economic principles and their real-world applications.",
    location: "Textbook Section T-5",
    quantity: 4
  },
  {
    title: "Organic Chemistry",
    author: "Paula Yurkanis Bruice",
    isbn: "9780134042282",
    year: 2016,
    genre: "Chemistry Textbook",
    item_type: "book",
    publisher: "Pearson",
    language: "English",
    pages: 1344,
    subject: "Chemistry",
    keywords: "organic chemistry, reactions, synthesis, mechanisms",
    description: "Comprehensive textbook covering organic chemistry principles and reactions.",
    location: "Textbook Section T-6",
    quantity: 3
  },
  {
    title: "Physics for Scientists and Engineers",
    author: "Raymond A. Serway",
    isbn: "9781337553278",
    year: 2018,
    genre: "Physics Textbook",
    item_type: "book",
    publisher: "Cengage Learning",
    language: "English",
    pages: 1216,
    subject: "Physics",
    keywords: "mechanics, thermodynamics, electromagnetism, optics",
    description: "Comprehensive physics textbook for science and engineering students.",
    location: "Textbook Section T-7",
    quantity: 4
  },
  {
    title: "American Government: Institutions and Policies",
    author: "James Q. Wilson",
    isbn: "9781337579049",
    year: 2018,
    genre: "Political Science Textbook",
    item_type: "book",
    publisher: "Cengage Learning",
    language: "English",
    pages: 704,
    subject: "Political Science",
    keywords: "government, politics, institutions, policy",
    description: "Comprehensive introduction to American government and political institutions.",
    location: "Textbook Section T-8",
    quantity: 2
  },
  {
    title: "World History: Patterns of Interaction",
    author: "Roger B. Beck",
    isbn: "9780547491127",
    year: 2012,
    genre: "History Textbook",
    item_type: "book",
    publisher: "McDougal Littell",
    language: "English",
    pages: 1136,
    subject: "World History",
    keywords: "civilizations, cultures, historical patterns, global history",
    description: "Comprehensive world history textbook covering major civilizations and cultures.",
    location: "Textbook Section T-9",
    quantity: 3
  },
  {
    title: "Engineering Mechanics: Statics",
    author: "Russell C. Hibbeler",
    isbn: "9780134378053",
    year: 2016,
    genre: "Engineering Textbook",
    item_type: "book",
    publisher: "Pearson",
    language: "English",
    pages: 672,
    subject: "Engineering",
    keywords: "statics, mechanics, forces, equilibrium, structures",
    description: "Fundamental textbook on engineering statics and mechanics.",
    location: "Textbook Section T-10",
    quantity: 2
  },

  // Journals and Academic Publications (Items 51-60)
  {
    title: "Nature - Current Issues",
    author: "Various Authors",
    isbn: null,
    year: 2024,
    genre: "Scientific Journal",
    item_type: "journal",
    publisher: "Nature Publishing Group",
    language: "English",
    pages: 120,
    subject: "Natural Sciences",
    keywords: "science, research, biology, physics, chemistry",
    description: "Weekly international journal publishing peer-reviewed research in all fields of science and technology.",
    location: "Journal Section J-1",
    quantity: 1
  },
  {
    title: "Science Magazine",
    author: "Various Authors",
    isbn: null,
    year: 2024,
    genre: "Scientific Journal",
    item_type: "journal",
    publisher: "American Association for the Advancement of Science",
    language: "English",
    pages: 80,
    subject: "Scientific Research",
    keywords: "research, discovery, innovation, technology",
    description: "Weekly peer-reviewed general science journal.",
    location: "Journal Section J-2",
    quantity: 1
  },
  {
    title: "The New England Journal of Medicine",
    author: "Various Authors",
    isbn: null,
    year: 2024,
    genre: "Medical Journal",
    item_type: "journal",
    publisher: "Massachusetts Medical Society",
    language: "English",
    pages: 96,
    subject: "Medicine",
    keywords: "medicine, healthcare, clinical research, medical practice",
    description: "Prestigious medical journal publishing clinical research and medical advances.",
    location: "Journal Section J-3",
    quantity: 1
  },
  {
    title: "National Geographic",
    author: "Various Authors",
    isbn: null,
    year: 2024,
    genre: "Science & Nature Magazine",
    item_type: "magazine",
    publisher: "National Geographic Society",
    language: "English",
    pages: 120,
    subject: "Geography & Science",
    keywords: "geography, nature, culture, photography",
    description: "Monthly magazine featuring articles about geography, history, and world culture.",
    location: "Magazine Section MG-1",
    quantity: 1
  },
  {
    title: "Time Magazine",
    author: "Various Authors",
    isbn: null,
    year: 2024,
    genre: "News Magazine",
    item_type: "magazine",
    publisher: "Time USA",
    language: "English",
    pages: 64,
    subject: "Current Affairs",
    keywords: "news, politics, world events, culture",
    description: "Weekly news magazine covering politics, world events, and cultural topics.",
    location: "Magazine Section MG-2",
    quantity: 1
  },
  {
    title: "Scientific American",
    author: "Various Authors",
    isbn: null,
    year: 2024,
    genre: "Science Magazine",
    item_type: "magazine",
    publisher: "Springer Nature",
    language: "English",
    pages: 80,
    subject: "Popular Science",
    keywords: "science, technology, research, innovation",
    description: "Monthly magazine making scientific research accessible to general readers.",
    location: "Magazine Section MG-3",
    quantity: 1
  },
  {
    title: "The New York Times",
    author: "Various Journalists",
    isbn: null,
    year: 2024,
    genre: "Daily Newspaper",
    item_type: "newspaper",
    publisher: "The New York Times Company",
    language: "English",
    pages: 40,
    subject: "General News",
    keywords: "news, politics, world events, journalism",
    description: "Daily American newspaper based in New York City.",
    location: "Newspaper Section N-1",
    quantity: 1
  },
  {
    title: "The Guardian",
    author: "Various Journalists",
    isbn: null,
    year: 2024,
    genre: "Daily Newspaper",
    item_type: "newspaper",
    publisher: "Guardian Media Group",
    language: "English",
    pages: 48,
    subject: "International News",
    keywords: "news, politics, environment, culture",
    description: "British daily newspaper with international coverage and progressive perspective.",
    location: "Newspaper Section N-2",
    quantity: 1
  },
  {
    title: "Harvard Business Review",
    author: "Various Authors",
    isbn: null,
    year: 2024,
    genre: "Business Magazine",
    item_type: "magazine",
    publisher: "Harvard Business Publishing",
    language: "English",
    pages: 96,
    subject: "Business Management",
    keywords: "business, management, leadership, strategy",
    description: "Monthly business magazine featuring articles on management and strategy.",
    location: "Magazine Section MG-4",
    quantity: 1
  },
  {
    title: "The Economist",
    author: "Various Authors",
    isbn: null,
    year: 2024,
    genre: "Business Magazine",
    item_type: "magazine",
    publisher: "The Economist Group",
    language: "English",
    pages: 88,
    subject: "Economics & Politics",
    keywords: "economics, politics, business, international affairs",
    description: "Weekly magazine focused on international politics, business, and economics.",
    location: "Magazine Section MG-5",
    quantity: 1
  },

  // Multimedia Resources (Items 61-70)
  {
    title: "Planet Earth II",
    author: "BBC Natural History Unit",
    isbn: null,
    year: 2016,
    genre: "Documentary",
    item_type: "multimedia",
    publisher: "BBC",
    language: "English",
    duration: 360,
    format: "Blu-ray",
    subject: "Nature Documentary",
    keywords: "nature, wildlife, planet, environment",
    description: "Award-winning nature documentary series showcasing the planet's most spectacular natural events.",
    location: "Multimedia Section M-1",
    quantity: 2
  },
  {
    title: "The Godfather Trilogy",
    author: "Francis Ford Coppola",
    isbn: null,
    year: 2008,
    genre: "Crime Drama",
    item_type: "multimedia",
    publisher: "Paramount Pictures",
    language: "English",
    duration: 537,
    format: "DVD",
    subject: "Classic Cinema",
    keywords: "mafia, family, crime, drama",
    description: "Complete trilogy of the classic Godfather films.",
    location: "Multimedia Section M-2",
    quantity: 3
  },
  {
    title: "Abbey Road",
    author: "The Beatles",
    isbn: null,
    year: 1969,
    genre: "Rock Music",
    item_type: "multimedia",
    publisher: "Apple Records",
    language: "English",
    duration: 47,
    format: "CD",
    subject: "Music",
    keywords: "Beatles, rock, psychedelic, classic",
    description: "Final studio album recorded by The Beatles, featuring iconic songs.",
    location: "Music Section MU-1",
    quantity: 3
  },
  {
    title: "Kind of Blue",
    author: "Miles Davis",
    isbn: null,
    year: 1959,
    genre: "Jazz",
    item_type: "multimedia",
    publisher: "Columbia Records",
    language: "Instrumental",
    duration: 46,
    format: "CD",
    subject: "Jazz Music",
    keywords: "jazz, improvisation, modal, trumpet",
    description: "Landmark jazz album that revolutionized the genre with modal jazz.",
    location: "Music Section MU-2",
    quantity: 2
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    author: "Peter Jackson",
    isbn: null,
    year: 2001,
    genre: "Fantasy Adventure",
    item_type: "multimedia",
    publisher: "New Line Cinema",
    language: "English",
    duration: 178,
    format: "DVD",
    subject: "Fantasy Film",
    keywords: "fantasy, adventure, magic, Middle-earth",
    description: "Epic fantasy film adaptation of J.R.R. Tolkien's novel.",
    location: "Multimedia Section M-3",
    quantity: 3
  },
  {
    title: "Mozart: Complete Piano Sonatas",
    author: "Wolfgang Amadeus Mozart",
    isbn: null,
    year: 2000,
    genre: "Classical Music",
    item_type: "multimedia",
    publisher: "Deutsche Grammophon",
    language: "Instrumental",
    duration: 285,
    format: "CD Box Set",
    subject: "Classical Music",
    keywords: "Mozart, piano, sonatas, classical",
    description: "Complete collection of Mozart's piano sonatas performed by leading pianists.",
    location: "Music Section MU-3",
    quantity: 1
  },
  {
    title: "Frozen",
    author: "Disney",
    isbn: null,
    year: 2013,
    genre: "Family Animation",
    item_type: "multimedia",
    publisher: "Walt Disney Studios",
    language: "English",
    duration: 102,
    format: "Blu-ray",
    subject: "Children's Film",
    keywords: "animation, musical, family, Disney",
    description: "Animated Disney musical about two sisters and the power of love.",
    location: "Multimedia Section M-4",
    quantity: 4
  },
  {
    title: "TED Talks: Ideas Worth Spreading",
    author: "Various Speakers",
    isbn: null,
    year: 2017,
    genre: "Educational",
    item_type: "multimedia",
    publisher: "TED",
    language: "English",
    duration: 480,
    format: "DVD",
    subject: "Education",
    keywords: "innovation, technology, education, inspiration",
    description: "Collection of inspiring TED talks from leading thinkers and innovators.",
    location: "Educational Section E-1",
    quantity: 2
  },
  {
    title: "The Blue Planet",
    author: "BBC Natural History Unit",
    isbn: null,
    year: 2001,
    genre: "Documentary",
    item_type: "multimedia",
    publisher: "BBC",
    language: "English",
    duration: 400,
    format: "DVD",
    subject: "Marine Biology",
    keywords: "ocean, marine life, documentary, nature",
    description: "Groundbreaking documentary series exploring Earth's oceans and marine life.",
    location: "Multimedia Section M-5",
    quantity: 2
  },
  {
    title: "Becoming by Michelle Obama (Audiobook)",
    author: "Michelle Obama",
    isbn: null,
    year: 2018,
    genre: "Memoir",
    item_type: "multimedia",
    publisher: "Random House Audio",
    language: "English",
    duration: 1140,
    format: "CD",
    subject: "Biography",
    keywords: "memoir, first lady, inspiration, politics",
    description: "Memoir of former First Lady Michelle Obama, narrated by the author.",
    location: "Audiobook Section A-1",
    quantity: 2
  },

  // Reference Books (Items 71-80)
  {
    title: "Oxford English Dictionary",
    author: "Oxford University Press",
    isbn: "9780198611868",
    year: 2012,
    genre: "Reference",
    item_type: "book",
    publisher: "Oxford University Press",
    language: "English",
    pages: 21730,
    subject: "Linguistics",
    keywords: "dictionary, English language, definitions",
    description: "Comprehensive dictionary of the English language.",
    location: "Reference Section R-1",
    quantity: 1
  },
  {
    title: "Encyclopedia Britannica",
    author: "Encyclopedia Britannica Inc.",
    isbn: "9781593392932",
    year: 2010,
    genre: "Reference",
    item_type: "book",
    publisher: "Encyclopedia Britannica Inc.",
    language: "English",
    pages: 32640,
    subject: "General Knowledge",
    keywords: "encyclopedia, knowledge, reference",
    description: "Comprehensive general encyclopedia covering all fields of knowledge.",
    location: "Reference Section R-2",
    quantity: 1
  },
  {
    title: "World Atlas",
    author: "National Geographic",
    isbn: "9781426218996",
    year: 2020,
    genre: "Geography",
    item_type: "book",
    publisher: "National Geographic",
    language: "English",
    pages: 448,
    subject: "Geography",
    keywords: "maps, countries, geography, world",
    description: "Comprehensive atlas of the world with detailed maps and geographical information.",
    location: "Reference Section R-3",
    quantity: 2
  },
  {
    title: "Thesaurus of English Words and Phrases",
    author: "Peter Mark Roget",
    isbn: "9780140515039",
    year: 2000,
    genre: "Reference",
    item_type: "book",
    publisher: "Penguin Classics",
    language: "English",
    pages: 1312,
    subject: "Linguistics",
    keywords: "synonyms, antonyms, vocabulary, words",
    description: "Classic thesaurus organizing English words and phrases by meaning.",
    location: "Reference Section R-4",
    quantity: 3
  },
  {
    title: "MLA Handbook for Writers",
    author: "Modern Language Association",
    isbn: "9781603292627",
    year: 2016,
    genre: "Academic Reference",
    item_type: "book",
    publisher: "Modern Language Association",
    language: "English",
    pages: 146,
    subject: "Academic Writing",
    keywords: "citation, research, writing, MLA",
    description: "Official guide to MLA citation style and academic writing.",
    location: "Reference Section R-5",
    quantity: 4
  },
  {
    title: "The Chicago Manual of Style",
    author: "University of Chicago Press Staff",
    isbn: "9780226104201",
    year: 2017,
    genre: "Academic Reference",
    item_type: "book",
    publisher: "University of Chicago Press",
    language: "English",
    pages: 1184,
    subject: "Academic Writing",
    keywords: "style guide, citation, editing, publishing",
    description: "Comprehensive guide to style, usage, and grammar.",
    location: "Reference Section R-6",
    quantity: 2
  },
  {
    title: "Gray's Anatomy",
    author: "Henry Gray",
    isbn: "9780702077050",
    year: 2020,
    genre: "Medical Reference",
    item_type: "book",
    publisher: "Elsevier",
    language: "English",
    pages: 1584,
    subject: "Anatomy",
    keywords: "anatomy, medicine, human body, medical reference",
    description: "Classic reference on human anatomy for students and professionals.",
    location: "Reference Section R-7",
    quantity: 2
  },
  {
    title: "Diagnostic and Statistical Manual of Mental Disorders (DSM-5)",
    author: "American Psychiatric Association",
    isbn: "9780890425541",
    year: 2013,
    genre: "Medical Reference",
    item_type: "book",
    publisher: "American Psychiatric Publishing",
    language: "English",
    pages: 947,
    subject: "Psychology",
    keywords: "mental health, psychiatry, diagnosis, psychology",
    description: "Standard classification of mental disorders used by mental health professionals.",
    location: "Reference Section R-8",
    quantity: 2
  },
  {
    title: "The Elements of Style",
    author: "William Strunk Jr.",
    isbn: "9780205309023",
    year: 2000,
    genre: "Writing Reference",
    item_type: "book",
    publisher: "Allyn & Bacon",
    language: "English",
    pages: 105,
    subject: "English Writing",
    keywords: "writing style, grammar, composition, English",
    description: "Classic guide to the principles of English style and composition.",
    location: "Reference Section R-9",
    quantity: 5
  },
  {
    title: "Bartlett's Familiar Quotations",
    author: "John Bartlett",
    isbn: "9780316084604",
    year: 2012,
    genre: "Reference",
    item_type: "book",
    publisher: "Little, Brown and Company",
    language: "English",
    pages: 1472,
    subject: "Literature",
    keywords: "quotations, literature, famous sayings, reference",
    description: "Collection of passages, phrases, and proverbs traced to their sources.",
    location: "Reference Section R-10",
    quantity: 2
  },

  // Specialty and Other Items (Items 81-90)
  {
    title: "The Joy of Cooking",
    author: "Irma S. Rombauer",
    isbn: "9780743246262",
    year: 2006,
    genre: "Cookbook",
    item_type: "book",
    publisher: "Scribner",
    language: "English",
    pages: 1152,
    subject: "Culinary Arts",
    keywords: "recipes, cooking, baking, techniques",
    description: "Comprehensive cookbook with over 4,500 recipes and cooking techniques.",
    location: "Cooking Section C-1",
    quantity: 3
  },
  {
    title: "Salt, Fat, Acid, Heat",
    author: "Samin Nosrat",
    isbn: "9781476753836",
    year: 2017,
    genre: "Cookbook",
    item_type: "book",
    publisher: "Simon & Schuster",
    language: "English",
    pages: 472,
    subject: "Culinary Arts",
    keywords: "cooking techniques, flavor, fundamentals",
    description: "Guide to mastering the four fundamental elements of good cooking.",
    location: "Cooking Section C-2",
    quantity: 2
  },
  {
    title: "The Complete Poems of Emily Dickinson",
    author: "Emily Dickinson",
    isbn: "9780316184137",
    year: 1976,
    genre: "Poetry",
    item_type: "book",
    publisher: "Little, Brown and Company",
    language: "English",
    pages: 770,
    subject: "American Poetry",
    keywords: "nature, death, immortality, solitude",
    description: "Complete collection of Emily Dickinson's innovative and influential poems.",
    location: "Poetry Section P-1",
    quantity: 3
  },
  {
    title: "Leaves of Grass",
    author: "Walt Whitman",
    isbn: "9780486456768",
    year: 1855,
    genre: "Poetry",
    item_type: "book",
    publisher: "Dover Publications",
    language: "English",
    pages: 416,
    subject: "American Poetry",
    keywords: "free verse, democracy, nature, spirituality",
    description: "Groundbreaking collection of American poetry celebrating democracy and the human spirit.",
    location: "Poetry Section P-2",
    quantity: 2
  },
  {
    title: "The Story of Art",
    author: "E.H. Gombrich",
    isbn: "9780714832470",
    year: 2006,
    genre: "Art History",
    item_type: "book",
    publisher: "Phaidon Press",
    language: "English",
    pages: 688,
    subject: "Art History",
    keywords: "painting, sculpture, art movements, artists",
    description: "Classic introduction to the history of art from cave paintings to modern art.",
    location: "Art Section A-1",
    quantity: 2
  },
  {
    title: "Ways of Seeing",
    author: "John Berger",
    isbn: "9780140135152",
    year: 1972,
    genre: "Art Criticism",
    item_type: "book",
    publisher: "Penguin Books",
    language: "English",
    pages: 176,
    subject: "Art Theory",
    keywords: "visual culture, perception, art criticism",
    description: "Influential work on how we look at and understand visual art.",
    location: "Art Section A-2",
    quantity: 2
  },
  {
    title: "Watchmen",
    author: "Alan Moore",
    isbn: "9781401245252",
    year: 1987,
    genre: "Superhero Graphic Novel",
    item_type: "book",
    publisher: "DC Comics",
    language: "English",
    pages: 416,
    subject: "Comic Literature",
    keywords: "superheroes, dystopia, moral complexity, noir",
    description: "Groundbreaking graphic novel that redefined the superhero genre.",
    location: "Graphic Novel Section GN-1",
    quantity: 3
  },
  {
    title: "Persepolis",
    author: "Marjane Satrapi",
    isbn: "9780375714573",
    year: 2003,
    genre: "Autobiographical Graphic Novel",
    item_type: "book",
    publisher: "Pantheon Books",
    language: "English",
    pages: 341,
    subject: "Memoir",
    keywords: "Iran, revolution, coming-of-age, autobiography",
    description: "Autobiographical graphic novel about growing up during the Iranian Revolution.",
    location: "Graphic Novel Section GN-2",
    quantity: 4
  },
  {
    title: "Maus",
    author: "Art Spiegelman",
    isbn: "9780679406419",
    year: 1991,
    genre: "Historical Graphic Novel",
    item_type: "book",
    publisher: "Pantheon Books",
    language: "English",
    pages: 296,
    subject: "Holocaust Literature",
    keywords: "Holocaust, World War II, biography, memory",
    description: "Pulitzer Prize-winning graphic novel about the Holocaust and its aftermath.",
    location: "Graphic Novel Section GN-3",
    quantity: 2
  },
  {
    title: "Climate Change Assessment 2024",
    author: "Environmental Research Institute",
    isbn: null,
    year: 2024,
    genre: "Environmental Report",
    item_type: "report",
    publisher: "ERI Publications",
    language: "English",
    pages: 200,
    subject: "Environmental Science",
    keywords: "climate change, environment, research, sustainability",
    description: "Comprehensive report on the current state of climate change and its global impacts.",
    location: "Report Section R-1",
    quantity: 1
  },

  // Additional Academic and Research Items (Items 91-100)
  {
    title: "Machine Learning Applications in Healthcare",
    author: "Dr. Sarah Johnson",
    isbn: null,
    year: 2023,
    genre: "Computer Science Thesis",
    item_type: "thesis",
    publisher: "University of Technology",
    language: "English",
    pages: 150,
    subject: "Computer Science",
    keywords: "machine learning, healthcare, AI, medical technology",
    description: "Doctoral thesis exploring the applications of machine learning in healthcare systems.",
    location: "Thesis Section T-1",
    quantity: 1
  },
  {
    title: "Global Economic Outlook 2024",
    author: "International Monetary Fund",
    isbn: "9789464827203",
    year: 2024,
    genre: "Economic Report",
    item_type: "report",
    publisher: "IMF",
    language: "English",
    pages: 156,
    subject: "Economics",
    keywords: "economy, growth, inflation, global markets",
    description: "Annual report analyzing global economic trends and forecasts.",
    location: "Report Section R-2",
    quantity: 2
  },
  {
    title: "Digital Education Technology Survey",
    author: "Education Technology Institute",
    isbn: null,
    year: 2024,
    genre: "Educational Research",
    item_type: "report",
    publisher: "ETI Press",
    language: "English",
    pages: 85,
    subject: "Educational Technology",
    keywords: "digital learning, technology, education, online learning",
    description: "Survey report on the adoption and effectiveness of digital education technologies.",
    location: "Report Section R-3",
    quantity: 3
  },
  {
    title: "Sustainable Urban Planning in Smart Cities",
    author: "Dr. Michael Chen",
    isbn: null,
    year: 2023,
    genre: "Urban Planning Thesis",
    item_type: "thesis",
    publisher: "Metropolitan University",
    language: "English",
    pages: 185,
    subject: "Urban Planning",
    keywords: "smart cities, sustainability, urban development, technology",
    description: "PhD dissertation on integrating sustainability principles in smart city development.",
    location: "Thesis Section T-2",
    quantity: 1
  },
  {
    title: "Neural Networks in Financial Forecasting",
    author: "Dr. Lisa Rodriguez",
    isbn: null,
    year: 2024,
    genre: "Finance Thesis",
    item_type: "thesis",
    publisher: "Business School",
    language: "English",
    pages: 132,
    subject: "Financial Technology",
    keywords: "neural networks, finance, forecasting, algorithmic trading",
    description: "Master's thesis on the application of neural networks in financial market prediction.",
    location: "Thesis Section T-3",
    quantity: 1
  },
  {
    title: "Community Health Services Directory 2024",
    author: "Public Health Department",
    isbn: null,
    year: 2024,
    genre: "Public Services Directory",
    item_type: "other",
    publisher: "City Government",
    language: "English",
    pages: 64,
    subject: "Public Health",
    keywords: "healthcare, services, community resources, directory",
    description: "Comprehensive directory of local health services and community resources.",
    location: "Reference Section R-11",
    quantity: 5
  },
  {
    title: "Legal Case Studies Database",
    author: "Law School Faculty",
    isbn: "9781234567899",
    year: 2024,
    genre: "Legal Reference",
    item_type: "other",
    publisher: "Legal Education Press",
    language: "English",
    pages: 500,
    subject: "Law",
    keywords: "legal cases, jurisprudence, court decisions, legal research",
    description: "Comprehensive database of legal case studies for research and education.",
    location: "Legal Section L-1",
    quantity: 1
  },
  {
    title: "University Research Journal - Annual Collection",
    author: "University Faculty",
    isbn: null,
    year: 2024,
    genre: "Academic Journal",
    item_type: "journal",
    publisher: "University Press",
    language: "English",
    pages: 300,
    subject: "Multidisciplinary Research",
    keywords: "research, academia, multidisciplinary, university",
    description: "Annual collection of research papers from various university departments.",
    location: "Journal Section J-4",
    quantity: 2
  },
  {
    title: "Photography: The Complete Guide",
    author: "Tom Anderson",
    isbn: "9781465422880",
    year: 2020,
    genre: "Photography Manual",
    item_type: "book",
    publisher: "DK Publishing",
    language: "English",
    pages: 360,
    subject: "Photography",
    keywords: "photography, techniques, equipment, composition",
    description: "Comprehensive guide to photography techniques and equipment.",
    location: "Art Section A-3",
    quantity: 3
  },
  {
    title: "Global Technology Trends Report 2024",
    author: "Technology Research Institute",
    isbn: null,
    year: 2024,
    genre: "Technology Report",
    item_type: "report",
    publisher: "TRI Publications",
    language: "English",
    pages: 180,
    subject: "Technology",
    keywords: "technology, innovation, trends, future, digital transformation",
    description: "Annual report on emerging technology trends and their impact on society.",
    location: "Report Section R-4",
    quantity: 2
  }
];

// Enhanced user creation with more librarians and patrons
async function createUsers() {
  console.log("Creating users...");
  
  const users = [
    // 6 Librarians (as requested)
    {
      name: "Emma Johnson",
      email: "emma.johnson@example.com",
      password: "Emma@123",
      role: "librarian",
      gender: "female",
      phone_number: "+1-555-0101",
      address: "123 Library Lane, Book City, BC 12345",
    },
    {
      name: "Liam Smith",
      email: "liam.smith@example.com",
      password: "Liam@123",
      role: "librarian",
      gender: "male",
      phone_number: "+1-555-0102",
      address: "456 Knowledge Street, Reading Town, RT 67890",
    },
    {
      name: "Olivia Brown",
      email: "olivia.brown@example.com",
      password: "Olivia@123",
      role: "librarian",
      gender: "female",
      phone_number: "+1-555-0103",
      address: "789 Wisdom Avenue, Study City, SC 54321",
    },
    {
      name: "Noah Davis",
      email: "noah.davis@example.com",
      password: "Noah@123",
      role: "librarian",
      gender: "male",
      phone_number: "+1-555-0104",
      address: "321 Learning Boulevard, Education Town, ET 98765",
    },
    {
      name: "Ava Wilson",
      email: "ava.wilson@example.com",
      password: "Ava@123",
      role: "librarian",
      gender: "female",
      phone_number: "+1-555-0105",
      address: "654 Research Road, Academic City, AC 13579",
    },
    {
      name: "Mason Garcia",
      email: "mason.garcia@example.com",
      password: "Mason@123",
      role: "librarian",
      gender: "male",
      phone_number: "+1-555-0106",
      address: "987 Scholar Street, Learning Valley, LV 24680",
    },
    
    // 10 Patrons (as requested)
    {
      name: "John Doe",
      email: "john.doe@example.com",
      password: "John@123",
      role: "patron",
      gender: "male",
      phone_number: "+1-555-0201",
      address: "100 Student Street, College Town, CT 11111",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      password: "Jane@123",
      role: "patron",
      gender: "female",
      phone_number: "+1-555-0202",
      address: "200 Scholar Lane, University City, UC 22222",
    },
    {
      name: "Mark Lee",
      email: "mark.lee@example.com",
      password: "Mark@123",
      role: "patron",
      gender: "male",
      phone_number: "+1-555-0203",
      address: "300 Reader Road, Learning Town, LT 33333",
    },
    {
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      password: "Sarah@123",
      role: "patron",
      gender: "female",
      phone_number: "+1-555-0204",
      address: "400 Study Avenue, Book City, BC 44444",
    },
    {
      name: "Michael Brown",
      email: "michael.brown@example.com",
      password: "Michael@123",
      role: "patron",
      gender: "male",
      phone_number: "+1-555-0205",
      address: "500 Knowledge Street, Reading Town, RT 55555",
    },
    {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      password: "Emily@123",
      role: "patron",
      gender: "female",
      phone_number: "+1-555-0206",
      address: "600 Wisdom Lane, Study City, SC 66666",
    },
    {
      name: "James Wilson",
      email: "james.wilson@example.com",
      password: "James@123",
      role: "patron",
      gender: "male",
      phone_number: "+1-555-0207",
      address: "700 Learning Boulevard, Education Town, ET 77777",
    },
    {
      name: "Ashley Garcia",
      email: "ashley.garcia@example.com",
      password: "Ashley@123",
      role: "patron",
      gender: "female",
      phone_number: "+1-555-0208",
      address: "800 Research Road, Academic City, AC 88888",
    },
    {
      name: "David Martinez",
      email: "david.martinez@example.com",
      password: "David@123",
      role: "patron",
      gender: "male",
      phone_number: "+1-555-0209",
      address: "900 Scholar Street, Learning Valley, LV 99999",
    },
    {
      name: "Jessica Anderson",
      email: "jessica.anderson@example.com",
      password: "Jessica@123",
      role: "patron",
      gender: "female",
      phone_number: "+1-555-0210",
      address: "1000 Literature Lane, Book Valley, BV 10101",
    },
    
    // 1 Admin (as requested)
    {
      name: "Admin",
      email: "admin123@gmail.com",
      password: "Admin@123",
      role: "admin",
      gender: "other",
      phone_number: "+1-555-0001",
      address: "500 Admin Plaza, System City, SC 00000",
    },
  ];

  for (const userData of users) {
    try {
      const existingUser = await prisma.users.findUnique({
        where: { email: userData.email },
      });

      if (existingUser) {
        console.log(`User ${userData.email} already exists, skipping...`);
        continue;
      }

      const hashedPassword = await bcrypt.hash(userData.password, 12);

      const user = await prisma.users.create({
        data: {
          name: userData.name,
          email: userData.email,
          password_hash: hashedPassword,
          role: userData.role,
          gender: userData.gender,
          phone_number: userData.phone_number,
          address: userData.address,
          status: "active",
        },
      });

      console.log(
        `✅ Created ${userData.role}: ${userData.name} (${userData.email})`
      );
    } catch (error) {
      console.error(`❌ Error creating user ${userData.email}:`, error.message);
    }
  }
}

// Enhanced library items creation with better distribution
async function createLibraryItems() {
  console.log("\nCreating library items...");

  // Get all librarians to distribute items among them
  const librarians = await prisma.users.findMany({
    where: { role: "librarian" },
    orderBy: { user_id: "asc" },
  });

  if (librarians.length === 0) {
    console.error("No librarians found. Please create users first.");
    return;
  }

  console.log(`Found ${librarians.length} librarians for item distribution`);

  // Group items by type for better distribution
  const itemsByType = {};
  COMPREHENSIVE_LIBRARY_ITEMS.forEach(item => {
    if (!itemsByType[item.item_type]) {
      itemsByType[item.item_type] = [];
    }
    itemsByType[item.item_type].push(item);
  });

  console.log(`Item distribution by type:`, Object.keys(itemsByType).map(type => 
    `${type}: ${itemsByType[type].length} items`
  ));

  let itemIndex = 0;

  for (const itemData of COMPREHENSIVE_LIBRARY_ITEMS) {
    try {
      // Check if item already exists
      const existingItem = await prisma.library_items.findFirst({
        where: {
          title: itemData.title,
          author: itemData.author,
          item_type: itemData.item_type,
        },
      });

      if (existingItem) {
        console.log(`Item "${itemData.title}" already exists, skipping...`);
        continue;
      }

      // Distribute items evenly among librarians
      const assignedLibrarian = librarians[itemIndex % librarians.length];
      
      // Create library item
      const item = await prisma.library_items.create({
        data: {
          title: itemData.title,
          author: itemData.author,
          isbn: itemData.isbn,
          year: itemData.year,
          genre: itemData.genre,
          item_type: itemData.item_type,
          publisher: itemData.publisher,
          language: itemData.language,
          pages: itemData.pages,
          duration: itemData.duration,
          format: itemData.format,
          subject: itemData.subject,
          keywords: itemData.keywords,
          description: itemData.description,
          location: itemData.location,
          image_url: buildImageUrlFromIsbn(itemData.isbn),
          librarian_id: assignedLibrarian.user_id,
          record_status: "active",
        },
      });

      // Create copies
      const copies = Array.from({ length: itemData.quantity }, () => ({
        item_id: item.item_id,
        status: "available",
        user_id: null,
        record_status: "active",
      }));

      await prisma.item_tran.createMany({
        data: copies,
      });

      console.log(
        `✅ Created ${itemData.item_type}: "${itemData.title}" (${itemData.quantity} copies) - Assigned to ${assignedLibrarian.name}`
      );
      
      itemIndex++;
    } catch (error) {
      console.error(
        `❌ Error creating item "${itemData.title}":`,
        error.message
      );
    }
  }

  // Print distribution summary
  console.log("\n📊 Item Distribution Summary:");
  for (const librarian of librarians) {
    const itemCount = await prisma.library_items.count({
      where: { librarian_id: librarian.user_id }
    });
    console.log(`${librarian.name}: ${itemCount} items`);
  }
}

async function createSystemConfig() {
  console.log("\nCreating system configuration...");

  const configs = [
    {
      config_key: "max_borrow_days",
      config_value: "14",
      description: "Maximum number of days items can be borrowed",
    },
    {
      config_key: "fine_per_day",
      config_value: "5.00",
      description: "Fine amount per day for overdue items",
    },
    {
      config_key: "reservation_expiry_days",
      config_value: "7",
      description: "Number of days reservations remain active",
    },
    {
      config_key: "max_reservations_per_user",
      config_value: "5",
      description: "Maximum number of active reservations per user",
    },
    {
      config_key: "library_name",
      config_value: "Digital Library Management System",
      description: "Name of the library",
    },
    {
      config_key: "library_address",
      config_value: "123 Knowledge Street, Learning City, LC 12345",
      description: "Library address",
    },
    {
      config_key: "library_phone",
      config_value: "+1-555-LIBRARY",
      description: "Library contact phone number",
    },
    {
      config_key: "library_email",
      config_value: "info@library.com",
      description: "Library contact email",
    },
  ];

  for (const config of configs) {
    try {
      await prisma.system_config.upsert({
        where: { config_key: config.config_key },
        update: {
          config_value: config.config_value,
          description: config.description,
        },
        create: config,
      });

      console.log(`✅ Created/Updated config: ${config.config_key}`);
    } catch (error) {
      console.error(
        `❌ Error creating config ${config.config_key}:`,
        error.message
      );
    }
  }
}

async function main() {
  try {
    console.log("🌱 Starting enhanced database seeding...\n");

    await createUsers();
    await createLibraryItems();
    await createSystemConfig();

    console.log("\n🎉 Database seeding completed successfully!");
    console.log("\n📋 Summary:");
    console.log("- 6 Librarians created");
    console.log("- 10 Patrons created");
    console.log("- 1 Admin created");
    console.log("- 100 Diverse library items created with multiple copies");
    console.log("- Items distributed evenly among all librarians");
    console.log("- Real book cover images from Open Library API");
    console.log("- 8 System configurations created");

    console.log("\n🔑 Login Credentials:");
    console.log("Admin: admin123@gmail.com / Admin@123");
    console.log("Librarian 1: emma.johnson@example.com / Emma@123");
    console.log("Librarian 2: liam.smith@example.com / Liam@123");
    console.log("Librarian 3: olivia.brown@example.com / Olivia@123");
    console.log("Librarian 4: noah.davis@example.com / Noah@123");
    console.log("Librarian 5: ava.wilson@example.com / Ava@123");
    console.log("Librarian 6: mason.garcia@example.com / Mason@123");
    console.log("Patron 1: john.doe@example.com / John@123");
    console.log("Patron 2: jane.smith@example.com / Jane@123");
    console.log("... (8 more patrons with similar format)");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();