import { BookOpen, Calculator } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Grade = 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Subject =
  | "Mathematics"
  | "English Language Arts";

export type Lesson = {
  unit: string;
  title: string;
  standard: string;
  explanation: string;
  example: string;
  solution: string[];
  miniQuiz: string;
};

export type SubjectContent = {
  subject: Subject;
  icon: LucideIcon;
  color: string;
  lessons: Lesson[];
};

export type Question = {
  id: string;
  grade: Grade;
  subject: Subject;
  questionType?: string;
  prompt: string;
  answers: string[];
  correctIndex: number;
  explanation: string;
};

export const grades: Grade[] = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export function getGradeLabel(grade: Grade): string {
  if (grade === 8) return "Pre-Algebra";
  if (grade === 9) return "Algebra 1";
  if (grade === 10) return "Geometry";
  if (grade === 11) return "Algebra 2";
  if (grade === 12) return "Precalculus";
  return `Grade ${grade}`;
}

const subjects: Array<{ subject: Subject; icon: LucideIcon; color: string }> = [
  { subject: "Mathematics", icon: Calculator, color: "bg-sky-100 text-sky-700" },
  { subject: "English Language Arts", icon: BookOpen, color: "bg-violet-100 text-violet-700" }
];

const QUESTIONS_PER_GRADE_SUBJECT = 1000;
type QuestionBankKind = "study" | "test";

const grade3MathLessons: Lesson[] = [
  {
    unit: "3.N Numbers & Operations",
    title: "3.N.1 Whole numbers to 100,000",
    standard: "Compare and represent whole numbers up to 100,000 with an emphasis on place value and equality.",
    explanation: "Read, write, compare, and build five-digit and six-digit numbers by using place value, expanded form, and equality.",
    example: "Compare 48,306 and 48,360. Which is greater, and which place value proves it?",
    solution: ["Line up the digits by place value.", "The ten-thousands, thousands, and hundreds match.", "Compare the tens place: 0 tens is less than 6 tens, so 48,360 is greater."],
    miniQuiz: "Write 70,405 in expanded form and compare it to 70,450."
  },
  {
    unit: "3.N Numbers & Operations",
    title: "3.N.2 Operations in problems",
    standard: "Solve real-world and mathematical problems using addition, subtraction, multiplication, and division.",
    explanation: "Choose the operation needed for a word problem, solve carefully, and check whether the answer makes sense.",
    example: "A library has 368 books on one shelf and 247 on another. It gives away 129 books. How many books are left?",
    solution: ["Add the books first: 368 + 247 = 615.", "Subtract the books given away: 615 - 129 = 486.", "Check that the answer is less than 615 because books were removed."],
    miniQuiz: "Create a two-step problem that uses multiplication and subtraction."
  },
  {
    unit: "3.N Numbers & Operations",
    title: "3.N.3 Fractions in real problems",
    standard: "Use and justify fractional representations in real-world and mathematical problems.",
    explanation: "Represent equal parts, compare simple fractions, and explain why the fraction matches the model or situation.",
    example: "A rectangle is split into 8 equal parts. Three parts are shaded. What fraction is shaded, and how do you know?",
    solution: ["Count the total equal parts: 8.", "Count the shaded parts: 3.", "The shaded fraction is 3/8 because 3 of 8 equal parts are shaded."],
    miniQuiz: "Draw a model that shows 4/6 and explain what the numerator means."
  },
  {
    unit: "3.N Numbers & Operations",
    title: "3.N.4 Money values",
    standard: "Determine the value of a set of coins and determine the value of a set of bills in monetary transactions.",
    explanation: "Count bills and coins accurately, combine values, and use addition or subtraction in money situations.",
    example: "You have two $10 bills, three $5 bills, 4 quarters, and 3 dimes. What is the total value?",
    solution: ["Bills: 20 + 15 = 35 dollars.", "Coins: 4 quarters = $1.00 and 3 dimes = $0.30.", "Total value is $36.30."],
    miniQuiz: "Find the value of one $20 bill, two $5 bills, 6 quarters, and 5 nickels."
  },
  {
    unit: "3.A Algebraic Reasoning & Algebra",
    title: "3.A.1 Patterns",
    standard: "Describe and create representations of numerical and geometric patterns.",
    explanation: "Find the rule in number or shape patterns and use it to continue or create the pattern.",
    example: "A pattern starts 6, 12, 18, 24. What are the next two numbers, and what is the rule?",
    solution: ["Find the change from term to term.", "Each number increases by 6.", "The next two numbers are 30 and 36."],
    miniQuiz: "Create a pattern that starts at 7 and follows a multiplication rule."
  },
  {
    unit: "3.A Algebraic Reasoning & Algebra",
    title: "3.A.2 Multiplication with unknowns",
    standard: "Use number sentences involving multiplication and unknowns to represent and solve real-world and mathematical problems.",
    explanation: "Use an unknown symbol to stand for a missing number in a multiplication sentence.",
    example: "There are 6 bags with the same number of apples. There are 42 apples total. Write and solve the number sentence.",
    solution: ["Use an unknown for apples in each bag: 6 x n = 42.", "Think: 6 times what equals 42?", "n = 7, so each bag has 7 apples."],
    miniQuiz: "Write a multiplication sentence for 8 groups with 56 total items."
  },
  {
    unit: "3.GM Geometry & Measurement",
    title: "3.GM.1 Polygons and 3D figures",
    standard: "Analyze and use geometric attributes to describe and create polygons and three-dimensional figures in various contexts.",
    explanation: "Use attributes like sides, angles, faces, edges, and vertices to identify and describe shapes.",
    example: "A shape has 6 faces, 12 edges, and 8 vertices. What solid could it be?",
    solution: ["Use the three-dimensional attributes.", "A rectangular prism has 6 faces, 12 edges, and 8 vertices.", "So the solid could be a rectangular prism."],
    miniQuiz: "Describe a quadrilateral using at least three attributes."
  },
  {
    unit: "3.GM Geometry & Measurement",
    title: "3.GM.2 Measurable attributes",
    standard: "Understand measurable attributes of real-world and mathematical objects using various tools.",
    explanation: "Measure length, mass, capacity, and other attributes with appropriate tools and units.",
    example: "A pencil is 14 centimeters long. An eraser is 5 centimeters long. How much longer is the pencil?",
    solution: ["Identify the attribute: length.", "Subtract the shorter length from the longer length.", "14 - 5 = 9, so the pencil is 9 centimeters longer."],
    miniQuiz: "Choose the best tool to measure the length of a desk and explain why."
  },
  {
    unit: "3.GM Geometry & Measurement",
    title: "3.GM.3 Time to nearest five minutes",
    standard: "Solve problems by telling time to the nearest five-minute interval.",
    explanation: "Read clocks to the nearest five minutes and solve elapsed-time problems.",
    example: "Practice starts at 3:25 and ends at 4:10. How long is practice?",
    solution: ["From 3:25 to 4:00 is 35 minutes.", "From 4:00 to 4:10 is 10 minutes.", "35 + 10 = 45 minutes."],
    miniQuiz: "Find the elapsed time from 1:40 to 2:15."
  },
  {
    unit: "3.D Data & Probability",
    title: "3.D.1 Data",
    standard: "Collect, organize, and analyze data.",
    explanation: "Use tables, charts, and graphs to organize data and answer questions about the data.",
    example: "A class survey shows 8 students chose apples, 12 chose oranges, and 6 chose grapes. How many more chose oranges than grapes?",
    solution: ["Find the values for oranges and grapes.", "Subtract: 12 - 6 = 6.", "Six more students chose oranges than grapes."],
    miniQuiz: "Write one question you can answer from a bar graph about favorite sports."
  }
];

const grade3ElaLessons: Lesson[] = [
  {
    unit: "3.1 Listening and Speaking",
    title: "Collaborative listening, speaking, and presenting",
    standard: "3.1.L.1, 3.1.L.2, 3.1.S.1, 3.1.S.2, 3.1.S.3: Listen actively, ask clarifying questions, collaborate respectfully, discuss reading and writing, and present information clearly with relevant facts and details.",
    explanation: "Use agreed-upon discussion rules, listen for the speaker's purpose, ask useful questions, share responsibilities in groups, and present ideas in complete, clear sentences.",
    example: "A classmate says, 'Our group should choose the recycling topic because it affects the whole school.' What clarifying question would help you understand the speaker's purpose?",
    solution: ["Listen for the speaker's main point.", "Ask a question connected to purpose or evidence.", "A strong question is: What evidence shows recycling affects the whole school?"],
    miniQuiz: "Name two respectful discussion rules and write one question that clarifies a speaker's purpose."
  },
  {
    unit: "3.2 Reading and Writing Foundations",
    title: "Word sounds, spelling, decoding, and fluency",
    standard: "3.2.PA, 3.2.PC, 3.2.PWS.1-3, 3.2.SE.1-3, 3.2.F.1-2: Work with phonemes, print/cursive formation, multisyllabic decoding, roots and affixes, spelling patterns, sight words, and fluent oral reading.",
    explanation: "Decode multisyllabic words using syllable types, diphthongs, roots, prefixes, suffixes, and context. Spell common patterns correctly and read grade-level text smoothly with expression.",
    example: "The word disagreeable has a prefix, root, and suffix. What are its meaningful parts?",
    solution: ["The prefix is dis-, meaning not or opposite.", "The root is agree.", "The suffix is -able, meaning able to be."],
    miniQuiz: "Break the word carefulness into meaningful parts and explain how the suffix changes the word."
  },
  {
    unit: "3.2 Reading and Writing Process",
    title: "Main ideas, summaries, genres, and writing process",
    standard: "3.2.R.1-4 and 3.2.W.1-4: Determine main idea and details, identify genre elements, summarize and sequence stories, summarize informational details, and use the writing process to draft, revise, edit, and publish.",
    explanation: "Find what a text is mostly about, support it with key details, sequence important events, and improve writing through prewriting, drafting, revising, editing, and publishing.",
    example: "A passage explains how tadpoles become frogs. What would a strong summary include?",
    solution: ["State the main idea: tadpoles change into frogs through stages.", "Include key details in order.", "Leave out small or repeated details."],
    miniQuiz: "Write one main idea and three supporting details for an informational paragraph about storms."
  },
  {
    unit: "3.3 Critical Reading and Writing",
    title: "Purpose, point of view, literary elements, text structure, and evidence",
    standard: "3.3.R.1-7 and 3.3.W.1-3: Determine author's purpose, point of view, literary elements and devices, infer with text evidence, distinguish fact from opinion, describe informational text structure, and write narrative, informative, and opinion pieces.",
    explanation: "Think deeply about why a text was written, who is telling it, how it is structured, and what evidence supports an answer or written response.",
    example: "A paragraph says, 'The new park is the best place in town because it has safe paths and shady benches.' Is that fact or opinion?",
    solution: ["The phrase best place is a judgment.", "Judgments can be supported, but they are opinions.", "The sentence is an opinion with reasons."],
    miniQuiz: "Identify the author's purpose of a recipe and explain whether it informs, entertains, or persuades."
  },
  {
    unit: "3.4 Vocabulary",
    title: "Word relationships, context clues, word parts, and references",
    standard: "3.4.R.1-5 and 3.4.W.1-2: Identify synonyms, antonyms, homophones, homographs, context clues, word parts, reference materials, and use precise grade-level vocabulary in writing.",
    explanation: "Use nearby words, roots, affixes, dictionaries, glossaries, and thesauruses to understand and choose precise words.",
    example: "In 'The tiny seedling was fragile, so Mia carried it carefully,' what does fragile most likely mean?",
    solution: ["Use the clue carried it carefully.", "Something handled carefully may break easily.", "Fragile means easily broken or delicate."],
    miniQuiz: "Use context clues to define the word enormous in a sentence of your own."
  },
  {
    unit: "3.5 Language",
    title: "Sentences, parts of speech, capitalization, punctuation, and dialogue",
    standard: "3.5.R.1-2 and 3.5.W.1-8: Recognize simple and compound sentences; identify nouns, verbs, subjects, predicates, adjectives, pronouns, prepositional phrases, conjunctions, and adverbs; write clear sentence types; and use capitalization, punctuation, apostrophes, commas, colons, and quotation marks correctly.",
    explanation: "Build correct sentences, identify how words work in a sentence, and use punctuation and capitalization to make writing clear.",
    example: "Fix the sentence: maya said i cant wait for the field trip",
    solution: ["Capitalize the name Maya and the word I.", "Use quotation marks for dialogue.", "Correct sentence: Maya said, \"I can't wait for the field trip.\""],
    miniQuiz: "Write one compound sentence using a comma and a coordinating conjunction."
  },
  {
    unit: "3.6 Research",
    title: "Research questions, text features, relevance, organization, and citations",
    standard: "3.6.R.1-3 and 3.6.W.1-3: Conduct research, use text features, determine relevance, generate research questions, organize information with modified citation details, and write short informative texts from a source.",
    explanation: "Ask research questions, use captions, headings, charts, and tables to understand information, decide what information matters, and organize source details.",
    example: "You are researching tornado safety. Which source detail is most relevant: a tornado shelter checklist or a story about a sunny picnic?",
    solution: ["The topic is tornado safety.", "Relevant information must help answer the research question.", "The tornado shelter checklist is most relevant."],
    miniQuiz: "Write three research questions about an animal and name one text feature that could help you answer them."
  },
  {
    unit: "3.7-3.8 Multimodal and Independent Literacy",
    title: "Using many kinds of content and independent reading/writing",
    standard: "3.7.R, 3.7.W.1, 3.8.R, 3.8.W: Locate and use alphabetic, aural, visual, spatial, and gestural content; combine two or more content types to communicate; read independently; and write independently for different purposes and audiences.",
    explanation: "Compare ideas across words, images, sounds, movement, and layout, then choose reading and writing modes that match your purpose and audience.",
    example: "A student reads an article and studies a map about Oklahoma rivers. How do the two sources work together?",
    solution: ["The article gives written facts and explanations.", "The map gives visual and spatial information.", "Together they help the reader understand location and meaning."],
    miniQuiz: "Plan a short project that combines writing with one visual or sound element."
  }
];

const grade4ElaLessons: Lesson[] = [
  {
    unit: "4.1 Listening and Speaking",
    title: "Purposeful listening, collaboration, and presentations",
    standard: "4.1.L.1, 4.1.L.2, 4.1.S.1, 4.1.S.2, 4.1.S.3: Listen actively, interpret a speaker's message, ask clarifying questions, collaborate respectfully, discuss reading and writing, and give organized informal presentations for an audience.",
    explanation: "Use discussion rules, listen for purpose and evidence, ask clarifying questions, share responsibility in groups, and organize information for clear presentations.",
    example: "A speaker argues that students should have more outdoor reading time. What question would best clarify the speaker's evidence?",
    solution: ["Identify the speaker's claim.", "Ask for support connected to that claim.", "A strong question is: What facts show outdoor reading time helps students learn?"],
    miniQuiz: "Write one discussion rule and one clarifying question for a presentation about school gardens."
  },
  {
    unit: "4.2 Reading and Writing Foundations",
    title: "Multisyllabic decoding, spelling, structural analysis, and fluency",
    standard: "4.2.PC, 4.2.PWS.1-2, 4.2.SE.1, 4.2.F.1-2: Form print and cursive correctly, decode unfamiliar multisyllabic words using syllable types and structural analysis, spell unfamiliar and multisyllabic words, expand sight vocabulary, and read grade-level text fluently.",
    explanation: "Use syllable patterns, letter-sound correspondences, roots, affixes, contractions, abbreviations, morphology, and context to read and spell harder words accurately.",
    example: "The word transportation has a prefix-like beginning, a root, and suffixes. How can structural analysis help?",
    solution: ["Look for meaningful chunks instead of guessing the whole word.", "Port means carry, and transport means carry across.", "The ending -ation turns the idea into a noun."],
    miniQuiz: "Break disagreement into meaningful parts and explain how the suffix changes the word."
  },
  {
    unit: "4.2 Reading and Writing Process",
    title: "Key details, genre comparison, summaries, and writing process",
    standard: "4.2.R.1-4 and 4.2.W.1-4: Determine key details that support main idea, compare fiction, poetry, and nonfiction, summarize and sequence stories, summarize informational facts, and use the writing process to draft, revise, edit, and publish.",
    explanation: "Support main ideas with key details, compare genre features, summarize stories and informational texts, and improve writing through recursive drafting and revision.",
    example: "A passage explains why wetlands protect animals and reduce flooding. Which details belong in a summary?",
    solution: ["Include the main idea about why wetlands matter.", "Add key facts about animal habitats and flood control.", "Leave out repeated or minor examples."],
    miniQuiz: "Compare one feature of fiction and one feature of nonfiction."
  },
  {
    unit: "4.3 Critical Reading and Writing",
    title: "Author's purpose, point of view, evidence, text structure, and essays",
    standard: "4.3.R.1-7 and 4.3.W.1-3: Determine author's purpose using key details, identify first- or third-person point of view, find textual evidence of literary elements and devices, answer inferential questions with evidence from one or more texts, distinguish fact from opinion, identify informational structures, and compose narrative, informative, and opinion writing.",
    explanation: "Use text evidence to explain purpose, point of view, literary elements, literary devices, inferences, fact and opinion, and informational structures such as cause/effect and problem/solution.",
    example: "A story says, 'I clutched my backpack and stepped into the dark hallway.' What point of view is used?",
    solution: ["Look for narrator pronouns.", "The narrator uses I.", "The story is told in first-person point of view."],
    miniQuiz: "Name the conflict and climax in a story you know."
  },
  {
    unit: "4.4 Vocabulary",
    title: "Word relationships, context, roots, references, and vivid vocabulary",
    standard: "4.4.R.1-5 and 4.4.W.1-2: Identify synonyms, antonyms, analogies, homophones, and homographs; use context clues and word parts including affixes and Latin roots; use reference materials; and apply precise, vivid vocabulary in writing.",
    explanation: "Use relationships among words, context clues, roots and affixes, and references to determine meanings and choose stronger words in writing.",
    example: "In 'The ancient oak towered above the young saplings,' what does ancient most likely mean?",
    solution: ["Use the contrast with young saplings.", "Ancient describes something very old.", "The sentence means the oak is very old."],
    miniQuiz: "Write an analogy using synonym or antonym relationships."
  },
  {
    unit: "4.5 Language",
    title: "Sentences, parts of speech, agreement, punctuation, titles, and dialogue",
    standard: "4.5.R.1-2 and 4.5.W.1-10: Recognize simple and compound sentences; identify irregular possessive nouns, verb tense, subject-verb agreement, comparative and superlative modifiers, phrases, pronouns, conjunctions, adverbs, and interjections; and use capitalization, punctuation, apostrophes, commas, colons, quotation marks, underlining, and italics correctly.",
    explanation: "Use grammar and punctuation to make writing clear, including subject-verb agreement, possessives, dialogue punctuation, lists after colons, and titles of works.",
    example: "Fix the sentence: the childrens books are on the table",
    solution: ["Children is an irregular plural noun.", "To show possession, add apostrophe s.", "Correct sentence: The children's books are on the table."],
    miniQuiz: "Write a sentence that uses a colon to introduce a list."
  },
  {
    unit: "4.6 Research",
    title: "Multiple-source research, relevance, citations, and short informative writing",
    standard: "4.6.R.1-3 and 4.6.W.1-3: Conduct research using multiple sources, use text features, determine relevance, generate viable research questions, organize information with modified citations, and write informative texts using details and quotations from two or more sources.",
    explanation: "Ask focused research questions, gather information from multiple sources, judge relevance, record author/title/year details, and use facts or quotations responsibly.",
    example: "You are researching Oklahoma weather. Which source is more relevant: a chart of average rainfall or a menu from a restaurant?",
    solution: ["The research topic is weather.", "Relevant information helps answer questions about weather.", "The rainfall chart is more relevant."],
    miniQuiz: "Write a research question that could be answered using two different sources."
  },
  {
    unit: "4.7-4.8 Multimodal and Independent Literacy",
    title: "Comparing perspectives and choosing independent reading and writing",
    standard: "4.7.R, 4.7.W, 4.8.R, 4.8.W: Use alphabetic, aural, visual, spatial, and gestural content to compare and contrast perspectives; combine two or more content types to communicate; and read and write independently for different purposes, genres, audiences, and lengths of time.",
    explanation: "Compare perspectives across words, images, sound, layout, and movement, then choose independent reading and writing modes that fit your purpose and audience.",
    example: "An article and a photo essay both describe a community cleanup. How could they show different perspectives?",
    solution: ["The article may explain facts and reasons.", "The photo essay may show emotions, people, and setting visually.", "Comparing both helps readers understand the topic more fully."],
    miniQuiz: "Plan a project that uses writing plus one visual or sound element to explain a topic."
  }
];

const grade5ElaLessons: Lesson[] = [
  {
    unit: "5.1 Listening and Speaking",
    title: "Listening for verbal and nonverbal cues",
    standard: "5.1.L.1-2 and 5.1.S.1-3: Listen actively using discussion rules with awareness of verbal and nonverbal cues, clarify a speaker's purpose, collaborate respectfully, discuss reading and writing, and give formal and informal presentations for an audience.",
    explanation: "In Grade 5, strong communication means noticing both what speakers say and how they say it, including tone, gestures, facial expressions, and organization.",
    example: "A speaker says a school garden matters while pointing to a chart of cafeteria waste. What should an active listener notice?",
    solution: ["Listen to the claim about the garden.", "Notice the nonverbal cue: pointing to the chart.", "Ask how the chart supports the speaker's purpose."],
    miniQuiz: "Write one question that clarifies a speaker's purpose and one nonverbal cue you might notice."
  },
  {
    unit: "5.2 Reading and Writing Foundations",
    title: "Advanced spelling, structural analysis, and fluency",
    standard: "5.2.PC, 5.2.SE.1, 5.2.F.1-2: Form words in print and cursive, spell unfamiliar and multisyllabic words using syllable patterns and structural analysis, expand sight vocabulary, and read grade-level text fluently with expression.",
    explanation: "Use syllable patterns, roots, affixes, contractions, abbreviations, and spelling rules to spell unfamiliar words and read with automaticity and expression.",
    example: "How does structural analysis help spell the word miscommunication?",
    solution: ["Break it into parts: mis + communicat + ion.", "Mis- means wrongly or badly.", "Recognizing parts helps spell the full multisyllabic word."],
    miniQuiz: "Break unbelievable into prefix, base/root, and suffix."
  },
  {
    unit: "5.2 Reading and Writing Process",
    title: "Main idea support, genre details, summaries, and multi-paragraph writing",
    standard: "5.2.R.1-4 and 5.2.W.1-4: Explain how details support main idea, identify genre details, summarize and sequence stories and informational texts, and use a recursive process to draft, revise, edit, and publish multi-paragraph writing.",
    explanation: "Explain why details matter, not just what they are. Use the writing process to build organized multi-paragraph narrative, informative, and opinion drafts.",
    example: "A text says exercise improves sleep, strengthens muscles, and helps focus. How do those details support the main idea?",
    solution: ["The main idea is that exercise benefits health.", "Each detail names a specific benefit.", "Together, the details explain and prove the main idea."],
    miniQuiz: "Write a main idea and explain how two details support it."
  },
  {
    unit: "5.3 Critical Reading and Writing",
    title: "Purpose, point of view, theme, text structures, and evidence-based writing",
    standard: "5.3.R.1-7 and 5.3.W.1-3: Determine author's purpose and whether it was achieved, analyze first- and third-person limited or omniscient point of view, explain how literary elements and devices contribute to meaning, support inferences with evidence from one or more texts, distinguish fact from opinion, identify informational structures, and compose narrative, informative, and opinion writing.",
    explanation: "Use evidence to analyze deeper meaning, including theme, conflict, characterization, point of view, and how devices such as imagery or metaphor affect the text.",
    example: "A narrator tells only what one character thinks and feels, using she and her. What point of view is this?",
    solution: ["The narrator uses third-person pronouns.", "The narrator only reveals one character's thoughts.", "This is third-person limited point of view."],
    miniQuiz: "Explain how a story's conflict can help reveal its theme."
  },
  {
    unit: "5.4 Vocabulary",
    title: "Word relationships, roots, context, references, and precise language",
    standard: "5.4.R.1-5 and 5.4.W.1-2: Identify synonyms, antonyms, analogies, homophones, and homographs; use context clues, affixes, Latin roots, stems, and reference materials; and use precise, vivid vocabulary in writing.",
    explanation: "Use word relationships and word parts to determine meaning, then choose exact, vivid vocabulary that matches the audience, purpose, and mode.",
    example: "In the word inspect, the Latin root spect means look. What does inspect mean?",
    solution: ["Use the root spect = look.", "In- can mean into or closely in this word.", "Inspect means to look at closely."],
    miniQuiz: "Use the root port to explain the meaning of export or portable."
  },
  {
    unit: "5.5 Language",
    title: "Complex sentences, clauses, grammar shifts, punctuation, and semicolons",
    standard: "5.5.R.1-2 and 5.5.W.1-11: Recognize and write simple, compound, and complex sentences; explain parts of speech and their impact on meaning; correct run-ons, agreement errors, verb tense shifts, and pronoun shifts; and use capitalization, end marks, commonly confused words, commas, colons, quotation marks, italics, and semicolons correctly.",
    explanation: "Grade 5 language work includes independent and dependent clauses, complex sentences, semicolons in compound sentences, and correct forms of its/it's, your/you're, and their/there/they're.",
    example: "Fix the run-on: The storm ended the team returned to the field.",
    solution: ["The sentence has two independent clauses.", "A semicolon can join closely related independent clauses.", "Correct: The storm ended; the team returned to the field."],
    miniQuiz: "Write one complex sentence beginning with although."
  },
  {
    unit: "5.6 Research",
    title: "Reliable research and multiple-source informative writing",
    standard: "5.6.R.1-3 and 5.6.W.1-3: Conduct research using multiple sources, analyze text features and informational structure, determine relevance and reliability, formulate research questions, organize information with modified citations, and write informative texts using key details and quotations from multiple sources.",
    explanation: "Evaluate whether sources are relevant and reliable, use text features to understand structure, and combine information from multiple sources with citation details.",
    example: "Which source is more reliable for a report about weather patterns: a government weather website or an anonymous comment online?",
    solution: ["Reliable sources have clear authorship and expertise.", "A government weather website is more authoritative for weather data.", "The anonymous comment is less reliable."],
    miniQuiz: "Write a viable research question and name two source details you should record."
  },
  {
    unit: "5.7-5.8 Multimodal and Independent Literacy",
    title: "Analyzing multimodal effectiveness and independent literacy choices",
    standard: "5.7.R, 5.7.W, 5.8.R, 5.8.W: Analyze characteristics and effectiveness of alphabetic, aural, visual, spatial, and gestural content; create multimodal content for an intended audience; and read and write independently for different genres, purposes, audiences, and timeframes.",
    explanation: "Analyze how different modes affect meaning and create multimodal work that fits an audience. Choose independent reading and writing based on purpose and preference.",
    example: "A public service poster uses bold text, a warning symbol, and a short slogan. Why might that be effective?",
    solution: ["Bold text catches attention.", "The symbol communicates quickly.", "The short slogan is easy to remember for the intended audience."],
    miniQuiz: "Design a multimodal project for younger students and explain why your choices fit them."
  }
];

const grade6ElaLessons: Lesson[] = [
  {
    unit: "6.1 Listening and Speaking",
    title: "Socially aware listening and audience-focused presentations",
    standard: "6.1.L.1-2 and 6.1.S.1-3: Listen actively using discussion rules, recognize verbal and nonverbal cues, maintain social awareness, clarify a speaker's purpose, collaborate respectfully, build on others' ideas, and present information in a form suited to the audience.",
    explanation: "Grade 6 communication asks you to notice tone, gestures, facial expressions, and group expectations while responding in a way that supports the conversation.",
    example: "A classmate quietly says they disagree and looks unsure. What is a socially aware response?",
    solution: ["Notice the verbal message and nonverbal cue.", "Invite the classmate to explain without embarrassing them.", "A strong response is: Can you tell us more about your concern?"],
    miniQuiz: "Write one response that builds on a classmate's idea during a discussion."
  },
  {
    unit: "6.2 Reading and Writing Process",
    title: "Summaries, paraphrases, genre analysis, and recursive writing",
    standard: "6.2.R.1-3 and 6.2.W.1-4: Summarize alphabetic and multimodal texts including main idea, analyze genre details in fiction, poetry, and nonfiction, paraphrase paragraphs, and recursively prewrite, draft, revise, and publish for purpose and audience.",
    explanation: "Summaries include main idea and key details, while paraphrases restate a smaller section in your own words. Writing improves through repeated planning, drafting, revising, and publishing.",
    example: "A paragraph says plastic pollution harms oceans because animals mistake plastic for food. How could you paraphrase it?",
    solution: ["Keep the meaning.", "Use your own words.", "Possible paraphrase: Ocean animals can be hurt when they eat plastic because they think it is food."],
    miniQuiz: "Write a one-sentence summary and a paraphrase of the same paragraph."
  },
  {
    unit: "6.3 Critical Reading and Writing",
    title: "Perspective, theme, arguments, text structure, and evidence",
    standard: "6.3.R.1-8 and 6.3.W.1-3: Compare authors' purposes across perspectives, evaluate how perspective affects texts, analyze literary elements and devices, identify what impacts theme, categorize facts for or against an issue, analyze informational structures, support inferences with textual evidence, and compose narrative, informative, and argumentative writing.",
    explanation: "Use evidence to analyze how historical, cultural, ethnic, and global perspectives shape meaning, and organize claims and evidence logically in argumentative writing.",
    example: "Two authors write about the same migration. One focuses on danger; one focuses on hope. What should you compare?",
    solution: ["Identify each author's purpose and perspective.", "Compare the details each author emphasizes.", "Explain how those choices affect the reader's understanding."],
    miniQuiz: "Write a precise claim and one relevant piece of evidence for an argument about school start times."
  },
  {
    unit: "6.4 Vocabulary",
    title: "Connotation, denotation, analogies, roots, and word choice",
    standard: "6.4.R.1-4 and 6.4.W.1-2: Analyze synonyms, antonyms, and analogies; use context clues, connotation, denotation, and multiple meanings; use affixes and Latin roots; use references for meaning, syllabication, pronunciation, synonyms, antonyms, and parts of speech; and choose language for a specific effect.",
    explanation: "Denotation is a word's literal meaning. Connotation is the feeling or idea a word suggests. Writers choose words carefully to create tone and effect.",
    example: "Which word has a more positive connotation: curious or nosy?",
    solution: ["Both words can mean wanting to know.", "Curious sounds interested and eager to learn.", "Nosy sounds negative, like someone is interfering."],
    miniQuiz: "Choose between slim and scrawny for a positive description and explain why."
  },
  {
    unit: "6.5 Language",
    title: "Sentence types, pronouns, clauses, commas, colons, quotations, and semicolons",
    standard: "6.5.R.1-2 and 6.5.W.1-11: Recognize and write simple, compound, and complex sentences; explain parts of speech including reflexive pronouns, antecedents, singular they, and subordinating conjunctions; correct run-ons, agreement errors, tense shifts, and pronoun shifts; and use commas, colons, quotation marks, italics, and semicolons correctly.",
    explanation: "Use sentence variety and correct mechanics to make writing clearer, including commas after introductory elements, commas for direct address, colons before quotations, and semicolons in compound sentences.",
    example: "Fix the sentence: After the debate ended the judges met quietly.",
    solution: ["The introductory element is After the debate ended.", "Use a comma after an introductory element.", "Correct: After the debate ended, the judges met quietly."],
    miniQuiz: "Write a sentence that uses a colon to introduce a quotation from a source."
  },
  {
    unit: "6.6 Research",
    title: "Research questions, thesis statements, sources, citations, and plagiarism",
    standard: "6.6.R.1-3 and 6.6.W.1-4: Use viable research questions to gather information, record and organize information from primary and secondary sources, determine relevance and reliability, refine research questions, develop a clear thesis, quote findings with a consistent citation style, avoid plagiarism, and create short research papers or projects.",
    explanation: "Research at this level requires a focused question, a clear thesis, reliable sources, organized notes, and quoted evidence cited consistently.",
    example: "A student asks, 'Animals?' How could this become a viable research question?",
    solution: ["Narrow the topic.", "Make it answerable with sources.", "Better question: How do urban coyotes adapt to city environments?"],
    miniQuiz: "Write a thesis statement for a report about renewable energy."
  },
  {
    unit: "6.7-6.8 Multimodal and Independent Literacy",
    title: "Comparing multimodal effectiveness and independent literacy choices",
    standard: "6.7.R, 6.7.W, 6.8.R, 6.8.W: Compare and contrast the effectiveness of alphabetic, aural, visual, spatial, and gestural content from various perspectives; create multimodal content for an intended audience; and read and write independently across genres, purposes, audiences, and timeframes.",
    explanation: "Analyze how different modes communicate and whether they work for the intended audience. Choose independent reading and writing that fits your goals and expands your preferences.",
    example: "A podcast and infographic explain the same health topic. How might their effectiveness differ?",
    solution: ["A podcast uses voice, pacing, and sound.", "An infographic uses visuals, layout, and short text.", "The better choice depends on audience, purpose, and the kind of information."],
    miniQuiz: "Choose two modes for a project about internet safety and explain why they fit the audience."
  }
];

const grade7ElaLessons: Lesson[] = [
  {
    unit: "7.1 Listening and Speaking",
    title: "Compromise, evidence, and audience-aware presentations",
    standard: "7.1.L.1-2 and 7.1.S.1-3: Listen actively using discussion rules, recognize verbal and nonverbal messages, maintain social awareness, ask clarifying questions, compromise to accomplish a goal, build on others' ideas, and present with evidence suited to purpose, content, form, and audience.",
    explanation: "Grade 7 communication asks students to respond thoughtfully to verbal and nonverbal messages, compromise during collaboration, and support presentations with evidence.",
    example: "Two group members disagree about a project format. What response shows compromise?",
    solution: ["Acknowledge both ideas respectfully.", "Focus on the shared goal.", "Suggest combining strengths, such as using a slideshow with one short live demonstration."],
    miniQuiz: "Write a presentation claim and one piece of evidence that would support it."
  },
  {
    unit: "7.2 Reading and Writing Process",
    title: "Cross-text summaries, paraphrasing, coherence, and editing",
    standard: "7.2.R.1-3 and 7.2.W.1-5: Summarize alphabetic and multimodal texts within and between texts, analyze genre details, paraphrase short passages, and recursively prewrite, draft, revise for purpose, audience, organization, coherence, and point of view, edit grammar and mechanics, and publish for authentic audiences.",
    explanation: "Summaries can connect ideas across multiple texts. Revision focuses on coherence, consistent point of view, and whether ideas are organized for the intended audience.",
    example: "Two articles explain why sleep matters. What should a cross-text summary include?",
    solution: ["State the shared main idea.", "Include key details from both texts.", "Show how the texts connect or differ."],
    miniQuiz: "Paraphrase a short passage without copying its sentence structure."
  },
  {
    unit: "7.3 Critical Reading and Writing",
    title: "Perspective, interpretation, mood, verbal irony, claims, and formal style",
    standard: "7.3.R.1-8 and 7.3.W.1-3: Compare methods authors use to achieve purposes across perspectives, evaluate perspective, analyze literary elements and devices including second person and verbal irony, identify elements and devices that affect theme and mood, distinguish factual claims from opinions, analyze informational structures, support inferences with evidence, and compose narrative, informative, and argumentative writing with formal style.",
    explanation: "Analyze how authors shape interpretation through perspective, structure, literary elements, devices, and evidence. Writing should use precise claims, credible evidence, logical organization, and a formal style when appropriate.",
    example: "A character says, 'Wonderful, another surprise quiz,' after groaning. What device is used?",
    solution: ["The literal words sound positive.", "The context shows the character means the opposite.", "This is verbal irony."],
    miniQuiz: "Explain how imagery can affect the mood of a scene."
  },
  {
    unit: "7.4 Vocabulary",
    title: "Greek roots, connotation, denotation, analogies, and effect",
    standard: "7.4.R.1-4 and 7.4.W.1-2: Analyze synonyms, antonyms, and analogies; use context, connotation, denotation, and multiple meanings; use affixes, Greek roots, and stems; use references for meaning and word information; and select language to create a specific effect.",
    explanation: "Use Greek roots and word relationships to understand complex vocabulary, and choose words based on both literal meaning and emotional effect.",
    example: "The Greek root bio means life. What does biography mean?",
    solution: ["Bio means life.", "Graphy relates to writing.", "A biography is writing about a person's life."],
    miniQuiz: "Use the Greek root photo to explain the word photosynthesis or photograph."
  },
  {
    unit: "7.5 Language",
    title: "Compound-complex sentences, gerunds, pronouns, conjunctions, and punctuation",
    standard: "7.5.R.1-2 and 7.5.W.1-11: Recognize and write simple, compound, complex, and compound-complex sentences; explain parts of speech including gerunds, coordinate and cumulative adjectives, demonstrative and vague pronouns, singular they, correlative conjunctions, adverbs, and interjections; correct run-ons, agreement errors, tense shifts, and vague pronouns; and use commas, colons, quotation marks, italics, and semicolons correctly.",
    explanation: "Sentence variety should improve clarity and rhythm. Grade 7 language also focuses on avoiding vague pronouns and using semicolons in compound and compound-complex sentences.",
    example: "Fix the vague pronoun: When Lena handed Ava the notebook, she smiled.",
    solution: ["The pronoun she could refer to Lena or Ava.", "Replace the vague pronoun with a noun.", "Clear version: When Lena handed Ava the notebook, Ava smiled."],
    miniQuiz: "Write a compound-complex sentence using because and a semicolon."
  },
  {
    unit: "7.6 Research",
    title: "Claims, evidence, validity, ethical sources, citations, and research projects",
    standard: "7.6.R.1-3 and 7.6.W.1-4: Find and comprehend claims and evidence using viable research questions, organize primary and secondary sources ethically and legally, determine relevance, reliability, and validity, refine questions, develop a thesis, quote and summarize findings using a citation style, avoid plagiarism, and create research papers or projects across short and extended timeframes.",
    explanation: "Research must evaluate not only whether information is relevant and reliable, but whether it is valid: accurate, logical, and supported by evidence.",
    example: "A source makes a claim but gives no evidence. What concern should a researcher have?",
    solution: ["A claim needs support.", "Without evidence, the source may not be valid.", "The researcher should verify the claim with stronger sources."],
    miniQuiz: "Write one thesis statement and one valid evidence source for a research topic."
  },
  {
    unit: "7.7-7.8 Multimodal and Independent Literacy",
    title: "Technique effectiveness and independent mode choices",
    standard: "7.7.R, 7.7.W, 7.8.R, 7.8.W: Compare and contrast techniques used in alphabetic, aural, visual, spatial, and gestural content; create multimodal content for an intended audience; and read and write independently while choosing and combining modes and genres for audience and purpose.",
    explanation: "Analyze specific techniques, such as music, camera angle, layout, image choice, pacing, captions, and gestures, and explain how well they serve the audience and purpose.",
    example: "A video uses dark lighting and slow music in a scene about danger. What technique is affecting meaning?",
    solution: ["Dark lighting is a visual technique.", "Slow music is an aural technique.", "Together, they create suspense or concern."],
    miniQuiz: "Choose two techniques for a public-service message and explain their effect."
  }
];

const grade8ElaLessons: Lesson[] = [
  {
    unit: "8.1 Listening and Speaking",
    title: "Purpose, perspective, compromise, and evidence-rich presentations",
    standard: "8.1.L.1-2 and 8.1.S.1-3: Listen actively using discussion rules, recognize verbal and nonverbal cues, clarify a speaker's purpose and perspective, compromise during collaboration, build on others' ideas, and present with textual and visual evidence suited to audience and purpose.",
    explanation: "Grade 8 communication adds perspective: listeners should ask not only what a speaker wants, but what viewpoint shapes the message.",
    example: "A speaker argues for later school start times and shows a sleep-study chart. What should a listener ask?",
    solution: ["Identify the speaker's purpose and perspective.", "Notice the visual evidence.", "Ask: How does this chart support your claim about student learning?"],
    miniQuiz: "Write one question that clarifies both a speaker's purpose and perspective."
  },
  {
    unit: "8.2 Reading and Writing Process",
    title: "Cross-text summaries, paraphrases, style, and publishing",
    standard: "8.2.R.1-3 and 8.2.W.1-5: Summarize alphabetic and multimodal texts about similar topics, analyze genre characteristics, paraphrase passages, and recursively prewrite, draft, revise for purpose, audience, organization, coherence, and style, edit, and publish.",
    explanation: "Summaries should connect similar topics across texts. Revision now includes style: word choice, sentence variety, tone, and consistency.",
    example: "Two texts discuss social media: one article and one infographic. What belongs in a combined summary?",
    solution: ["State the shared topic.", "Include key ideas from both the article and infographic.", "Avoid copying exact wording."],
    miniQuiz: "Paraphrase a claim from an article in your own words."
  },
  {
    unit: "8.3 Critical Reading and Writing",
    title: "Unreliable narrators, irony, tone, substantiated claims, and counterclaims",
    standard: "8.3.R.1-8 and 8.3.W.1-3: Analyze texts across perspectives, evaluate how perspective affects meaning, analyze literary elements including unreliable narrator, analyze devices including verbal and situational irony, identify elements and devices that affect theme, mood, and tone, evaluate whether claims are substantiated, analyze text structures, compare texts with evidence, and write narratives, informative texts, and arguments with counterclaims.",
    explanation: "Grade 8 critical reading asks whether evidence is strong enough, whether narrators can be trusted, and how authors create theme, mood, and tone.",
    example: "A narrator insists they are brave but repeatedly runs away and hides facts. What might readers suspect?",
    solution: ["Compare what the narrator says with what they do.", "Notice missing or contradictory details.", "The narrator may be unreliable."],
    miniQuiz: "Write a claim, counterclaim, and one piece of evidence for an argument."
  },
  {
    unit: "8.4 Vocabulary",
    title: "Complex word relationships, Greek roots, connotation, and rhetorical word choice",
    standard: "8.4.R.1-4 and 8.4.W.1-2: Analyze synonyms, antonyms, analogies, context clues, connotation, denotation, multiple meanings, affixes, Greek roots, stems, reference materials, and select language to create a specific effect.",
    explanation: "Use Greek roots and context to unpack complex words, then choose precise words based on their emotional effect and purpose.",
    example: "The Greek root chron means time. What does chronological mean?",
    solution: ["Chron means time.", "Chronological relates to time order.", "A chronological account tells events in time order."],
    miniQuiz: "Use the root tele to explain telephone, telescope, or telegraph."
  },
  {
    unit: "8.5 Language",
    title: "Voice, modifiers, verbals, formal style, commas, quotations, and semicolons",
    standard: "8.5.R.1-2 and 8.5.W.1-11: Recognize active and passive voice, misplaced and dangling modifiers, verbals, coordinate adjectives, vague pronouns, conjunctions, and other parts of speech; compose varied sentences; correct modifiers, vague pronouns, and second-person point of view in formal writing; and use commas, colons, quotation marks, italics, and semicolons correctly.",
    explanation: "Grade 8 grammar focuses on clarity: avoid misplaced or dangling modifiers, use active or passive voice intentionally, and avoid second person in formal writing.",
    example: "Fix the dangling modifier: Walking to school, the rain soaked Maya's backpack.",
    solution: ["The sentence makes it sound like the rain was walking.", "Name the person doing the action.", "Correct: Walking to school, Maya had her backpack soaked by the rain."],
    miniQuiz: "Rewrite a passive sentence in active voice."
  },
  {
    unit: "8.6 Research",
    title: "Defensible thesis, validity, ethical research, and citation",
    standard: "8.6.R.1-3 and 8.6.W.1-4: Find claims and evidence using viable research questions, organize primary and secondary sources ethically, determine relevance, reliability, and validity, refine questions, develop a clear defensible thesis, quote, paraphrase, and summarize with citation style to avoid plagiarism, and create research projects over short and extended periods.",
    explanation: "A defensible thesis can be argued and supported with valid evidence. Research should use ethical source handling and citation.",
    example: "Which thesis is defensible: 'Homework exists' or 'Homework should be limited because excessive homework can reduce sleep and family time'?",
    solution: ["A defensible thesis makes a claim someone could debate.", "It can be supported with evidence.", "The homework-limits thesis is defensible."],
    miniQuiz: "Write a defensible thesis and name one source that could provide valid evidence."
  },
  {
    unit: "8.7-8.8 Multimodal and Independent Literacy",
    title: "Rhetorical effects and purposeful multimodal composition",
    standard: "8.7.R, 8.7.W, 8.8.R, 8.8.W: Determine intended purposes of techniques used for rhetorical effects in multiple modes, create engaging multimodal content that intentionally addresses an audience and purpose, and read and write independently while choosing and combining modes and genres.",
    explanation: "Analyze how creators use techniques such as color, sound, camera angle, repetition, layout, and gesture to persuade, inform, or create emotion.",
    example: "A campaign poster uses red text, a warning icon, and the phrase 'Act now.' What is the rhetorical effect?",
    solution: ["Red and warning icons create urgency.", "Act now is a direct call to action.", "The techniques are meant to persuade quickly."],
    miniQuiz: "Choose two multimodal techniques for a safety message and explain their intended effect."
  }
];

const grade9ElaLessons: Lesson[] = [
  {
    unit: "9.1 Listening and Speaking",
    title: "Evaluating messages, disagreement, and evidence-based presentations",
    standard: "9.1.L.1-2 and 9.1.S.1-3: Listen actively with control of verbal and nonverbal cues, analyze and evaluate speakers' messages by clarifying purpose and perspective, collaborate with compromise and respectful disagreement, and conduct presentations in varied contexts using evidence and verbal/nonverbal cues.",
    explanation: "Grade 9 communication asks students to evaluate messages, not just understand them, while using respectful disagreement and purposeful presentation cues.",
    example: "A speaker uses a serious tone, eye contact, and statistics to argue for safer crosswalks. What should a listener evaluate?",
    solution: ["Identify the speaker's purpose and perspective.", "Evaluate whether the evidence supports the message.", "Consider how verbal and nonverbal cues strengthen the presentation."],
    miniQuiz: "Write one respectful disagreement sentence that still builds on another person's idea."
  },
  {
    unit: "9.2 Reading and Writing Process",
    title: "Complex summaries, genre characteristics, structure, tone, and publication",
    standard: "9.2.R.1-2 and 9.2.W.1-5: Summarize main ideas and paraphrase significant parts of complex texts, analyze genre characteristics in fiction, poetry, drama, and nonfiction, and recursively develop, organize, revise, edit, and publish drafts using structure, transitions, sentence variety, consistent tone, and point of view.",
    explanation: "High-school process work emphasizes structure and tone: writers choose organizational patterns and revise to improve coherence, meaning, and audience fit.",
    example: "A draft shifts from formal academic tone to casual jokes. What should revision focus on?",
    solution: ["Identify the intended audience and purpose.", "Revise word choice and sentence style for a consistent tone.", "Keep only details that support coherence and meaning."],
    miniQuiz: "Choose an organizational structure for an essay about causes of school stress and explain why."
  },
  {
    unit: "9.3 Critical Reading and Writing",
    title: "Perspective, archetypes, rhetorical appeals, fallacies, and blended writing",
    standard: "9.3.R.1-7 and 9.3.W.1-4: Analyze how historical, cultural, and global perspectives affect stylistic choices; evaluate authors' perspectives; evaluate literary elements and devices including archetypes and irony; evaluate argument validity through evidence types, substantiated claims, rhetorical appeals, bias, and logical fallacies; analyze informational structures and related texts; and compose narrative, informative, argumentative, and blended writing.",
    explanation: "Grade 9 critical reading moves into argument evaluation: identify ethos, logos, pathos, bias, fallacies, and evidence types while analyzing literature with textual evidence.",
    example: "An ad says, 'Everyone smart buys this product, so you should too.' What problem does the argument have?",
    solution: ["The claim relies on popularity and pressure.", "It does not provide relevant evidence.", "This is a logical fallacy, likely bandwagon appeal."],
    miniQuiz: "Identify ethos, logos, and pathos in a short advertisement or speech."
  },
  {
    unit: "9.4 Vocabulary",
    title: "Complex roots, multiple meanings, connotation, and purposeful diction",
    standard: "9.4.R.1-4 and 9.4.W.1-2: Analyze synonyms, antonyms, analogies, context clues, connotation, denotation, multiple meanings, affixes, Anglo-Saxon, Greek, and Latin roots, and select language to communicate complex ideas and create specific effects for purpose and audience.",
    explanation: "Use word origins and context to interpret complex vocabulary, then choose diction that shapes tone and communicates nuanced ideas.",
    example: "The Latin root cred means believe. What does credibility mean?",
    solution: ["Cred relates to belief or trust.", "Credibility is the quality of being believable or trustworthy.", "It matters when evaluating sources and arguments."],
    miniQuiz: "Use the root bene to explain beneficial or benevolent."
  },
  {
    unit: "9.5 Language",
    title: "Parallel structure, voice, phrases, clauses, modifiers, and advanced punctuation",
    standard: "9.5.R.1-2 and 9.5.W.1-11: Examine the effect of parallel structure and active/passive voice, recognize noun, verb, adjectival, and adverbial phrases, revise for voice and parallel structure, add clarity and style with phrases and clauses, correct misplaced and dangling modifiers, and use commas, colons, ellipses, brackets, italics, and semicolons correctly.",
    explanation: "Language choices create emphasis and rhythm. Parallel structure makes related ideas match, while active and passive voice shift focus.",
    example: "Fix the parallel structure: The club values honesty, responsibility, and being kind.",
    solution: ["The list should use matching noun forms.", "Honesty and responsibility are nouns.", "Correct: The club values honesty, responsibility, and kindness."],
    miniQuiz: "Rewrite a passive sentence in active voice and explain how the focus changes."
  },
  {
    unit: "9.6 Research",
    title: "Synthesis, validity, defensible thesis, integration, and varied research formats",
    standard: "9.6.R.1-3 and 9.6.W.1-4: Find information with viable research questions, synthesize relevant information from primary and secondary sources, evaluate relevance, reliability, and validity, refine questions, develop a defensible thesis, integrate quotes, paraphrases, and summaries with citation style, avoid plagiarism, and present research in longer and shorter formats for varied audiences.",
    explanation: "Synthesis means combining ideas from multiple sources into a new understanding. Integrated research uses quotes, paraphrases, and summaries smoothly and ethically.",
    example: "Two sources agree that sleep affects focus, but one adds data from a study. How can a writer synthesize them?",
    solution: ["State the shared idea.", "Use the study data to deepen the point.", "Explain how both sources support the thesis."],
    miniQuiz: "Write one sentence that integrates a quoted phrase into your own sentence."
  },
  {
    unit: "9.7-9.8 Multimodal and Independent Literacy",
    title: "Evaluating multimodal techniques and intentional mode choices",
    standard: "9.7.R, 9.7.W, 9.8.R, 9.8.W: Analyze and evaluate multimodal techniques and how they contribute to meaning, create engaging multimodal content for an audience and purpose, select texts for specific purposes, read independently for extended periods, and intentionally combine modes and genres in writing.",
    explanation: "Evaluate whether multimodal techniques actually help meaning, then intentionally combine modes and genres for a specific audience and purpose.",
    example: "A documentary uses archival footage, narrator voiceover, and dramatic music. What should you evaluate?",
    solution: ["Identify each technique.", "Ask how each technique shapes meaning or emotion.", "Judge whether the techniques fit the purpose and audience."],
    miniQuiz: "Plan a multimodal argument and explain why each mode helps your audience."
  }
];

const grade10ElaLessons: Lesson[] = [
  {
    unit: "10.1 Listening and Speaking",
    title: "Evaluate messages and present with controlled cues",
    standard: "10.1.L.1-2 and 10.1.S.1-3: Listen actively with control of verbal and nonverbal cues, analyze and evaluate speakers' messages by clarifying purpose and perspective, collaborate with compromise and respectful disagreement, and conduct presentations in varied contexts using evidence and verbal/nonverbal cues.",
    explanation: "Grade 10 communication expects students to evaluate how evidence, tone, body language, and perspective work together to shape a message.",
    example: "A speaker uses expert testimony and calm gestures to argue for a community policy. What should an evaluator consider?",
    solution: ["Identify the speaker's purpose and perspective.", "Judge whether the evidence is relevant and credible.", "Explain how verbal and nonverbal cues strengthen or weaken the message."],
    miniQuiz: "Write one evaluative question about a speaker's evidence and one about their perspective."
  },
  {
    unit: "10.2 Reading and Writing Process",
    title: "Complex text summary, structure, tone, and publication",
    standard: "10.2.R.1-2 and 10.2.W.1-5: Summarize main ideas and paraphrase significant parts of increasingly complex texts, analyze genre characteristics, and recursively develop, organize, revise, edit, and publish drafts using purposeful structure, transitions, sentence variety, tone, and point of view.",
    explanation: "Summaries and paraphrases should preserve complex meaning. Writing should use a structure such as cause/effect, compare/contrast, or problem/solution to strengthen coherence.",
    example: "A draft uses problem/solution structure but lists solutions before explaining the problem. What revision would improve organization?",
    solution: ["Identify the intended structure.", "Explain the problem first.", "Then present solutions in a logical sequence with transitions."],
    miniQuiz: "Choose a structure for a technical explanation and justify why it fits."
  },
  {
    unit: "10.3 Critical Reading and Writing",
    title: "Style, argument validity, literary impact, and blended writing",
    standard: "10.3.R.1-7 and 10.3.W.1-4: Analyze how historical, cultural, and global perspectives affect stylistic choices; evaluate authors' perspectives; evaluate how literary elements and devices affect theme, mood, and tone; evaluate argument validity using evidence types, substantiation, rhetorical appeals, bias, and fallacies; analyze informational structures and related texts; and compose narrative, informative, argumentative, and blended writing.",
    explanation: "Grade 10 analysis connects style and perspective to meaning while evaluating whether arguments are valid, balanced, and supported by the strongest evidence.",
    example: "A review uses emotional stories but no data to claim a policy always works. What should be evaluated?",
    solution: ["Identify the evidence type as anecdotal.", "Check whether the claim is fully substantiated.", "Consider whether the argument overrelies on pathos."],
    miniQuiz: "Explain why a balanced argument should acknowledge counterclaims."
  },
  {
    unit: "10.4 Vocabulary",
    title: "Etymology, connotation, roots, and precise effect",
    standard: "10.4.R.1-4 and 10.4.W.1-2: Analyze synonyms, antonyms, analogies, context, connotation, denotation, multiple meanings, affixes, Anglo-Saxon, Greek, and Latin roots, stems, and use resources for meaning, pronunciation, part of speech, and etymology; select language for purpose and audience.",
    explanation: "Use etymology and word relationships to understand complex vocabulary, then choose words whose connotations create the intended tone and effect.",
    example: "The Latin root aud means hear. What does inaudible mean?",
    solution: ["Aud relates to hearing.", "The prefix in- can mean not.", "Inaudible means not able to be heard."],
    miniQuiz: "Use etymology or roots to explain the meaning of credible, audience, or manufacture."
  },
  {
    unit: "10.5 Language",
    title: "Parallelism, voice, phrases, clauses, and intentional usage",
    standard: "10.5.R.1-2 and 10.5.W.1-11: Analyze the effect of parallel structure, active/passive voice, phrases, and clauses; revise for voice and parallel structure; add clarity, variety, and style; use Standard American English to convey meaning; intentionally depart from standard usage for effect; and use capitalization, punctuation, commas, colons, ellipses, brackets, italics, and semicolons correctly.",
    explanation: "Language choices should be intentional. Parallelism, voice, phrases, clauses, and even purposeful departures from standard usage can create emphasis, rhythm, tone, or character voice.",
    example: "Revise for parallelism: The proposal is clear, affordable, and it can be implemented quickly.",
    solution: ["The list mixes adjectives with a clause.", "Make the list grammatically matching.", "Correct: The proposal is clear, affordable, and practical."],
    miniQuiz: "Explain when passive voice might be more effective than active voice."
  },
  {
    unit: "10.6 Research",
    title: "Synthesis, defensible thesis, integration, and audience-specific research",
    standard: "10.6.R.1-3 and 10.6.W.1-4: Find information with viable research questions, synthesize relevant primary and secondary sources ethically, evaluate relevance, reliability, and validity, refine questions, develop defensible thesis statements, integrate quotes, paraphrases, and summaries with citation style, avoid plagiarism, and present research in long and short formats for varied audiences.",
    explanation: "Grade 10 research requires synthesis: combine multiple credible sources into a clear argument or explanation, using integrated evidence for the intended audience.",
    example: "How can a writer synthesize a study, an interview, and a historical article?",
    solution: ["Identify what each source contributes.", "Group related ideas instead of summarizing one source at a time.", "Explain how the sources together support the thesis."],
    miniQuiz: "Write a thesis and name two source types that could support it."
  },
  {
    unit: "10.7-10.8 Multimodal and Independent Literacy",
    title: "Evaluate multimodal meaning and intentional genre choices",
    standard: "10.7.R, 10.7.W, 10.8.R, 10.8.W: Analyze and evaluate multimodal techniques and their contribution to meaning, create engaging multimodal content for audience and purpose, select texts for specific purposes, read independently for extended periods, and intentionally combine modes and genres in writing.",
    explanation: "Students should evaluate whether multimodal techniques such as image, sound, layout, gesture, and pacing actually advance the message for the intended audience.",
    example: "A website uses interactive graphs and short videos to explain climate data. What should a reader evaluate?",
    solution: ["Identify the techniques used.", "Decide how each technique contributes to understanding.", "Evaluate whether the choices fit the audience and purpose."],
    miniQuiz: "Plan a multimodal research presentation and explain why each mode belongs."
  }
];

const grade11ElaLessons: Lesson[] = [
  {
    unit: "11.1 Listening and Speaking",
    title: "Evaluate messages, perspective, and evidence in discussion",
    standard: "11.1.L.1-2 and 11.1.S.1-3: Listen actively with control of verbal and nonverbal cues, analyze and evaluate messages by clarifying purpose and perspective, collaborate through compromise and respectful disagreement, and present in varied contexts with evidence and verbal/nonverbal cues.",
    explanation: "Grade 11 students evaluate not only what a speaker says, but how perspective, evidence, tone, and nonverbal choices affect the message.",
    example: "Two speakers support the same policy, but one uses statistics and the other uses personal stories. What should listeners compare?",
    solution: ["Identify each speaker's purpose and perspective.", "Compare the types of evidence used.", "Evaluate which evidence best supports the message for the audience."],
    miniQuiz: "Write one clarifying question about a speaker's assumptions."
  },
  {
    unit: "11.2 Reading and Writing Process",
    title: "Complex summaries, paraphrases, structure, coherence, and publication",
    standard: "11.2.R.1-2 and 11.2.W.1-5: Summarize main ideas and paraphrase significant parts of increasingly complex texts, analyze genre characteristics, and recursively develop, organize, revise, edit, and publish drafts with purposeful structures, transitions, sentence variety, tone, and point of view.",
    explanation: "Advanced reading and writing process work requires preserving complex meaning while shaping structure, tone, and organization for an authentic audience.",
    example: "A draft compares two arguments but discusses one fully before mentioning the other. What structure might improve clarity?",
    solution: ["Identify that the purpose is comparison.", "Use point-by-point compare/contrast organization.", "Add transitions that show similarities and differences."],
    miniQuiz: "Paraphrase a complex claim without copying its wording or structure."
  },
  {
    unit: "11.3 Critical Reading and Writing",
    title: "Assumptions, reasoning, viewpoints, style, and balanced arguments",
    standard: "11.3.R.1-7 and 11.3.W.1-4: Analyze how historical, cultural, and global perspectives affect stylistic choices; evaluate authors' perspectives; evaluate literary elements and devices using evidence; evaluate how authors on the same issue reach different conclusions due to assumptions, evidence, reasoning, and viewpoints; analyze text structures and related texts; and compose narrative, informative, argumentative, and blended writing.",
    explanation: "Grade 11 critical reading asks why authors reach different conclusions: examine assumptions, selected evidence, reasoning quality, bias, appeals, and fallacies.",
    example: "Two authors examine online learning. One assumes flexibility matters most; the other assumes daily face-to-face interaction matters most. Why do they reach different conclusions?",
    solution: ["Identify each author's assumption.", "Compare the evidence each author values.", "Explain how assumptions and evidence shape conclusions."],
    miniQuiz: "Write a claim, counterclaim, and response that uses credible evidence."
  },
  {
    unit: "11.4 Vocabulary",
    title: "Roots, etymology, connotation, denotation, and rhetorical diction",
    standard: "11.4.R.1-4 and 11.4.W.1-2: Analyze synonyms, antonyms, analogies, context, connotation, denotation, multiple meanings, affixes, Anglo-Saxon, Greek, and Latin roots, stems, and reference information including etymology; choose language to communicate complex ideas and create a specific effect.",
    explanation: "Analyze how word origins, meanings, and connotations shape tone, precision, and rhetorical effect in complex texts.",
    example: "The root ver means truth. What does verifiable mean?",
    solution: ["Ver relates to truth.", "The suffix -able means capable of.", "Verifiable means capable of being proven true."],
    miniQuiz: "Use etymology to explain credible, manuscript, or contradiction."
  },
  {
    unit: "11.5 Language",
    title: "Syntax, changing conventions, intentional style, colons, dashes, and citations",
    standard: "11.5.R.1-2 and 11.5.W.1-10: Apply knowledge of syntax, parallel structure, active/passive voice, phrases, and clauses to analyze texts while understanding conventions change over time; add clarity, variety, and style; intentionally break rules for effect when appropriate; and use capitalization, punctuation, commas, colons, dashes, ellipses, brackets, italics, and semicolons correctly.",
    explanation: "Syntax affects meaning and style. Grade 11 writers can use conventions skillfully, and sometimes depart from them intentionally for a clear rhetorical or creative effect.",
    example: "What is the effect of the dash in: The answer was obvious - no one had checked the source.",
    solution: ["The dash reveals or emphasizes added information.", "It creates a pause before the explanation.", "The effect is emphasis and surprise."],
    miniQuiz: "Write one sentence using a dash to reveal important information."
  },
  {
    unit: "11.6 Research",
    title: "Research synthesis, defensible thesis, source validity, and evidence integration",
    standard: "11.6.R.1-3 and 11.6.W.1-4: Find information using viable research questions, synthesize relevant primary and secondary sources ethically, evaluate relevance, reliability, and validity, refine questions, develop defensible thesis statements, integrate quotes, paraphrases, and summaries with consistent citation, avoid plagiarism, and present research in long and short formats for varied audiences.",
    explanation: "Research should synthesize sources into a defensible argument or explanation, evaluate source validity, and integrate evidence smoothly for different audiences.",
    example: "A source is relevant but funded by a group that benefits from its conclusion. What should a researcher do?",
    solution: ["Recognize possible bias.", "Check whether evidence is valid and corroborated.", "Use additional reliable sources before relying on it."],
    miniQuiz: "Write one integrated evidence sentence using a signal phrase."
  },
  {
    unit: "11.7-11.8 Multimodal and Independent Literacy",
    title: "Multimodal evidence, reasoning, and intentional independent literacy",
    standard: "11.7.R, 11.7.W, 11.8.R, 11.8.W: Analyze and evaluate multimodal techniques and how they contribute to meaning, create engaging multimodal content that enhances understanding of findings, reasoning, and evidence for diverse audiences, select texts for specific purposes, read independently for extended periods, and intentionally combine modes and genres.",
    explanation: "Grade 11 multimodal work should clarify findings and reasoning, not merely decorate. Mode choices should help diverse audiences understand evidence.",
    example: "A research presentation uses a timeline, source quotations, and a short narration. What should be evaluated?",
    solution: ["Determine what each mode contributes.", "Check whether the modes clarify evidence and reasoning.", "Evaluate whether the presentation fits diverse audiences."],
    miniQuiz: "Choose two modes that would help explain research findings and justify each choice."
  }
];

const grade12ElaLessons: Lesson[] = [
  {
    unit: "12.1 Listening and Speaking",
    title: "Evaluate purpose, perspective, evidence, and delivery",
    standard: "12.1.L.1-2 and 12.1.S.1-3: Listen actively with control of verbal and nonverbal cues, analyze and evaluate speakers' messages by clarifying purpose and perspective, collaborate through compromise and respectful disagreement, and present formally and informally with evidence and effective cues.",
    explanation: "Grade 12 students evaluate the full message: what is claimed, why it is being said, whose perspective shapes it, what evidence supports it, and how delivery affects the audience.",
    example: "A speaker argues for changing school start times using sleep research, student testimony, and calm pacing. What should a listener evaluate?",
    solution: ["Identify the speaker's purpose and perspective.", "Evaluate whether the evidence is credible and enough.", "Explain how tone, pacing, and nonverbal cues support or weaken the message."],
    miniQuiz: "Write one question that would clarify a speaker's assumptions or purpose."
  },
  {
    unit: "12.2 Reading and Writing Process",
    title: "Advanced summaries, paraphrases, genre choices, and publication",
    standard: "12.2.R.1-2 and 12.2.W.1-5: Summarize and paraphrase increasingly complex texts, analyze genre characteristics, and recursively prewrite, draft, revise, edit, and publish with purposeful organization, transitions, sentence variety, tone, and point of view.",
    explanation: "Senior-level reading and writing process work requires controlling structure and voice while preserving complex ideas accurately for an authentic audience.",
    example: "A writer summarizes a dense article but leaves out the author's central qualification. What is the problem?",
    solution: ["A summary must include the main idea and important limits or qualifications.", "Leaving out the qualification changes the meaning.", "Revise by adding the author's central condition or exception."],
    miniQuiz: "Paraphrase a complex claim while keeping its qualification or limitation."
  },
  {
    unit: "12.3 Critical Reading and Writing",
    title: "Evaluate style, assumptions, rhetoric, fallacies, and complex writing",
    standard: "12.3.R.1-7 and 12.3.W.1-4: Analyze historical, cultural, and global perspectives; evaluate author perspective, literary elements, literary devices, assumptions, evidence, reasoning, viewpoints, rhetorical appeals, bias, logical fallacies, text structures, and related texts; compose narrative, informative, argumentative, and blended writing.",
    explanation: "Grade 12 critical reading emphasizes why texts mean what they mean and why arguments succeed or fail: perspective, structure, evidence, assumptions, reasoning, bias, and style all matter.",
    example: "Two authors use the same statistic, but one argues it proves success while the other argues it reveals inequality. What should be analyzed?",
    solution: ["Identify each author's assumption.", "Compare how each author interprets the evidence.", "Evaluate the reasoning that connects the statistic to the conclusion."],
    miniQuiz: "Name one rhetorical appeal and one logical fallacy that could appear in an argument."
  },
  {
    unit: "12.4 Vocabulary",
    title: "Advanced word relationships, etymology, connotation, and precision",
    standard: "12.4.R.1-4 and 12.4.W.1-2: Analyze synonyms, antonyms, analogies, context, connotation, denotation, multiple meanings, affixes, Anglo-Saxon, Greek, and Latin roots and stems, and reference information including etymology; choose precise language to communicate complex ideas and create effects.",
    explanation: "Vocabulary at this level is about precision and effect: students use word relationships, roots, etymology, and connotation to understand and shape meaning.",
    example: "A writer changes the word curious to intrusive. How does the effect change?",
    solution: ["Curious can sound neutral or positive.", "Intrusive has a negative connotation.", "The new word makes the person's behavior seem inappropriate."],
    miniQuiz: "Explain how connotation changes the effect of confident, arrogant, and assertive."
  },
  {
    unit: "12.5 Language",
    title: "Syntax, phrase effects, style, conventions, and intentional departures",
    standard: "12.5.R.1-2 and 12.5.W.1-10: Apply syntax knowledge, including parallel structure, active and passive voice, phrases, clauses, and changing conventions; use language for clarity, variety, style, and effect; demonstrate Standard American English and purposeful departures; use capitalization, punctuation, commas, colons, dashes, ellipses, brackets, italics, and semicolons correctly.",
    explanation: "Grade 12 writers should control syntax and mechanics deliberately, including knowing when a convention supports clarity and when a purposeful break creates a specific effect.",
    example: "Which is stronger for emphasis: The committee rejected the proposal or The proposal was rejected by the committee?",
    solution: ["The active sentence emphasizes the committee's action.", "The passive sentence emphasizes the proposal.", "Choose based on what the sentence needs to highlight."],
    miniQuiz: "Write a sentence using parallel structure and a semicolon correctly."
  },
  {
    unit: "12.6 Research",
    title: "Independent research, source validity, synthesis, and citation",
    standard: "12.6.R.1-3 and 12.6.W.1-4: Use viable research questions, synthesize primary and secondary sources ethically, evaluate relevance, reliability, and validity, refine research questions, develop defensible thesis statements, integrate quotations, paraphrases, and summaries with consistent citation, avoid plagiarism, and present research for varied audiences.",
    explanation: "Senior research should move beyond collecting facts. Students refine questions, test source quality, synthesize evidence, and present a defensible conclusion for an audience.",
    example: "A source is current and relevant, but its author has no expertise and cites no evidence. How should it be treated?",
    solution: ["Recognize that relevance is not enough.", "Question the source's reliability and validity.", "Use stronger corroborating sources before relying on it."],
    miniQuiz: "Write a defensible thesis that could be supported by at least three credible sources."
  },
  {
    unit: "12.7-12.8 Multimodal and Independent Literacy",
    title: "Evaluate multimodal meaning and choose independent literacy paths",
    standard: "12.7.R, 12.7.W, 12.8.R, 12.8.W: Analyze and evaluate multimodal techniques and how they contribute to meaning, create engaging multimodal content that enhances findings, reasoning, and evidence for diverse audiences, select texts for specific purposes, read independently for extended periods, and intentionally combine modes and genres.",
    explanation: "Grade 12 students should choose texts, modes, and genres intentionally. Multimodal choices should make reasoning and evidence clearer for real audiences.",
    example: "A presentation combines interview clips, a data chart, and narration. What makes it effective?",
    solution: ["Each mode should add meaning.", "The media should support findings and reasoning.", "The whole presentation should fit its audience and purpose."],
    miniQuiz: "Choose three modes for presenting research and explain what each one contributes."
  }
];

const grade3MathQuestions: Question[] = [
  {
    id: "g3-math-3n1-1",
    grade: 3,
    subject: "Mathematics",
    prompt: "3.N.1: Which number is greater than 47,509 but less than 47,590?",
    answers: ["47,095", "47,560", "47,905", "47,599"],
    correctIndex: 1,
    explanation: "47,560 is greater than 47,509 and less than 47,590. The other choices are either too small or too large."
  },
  {
    id: "g3-math-3n1-2",
    grade: 3,
    subject: "Mathematics",
    prompt: "3.N.1: Which expanded form equals 82,406?",
    answers: ["80,000 + 2,000 + 400 + 60", "80,000 + 2,000 + 400 + 6", "8,000 + 2,000 + 400 + 6", "80,000 + 20,000 + 400 + 6"],
    correctIndex: 1,
    explanation: "82,406 has 8 ten-thousands, 2 thousands, 4 hundreds, 0 tens, and 6 ones."
  },
  {
    id: "g3-math-3n2-1",
    grade: 3,
    subject: "Mathematics",
    prompt: "3.N.2: A school collected 248 cans on Monday and 375 cans on Tuesday. It used 189 cans for a project. How many cans were left?",
    answers: ["434", "623", "812", "436"],
    correctIndex: 0,
    explanation: "First add 248 + 375 = 623. Then subtract 189. 623 - 189 = 434."
  },
  {
    id: "g3-math-3n2-2",
    grade: 3,
    subject: "Mathematics",
    prompt: "3.N.2: There are 7 boxes with 8 markers in each box. A teacher gives away 19 markers. How many markers are left?",
    answers: ["37", "45", "56", "75"],
    correctIndex: 0,
    explanation: "7 x 8 = 56 markers. Then 56 - 19 = 37 markers left."
  },
  {
    id: "g3-math-3n3-1",
    grade: 3,
    subject: "Mathematics",
    prompt: "3.N.3: A pan of cornbread is cut into 6 equal pieces. Maya eats 2 pieces. Which fraction shows the part Maya ate?",
    answers: ["2/4", "6/2", "2/6", "4/6"],
    correctIndex: 2,
    explanation: "The denominator is 6 because there are 6 equal pieces. The numerator is 2 because Maya ate 2 pieces."
  },
  {
    id: "g3-math-3n3-2",
    grade: 3,
    subject: "Mathematics",
    prompt: "3.N.3: Which statement best justifies that 3/8 is less than 5/8?",
    answers: ["The denominators are the same, and 3 pieces is fewer than 5 pieces.", "The numerator 3 is odd.", "The denominator 8 is bigger than 5.", "Both fractions have 8 pieces, so they are equal."],
    correctIndex: 0,
    explanation: "When denominators match, compare numerators. Three eighths is fewer eighths than five eighths."
  },
  {
    id: "g3-math-3n4-1",
    grade: 3,
    subject: "Mathematics",
    prompt: "3.N.4: What is the total value of one $20 bill, two $5 bills, 3 quarters, and 4 nickels?",
    answers: ["$30.95", "$31.05", "$30.75", "$35.95"],
    correctIndex: 0,
    explanation: "Bills: 20 + 10 = 30 dollars. Coins: 3 quarters = 75 cents and 4 nickels = 20 cents. Total is $30.95."
  },
  {
    id: "g3-math-3n4-2",
    grade: 3,
    subject: "Mathematics",
    prompt: "3.N.4: Jada buys a notebook for $3.65 and pays with a $5 bill. How much change should she receive?",
    answers: ["$1.25", "$1.35", "$2.35", "$1.45"],
    correctIndex: 1,
    explanation: "$5.00 - $3.65 = $1.35."
  },
  {
    id: "g3-math-3a1-1",
    grade: 3,
    subject: "Mathematics",
    prompt: "3.A.1: A pattern is 9, 18, 27, 36. What are the next two numbers?",
    answers: ["42, 48", "45, 54", "44, 52", "40, 49"],
    correctIndex: 1,
    explanation: "The pattern adds 9 each time. 36 + 9 = 45, and 45 + 9 = 54."
  },
  {
    id: "g3-math-3a1-2",
    grade: 3,
    subject: "Mathematics",
    prompt: "3.A.1: A shape pattern repeats triangle, square, hexagon, triangle, square, hexagon. What is the 8th shape?",
    answers: ["triangle", "square", "hexagon", "circle"],
    correctIndex: 1,
    explanation: "The pattern repeats every 3 shapes. The 7th is triangle and the 8th is square."
  },
  {
    id: "g3-math-3a2-1",
    grade: 3,
    subject: "Mathematics",
    prompt: "3.A.2: Which number sentence matches this problem? Six tables have the same number of chairs. There are 48 chairs total.",
    answers: ["6 + n = 48", "6 x n = 48", "48 x n = 6", "n - 6 = 48"],
    correctIndex: 1,
    explanation: "Six equal groups means multiplication: 6 x n = 48."
  },
  {
    id: "g3-math-3a2-2",
    grade: 3,
    subject: "Mathematics",
    prompt: "3.A.2: Solve 9 x n = 63.",
    answers: ["6", "7", "8", "9"],
    correctIndex: 1,
    explanation: "9 x 7 = 63, so n = 7."
  },
  {
    id: "g3-math-3gm1-1",
    grade: 3,
    subject: "Mathematics",
    prompt: "3.GM.1: Which description must be true for every rectangle?",
    answers: ["It has 3 sides.", "It has 4 right angles.", "It has 5 vertices.", "All sides must be the same length."],
    correctIndex: 1,
    explanation: "Every rectangle has 4 right angles. A square has all equal sides, but not every rectangle does."
  },
  {
    id: "g3-math-3gm1-2",
    grade: 3,
    subject: "Mathematics",
    prompt: "3.GM.1: A solid has 6 faces, 12 edges, and 8 vertices. Which solid matches?",
    answers: ["sphere", "cone", "rectangular prism", "cylinder"],
    correctIndex: 2,
    explanation: "A rectangular prism has 6 faces, 12 edges, and 8 vertices."
  },
  {
    id: "g3-math-3gm2-1",
    grade: 3,
    subject: "Mathematics",
    prompt: "3.GM.2: A ribbon is 86 centimeters long. A student cuts off 29 centimeters. How much ribbon is left?",
    answers: ["47 centimeters", "57 centimeters", "65 centimeters", "115 centimeters"],
    correctIndex: 1,
    explanation: "Subtract the part cut off: 86 - 29 = 57 centimeters."
  },
  {
    id: "g3-math-3gm2-2",
    grade: 3,
    subject: "Mathematics",
    prompt: "3.GM.2: Which tool is best for measuring the length of a classroom wall?",
    answers: ["measuring cup", "thermometer", "meter stick or tape measure", "balance scale"],
    correctIndex: 2,
    explanation: "A meter stick or tape measure measures length. The other tools measure different attributes."
  },
  {
    id: "g3-math-3gm3-1",
    grade: 3,
    subject: "Mathematics",
    prompt: "3.GM.3: A movie starts at 2:35 and ends at 3:20. How long is the movie?",
    answers: ["35 minutes", "45 minutes", "55 minutes", "85 minutes"],
    correctIndex: 1,
    explanation: "From 2:35 to 3:00 is 25 minutes. From 3:00 to 3:20 is 20 minutes. Total is 45 minutes."
  },
  {
    id: "g3-math-3gm3-2",
    grade: 3,
    subject: "Mathematics",
    prompt: "3.GM.3: What time is 35 minutes after 4:45?",
    answers: ["5:10", "5:15", "5:20", "4:80"],
    correctIndex: 2,
    explanation: "15 minutes after 4:45 is 5:00. Add 20 more minutes to get 5:20."
  },
  {
    id: "g3-math-3d1-1",
    grade: 3,
    subject: "Mathematics",
    prompt: "3.D.1: A chart shows 14 students chose soccer, 9 chose basketball, and 12 chose running. How many more chose soccer than basketball?",
    answers: ["3", "5", "21", "35"],
    correctIndex: 1,
    explanation: "Compare soccer and basketball: 14 - 9 = 5."
  },
  {
    id: "g3-math-3d1-2",
    grade: 3,
    subject: "Mathematics",
    prompt: "3.D.1: Which question can be answered from a bar graph showing favorite fruits?",
    answers: ["Which fruit has the most votes?", "How tall is each student?", "What time is lunch?", "How many desks are in the room?"],
    correctIndex: 0,
    explanation: "A favorite-fruits bar graph can show which fruit has the most votes."
  }
];

const grade3ElaQuestions: Question[] = [
  {
    id: "g3-ela-31-1",
    grade: 3,
    subject: "English Language Arts",
    prompt: "3.1.L.2: A speaker says, 'I think our class should plant flowers because it would make the playground brighter.' Which question best clarifies the speaker's purpose?",
    answers: ["What flowers do you think would grow well here?", "What is your favorite lunch?", "Can I sharpen my pencil?", "How many books are in the library?"],
    correctIndex: 0,
    explanation: "The speaker's purpose is to suggest planting flowers, so a clarifying question should ask for more information about that idea."
  },
  {
    id: "g3-ela-31-2",
    grade: 3,
    subject: "English Language Arts",
    prompt: "3.1.S.3: Which detail would best support a report about Oklahoma tornado safety?",
    answers: ["Tornadoes can be dangerous, so families should know where to shelter.", "Pizza is a popular dinner.", "Some dogs are brown.", "Summer vacation is fun."],
    correctIndex: 0,
    explanation: "A report needs relevant facts. The tornado shelter detail supports the topic."
  },
  {
    id: "g3-ela-32f-1",
    grade: 3,
    subject: "English Language Arts",
    prompt: "3.2.PWS.2: Which word has the prefix re- meaning again?",
    answers: ["reader", "rebuild", "ready", "really"],
    correctIndex: 1,
    explanation: "Rebuild means build again, so re- is used as a prefix."
  },
  {
    id: "g3-ela-32f-2",
    grade: 3,
    subject: "English Language Arts",
    prompt: "3.2.SE.3: Which word correctly adds the suffix -ed to hop?",
    answers: ["hoped", "hoping", "hopped", "hopied"],
    correctIndex: 2,
    explanation: "In a short vowel consonant-vowel-consonant word, double the final consonant before adding -ed: hopped."
  },
  {
    id: "g3-ela-32rw-1",
    grade: 3,
    subject: "English Language Arts",
    prompt: "3.2.R.1: A passage explains that bees help plants grow by moving pollen. Which is the best main idea?",
    answers: ["Bees help plants grow.", "Bees are yellow and black.", "Some flowers smell sweet.", "Pollen can stick to legs."],
    correctIndex: 0,
    explanation: "The main idea tells what the whole passage is mostly about."
  },
  {
    id: "g3-ela-32rw-2",
    grade: 3,
    subject: "English Language Arts",
    prompt: "3.2.R.3: Which word best signals sequence in a story summary?",
    answers: ["because", "first", "although", "however"],
    correctIndex: 1,
    explanation: "First is a sequence word that helps show the order of events."
  },
  {
    id: "g3-ela-33-1",
    grade: 3,
    subject: "English Language Arts",
    prompt: "3.3.R.1: A text gives steps for making a bird feeder. What is the author's purpose?",
    answers: ["to inform", "to persuade", "to entertain", "to confuse"],
    correctIndex: 0,
    explanation: "A text that gives steps or information is written to inform."
  },
  {
    id: "g3-ela-33-2",
    grade: 3,
    subject: "English Language Arts",
    prompt: "3.3.R.4: Which sentence uses a simile?",
    answers: ["The wind whispered through the trees.", "The backpack was as heavy as a rock.", "Bang! The door slammed shut.", "I have told you a million times."],
    correctIndex: 1,
    explanation: "A simile compares using like or as. As heavy as a rock is a simile."
  },
  {
    id: "g3-ela-33-3",
    grade: 3,
    subject: "English Language Arts",
    prompt: "3.3.R.6: Which sentence is an opinion?",
    answers: ["The library opens at 9:00.", "The story has twelve pages.", "The blue cover is the prettiest.", "The book was written by one author."],
    correctIndex: 2,
    explanation: "Prettiest is a judgment that people may disagree about, so it is an opinion."
  },
  {
    id: "g3-ela-34-1",
    grade: 3,
    subject: "English Language Arts",
    prompt: "3.4.R.1: Which pair of words are antonyms?",
    answers: ["happy and joyful", "tiny and small", "ancient and old", "arrive and leave"],
    correctIndex: 3,
    explanation: "Antonyms have opposite meanings. Arrive and leave are opposites."
  },
  {
    id: "g3-ela-34-2",
    grade: 3,
    subject: "English Language Arts",
    prompt: "3.4.R.2: In the sentence 'The enormous pumpkin was too big to lift,' what does enormous mean?",
    answers: ["very small", "very large", "soft", "orange"],
    correctIndex: 1,
    explanation: "The clue too big to lift shows that enormous means very large."
  },
  {
    id: "g3-ela-35-1",
    grade: 3,
    subject: "English Language Arts",
    prompt: "3.5.R.1: Which sentence is compound?",
    answers: ["The dog barked.", "The dog barked, and the cat ran.", "Running through the yard.", "Because the dog barked."],
    correctIndex: 1,
    explanation: "A compound sentence joins two complete ideas. The comma and and join two complete sentences."
  },
  {
    id: "g3-ela-35-2",
    grade: 3,
    subject: "English Language Arts",
    prompt: "3.5.W.8: Which sentence uses quotation marks correctly?",
    answers: ["Mia said, \"I found it!\"", "\"Mia said, I found it!\"", "Mia said, I found it!\"", "Mia said \"I found it!"],
    correctIndex: 0,
    explanation: "The spoken words I found it! are inside quotation marks."
  },
  {
    id: "g3-ela-36-1",
    grade: 3,
    subject: "English Language Arts",
    prompt: "3.6.R.2: Which text feature would best help you find the meaning of a bold word?",
    answers: ["glossary", "cover picture", "page number", "barcode"],
    correctIndex: 0,
    explanation: "A glossary gives meanings of important words in a text."
  },
  {
    id: "g3-ela-36-2",
    grade: 3,
    subject: "English Language Arts",
    prompt: "3.6.W.1: Which is the strongest research question about dolphins?",
    answers: ["Are dolphins interesting?", "What do dolphins eat and how do they find food?", "Dolphins are gray.", "Do I like dolphins?"],
    correctIndex: 1,
    explanation: "A strong research question is specific and can be answered with information from sources."
  },
  {
    id: "g3-ela-37-1",
    grade: 3,
    subject: "English Language Arts",
    prompt: "3.7.R: A student reads an article about rivers and studies a map of river locations. What does the map add?",
    answers: ["visual and spatial information", "a fictional narrator", "dialogue between characters", "a spelling list"],
    correctIndex: 0,
    explanation: "A map adds visual and spatial information about where places are located."
  },
  {
    id: "g3-ela-38-1",
    grade: 3,
    subject: "English Language Arts",
    prompt: "3.8.R: Which choice best shows independent reading for a purpose?",
    answers: ["Choosing a mystery book because you want to practice following clues", "Waiting for someone else to pick every book", "Reading only the title and stopping", "Copying a friend's summary"],
    correctIndex: 0,
    explanation: "Independent reading includes choosing texts that match a purpose or preference."
  }
];

const grade4ElaQuestions: Question[] = [
  {
    id: "g4-ela-41-1",
    grade: 4,
    subject: "English Language Arts",
    prompt: "4.1.L.2: A speaker says, 'Our class should start a compost bin because it would reduce cafeteria waste.' Which question best clarifies the speaker's purpose?",
    answers: ["What evidence shows a compost bin would reduce waste?", "What is your favorite dessert?", "Can I borrow a pencil?", "How many windows are in the room?"],
    correctIndex: 0,
    explanation: "The speaker is trying to persuade listeners, so the best question asks for evidence about the claim."
  },
  {
    id: "g4-ela-41-2",
    grade: 4,
    subject: "English Language Arts",
    prompt: "4.1.S.3: Which choice best shows an organized informal presentation?",
    answers: ["A topic, three related details, and a clear closing", "Random facts in no order", "Whispering one sentence without details", "Reading unrelated jokes"],
    correctIndex: 0,
    explanation: "A presentation should be organized for the audience and include relevant content."
  },
  {
    id: "g4-ela-42f-1",
    grade: 4,
    subject: "English Language Arts",
    prompt: "4.2.PWS.2: Which word contains a common root meaning carry?",
    answers: ["transport", "triangle", "silent", "quickly"],
    correctIndex: 0,
    explanation: "The root port means carry. Transport means carry across."
  },
  {
    id: "g4-ela-42f-2",
    grade: 4,
    subject: "English Language Arts",
    prompt: "4.2.SE.1: Which word is spelled correctly?",
    answers: ["becaus", "because", "becuz", "becouse"],
    correctIndex: 1,
    explanation: "Because is the correctly spelled word."
  },
  {
    id: "g4-ela-42rw-1",
    grade: 4,
    subject: "English Language Arts",
    prompt: "4.2.R.1: A passage says prairie dogs dig tunnels, warn each other, and create shelter for other animals. Which detail best supports the main idea that prairie dogs help their ecosystem?",
    answers: ["Their tunnels create shelter for other animals.", "Prairie dogs are small.", "Some prairie dogs sit upright.", "Prairie dogs have tails."],
    correctIndex: 0,
    explanation: "A key supporting detail must connect directly to the main idea."
  },
  {
    id: "g4-ela-42rw-2",
    grade: 4,
    subject: "English Language Arts",
    prompt: "4.2.R.2: Which feature is most common in poetry?",
    answers: ["lines and stanzas", "chapter headings", "index pages", "photograph captions only"],
    correctIndex: 0,
    explanation: "Poetry is often arranged in lines and stanzas."
  },
  {
    id: "g4-ela-43-1",
    grade: 4,
    subject: "English Language Arts",
    prompt: "4.3.R.2: Which sentence shows first-person point of view?",
    answers: ["I opened the gate slowly.", "She opened the gate slowly.", "Marcus opened the gate slowly.", "The dog opened the gate slowly."],
    correctIndex: 0,
    explanation: "First-person point of view uses pronouns such as I, me, my, we, and our."
  },
  {
    id: "g4-ela-43-2",
    grade: 4,
    subject: "English Language Arts",
    prompt: "4.3.R.4: Which sentence contains an idiom?",
    answers: ["It is raining cats and dogs.", "The rain fell on the roof.", "The gray clouds moved east.", "Water ran down the street."],
    correctIndex: 0,
    explanation: "An idiom has a meaning different from the literal words. Raining cats and dogs means raining heavily."
  },
  {
    id: "g4-ela-43-3",
    grade: 4,
    subject: "English Language Arts",
    prompt: "4.3.R.7: A text explains a problem, then gives ways people tried to fix it. What structure is it using?",
    answers: ["problem/solution", "cause/effect", "description", "compare/contrast"],
    correctIndex: 0,
    explanation: "A text that states a problem and explains fixes uses problem/solution structure."
  },
  {
    id: "g4-ela-44-1",
    grade: 4,
    subject: "English Language Arts",
    prompt: "4.4.R.1: Which analogy is correct?",
    answers: ["hot is to cold as tall is to short", "hot is to warm as tall is to high", "hot is to fire as tall is to building", "hot is to red as tall is to blue"],
    correctIndex: 0,
    explanation: "Hot/cold and tall/short are both antonym relationships."
  },
  {
    id: "g4-ela-44-2",
    grade: 4,
    subject: "English Language Arts",
    prompt: "4.4.R.3: In the word preview, what does the prefix pre- mean?",
    answers: ["after", "again", "before", "not"],
    correctIndex: 2,
    explanation: "Pre- means before. Preview means to view before."
  },
  {
    id: "g4-ela-45-1",
    grade: 4,
    subject: "English Language Arts",
    prompt: "4.5.W.3: Which sentence has correct subject-verb agreement?",
    answers: ["The dogs runs quickly.", "The dog run quickly.", "The dogs run quickly.", "The dog running quickly."],
    correctIndex: 2,
    explanation: "Plural subject dogs agrees with the verb run."
  },
  {
    id: "g4-ela-45-2",
    grade: 4,
    subject: "English Language Arts",
    prompt: "4.5.W.8: Which sentence uses a colon correctly?",
    answers: ["Bring three supplies: paper, pencils, and glue.", "Bring: three supplies paper, pencils, and glue.", "Bring three: supplies paper, pencils, and glue.", "Bring three supplies paper: pencils: and glue."],
    correctIndex: 0,
    explanation: "A colon can introduce a list after a complete idea."
  },
  {
    id: "g4-ela-45-3",
    grade: 4,
    subject: "English Language Arts",
    prompt: "4.5.W.6: Which sentence uses an apostrophe correctly?",
    answers: ["The cats' bowls were empty.", "The cat's ran quickly.", "The dog's are loud.", "The pencil's are sharp."],
    correctIndex: 0,
    explanation: "Cats' shows possession by more than one cat."
  },
  {
    id: "g4-ela-46-1",
    grade: 4,
    subject: "English Language Arts",
    prompt: "4.6.W.1: Which is the most viable research question?",
    answers: ["How do honeybees help pollinate food crops?", "Are bees neat?", "Bees are insects.", "Do I like honey?"],
    correctIndex: 0,
    explanation: "A viable research question is focused and can be answered with sources."
  },
  {
    id: "g4-ela-46-2",
    grade: 4,
    subject: "English Language Arts",
    prompt: "4.6.R.3: You are researching the history of the Oklahoma state flag. Which information is most relevant?",
    answers: ["When the flag design was adopted", "The recipe for cornbread", "The height of a basketball hoop", "A list of ocean animals"],
    correctIndex: 0,
    explanation: "Relevant information must help answer the research topic."
  },
  {
    id: "g4-ela-47-1",
    grade: 4,
    subject: "English Language Arts",
    prompt: "4.7.R: A video interview and an article both discuss a local artist. What can comparing them help you understand?",
    answers: ["different perspectives on the same topic", "the spelling of every word", "only the article's page count", "the weather forecast"],
    correctIndex: 0,
    explanation: "Multimodal sources can show different perspectives about the same idea or topic."
  },
  {
    id: "g4-ela-48-1",
    grade: 4,
    subject: "English Language Arts",
    prompt: "4.8.W: Which choice best matches independent writing for audience and purpose?",
    answers: ["Writing a friendly letter to thank a guest speaker", "Copying random words from a wall", "Writing without thinking about who will read it", "Stopping after writing only a title"],
    correctIndex: 0,
    explanation: "Independent writing should match the audience and purpose."
  }
];

const grade5ElaQuestions: Question[] = [
  {
    id: "g5-ela-51-1",
    grade: 5,
    subject: "English Language Arts",
    prompt: "5.1.L.1: During a speech, a presenter points to a chart and lowers their voice when discussing a serious problem. What should an active listener notice?",
    answers: ["only the presenter's shoes", "the verbal message and nonverbal cues", "only the first sentence", "the number of desks in the room"],
    correctIndex: 1,
    explanation: "Grade 5 listening includes awareness of verbal and nonverbal cues."
  },
  {
    id: "g5-ela-51-2",
    grade: 5,
    subject: "English Language Arts",
    prompt: "5.1.S.3: Which presentation plan best fits an audience of younger students?",
    answers: ["clear topic, simple examples, and organized details", "unrelated facts with no order", "silent reading with no explanation", "advanced vocabulary without examples"],
    correctIndex: 0,
    explanation: "A speaker should organize information and determine content for the audience."
  },
  {
    id: "g5-ela-52f-1",
    grade: 5,
    subject: "English Language Arts",
    prompt: "5.2.SE.1: Which spelling correctly adds -ness to happy?",
    answers: ["happyness", "happiess", "happiness", "happyiness"],
    correctIndex: 2,
    explanation: "When adding a suffix, happy changes y to i: happiness."
  },
  {
    id: "g5-ela-52f-2",
    grade: 5,
    subject: "English Language Arts",
    prompt: "5.2.F.2: Which reading behavior best shows fluency?",
    answers: ["reading every word slowly with no expression", "reading smoothly and accurately with expression", "skipping hard words", "reading only punctuation marks"],
    correctIndex: 1,
    explanation: "Fluent reading is accurate, smooth, and expressive in a way that shows comprehension."
  },
  {
    id: "g5-ela-52rw-1",
    grade: 5,
    subject: "English Language Arts",
    prompt: "5.2.R.1: A text's main idea is that sleep helps students learn. Which detail best supports it?",
    answers: ["Students who sleep well often focus better in class.", "Some pillows are blue.", "Beds can be made of wood.", "The moon is bright."],
    correctIndex: 0,
    explanation: "The detail about focus explains how sleep helps students learn."
  },
  {
    id: "g5-ela-52rw-2",
    grade: 5,
    subject: "English Language Arts",
    prompt: "5.2.W.2: Which revision most improves clarity?",
    answers: ["Replacing 'stuff' with 'recycling bins and paper scraps'", "Adding three unrelated jokes", "Removing all transition words", "Changing every sentence to a question"],
    correctIndex: 0,
    explanation: "Precise wording makes the writing clearer."
  },
  {
    id: "g5-ela-53-1",
    grade: 5,
    subject: "English Language Arts",
    prompt: "5.3.R.2: A narrator uses he and she but reveals only Maria's thoughts. What point of view is this?",
    answers: ["first person", "second person", "third-person limited", "third-person omniscient"],
    correctIndex: 2,
    explanation: "Third-person limited uses third-person pronouns but reveals only one character's thoughts or feelings."
  },
  {
    id: "g5-ela-53-2",
    grade: 5,
    subject: "English Language Arts",
    prompt: "5.3.R.3: Which literary element is the lesson or message about life in a story?",
    answers: ["setting", "theme", "onomatopoeia", "chapter"],
    correctIndex: 1,
    explanation: "Theme is the message or big idea a story communicates."
  },
  {
    id: "g5-ela-53-3",
    grade: 5,
    subject: "English Language Arts",
    prompt: "5.3.R.7: A text explains similarities and differences between solar and wind energy. Which structure is it using?",
    answers: ["compare/contrast", "sequential", "problem/solution", "description only"],
    correctIndex: 0,
    explanation: "A text about similarities and differences uses compare/contrast structure."
  },
  {
    id: "g5-ela-54-1",
    grade: 5,
    subject: "English Language Arts",
    prompt: "5.4.R.3: The Latin root dict means say or speak. What does contradict most likely mean?",
    answers: ["to say the opposite", "to write neatly", "to move quickly", "to build again"],
    correctIndex: 0,
    explanation: "Contra- means against, and dict means say, so contradict means to say against or say the opposite."
  },
  {
    id: "g5-ela-54-2",
    grade: 5,
    subject: "English Language Arts",
    prompt: "5.4.R.1: Which pair are homographs?",
    answers: ["lead the team / lead pipe", "blue / blew", "happy / joyful", "arrive / leave"],
    correctIndex: 0,
    explanation: "Homographs are spelled the same but can have different meanings or pronunciations."
  },
  {
    id: "g5-ela-55-1",
    grade: 5,
    subject: "English Language Arts",
    prompt: "5.5.R.1: Which sentence is complex?",
    answers: ["The rain stopped.", "The rain stopped, and the sun appeared.", "Because the rain stopped, we played outside.", "The rain and the wind."],
    correctIndex: 2,
    explanation: "A complex sentence has an independent clause and a dependent clause."
  },
  {
    id: "g5-ela-55-2",
    grade: 5,
    subject: "English Language Arts",
    prompt: "5.5.W.6: Which sentence uses its or it's correctly?",
    answers: ["Its going to rain.", "The dog chased it's tail.", "It's time to begin.", "The bird built it's nest."],
    correctIndex: 2,
    explanation: "It's means it is. It's time to begin means It is time to begin."
  },
  {
    id: "g5-ela-55-3",
    grade: 5,
    subject: "English Language Arts",
    prompt: "5.5.W.11: Which sentence uses a semicolon correctly?",
    answers: ["The hike was long; we were tired.", "The hike; was long we were tired.", "The; hike was long, we were tired.", "The hike was; long; we were tired."],
    correctIndex: 0,
    explanation: "A semicolon can join two closely related independent clauses."
  },
  {
    id: "g5-ela-56-1",
    grade: 5,
    subject: "English Language Arts",
    prompt: "5.6.R.3: Which source is most reliable for current weather warnings?",
    answers: ["a national weather service website", "an anonymous old comment", "a fictional story", "a cereal box game"],
    correctIndex: 0,
    explanation: "A weather service website is authoritative and relevant for current weather warnings."
  },
  {
    id: "g5-ela-56-2",
    grade: 5,
    subject: "English Language Arts",
    prompt: "5.6.W.1: Which is the strongest research question?",
    answers: ["How does drought affect Oklahoma farms?", "Is weather cool?", "Farms are outside.", "Do I like rain?"],
    correctIndex: 0,
    explanation: "A strong research question is focused, researchable, and connected to a topic."
  },
  {
    id: "g5-ela-57-1",
    grade: 5,
    subject: "English Language Arts",
    prompt: "5.7.R: A website uses a graph, a photo, and a short paragraph to explain water use. What should a reader analyze?",
    answers: ["how each mode helps communicate the idea", "only the paragraph's first word", "only the background color", "whether the website has jokes"],
    correctIndex: 0,
    explanation: "Multimodal literacy means analyzing how different kinds of content communicate meaning."
  },
  {
    id: "g5-ela-58-1",
    grade: 5,
    subject: "English Language Arts",
    prompt: "5.8.W: Which writing choice best fits an audience of kindergarten students?",
    answers: ["a short story with clear events and familiar words", "a technical report with unexplained college terms", "a list of random abbreviations", "a paragraph with no topic"],
    correctIndex: 0,
    explanation: "Independent writing should fit the audience and purpose."
  }
];

const grade6ElaQuestions: Question[] = [
  {
    id: "g6-ela-61-1",
    grade: 6,
    subject: "English Language Arts",
    prompt: "6.1.L.1: During discussion, a student crosses their arms and speaks softly while disagreeing. What should an active listener do?",
    answers: ["Ignore the nonverbal cue", "Recognize verbal and nonverbal cues and respond respectfully", "Interrupt immediately", "Change the subject"],
    correctIndex: 1,
    explanation: "Grade 6 listening includes recognizing verbal and nonverbal cues while maintaining social awareness."
  },
  {
    id: "g6-ela-61-2",
    grade: 6,
    subject: "English Language Arts",
    prompt: "6.1.S.2: Which response best builds on another student's idea?",
    answers: ["That reminds me of another detail from the article...", "No one should talk now.", "I did not listen.", "Your idea is unrelated, so I will ignore it."],
    correctIndex: 0,
    explanation: "Building on ideas means connecting your comment to what someone else said."
  },
  {
    id: "g6-ela-62-1",
    grade: 6,
    subject: "English Language Arts",
    prompt: "6.2.R.3: Which is the best paraphrase of 'The desert receives little rainfall, so many plants store water'?",
    answers: ["Some desert plants hold water because the desert is dry.", "The desert receives little rainfall, so many plants store water.", "Plants are green.", "Rainfall is always heavy in deserts."],
    correctIndex: 0,
    explanation: "A paraphrase keeps the meaning but restates it in new words."
  },
  {
    id: "g6-ela-62-2",
    grade: 6,
    subject: "English Language Arts",
    prompt: "6.2.R.1: Which summary best includes main idea and key detail?",
    answers: ["The article explains that wetlands protect communities by absorbing floodwater.", "Wetlands exist.", "The article has five paragraphs.", "I liked the picture."],
    correctIndex: 0,
    explanation: "A strong summary includes the main idea and an important supporting detail."
  },
  {
    id: "g6-ela-63-1",
    grade: 6,
    subject: "English Language Arts",
    prompt: "6.3.R.1: Two authors write about the same event. One emphasizes hope, while the other emphasizes danger. What should a reader compare?",
    answers: ["their purposes and perspectives", "only the page numbers", "the font size", "the title length"],
    correctIndex: 0,
    explanation: "Readers compare authors' purposes and perspectives when texts cover the same topic differently."
  },
  {
    id: "g6-ela-63-2",
    grade: 6,
    subject: "English Language Arts",
    prompt: "6.3.R.6: Which fact would be categorized as for a school garden?",
    answers: ["A garden can provide fresh vegetables for the cafeteria.", "Gardens require planning.", "Some students dislike mud.", "Tools must be stored safely."],
    correctIndex: 0,
    explanation: "A fact for an issue supports it. Providing fresh vegetables supports having a school garden."
  },
  {
    id: "g6-ela-63-3",
    grade: 6,
    subject: "English Language Arts",
    prompt: "6.3.W.3: Which sentence is the strongest argumentative claim?",
    answers: ["Schools should offer a recycling program because it reduces waste and teaches responsibility.", "Recycling exists.", "I saw a blue bin.", "Trash cans are in classrooms."],
    correctIndex: 0,
    explanation: "A precise claim states a position and can be supported with evidence."
  },
  {
    id: "g6-ela-64-1",
    grade: 6,
    subject: "English Language Arts",
    prompt: "6.4.R.2: Which word has the most negative connotation?",
    answers: ["thin", "slender", "scrawny", "slim"],
    correctIndex: 2,
    explanation: "Scrawny suggests an unpleasant or unhealthy thinness, so it has a negative connotation."
  },
  {
    id: "g6-ela-64-2",
    grade: 6,
    subject: "English Language Arts",
    prompt: "6.4.R.3: The Latin root scrib means write. What does inscription most likely mean?",
    answers: ["words written on something", "a loud sound", "a kind of movement", "a small animal"],
    correctIndex: 0,
    explanation: "The root scrib means write, so inscription relates to written words."
  },
  {
    id: "g6-ela-65-1",
    grade: 6,
    subject: "English Language Arts",
    prompt: "6.5.W.7: Which sentence correctly uses a comma after an introductory element?",
    answers: ["After the concert ended, the crowd cheered.", "After the concert ended the crowd, cheered.", "After, the concert ended the crowd cheered.", "After the concert, ended, the crowd cheered."],
    correctIndex: 0,
    explanation: "Use a comma after the introductory dependent clause."
  },
  {
    id: "g6-ela-65-2",
    grade: 6,
    subject: "English Language Arts",
    prompt: "6.5.W.8: Which sentence correctly uses a colon to introduce a quotation?",
    answers: ["The article states: \"Water expands when it freezes.\"", "The article: states \"Water expands when it freezes.\"", "The article states \"Water: expands when it freezes.\"", "The: article states \"Water expands when it freezes.\""],
    correctIndex: 0,
    explanation: "A colon can introduce a quotation after a complete signal phrase."
  },
  {
    id: "g6-ela-65-3",
    grade: 6,
    subject: "English Language Arts",
    prompt: "6.5.W.11: Which sentence correctly uses a semicolon?",
    answers: ["The evidence was strong; the audience was convinced.", "The evidence; was strong the audience was convinced.", "The evidence was; strong; the audience was convinced.", "The evidence was strong; and the audience."],
    correctIndex: 0,
    explanation: "A semicolon can join two closely related independent clauses."
  },
  {
    id: "g6-ela-66-1",
    grade: 6,
    subject: "English Language Arts",
    prompt: "6.6.W.2: Which is a clear thesis statement?",
    answers: ["Urban trees improve cities by reducing heat, cleaning air, and creating shade.", "Trees.", "I might write about cities.", "Do trees exist?"],
    correctIndex: 0,
    explanation: "A thesis is clear, focused, and gives the main point of the research or essay."
  },
  {
    id: "g6-ela-66-2",
    grade: 6,
    subject: "English Language Arts",
    prompt: "6.6.R.2: Which is a primary source for research about a historical event?",
    answers: ["a diary written by someone who witnessed the event", "a textbook chapter written years later", "a recent encyclopedia article", "a movie review"],
    correctIndex: 0,
    explanation: "A primary source comes directly from the time or person connected to the event."
  },
  {
    id: "g6-ela-66-3",
    grade: 6,
    subject: "English Language Arts",
    prompt: "6.6.W.3: Why should a student cite quoted findings?",
    answers: ["to avoid plagiarism and show the source", "to make the paper longer", "to hide where information came from", "to avoid using evidence"],
    correctIndex: 0,
    explanation: "Citations give credit and help readers find the source."
  },
  {
    id: "g6-ela-67-1",
    grade: 6,
    subject: "English Language Arts",
    prompt: "6.7.R: A slideshow uses statistics, photos, and narration. What should a student compare?",
    answers: ["how each mode affects the message for the audience", "only the slide numbers", "only the font color", "whether the computer is new"],
    correctIndex: 0,
    explanation: "Multimodal analysis compares how different modes communicate effectively."
  },
  {
    id: "g6-ela-68-1",
    grade: 6,
    subject: "English Language Arts",
    prompt: "6.8.R: Which choice best shows independent reading with purpose?",
    answers: ["Choosing a biography to learn how a scientist solved problems", "Reading only the cover", "Letting someone else choose every text", "Avoiding all unfamiliar genres forever"],
    correctIndex: 0,
    explanation: "Independent readers choose texts for purposes and to expand preferences."
  }
];

const grade7ElaQuestions: Question[] = [
  {
    id: "g7-ela-71-1",
    grade: 7,
    subject: "English Language Arts",
    prompt: "7.1.S.1: Which response best shows compromise during group work?",
    answers: ["Let's combine your interview idea with my infographic idea.", "My idea is the only one we should use.", "I refuse to help unless we do it my way.", "We should stop working."],
    correctIndex: 0,
    explanation: "Compromise means adjusting and combining ideas to accomplish the shared goal."
  },
  {
    id: "g7-ela-71-2",
    grade: 7,
    subject: "English Language Arts",
    prompt: "7.1.S.3: Which presentation element best supports a main idea?",
    answers: ["relevant evidence from a credible source", "a random joke", "unrelated background music", "a title with no details"],
    correctIndex: 0,
    explanation: "A presentation should provide evidence that supports the main idea."
  },
  {
    id: "g7-ela-72-1",
    grade: 7,
    subject: "English Language Arts",
    prompt: "7.2.R.1: What should a summary between two texts include?",
    answers: ["the shared main idea and key details from both texts", "every sentence copied exactly", "only the title of one text", "personal opinions only"],
    correctIndex: 0,
    explanation: "A cross-text summary should include main idea and key details from the texts."
  },
  {
    id: "g7-ela-72-2",
    grade: 7,
    subject: "English Language Arts",
    prompt: "7.2.W.3: Which revision improves coherence?",
    answers: ["Adding transitions that show how each reason connects to the claim", "Changing every noun to a pronoun", "Removing the topic sentence", "Adding unrelated facts"],
    correctIndex: 0,
    explanation: "Coherence improves when ideas connect clearly and logically."
  },
  {
    id: "g7-ela-73-1",
    grade: 7,
    subject: "English Language Arts",
    prompt: "7.3.R.3: Which sentence uses second-person point of view?",
    answers: ["You step into the dark room and hear a whisper.", "I stepped into the dark room.", "She stepped into the dark room.", "Marcus stepped into the dark room."],
    correctIndex: 0,
    explanation: "Second-person point of view directly addresses the reader using you."
  },
  {
    id: "g7-ela-73-2",
    grade: 7,
    subject: "English Language Arts",
    prompt: "7.3.R.4: Which example shows verbal irony?",
    answers: ["After spilling soup, Leo says, 'Perfect, exactly what I needed.'", "The wind whispered through the grass.", "The backpack was as heavy as stone.", "Buzz! The alarm rang."],
    correctIndex: 0,
    explanation: "Verbal irony occurs when the intended meaning is different from the literal words."
  },
  {
    id: "g7-ela-73-3",
    grade: 7,
    subject: "English Language Arts",
    prompt: "7.3.R.5: Which detail most directly affects mood?",
    answers: ["dim light and a slow creaking door", "the chapter number", "the author's last name", "the page margin"],
    correctIndex: 0,
    explanation: "Mood is the feeling created for the reader, and sensory details like dim light and creaking sounds affect it."
  },
  {
    id: "g7-ela-74-1",
    grade: 7,
    subject: "English Language Arts",
    prompt: "7.4.R.3: The Greek root geo means earth. What does geology most likely mean?",
    answers: ["the study of Earth", "the study of sound", "a type of writing", "a kind of measurement"],
    correctIndex: 0,
    explanation: "Geo means earth, and -logy means study of, so geology means the study of Earth."
  },
  {
    id: "g7-ela-74-2",
    grade: 7,
    subject: "English Language Arts",
    prompt: "7.4.R.2: Which word has the most formal connotation?",
    answers: ["request", "ask", "bug", "pester"],
    correctIndex: 0,
    explanation: "Request has a more formal connotation than ask, bug, or pester."
  },
  {
    id: "g7-ela-75-1",
    grade: 7,
    subject: "English Language Arts",
    prompt: "7.5.R.1: Which sentence is compound-complex?",
    answers: ["Because the rain stopped, we practiced outside; the coach timed our sprints.", "The rain stopped.", "The rain stopped, and we practiced outside.", "Because the rain stopped, we practiced outside."],
    correctIndex: 0,
    explanation: "It has a dependent clause and two independent clauses joined with a semicolon."
  },
  {
    id: "g7-ela-75-2",
    grade: 7,
    subject: "English Language Arts",
    prompt: "7.5.W.3: Which revision fixes the vague pronoun? Original: When Maya called Sofia, she sounded worried.",
    answers: ["When Maya called Sofia, Sofia sounded worried.", "When Maya called Sofia, she sounded worried.", "When she called her, she sounded worried.", "Maya called Sofia worried sounded."],
    correctIndex: 0,
    explanation: "Replacing she with Sofia clarifies who sounded worried."
  },
  {
    id: "g7-ela-75-3",
    grade: 7,
    subject: "English Language Arts",
    prompt: "7.5.R.2: Which word is a gerund in this sentence: Swimming strengthens the lungs.",
    answers: ["Swimming", "strengthens", "the", "lungs"],
    correctIndex: 0,
    explanation: "Swimming is a verb form ending in -ing used as a noun, so it is a gerund."
  },
  {
    id: "g7-ela-76-1",
    grade: 7,
    subject: "English Language Arts",
    prompt: "7.6.R.3: A source is recent, written by an expert, and includes evidence for its claims. Which quality does this best support?",
    answers: ["reliability and validity", "irrelevance", "plagiarism", "fictional style"],
    correctIndex: 0,
    explanation: "Expertise, current information, and evidence help establish reliability and validity."
  },
  {
    id: "g7-ela-76-2",
    grade: 7,
    subject: "English Language Arts",
    prompt: "7.6.W.3: Which choice avoids plagiarism?",
    answers: ["Quote or summarize findings and cite the source consistently.", "Copy paragraphs without naming the source.", "Use someone else's words as your own.", "Remove quotation marks from a quote."],
    correctIndex: 0,
    explanation: "Crediting quoted or summarized findings with a citation helps avoid plagiarism."
  },
  {
    id: "g7-ela-76-3",
    grade: 7,
    subject: "English Language Arts",
    prompt: "7.6.W.2: Which is the clearest thesis statement?",
    answers: ["School gardens benefit students by supporting science learning, nutrition, and teamwork.", "Gardens.", "This paper is about things.", "Do school gardens exist?"],
    correctIndex: 0,
    explanation: "A thesis should state a clear, focused main idea."
  },
  {
    id: "g7-ela-77-1",
    grade: 7,
    subject: "English Language Arts",
    prompt: "7.7.R: A video uses close-up shots, quiet music, and slow pacing. What should a viewer analyze?",
    answers: ["how those techniques affect meaning and audience response", "only the number of seconds", "only the spelling of the title", "whether the camera is expensive"],
    correctIndex: 0,
    explanation: "Multimodal analysis looks at how techniques communicate ideas and affect the audience."
  },
  {
    id: "g7-ela-78-1",
    grade: 7,
    subject: "English Language Arts",
    prompt: "7.8.W: Which choice best combines modes and genres for a purpose?",
    answers: ["Writing an editorial with an infographic to persuade students to save water", "Copying random song lyrics for a science report", "Choosing no audience or purpose", "Writing unrelated facts in no order"],
    correctIndex: 0,
    explanation: "Independent writers can combine modes and genres to suit audience and purpose."
  }
];

const grade8ElaQuestions: Question[] = [
  {
    id: "g8-ela-81-1",
    grade: 8,
    subject: "English Language Arts",
    prompt: "8.1.L.2: A speaker supports school uniforms and says they reduce distractions. What question best clarifies the speaker's perspective?",
    answers: ["Why do you believe uniforms reduce distractions?", "What is your favorite color?", "Can I leave now?", "How many pencils are on the desk?"],
    correctIndex: 0,
    explanation: "The question asks about the viewpoint and reasoning behind the speaker's message."
  },
  {
    id: "g8-ela-81-2",
    grade: 8,
    subject: "English Language Arts",
    prompt: "8.1.S.3: Which evidence best supports a presentation about reducing plastic waste?",
    answers: ["a chart showing how much plastic the school throws away each week", "a picture of a sunset", "a random song lyric", "a joke unrelated to waste"],
    correctIndex: 0,
    explanation: "Textual or visual evidence should directly support the main idea."
  },
  {
    id: "g8-ela-82-1",
    grade: 8,
    subject: "English Language Arts",
    prompt: "8.2.R.1: What should a summary of two texts about the same topic do?",
    answers: ["explain key ideas within and between both texts", "copy only the longest paragraph", "include only personal opinions", "ignore one of the texts"],
    correctIndex: 0,
    explanation: "A Grade 8 summary should show comprehension within and between related texts."
  },
  {
    id: "g8-ela-82-2",
    grade: 8,
    subject: "English Language Arts",
    prompt: "8.2.W.3: Which revision most improves style?",
    answers: ["Replacing repeated dull verbs with precise varied verbs", "Removing all transitions", "Adding unrelated facts", "Changing point of view every sentence"],
    correctIndex: 0,
    explanation: "Style includes word choice and sentence variety."
  },
  {
    id: "g8-ela-83-1",
    grade: 8,
    subject: "English Language Arts",
    prompt: "8.3.R.3: A narrator claims to be honest but hides important events and contradicts earlier details. What type of narrator might this be?",
    answers: ["unreliable narrator", "omniscient narrator", "second-person narrator", "objective narrator"],
    correctIndex: 0,
    explanation: "An unreliable narrator gives readers reasons to question the truth or completeness of the narration."
  },
  {
    id: "g8-ela-83-2",
    grade: 8,
    subject: "English Language Arts",
    prompt: "8.3.R.4: Which example shows situational irony?",
    answers: ["A fire station burns down.", "The wind whispered.", "Her smile was as bright as the sun.", "Crash! The vase fell."],
    correctIndex: 0,
    explanation: "Situational irony occurs when the outcome is different from what is expected."
  },
  {
    id: "g8-ela-83-3",
    grade: 8,
    subject: "English Language Arts",
    prompt: "8.3.R.6: A claim is substantiated when it is...",
    answers: ["supported by relevant evidence", "stated loudly", "written in a title", "based only on a feeling"],
    correctIndex: 0,
    explanation: "A substantiated claim is supported by evidence."
  },
  {
    id: "g8-ela-83-4",
    grade: 8,
    subject: "English Language Arts",
    prompt: "8.3.W.3: What should an argumentative essay include in addition to a claim and evidence?",
    answers: ["a counterclaim", "only a plot twist", "no organization", "uncredited copied paragraphs"],
    correctIndex: 0,
    explanation: "Grade 8 argumentative writing includes acknowledging counterclaims."
  },
  {
    id: "g8-ela-84-1",
    grade: 8,
    subject: "English Language Arts",
    prompt: "8.4.R.3: The Greek root chron means time. What does synchronize most nearly mean?",
    answers: ["to make happen at the same time", "to write beautifully", "to measure distance", "to speak loudly"],
    correctIndex: 0,
    explanation: "Synchronize means to cause events to occur at the same time."
  },
  {
    id: "g8-ela-84-2",
    grade: 8,
    subject: "English Language Arts",
    prompt: "8.4.R.2: Which word has the strongest negative connotation?",
    answers: ["determined", "persistent", "stubborn", "committed"],
    correctIndex: 2,
    explanation: "Stubborn often suggests refusing to change even when one should."
  },
  {
    id: "g8-ela-85-1",
    grade: 8,
    subject: "English Language Arts",
    prompt: "8.5.R.1: Which sentence is in passive voice?",
    answers: ["The experiment was completed by the students.", "The students completed the experiment.", "The students measured the liquid.", "The class discussed the results."],
    correctIndex: 0,
    explanation: "In passive voice, the subject receives the action: the experiment was completed."
  },
  {
    id: "g8-ela-85-2",
    grade: 8,
    subject: "English Language Arts",
    prompt: "8.5.W.3: Which revision fixes the dangling modifier? Original: Running down the hallway, the backpack bounced loudly.",
    answers: ["Running down the hallway, Jay heard the backpack bounce loudly.", "Running down the hallway, the backpack bounced loudly.", "The backpack running down the hallway bounced loudly.", "Bounced loudly, running the backpack hallway."],
    correctIndex: 0,
    explanation: "The revision names the person doing the running."
  },
  {
    id: "g8-ela-85-3",
    grade: 8,
    subject: "English Language Arts",
    prompt: "8.5.W.7: Which sentence uses commas correctly with coordinate adjectives?",
    answers: ["It was a fascinating, enjoyable movie.", "It was a fascinating enjoyable movie.", "It was a, fascinating enjoyable movie.", "It was a fascinating enjoyable, movie."],
    correctIndex: 0,
    explanation: "Coordinate adjectives that equally modify a noun are separated with a comma."
  },
  {
    id: "g8-ela-86-1",
    grade: 8,
    subject: "English Language Arts",
    prompt: "8.6.W.2: Which thesis is defensible?",
    answers: ["Public libraries should extend weekend hours because students need quiet study spaces and internet access.", "Libraries exist.", "Books are objects.", "This essay is about stuff."],
    correctIndex: 0,
    explanation: "A defensible thesis makes a focused claim that can be supported with evidence."
  },
  {
    id: "g8-ela-86-2",
    grade: 8,
    subject: "English Language Arts",
    prompt: "8.6.W.3: Which choice best avoids plagiarism?",
    answers: ["Quote, paraphrase, and summarize findings with consistent citations.", "Copy a source and change the title.", "Use a quote without quotation marks.", "Paste paragraphs without naming the author."],
    correctIndex: 0,
    explanation: "Using quotation marks, paraphrasing honestly, summarizing, and citing sources helps avoid plagiarism."
  },
  {
    id: "g8-ela-87-1",
    grade: 8,
    subject: "English Language Arts",
    prompt: "8.7.R: A poster uses a shocking statistic, bold red text, and a direct call to action. What is the likely rhetorical purpose?",
    answers: ["to persuade the audience to act", "to list random facts", "to hide the message", "to entertain with a fictional plot"],
    correctIndex: 0,
    explanation: "Those techniques create urgency and are commonly used to persuade."
  },
  {
    id: "g8-ela-88-1",
    grade: 8,
    subject: "English Language Arts",
    prompt: "8.8.W: Which independent writing choice best combines mode, genre, audience, and purpose?",
    answers: ["A podcast script and infographic explaining cyberbullying prevention to middle school students", "A random list with no audience", "A copied article without credit", "A story with no purpose or reader"],
    correctIndex: 0,
    explanation: "The choice combines modes and genre for a clear audience and purpose."
  }
];

const grade9ElaQuestions: Question[] = [
  {
    id: "g9-ela-91-1",
    grade: 9,
    subject: "English Language Arts",
    prompt: "9.1.L.2: A speaker uses statistics, a serious tone, and eye contact to argue for safer school parking lots. What should a listener evaluate?",
    answers: ["whether the evidence and cues support the purpose and perspective", "only the speaker's shoes", "the number of chairs", "whether the speech has a title only"],
    correctIndex: 0,
    explanation: "Grade 9 listening includes analyzing and evaluating verbal and nonverbal messages."
  },
  {
    id: "g9-ela-91-2",
    grade: 9,
    subject: "English Language Arts",
    prompt: "9.1.S.2: Which response shows respectful disagreement?",
    answers: ["I see your point about cost, but the evidence suggests the program saves money over time.", "You are wrong and I refuse to listen.", "That idea is stupid.", "I am changing the subject."],
    correctIndex: 0,
    explanation: "Respectful disagreement acknowledges the other idea and responds with reasoning."
  },
  {
    id: "g9-ela-92-1",
    grade: 9,
    subject: "English Language Arts",
    prompt: "9.2.R.1: Which choice best paraphrases 'Urban tree cover reduces heat by providing shade and releasing moisture into the air'?",
    answers: ["Trees in cities can cool areas because they shade surfaces and add moisture.", "Urban tree cover reduces heat by providing shade and releasing moisture into the air.", "Trees are plants.", "Cities have streets."],
    correctIndex: 0,
    explanation: "A paraphrase keeps the meaning but uses new wording and structure."
  },
  {
    id: "g9-ela-92-2",
    grade: 9,
    subject: "English Language Arts",
    prompt: "9.2.W.3: Which revision best improves consistent tone in a formal essay?",
    answers: ["Replace slang with precise academic language.", "Add unrelated jokes.", "Switch randomly to second person.", "Remove all transitions."],
    correctIndex: 0,
    explanation: "Formal tone requires word choice that fits the purpose and audience."
  },
  {
    id: "g9-ela-93-1",
    grade: 9,
    subject: "English Language Arts",
    prompt: "9.3.R.5: Which rhetorical appeal uses logic, facts, and reasoning?",
    answers: ["logos", "pathos", "ethos", "archetype"],
    correctIndex: 0,
    explanation: "Logos appeals to logic and evidence."
  },
  {
    id: "g9-ela-93-2",
    grade: 9,
    subject: "English Language Arts",
    prompt: "9.3.R.5: A speaker says, 'This plan must be good because a famous actor supports it.' Which issue is present?",
    answers: ["appeal to questionable authority", "strong empirical evidence", "clear thesis", "balanced counterclaim"],
    correctIndex: 0,
    explanation: "A famous actor may not be an expert on the plan, so the authority may not be relevant."
  },
  {
    id: "g9-ela-93-3",
    grade: 9,
    subject: "English Language Arts",
    prompt: "9.3.R.3: Which literary element is a character type or pattern repeated across many stories, such as the hero or mentor?",
    answers: ["archetype", "semicolon", "caption", "citation"],
    correctIndex: 0,
    explanation: "An archetype is a recurring character, symbol, or situation pattern."
  },
  {
    id: "g9-ela-93-4",
    grade: 9,
    subject: "English Language Arts",
    prompt: "9.3.W.3: What should an argumentative essay do with alternate perspectives?",
    answers: ["acknowledge counterclaims and respond with evidence", "pretend they do not exist", "replace evidence with insults", "avoid a thesis"],
    correctIndex: 0,
    explanation: "Strong arguments acknowledge counterclaims or alternate perspectives."
  },
  {
    id: "g9-ela-94-1",
    grade: 9,
    subject: "English Language Arts",
    prompt: "9.4.R.3: The root bene means good or well. What does benevolent most likely mean?",
    answers: ["kind and well-meaning", "full of sound", "against the law", "hard to see"],
    correctIndex: 0,
    explanation: "Bene relates to good, so benevolent means kind or intending good."
  },
  {
    id: "g9-ela-94-2",
    grade: 9,
    subject: "English Language Arts",
    prompt: "9.4.R.2: Which word has the most negative connotation?",
    answers: ["confident", "assertive", "arrogant", "self-assured"],
    correctIndex: 2,
    explanation: "Arrogant suggests an unpleasant sense of superiority."
  },
  {
    id: "g9-ela-95-1",
    grade: 9,
    subject: "English Language Arts",
    prompt: "9.5.R.1: Which sentence uses parallel structure?",
    answers: ["She likes hiking, swimming, and biking.", "She likes hiking, to swim, and bikes.", "She likes to hike, swimming, and a bike.", "She likes hikes, to swim, and biking."],
    correctIndex: 0,
    explanation: "Hiking, swimming, and biking use matching grammatical forms."
  },
  {
    id: "g9-ela-95-2",
    grade: 9,
    subject: "English Language Arts",
    prompt: "9.5.W.7: Which sentence correctly sets off a parenthetical element?",
    answers: ["The experiment, according to the report, was successful.", "The experiment according, to the report was successful.", "The experiment according to the report, was successful.", "The experiment, according to the report was successful."],
    correctIndex: 0,
    explanation: "Commas set off the parenthetical phrase according to the report."
  },
  {
    id: "g9-ela-95-3",
    grade: 9,
    subject: "English Language Arts",
    prompt: "9.5.W.9: What does an ellipsis show in quoted material?",
    answers: ["omitted words", "a spelling error", "a new paragraph", "a question"],
    correctIndex: 0,
    explanation: "An ellipsis indicates words have been omitted from a quotation."
  },
  {
    id: "g9-ela-96-1",
    grade: 9,
    subject: "English Language Arts",
    prompt: "9.6.R.2: What does it mean to synthesize sources?",
    answers: ["combine relevant ideas from multiple sources into a new understanding", "copy one source word for word", "ignore all evidence", "use only a title page"],
    correctIndex: 0,
    explanation: "Synthesis combines information from sources and explains relationships among ideas."
  },
  {
    id: "g9-ela-96-2",
    grade: 9,
    subject: "English Language Arts",
    prompt: "9.6.W.3: Which sentence best integrates a quote?",
    answers: ["According to Lee, \"sleep improves focus,\" which supports later school start times.", "\"Sleep improves focus.\" That's it.", "Lee sleep focus quote.", "I copied this because it sounded good."],
    correctIndex: 0,
    explanation: "The quote is introduced, embedded in the writer's sentence, and connected to the argument."
  },
  {
    id: "g9-ela-97-1",
    grade: 9,
    subject: "English Language Arts",
    prompt: "9.7.R: A documentary uses archival footage, interviews, and dramatic music. What should viewers evaluate?",
    answers: ["how those techniques contribute to meaning", "only the length of the video", "whether the music is loud", "the color of the play button"],
    correctIndex: 0,
    explanation: "Multimodal analysis evaluates how techniques contribute to meaning."
  },
  {
    id: "g9-ela-98-1",
    grade: 9,
    subject: "English Language Arts",
    prompt: "9.8.W: Which choice intentionally combines modes and genres for audience and purpose?",
    answers: ["An op-ed with an infographic for community readers about water conservation", "A random list without an audience", "A copied paragraph without credit", "A poem submitted as a lab report with no explanation"],
    correctIndex: 0,
    explanation: "The choice combines genre and visual mode to suit a specific audience and purpose."
  }
];

const grade10ElaQuestions: Question[] = [
  {
    id: "g10-ela-101-1",
    grade: 10,
    subject: "English Language Arts",
    prompt: "10.1.L.2: A speaker uses expert testimony, charts, and a calm tone. What should a listener evaluate?",
    answers: ["whether the evidence and cues support the speaker's purpose", "only the speaker's clothing", "whether the slides are colorful", "the room temperature"],
    correctIndex: 0,
    explanation: "Grade 10 listeners evaluate how verbal messages, nonverbal cues, evidence, purpose, and perspective work together."
  },
  {
    id: "g10-ela-101-2",
    grade: 10,
    subject: "English Language Arts",
    prompt: "10.1.S.3: Which presentation choice best supports a message in a formal context?",
    answers: ["credible evidence plus controlled eye contact and tone", "unrelated jokes only", "speaking with no organization", "visuals that contradict the claim"],
    correctIndex: 0,
    explanation: "Formal presentations should support the message with evidence and purposeful verbal/nonverbal cues."
  },
  {
    id: "g10-ela-102-1",
    grade: 10,
    subject: "English Language Arts",
    prompt: "10.2.W.2: Which organizational structure best fits an essay explaining why an event happened and what resulted?",
    answers: ["cause/effect", "alphabetical list", "random order", "dialogue only"],
    correctIndex: 0,
    explanation: "Cause/effect structure explains reasons and results."
  },
  {
    id: "g10-ela-102-2",
    grade: 10,
    subject: "English Language Arts",
    prompt: "10.2.W.3: Which revision most improves coherence?",
    answers: ["Add transitions that show relationships among ideas.", "Delete the thesis.", "Change tone randomly.", "Add unrelated examples."],
    correctIndex: 0,
    explanation: "Transitions and clear relationships improve coherence and meaning."
  },
  {
    id: "g10-ela-103-1",
    grade: 10,
    subject: "English Language Arts",
    prompt: "10.3.R.5: A personal story used as evidence is best described as what kind of evidence?",
    answers: ["anecdotal", "empirical", "logical proof", "citation format"],
    correctIndex: 0,
    explanation: "Anecdotal evidence is based on personal stories or individual examples."
  },
  {
    id: "g10-ela-103-2",
    grade: 10,
    subject: "English Language Arts",
    prompt: "10.3.R.5: Which appeal focuses on the speaker's credibility?",
    answers: ["ethos", "logos", "pathos", "irony"],
    correctIndex: 0,
    explanation: "Ethos appeals to credibility or character."
  },
  {
    id: "g10-ela-103-3",
    grade: 10,
    subject: "English Language Arts",
    prompt: "10.3.R.4: Dramatic irony occurs when...",
    answers: ["the audience knows something a character does not", "a word imitates a sound", "two unlike things are compared using like", "a text is organized by time"],
    correctIndex: 0,
    explanation: "Dramatic irony depends on the audience knowing more than a character."
  },
  {
    id: "g10-ela-103-4",
    grade: 10,
    subject: "English Language Arts",
    prompt: "10.3.W.4: What does it mean to blend narrative, informative, and argumentative writing?",
    answers: ["Use story, explanation, and argument techniques as needed for audience and purpose.", "Avoid all evidence.", "Write only dialogue.", "Never use a thesis."],
    correctIndex: 0,
    explanation: "Blended writing uses multiple modes intentionally to fit purpose and audience."
  },
  {
    id: "g10-ela-104-1",
    grade: 10,
    subject: "English Language Arts",
    prompt: "10.4.R.4: Which resource detail explains a word's origin?",
    answers: ["etymology", "page number", "font size", "caption color"],
    correctIndex: 0,
    explanation: "Etymology explains a word's origin and historical development."
  },
  {
    id: "g10-ela-104-2",
    grade: 10,
    subject: "English Language Arts",
    prompt: "10.4.R.3: The root aud means hear. What does audible mean?",
    answers: ["able to be heard", "able to be seen", "written by hand", "against belief"],
    correctIndex: 0,
    explanation: "Aud relates to hearing, so audible means able to be heard."
  },
  {
    id: "g10-ela-105-1",
    grade: 10,
    subject: "English Language Arts",
    prompt: "10.5.W.1: Which sentence has effective parallel structure?",
    answers: ["The policy is fair, practical, and affordable.", "The policy is fair, practicality, and can be afforded.", "The policy is fairness, practical, and afford.", "The policy is fair, to practice, and affordability."],
    correctIndex: 0,
    explanation: "Fair, practical, and affordable are matching adjective forms."
  },
  {
    id: "g10-ela-105-2",
    grade: 10,
    subject: "English Language Arts",
    prompt: "10.5.R.1: Which sentence is passive voice?",
    answers: ["The final report was written by the committee.", "The committee wrote the final report.", "The committee revised the report.", "The report changed the policy."],
    correctIndex: 0,
    explanation: "The subject receives the action in passive voice: the report was written."
  },
  {
    id: "g10-ela-105-3",
    grade: 10,
    subject: "English Language Arts",
    prompt: "10.5.W.9: In a quotation, brackets are used to...",
    answers: ["add or clarify words inside quoted material", "show every omitted sentence", "replace all punctuation", "mark a title"],
    correctIndex: 0,
    explanation: "Brackets show additions or clarifications inserted into quoted material."
  },
  {
    id: "g10-ela-106-1",
    grade: 10,
    subject: "English Language Arts",
    prompt: "10.6.R.2: Which action best shows synthesis?",
    answers: ["Combining ideas from multiple sources to support one thesis", "Copying one source exactly", "Listing URLs without explanation", "Ignoring conflicting evidence"],
    correctIndex: 0,
    explanation: "Synthesis combines source ideas into a connected understanding."
  },
  {
    id: "g10-ela-106-2",
    grade: 10,
    subject: "English Language Arts",
    prompt: "10.6.W.2: Which thesis is defensible?",
    answers: ["Cities should expand public transit because it can reduce traffic, lower emissions, and improve access to jobs.", "Buses exist.", "Transportation is a word.", "This essay will discuss things."],
    correctIndex: 0,
    explanation: "A defensible thesis makes a focused claim that can be supported with evidence."
  },
  {
    id: "g10-ela-107-1",
    grade: 10,
    subject: "English Language Arts",
    prompt: "10.7.R: What should students evaluate in multimodal content?",
    answers: ["how techniques such as visuals, sound, layout, and pacing contribute to meaning", "only the file size", "only whether it has pictures", "only the number of colors"],
    correctIndex: 0,
    explanation: "Multimodal analysis evaluates how techniques contribute to meaning."
  },
  {
    id: "g10-ela-108-1",
    grade: 10,
    subject: "English Language Arts",
    prompt: "10.8.R: Which choice best shows reading for a specific purpose?",
    answers: ["Selecting editorials to study argument techniques before writing an op-ed", "Reading the first random page of any book", "Choosing texts only by cover color", "Avoiding long reading"],
    correctIndex: 0,
    explanation: "Independent readers select texts intentionally for specific purposes."
  }
];

const grade11ElaQuestions: Question[] = [
  {
    id: "g11-ela-111-1",
    grade: 11,
    subject: "English Language Arts",
    prompt: "11.1.L.2: Two speakers support the same policy, but one relies on data and the other relies on personal stories. What should a listener compare?",
    answers: ["their assumptions, evidence, reasoning, and viewpoints", "only their speaking order", "the color of their slides", "the length of their names"],
    correctIndex: 0,
    explanation: "Grade 11 listeners evaluate how purpose, perspective, evidence, and reasoning shape messages."
  },
  {
    id: "g11-ela-111-2",
    grade: 11,
    subject: "English Language Arts",
    prompt: "11.1.S.2: Which response respectfully disagrees while building on another idea?",
    answers: ["I understand your point about cost, but the long-term evidence suggests savings.", "That is wrong and I will not explain why.", "No one should consider your idea.", "I am ignoring that evidence."],
    correctIndex: 0,
    explanation: "Respectful disagreement acknowledges the idea and responds with reasoning or evidence."
  },
  {
    id: "g11-ela-112-1",
    grade: 11,
    subject: "English Language Arts",
    prompt: "11.2.R.1: Which choice best paraphrases a complex claim?",
    answers: ["It restates the claim accurately in new words and structure.", "It copies the source exactly.", "It changes the claim's meaning.", "It includes only personal opinion."],
    correctIndex: 0,
    explanation: "A paraphrase preserves meaning while using new wording and structure."
  },
  {
    id: "g11-ela-112-2",
    grade: 11,
    subject: "English Language Arts",
    prompt: "11.2.W.3: Which revision best improves coherence in a comparison essay?",
    answers: ["Use point-by-point organization with transitions showing similarities and differences.", "Remove all transitions.", "Discuss only one text.", "Change tone randomly."],
    correctIndex: 0,
    explanation: "Point-by-point organization and transitions help readers follow comparisons."
  },
  {
    id: "g11-ela-113-1",
    grade: 11,
    subject: "English Language Arts",
    prompt: "11.3.R.5: Two authors reach different conclusions about remote work. One assumes productivity matters most; the other assumes community matters most. What most likely explains the difference?",
    answers: ["different assumptions and viewpoints", "identical evidence", "the same reasoning", "a shared thesis"],
    correctIndex: 0,
    explanation: "Authors can reach different conclusions because their assumptions, evidence, reasoning, and viewpoints differ."
  },
  {
    id: "g11-ela-113-2",
    grade: 11,
    subject: "English Language Arts",
    prompt: "11.3.R.5: Which sentence identifies bias?",
    answers: ["The source ignores opposing evidence and uses loaded language.", "The source cites multiple studies.", "The source defines key terms.", "The source gives publication information."],
    correctIndex: 0,
    explanation: "Ignoring opposing evidence and using loaded language can indicate bias."
  },
  {
    id: "g11-ela-113-3",
    grade: 11,
    subject: "English Language Arts",
    prompt: "11.3.R.3: Which element is a recurring character pattern such as mentor, hero, or trickster?",
    answers: ["archetype", "ellipsis", "footnote", "caption"],
    correctIndex: 0,
    explanation: "An archetype is a recurring character, symbol, or situation pattern."
  },
  {
    id: "g11-ela-113-4",
    grade: 11,
    subject: "English Language Arts",
    prompt: "11.3.W.3: What makes an argumentative essay balanced?",
    answers: ["It acknowledges counterclaims and responds with credible evidence.", "It ignores alternate perspectives.", "It relies only on insults.", "It avoids a thesis."],
    correctIndex: 0,
    explanation: "Balanced arguments consider alternate perspectives and answer them with evidence."
  },
  {
    id: "g11-ela-114-1",
    grade: 11,
    subject: "English Language Arts",
    prompt: "11.4.R.4: Which reference information tells a word's history and origin?",
    answers: ["etymology", "font size", "page margin", "paragraph length"],
    correctIndex: 0,
    explanation: "Etymology gives a word's origin and historical development."
  },
  {
    id: "g11-ela-114-2",
    grade: 11,
    subject: "English Language Arts",
    prompt: "11.4.R.2: Which word has the most skeptical connotation?",
    answers: ["questioning", "curious", "doubtful", "interested"],
    correctIndex: 2,
    explanation: "Doubtful suggests skepticism more strongly than the other choices."
  },
  {
    id: "g11-ela-115-1",
    grade: 11,
    subject: "English Language Arts",
    prompt: "11.5.R.1: Why might an author use passive voice?",
    answers: ["to emphasize the action or receiver instead of the doer", "to make every sentence incorrect", "to avoid all verbs", "to remove meaning"],
    correctIndex: 0,
    explanation: "Passive voice can shift emphasis away from the actor and toward the action or receiver."
  },
  {
    id: "g11-ela-115-2",
    grade: 11,
    subject: "English Language Arts",
    prompt: "11.5.W.7: Which sentence uses a dash to reveal information?",
    answers: ["The decision was final - the team would rebuild.", "The decision was final the team would rebuild.", "The decision - was final - the team.", "The - decision was final the team."],
    correctIndex: 0,
    explanation: "A dash can reveal or emphasize added information."
  },
  {
    id: "g11-ela-115-3",
    grade: 11,
    subject: "English Language Arts",
    prompt: "11.5.W.8: What do brackets show in quoted material?",
    answers: ["an addition or clarification by the writer", "a missing paragraph only", "the title of a book", "a new speaker"],
    correctIndex: 0,
    explanation: "Brackets mark added or clarified words inside quoted material."
  },
  {
    id: "g11-ela-116-1",
    grade: 11,
    subject: "English Language Arts",
    prompt: "11.6.R.2: What is synthesis in research?",
    answers: ["Combining relevant ideas from multiple sources into a unified explanation or argument.", "Copying one source without citation.", "Listing sources without explaining relationships.", "Avoiding all primary sources."],
    correctIndex: 0,
    explanation: "Synthesis connects ideas from multiple sources to support a larger point."
  },
  {
    id: "g11-ela-116-2",
    grade: 11,
    subject: "English Language Arts",
    prompt: "11.6.W.2: Which thesis is defensible?",
    answers: ["Local governments should invest in flood-resistant infrastructure because it reduces damage, improves safety, and protects public funds.", "Floods happen.", "This paper is about weather.", "Infrastructure is a long word."],
    correctIndex: 0,
    explanation: "A defensible thesis makes a focused claim that can be supported with evidence."
  },
  {
    id: "g11-ela-117-1",
    grade: 11,
    subject: "English Language Arts",
    prompt: "11.7.W: Which multimodal choice best enhances understanding of research findings?",
    answers: ["A graph of data paired with a concise explanation of the trend.", "A decorative image unrelated to the claim.", "Random background music that hides narration.", "A title slide only."],
    correctIndex: 0,
    explanation: "Effective multimodal choices clarify findings, reasoning, and evidence."
  },
  {
    id: "g11-ela-118-1",
    grade: 11,
    subject: "English Language Arts",
    prompt: "11.8.R: Which choice shows independent reading for a specific purpose?",
    answers: ["Selecting court opinions and editorials to prepare for an argument about free speech.", "Choosing only the shortest text every time.", "Reading without a purpose.", "Avoiding challenging texts."],
    correctIndex: 0,
    explanation: "Independent readers select texts that fit a purpose and sustain reading over time."
  }
];

const grade12ElaQuestions: Question[] = [
  {
    id: "g12-ela-121-1",
    grade: 12,
    subject: "English Language Arts",
    prompt: "12.1.L.2: A speaker uses statistics, a personal story, and pauses before key claims. What is the strongest evaluation?",
    answers: ["The listener should judge how evidence, purpose, perspective, and delivery work together.", "The listener should count only the number of pauses.", "The listener should ignore the evidence.", "The listener should evaluate only the story."],
    correctIndex: 0,
    explanation: "Grade 12 listening requires evaluating verbal and nonverbal messages along with evidence, purpose, and perspective."
  },
  {
    id: "g12-ela-121-2",
    grade: 12,
    subject: "English Language Arts",
    prompt: "12.1.S.1: Which behavior best shows shared responsibility in a group discussion?",
    answers: ["Building on others' ideas, compromising when needed, and completing assigned work", "Letting one person do everything", "Interrupting until the group agrees", "Changing the goal without telling anyone"],
    correctIndex: 0,
    explanation: "Collaborative work requires respect, compromise, responsibility, and recognition of contributions."
  },
  {
    id: "g12-ela-122-1",
    grade: 12,
    subject: "English Language Arts",
    prompt: "12.2.R.1: Which summary best handles a complex text?",
    answers: ["It states the central idea, major supporting ideas, and important qualifications accurately.", "It copies the longest sentence.", "It includes only the reader's opinion.", "It removes all conditions and exceptions."],
    correctIndex: 0,
    explanation: "Complex summaries must preserve main ideas and important limits or qualifications."
  },
  {
    id: "g12-ela-122-2",
    grade: 12,
    subject: "English Language Arts",
    prompt: "12.2.W.3: A draft has strong evidence but jumps between ideas without clear relationships. What revision should come first?",
    answers: ["Reorganize ideas and add transitions that show relationships.", "Delete the evidence.", "Change every sentence to a question.", "Remove the thesis."],
    correctIndex: 0,
    explanation: "Organization and transitions improve coherence and meaning."
  },
  {
    id: "g12-ela-123-1",
    grade: 12,
    subject: "English Language Arts",
    prompt: "12.3.R.1: How can historical perspective affect an author's style?",
    answers: ["It can shape word choice, tone, references, and assumptions.", "It only changes page numbers.", "It prevents the author from using evidence.", "It makes all texts mean the same thing."],
    correctIndex: 0,
    explanation: "Historical, cultural, and global perspectives can influence stylistic choices and meaning."
  },
  {
    id: "g12-ela-123-2",
    grade: 12,
    subject: "English Language Arts",
    prompt: "12.3.R.5: An article attacks a person instead of answering the person's evidence. Which fallacy is most likely present?",
    answers: ["ad hominem", "alliteration", "imagery", "foreshadowing"],
    correctIndex: 0,
    explanation: "Ad hominem attacks the person instead of addressing the argument."
  },
  {
    id: "g12-ela-123-3",
    grade: 12,
    subject: "English Language Arts",
    prompt: "12.3.R.4: Which device repeats initial consonant sounds for effect?",
    answers: ["alliteration", "dramatic irony", "flashback", "denotation"],
    correctIndex: 0,
    explanation: "Alliteration repeats initial consonant sounds."
  },
  {
    id: "g12-ela-123-4",
    grade: 12,
    subject: "English Language Arts",
    prompt: "12.3.W.3: Which argument is strongest for a senior-level essay?",
    answers: ["A precise claim with a defensible thesis, credible evidence, counterclaims, and audience-aware tone", "A claim with no evidence", "A list of feelings only", "A copied source with no citation"],
    correctIndex: 0,
    explanation: "Strong argumentative writing uses claims, evidence, counterclaims, organization, and tone appropriate to audience and purpose."
  },
  {
    id: "g12-ela-124-1",
    grade: 12,
    subject: "English Language Arts",
    prompt: "12.4.R.2: In the phrase a calculated apology, what does calculated most likely suggest?",
    answers: ["planned for effect, possibly insincere", "mathematically correct", "completely accidental", "emotionally open"],
    correctIndex: 0,
    explanation: "Context and connotation show that calculated can suggest strategic or insincere planning."
  },
  {
    id: "g12-ela-124-2",
    grade: 12,
    subject: "English Language Arts",
    prompt: "12.4.R.3: The Latin root cred means believe. Which word most directly uses that root?",
    answers: ["credible", "crescent", "create", "crimson"],
    correctIndex: 0,
    explanation: "Credible means able to be believed."
  },
  {
    id: "g12-ela-125-1",
    grade: 12,
    subject: "English Language Arts",
    prompt: "12.5.R.1: Which sentence uses parallel structure?",
    answers: ["The plan is practical, affordable, and sustainable.", "The plan is practical, affordability, and can sustain.", "The plan is practicality, affordable, and sustain.", "The plan is to practice, affordability, and sustainable."],
    correctIndex: 0,
    explanation: "Parallel structure uses matching grammatical forms."
  },
  {
    id: "g12-ela-125-2",
    grade: 12,
    subject: "English Language Arts",
    prompt: "12.5.W.10: Which sentence uses a semicolon correctly?",
    answers: ["The evidence was limited; the conclusion remained uncertain.", "The evidence was; limited the conclusion remained uncertain.", "The; evidence was limited, the conclusion.", "The evidence was limited; because the conclusion remained uncertain."],
    correctIndex: 0,
    explanation: "A semicolon can join two closely related independent clauses."
  },
  {
    id: "g12-ela-125-3",
    grade: 12,
    subject: "English Language Arts",
    prompt: "12.5.W.8: Which sentence correctly uses brackets in a quotation?",
    answers: ["The witness said, \"They [the council members] refused to vote.\"", "The witness said, \"They the council members] refused to vote.\"", "The witness said, \"They [the council members refused to vote.\"", "The witness said, [\"They the council members refused to vote.\""],
    correctIndex: 0,
    explanation: "Brackets show clarification added inside quoted material."
  },
  {
    id: "g12-ela-126-1",
    grade: 12,
    subject: "English Language Arts",
    prompt: "12.6.R.3: A source is relevant but outdated and does not cite evidence. What should a researcher conclude?",
    answers: ["It may not be reliable or valid enough without stronger support.", "It is automatically the best source.", "It should be copied without citation.", "It proves the thesis by existing."],
    correctIndex: 0,
    explanation: "Researchers evaluate relevance, reliability, and validity before using a source."
  },
  {
    id: "g12-ela-126-2",
    grade: 12,
    subject: "English Language Arts",
    prompt: "12.6.W.3: Which sentence integrates research most effectively?",
    answers: ["According to the state report, graduation rates rose after tutoring expanded, suggesting targeted support can improve outcomes.", "Graduation rates rose I found a report.", "A report says stuff about schools.", "I copied the report because it sounded good."],
    correctIndex: 0,
    explanation: "Effective integration uses a signal phrase, explains the evidence, and connects it to a point."
  },
  {
    id: "g12-ela-127-1",
    grade: 12,
    subject: "English Language Arts",
    prompt: "12.7.R: What is the best question to ask about multimodal content?",
    answers: ["How do images, sound, layout, and text contribute to meaning and evidence?", "How many colors are on the page?", "Is there any picture at all?", "Is the title short?"],
    correctIndex: 0,
    explanation: "Multimodal literacy evaluates how techniques contribute to meaning, reasoning, and evidence."
  },
  {
    id: "g12-ela-128-1",
    grade: 12,
    subject: "English Language Arts",
    prompt: "12.8.W: Which choice best shows intentional independent writing?",
    answers: ["Choosing an argument with embedded narrative and data visuals because the audience needs both evidence and a human example", "Writing without considering audience", "Using one genre for every purpose", "Avoiding revision and publication"],
    correctIndex: 0,
    explanation: "Independent writers intentionally choose and combine modes and genres for audience and purpose."
  }
];

const grade4MathLessons: Lesson[] = [
  {
    unit: "4.N Numbers & Operations",
    title: "4.N.1 Whole numbers to 1,000,000",
    standard: "Compare and represent whole numbers up to 1,000,000 with an emphasis on place value and equality.",
    explanation: "Read, write, compare, and represent numbers through the hundred-thousands place using place value and equality.",
    example: "Compare 604,218 and 640,128. Which is greater, and which place value proves it?",
    solution: ["Line up both numbers by place value.", "The hundred-thousands digits match: 6 and 6.", "Compare the ten-thousands digits: 0 is less than 4, so 640,128 is greater."],
    miniQuiz: "Write 905,070 in expanded form and compare it to 950,007."
  },
  {
    unit: "4.N Numbers & Operations",
    title: "4.N.2 Multiplication and division problems",
    standard: "Solve real-world and mathematical problems using multiplication and division.",
    explanation: "Use multiplication and division to solve multi-step real-world problems and check that the answer makes sense.",
    example: "A school packs 288 pencils equally into 9 boxes. Then each box gets 6 more pencils. How many pencils are in each box now?",
    solution: ["Divide first: 288 / 9 = 32.", "Add the extra pencils: 32 + 6 = 38.", "Each box has 38 pencils now."],
    miniQuiz: "Create a two-step problem that uses division and multiplication."
  },
  {
    unit: "4.N Numbers & Operations",
    title: "4.N.3 Fractions and decimals",
    standard: "Represent and compare fractions and decimals in real-world and mathematical situations; use place value to understand decimal quantities.",
    explanation: "Compare fractions and decimals by using models, equivalent values, and decimal place value.",
    example: "Which is greater: 0.7 or 0.62? Explain using place value.",
    solution: ["Write 0.7 as 0.70.", "Compare hundredths: 70 hundredths is greater than 62 hundredths.", "So 0.7 is greater than 0.62."],
    miniQuiz: "Compare 3/10 and 0.35 using a decimal or model."
  },
  {
    unit: "4.N Numbers & Operations",
    title: "4.N.4 Money transactions",
    standard: "Determine the value of bills and coins in order to solve monetary transactions.",
    explanation: "Use addition and subtraction with dollars and cents to solve purchase and change problems.",
    example: "You buy a book for $12.85 and a pencil for $0.65. You pay with $20. How much change should you get?",
    solution: ["Add the costs: $12.85 + $0.65 = $13.50.", "Subtract from $20.00.", "$20.00 - $13.50 = $6.50."],
    miniQuiz: "Find the change from $50 after buying items that cost $18.75 and $6.40."
  },
  {
    unit: "4.A Algebraic Reasoning & Algebra",
    title: "4.A.1 Multiple representations of patterns",
    standard: "Describe, create, and analyze multiple representations of patterns to solve real-world and mathematical problems.",
    explanation: "Represent a pattern with a table, rule, words, or numbers, then use it to solve a problem.",
    example: "A pattern starts with 5 and adds 7 each step. Make the first four terms and describe the rule.",
    solution: ["Start at 5.", "Add 7 each time: 5, 12, 19, 26.", "The rule is add 7 each step."],
    miniQuiz: "Create a table for a pattern that starts at 3 and adds 8."
  },
  {
    unit: "4.A Algebraic Reasoning & Algebra",
    title: "4.A.2 Variables in multiplication and division",
    standard: "Use multiplication and division with variables to create number sentences representing a given mathematical situation.",
    explanation: "Use variables to represent unknowns in multiplication and division situations.",
    example: "A garden has 96 plants in 8 equal rows. Write and solve an equation for the number of plants in each row.",
    solution: ["Let p represent the number of plants in each row.", "8 x p = 96.", "p = 12 because 8 x 12 = 96."],
    miniQuiz: "Write an equation for 144 markers shared equally among 12 boxes."
  },
  {
    unit: "4.GM Geometry & Measurement",
    title: "4.GM.1 Classify shapes and solids",
    standard: "Name, describe, classify, and construct polygons and three-dimensional figures based on their attributes; recognize polygons and three-dimensional figures in real-life and mathematical situations.",
    explanation: "Classify shapes and solids using attributes such as parallel sides, angles, faces, edges, and vertices.",
    example: "A polygon has four sides, two pairs of parallel sides, and four right angles. What is it?",
    solution: ["Four sides means it is a quadrilateral.", "Two pairs of parallel sides and four right angles describe a rectangle.", "It could be a rectangle, including a square if all sides are equal."],
    miniQuiz: "Name a solid with circular faces and describe its attributes."
  },
  {
    unit: "4.GM Geometry & Measurement",
    title: "4.GM.2 Measure attributes",
    standard: "Recognize and measure attributes in real-world and mathematical situations using various tools.",
    explanation: "Measure length, mass, capacity, and other attributes using appropriate tools and units.",
    example: "A table is 124 centimeters long. A shelf is 89 centimeters long. How much longer is the table?",
    solution: ["Both measurements are in centimeters.", "Subtract: 124 - 89 = 35.", "The table is 35 centimeters longer."],
    miniQuiz: "Choose a tool and unit to measure the mass of a backpack."
  },
  {
    unit: "4.GM Geometry & Measurement",
    title: "4.GM.3 Elapsed time and time conversions",
    standard: "Determine elapsed time and convert between units of time.",
    explanation: "Solve elapsed-time problems and convert between minutes and hours.",
    example: "A bus ride starts at 8:35 and ends at 10:10. How long is the ride?",
    solution: ["From 8:35 to 9:35 is 1 hour.", "From 9:35 to 10:10 is 35 minutes.", "The ride is 1 hour 35 minutes."],
    miniQuiz: "Convert 2 hours 15 minutes into minutes."
  },
  {
    unit: "4.D Data & Probability",
    title: "4.D.1 Data analysis",
    standard: "Summarize, construct, and analyze data.",
    explanation: "Use tables, charts, and graphs to summarize data, compare categories, and answer multi-step questions.",
    example: "A bar graph shows 18 students chose cats, 24 chose dogs, and 13 chose birds. How many students chose cats or birds?",
    solution: ["Find the categories cats and birds.", "Add them: 18 + 13 = 31.", "31 students chose cats or birds."],
    miniQuiz: "Write one comparison question and one total question from a data table."
  }
];

const grade5MathLessons: Lesson[] = [
  {
    unit: "5.N Numbers & Operations",
    title: "5.N.1 Fractions and decimals",
    standard: "Read, write, represent, and compare fractions and decimals; recognize and write equivalent fractions; convert between fractions and decimals; use fractions and decimals in real-world and mathematical situations.",
    explanation: "Represent fractions and decimals in multiple ways, compare them using place value or common denominators, and convert between equivalent forms.",
    example: "Which is greater, 3/5 or 0.58? Explain using decimals.",
    solution: ["Convert 3/5 to a decimal: 3 / 5 = 0.6.", "Compare 0.60 and 0.58.", "0.60 is greater, so 3/5 is greater than 0.58."],
    miniQuiz: "Write 7/10 as a decimal, then compare it to 0.68."
  },
  {
    unit: "5.N Numbers & Operations",
    title: "5.N.2 Multi-digit division and arithmetic",
    standard: "Divide multi-digit numbers and solve real-world and mathematical problems using arithmetic.",
    explanation: "Use division with multi-digit numbers, interpret remainders, and combine operations to solve real-world problems.",
    example: "A camp has 486 granola bars packed equally into 18 boxes. How many bars are in each box?",
    solution: ["Divide 486 by 18.", "18 x 20 = 360 and 18 x 7 = 126.", "360 + 126 = 486, so each box has 27 bars."],
    miniQuiz: "Divide 728 by 14 and explain how you checked your quotient."
  },
  {
    unit: "5.N Numbers & Operations",
    title: "5.N.3 Fractions, mixed numbers, and decimals",
    standard: "Add and subtract fractions with like and unlike denominators, mixed numbers, and decimals to solve real-world and mathematical problems.",
    explanation: "Find common denominators, regroup mixed numbers when needed, and line up decimal place values before adding or subtracting.",
    example: "A recipe uses 2 1/3 cups of flour and 1 3/4 cups of oats. How much is used altogether?",
    solution: ["Use a common denominator of 12.", "2 1/3 = 2 4/12 and 1 3/4 = 1 9/12.", "Add to get 3 13/12, which is 4 1/12 cups."],
    miniQuiz: "Find 5 1/2 - 2 3/4 and show the regrouping."
  },
  {
    unit: "5.A Algebraic Reasoning & Algebra",
    title: "5.A.1 Patterns of change",
    standard: "Describe and graph patterns of change created through numerical patterns.",
    explanation: "Build tables from numerical rules, describe how values change, and connect ordered pairs to a graph.",
    example: "A rule is y = 3x + 2. What are the outputs for x = 1, 2, 3, and what pattern do they make?",
    solution: ["For x = 1, y = 5.", "For x = 2, y = 8. For x = 3, y = 11.", "The outputs increase by 3 each time x increases by 1."],
    miniQuiz: "Create three ordered pairs for the rule y = 4x - 1."
  },
  {
    unit: "5.A Algebraic Reasoning & Algebra",
    title: "5.A.2 Expressions, equations, and inequalities",
    standard: "Understand and interpret expressions, equations, and inequalities involving variables and whole numbers, and use them to represent and evaluate real-world and mathematical problems.",
    explanation: "Use variables to represent unknown quantities, evaluate expressions, and interpret equations or inequalities in context.",
    example: "Tickets cost $6 each plus a $4 fee. Which expression shows the cost for n tickets?",
    solution: ["The ticket cost changes with n, so use 6n.", "The fee is added once.", "The expression is 6n + 4."],
    miniQuiz: "Evaluate 5n + 12 when n = 9, then write what it could mean in a word problem."
  },
  {
    unit: "5.GM Geometry & Measurement",
    title: "5.GM.1 Classify two- and three-dimensional figures",
    standard: "Describe, identify, classify, and construct two- and three-dimensional figures using their geometric attributes.",
    explanation: "Classify figures using attributes such as parallel sides, angle types, faces, edges, vertices, and symmetry.",
    example: "A quadrilateral has two pairs of parallel sides and no right angles. What could it be?",
    solution: ["Two pairs of parallel sides means it is a parallelogram.", "No right angles means it is not a rectangle or square.", "It could be a non-rectangular parallelogram."],
    miniQuiz: "Describe the faces, edges, and vertices of a triangular prism."
  },
  {
    unit: "5.GM Geometry & Measurement",
    title: "5.GM.2 Volume of rectangular prisms",
    standard: "Determine volume using the object's dimensions. Compare and analyze rectangular prisms with equivalent volume to recognize their different dimensions.",
    explanation: "Find volume by multiplying length, width, and height, then compare different prisms that have the same total cubic units.",
    example: "A box is 6 units long, 4 units wide, and 3 units high. What is its volume?",
    solution: ["Use volume = length x width x height.", "6 x 4 x 3 = 72.", "The volume is 72 cubic units."],
    miniQuiz: "Find a different set of whole-number dimensions for a prism with volume 48 cubic units."
  },
  {
    unit: "5.GM Geometry & Measurement",
    title: "5.GM.3 Measurable attributes and length problems",
    standard: "Understand angle, length, weight, and capacity as measurable attributes of real-world and mathematical objects, using various tools to measure them. Solve real-world problems of length.",
    explanation: "Choose appropriate tools and units for measurement, measure angles and lengths, and solve multi-step length problems.",
    example: "A ribbon is 2.4 meters long. You cut off 85 centimeters. How many centimeters remain?",
    solution: ["Convert 2.4 meters to 240 centimeters.", "Subtract 85 centimeters.", "240 - 85 = 155 centimeters remain."],
    miniQuiz: "A board is 3.25 meters long. How many centimeters long is it?"
  },
  {
    unit: "5.D Data & Probability",
    title: "5.D.1 Range, mean, median, and mode",
    standard: "Create and analyze data to find the range and measures of central tendency (mean, median, mode).",
    explanation: "Organize data, find the range, and calculate or identify mean, median, and mode to summarize a data set.",
    example: "Find the range, median, and mode of 6, 8, 8, 10, 13.",
    solution: ["Range: 13 - 6 = 7.", "Median: the middle value is 8.", "Mode: 8 appears most often."],
    miniQuiz: "Find the mean of 4, 7, 9, 10, 10."
  }
];

const grade4MathQuestions: Question[] = [
  {
    id: "g4-math-4n1-1",
    grade: 4,
    subject: "Mathematics",
    prompt: "4.N.1: Which number is greater than 508,392 but less than 508,920?",
    answers: ["508,293", "508,832", "509,002", "508,092"],
    correctIndex: 1,
    explanation: "508,832 is between 508,392 and 508,920."
  },
  {
    id: "g4-math-4n1-2",
    grade: 4,
    subject: "Mathematics",
    prompt: "4.N.1: Which expanded form equals 706,045?",
    answers: ["700,000 + 6,000 + 400 + 5", "700,000 + 6,000 + 40 + 5", "70,000 + 6,000 + 40 + 5", "700,000 + 60,000 + 40 + 5"],
    correctIndex: 1,
    explanation: "706,045 has 7 hundred-thousands, 6 thousands, 4 tens, and 5 ones."
  },
  {
    id: "g4-math-4n2-1",
    grade: 4,
    subject: "Mathematics",
    prompt: "4.N.2: A bakery packs 324 muffins into boxes of 9. It sells 18 boxes. How many boxes are left?",
    answers: ["18", "24", "36", "42"],
    correctIndex: 0,
    explanation: "324 / 9 = 36 boxes. Then 36 - 18 = 18 boxes left."
  },
  {
    id: "g4-math-4n2-2",
    grade: 4,
    subject: "Mathematics",
    prompt: "4.N.2: A field trip has 156 students. Each bus holds 26 students. How many buses are needed?",
    answers: ["5", "6", "7", "8"],
    correctIndex: 1,
    explanation: "156 / 26 = 6, so 6 buses are needed."
  },
  {
    id: "g4-math-4n3-1",
    grade: 4,
    subject: "Mathematics",
    prompt: "4.N.3: Which number is greatest?",
    answers: ["0.48", "0.6", "0.52", "0.09"],
    correctIndex: 1,
    explanation: "0.6 is 0.60, which is greater than 0.52, 0.48, and 0.09."
  },
  {
    id: "g4-math-4n3-2",
    grade: 4,
    subject: "Mathematics",
    prompt: "4.N.3: Which statement best compares 4/10 and 0.35?",
    answers: ["4/10 is less because 4 is less than 35.", "4/10 equals 0.04.", "4/10 is greater because 0.40 is greater than 0.35.", "They are equal."],
    correctIndex: 2,
    explanation: "4/10 is 0.40, and 0.40 is greater than 0.35."
  },
  {
    id: "g4-math-4n4-1",
    grade: 4,
    subject: "Mathematics",
    prompt: "4.N.4: Marco buys markers for $7.85 and paper for $4.60. He pays with $20. How much change should he get?",
    answers: ["$7.55", "$8.45", "$12.45", "$7.45"],
    correctIndex: 0,
    explanation: "$7.85 + $4.60 = $12.45. Then $20.00 - $12.45 = $7.55."
  },
  {
    id: "g4-math-4n4-2",
    grade: 4,
    subject: "Mathematics",
    prompt: "4.N.4: What is the value of two $20 bills, three $10 bills, 5 quarters, and 6 dimes?",
    answers: ["$70.85", "$71.85", "$71.35", "$72.10"],
    correctIndex: 1,
    explanation: "Bills total $70. Coins total $1.85. The total is $71.85."
  },
  {
    id: "g4-math-4a1-1",
    grade: 4,
    subject: "Mathematics",
    prompt: "4.A.1: A table follows the rule multiply by 4, then add 3. What is the output when the input is 8?",
    answers: ["29", "32", "35", "44"],
    correctIndex: 2,
    explanation: "8 x 4 = 32, and 32 + 3 = 35."
  },
  {
    id: "g4-math-4a1-2",
    grade: 4,
    subject: "Mathematics",
    prompt: "4.A.1: A pattern is 11, 18, 25, 32. Which rule describes it?",
    answers: ["add 6", "add 7", "multiply by 2", "subtract 7"],
    correctIndex: 1,
    explanation: "Each term increases by 7."
  },
  {
    id: "g4-math-4a2-1",
    grade: 4,
    subject: "Mathematics",
    prompt: "4.A.2: Which equation matches this situation? 168 stickers are shared equally among b boxes.",
    answers: ["168 + b", "168 / b", "b - 168", "168 x b"],
    correctIndex: 1,
    explanation: "Sharing equally among b boxes is division: 168 / b."
  },
  {
    id: "g4-math-4a2-2",
    grade: 4,
    subject: "Mathematics",
    prompt: "4.A.2: Solve n / 8 = 14.",
    answers: ["6", "22", "112", "104"],
    correctIndex: 2,
    explanation: "If n / 8 = 14, then n = 14 x 8 = 112."
  },
  {
    id: "g4-math-4gm1-1",
    grade: 4,
    subject: "Mathematics",
    prompt: "4.GM.1: Which shape must have exactly one pair of parallel sides?",
    answers: ["trapezoid", "rectangle", "square", "triangle"],
    correctIndex: 0,
    explanation: "A trapezoid has exactly one pair of parallel sides in this classification."
  },
  {
    id: "g4-math-4gm1-2",
    grade: 4,
    subject: "Mathematics",
    prompt: "4.GM.1: Which solid has two circular bases and one curved surface?",
    answers: ["cone", "cylinder", "sphere", "rectangular prism"],
    correctIndex: 1,
    explanation: "A cylinder has two circular bases and one curved surface."
  },
  {
    id: "g4-math-4gm2-1",
    grade: 4,
    subject: "Mathematics",
    prompt: "4.GM.2: A rope is 3 meters long. A student cuts off 85 centimeters. How many centimeters are left?",
    answers: ["115", "185", "215", "285"],
    correctIndex: 2,
    explanation: "3 meters = 300 centimeters. 300 - 85 = 215 centimeters."
  },
  {
    id: "g4-math-4gm2-2",
    grade: 4,
    subject: "Mathematics",
    prompt: "4.GM.2: Which tool is best for measuring the mass of a bag of apples?",
    answers: ["ruler", "balance scale", "clock", "measuring cup"],
    correctIndex: 1,
    explanation: "A balance scale measures mass."
  },
  {
    id: "g4-math-4gm3-1",
    grade: 4,
    subject: "Mathematics",
    prompt: "4.GM.3: A game starts at 1:45 and ends at 3:20. How long is the game?",
    answers: ["1 hour 25 minutes", "1 hour 35 minutes", "2 hours 35 minutes", "95 hours"],
    correctIndex: 1,
    explanation: "From 1:45 to 2:45 is 1 hour. From 2:45 to 3:20 is 35 minutes."
  },
  {
    id: "g4-math-4gm3-2",
    grade: 4,
    subject: "Mathematics",
    prompt: "4.GM.3: How many minutes are in 3 hours 20 minutes?",
    answers: ["180", "200", "320", "160"],
    correctIndex: 1,
    explanation: "3 hours = 180 minutes. 180 + 20 = 200 minutes."
  },
  {
    id: "g4-math-4d1-1",
    grade: 4,
    subject: "Mathematics",
    prompt: "4.D.1: A data table shows 16 votes for red, 21 for blue, and 13 for green. How many votes were red or green?",
    answers: ["29", "34", "37", "50"],
    correctIndex: 0,
    explanation: "Red or green means add those categories: 16 + 13 = 29."
  },
  {
    id: "g4-math-4d1-2",
    grade: 4,
    subject: "Mathematics",
    prompt: "4.D.1: Which statement best summarizes this data: 8, 10, 10, 12, 15?",
    answers: ["Most values are between 8 and 12.", "All values are greater than 12.", "The data has no repeated value.", "The smallest value is 15."],
    correctIndex: 0,
    explanation: "Four of the five values, 8, 10, 10, and 12, are between 8 and 12."
  }
];

const grade6MathLessons: Lesson[] = [
  {
    unit: "6.N Numbers & Operations",
    title: "6.N.1 Rational number representations",
    standard: "Read, write, and represent rational numbers expressed as integers, fractions, decimals, percents, and ratios; use these representations in real-world and mathematical situations.",
    explanation: "Represent the same rational value as a fraction, decimal, percent, ratio, or integer when possible, and choose the form that best fits the problem.",
    example: "A class has 18 students present out of 24. Write the attendance as a fraction, decimal, percent, and ratio.",
    solution: ["The fraction is 18/24 = 3/4.", "3/4 = 0.75 = 75%.", "The ratio present to total is 18:24, or 3:4."],
    miniQuiz: "Write 0.625 as a fraction and a percent."
  },
  {
    unit: "6.N Numbers & Operations",
    title: "6.N.2 Whole-number and integer operations",
    standard: "Read, write, and model whole-number and integer operations to solve problems.",
    explanation: "Use integer operations to model situations involving gains, losses, temperature changes, elevation, and other positive or negative changes.",
    example: "The temperature is -4 degrees in the morning and rises 11 degrees. What is the new temperature?",
    solution: ["Model the rise as adding 11.", "-4 + 11 = 7.", "The new temperature is 7 degrees."],
    miniQuiz: "A diver is at -18 feet and rises 7 feet. What is the diver's new position?"
  },
  {
    unit: "6.N Numbers & Operations",
    title: "6.N.3 Ratios",
    standard: "Explain and use the concept of ratio and its relationship to other rational numbers and to the multiplication and division of whole numbers. Use ratios to solve problems.",
    explanation: "Use ratios, equivalent ratios, and rate reasoning to compare quantities and solve real-world problems.",
    example: "A recipe uses 3 cups of oats for every 5 cups of flour. How many cups of oats are needed for 20 cups of flour?",
    solution: ["The ratio oats to flour is 3:5.", "20 is 4 times 5.", "Multiply 3 by 4, so 12 cups of oats are needed."],
    miniQuiz: "A team wins 7 games for every 3 losses. How many wins are expected with 12 losses?"
  },
  {
    unit: "6.N Numbers & Operations",
    title: "6.N.4 Operations with rational numbers",
    standard: "Multiply and divide decimals, fractions, and mixed numbers; solve real-world and mathematical problems with rational numbers.",
    explanation: "Multiply and divide fractions, mixed numbers, and decimals carefully, then interpret the result in the original situation.",
    example: "A runner completes 2 1/2 miles each day for 6 days. How many miles is that?",
    solution: ["Convert 2 1/2 to 2.5 or 5/2.", "2.5 x 6 = 15.", "The runner completes 15 miles."],
    miniQuiz: "Find 3/4 of 2 2/3."
  },
  {
    unit: "6.A Algebraic Reasoning & Algebra",
    title: "6.A.1 Relationships between quantities",
    standard: "Recognize and represent relationships between varying quantities; translate from one representation to another; use patterns, tables, graphs, and rules to model and solve mathematical problems.",
    explanation: "Move between words, tables, rules, and graphs to model how one quantity changes with another.",
    example: "A taxi charges $4 plus $2 per mile. Make a rule for the cost c for m miles.",
    solution: ["The starting fee is 4.", "Each mile adds 2m.", "The rule is c = 2m + 4."],
    miniQuiz: "Write a rule for a gym that charges $15 plus $6 per class."
  },
  {
    unit: "6.A Algebraic Reasoning & Algebra",
    title: "6.A.2 Equivalent expressions",
    standard: "Use properties of arithmetic to generate equivalent numerical expressions and evaluate expressions involving positive rational numbers.",
    explanation: "Use the distributive, associative, and commutative properties to rewrite expressions and evaluate rational-number expressions.",
    example: "Rewrite 6(4 + 1.5) using the distributive property and evaluate it.",
    solution: ["Distribute: 6 x 4 + 6 x 1.5.", "That is 24 + 9.", "The value is 33."],
    miniQuiz: "Use the distributive property to rewrite 8(3 + 0.25)."
  },
  {
    unit: "6.A Algebraic Reasoning & Algebra",
    title: "6.A.3 Equations and inequalities",
    standard: "Use equations and inequalities to model and solve mathematical problems and use the idea of maintaining equality to solve equations. Interpret solutions in the original context.",
    explanation: "Solve equations and inequalities by doing the same operation to each side, then explain what the answer means.",
    example: "A student has $18 after buying 3 notebooks that cost d dollars each. She started with $39. Solve 39 - 3d = 18.",
    solution: ["Subtract 18 from 39 to find the amount spent: 21.", "3d = 21.", "d = 7, so each notebook cost $7."],
    miniQuiz: "Solve 5x + 4 = 44 and explain the value of x."
  },
  {
    unit: "6.GM Geometry & Measurement",
    title: "6.GM.1 Congruence and symmetry",
    standard: "Use translations, reflections, and rotations to establish congruence and understand symmetry (not on a coordinate plane).",
    explanation: "Identify transformations that move a figure without changing its size or shape, and use them to reason about congruence and symmetry.",
    example: "A triangle is flipped over a vertical line. What transformation occurred, and is the image congruent?",
    solution: ["A flip over a line is a reflection.", "Reflections preserve side lengths and angles.", "The image is congruent to the original triangle."],
    miniQuiz: "Describe a rotation that maps a square onto itself."
  },
  {
    unit: "6.GM Geometry & Measurement",
    title: "6.GM.2 Area modeling",
    standard: "Use mathematical modeling to calculate the area of squares, parallelograms, and triangles to solve problems.",
    explanation: "Use area formulas and diagrams to find the area of squares, parallelograms, and triangles in real-world contexts.",
    example: "A triangle has a base of 14 inches and a height of 9 inches. What is its area?",
    solution: ["Use area = 1/2 x base x height.", "1/2 x 14 x 9 = 63.", "The area is 63 square inches."],
    miniQuiz: "Find the area of a parallelogram with base 12 cm and height 7 cm."
  },
  {
    unit: "6.GM Geometry & Measurement",
    title: "6.GM.3 Angle relationships",
    standard: "Understand and use relationships between angles in geometric figures.",
    explanation: "Use angle relationships such as straight angles, vertical angles, and triangle angle sums to solve for missing measures.",
    example: "Two angles form a straight line. One angle is 128 degrees. What is the other angle?",
    solution: ["Angles on a straight line total 180 degrees.", "180 - 128 = 52.", "The missing angle is 52 degrees."],
    miniQuiz: "A triangle has angles 44 degrees and 68 degrees. Find the third angle."
  },
  {
    unit: "6.GM Geometry & Measurement",
    title: "6.GM.4 Measurement conversions",
    standard: "Choose appropriate units of measurement and use ratios to convert within measurement systems to model and solve real-world and mathematical problems.",
    explanation: "Use conversion ratios within a measurement system to change units and solve practical problems.",
    example: "A trail is 3.5 miles long. How many feet long is it?",
    solution: ["Use 1 mile = 5,280 feet.", "3.5 x 5,280 = 18,480.", "The trail is 18,480 feet long."],
    miniQuiz: "Convert 4.25 pounds to ounces."
  },
  {
    unit: "6.D Data & Probability",
    title: "6.D.1 Interpret and analyze data",
    standard: "Interpret and analyze data.",
    explanation: "Use data displays and summaries to compare values, identify trends, and make supported conclusions.",
    example: "A data set is 12, 14, 15, 15, 19, 21. What does the median tell you?",
    solution: ["There are six values, so average the two middle values.", "(15 + 15) / 2 = 15.", "Half the values are at or below 15 and half are at or above 15."],
    miniQuiz: "Find the median and range of 8, 11, 12, 17, 22."
  },
  {
    unit: "6.D Data & Probability",
    title: "6.D.2 Probability",
    standard: "Use probability to model and solve mathematical problems; represent probabilities using fractions and decimals.",
    explanation: "Find probability as favorable outcomes divided by total outcomes, then represent it as a fraction or decimal.",
    example: "A bag has 5 red marbles, 3 blue marbles, and 2 green marbles. What is the probability of choosing blue?",
    solution: ["There are 10 marbles total.", "There are 3 blue marbles.", "The probability is 3/10 = 0.3."],
    miniQuiz: "Find the probability of rolling an even number on a number cube."
  }
];

const grade7MathLessons: Lesson[] = [
  {
    unit: "7.N Numbers & Operations",
    title: "7.N.1 Rational numbers and absolute value",
    standard: "Read, write, represent, and compare rational numbers, expressed as integers, fractions, and decimals. Explain and apply the concept of absolute value.",
    explanation: "Compare positive and negative rational numbers on a number line, convert between forms, and use absolute value as distance from zero.",
    example: "Order -2.4, -9/4, 1.75, and |-3| from least to greatest.",
    solution: ["Convert -9/4 to -2.25 and |-3| to 3.", "Compare the values: -2.4, -2.25, 1.75, 3.", "The order is -2.4, -9/4, 1.75, |-3|."],
    miniQuiz: "Compare -3.6 and -18/5, then explain using absolute value."
  },
  {
    unit: "7.N Numbers & Operations",
    title: "7.N.2 Rational-number calculations and exponents",
    standard: "Calculate with rational numbers, with and without positive integer exponents, to model and solve mathematical problems.",
    explanation: "Use operations with fractions, decimals, integers, and positive integer exponents to model multi-step problems.",
    example: "Evaluate (-2)^3 + 4.5 / 1.5.",
    solution: ["(-2)^3 = -8.", "4.5 / 1.5 = 3.", "-8 + 3 = -5."],
    miniQuiz: "Evaluate 3^2 - 2(1.75 + 0.25)."
  },
  {
    unit: "7.A Algebraic Reasoning & Algebra",
    title: "7.A.1 Proportional and non-proportional relationships",
    standard: "Explain the concept of proportionality in mathematical models and situations and distinguish between proportional and non-proportional relationships.",
    explanation: "A proportional relationship has a constant ratio and can be represented by y = kx; non-proportional relationships do not keep the same multiplier.",
    example: "A table has x: 2, 4, 6 and y: 5, 10, 15. Is it proportional?",
    solution: ["Check y/x for each pair.", "5/2 = 2.5, 10/4 = 2.5, and 15/6 = 2.5.", "The relationship is proportional with constant of proportionality 2.5."],
    miniQuiz: "Decide whether points (3, 12), (5, 20), and (8, 30) show a proportional relationship."
  },
  {
    unit: "7.A Algebraic Reasoning & Algebra",
    title: "7.A.2 Solve proportional relationships",
    standard: "Identify and justify proportional relationships using mathematical models and situations; solve problems involving proportional relationships and interpret results in the original context.",
    explanation: "Use equivalent ratios, unit rates, tables, graphs, and equations to solve proportional problems and explain the result.",
    example: "A car travels 156 miles in 3 hours at a constant speed. How far will it travel in 5 hours?",
    solution: ["Find the unit rate: 156 / 3 = 52 miles per hour.", "Multiply by 5 hours.", "52 x 5 = 260 miles."],
    miniQuiz: "A printer prints 84 pages in 6 minutes. How many pages in 11 minutes?"
  },
  {
    unit: "7.A Algebraic Reasoning & Algebra",
    title: "7.A.3 Equations and inequalities with rational numbers",
    standard: "Represent mathematical situations using equations and inequalities involving variables and rational numbers.",
    explanation: "Write and solve equations or inequalities with rational coefficients and constants to model a situation.",
    example: "A download starts with 2.5 GB and adds 0.75 GB each minute. Write an inequality for at least 8 GB after m minutes.",
    solution: ["Start with 2.5.", "Add 0.75m for m minutes.", "The inequality is 2.5 + 0.75m >= 8."],
    miniQuiz: "Write an equation for a $12 fee plus $4.50 per hour totaling $39."
  },
  {
    unit: "7.A Algebraic Reasoning & Algebra",
    title: "7.A.4 Equivalent expressions",
    standard: "Use order of operations and properties of operations to generate and evaluate equivalent numerical and algebraic expressions.",
    explanation: "Apply order of operations, combine like terms, and use properties to rewrite and evaluate expressions.",
    example: "Simplify 3(2x - 5) + 4x.",
    solution: ["Distribute: 6x - 15 + 4x.", "Combine like terms: 10x - 15.", "The equivalent expression is 10x - 15."],
    miniQuiz: "Simplify 5(y + 2) - 3y + 7."
  },
  {
    unit: "7.GM Geometry & Measurement",
    title: "7.GM.1 Surface area and volume",
    standard: "Develop and understand the concept of surface area and volume of rectangular prisms with rational-valued edge lengths.",
    explanation: "Calculate volume and surface area of rectangular prisms, including edge lengths written as decimals or fractions.",
    example: "A prism measures 2.5 cm by 4 cm by 3 cm. What is its volume?",
    solution: ["Use volume = length x width x height.", "2.5 x 4 x 3 = 30.", "The volume is 30 cubic centimeters."],
    miniQuiz: "Find the volume of a prism with dimensions 1.5, 6, and 4 units."
  },
  {
    unit: "7.GM Geometry & Measurement",
    title: "7.GM.2 Trapezoids and composite figures",
    standard: "Use mathematical models and problems to calculate and justify the area of trapezoids and the area and perimeter of composite figures with rational measurements.",
    explanation: "Break composite figures into familiar shapes and use area and perimeter formulas with rational measurements.",
    example: "A trapezoid has bases 8 cm and 14 cm and height 5 cm. What is its area?",
    solution: ["Use area = 1/2(b1 + b2)h.", "1/2(8 + 14)5 = 1/2(22)5.", "The area is 55 square centimeters."],
    miniQuiz: "Find the area of a trapezoid with bases 6.5 and 9.5 and height 4."
  },
  {
    unit: "7.GM Geometry & Measurement",
    title: "7.GM.3 Proportions and measurement",
    standard: "Use mathematical models and reasoning with proportions and ratios to determine measurements, justify formulas, and solve problems.",
    explanation: "Use ratios and proportions to find unknown measurements in scale drawings, similar figures, and measurement models.",
    example: "A scale drawing uses 1 inch for 6 feet. A wall is 4.5 inches long in the drawing. How long is the wall?",
    solution: ["Use the scale 1 inch:6 feet.", "4.5 x 6 = 27.", "The wall is 27 feet long."],
    miniQuiz: "A model uses 2 cm for 5 m. How many meters does 7 cm represent?"
  },
  {
    unit: "7.GM Geometry & Measurement",
    title: "7.GM.4 Transformations and dilations",
    standard: "Analyze the effect of translations, reflections, rotations, and dilations on the attributes of two-dimensional figures on and off the coordinate plane.",
    explanation: "Describe how transformations affect position, orientation, congruence, and size, especially how dilations change lengths by a scale factor.",
    example: "A rectangle is dilated by a scale factor of 3. What happens to each side length?",
    solution: ["A dilation changes size by the scale factor.", "Each side length is multiplied by 3.", "The new rectangle is similar, not congruent unless the scale factor is 1."],
    miniQuiz: "Explain what changes and what stays the same after a reflection."
  },
  {
    unit: "7.D Data & Probability",
    title: "7.D.1 Data displays and analysis",
    standard: "Interpret and analyze data, creating the most appropriate display, using a variety of tools.",
    explanation: "Choose useful data displays, compare distributions, and use summaries to support conclusions.",
    example: "Which display is best for showing how a student's quiz scores changed over 10 weeks?",
    solution: ["The data changes over time.", "A line graph clearly shows change over time.", "A line graph is the best choice."],
    miniQuiz: "Choose a display for comparing favorite electives across a class and explain why."
  },
  {
    unit: "7.D Data & Probability",
    title: "7.D.2 Probability and proportional reasoning",
    standard: "Calculate and use proportional reasoning with probabilities to model and solve mathematical problems.",
    explanation: "Use probability as a ratio and apply proportional reasoning to predict outcomes or compare likelihoods.",
    example: "A spinner lands on red with probability 0.35. In 200 spins, about how many red results should you expect?",
    solution: ["Use expected outcomes = probability x trials.", "0.35 x 200 = 70.", "Expect about 70 red results."],
    miniQuiz: "A player makes 3/8 of their shots. About how many makes in 64 shots?"
  }
];

const preAlgebraMathLessons: Lesson[] = [
  {
    unit: "PA.N Numbers & Operations",
    title: "PA.N.1 Real numbers",
    standard: "Read, write, compare, classify, and represent real numbers, and use them to solve problems in various contexts.",
    explanation: "Classify numbers as rational or irrational, compare real numbers in different forms, and use real-number reasoning in context.",
    example: "Order -sqrt(16), -3.75, 0.8, and 5/4 from least to greatest.",
    solution: ["sqrt(16) = 4, so -sqrt(16) = -4.", "5/4 = 1.25.", "The order is -sqrt(16), -3.75, 0.8, 5/4."],
    miniQuiz: "Classify -2.5, sqrt(9), and sqrt(7) as rational or irrational."
  },
  {
    unit: "PA.A Algebraic Reasoning & Algebra",
    title: "PA.A.1 Linear and nonlinear functions",
    standard: "Explain the concept of function in mathematical situations and distinguish between the concepts of linear and nonlinear functions.",
    explanation: "A function assigns each input exactly one output. Linear functions change by a constant rate, while nonlinear functions do not.",
    example: "Which is linear: y = 3x - 2 or y = x^2 + 1?",
    solution: ["y = 3x - 2 has a constant rate of change of 3.", "y = x^2 + 1 does not change by a constant amount.", "y = 3x - 2 is linear."],
    miniQuiz: "Decide whether y = 2^x is linear or nonlinear and explain why."
  },
  {
    unit: "PA.A Algebraic Reasoning & Algebra",
    title: "PA.A.2 Linear functions in context",
    standard: "Identify and justify linear functions using mathematical models and situations; solve problems involving linear functions and interpret results in the original context.",
    explanation: "Use slope, y-intercept, tables, graphs, and equations to identify and solve linear-function problems.",
    example: "A phone plan costs $18 plus $0.12 per text. Write a linear rule for c texts.",
    solution: ["The fixed cost is 18.", "Each text adds 0.12c.", "The rule is y = 0.12c + 18."],
    miniQuiz: "Write a rule for a cab ride that costs $5 plus $2.40 per mile."
  },
  {
    unit: "PA.A Algebraic Reasoning & Algebra",
    title: "PA.A.3 Equivalent expressions",
    standard: "Generate equivalent numerical and algebraic expressions and use algebraic properties to evaluate expressions.",
    explanation: "Use distribution, combining like terms, and order of operations to rewrite and evaluate expressions.",
    example: "Simplify 4(2x - 3) - 5(x + 1).",
    solution: ["Distribute: 8x - 12 - 5x - 5.", "Combine like terms.", "The equivalent expression is 3x - 17."],
    miniQuiz: "Simplify 6(a - 2) + 3(2a + 5)."
  },
  {
    unit: "PA.A Algebraic Reasoning & Algebra",
    title: "PA.A.4 Linear equations and inequalities",
    standard: "Represent and solve problems using mathematical models and situations with equations and inequalities involving linear expressions.",
    explanation: "Write and solve equations or inequalities with linear expressions on one or both sides, then interpret the solution.",
    example: "Solve 3(2x - 1) >= 21.",
    solution: ["Distribute: 6x - 3 >= 21.", "Add 3: 6x >= 24.", "Divide by 6: x >= 4."],
    miniQuiz: "Solve 5x + 8 = 2x + 29."
  },
  {
    unit: "PA.GM Geometry & Measurement",
    title: "PA.GM.1 Pythagorean theorem",
    standard: "Apply the Pythagorean theorem to solve problems involving triangles.",
    explanation: "Use a^2 + b^2 = c^2 for right triangles, where c is the hypotenuse, to find missing side lengths.",
    example: "A right triangle has legs of 9 and 12. What is the hypotenuse?",
    solution: ["Use 9^2 + 12^2 = c^2.", "81 + 144 = 225.", "c = 15."],
    miniQuiz: "Find the missing leg if the hypotenuse is 13 and one leg is 5."
  },
  {
    unit: "PA.GM Geometry & Measurement",
    title: "PA.GM.2 Surface area and volume",
    standard: "Justify and use formulas to calculate surface area and volume of three-dimensional figures.",
    explanation: "Use formulas for prisms, cylinders, pyramids, cones, and spheres when appropriate, and explain what each part of the formula represents.",
    example: "A cylinder has radius 3 cm and height 10 cm. What is its volume in terms of pi?",
    solution: ["Use V = pi r^2 h.", "Substitute r = 3 and h = 10.", "V = 90pi cubic centimeters."],
    miniQuiz: "Find the volume of a rectangular prism with dimensions 2.5, 4, and 7."
  },
  {
    unit: "PA.D Data & Probability",
    title: "PA.D.1 Scatter plots and lines of best fit",
    standard: "Display and interpret data in a variety of ways, including using scatter plots and approximate lines of best fit. Use the line of best fit and average rate of change to make predictions and draw conclusions about data.",
    explanation: "Use scatter plots to describe association, estimate a line of best fit, and use its rate of change to make predictions.",
    example: "A line of best fit is y = 2.5x + 10. Predict y when x = 12.",
    solution: ["Substitute x = 12.", "y = 2.5(12) + 10.", "y = 40."],
    miniQuiz: "Use y = -1.2x + 95 to predict y when x = 20."
  },
  {
    unit: "PA.D Data & Probability",
    title: "PA.D.2 Experimental probability",
    standard: "Calculate experimental probabilities and reason about probabilities to model and solve problems.",
    explanation: "Use observed results to calculate experimental probability and compare it with expected probability when modeling events.",
    example: "A spinner lands on green 18 times in 60 spins. What is the experimental probability of green?",
    solution: ["Use green outcomes over total trials.", "18/60 = 3/10.", "The experimental probability is 0.3."],
    miniQuiz: "A player wins 22 of 50 games. Find the experimental probability of winning."
  }
];

const algebra1MathLessons: Lesson[] = [
  {
    unit: "A1.N Numbers & Operations",
    title: "A1.N.1 Exponents, square roots, and cube roots",
    standard: "Extend the understanding of exponents to include square roots and cube roots.",
    explanation: "Use square roots and cube roots as inverse operations for powers, estimate irrational roots, and simplify perfect-square and perfect-cube roots.",
    example: "Simplify sqrt(144) + cubert(27) - 2^4.",
    solution: ["sqrt(144) = 12.", "cubert(27) = 3 and 2^4 = 16.", "12 + 3 - 16 = -1."],
    miniQuiz: "Simplify cubert(125) + sqrt(81) - 3^2."
  },
  {
    unit: "A1.A Algebraic Reasoning & Algebra",
    title: "A1.A.1 Linear, absolute value, and systems equations",
    standard: "Represent and solve mathematical and real-world problems using linear equations, absolute value equations, and systems of equations; interpret solutions in the original context.",
    explanation: "Model situations with equations, absolute value equations, and systems, then solve and explain what the solution means.",
    example: "Solve the system y = 2x + 1 and y = -x + 10.",
    solution: ["Set the expressions equal: 2x + 1 = -x + 10.", "3x = 9, so x = 3.", "y = 2(3) + 1 = 7, so the solution is (3, 7)."],
    miniQuiz: "Solve |x - 4| = 9 and explain why there are two solutions."
  },
  {
    unit: "A1.A Algebraic Reasoning & Algebra",
    title: "A1.A.2 Linear and compound inequalities",
    standard: "Represent and solve real-world and mathematical problems using linear inequalities and compound inequalities; interpret solutions in the original context.",
    explanation: "Write and solve inequalities and compound inequalities, graph solution sets, and interpret boundaries in context.",
    example: "Solve -2 <= 3x + 4 < 16.",
    solution: ["Subtract 4 from all parts: -6 <= 3x < 12.", "Divide all parts by 3.", "-2 <= x < 4."],
    miniQuiz: "Solve 5x - 7 >= 18 and interpret the solution."
  },
  {
    unit: "A1.A Algebraic Reasoning & Algebra",
    title: "A1.A.3 Equivalent expressions and equations",
    standard: "Create and evaluate equivalent algebraic expressions and equations using algebraic properties.",
    explanation: "Use algebraic properties to factor, distribute, combine like terms, and create equivalent expressions or equations.",
    example: "Factor 6x + 15 and evaluate the equivalent expression when x = 4.",
    solution: ["The greatest common factor is 3.", "6x + 15 = 3(2x + 5).", "When x = 4, 3(8 + 5) = 39."],
    miniQuiz: "Rewrite 4(x - 3) + 2x in simplest equivalent form."
  },
  {
    unit: "A1.A Algebraic Reasoning & Algebra",
    title: "A1.A.3 Quadratic equations by factoring",
    standard: "Create, factor, and solve simple quadratic equations using algebraic properties.",
    explanation: "Recognize quadratic equations with an x^2 term, factor trinomials when possible, and use the zero-product property to find solutions.",
    example: "Solve x^2 - 7x + 12 = 0.",
    solution: ["Find two numbers that multiply to 12 and add to -7: -3 and -4.", "Factor: (x - 3)(x - 4) = 0.", "Use the zero-product property: x = 3 or x = 4."],
    miniQuiz: "Solve x^2 - 9x + 20 = 0 by factoring."
  },
  {
    unit: "A1.A Algebraic Reasoning & Algebra",
    title: "A1.A.4 Linear equation analysis",
    standard: "Analyze real-world and mathematical problems involving linear equations.",
    explanation: "Analyze slope, intercepts, rate of change, and meaning of solutions in linear models.",
    example: "A water tank starts with 120 gallons and loses 8 gallons per minute. When will it have 40 gallons?",
    solution: ["Model the amount with 120 - 8m = 40.", "Subtract 120: -8m = -80.", "m = 10, so it will have 40 gallons after 10 minutes."],
    miniQuiz: "A savings account starts at $45 and grows by $12 per week. When will it reach $177?"
  },
  {
    unit: "A1.F Functions",
    title: "A1.F.1 Functions and covariation",
    standard: "Understand functions as descriptions of covariation (how related quantities vary together) in real-world and mathematical problems.",
    explanation: "Describe how two quantities change together and identify inputs, outputs, rates of change, and meaning in context.",
    example: "A candle is 18 cm tall and burns 1.5 cm each hour. Describe how height varies with time.",
    solution: ["The input is time in hours.", "The output is candle height.", "The height decreases by 1.5 cm each hour: h = 18 - 1.5t."],
    miniQuiz: "Describe the covariation in a taxi fare that starts at $4 and increases $2.25 per mile."
  },
  {
    unit: "A1.F Functions",
    title: "A1.F.2 Families of functions",
    standard: "Recognize and understand that families of functions are defined by their characteristics.",
    explanation: "Identify function families by features such as constant rate, curved growth, symmetry, intercepts, and common equation forms.",
    example: "Which family does y = x^2 - 6x + 8 belong to, and what feature helps you know?",
    solution: ["The equation has an x^2 term.", "Functions with a squared variable are quadratic.", "It belongs to the quadratic family."],
    miniQuiz: "Identify the family of y = 3(2^x) and name one characteristic."
  },
  {
    unit: "A1.F Functions",
    title: "A1.F.3 Multiple representations of functions",
    standard: "Represent functions in multiple ways and use the representation to interpret real-world and mathematical problems.",
    explanation: "Translate among tables, graphs, equations, and verbal descriptions to interpret function behavior.",
    example: "A line passes through (0, 5) and (4, 17). Write an equation.",
    solution: ["Find the slope: (17 - 5) / (4 - 0) = 3.", "The y-intercept is 5.", "The equation is y = 3x + 5."],
    miniQuiz: "Write a table for y = -2x + 7 using x = 0, 1, 2."
  },
  {
    unit: "A1.D Data & Probability",
    title: "A1.D.1 Data and linear predictions",
    standard: "Display, describe, and compare data. For linear relationships, make predictions, and assess the reliability of those predictions.",
    explanation: "Use data displays and linear models to compare data, predict values, and judge whether a prediction is reasonable.",
    example: "A line of best fit is y = 4.2x + 18. Predict y when x = 10 and decide whether x = 100 would be reliable if the data only goes to x = 12.",
    solution: ["At x = 10, y = 4.2(10) + 18 = 60.", "x = 100 is far outside the data range.", "That prediction would be less reliable."],
    miniQuiz: "Explain why interpolation is usually more reliable than extrapolation."
  },
  {
    unit: "A1.D Data & Probability",
    title: "A1.D.2 Probability concepts",
    standard: "Calculate probabilities, and apply probability concepts.",
    explanation: "Calculate theoretical and experimental probability, use complements, and reason about simple or compound events.",
    example: "A bag has 4 red, 5 blue, and 3 green counters. What is the probability of not selecting blue?",
    solution: ["There are 12 counters total.", "Not blue means red or green: 4 + 3 = 7.", "The probability is 7/12."],
    miniQuiz: "If P(rain) = 0.35, find P(not rain)."
  }
];

const geometryMathLessons: Lesson[] = [
  {
    unit: "G.RL Geometry: Reasoning & Logic",
    title: "G.RL.1 Mathematical arguments",
    standard: "Use appropriate tools and logic, including algebraic methods, to evaluate mathematical arguments.",
    explanation: "Evaluate whether a geometric argument is valid by checking definitions, diagrams, algebraic steps, and logical conclusions.",
    example: "A student claims two angles are congruent because they are supplementary. Is the argument always valid?",
    solution: ["Supplementary angles add to 180 degrees.", "They are congruent only when each angle measures 90 degrees.", "The claim is not always valid without more information."],
    miniQuiz: "Find the flaw in this argument: all rectangles have four right angles, so all quadrilaterals with four right angles are squares."
  },
  {
    unit: "G.2D Geometry: Two-Dimensional Shapes",
    title: "G.2D.1 Lines, angles, polygons, and proofs",
    standard: "Discover, evaluate, and analyze the relationships between lines, angles, and polygons to solve real-world and mathematical problems; express proofs in a form that clearly justifies the reasoning (e.g., two-column proofs, paragraph proofs, flowcharts).",
    explanation: "Use angle relationships, polygon properties, congruence, similarity, and proof structures to justify geometric conclusions.",
    example: "Two parallel lines are cut by a transversal. One angle is 68 degrees. What is the measure of its alternate interior angle?",
    solution: ["Parallel lines create congruent alternate interior angles.", "The given angle is 68 degrees.", "The alternate interior angle is also 68 degrees."],
    miniQuiz: "Write a short proof explaining why vertical angles are congruent."
  },
  {
    unit: "G.3D Geometry: Three-Dimensional Shapes",
    title: "G.3D.1 Three-dimensional figures",
    standard: "Solve real-world and mathematical problems involving three-dimensional figures.",
    explanation: "Solve problems using volume, surface area, cross-sections, and relationships among dimensions of three-dimensional figures.",
    example: "A rectangular prism is 8 cm by 5 cm by 12 cm. What is its surface area?",
    solution: ["Use surface area = 2(lw + lh + wh).", "2(8 x 5 + 8 x 12 + 5 x 12) = 2(40 + 96 + 60).", "The surface area is 392 square centimeters."],
    miniQuiz: "Find the volume of a cone with radius 3 and height 10 in terms of pi."
  },
  {
    unit: "G.C Geometry: Circles",
    title: "G.C.1 Circle properties",
    standard: "Solve real-world and mathematical problems using the properties of circles.",
    explanation: "Use circumference, area, arc length, sector area, tangent properties, chords, and angle relationships in circles.",
    example: "A circle has radius 9. What is the length of a 120-degree arc in terms of pi?",
    solution: ["Arc length is the fraction of the circle times circumference.", "120/360 = 1/3, and circumference is 18pi.", "The arc length is 6pi."],
    miniQuiz: "Find the area of a sector with radius 8 and central angle 90 degrees."
  },
  {
    unit: "G.Q Geometry: Quadratic Models",
    title: "G.Q.1 Quadratic functions and equations in geometry",
    standard: "Use quadratic functions and equations to model and solve geometric problems involving parabolas, area, intersections, and dimension constraints.",
    explanation: "Connect quadratic expressions to geometry by factoring area models, identifying zeros as intercepts, finding vertices of parabolic models, and solving equations that come from geometric measurements.",
    example: "A rectangle has area x^2 - 9x + 20. Which side lengths match the area expression?",
    solution: ["Factor the quadratic expression.", "x^2 - 9x + 20 = (x - 4)(x - 5).", "The side lengths are x - 4 and x - 5."],
    miniQuiz: "Solve x^2 - 10x + 24 = 0 and explain what the solutions could represent in a geometric model."
  },
  {
    unit: "G.RT Geometry: Right Triangle Trigonometry",
    title: "G.RT.1 Right triangles and trigonometry",
    standard: "Apply mathematical relationships of right triangles and trigonometric ratios to solve real-world and mathematical problems.",
    explanation: "Use the Pythagorean theorem, special right triangles, and sine, cosine, and tangent ratios to find missing side lengths and angle measures.",
    example: "A right triangle has an angle of 35 degrees and opposite side 12. Which equation finds the hypotenuse h?",
    solution: ["Sine uses opposite over hypotenuse.", "sin(35 degrees) = 12/h.", "Solve by h = 12 / sin(35 degrees)."],
    miniQuiz: "A ladder makes a 70-degree angle with the ground and reaches 18 feet high. Write a trig equation to find the ladder length."
  }
];

const algebra2MathLessons: Lesson[] = [
  {
    unit: "A2.N Numbers & Operations",
    title: "A2.N.1 Complex numbers, radicals, and rational exponents",
    standard: "Extend the understanding of numbers and operations to include complex numbers, radical expressions, and expressions written with rational exponents.",
    explanation: "Simplify and operate with complex numbers, radical expressions, and rational exponents by using exponent rules and inverse relationships.",
    example: "Simplify (3 + 2i) + (5 - 7i) and 16^(3/4).",
    solution: ["Combine real and imaginary parts: 8 - 5i.", "16^(3/4) means the fourth root of 16, cubed.", "The fourth root of 16 is 2, and 2^3 = 8."],
    miniQuiz: "Simplify (4 - 3i)(2 + i) and 27^(2/3)."
  },
  {
    unit: "A2.N Numbers & Operations",
    title: "A2.N.2 Matrices",
    standard: "Extend the understanding of numbers and operations to matrices.",
    explanation: "Represent information in matrices and perform matrix operations such as addition, scalar multiplication, and valid matrix multiplication.",
    example: "Add matrices [[2, -1], [4, 3]] and [[5, 6], [-2, 1]].",
    solution: ["Add corresponding entries.", "Top row: 2 + 5 = 7 and -1 + 6 = 5.", "Bottom row: 4 + -2 = 2 and 3 + 1 = 4, so the sum is [[7, 5], [2, 4]]."],
    miniQuiz: "Multiply every entry in [[3, -2], [0, 5]] by -2."
  },
  {
    unit: "A2.A Algebraic Reasoning & Algebra",
    title: "A2.A.1 Nonlinear equations and systems",
    standard: "Represent and solve mathematical and real-world problems using nonlinear equations, systems of linear equations, and systems of linear inequalities; interpret the solutions in the original context.",
    explanation: "Solve quadratic and other nonlinear equations, systems of equations, and systems of inequalities, then interpret intersections or solution regions.",
    example: "Solve x^2 - 5x + 6 = 0.",
    solution: ["Factor the quadratic: (x - 2)(x - 3) = 0.", "Set each factor equal to zero.", "The solutions are x = 2 and x = 3."],
    miniQuiz: "Solve the system y = x + 1 and y = x^2 - 5."
  },
  {
    unit: "A2.A Algebraic Reasoning & Algebra",
    title: "A2.A.2 Equivalent algebraic expressions",
    standard: "Generate and evaluate equivalent algebraic expressions and equations using various strategies.",
    explanation: "Use factoring, expanding, completing the square, exponent rules, and rational-expression strategies to create equivalent expressions.",
    example: "Rewrite x^2 + 8x + 16 in factored form.",
    solution: ["Recognize a perfect-square trinomial.", "x^2 + 8x + 16 = x^2 + 2(4)x + 4^2.", "The factored form is (x + 4)^2."],
    miniQuiz: "Factor 2x^2 - 18 completely."
  },
  {
    unit: "A2.A Algebraic Reasoning & Algebra",
    title: "A2.A.3 Sequences and series",
    standard: "Represent and solve mathematical and real-world problems involving arithmetic and geometric sequences and series.",
    explanation: "Identify arithmetic and geometric patterns, write explicit and recursive rules, and find terms or sums in sequences and series.",
    example: "A geometric sequence starts 3, 12, 48. Find the 6th term.",
    solution: ["The common ratio is 4.", "Use a_n = 3(4)^(n - 1).", "a_6 = 3(4^5) = 3,072."],
    miniQuiz: "Find the 20th term of the arithmetic sequence 7, 12, 17, 22, ..."
  },
  {
    unit: "A2.F Functions",
    title: "A2.F.1 Functions and covariation",
    standard: "Understand functions as descriptions of covariation (how related quantities vary together).",
    explanation: "Analyze how quantities vary together across linear, quadratic, exponential, and other function types.",
    example: "A population doubles every 6 hours. What type of covariation does this describe?",
    solution: ["A constant doubling factor means multiplicative change.", "Multiplicative change over equal intervals is exponential.", "The situation is modeled by an exponential function."],
    miniQuiz: "Describe how y changes as x increases in y = (x - 2)^2."
  },
  {
    unit: "A2.F Functions",
    title: "A2.F.2 Function operations, composition, and inverses",
    standard: "Analyze functions through algebraic combinations, compositions, and inverses if they exist.",
    explanation: "Add, subtract, multiply, divide, and compose functions, and determine whether an inverse exists based on function behavior.",
    example: "If f(x) = 2x + 3 and g(x) = x^2, find f(g(4)).",
    solution: ["First find g(4) = 16.", "Then find f(16) = 2(16) + 3.", "f(g(4)) = 35."],
    miniQuiz: "If f(x) = x - 5 and g(x) = 3x, find g(f(8))."
  },
  {
    unit: "A2.D Data & Probability",
    title: "A2.D.1 Linear and nonlinear data models",
    standard: "Display, describe, and compare data. For linear and nonlinear relationships, make predictions and assess the reliability of those predictions.",
    explanation: "Choose appropriate linear or nonlinear models for data, make predictions, and explain whether predictions are interpolation or extrapolation.",
    example: "A quadratic model fits height data for a thrown ball. Is using it to predict the height 2 seconds after the recorded data reliable?",
    solution: ["A prediction outside the data range is extrapolation.", "Extrapolation is usually less reliable than interpolation.", "The prediction may be unreliable unless the model is known to apply beyond the data."],
    miniQuiz: "Explain when an exponential model is more appropriate than a linear model."
  },
  {
    unit: "A2.D Data & Probability",
    title: "A2.D.2 Statistical inferences and predictions",
    standard: "Analyze statistical thinking to draw inferences, make predictions, and justify conclusions.",
    explanation: "Use samples, variability, measures of center, spread, and probability reasoning to make justified statistical conclusions.",
    example: "A random sample of 80 students shows 60% support a schedule change. What prediction is reasonable for 1,200 students?",
    solution: ["Use the sample proportion as an estimate.", "60% of 1,200 is 0.60 x 1,200 = 720.", "About 720 students may support the change, assuming the sample is representative."],
    miniQuiz: "Explain why a random sample is stronger evidence than a convenience sample."
  }
];

const precalculusMathLessons: Lesson[] = [
  {
    unit: "PC.F Functions",
    title: "PC.F.1 Analyze functions and relations",
    standard: "Analyze functions and relations.",
    explanation: "Analyze domain, range, intercepts, intervals of increase or decrease, transformations, and whether a relation is a function.",
    example: "For f(x) = sqrt(x - 4), what is the domain?",
    solution: ["The expression under the square root must be nonnegative.", "x - 4 >= 0.", "The domain is x >= 4."],
    miniQuiz: "Find the domain of g(x) = 1 / (x - 3)."
  },
  {
    unit: "PC.F Functions",
    title: "PC.F.2 Build function models",
    standard: "Build functions to model and validate relationships among functions.",
    explanation: "Choose, build, combine, and validate functions that model real relationships, including polynomial, rational, exponential, logarithmic, and trigonometric models.",
    example: "A population starts at 800 and grows 6% each year. Build a model for t years.",
    solution: ["The initial value is 800.", "A 6% growth factor is 1.06.", "The model is P(t) = 800(1.06)^t."],
    miniQuiz: "Build a model for $1,500 decreasing by 12% each year."
  },
  {
    unit: "PC.F Functions",
    title: "PC.F.3 Predict and verify function solutions",
    standard: "Predict and verify solutions involving functions.",
    explanation: "Use algebraic, graphical, and numerical methods to predict and verify zeros, intersections, and solutions to function equations.",
    example: "Solve f(x) = g(x) for f(x) = x^2 and g(x) = 2x + 8.",
    solution: ["Set x^2 = 2x + 8.", "Move all terms: x^2 - 2x - 8 = 0.", "Factor: (x - 4)(x + 2) = 0, so x = 4 or x = -2."],
    miniQuiz: "Find where x^2 + 1 equals 5x - 5."
  },
  {
    unit: "PC.CS Conic Sections",
    title: "PC.CS.1 Conic sections",
    standard: "Investigate conic sections.",
    explanation: "Identify and analyze circles, parabolas, ellipses, and hyperbolas from equations, graphs, and geometric features.",
    example: "What conic is represented by (x - 2)^2 + (y + 1)^2 = 25?",
    solution: ["The equation has squared x and y terms with the same coefficient.", "It matches the standard form of a circle.", "The center is (2, -1) and the radius is 5."],
    miniQuiz: "Identify the conic: (x^2 / 9) + (y^2 / 16) = 1."
  },
  {
    unit: "PC.T Trigonometry",
    title: "PC.T.1 Unit circle and trig graphs",
    standard: "Make sense of the unit circle and its relationship to the graphs of trigonometric functions.",
    explanation: "Connect unit-circle coordinates to sine and cosine values and use those values to understand trig graphs.",
    example: "What are sin(pi/3) and cos(pi/3)?",
    solution: ["On the unit circle, pi/3 corresponds to 60 degrees.", "The coordinate is (1/2, sqrt(3)/2).", "cos(pi/3) = 1/2 and sin(pi/3) = sqrt(3)/2."],
    miniQuiz: "Find sin(pi/6), cos(pi/6), and tan(pi/6)."
  },
  {
    unit: "PC.T Trigonometry",
    title: "PC.T.2 Trigonometry beyond right triangles",
    standard: "Apply trigonometric concepts beyond the right triangle.",
    explanation: "Use laws of sines and cosines, radian measure, periodicity, and trig models in non-right-triangle and circular contexts.",
    example: "In a triangle, sides a = 7 and b = 10 include angle C = 60 degrees. Which formula finds side c?",
    solution: ["Use the Law of Cosines.", "c^2 = a^2 + b^2 - 2ab cos(C).", "c^2 = 7^2 + 10^2 - 2(7)(10)cos(60 degrees)."],
    miniQuiz: "Write the Law of Sines relationship for triangle ABC."
  },
  {
    unit: "PC.T Trigonometry",
    title: "PC.T.3 Identities and equations",
    standard: "Verify trigonometric identities and solve equations.",
    explanation: "Use fundamental identities, algebraic manipulation, and unit-circle values to verify identities and solve trigonometric equations.",
    example: "Solve 2sin(x) - 1 = 0 on 0 <= x < 2pi.",
    solution: ["2sin(x) - 1 = 0 means sin(x) = 1/2.", "On the unit circle, sin(x) = 1/2 at pi/6 and 5pi/6.", "The solutions are x = pi/6 and x = 5pi/6."],
    miniQuiz: "Use sin^2(x) + cos^2(x) = 1 to rewrite 1 - cos^2(x)."
  },
  {
    unit: "PC.T Trigonometry",
    title: "PC.T.4 Complex numbers",
    standard: "Explore complex numbers.",
    explanation: "Represent complex numbers in rectangular and polar form, use operations, and connect complex numbers to trigonometric form.",
    example: "What is the modulus of 3 - 4i?",
    solution: ["Use modulus = sqrt(a^2 + b^2).", "sqrt(3^2 + (-4)^2) = sqrt(25).", "The modulus is 5."],
    miniQuiz: "Find the modulus of -5 + 12i."
  }
];

const grade5MathQuestions: Question[] = [
  {
    id: "g5-math-5n1-1",
    grade: 5,
    subject: "Mathematics",
    prompt: "5.N.1: Which value is equivalent to 3/8?",
    answers: ["0.375", "0.38", "0.83", "3.8"],
    correctIndex: 0,
    explanation: "3 divided by 8 equals 0.375."
  },
  {
    id: "g5-math-5n1-2",
    grade: 5,
    subject: "Mathematics",
    prompt: "5.N.1: Which list is ordered from least to greatest?",
    answers: ["0.7, 2/3, 0.68, 3/4", "2/3, 0.68, 0.7, 3/4", "3/4, 0.7, 0.68, 2/3", "0.68, 2/3, 3/4, 0.7"],
    correctIndex: 1,
    explanation: "2/3 is about 0.667, then 0.68, then 0.70, then 3/4 = 0.75."
  },
  {
    id: "g5-math-5n2-1",
    grade: 5,
    subject: "Mathematics",
    prompt: "5.N.2: A school has 1,248 pencils packed equally into 24 boxes. How many pencils are in each box?",
    answers: ["42", "48", "52", "62"],
    correctIndex: 2,
    explanation: "1,248 / 24 = 52 because 24 x 52 = 1,248."
  },
  {
    id: "g5-math-5n2-2",
    grade: 5,
    subject: "Mathematics",
    prompt: "5.N.2: A theater sells 168 tickets each day for 15 days, then refunds 245 tickets. How many tickets remain sold?",
    answers: ["2,275", "2,520", "2,765", "2,030"],
    correctIndex: 0,
    explanation: "168 x 15 = 2,520. Then 2,520 - 245 = 2,275."
  },
  {
    id: "g5-math-5n3-1",
    grade: 5,
    subject: "Mathematics",
    prompt: "5.N.3: What is 3/4 + 5/6?",
    answers: ["8/10", "1 7/12", "1 1/2", "15/24"],
    correctIndex: 1,
    explanation: "Use twelfths: 3/4 = 9/12 and 5/6 = 10/12. The sum is 19/12 = 1 7/12."
  },
  {
    id: "g5-math-5n3-2",
    grade: 5,
    subject: "Mathematics",
    prompt: "5.N.3: A trail is 6.75 miles long. Lia hikes 2.8 miles. How many miles are left?",
    answers: ["3.95", "4.05", "4.13", "9.55"],
    correctIndex: 0,
    explanation: "Line up decimals: 6.75 - 2.80 = 3.95 miles."
  },
  {
    id: "g5-math-5a1-1",
    grade: 5,
    subject: "Mathematics",
    prompt: "5.A.1: A pattern uses the rule y = 5x - 2. What ordered pair is correct when x = 6?",
    answers: ["(6, 28)", "(6, 30)", "(28, 6)", "(6, 17)"],
    correctIndex: 0,
    explanation: "5 x 6 - 2 = 30 - 2 = 28, so the ordered pair is (6, 28)."
  },
  {
    id: "g5-math-5a1-2",
    grade: 5,
    subject: "Mathematics",
    prompt: "5.A.1: The outputs in a table are 4, 9, 14, 19 when x increases by 1. What is the rate of change?",
    answers: ["add 4", "add 5", "multiply by 4", "subtract 5"],
    correctIndex: 1,
    explanation: "Each output increases by 5."
  },
  {
    id: "g5-math-5a2-1",
    grade: 5,
    subject: "Mathematics",
    prompt: "5.A.2: Which expression represents 7 more than 4 times a number n?",
    answers: ["7n + 4", "4n + 7", "4 + 7n", "4(n + 7)"],
    correctIndex: 1,
    explanation: "Four times n is 4n, and 7 more means add 7."
  },
  {
    id: "g5-math-5a2-2",
    grade: 5,
    subject: "Mathematics",
    prompt: "5.A.2: Which value of n makes 6n + 9 > 50 true?",
    answers: ["5", "6", "7", "8"],
    correctIndex: 2,
    explanation: "When n = 7, 6n + 9 = 51, which is greater than 50. The smaller choices do not work."
  },
  {
    id: "g5-math-5gm1-1",
    grade: 5,
    subject: "Mathematics",
    prompt: "5.GM.1: Which figure is always a parallelogram?",
    answers: ["trapezoid", "rectangle", "kite", "pentagon"],
    correctIndex: 1,
    explanation: "A rectangle always has two pairs of parallel sides, so it is a parallelogram."
  },
  {
    id: "g5-math-5gm1-2",
    grade: 5,
    subject: "Mathematics",
    prompt: "5.GM.1: A solid has 5 faces, 8 edges, and 5 vertices. Which solid could it be?",
    answers: ["rectangular prism", "square pyramid", "cylinder", "sphere"],
    correctIndex: 1,
    explanation: "A square pyramid has 5 faces, 8 edges, and 5 vertices."
  },
  {
    id: "g5-math-5gm2-1",
    grade: 5,
    subject: "Mathematics",
    prompt: "5.GM.2: What is the volume of a rectangular prism with length 8 cm, width 5 cm, and height 6 cm?",
    answers: ["19 cubic cm", "120 cubic cm", "240 cubic cm", "48 cubic cm"],
    correctIndex: 2,
    explanation: "Volume = 8 x 5 x 6 = 240 cubic centimeters."
  },
  {
    id: "g5-math-5gm2-2",
    grade: 5,
    subject: "Mathematics",
    prompt: "5.GM.2: Which dimensions make a rectangular prism with the same volume as 4 x 6 x 10?",
    answers: ["3 x 8 x 10", "5 x 6 x 8", "4 x 5 x 8", "6 x 6 x 6"],
    correctIndex: 1,
    explanation: "4 x 6 x 10 = 240. The dimensions 5 x 6 x 8 also give 240."
  },
  {
    id: "g5-math-5gm3-1",
    grade: 5,
    subject: "Mathematics",
    prompt: "5.GM.3: A board is 3.2 meters long. A carpenter cuts off 145 centimeters. How many centimeters remain?",
    answers: ["175", "185", "195", "465"],
    correctIndex: 0,
    explanation: "3.2 meters = 320 centimeters. 320 - 145 = 175 centimeters."
  },
  {
    id: "g5-math-5gm3-2",
    grade: 5,
    subject: "Mathematics",
    prompt: "5.GM.3: Which tool is best for measuring an angle?",
    answers: ["ruler", "scale", "protractor", "graduated cylinder"],
    correctIndex: 2,
    explanation: "A protractor measures angles."
  },
  {
    id: "g5-math-5d1-1",
    grade: 5,
    subject: "Mathematics",
    prompt: "5.D.1: What is the mean of 6, 8, 10, 12, and 14?",
    answers: ["8", "10", "12", "50"],
    correctIndex: 1,
    explanation: "The sum is 50. Divide by 5 values: 50 / 5 = 10."
  },
  {
    id: "g5-math-5d1-2",
    grade: 5,
    subject: "Mathematics",
    prompt: "5.D.1: For the data set 4, 7, 7, 9, 13, what are the range and mode?",
    answers: ["range 7, mode 9", "range 9, mode 7", "range 13, mode 7", "range 7, mode 4"],
    correctIndex: 1,
    explanation: "Range is 13 - 4 = 9. Mode is 7 because it appears most often."
  }
];

const grade6MathQuestions: Question[] = [
  {
    id: "g6-math-6n1-1",
    grade: 6,
    subject: "Mathematics",
    prompt: "6.N.1: Which set shows equivalent representations of the same value?",
    answers: ["3/5, 0.6, 60%", "3/5, 0.35, 35%", "2/3, 0.23, 23%", "7/10, 0.07, 7%"],
    correctIndex: 0,
    explanation: "3/5 = 0.6 = 60%."
  },
  {
    id: "g6-math-6n1-2",
    grade: 6,
    subject: "Mathematics",
    prompt: "6.N.1: A team wins 18 of 30 games. What percent of the games did the team win?",
    answers: ["40%", "55%", "60%", "75%"],
    correctIndex: 2,
    explanation: "18/30 = 3/5 = 0.6 = 60%."
  },
  {
    id: "g6-math-6n2-1",
    grade: 6,
    subject: "Mathematics",
    prompt: "6.N.2: The temperature is -7 degrees and then rises 13 degrees. What is the new temperature?",
    answers: ["-20", "-6", "6", "20"],
    correctIndex: 2,
    explanation: "-7 + 13 = 6."
  },
  {
    id: "g6-math-6n2-2",
    grade: 6,
    subject: "Mathematics",
    prompt: "6.N.2: A submarine is at -125 feet. It descends 48 feet. What is its new depth?",
    answers: ["-77 feet", "-173 feet", "77 feet", "173 feet"],
    correctIndex: 1,
    explanation: "Descending means moving farther below zero: -125 - 48 = -173 feet."
  },
  {
    id: "g6-math-6n3-1",
    grade: 6,
    subject: "Mathematics",
    prompt: "6.N.3: A recipe uses 4 cups of water for every 7 cups of flour. How much water is needed for 28 cups of flour?",
    answers: ["12 cups", "14 cups", "16 cups", "21 cups"],
    correctIndex: 2,
    explanation: "28 is 4 times 7, so multiply 4 cups of water by 4. The answer is 16 cups."
  },
  {
    id: "g6-math-6n3-2",
    grade: 6,
    subject: "Mathematics",
    prompt: "6.N.3: Which ratio is equivalent to 9:15?",
    answers: ["3:5", "5:3", "6:10", "18:20"],
    correctIndex: 0,
    explanation: "Divide both parts of 9:15 by 3 to get 3:5."
  },
  {
    id: "g6-math-6n4-1",
    grade: 6,
    subject: "Mathematics",
    prompt: "6.N.4: What is 2/3 x 3/4?",
    answers: ["1/2", "5/7", "6/7", "1 1/2"],
    correctIndex: 0,
    explanation: "Multiply numerators and denominators: 2 x 3 over 3 x 4 = 6/12 = 1/2."
  },
  {
    id: "g6-math-6n4-2",
    grade: 6,
    subject: "Mathematics",
    prompt: "6.N.4: A 7.5-pound bag of rice is split equally into 3 containers. How many pounds are in each container?",
    answers: ["2.25", "2.5", "3.5", "22.5"],
    correctIndex: 1,
    explanation: "7.5 / 3 = 2.5 pounds."
  },
  {
    id: "g6-math-6a1-1",
    grade: 6,
    subject: "Mathematics",
    prompt: "6.A.1: A rule is y = 4x + 1. Which ordered pair fits the rule?",
    answers: ["(3, 12)", "(3, 13)", "(4, 13)", "(1, 4)"],
    correctIndex: 1,
    explanation: "When x = 3, y = 4(3) + 1 = 13."
  },
  {
    id: "g6-math-6a1-2",
    grade: 6,
    subject: "Mathematics",
    prompt: "6.A.1: A table has x-values 1, 2, 3, 4 and y-values 6, 10, 14, 18. Which rule matches?",
    answers: ["y = x + 5", "y = 4x + 2", "y = 6x", "y = 2x + 4"],
    correctIndex: 1,
    explanation: "For each x, 4x + 2 gives 6, 10, 14, and 18."
  },
  {
    id: "g6-math-6a2-1",
    grade: 6,
    subject: "Mathematics",
    prompt: "6.A.2: Which expression is equivalent to 5(8 + 0.4)?",
    answers: ["40 + 0.4", "5 + 8 + 0.4", "40 + 2", "13.4"],
    correctIndex: 2,
    explanation: "Distribute 5: 5 x 8 + 5 x 0.4 = 40 + 2."
  },
  {
    id: "g6-math-6a2-2",
    grade: 6,
    subject: "Mathematics",
    prompt: "6.A.2: Evaluate 3/4 + 2(1.5).",
    answers: ["2.25", "3.25", "3.75", "4.5"],
    correctIndex: 2,
    explanation: "2 x 1.5 = 3, and 3/4 = 0.75. The sum is 3.75."
  },
  {
    id: "g6-math-6a3-1",
    grade: 6,
    subject: "Mathematics",
    prompt: "6.A.3: Solve 5x + 7 = 42.",
    answers: ["5", "7", "8", "9"],
    correctIndex: 1,
    explanation: "Subtract 7 to get 5x = 35, then divide by 5. x = 7."
  },
  {
    id: "g6-math-6a3-2",
    grade: 6,
    subject: "Mathematics",
    prompt: "6.A.3: Maya needs at least $56. She earns $8 per hour. Which inequality shows the hours h she must work?",
    answers: ["8h < 56", "8h <= 56", "8h >= 56", "h + 8 >= 56"],
    correctIndex: 2,
    explanation: "At least means greater than or equal to, so 8h >= 56."
  },
  {
    id: "g6-math-6gm1-1",
    grade: 6,
    subject: "Mathematics",
    prompt: "6.GM.1: A figure is turned 90 degrees around a point. What transformation is this?",
    answers: ["translation", "reflection", "rotation", "dilation"],
    correctIndex: 2,
    explanation: "Turning a figure around a point is a rotation."
  },
  {
    id: "g6-math-6gm1-2",
    grade: 6,
    subject: "Mathematics",
    prompt: "6.GM.1: Which transformation always creates a congruent image?",
    answers: ["reflection", "stretching", "scaling by 2", "changing one angle"],
    correctIndex: 0,
    explanation: "A reflection preserves side lengths and angle measures, so the image is congruent."
  },
  {
    id: "g6-math-6gm2-1",
    grade: 6,
    subject: "Mathematics",
    prompt: "6.GM.2: A parallelogram has base 13 cm and height 8 cm. What is its area?",
    answers: ["21 square cm", "52 square cm", "104 square cm", "169 square cm"],
    correctIndex: 2,
    explanation: "Area of a parallelogram is base x height: 13 x 8 = 104."
  },
  {
    id: "g6-math-6gm2-2",
    grade: 6,
    subject: "Mathematics",
    prompt: "6.GM.2: A triangle has base 18 inches and height 7 inches. What is its area?",
    answers: ["63 square inches", "126 square inches", "25 square inches", "56 square inches"],
    correctIndex: 0,
    explanation: "Area = 1/2 x 18 x 7 = 63 square inches."
  },
  {
    id: "g6-math-6gm3-1",
    grade: 6,
    subject: "Mathematics",
    prompt: "6.GM.3: Two angles form a straight line. One angle is 117 degrees. What is the other angle?",
    answers: ["53 degrees", "63 degrees", "73 degrees", "117 degrees"],
    correctIndex: 1,
    explanation: "Angles on a straight line total 180 degrees. 180 - 117 = 63."
  },
  {
    id: "g6-math-6gm3-2",
    grade: 6,
    subject: "Mathematics",
    prompt: "6.GM.3: A triangle has angles of 49 degrees and 72 degrees. What is the third angle?",
    answers: ["49 degrees", "59 degrees", "69 degrees", "121 degrees"],
    correctIndex: 1,
    explanation: "Triangle angles total 180 degrees. 180 - 49 - 72 = 59."
  },
  {
    id: "g6-math-6gm4-1",
    grade: 6,
    subject: "Mathematics",
    prompt: "6.GM.4: How many ounces are in 3.25 pounds?",
    answers: ["32 ounces", "48 ounces", "52 ounces", "64 ounces"],
    correctIndex: 2,
    explanation: "1 pound = 16 ounces, and 3.25 x 16 = 52."
  },
  {
    id: "g6-math-6gm4-2",
    grade: 6,
    subject: "Mathematics",
    prompt: "6.GM.4: A road is 2.4 miles long. About how many feet is that?",
    answers: ["5,280 feet", "10,560 feet", "12,672 feet", "15,840 feet"],
    correctIndex: 2,
    explanation: "2.4 x 5,280 = 12,672 feet."
  },
  {
    id: "g6-math-6d1-1",
    grade: 6,
    subject: "Mathematics",
    prompt: "6.D.1: What is the median of 11, 14, 17, 20, 22, 24?",
    answers: ["17", "18.5", "20", "22"],
    correctIndex: 1,
    explanation: "There are six numbers, so average the two middle values: (17 + 20) / 2 = 18.5."
  },
  {
    id: "g6-math-6d1-2",
    grade: 6,
    subject: "Mathematics",
    prompt: "6.D.1: A data set has values 6, 8, 9, 13, 19. What is the range?",
    answers: ["9", "11", "13", "19"],
    correctIndex: 2,
    explanation: "Range is greatest minus least: 19 - 6 = 13."
  },
  {
    id: "g6-math-6d2-1",
    grade: 6,
    subject: "Mathematics",
    prompt: "6.D.2: A spinner has 8 equal sections. Three sections are blue. What is the probability of landing on blue?",
    answers: ["3/8", "5/8", "0.8", "3/5"],
    correctIndex: 0,
    explanation: "There are 3 favorable blue sections out of 8 total sections, so the probability is 3/8."
  },
  {
    id: "g6-math-6d2-2",
    grade: 6,
    subject: "Mathematics",
    prompt: "6.D.2: A bag has 4 red, 6 yellow, and 10 green tiles. What is the probability of choosing a yellow tile as a decimal?",
    answers: ["0.2", "0.3", "0.4", "0.6"],
    correctIndex: 1,
    explanation: "There are 20 tiles total and 6 yellow tiles. 6/20 = 0.3."
  }
];

const grade7MathQuestions: Question[] = [
  {
    id: "g7-math-7n1-1",
    grade: 7,
    subject: "Mathematics",
    prompt: "7.N.1: Which list is ordered from least to greatest?",
    answers: ["-1.8, -7/4, 0.6, | -2 |", "-7/4, -1.8, | -2 |, 0.6", "| -2 |, 0.6, -7/4, -1.8", "-1.8, 0.6, -7/4, | -2 |"],
    correctIndex: 0,
    explanation: "-7/4 is -1.75 and | -2 | is 2, so the order is -1.8, -1.75, 0.6, 2."
  },
  {
    id: "g7-math-7n1-2",
    grade: 7,
    subject: "Mathematics",
    prompt: "7.N.1: Which statement about absolute value is true?",
    answers: ["| -6.4 | = -6.4", "| -6.4 | = 6.4", "| 6.4 | = -6.4", "| -6.4 | is less than 0"],
    correctIndex: 1,
    explanation: "Absolute value is distance from zero, so it is never negative. | -6.4 | = 6.4."
  },
  {
    id: "g7-math-7n2-1",
    grade: 7,
    subject: "Mathematics",
    prompt: "7.N.2: Evaluate (-3)^2 - 2.5 x 4.",
    answers: ["-19", "-1", "1", "19"],
    correctIndex: 1,
    explanation: "(-3)^2 = 9 and 2.5 x 4 = 10. Then 9 - 10 = -1."
  },
  {
    id: "g7-math-7n2-2",
    grade: 7,
    subject: "Mathematics",
    prompt: "7.N.2: A submarine rises 12.5 meters, then descends 18.75 meters. What is its net change?",
    answers: ["-31.25 meters", "-6.25 meters", "6.25 meters", "31.25 meters"],
    correctIndex: 1,
    explanation: "12.5 - 18.75 = -6.25 meters, so the submarine ends 6.25 meters lower."
  },
  {
    id: "g7-math-7a1-1",
    grade: 7,
    subject: "Mathematics",
    prompt: "7.A.1: Which table shows a proportional relationship?",
    answers: ["x: 2,4,6; y: 5,10,15", "x: 2,4,6; y: 5,9,13", "x: 1,2,3; y: 4,7,10", "x: 3,6,9; y: 8,13,18"],
    correctIndex: 0,
    explanation: "The ratio y/x is always 2.5 in the first table."
  },
  {
    id: "g7-math-7a1-2",
    grade: 7,
    subject: "Mathematics",
    prompt: "7.A.1: Which equation represents a proportional relationship?",
    answers: ["y = 4x", "y = 4x + 1", "y = x - 4", "y = 4"],
    correctIndex: 0,
    explanation: "A proportional relationship has the form y = kx and passes through the origin."
  },
  {
    id: "g7-math-7a2-1",
    grade: 7,
    subject: "Mathematics",
    prompt: "7.A.2: A runner travels 18 miles in 2.4 hours at a constant speed. How far will the runner travel in 4 hours?",
    answers: ["24 miles", "28 miles", "30 miles", "43.2 miles"],
    correctIndex: 2,
    explanation: "The unit rate is 18 / 2.4 = 7.5 miles per hour. In 4 hours, 7.5 x 4 = 30 miles."
  },
  {
    id: "g7-math-7a2-2",
    grade: 7,
    subject: "Mathematics",
    prompt: "7.A.2: If 5 notebooks cost $13.75, what is the cost of 12 notebooks at the same rate?",
    answers: ["$27.50", "$30.00", "$33.00", "$36.75"],
    correctIndex: 2,
    explanation: "$13.75 / 5 = $2.75 per notebook. 12 x $2.75 = $33.00."
  },
  {
    id: "g7-math-7a3-1",
    grade: 7,
    subject: "Mathematics",
    prompt: "7.A.3: Which equation represents: a number divided by 4, then increased by 3, equals 11?",
    answers: ["4x + 3 = 11", "x / 4 + 3 = 11", "x / 3 + 4 = 11", "x + 4 / 3 = 11"],
    correctIndex: 1,
    explanation: "A number divided by 4 is x / 4, then increased by 3 gives x / 4 + 3 = 11."
  },
  {
    id: "g7-math-7a3-2",
    grade: 7,
    subject: "Mathematics",
    prompt: "7.A.3: Solve 2.5x - 4 <= 16.",
    answers: ["x <= 8", "x >= 8", "x <= 5", "x >= 5"],
    correctIndex: 0,
    explanation: "Add 4 to get 2.5x <= 20, then divide by 2.5. x <= 8."
  },
  {
    id: "g7-math-7a4-1",
    grade: 7,
    subject: "Mathematics",
    prompt: "7.A.4: Which expression is equivalent to 4(3x - 2) + 5x?",
    answers: ["12x - 8", "17x - 8", "17x + 8", "7x - 8"],
    correctIndex: 1,
    explanation: "Distribute to get 12x - 8, then combine 12x + 5x = 17x."
  },
  {
    id: "g7-math-7a4-2",
    grade: 7,
    subject: "Mathematics",
    prompt: "7.A.4: Evaluate 18 - 2(3^2 - 5).",
    answers: ["2", "8", "10", "46"],
    correctIndex: 2,
    explanation: "3^2 = 9, 9 - 5 = 4, 2 x 4 = 8, and 18 - 8 = 10."
  },
  {
    id: "g7-math-7gm1-1",
    grade: 7,
    subject: "Mathematics",
    prompt: "7.GM.1: A rectangular prism has side lengths 2.5 cm, 4 cm, and 6 cm. What is its volume?",
    answers: ["12.5 cubic cm", "30 cubic cm", "60 cubic cm", "100 cubic cm"],
    correctIndex: 2,
    explanation: "Volume = 2.5 x 4 x 6 = 60 cubic centimeters."
  },
  {
    id: "g7-math-7gm1-2",
    grade: 7,
    subject: "Mathematics",
    prompt: "7.GM.1: What is the surface area of a rectangular prism with dimensions 3, 4, and 5 units?",
    answers: ["47 square units", "60 square units", "94 square units", "120 square units"],
    correctIndex: 2,
    explanation: "Surface area = 2(lw + lh + wh) = 2(12 + 15 + 20) = 94."
  },
  {
    id: "g7-math-7gm2-1",
    grade: 7,
    subject: "Mathematics",
    prompt: "7.GM.2: A trapezoid has bases 7.5 m and 12.5 m and height 6 m. What is its area?",
    answers: ["45 square m", "60 square m", "75 square m", "120 square m"],
    correctIndex: 1,
    explanation: "Area = 1/2(7.5 + 12.5)6 = 1/2(20)6 = 60 square meters."
  },
  {
    id: "g7-math-7gm2-2",
    grade: 7,
    subject: "Mathematics",
    prompt: "7.GM.2: A composite figure is a 10 by 6 rectangle with a 4 by 3 rectangle removed. What is its area?",
    answers: ["34 square units", "42 square units", "48 square units", "72 square units"],
    correctIndex: 2,
    explanation: "The large rectangle area is 60. The removed rectangle area is 12. 60 - 12 = 48."
  },
  {
    id: "g7-math-7gm3-1",
    grade: 7,
    subject: "Mathematics",
    prompt: "7.GM.3: A scale drawing uses 2 cm for 7 meters. A hallway is 9 cm on the drawing. How long is the actual hallway?",
    answers: ["21.5 meters", "28 meters", "31.5 meters", "63 meters"],
    correctIndex: 2,
    explanation: "Each centimeter represents 3.5 meters, so 9 x 3.5 = 31.5 meters."
  },
  {
    id: "g7-math-7gm3-2",
    grade: 7,
    subject: "Mathematics",
    prompt: "7.GM.3: Two similar triangles have corresponding side lengths 5 and 15. If a second side on the smaller triangle is 8, what is the matching larger side?",
    answers: ["18", "20", "24", "40"],
    correctIndex: 2,
    explanation: "The scale factor is 15 / 5 = 3. The matching side is 8 x 3 = 24."
  },
  {
    id: "g7-math-7gm4-1",
    grade: 7,
    subject: "Mathematics",
    prompt: "7.GM.4: A figure is dilated by a scale factor of 1/2. What happens to its side lengths?",
    answers: ["They double.", "They are cut in half.", "They stay the same.", "They become negative."],
    correctIndex: 1,
    explanation: "A dilation with scale factor 1/2 multiplies every side length by 1/2."
  },
  {
    id: "g7-math-7gm4-2",
    grade: 7,
    subject: "Mathematics",
    prompt: "7.GM.4: Which transformation changes location but preserves both size and orientation?",
    answers: ["translation", "reflection", "dilation", "stretch"],
    correctIndex: 0,
    explanation: "A translation slides a figure without changing its size or orientation."
  },
  {
    id: "g7-math-7d1-1",
    grade: 7,
    subject: "Mathematics",
    prompt: "7.D.1: Which display is best for showing the distribution of test scores across intervals?",
    answers: ["line plot", "histogram", "line graph", "circle graph"],
    correctIndex: 1,
    explanation: "A histogram shows how many data values fall within intervals."
  },
  {
    id: "g7-math-7d1-2",
    grade: 7,
    subject: "Mathematics",
    prompt: "7.D.1: Which conclusion is best supported by data values 12, 13, 14, 14, 15, 38?",
    answers: ["The mean may be pulled upward by an outlier.", "The mode is 38.", "The range is 15.", "All values are close together."],
    correctIndex: 0,
    explanation: "38 is much larger than the other values, so it can pull the mean upward."
  },
  {
    id: "g7-math-7d2-1",
    grade: 7,
    subject: "Mathematics",
    prompt: "7.D.2: A basketball player makes 65% of free throws. About how many makes should be expected in 80 attempts?",
    answers: ["48", "52", "60", "65"],
    correctIndex: 1,
    explanation: "0.65 x 80 = 52 expected makes."
  },
  {
    id: "g7-math-7d2-2",
    grade: 7,
    subject: "Mathematics",
    prompt: "7.D.2: A bag has 6 red, 9 blue, and 5 green cubes. What is the probability of not choosing blue?",
    answers: ["9/20", "11/20", "3/4", "1/2"],
    correctIndex: 1,
    explanation: "There are 20 cubes total. Not blue means red or green: 6 + 5 = 11, so the probability is 11/20."
  }
];

const preAlgebraMathQuestions: Question[] = [
  {
    id: "g8-math-pan1-1",
    grade: 8,
    subject: "Mathematics",
    prompt: "PA.N.1: Which number is irrational?",
    answers: ["-4.5", "sqrt(49)", "sqrt(20)", "11/8"],
    correctIndex: 2,
    explanation: "sqrt(20) is not a perfect square and cannot be written as a repeating or terminating decimal, so it is irrational."
  },
  {
    id: "g8-math-pan1-2",
    grade: 8,
    subject: "Mathematics",
    prompt: "PA.N.1: Which comparison is true?",
    answers: ["sqrt(50) < 7", "-3.2 > -3.05", "5/4 < 1.1", "sqrt(9) = 3"],
    correctIndex: 3,
    explanation: "sqrt(9) equals 3. The other comparisons are false."
  },
  {
    id: "g8-math-paa1-1",
    grade: 8,
    subject: "Mathematics",
    prompt: "PA.A.1: Which relation is a function?",
    answers: ["(1, 4), (1, 5), (2, 6)", "(2, 7), (3, 7), (4, 7)", "(5, 1), (5, 2), (5, 3)", "(0, 0), (0, 1), (1, 1)"],
    correctIndex: 1,
    explanation: "Each input has exactly one output in the second relation."
  },
  {
    id: "g8-math-paa1-2",
    grade: 8,
    subject: "Mathematics",
    prompt: "PA.A.1: Which function is nonlinear?",
    answers: ["y = -2x + 9", "y = 4x", "y = x^2 - 3", "y = 0.5x + 1"],
    correctIndex: 2,
    explanation: "y = x^2 - 3 is quadratic, so it is nonlinear."
  },
  {
    id: "g8-math-paa2-1",
    grade: 8,
    subject: "Mathematics",
    prompt: "PA.A.2: A linear function has slope 3 and y-intercept -5. What is its equation?",
    answers: ["y = -5x + 3", "y = 3x - 5", "y = 3x + 5", "y = x - 2"],
    correctIndex: 1,
    explanation: "Slope-intercept form is y = mx + b, so y = 3x - 5."
  },
  {
    id: "g8-math-paa2-2",
    grade: 8,
    subject: "Mathematics",
    prompt: "PA.A.2: A gym charges $24 plus $8 per class. How much does it cost for 11 classes?",
    answers: ["$88", "$96", "$112", "$264"],
    correctIndex: 2,
    explanation: "Use y = 8x + 24. For 11 classes, 8(11) + 24 = 112."
  },
  {
    id: "g8-math-paa3-1",
    grade: 8,
    subject: "Mathematics",
    prompt: "PA.A.3: Simplify 7(2x - 3) - 4x.",
    answers: ["10x - 21", "14x - 7", "18x - 21", "10x + 21"],
    correctIndex: 0,
    explanation: "Distribute to get 14x - 21, then subtract 4x to get 10x - 21."
  },
  {
    id: "g8-math-paa3-2",
    grade: 8,
    subject: "Mathematics",
    prompt: "PA.A.3: Evaluate 2(3.5 + 1/4) - 1.5.",
    answers: ["4.5", "5.25", "6", "7.5"],
    correctIndex: 2,
    explanation: "3.5 + 1/4 = 3.75. Then 2(3.75) - 1.5 = 7.5 - 1.5 = 6."
  },
  {
    id: "g8-math-paa4-1",
    grade: 8,
    subject: "Mathematics",
    prompt: "PA.A.4: Solve 4x - 7 = 2x + 15.",
    answers: ["x = 4", "x = 8", "x = 11", "x = 22"],
    correctIndex: 2,
    explanation: "Subtract 2x to get 2x - 7 = 15. Add 7 to get 2x = 22, so x = 11."
  },
  {
    id: "g8-math-paa4-2",
    grade: 8,
    subject: "Mathematics",
    prompt: "PA.A.4: Solve 3(x + 2) < 24.",
    answers: ["x < 6", "x > 6", "x < 8", "x > 8"],
    correctIndex: 0,
    explanation: "Divide by 3 to get x + 2 < 8, then subtract 2. x < 6."
  },
  {
    id: "g8-math-pagm1-1",
    grade: 8,
    subject: "Mathematics",
    prompt: "PA.GM.1: A right triangle has legs of 10 and 24. What is the hypotenuse?",
    answers: ["26", "28", "34", "576"],
    correctIndex: 0,
    explanation: "10^2 + 24^2 = 100 + 576 = 676, and sqrt(676) = 26."
  },
  {
    id: "g8-math-pagm1-2",
    grade: 8,
    subject: "Mathematics",
    prompt: "PA.GM.1: A right triangle has hypotenuse 17 and one leg 8. What is the other leg?",
    answers: ["9", "12", "15", "25"],
    correctIndex: 2,
    explanation: "Use a^2 + 8^2 = 17^2. a^2 + 64 = 289, so a^2 = 225 and a = 15."
  },
  {
    id: "g8-math-pagm2-1",
    grade: 8,
    subject: "Mathematics",
    prompt: "PA.GM.2: What is the volume of a cylinder with radius 4 and height 9, in terms of pi?",
    answers: ["36pi", "72pi", "144pi", "288pi"],
    correctIndex: 2,
    explanation: "V = pi r^2 h = pi(4^2)(9) = 144pi."
  },
  {
    id: "g8-math-pagm2-2",
    grade: 8,
    subject: "Mathematics",
    prompt: "PA.GM.2: A rectangular prism is 2.5 m by 6 m by 4 m. What is its volume?",
    answers: ["12.5 cubic m", "30 cubic m", "60 cubic m", "100 cubic m"],
    correctIndex: 2,
    explanation: "Volume = 2.5 x 6 x 4 = 60 cubic meters."
  },
  {
    id: "g8-math-pad1-1",
    grade: 8,
    subject: "Mathematics",
    prompt: "PA.D.1: A line of best fit is y = 1.8x + 12. What is the predicted value when x = 15?",
    answers: ["27", "30", "39", "282"],
    correctIndex: 2,
    explanation: "Substitute x = 15: y = 1.8(15) + 12 = 27 + 12 = 39."
  },
  {
    id: "g8-math-pad1-2",
    grade: 8,
    subject: "Mathematics",
    prompt: "PA.D.1: Which scatter plot pattern suggests a negative association?",
    answers: ["Points rise from left to right.", "Points fall from left to right.", "Points form a circle.", "Points have no pattern."],
    correctIndex: 1,
    explanation: "A negative association means y tends to decrease as x increases."
  },
  {
    id: "g8-math-pad2-1",
    grade: 8,
    subject: "Mathematics",
    prompt: "PA.D.2: A player wins 18 of 45 games. What is the experimental probability of winning?",
    answers: ["0.18", "0.25", "0.4", "0.45"],
    correctIndex: 2,
    explanation: "18/45 = 2/5 = 0.4."
  },
  {
    id: "g8-math-pad2-2",
    grade: 8,
    subject: "Mathematics",
    prompt: "PA.D.2: An experiment has probability 0.32 of success. About how many successes are expected in 250 trials?",
    answers: ["32", "64", "80", "125"],
    correctIndex: 2,
    explanation: "0.32 x 250 = 80."
  }
];

const algebra1MathQuestions: Question[] = [
  {
    id: "g9-math-a1n1-1",
    grade: 9,
    subject: "Mathematics",
    prompt: "A1.N.1: Simplify sqrt(196) - cubert(64).",
    answers: ["6", "8", "10", "18"],
    correctIndex: 2,
    explanation: "sqrt(196) = 14 and cubert(64) = 4, so 14 - 4 = 10."
  },
  {
    id: "g9-math-a1n1-2",
    grade: 9,
    subject: "Mathematics",
    prompt: "A1.N.1: Which value is between 7 and 8?",
    answers: ["sqrt(48)", "sqrt(56)", "sqrt(64)", "cubert(343)"],
    correctIndex: 1,
    explanation: "sqrt(56) is between sqrt(49) = 7 and sqrt(64) = 8."
  },
  {
    id: "g9-math-a1a1-1",
    grade: 9,
    subject: "Mathematics",
    prompt: "A1.A.1: Solve the system y = 3x - 4 and y = -x + 12.",
    answers: ["(2, 2)", "(4, 8)", "(5, 11)", "(8, 4)"],
    correctIndex: 1,
    explanation: "Set 3x - 4 = -x + 12. Then 4x = 16, x = 4, and y = 8."
  },
  {
    id: "g9-math-a1a1-2",
    grade: 9,
    subject: "Mathematics",
    prompt: "A1.A.1: Solve |x + 3| = 11.",
    answers: ["x = 8 only", "x = -14 only", "x = 8 or x = -14", "x = 14 or x = -8"],
    correctIndex: 2,
    explanation: "x + 3 = 11 gives x = 8, and x + 3 = -11 gives x = -14."
  },
  {
    id: "g9-math-a1a2-1",
    grade: 9,
    subject: "Mathematics",
    prompt: "A1.A.2: Solve -3 < 2x + 5 <= 17.",
    answers: ["-4 < x <= 6", "-1 < x <= 11", "x > -4 or x <= 6", "-6 <= x < 4"],
    correctIndex: 0,
    explanation: "Subtract 5 to get -8 < 2x <= 12, then divide by 2: -4 < x <= 6."
  },
  {
    id: "g9-math-a1a2-2",
    grade: 9,
    subject: "Mathematics",
    prompt: "A1.A.2: A club can spend at most $180. It pays a $45 setup fee and $15 per shirt. Which inequality models the number of shirts s?",
    answers: ["45s + 15 <= 180", "45 + 15s <= 180", "45 + 15s >= 180", "15s - 45 <= 180"],
    correctIndex: 1,
    explanation: "The setup fee is fixed at 45 and each shirt adds 15s, with total at most 180."
  },
  {
    id: "g9-math-a1a3-1",
    grade: 9,
    subject: "Mathematics",
    prompt: "A1.A.3: Which expression is equivalent to 5(2x - 7) + 3x?",
    answers: ["13x - 7", "13x - 35", "10x - 32", "8x - 35"],
    correctIndex: 1,
    explanation: "Distribute: 10x - 35 + 3x = 13x - 35."
  },
  {
    id: "g9-math-a1a3-2",
    grade: 9,
    subject: "Mathematics",
    prompt: "A1.A.3: Factor 12x - 18.",
    answers: ["2(6x - 9)", "3(4x - 6)", "6(2x - 3)", "12(x - 18)"],
    correctIndex: 2,
    explanation: "The greatest common factor is 6, so 12x - 18 = 6(2x - 3)."
  },
  {
    id: "g9-math-a1a4-1",
    grade: 9,
    subject: "Mathematics",
    prompt: "A1.A.4: A tank has 150 gallons and drains at 6 gallons per minute. When will it have 54 gallons left?",
    answers: ["9 minutes", "16 minutes", "24 minutes", "34 minutes"],
    correctIndex: 1,
    explanation: "150 - 6m = 54. Then -6m = -96, so m = 16."
  },
  {
    id: "g9-math-a1a4-2",
    grade: 9,
    subject: "Mathematics",
    prompt: "A1.A.4: A line has equation y = -4x + 28. What does the y-intercept represent in a context?",
    answers: ["The starting value is 28.", "The rate of change is 28.", "The x-value is always 28.", "The graph is increasing."],
    correctIndex: 0,
    explanation: "The y-intercept is the value when x = 0, often the starting value."
  },
  {
    id: "g9-math-a1f1-1",
    grade: 9,
    subject: "Mathematics",
    prompt: "A1.F.1: A candle starts at 20 cm and burns 1.25 cm per hour. Which function models height h after t hours?",
    answers: ["h = 1.25t + 20", "h = 20 - 1.25t", "h = 20t - 1.25", "h = 1.25 - 20t"],
    correctIndex: 1,
    explanation: "The height starts at 20 and decreases by 1.25 each hour."
  },
  {
    id: "g9-math-a1f1-2",
    grade: 9,
    subject: "Mathematics",
    prompt: "A1.F.1: In y = 45 + 12x, what does 12 usually represent in a real-world linear model?",
    answers: ["initial value", "rate of change", "final value", "input"],
    correctIndex: 1,
    explanation: "The coefficient of x is the rate of change."
  },
  {
    id: "g9-math-a1f2-1",
    grade: 9,
    subject: "Mathematics",
    prompt: "A1.F.2: Which function belongs to the quadratic family?",
    answers: ["y = 7x - 2", "y = 2^x", "y = x^2 + 5x - 1", "y = 9"],
    correctIndex: 2,
    explanation: "A quadratic function includes an x^2 term."
  },
  {
    id: "g9-math-a1f2-2",
    grade: 9,
    subject: "Mathematics",
    prompt: "A1.F.2: Which characteristic belongs to all linear functions?",
    answers: ["constant rate of change", "U-shaped graph", "doubling output each step", "no x-intercept"],
    correctIndex: 0,
    explanation: "Linear functions have a constant rate of change."
  },
  {
    id: "g9-math-a1f3-1",
    grade: 9,
    subject: "Mathematics",
    prompt: "A1.F.3: A line passes through (0, -3) and (5, 12). What is its equation?",
    answers: ["y = 3x - 3", "y = -3x + 3", "y = 5x - 3", "y = 3x + 12"],
    correctIndex: 0,
    explanation: "The slope is (12 - (-3)) / (5 - 0) = 3, and the y-intercept is -3."
  },
  {
    id: "g9-math-a1f3-2",
    grade: 9,
    subject: "Mathematics",
    prompt: "A1.F.3: Which table matches y = -2x + 6?",
    answers: ["x: 0,1,2; y: 6,4,2", "x: 0,1,2; y: 6,8,10", "x: 0,1,2; y: -2,4,6", "x: 0,1,2; y: 0,4,8"],
    correctIndex: 0,
    explanation: "Substituting x = 0, 1, 2 gives y = 6, 4, 2."
  },
  {
    id: "g9-math-a1d1-1",
    grade: 9,
    subject: "Mathematics",
    prompt: "A1.D.1: A line of best fit is y = 6.5x + 20. Predict y when x = 8.",
    answers: ["52", "72", "85", "180"],
    correctIndex: 1,
    explanation: "6.5(8) + 20 = 52 + 20 = 72."
  },
  {
    id: "g9-math-a1d1-2",
    grade: 9,
    subject: "Mathematics",
    prompt: "A1.D.1: A data set only includes x-values from 1 to 10. Which prediction is least reliable?",
    answers: ["predicting at x = 2", "predicting at x = 6", "predicting at x = 9", "predicting at x = 45"],
    correctIndex: 3,
    explanation: "x = 45 is far outside the observed data range, so it is extrapolation and less reliable."
  },
  {
    id: "g9-math-a1d2-1",
    grade: 9,
    subject: "Mathematics",
    prompt: "A1.D.2: If P(event) = 0.27, what is P(not event)?",
    answers: ["0.27", "0.63", "0.73", "1.27"],
    correctIndex: 2,
    explanation: "The complement is 1 - 0.27 = 0.73."
  },
  {
    id: "g9-math-a1d2-2",
    grade: 9,
    subject: "Mathematics",
    prompt: "A1.D.2: A bag has 3 red, 5 blue, and 7 green marbles. What is the probability of choosing red or blue?",
    answers: ["3/15", "5/15", "8/15", "12/15"],
    correctIndex: 2,
    explanation: "There are 15 marbles total. Red or blue is 3 + 5 = 8, so the probability is 8/15."
  }
];

const geometryMathQuestions: Question[] = [
  {
    id: "g10-math-grl1-1",
    grade: 10,
    subject: "Mathematics",
    prompt: "G.RL.1: A student says, 'If two angles are vertical angles, then they are congruent. Angle A and angle B are congruent, so they must be vertical angles.' What is wrong with the argument?",
    answers: ["The conclusion reverses the original statement.", "Vertical angles are never congruent.", "Congruent angles must be supplementary.", "The argument uses no geometry vocabulary."],
    correctIndex: 0,
    explanation: "The converse is not automatically true. Congruent angles do not have to be vertical angles."
  },
  {
    id: "g10-math-grl1-2",
    grade: 10,
    subject: "Mathematics",
    prompt: "G.RL.1: Which statement is a valid conclusion from 'All squares are rectangles' and 'ABCD is a square'?",
    answers: ["ABCD is a rectangle.", "Every rectangle is a square.", "ABCD is not a quadrilateral.", "ABCD has no right angles."],
    correctIndex: 0,
    explanation: "If all squares are rectangles and ABCD is a square, then ABCD must be a rectangle."
  },
  {
    id: "g10-math-g2d1-1",
    grade: 10,
    subject: "Mathematics",
    prompt: "G.2D.1: Parallel lines are cut by a transversal. One interior angle is 117 degrees. What is the same-side interior angle paired with it?",
    answers: ["27 degrees", "63 degrees", "117 degrees", "180 degrees"],
    correctIndex: 1,
    explanation: "Same-side interior angles formed by parallel lines are supplementary, so 180 - 117 = 63."
  },
  {
    id: "g10-math-g2d1-2",
    grade: 10,
    subject: "Mathematics",
    prompt: "G.2D.1: Which reason best justifies the statement 'Triangle ABC is congruent to triangle DEF' if AB = DE, BC = EF, and AC = DF?",
    answers: ["AA similarity", "SSS congruence", "SAS congruence", "CPCTC"],
    correctIndex: 1,
    explanation: "Three pairs of corresponding sides are congruent, so SSS congruence applies."
  },
  {
    id: "g10-math-g3d1-1",
    grade: 10,
    subject: "Mathematics",
    prompt: "G.3D.1: A cylinder has radius 5 cm and height 12 cm. What is its volume in terms of pi?",
    answers: ["60pi cubic cm", "120pi cubic cm", "300pi cubic cm", "600pi cubic cm"],
    correctIndex: 2,
    explanation: "V = pi r^2 h = pi(5^2)(12) = 300pi."
  },
  {
    id: "g10-math-g3d1-2",
    grade: 10,
    subject: "Mathematics",
    prompt: "G.3D.1: A rectangular prism has dimensions 4, 7, and 9. What is its surface area?",
    answers: ["126 square units", "194 square units", "254 square units", "504 square units"],
    correctIndex: 2,
    explanation: "Surface area = 2(lw + lh + wh) = 2(28 + 36 + 63) = 254 square units."
  },
  {
    id: "g10-math-gc1-1",
    grade: 10,
    subject: "Mathematics",
    prompt: "G.C.1: A circle has radius 6. What is the area of a 90-degree sector in terms of pi?",
    answers: ["6pi", "9pi", "12pi", "36pi"],
    correctIndex: 1,
    explanation: "The full area is 36pi. A 90-degree sector is 1/4 of the circle, so its area is 9pi."
  },
  {
    id: "g10-math-gc1-2",
    grade: 10,
    subject: "Mathematics",
    prompt: "G.C.1: A tangent and radius meet at the point of tangency. What angle do they form?",
    answers: ["30 degrees", "45 degrees", "90 degrees", "180 degrees"],
    correctIndex: 2,
    explanation: "A tangent line is perpendicular to the radius at the point of tangency."
  },
  {
    id: "g10-math-grt1-1",
    grade: 10,
    subject: "Mathematics",
    prompt: "G.RT.1: In a right triangle, an angle is 40 degrees and the adjacent side is 15. Which equation finds the hypotenuse h?",
    answers: ["sin(40) = 15/h", "cos(40) = 15/h", "tan(40) = 15/h", "cos(40) = h/15"],
    correctIndex: 1,
    explanation: "Cosine is adjacent over hypotenuse, so cos(40) = 15/h."
  },
  {
    id: "g10-math-grt1-2",
    grade: 10,
    subject: "Mathematics",
    prompt: "G.RT.1: A right triangle has legs 7 and 24. What is the hypotenuse?",
    answers: ["25", "26", "31", "49"],
    correctIndex: 0,
    explanation: "7^2 + 24^2 = 49 + 576 = 625, and sqrt(625) = 25."
  }
];

const algebra2MathQuestions: Question[] = [
  {
    id: "g11-math-a2n1-1",
    grade: 11,
    subject: "Mathematics",
    prompt: "A2.N.1: Simplify (4 - 3i) + (2 + 8i).",
    answers: ["6 + 5i", "2 + 11i", "6 - 11i", "8 - 24i"],
    correctIndex: 0,
    explanation: "Combine real parts and imaginary parts: 4 + 2 = 6 and -3i + 8i = 5i."
  },
  {
    id: "g11-math-a2n1-2",
    grade: 11,
    subject: "Mathematics",
    prompt: "A2.N.1: What is 81^(3/4)?",
    answers: ["9", "27", "64", "243"],
    correctIndex: 1,
    explanation: "The fourth root of 81 is 3, and 3^3 = 27."
  },
  {
    id: "g11-math-a2n2-1",
    grade: 11,
    subject: "Mathematics",
    prompt: "A2.N.2: Add [[1, 4], [-2, 3]] and [[5, -1], [7, 0]].",
    answers: ["[[6, 3], [5, 3]]", "[[5, 4], [-14, 0]]", "[[6, 5], [9, 3]]", "[[4, -5], [-9, 3]]"],
    correctIndex: 0,
    explanation: "Add corresponding entries: 1+5=6, 4+(-1)=3, -2+7=5, and 3+0=3."
  },
  {
    id: "g11-math-a2n2-2",
    grade: 11,
    subject: "Mathematics",
    prompt: "A2.N.2: What is 3 times the matrix [[2, -4], [0, 5]]?",
    answers: ["[[5, -1], [3, 8]]", "[[6, -12], [0, 15]]", "[[2, -12], [0, 15]]", "[[6, -4], [0, 5]]"],
    correctIndex: 1,
    explanation: "Multiply every entry by 3."
  },
  {
    id: "g11-math-a2a1-1",
    grade: 11,
    subject: "Mathematics",
    prompt: "A2.A.1: Solve x^2 - 9x + 20 = 0.",
    answers: ["x = 2 or x = 10", "x = 4 or x = 5", "x = -4 or x = -5", "x = 9 or x = 20"],
    correctIndex: 1,
    explanation: "Factor: x^2 - 9x + 20 = (x - 4)(x - 5), so x = 4 or x = 5."
  },
  {
    id: "g11-math-a2a1-2",
    grade: 11,
    subject: "Mathematics",
    prompt: "A2.A.1: The system y = x^2 and y = 2x + 3 intersects when x^2 = 2x + 3. What are the x-values?",
    answers: ["x = -1 or x = 3", "x = 1 or x = -3", "x = 0 or x = 3", "x = -2 or x = 1"],
    correctIndex: 0,
    explanation: "x^2 - 2x - 3 = 0 factors as (x - 3)(x + 1), so x = 3 or x = -1."
  },
  {
    id: "g11-math-a2a2-1",
    grade: 11,
    subject: "Mathematics",
    prompt: "A2.A.2: Factor x^2 - 10x + 25.",
    answers: ["(x - 5)^2", "(x + 5)^2", "(x - 25)(x + 1)", "(x - 10)(x + 25)"],
    correctIndex: 0,
    explanation: "x^2 - 10x + 25 is a perfect-square trinomial: (x - 5)^2."
  },
  {
    id: "g11-math-a2a2-2",
    grade: 11,
    subject: "Mathematics",
    prompt: "A2.A.2: Which expression is equivalent to (x^3 y^2)(x^4 y)?",
    answers: ["x^7 y^3", "x^12 y^2", "x^7 y^2", "x^12 y^3"],
    correctIndex: 0,
    explanation: "When multiplying powers with the same base, add exponents: x^(3+4)y^(2+1) = x^7y^3."
  },
  {
    id: "g11-math-a2a3-1",
    grade: 11,
    subject: "Mathematics",
    prompt: "A2.A.3: What is the 18th term of the arithmetic sequence 5, 9, 13, 17, ...?",
    answers: ["68", "69", "73", "77"],
    correctIndex: 2,
    explanation: "The common difference is 4. a_18 = 5 + 17(4) = 73."
  },
  {
    id: "g11-math-a2a3-2",
    grade: 11,
    subject: "Mathematics",
    prompt: "A2.A.3: A geometric sequence starts 2, 6, 18, ... What is the 7th term?",
    answers: ["162", "486", "1,458", "4,374"],
    correctIndex: 2,
    explanation: "The common ratio is 3. a_7 = 2(3^6) = 1,458."
  },
  {
    id: "g11-math-a2f1-1",
    grade: 11,
    subject: "Mathematics",
    prompt: "A2.F.1: Which situation is best modeled by an exponential function?",
    answers: ["A car travels 60 miles each hour.", "A plant doubles its height every week.", "A tank loses 4 gallons per minute.", "A ticket costs $12 plus a flat fee."],
    correctIndex: 1,
    explanation: "Doubling by the same factor over equal time intervals is exponential growth."
  },
  {
    id: "g11-math-a2f1-2",
    grade: 11,
    subject: "Mathematics",
    prompt: "A2.F.1: For y = (x - 3)^2, what happens to y as x moves away from 3?",
    answers: ["y stays constant", "y decreases forever", "y increases", "y alternates between positive and negative"],
    correctIndex: 2,
    explanation: "The vertex is at x = 3, and squared distance from 3 increases as x moves away."
  },
  {
    id: "g11-math-a2f2-1",
    grade: 11,
    subject: "Mathematics",
    prompt: "A2.F.2: If f(x) = 3x - 1 and g(x) = x^2 + 2, what is f(g(3))?",
    answers: ["26", "32", "34", "98"],
    correctIndex: 1,
    explanation: "g(3) = 11, and f(11) = 3(11) - 1 = 32."
  },
  {
    id: "g11-math-a2f2-2",
    grade: 11,
    subject: "Mathematics",
    prompt: "A2.F.2: Which function has an inverse that is also a function without restricting its domain?",
    answers: ["f(x) = x^2", "f(x) = |x|", "f(x) = 2x - 7", "f(x) = x^4"],
    correctIndex: 2,
    explanation: "f(x) = 2x - 7 is one-to-one, so its inverse is a function."
  },
  {
    id: "g11-math-a2d1-1",
    grade: 11,
    subject: "Mathematics",
    prompt: "A2.D.1: A quadratic model was fitted using data for x-values from 0 to 12. Which prediction is least reliable?",
    answers: ["x = 2", "x = 8", "x = 11", "x = 40"],
    correctIndex: 3,
    explanation: "x = 40 is far outside the data range, so it is extrapolation and less reliable."
  },
  {
    id: "g11-math-a2d1-2",
    grade: 11,
    subject: "Mathematics",
    prompt: "A2.D.1: Which model best fits data that increases by about the same percent over equal time intervals?",
    answers: ["linear", "exponential", "constant", "absolute value"],
    correctIndex: 1,
    explanation: "Equal percent change over equal intervals suggests an exponential model."
  },
  {
    id: "g11-math-a2d2-1",
    grade: 11,
    subject: "Mathematics",
    prompt: "A2.D.2: A random sample of 150 voters shows 42% support a proposal. About how many of 2,000 voters would be predicted to support it?",
    answers: ["420", "700", "840", "1,260"],
    correctIndex: 2,
    explanation: "0.42 x 2,000 = 840."
  },
  {
    id: "g11-math-a2d2-2",
    grade: 11,
    subject: "Mathematics",
    prompt: "A2.D.2: Why is a random sample usually better than a convenience sample?",
    answers: ["It guarantees a perfect prediction.", "It reduces selection bias.", "It always has fewer people.", "It avoids all variability."],
    correctIndex: 1,
    explanation: "Random sampling helps reduce selection bias and makes inferences more trustworthy."
  }
];

const precalculusMathQuestions: Question[] = [
  {
    id: "g12-math-pcf1-1",
    grade: 12,
    subject: "Mathematics",
    prompt: "PC.F.1: What is the domain of f(x) = sqrt(x + 6)?",
    answers: ["x >= -6", "x <= -6", "x > 6", "all real numbers"],
    correctIndex: 0,
    explanation: "The radicand must be nonnegative: x + 6 >= 0, so x >= -6."
  },
  {
    id: "g12-math-pcf1-2",
    grade: 12,
    subject: "Mathematics",
    prompt: "PC.F.1: Which relation is not a function?",
    answers: ["(1,2), (2,3), (3,4)", "(0,5), (1,5), (2,5)", "(4,1), (4,7), (5,9)", "(-1,0), (0,0), (1,0)"],
    correctIndex: 2,
    explanation: "The input 4 has two different outputs, so the relation is not a function."
  },
  {
    id: "g12-math-pcf2-1",
    grade: 12,
    subject: "Mathematics",
    prompt: "PC.F.2: A quantity starts at 500 and grows by 8% each year. Which model represents it after t years?",
    answers: ["500 + 8t", "500(0.08)^t", "500(1.08)^t", "1.08(500)^t"],
    correctIndex: 2,
    explanation: "An 8% growth rate uses a factor of 1.08, so the model is 500(1.08)^t."
  },
  {
    id: "g12-math-pcf2-2",
    grade: 12,
    subject: "Mathematics",
    prompt: "PC.F.2: Which model best represents a value that decays by 15% each month from 2,000?",
    answers: ["2000(0.85)^m", "2000(1.15)^m", "2000 - 15m", "0.15(2000)^m"],
    correctIndex: 0,
    explanation: "A 15% decrease leaves 85%, so the decay factor is 0.85."
  },
  {
    id: "g12-math-pcf3-1",
    grade: 12,
    subject: "Mathematics",
    prompt: "PC.F.3: Solve x^2 = 3x + 10.",
    answers: ["x = -2 or x = 5", "x = 2 or x = -5", "x = 0 or x = 10", "x = 3 or x = 10"],
    correctIndex: 0,
    explanation: "x^2 - 3x - 10 = 0 factors as (x - 5)(x + 2), so x = 5 or x = -2."
  },
  {
    id: "g12-math-pcf3-2",
    grade: 12,
    subject: "Mathematics",
    prompt: "PC.F.3: If f(x) = x^2 + 1 and g(x) = 5x - 5, what equation verifies their intersection points?",
    answers: ["x^2 + 1 = 5x - 5", "x^2 + 5x = -4", "x^2 - 1 = 5x + 5", "x^2 + 1 = 0"],
    correctIndex: 0,
    explanation: "Intersection points occur where the function outputs are equal."
  },
  {
    id: "g12-math-pccs1-1",
    grade: 12,
    subject: "Mathematics",
    prompt: "PC.CS.1: What conic is represented by (x - 3)^2 + (y + 2)^2 = 49?",
    answers: ["circle", "ellipse", "parabola", "hyperbola"],
    correctIndex: 0,
    explanation: "Both squared terms have the same coefficient and are added, so it is a circle."
  },
  {
    id: "g12-math-pccs1-2",
    grade: 12,
    subject: "Mathematics",
    prompt: "PC.CS.1: What conic is represented by x^2/16 + y^2/9 = 1?",
    answers: ["circle", "ellipse", "parabola", "hyperbola"],
    correctIndex: 1,
    explanation: "The squared terms are added with different denominators, so the graph is an ellipse."
  },
  {
    id: "g12-math-pct1-1",
    grade: 12,
    subject: "Mathematics",
    prompt: "PC.T.1: What is sin(pi/6)?",
    answers: ["1/2", "sqrt(2)/2", "sqrt(3)/2", "1"],
    correctIndex: 0,
    explanation: "On the unit circle, pi/6 has y-coordinate 1/2."
  },
  {
    id: "g12-math-pct1-2",
    grade: 12,
    subject: "Mathematics",
    prompt: "PC.T.1: What is cos(pi)?",
    answers: ["-1", "0", "1", "pi"],
    correctIndex: 0,
    explanation: "The unit-circle point at pi radians is (-1, 0), so cos(pi) = -1."
  },
  {
    id: "g12-math-pct2-1",
    grade: 12,
    subject: "Mathematics",
    prompt: "PC.T.2: Which formula is the Law of Cosines?",
    answers: ["a/sin(A) = b/sin(B)", "c^2 = a^2 + b^2 - 2ab cos(C)", "sin^2(x) + cos^2(x) = 1", "tan(x) = sin(x)/cos(x)"],
    correctIndex: 1,
    explanation: "The Law of Cosines relates three sides and an included angle: c^2 = a^2 + b^2 - 2ab cos(C)."
  },
  {
    id: "g12-math-pct2-2",
    grade: 12,
    subject: "Mathematics",
    prompt: "PC.T.2: In a triangle, a/sin(A) = b/sin(B) is an example of what theorem?",
    answers: ["Law of Sines", "Law of Cosines", "Pythagorean theorem", "Unit circle identity"],
    correctIndex: 0,
    explanation: "The Law of Sines sets side lengths over sines of opposite angles equal."
  },
  {
    id: "g12-math-pct3-1",
    grade: 12,
    subject: "Mathematics",
    prompt: "PC.T.3: Solve 2sin(x) = 1 on 0 <= x < 2pi.",
    answers: ["pi/6 and 5pi/6", "pi/3 and 2pi/3", "0 and pi", "pi/2 only"],
    correctIndex: 0,
    explanation: "sin(x) = 1/2 at pi/6 and 5pi/6 on the interval."
  },
  {
    id: "g12-math-pct3-2",
    grade: 12,
    subject: "Mathematics",
    prompt: "PC.T.3: Which expression is equivalent to 1 - cos^2(x)?",
    answers: ["sin^2(x)", "cos^2(x)", "tan^2(x)", "1 + sin^2(x)"],
    correctIndex: 0,
    explanation: "Using sin^2(x) + cos^2(x) = 1, 1 - cos^2(x) = sin^2(x)."
  },
  {
    id: "g12-math-pct4-1",
    grade: 12,
    subject: "Mathematics",
    prompt: "PC.T.4: What is the modulus of -5 + 12i?",
    answers: ["7", "13", "17", "sqrt(119)"],
    correctIndex: 1,
    explanation: "The modulus is sqrt((-5)^2 + 12^2) = sqrt(169) = 13."
  },
  {
    id: "g12-math-pct4-2",
    grade: 12,
    subject: "Mathematics",
    prompt: "PC.T.4: What is i^2?",
    answers: ["-1", "0", "1", "2i"],
    correctIndex: 0,
    explanation: "By definition, i is the imaginary unit where i^2 = -1."
  }
];

export function getCurriculum(grade: Grade): SubjectContent[] {
  const lessonsBySubject: Record<Subject, Lesson[]> = {
    Mathematics: grade === 3 ? grade3MathLessons : grade === 4 ? grade4MathLessons : grade === 5 ? grade5MathLessons : grade === 6 ? grade6MathLessons : grade === 7 ? grade7MathLessons : grade === 8 ? preAlgebraMathLessons : grade === 9 ? algebra1MathLessons : grade === 10 ? geometryMathLessons : grade === 11 ? algebra2MathLessons : grade === 12 ? precalculusMathLessons : [],
    "English Language Arts": grade === 3 ? grade3ElaLessons : grade === 4 ? grade4ElaLessons : grade === 5 ? grade5ElaLessons : grade === 6 ? grade6ElaLessons : grade === 7 ? grade7ElaLessons : grade === 8 ? grade8ElaLessons : grade === 9 ? grade9ElaLessons : grade === 10 ? grade10ElaLessons : grade === 11 ? grade11ElaLessons : grade === 12 ? grade12ElaLessons : []
  };

  return subjects.map((entry) => ({
    ...entry,
    lessons: lessonsBySubject[entry.subject]
  }));
}

function rotateCorrectAnswer(answers: string[], correctIndex: number) {
  const offset = correctIndex % answers.length;
  const rotated = [...answers.slice(offset), ...answers.slice(0, offset)];
  return {
    answers: rotated,
    correctIndex: (answers.length - offset) % answers.length
  };
}

function buildAnswerChoices(correct: string, distractors: string[], index: number) {
  const choices = [correct];
  const fallbacks = ["Not enough information", "Cannot be determined", "None of these"];
  for (const choice of [...distractors, ...fallbacks]) {
    if (!choices.includes(choice)) {
      choices.push(choice);
    }
    if (choices.length === 4) break;
  }
  return rotateCorrectAnswer(choices, index);
}

function countNoun(count: number, singular: string, plural = `${singular}s`) {
  return `${count} ${count === 1 ? singular : plural}`;
}

function testMathPrompt(prompt: string) {
  return prompt
    .replace("What is the value of", "Find the value of")
    .replace("A class has", "On a test, a class has")
    .replace("Which fraction shows", "Select the fraction that shows")
    .replace("A student has", "Calculate the value when a student has")
    .replace("What number comes next", "Find the next number")
    .replace("A rectangle is", "Find the area when a rectangle is")
    .replace("A practice session starts", "Find the ending time when a practice session starts")
    .replace("What is the median", "Find the median")
    .replace("What is the absolute value", "Find the absolute value")
    .replace("Evaluate", "Simplify")
    .replace("A recipe uses", "Calculate the percent when a recipe uses")
    .replace("Solve", "Find x:")
    .replace("A bag has", "Find the probability when a bag has")
    .replace("A triangle has", "Find the area when a triangle has")
    .replace("If y =", "Calculate y if y =")
    .replace("For f(x)", "Evaluate the function: f(x)")
    .replace("Which equation", "Select the equation")
    .replace("The points", "Find the slope if the points")
    .replace("Which relation", "Select the relation")
    .replace("An experiment has", "Convert the probability:")
    .replace("Two angles form", "Find the missing angle:")
    .replace("A circle has", "Find the circle area:")
    .replace("A cube has", "Find the cube volume:")
    .replace("If two parallel lines", "Use parallel-line facts:")
    .replace("In a right triangle", "Use right-triangle trig:")
    .replace("Which statement", "Select the statement")
    .replace("A dilation has", "Apply the dilation:")
    .replace("Which transformation", "Select the transformation")
    .replace("What is the product", "Expand")
    .replace("What is the next term", "Find the next term")
    .replace("Simplify sqrt", "Simplify the radical sqrt")
    .replace("What is the fourth term", "Find the fourth term")
    .replace("Which number", "Select the number")
    .replace("Add the matrices", "For the matrix sum, add")
    .replace("Which value", "Select the value")
    .replace("What is the center", "Find the center")
    .replace("Which identity", "Select the identity")
    .replace("What is the amplitude", "Find the amplitude")
    .replace("Which conic", "Select the conic");
}

function normalizedLessonText(lesson: Lesson) {
  return `${lesson.unit} ${lesson.title} ${lesson.standard}`.toLowerCase();
}

function pickFromTopic(preferred: number[], patternIndex: number, bankKind: QuestionBankKind, variantCount: number) {
  const bankShift = bankKind === "test" ? Math.ceil(preferred.length / 2) : 0;
  return preferred[(patternIndex + bankShift) % preferred.length] % variantCount;
}

function preferredMathVariant(grade: Grade, lesson: Lesson, patternIndex: number, bankKind: QuestionBankKind, variantCount: number) {
  const text = normalizedLessonText(lesson);

  if (grade <= 5) {
    if (text.includes("fraction") || text.includes("decimal")) return pickFromTopic([2, 0, 7, 1, 4], patternIndex, bankKind, variantCount);
    if (text.includes("money") || text.includes("coin") || text.includes("bill")) return pickFromTopic([3, 1, 7, 0, 4], patternIndex, bankKind, variantCount);
    if (text.includes("pattern") || text.includes("algebra") || text.includes("unknown") || text.includes("variable")) return pickFromTopic([4, 1, 2, 7, 0], patternIndex, bankKind, variantCount);
    if (text.includes("geometry") || text.includes("polygon") || text.includes("figure") || text.includes("volume") || text.includes("angle")) return pickFromTopic([5, 6, 4, 7, 2], patternIndex, bankKind, variantCount);
    if (text.includes("measure") || text.includes("time") || text.includes("elapsed") || text.includes("length") || text.includes("capacity") || text.includes("weight")) return pickFromTopic([6, 5, 3, 7, 1], patternIndex, bankKind, variantCount);
    if (text.includes("data") || text.includes("probability") || text.includes("mean") || text.includes("median") || text.includes("mode")) return pickFromTopic([7, 2, 4, 1, 0], patternIndex, bankKind, variantCount);
    if (text.includes("operation") || text.includes("addition") || text.includes("subtraction") || text.includes("multiplication") || text.includes("division")) return pickFromTopic([1, 4, 0, 7, 2], patternIndex, bankKind, variantCount);
    return pickFromTopic([0, 1, 2, 4, 7], patternIndex, bankKind, variantCount);
  }

  if (grade <= 7) {
    if (text.includes("ratio") || text.includes("proportion") || text.includes("percent")) return pickFromTopic([1, 5, 9, 3, 8], patternIndex, bankKind, variantCount);
    if (text.includes("equation") || text.includes("inequal") || text.includes("expression") || text.includes("algebra")) return pickFromTopic([2, 8, 9, 5, 0], patternIndex, bankKind, variantCount);
    if (text.includes("geometry") || text.includes("area") || text.includes("volume") || text.includes("surface") || text.includes("angle") || text.includes("transformation")) return pickFromTopic([4, 6, 8, 9, 5], patternIndex, bankKind, variantCount);
    if (text.includes("data") || text.includes("probability")) return pickFromTopic([3, 7, 1, 9, 5], patternIndex, bankKind, variantCount);
    if (text.includes("rational") || text.includes("integer") || text.includes("absolute") || text.includes("exponent")) return pickFromTopic([0, 6, 8, 1, 2], patternIndex, bankKind, variantCount);
    if (text.includes("measurement") || text.includes("convert")) return pickFromTopic([4, 5, 9, 1, 7], patternIndex, bankKind, variantCount);
    return pickFromTopic([0, 1, 2, 4, 7], patternIndex, bankKind, variantCount);
  }

  if (grade === 8 || grade === 9) {
    if (text.includes("quadratic")) return pickFromTopic([0, 1, 2, 3, 4, 5, 6, 7], patternIndex, bankKind, variantCount);
    if (text.includes("function") || text.includes("linear") || text.includes("slope")) return pickFromTopic([0, 1, 3, 5, 6, 10, 13], patternIndex, bankKind, variantCount);
    if (text.includes("pythagorean") || text.includes("surface") || text.includes("volume") || text.includes("triangle")) return pickFromTopic([2, 11, 8, 13, 6], patternIndex, bankKind, variantCount);
    if (text.includes("data") || text.includes("probability") || text.includes("scatter")) return pickFromTopic([7, 10, 5, 13, 3], patternIndex, bankKind, variantCount);
    if (text.includes("real number") || text.includes("rational") || text.includes("absolute")) return pickFromTopic([4, 12, 8, 9, 0], patternIndex, bankKind, variantCount);
    if (text.includes("equation") || text.includes("inequal")) return pickFromTopic([1, 8, 9, 0, 13], patternIndex, bankKind, variantCount);
  }

  if (grade === 11) {
    if (text.includes("complex") || text.includes("radical") || text.includes("rational exponent")) return pickFromTopic([4, 6, 8, 11, 14], patternIndex, bankKind, variantCount);
    if (text.includes("matrix")) return pickFromTopic([7, 13, 8, 10, 0], patternIndex, bankKind, variantCount);
    if (text.includes("sequence") || text.includes("series")) return pickFromTopic([3, 5, 9, 15, 10], patternIndex, bankKind, variantCount);
    if (text.includes("function") || text.includes("inverse") || text.includes("composition")) return pickFromTopic([10, 12, 14, 0, 1], patternIndex, bankKind, variantCount);
    if (text.includes("data") || text.includes("statistical")) return pickFromTopic([12, 9, 10, 2, 15], patternIndex, bankKind, variantCount);
  }

  if (grade === 12) {
    if (text.includes("trigon")) return pickFromTopic([1, 3, 4, 8, 9], patternIndex, bankKind, variantCount);
    if (text.includes("conic")) return pickFromTopic([2, 7, 12, 10, 15], patternIndex, bankKind, variantCount);
    if (text.includes("complex")) return pickFromTopic([5, 13, 9, 3, 14], patternIndex, bankKind, variantCount);
    if (text.includes("function") || text.includes("relations") || text.includes("model")) return pickFromTopic([0, 6, 10, 11, 14, 15], patternIndex, bankKind, variantCount);
  }

  return (patternIndex + (bankKind === "test" ? 3 : 0)) % variantCount;
}

function preferredGeometryVariant(lesson: Lesson, patternIndex: number, bankKind: QuestionBankKind) {
  const text = normalizedLessonText(lesson);
  if (text.includes("quadratic")) return pickFromTopic([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], patternIndex, bankKind, 12);
  if (text.includes("circle")) return pickFromTopic([1, 10, 8, 5, 11], patternIndex, bankKind, 12);
  if (text.includes("trigon")) return pickFromTopic([4, 8, 0, 11, 3], patternIndex, bankKind, 12);
  if (text.includes("three-dimensional") || text.includes("3d") || text.includes("volume") || text.includes("surface")) return pickFromTopic([2, 9, 6, 1, 10], patternIndex, bankKind, 12);
  if (text.includes("proof") || text.includes("logic") || text.includes("argument")) return pickFromTopic([5, 11, 3, 7, 0], patternIndex, bankKind, 12);
  if (text.includes("line") || text.includes("angle") || text.includes("polygon") || text.includes("two-dimensional")) return pickFromTopic([0, 3, 8, 6, 7], patternIndex, bankKind, 12);
  return patternIndex % 12;
}

function preferredElaVariant(lesson: Lesson, patternIndex: number, bankKind: QuestionBankKind) {
  const text = normalizedLessonText(lesson);
  if (text.includes("listening") || text.includes("speaking") || text.includes("discussion") || text.includes("present")) return pickFromTopic([7, 6, 3, 0], patternIndex, bankKind, 8);
  if (text.includes("vocabulary") || text.includes("context") || text.includes("synonym") || text.includes("prefix") || text.includes("connotation")) return pickFromTopic([1, 5, 0, 4], patternIndex, bankKind, 8);
  if (text.includes("language") || text.includes("grammar") || text.includes("sentence") || text.includes("punctuation") || text.includes("capitalization")) return pickFromTopic([0, 6, 7, 1], patternIndex, bankKind, 8);
  if (text.includes("research") || text.includes("source") || text.includes("citation") || text.includes("evidence")) return pickFromTopic([2, 6, 4, 3], patternIndex, bankKind, 8);
  if (text.includes("critical") || text.includes("inference") || text.includes("point of view") || text.includes("literary") || text.includes("structure")) return pickFromTopic([3, 2, 4, 0], patternIndex, bankKind, 8);
  if (text.includes("writing") || text.includes("process") || text.includes("claim") || text.includes("argument") || text.includes("draft")) return pickFromTopic([2, 1, 6, 4], patternIndex, bankKind, 8);
  if (text.includes("multimodal") || text.includes("visual") || text.includes("independent")) return pickFromTopic([6, 7, 3, 2], patternIndex, bankKind, 8);
  return (patternIndex + (bankKind === "test" ? 4 : 0)) % 8;
}

function generatedMathQuestion(grade: Grade, lesson: Lesson, index: number, bankKind: QuestionBankKind, patternIndex: number): Question {
  const bankOffset = bankKind === "test" ? 10000 : 0;
  const variantCount = grade <= 5 ? 8 : grade <= 7 ? 10 : grade === 10 ? 12 : grade === 11 || grade === 12 ? 16 : 14;
  const variant = preferredMathVariant(grade, lesson, patternIndex, bankKind, variantCount);
  const base = grade * 11 + index + bankOffset;
  const a = (base % 19) + grade + 3;
  const b = (base % 13) + grade + 2;
  const c = (base % 9) + 2;
  const unit = lesson.title;
  let prompt = "";
  let correct = "";
  let distractors: string[] = [];
  let explanation = "";

  if (grade <= 5) {
    if (variant === 0) {
      if (grade === 5) {
        const numerator = (index % 8) + 3;
        const denominator = numerator + 5;
        const decimal = Number((numerator / denominator).toFixed(2));
        prompt = `${unit}: Which decimal is closest to ${numerator}/${denominator}?`;
        correct = `${decimal}`;
        distractors = [`${Number((denominator / numerator).toFixed(2))}`, `${Number(((numerator + 1) / denominator).toFixed(2))}`, `${Number((numerator / (denominator + 2)).toFixed(2))}`];
        explanation = `Divide the numerator by the denominator: ${numerator} / ${denominator} is about ${decimal}.`;
      } else {
        const placeLimit = grade === 4 ? 100000 : 10000;
        const number = placeLimit * (((base + 1) % 8) + 1) + 1000 * (((base + 3) % 9) + 1) + 100 * (((base + 5) % 9) + 1) + 10 * (((base + 7) % 9) + 1) + (((base + 9) % 9) + 1);
        const targetPlace = grade === 4 ? "hundred-thousands" : "ten-thousands";
        const value = grade === 4 ? Math.floor(number / 100000) * 100000 : Math.floor(number / 10000) * 10000;
        prompt = `${unit}: What is the value of the ${targetPlace} digit in ${number}?`;
        correct = `${value}`;
        distractors = [`${value / 10}`, `${value / 100}`, `${number - value}`];
        explanation = `Use place value, not just the digit. The ${targetPlace} digit has value ${value}.`;
      }
    } else if (variant === 1) {
      if (grade === 3) {
        const answer = a * c - b;
        prompt = `${unit}: A class has ${a} bags with ${c} pencils in each bag. They give away ${b} pencils. How many pencils are left?`;
        correct = `${answer}`;
        distractors = [`${a + c - b}`, `${a * (c - b)}`, `${answer + b}`];
        explanation = `Multiply first: ${a} x ${c} = ${a * c}. Then subtract ${b} to get ${answer}.`;
      } else if (grade === 4) {
        const groups = (index % 8) + 12;
        const total = groups * b;
        prompt = `${unit}: A school orders ${total} notebooks in equal boxes of ${b}. How many boxes are needed?`;
        correct = `${groups}`;
        distractors = [`${groups + b}`, `${total - b}`, `${groups - 1}`];
        explanation = `Divide the total by the number in each box: ${total} / ${b} = ${groups}.`;
      } else {
        const quotient = (index % 9) + 14;
        const divisor = c + 5;
        const total = quotient * divisor + b;
        prompt = `${unit}: Divide ${total} by ${divisor}. What is the quotient with remainder?`;
        correct = `${quotient} R ${b}`;
        distractors = [`${quotient + 1} R ${b}`, `${quotient} R ${divisor}`, `${divisor} R ${b}`];
        explanation = `${divisor} x ${quotient} = ${quotient * divisor}, and ${total} - ${quotient * divisor} = ${b}.`;
      }
    } else if (variant === 2) {
      const numerator = (index % 5) + 1;
      const denominator = numerator + 4;
      if (grade === 3) {
        prompt = `${unit}: Which fraction shows ${numerator} shaded parts out of ${denominator} equal parts?`;
        correct = `${numerator}/${denominator}`;
        distractors = [`${denominator}/${numerator}`, `${numerator}/${denominator + numerator}`, `${denominator - numerator}/${denominator}`];
        explanation = `The numerator is the shaded parts and the denominator is the total equal parts.`;
      } else if (grade === 4) {
        prompt = `${unit}: Which comparison is true?`;
        correct = `${numerator}/${denominator} < ${numerator + 1}/${denominator}`;
        distractors = [`${numerator}/${denominator} > ${numerator + 1}/${denominator}`, `${numerator}/${denominator} = ${numerator + 1}/${denominator}`, `${denominator}/${numerator} < ${numerator}/${denominator}`];
        explanation = `The denominators match, so compare numerators. ${numerator} is less than ${numerator + 1}.`;
      } else {
        const otherDenominator = denominator + 2;
        const sumNumerator = numerator * otherDenominator + (numerator + 1) * denominator;
        const sumDenominator = denominator * otherDenominator;
        prompt = `${unit}: Add ${numerator}/${denominator} + ${numerator + 1}/${otherDenominator}. Which unsimplified sum is correct?`;
        correct = `${sumNumerator}/${sumDenominator}`;
        distractors = [`${numerator + numerator + 1}/${denominator + otherDenominator}`, `${sumNumerator}/${denominator + otherDenominator}`, `${numerator * (numerator + 1)}/${sumDenominator}`];
        explanation = `Use a common denominator of ${sumDenominator}, then add the adjusted numerators.`;
      }
    } else if (variant === 3) {
      const cents = 25 * ((index % 3) + 1) + 10 * ((index % 4) + 1) + 5;
      const quarters = Math.floor(cents / 25);
      const dimes = (index % 4) + 1;
      if (grade === 5) {
        const priceOne = Number((a + cents / 100).toFixed(2));
        const priceTwo = Number((c + dimes / 10).toFixed(2));
        const total = Number((priceOne + priceTwo).toFixed(2));
        prompt = `${unit}: A supply kit costs $${priceOne} and a notebook costs $${priceTwo}. What is the total cost?`;
        correct = `$${total.toFixed(2)}`;
        distractors = [`$${(total + 1).toFixed(2)}`, `$${(priceOne - priceTwo).toFixed(2)}`, `$${(total - 0.1).toFixed(2)}`];
        explanation = `Line up decimal places and add dollars and cents: ${priceOne.toFixed(2)} + ${priceTwo.toFixed(2)} = ${total.toFixed(2)}.`;
      } else {
        prompt = `${unit}: A student has ${countNoun(quarters, "quarter")}, ${countNoun(dimes, "dime")}, and 1 nickel. What is the total value?`;
        correct = `${cents} cents`;
        distractors = [`${cents - 5} cents`, `${cents + 10} cents`, `${cents + 25} cents`];
        explanation = `Add the coin values: quarters, dimes, and nickel total ${cents} cents.`;
      }
    } else if (variant === 4) {
      const first = grade === 5 ? a * 2 : a;
      const change = grade === 3 ? c : grade === 4 ? b - c : b + c;
      prompt = `${unit}: A pattern starts ${first}, ${first + change}, ${first + 2 * change}, ${first + 3 * change}. What is the rule?`;
      correct = `add ${change}`;
      distractors = [`multiply by ${change}`, `subtract ${change}`, `add ${change + 1}`];
      explanation = `Check each step. The same amount, ${change}, is added each time.`;
    } else if (variant === 5) {
      const width = (index % 8) + 3;
      const height = (index % 6) + 2;
      if (grade === 5) {
        const depth = (index % 5) + 4;
        const volume = width * height * depth;
        prompt = `${unit}: A rectangular prism is ${width} by ${height} by ${depth}. What is its volume?`;
        correct = `${volume} cubic units`;
        distractors = [`${width * height} cubic units`, `${2 * (width + height + depth)} cubic units`, `${volume + depth} cubic units`];
        explanation = `Volume is length x width x height: ${width} x ${height} x ${depth} = ${volume}.`;
      } else if (grade === 4) {
        prompt = `${unit}: Which shape has exactly ${width} sides?`;
        correct = width === 3 ? "triangle" : width === 4 ? "quadrilateral" : width === 5 ? "pentagon" : width === 6 ? "hexagon" : "polygon";
        distractors = ["sphere", "cone", "line segment"];
        explanation = `Use the number of sides to classify the polygon.`;
      } else {
        const answer = width * height;
        prompt = `${unit}: A rectangle is ${width} units long and ${height} units wide. What is its area?`;
        correct = `${answer} square units`;
        distractors = [`${width + height} square units`, `${2 * (width + height)} square units`, `${answer + width} square units`];
        explanation = `Area is length x width, so ${width} x ${height} = ${answer}.`;
      }
    } else if (variant === 6) {
      const startHour = (index % 7) + 1;
      const minutes = 15 + 5 * (index % 8);
      if (grade === 4) {
        prompt = `${unit}: A practice session starts at ${startHour}:35 and lasts ${minutes} minutes. What time does it end?`;
        const totalMinutes = 35 + minutes;
        const endHour = startHour + Math.floor(totalMinutes / 60);
        const endMinute = totalMinutes % 60;
        correct = `${endHour}:${String(endMinute).padStart(2, "0")}`;
        distractors = [`${startHour}:${String(totalMinutes).padStart(2, "0")}`, `${endHour + 1}:${String(endMinute).padStart(2, "0")}`, `${startHour}:${String(endMinute).padStart(2, "0")}`];
        explanation = `Add minutes across the hour: 35 + ${minutes} = ${totalMinutes} minutes, or ${Math.floor(totalMinutes / 60)} hour and ${endMinute} minutes.`;
      } else if (grade === 5) {
        const feet = (index % 8) + 3;
        prompt = `${unit}: Convert ${feet} feet to inches.`;
        correct = `${feet * 12} inches`;
        distractors = [`${feet + 12} inches`, `${feet * 10} inches`, `${feet * 6} inches`];
        explanation = `Each foot has 12 inches, so multiply ${feet} by 12.`;
      } else {
        prompt = `${unit}: A practice session starts at ${startHour}:00 and lasts ${minutes} minutes. What time does it end?`;
        correct = `${startHour}:${String(minutes).padStart(2, "0")}`;
        distractors = [`${startHour + 1}:00`, `${startHour}:${String(minutes + 5).padStart(2, "0")}`, `${startHour - 1 || 12}:${String(minutes).padStart(2, "0")}`];
        explanation = `Add ${minutes} minutes to ${startHour}:00.`;
      }
    } else {
      const values = [a, b, c, grade + (index % 6)];
      const sorted = [...values].sort((left, right) => left - right);
      const median = (sorted[1] + sorted[2]) / 2;
      if (grade === 3) {
        prompt = `${unit}: A bar graph shows ${a} votes for soccer and ${b} votes for basketball. How many more votes did soccer get?`;
        correct = `${a - b}`;
        distractors = [`${a + b}`, `${b - c}`, `${a - b + 1}`];
        explanation = `Compare categories by subtracting: ${a} - ${b} = ${a - b}.`;
      } else if (grade === 4) {
        prompt = `${unit}: A line plot has values ${values.join(", ")}. What is the median?`;
        correct = `${median}`;
        distractors = [`${sorted[0]}`, `${sorted[3]}`, `${values.reduce((sum, value) => sum + value, 0)}`];
        explanation = `Order the values as ${sorted.join(", ")} and average the two middle values.`;
      } else {
        const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
        prompt = `${unit}: What is the mean of ${values.join(", ")}?`;
        correct = `${mean}`;
        distractors = [`${median}`, `${Math.max(...values)}`, `${values.reduce((sum, value) => sum + value, 0)}`];
        explanation = `Add all values and divide by ${values.length}.`;
      }
    }
  } else if (grade <= 7) {
    if (variant === 0) {
      if (grade === 7) {
        const answer = -a + b - c;
        prompt = `${unit}: Evaluate -${a} + ${b} - ${c}.`;
        correct = `${answer}`;
        distractors = [`${a + b - c}`, `${answer + c}`, `${-answer}`];
        explanation = `Use integer rules carefully: combine -${a} + ${b}, then subtract ${c}.`;
      } else {
        const answer = a - b - c;
        prompt = `${unit}: Evaluate ${a} - ${b} - ${c}.`;
        correct = `${answer}`;
        distractors = [`${a - (b + c) + 1}`, `${a + b - c}`, `${b + c - a}`];
        explanation = `Subtract from left to right: ${a} - ${b} - ${c} = ${answer}.`;
      }
    } else if (variant === 1) {
      const total = a * 4;
      const part = a;
      if (grade === 7) {
        const original = total;
        const scaled = total + part;
        prompt = `${unit}: A value increases from ${original} to ${scaled}. What percent increase is this?`;
        correct = "25%";
        distractors = ["20%", "40%", "75%"];
        explanation = `The increase is ${part}. Divide by the original amount: ${part}/${original} = 1/4 = 25%.`;
      } else {
        prompt = `${unit}: A recipe uses ${part} cups of oats for ${total} cups of mix. What percent of the mix is oats?`;
        correct = "25%";
        distractors = ["20%", "40%", "75%"];
        explanation = `${part}/${total} = 1/4, and 1/4 = 25%.`;
      }
    } else if (variant === 2) {
      const x = (index % 8) + 3;
      const total = b * x + c;
      if (grade === 7) {
        prompt = `${unit}: Solve ${b}x - ${c} <= ${total - 2 * c}.`;
        correct = `x <= ${x}`;
        distractors = [`x >= ${x}`, `x <= ${x + 1}`, `x = ${total - c}`];
        explanation = `Add ${c} to both sides, then divide by positive ${b}; the inequality direction stays the same.`;
      } else {
        prompt = `${unit}: Solve ${b}x + ${c} = ${total}.`;
        correct = `${x}`;
        distractors = [`${x + 1}`, `${x - 1}`, `${total - c}`];
        explanation = `Subtract ${c}, then divide by ${b}: x = ${x}.`;
      }
    } else if (variant === 3) {
      const favorable = (index % 5) + 1;
      const total = favorable + 5;
      if (grade === 7) {
        const trials = total * 12;
        prompt = `${unit}: If the probability of blue is ${favorable}/${total}, about how many blue results should occur in ${trials} trials?`;
        correct = `${favorable * 12}`;
        distractors = [`${total * 12}`, `${favorable + 12}`, `${(total - favorable) * 12}`];
        explanation = `Use proportional reasoning: ${trials} is ${12} groups of ${total}, so multiply favorable outcomes by ${12}.`;
      } else {
        prompt = `${unit}: A bag has ${favorable} blue tiles and ${total - favorable} red tiles. What is the probability of choosing blue?`;
        correct = `${favorable}/${total}`;
        distractors = [`${total - favorable}/${total}`, `${favorable}/${total - favorable}`, `${total}/${favorable}`];
        explanation = `Probability is favorable outcomes over total outcomes.`;
      }
    } else if (variant === 4) {
      const baseLength = (index % 10) + 6;
      const height = (index % 7) + 4;
      const answer = (baseLength * height) / 2;
      if (grade === 7) {
        const top = baseLength - 2;
        const trapezoidArea = ((baseLength + top) * height) / 2;
        prompt = `${unit}: A trapezoid has bases ${baseLength} and ${top} with height ${height}. What is its area?`;
        correct = `${trapezoidArea} square units`;
        distractors = [`${baseLength * height} square units`, `${top * height} square units`, `${2 * trapezoidArea} square units`];
        explanation = `Trapezoid area is one-half the sum of the bases times height.`;
      } else {
        prompt = `${unit}: A triangle has base ${baseLength} and height ${height}. What is its area?`;
        correct = `${answer} square units`;
        distractors = [`${baseLength * height} square units`, `${baseLength + height} square units`, `${2 * (baseLength + height)} square units`];
        explanation = `Triangle area is one-half base x height: (${baseLength} x ${height}) / 2 = ${answer}.`;
      }
    } else if (variant === 5) {
      const rate = (index % 6) + 2;
      prompt = `${unit}: If y = ${rate}x, what is y when x = ${c}?`;
      correct = `${rate * c}`;
      distractors = [`${rate + c}`, `${rate * c + rate}`, `${c - rate}`];
      explanation = `Substitute x = ${c}: y = ${rate} x ${c} = ${rate * c}.`;
    } else if (variant === 6) {
      const answer = a ** 2;
      prompt = `${unit}: Evaluate ${a}^2.`;
      correct = `${answer}`;
      distractors = [`${a * 2}`, `${answer + a}`, `${answer - a}`];
      explanation = `${a}^2 means ${a} x ${a} = ${answer}.`;
    } else if (variant === 7) {
      const values = [a, b, c, grade + (index % 6)];
      const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
      prompt = `${unit}: What is the mean of ${values.join(", ")}?`;
      correct = `${mean}`;
      distractors = [`${Math.max(...values)}`, `${Math.min(...values)}`, `${values.reduce((sum, value) => sum + value, 0)}`];
      explanation = `Add the values and divide by ${values.length}.`;
    } else if (variant === 8) {
      const expression = a + b * c - grade;
      prompt = `${unit}: Simplify ${a} + ${b} x ${c} - ${grade}.`;
      correct = `${expression}`;
      distractors = [`${(a + b) * c - grade}`, `${a + b * (c - grade)}`, `${expression + b}`];
      explanation = `Multiply before adding or subtracting: ${b} x ${c} = ${b * c}, then combine.`;
    } else {
      const total = a * b;
      const missing = total / b;
      prompt = `${unit}: A proportional table has y = ${b}x. If y = ${total}, what is x?`;
      correct = `${missing}`;
      distractors = [`${total + b}`, `${total - b}`, `${b}`];
      explanation = `Divide the output by the multiplier: ${total} / ${b} = ${missing}.`;
    }
  } else if (grade === 8 || grade === 9) {
    const slope = (index % 5) + 2;
    const intercept = (index % 9) - 4;
    if (grade === 9 && lesson.title.toLowerCase().includes("quadratic")) {
      const rootOne = (index % 6) + 2;
      const rootTwo = rootOne + (index % 4) + 1;
      const sum = rootOne + rootTwo;
      const product = rootOne * rootTwo;
      if (variant === 0) {
        prompt = `${unit}: Solve x^2 - ${sum}x + ${product} = 0.`;
        correct = `x = ${rootOne} or x = ${rootTwo}`;
        distractors = [`x = ${-rootOne} or x = ${-rootTwo}`, `x = ${sum} or x = ${product}`, `x = ${rootOne + 1} or x = ${rootTwo + 1}`];
        explanation = `Factor to (x - ${rootOne})(x - ${rootTwo}) = 0, then set each factor equal to zero.`;
      } else if (variant === 1) {
        prompt = `${unit}: Which factored form is equivalent to x^2 - ${sum}x + ${product}?`;
        correct = `(x - ${rootOne})(x - ${rootTwo})`;
        distractors = [`(x + ${rootOne})(x + ${rootTwo})`, `(x - ${sum})(x - ${product})`, `(x + ${rootOne})(x - ${rootTwo})`];
        explanation = `The factors must multiply to ${product} and add to -${sum}.`;
      } else if (variant === 2) {
        prompt = `${unit}: What are the x-intercepts of y = x^2 - ${sum}x + ${product}?`;
        correct = `(${rootOne}, 0) and (${rootTwo}, 0)`;
        distractors = [`(${-rootOne}, 0) and (${-rootTwo}, 0)`, `(${sum}, 0) and (${product}, 0)`, `(0, ${rootOne}) and (0, ${rootTwo})`];
        explanation = `The x-intercepts occur where y = 0, so solve x^2 - ${sum}x + ${product} = 0.`;
      } else if (variant === 3) {
        prompt = `${unit}: Which pair of numbers should be used to factor x^2 - ${sum}x + ${product}?`;
        correct = `-${rootOne} and -${rootTwo}`;
        distractors = [`${rootOne} and ${rootTwo}`, `-${sum} and -${product}`, `${rootOne} and -${rootTwo}`];
        explanation = `The pair must multiply to ${product} and add to -${sum}.`;
      } else if (variant === 4) {
        prompt = `${unit}: If (x - ${rootOne})(x - ${rootTwo}) = 0, what solutions follow from the zero-product property?`;
        correct = `x = ${rootOne} or x = ${rootTwo}`;
        distractors = [`x = -${rootOne} or x = -${rootTwo}`, `x = ${rootOne + rootTwo}`, `x = ${rootOne * rootTwo}`];
        explanation = `Each factor can equal zero: x - ${rootOne} = 0 or x - ${rootTwo} = 0.`;
      } else if (variant === 5) {
        prompt = `${unit}: Which quadratic equation has solutions x = ${rootOne} and x = ${rootTwo}?`;
        correct = `x^2 - ${sum}x + ${product} = 0`;
        distractors = [`x^2 + ${sum}x + ${product} = 0`, `x^2 - ${product}x + ${sum} = 0`, `x^2 + ${rootOne}x - ${rootTwo} = 0`];
        explanation = `Build the equation from (x - ${rootOne})(x - ${rootTwo}) = 0.`;
      } else if (variant === 6) {
        prompt = `${unit}: A rectangle has area x^2 - ${sum}x + ${product}. Which dimensions match the area?`;
        correct = `x - ${rootOne} and x - ${rootTwo}`;
        distractors = [`x + ${rootOne} and x + ${rootTwo}`, `x - ${sum} and x - ${product}`, `x + ${rootOne} and x - ${rootTwo}`];
        explanation = `Factoring the area expression gives the side lengths.`;
      } else {
        prompt = `${unit}: Which statement explains why x = ${rootOne} is a solution of x^2 - ${sum}x + ${product} = 0?`;
        correct = `Substituting ${rootOne} makes the equation equal 0.`;
        distractors = [`${rootOne} is the greatest coefficient.`, `The constant term is ${rootOne}.`, `${rootOne} makes x^2 equal x.`];
        explanation = `A solution makes the equation true when substituted.`;
      }
    } else if (variant === 0) {
      const x = (index % 7) + 2;
      const answer = slope * x + intercept;
      prompt = `${unit}: For f(x) = ${slope}x ${intercept >= 0 ? "+" : "-"} ${Math.abs(intercept)}, find f(${x}).`;
      correct = `${answer}`;
      distractors = [`${answer + slope}`, `${answer - slope}`, `${answer + intercept + 1}`];
      explanation = `Substitute ${x} for x and simplify.`;
    } else if (variant === 1) {
      const x = (index % 6) + 3;
      const total = slope * x + intercept;
      prompt = `${unit}: Solve ${slope}x ${intercept >= 0 ? "+" : "-"} ${Math.abs(intercept)} = ${total}.`;
      correct = `${x}`;
      distractors = [`${x + 1}`, `${x - 1}`, `${total}`];
      explanation = `Undo the constant term, then divide by ${slope}.`;
    } else if (variant === 2) {
      const legA = 3 + (index % 4);
      const legB = 4 + (index % 4);
      const hypotenuseSquared = legA ** 2 + legB ** 2;
      prompt = `${unit}: A right triangle has legs ${legA} and ${legB}. What is c^2 for the hypotenuse?`;
      correct = `${hypotenuseSquared}`;
      distractors = [`${legA + legB}`, `${legA ** 2 - legB}`, `${2 * hypotenuseSquared}`];
      explanation = `Use a^2 + b^2 = c^2: ${legA ** 2} + ${legB ** 2} = ${hypotenuseSquared}.`;
    } else if (variant === 3) {
      prompt = `${unit}: Which equation has slope ${slope} and y-intercept ${intercept}?`;
      correct = `y = ${slope}x ${intercept >= 0 ? "+" : "-"} ${Math.abs(intercept)}`;
      distractors = [`y = ${intercept}x + ${slope}`, `y = ${slope + 1}x ${intercept >= 0 ? "+" : "-"} ${Math.abs(intercept)}`, `y = ${slope}x ${intercept >= 0 ? "-" : "+"} ${Math.abs(intercept)}`];
      explanation = `Slope-intercept form is y = mx + b.`;
    } else if (variant === 4) {
      const answer = Math.abs(-a);
      prompt = `${unit}: What is the absolute value of ${-a}?`;
      correct = `${answer}`;
      distractors = [`${-answer}`, `${answer + 1}`, `${answer - 1}`];
      explanation = `Absolute value is distance from zero, so it is nonnegative.`;
    } else if (variant === 5) {
      const first = slope * a + intercept;
      const second = slope * b + intercept;
      prompt = `${unit}: The points (${a}, ${first}) and (${b}, ${second}) lie on a line. What is the slope?`;
      correct = `${slope}`;
      distractors = [`${intercept}`, `${slope + 1}`, `${first - second}`];
      explanation = `Slope is change in y over change in x, which is ${slope}.`;
    } else if (variant === 6) {
      prompt = `${unit}: Which relation is linear?`;
      correct = "A table where y increases by the same amount whenever x increases by 1.";
      distractors = ["A graph shaped like a circle.", "A pattern where y doubles each step.", "A relation with no consistent rate of change."];
      explanation = `Linear relationships have a constant rate of change.`;
    } else if (variant === 7) {
      const probability = ((index % 8) + 1) / 10;
      prompt = `${unit}: An experiment has probability ${probability}. Which percent is equivalent?`;
      correct = `${probability * 100}%`;
      distractors = [`${probability}%`, `${probability * 10}%`, `${probability * 100 + 10}%`];
      explanation = `Multiply the decimal probability by 100 to convert to a percent.`;
    } else if (variant === 8) {
      const left = slope + 1;
      const right = slope * a + intercept;
      prompt = `${unit}: Solve ${left}(x - ${c}) + ${b} = ${right}.`;
      correct = `${(right - b) / left + c}`;
      distractors = [`${(right + b) / left + c}`, `${right - b}`, `${c - left}`];
      explanation = `Undo the outside operations first, then add ${c} after isolating x - ${c}.`;
    } else if (variant === 9) {
      const value = a - b;
      prompt = `${unit}: Which inequality describes all numbers within ${c} units of ${value}?`;
      correct = `|x - ${value}| <= ${c}`;
      distractors = [`|x + ${value}| <= ${c}`, `|x - ${c}| <= ${value}`, `x - ${value} <= ${c}`];
      explanation = `Within ${c} units of ${value} means the distance from x to ${value} is at most ${c}.`;
    } else if (variant === 10) {
      prompt = `${unit}: A table has first differences ${b}, ${b}, ${b} and second differences 0. What type of function is most reasonable?`;
      correct = "linear";
      distractors = ["quadratic", "exponential", "absolute value"];
      explanation = `Constant first differences indicate a linear function.`;
    } else if (variant === 11) {
      const side = (index % 6) + 5;
      const diagonalSquared = 2 * side ** 2;
      prompt = `${unit}: A square has side length ${side}. What is the square of its diagonal length?`;
      correct = `${diagonalSquared}`;
      distractors = [`${side ** 2}`, `${4 * side}`, `${2 * side}`];
      explanation = `The diagonal is the hypotenuse of a right triangle with legs ${side} and ${side}, so d^2 = ${side ** 2} + ${side ** 2}.`;
    } else if (variant === 12) {
      const first = a - c;
      const second = b + c;
      prompt = `${unit}: Compare ${first}/${second} and ${(first + 1)}/${second + 2}. Which is greater?`;
      const leftValue = first / second;
      const rightValue = (first + 1) / (second + 2);
      correct = leftValue > rightValue ? `${first}/${second}` : `${first + 1}/${second + 2}`;
      distractors = [leftValue > rightValue ? `${first + 1}/${second + 2}` : `${first}/${second}`, "They are equal.", "Cannot be determined"];
      explanation = `Use cross-products to compare the fractions without rounding.`;
    } else {
      const x = (index % 5) + 2;
      const y = slope * x + intercept;
      prompt = `${unit}: A line contains (${x}, ${y}) and has slope ${slope}. What is its y-intercept?`;
      correct = `${intercept}`;
      distractors = [`${slope}`, `${y}`, `${intercept + slope}`];
      explanation = `Use y = mx + b, so ${y} = ${slope}(${x}) + b and b = ${intercept}.`;
    }
  } else if (grade === 10) {
    const angle = 30 + 5 * (index % 8);
    const geometryVariant = preferredGeometryVariant(lesson, patternIndex, bankKind);
    if (lesson.title.toLowerCase().includes("quadratic")) {
      const rootOne = (index % 5) + 2;
      const rootTwo = rootOne + (index % 4) + 2;
      const sum = rootOne + rootTwo;
      const product = rootOne * rootTwo;
      const vertexX = (index % 6) + 1;
      const vertexY = (index % 5) + 2;
      if (geometryVariant === 0) {
        prompt = `${unit}: A rectangle has area x^2 - ${sum}x + ${product}. Which side lengths match this area model?`;
        correct = `x - ${rootOne} and x - ${rootTwo}`;
        distractors = [`x + ${rootOne} and x + ${rootTwo}`, `x - ${sum} and x - ${product}`, `x + ${rootOne} and x - ${rootTwo}`];
        explanation = `Factor the area model: x^2 - ${sum}x + ${product} = (x - ${rootOne})(x - ${rootTwo}).`;
      } else if (geometryVariant === 1) {
        prompt = `${unit}: The height of an arch is modeled by h(x) = -(x - ${vertexX})^2 + ${vertexY}. What is the vertex?`;
        correct = `(${vertexX}, ${vertexY})`;
        distractors = [`(-${vertexX}, ${vertexY})`, `(${vertexX}, -${vertexY})`, `(${vertexY}, ${vertexX})`];
        explanation = `Vertex form y = a(x - h)^2 + k has vertex (h, k).`;
      } else if (geometryVariant === 2) {
        prompt = `${unit}: A parabolic arch has zeros at x = ${rootOne} and x = ${rootTwo}. Which factored equation could model the arch?`;
        correct = `y = (x - ${rootOne})(x - ${rootTwo})`;
        distractors = [`y = (x + ${rootOne})(x + ${rootTwo})`, `y = (x - ${sum})(x - ${product})`, `y = x^2 + ${product}`];
        explanation = `Zeros at ${rootOne} and ${rootTwo} mean the factors are x - ${rootOne} and x - ${rootTwo}.`;
      } else if (geometryVariant === 3) {
        prompt = `${unit}: Solve x^2 - ${sum}x + ${product} = 0 to find where a quadratic geometry model meets the x-axis.`;
        correct = `x = ${rootOne} or x = ${rootTwo}`;
        distractors = [`x = -${rootOne} or x = -${rootTwo}`, `x = ${sum} or x = ${product}`, `x = ${rootOne + 1} or x = ${rootTwo + 1}`];
        explanation = `Factor to (x - ${rootOne})(x - ${rootTwo}) = 0 and use the zero-product property.`;
      } else if (geometryVariant === 4) {
        prompt = `${unit}: A square has area x^2 - ${2 * rootOne}x + ${rootOne ** 2}. Which expression represents one side length?`;
        correct = `x - ${rootOne}`;
        distractors = [`x + ${rootOne}`, `x - ${2 * rootOne}`, `${rootOne}x`];
        explanation = `The area is a perfect square trinomial: (x - ${rootOne})^2.`;
      } else if (geometryVariant === 5) {
        prompt = `${unit}: The path of a thrown ball is h(x) = -x^2 + ${sum}x. At which x-values is the height 0?`;
        correct = `x = 0 and x = ${sum}`;
        distractors = [`x = ${rootOne} and x = ${rootTwo}`, `x = -${sum} and x = ${sum}`, `x = 0 and x = ${product}`];
        explanation = `Factor h(x) = x(-x + ${sum}); the zeros are x = 0 and x = ${sum}.`;
      } else if (geometryVariant === 6) {
        prompt = `${unit}: Which equation shows the axis of symmetry for y = (x - ${vertexX})^2 + ${vertexY}?`;
        correct = `x = ${vertexX}`;
        distractors = [`y = ${vertexY}`, `x = -${vertexX}`, `y = ${vertexX}`];
        explanation = `In vertex form, the axis of symmetry is x = h.`;
      } else if (geometryVariant === 7) {
        prompt = `${unit}: A rectangle's side lengths are x and x + ${rootOne}. Its area is ${product}. Which equation models the area?`;
        correct = `x(x + ${rootOne}) = ${product}`;
        distractors = [`x + x + ${rootOne} = ${product}`, `x(x - ${rootOne}) = ${product}`, `2x + ${rootOne} = ${product}`];
        explanation = `Rectangle area is length times width.`;
      } else if (geometryVariant === 8) {
        prompt = `${unit}: Which quadratic has x-intercepts at (${rootOne}, 0) and (${rootTwo}, 0)?`;
        correct = `y = x^2 - ${sum}x + ${product}`;
        distractors = [`y = x^2 + ${sum}x + ${product}`, `y = x^2 - ${product}x + ${sum}`, `y = x^2 + ${rootOne}x - ${rootTwo}`];
        explanation = `Build the model from (x - ${rootOne})(x - ${rootTwo}).`;
      } else if (geometryVariant === 9) {
        prompt = `${unit}: A parabola opens downward and has vertex (${vertexX}, ${vertexY}). Which statement is true?`;
        correct = `The maximum height is ${vertexY}.`;
        distractors = [`The minimum height is ${vertexY}.`, `The axis of symmetry is y = ${vertexX}.`, `The vertex must be below the x-axis.`];
        explanation = `A downward-opening parabola reaches its maximum at the vertex.`;
      } else if (geometryVariant === 10) {
        prompt = `${unit}: Factor x^2 - ${sum}x + ${product} to rewrite a geometric area expression.`;
        correct = `(x - ${rootOne})(x - ${rootTwo})`;
        distractors = [`(x + ${rootOne})(x + ${rootTwo})`, `(x - ${sum})(x - ${product})`, `(x + ${rootOne})(x - ${rootTwo})`];
        explanation = `Find two numbers that multiply to ${product} and add to -${sum}.`;
      } else {
        prompt = `${unit}: Which feature of y = -(x - ${vertexX})^2 + ${vertexY} tells the horizontal location of the arch's highest point?`;
        correct = `x = ${vertexX}`;
        distractors = [`y = ${vertexY}`, `x = -${vertexX}`, `the coefficient -1`];
        explanation = `The h-value in vertex form gives the horizontal coordinate of the vertex.`;
      }
    } else if (geometryVariant === 0) {
      prompt = `${unit}: Two angles form a linear pair. One angle is ${angle} degrees. What is the other angle?`;
      correct = `${180 - angle} degrees`;
      distractors = [`${angle} degrees`, `${90 - angle} degrees`, `${180 + angle} degrees`];
      explanation = `A linear pair sums to 180 degrees.`;
    } else if (geometryVariant === 1) {
      const radius = (index % 9) + 3;
      prompt = `${unit}: A circle has radius ${radius}. What is its area in terms of pi?`;
      correct = `${radius ** 2}pi`;
      distractors = [`${2 * radius}pi`, `${radius}pi`, `${2 * radius ** 2}pi`];
      explanation = `Circle area is pi r^2.`;
    } else if (geometryVariant === 2) {
      const side = (index % 7) + 4;
      prompt = `${unit}: A cube has side length ${side}. What is its volume?`;
      correct = `${side ** 3} cubic units`;
      distractors = [`${side ** 2} cubic units`, `${6 * side ** 2} cubic units`, `${3 * side} cubic units`];
      explanation = `Cube volume is side^3.`;
    } else if (geometryVariant === 3) {
      prompt = `${unit}: If two parallel lines are cut by a transversal, what is true about alternate interior angles?`;
      correct = "They are congruent.";
      distractors = ["They always add to 90 degrees.", "They are always vertical angles.", "They are never equal."];
      explanation = `Alternate interior angles formed by parallel lines are congruent.`;
    } else if (geometryVariant === 4) {
      const opposite = (index % 6) + 3;
      const hyp = opposite * 2;
      prompt = `${unit}: In a right triangle, opposite = ${opposite} and hypotenuse = ${hyp}. What is sin(theta)?`;
      correct = `${opposite}/${hyp}`;
      distractors = [`${hyp}/${opposite}`, `${opposite}/${opposite + hyp}`, `${hyp - opposite}/${hyp}`];
      explanation = `Sine is opposite over hypotenuse.`;
    } else if (geometryVariant === 5) {
      prompt = `${unit}: Which statement is a valid first step in a two-column proof?`;
      correct = "List the given information with its reason as Given.";
      distractors = ["Assume the conclusion is true without reason.", "Skip all definitions.", "Use a diagram as the only justification."];
      explanation = `Proofs begin from given information, definitions, postulates, or theorems.`;
    } else if (geometryVariant === 6) {
      const scale = (index % 4) + 2;
      const side = (index % 5) + 5;
      prompt = `${unit}: A dilation has scale factor ${scale}. A side length ${side} becomes what length?`;
      correct = `${scale * side}`;
      distractors = [`${scale + side}`, `${side - scale}`, `${side}`];
      explanation = `Multiply the original length by the scale factor.`;
    } else if (geometryVariant === 7) {
      prompt = `${unit}: Which transformation preserves angle measure and side length?`;
      correct = "rotation";
      distractors = ["dilation with scale factor 3", "vertical stretch", "non-uniform scaling"];
      explanation = `Rotations are rigid motions, so they preserve lengths and angle measures.`;
    } else if (geometryVariant === 8) {
      const firstAngle = 35 + (index % 5) * 5;
      const secondAngle = 45 + (index % 4) * 5;
      prompt = `${unit}: A triangle has angles ${firstAngle} degrees and ${secondAngle} degrees. What is the third angle?`;
      correct = `${180 - firstAngle - secondAngle} degrees`;
      distractors = [`${firstAngle + secondAngle} degrees`, `${180 - firstAngle} degrees`, `${180 - secondAngle} degrees`];
      explanation = `The angles of a triangle sum to 180 degrees.`;
    } else if (geometryVariant === 9) {
      const radius = (index % 5) + 3;
      const height = (index % 7) + 6;
      prompt = `${unit}: A cylinder has radius ${radius} and height ${height}. What is its lateral surface area in terms of pi?`;
      correct = `${2 * radius * height}pi`;
      distractors = [`${radius * height}pi`, `${2 * radius ** 2}pi`, `${radius ** 2 * height}pi`];
      explanation = `Lateral surface area of a cylinder is 2pi rh.`;
    } else if (geometryVariant === 10) {
      const radius = (index % 8) + 4;
      prompt = `${unit}: A circle has radius ${radius}. What is its circumference in terms of pi?`;
      correct = `${2 * radius}pi`;
      distractors = [`${radius ** 2}pi`, `${radius}pi`, `${4 * radius}pi`];
      explanation = `Circumference is 2pi r.`;
    } else {
      prompt = `${unit}: Which congruence reason proves triangles congruent using two sides and the included angle?`;
      correct = "SAS";
      distractors = ["SSA", "AAA", "HL for all triangles"];
      explanation = `Side-Angle-Side uses two corresponding sides and the included angle.`;
    }
  } else if (grade === 11) {
    if (variant === 0) {
      const answer = a ** 2 - b;
      prompt = `${unit}: Evaluate x^2 - ${b} when x = ${a}.`;
      correct = `${answer}`;
      distractors = [`${2 * a - b}`, `${a ** 2 + b}`, `${answer + a}`];
      explanation = `Substitute ${a}: ${a}^2 - ${b} = ${answer}.`;
    } else if (variant === 1) {
      prompt = `${unit}: What is the product of (x + ${c})(x + ${b})?`;
      correct = `x^2 + ${b + c}x + ${b * c}`;
      distractors = [`x^2 + ${b * c}x + ${b + c}`, `x^2 + ${b + c}`, `2x + ${b + c}`];
      explanation = `Use FOIL: x^2 + ${b}x + ${c}x + ${b * c}.`;
    } else if (variant === 2) {
      const discriminant = b ** 2 - 4 * a * c;
      prompt = `${unit}: For ${a}x^2 + ${b}x + ${c} = 0, what is the discriminant?`;
      correct = `${discriminant}`;
      distractors = [`${b ** 2 + 4 * a * c}`, `${4 * a * c}`, `${b - 4 * a * c}`];
      explanation = `The discriminant is b^2 - 4ac.`;
    } else if (variant === 3) {
      prompt = `${unit}: What is the next term in the arithmetic sequence ${a}, ${a + b}, ${a + 2 * b}, ___?`;
      correct = `${a + 3 * b}`;
      distractors = [`${a + b ** 2}`, `${a + 2 * b + 1}`, `${a * b}`];
      explanation = `The common difference is ${b}.`;
    } else if (variant === 4) {
      prompt = `${unit}: Simplify sqrt(${a ** 2}).`;
      correct = `${a}`;
      distractors = [`${a ** 2}`, `${2 * a}`, `sqrt(${a})`];
      explanation = `The principal square root of ${a ** 2} is ${a}.`;
    } else if (variant === 5) {
      const first = a;
      const ratio = 2;
      prompt = `${unit}: What is the fourth term of the geometric sequence with first term ${first} and ratio ${ratio}?`;
      correct = `${first * ratio ** 3}`;
      distractors = [`${first + 3 * ratio}`, `${first * ratio ** 2}`, `${first ** 2 * ratio}`];
      explanation = `The fourth term is a1 x r^3.`;
    } else if (variant === 6) {
      prompt = `${unit}: Which number is a complex number with nonzero imaginary part?`;
      correct = `${a} + ${c}i`;
      distractors = [`${a}`, `${-b}`, `${a + c}`];
      explanation = `A non-real complex number includes an i term.`;
    } else if (variant === 7) {
      prompt = `${unit}: Add the matrices [[${a}, ${b}], [${c}, ${grade}]] and [[1, 2], [3, 4]]. What is the top-left entry?`;
      correct = `${a + 1}`;
      distractors = [`${a}`, `${a + 2}`, `${b + 1}`];
      explanation = `Add corresponding entries, so the top-left entry is ${a} + 1.`;
    } else if (variant === 8) {
      prompt = `${unit}: Simplify (${a} + ${c}i) - (${b} - ${grade}i).`;
      correct = `${a - b} + ${c + grade}i`;
      distractors = [`${a + b} + ${c - grade}i`, `${a - b} - ${c + grade}i`, `${a + b} + ${c + grade}i`];
      explanation = `Subtract real parts and subtract imaginary parts carefully: ${c}i - (-${grade}i) = ${c + grade}i.`;
    } else if (variant === 9) {
      const first = a;
      const difference = c + 2;
      prompt = `${unit}: An arithmetic sequence has a_1 = ${first} and a_${b} = ${first + (b - 1) * difference}. What is the common difference?`;
      correct = `${difference}`;
      distractors = [`${difference + 1}`, `${first}`, `${b}`];
      explanation = `Subtract the first term from a_${b}, then divide by ${b - 1}.`;
    } else if (variant === 10) {
      const coefficient = c + 2;
      prompt = `${unit}: If f(x) = ${coefficient}x - ${b} and g(x) = x^2 + ${c}, what is f(g(${grade - 8}))?`;
      const inner = (grade - 8) ** 2 + c;
      const answer = coefficient * inner - b;
      correct = `${answer}`;
      distractors = [`${inner}`, `${coefficient * (grade - 8) - b + c}`, `${answer + b}`];
      explanation = `Evaluate g first, then substitute that output into f.`;
    } else if (variant === 11) {
      prompt = `${unit}: Which equation has no real solution?`;
      correct = `x^2 + ${c} = 0`;
      distractors = [`x^2 - ${c} = 0`, `x^2 - ${b}x = 0`, `(x - ${a})^2 = 0`];
      explanation = `x^2 cannot equal a negative number in the real number system.`;
    } else if (variant === 12) {
      const factor = c + 1;
      prompt = `${unit}: A quantity is multiplied by ${factor} each step. What model family fits best?`;
      correct = "exponential";
      distractors = ["linear", "absolute value", "constant"];
      explanation = `Repeated multiplication by the same factor is exponential growth or decay.`;
    } else if (variant === 13) {
      prompt = `${unit}: What is the determinant of [[${a}, ${c}], [${b}, ${grade}]]?`;
      correct = `${a * grade - b * c}`;
      distractors = [`${a * grade + b * c}`, `${a + grade - b - c}`, `${a * c - b * grade}`];
      explanation = `For a 2 by 2 matrix, determinant is ad - bc.`;
    } else if (variant === 14) {
      const exponent = (index % 3) + 2;
      prompt = `${unit}: Rewrite x^${exponent}/x^${exponent - 1} using exponent rules.`;
      correct = "x";
      distractors = [`x^${exponent ** 2}`, "1", `x^${exponent}`];
      explanation = `Dividing powers with the same base means subtract exponents: ${exponent} - ${exponent - 1} = 1, so the result is x.`;
    } else {
      const start = a;
      const ratio = c;
      prompt = `${unit}: A geometric sequence has a_1 = ${start} and ratio ${ratio}. Which expression gives a_n?`;
      correct = `${start}(${ratio})^(n - 1)`;
      distractors = [`${start} + ${ratio}(n - 1)`, `${ratio}(${start})^(n - 1)`, `${start}n + ${ratio}`];
      explanation = `A geometric explicit formula is a_n = a_1 r^(n - 1).`;
    }
  } else {
    if (variant === 0) {
      prompt = `${unit}: If f(x) = x^2 + ${b}x, what is f(${c})?`;
      correct = `${c ** 2 + b * c}`;
      distractors = [`${c + b * c}`, `${c ** 2 + b}`, `${2 * c + b}`];
      explanation = `Substitute ${c} for x and simplify.`;
    } else if (variant === 1) {
      prompt = `${unit}: Which value of theta on the unit circle has sin(theta) = 0 and cos(theta) = -1?`;
      correct = "pi";
      distractors = ["0", "pi/2", "2pi"];
      explanation = `At theta = pi, the unit-circle point is (-1, 0).`;
    } else if (variant === 2) {
      prompt = `${unit}: What is the center of (x - ${a})^2 + (y + ${c})^2 = ${b ** 2}?`;
      correct = `(${a}, -${c})`;
      distractors = [`(-${a}, ${c})`, `(${a}, ${c})`, `(${b}, -${c})`];
      explanation = `A circle in standard form has center (h, k).`;
    } else if (variant === 3) {
      prompt = `${unit}: Which identity is true for all x?`;
      correct = "sin^2(x) + cos^2(x) = 1";
      distractors = ["sin(x) + cos(x) = 1", "tan(x) = sin(x) + cos(x)", "cos^2(x) - sin^2(x) = 1"];
      explanation = `The Pythagorean identity is sin^2(x) + cos^2(x) = 1.`;
    } else if (variant === 4) {
      prompt = `${unit}: What is the amplitude of y = ${c}sin(x)?`;
      correct = `${c}`;
      distractors = [`${-c}`, `${2 * c}`, `${c + 1}`];
      explanation = `Amplitude is the absolute value of the coefficient of sin(x).`;
    } else if (variant === 5) {
      prompt = `${unit}: Simplify i^${2 * ((index % 5) + 1)}.`;
      correct = (index % 2 === 0) ? "-1" : "1";
      distractors = ["i", "-i", "0"];
      explanation = `Powers of i repeat in a cycle: i, -1, -i, 1.`;
    } else if (variant === 6) {
      prompt = `${unit}: If g(x) = ${a}x + ${b}, what is g^-1(x)?`;
      correct = `(x - ${b})/${a}`;
      distractors = [`${a}x - ${b}`, `(x + ${b})/${a}`, `${a}/(x - ${b})`];
      explanation = `Swap x and y, then solve for y.`;
    } else if (variant === 7) {
      prompt = `${unit}: Which conic has one focus and one directrix?`;
      correct = "parabola";
      distractors = ["circle", "ellipse", "hyperbola"];
      explanation = `A parabola is the set of points equidistant from a focus and a directrix.`;
    } else if (variant === 8) {
      prompt = `${unit}: Solve 2cos(x) = 1 on 0 <= x < 2pi.`;
      correct = "pi/3 and 5pi/3";
      distractors = ["pi/6 and 5pi/6", "0 and pi", "pi/2 and 3pi/2"];
      explanation = `cos(x) = 1/2 in Quadrants I and IV.`;
    } else if (variant === 9) {
      prompt = `${unit}: Which expression is equivalent to tan(x)cos(x), when cos(x) is not 0?`;
      correct = "sin(x)";
      distractors = ["cos(x)", "tan(x)", "1"];
      explanation = `tan(x) = sin(x)/cos(x), so tan(x)cos(x) = sin(x).`;
    } else if (variant === 10) {
      const h = c;
      const k = b;
      prompt = `${unit}: A parabola has vertex (${h}, ${k}) and opens upward. Which feature is guaranteed?`;
      correct = `The minimum value is ${k}.`;
      distractors = [`The maximum value is ${k}.`, `The axis of symmetry is y = ${h}.`, `The x-intercepts are ${h} and ${k}.`];
      explanation = `An upward-opening parabola has its minimum at the vertex.`;
    } else if (variant === 11) {
      prompt = `${unit}: What is the horizontal asymptote of f(x) = (${a})/${c}^x?`;
      correct = "y = 0";
      distractors = [`x = 0`, `y = ${a}`, `y = ${c}`];
      explanation = `Exponential decay of this form approaches 0 but does not cross it.`;
    } else if (variant === 12) {
      prompt = `${unit}: Which equation represents an ellipse centered at the origin?`;
      correct = `x^2/${a ** 2} + y^2/${b ** 2} = 1`;
      distractors = [`x^2/${a ** 2} - y^2/${b ** 2} = 1`, `y = x^2 + ${c}`, `(x - ${a})^2 + (y - ${b})^2 = ${c}`];
      explanation = `An ellipse in standard form adds the squared terms and sets them equal to 1.`;
    } else if (variant === 13) {
      prompt = `${unit}: If z = ${a} - ${c}i, what is its complex conjugate?`;
      correct = `${a} + ${c}i`;
      distractors = [`-${a} + ${c}i`, `${a} - ${c}i`, `-${a} - ${c}i`];
      explanation = `The complex conjugate changes the sign of the imaginary part.`;
    } else if (variant === 14) {
      prompt = `${unit}: Which composition matches f(g(x)) when f(x) = x^2 - ${b} and g(x) = x + ${c}?`;
      correct = `(x + ${c})^2 - ${b}`;
      distractors = [`x^2 + ${c} - ${b}`, `(x^2 - ${b}) + ${c}`, `(x - ${c})^2 - ${b}`];
      explanation = `Replace x in f(x) with the entire expression g(x).`;
    } else {
      prompt = `${unit}: Which statement best tests whether a function model is valid for a situation?`;
      correct = "Check the domain, units, trend, and whether predictions stay within reasonable conditions.";
      distractors = ["Use the model only because it has variables.", "Ignore the context after finding an equation.", "Choose the model with the longest formula."];
      explanation = `A proficiency-level model answer must connect the algebra back to the situation.`;
    }
  }

  if (bankKind === "test") {
    prompt = testMathPrompt(prompt);
  }

  const rotated = buildAnswerChoices(correct, distractors, index);
  return {
    id: `g${grade}-math-${bankKind}-${String(index + 1).padStart(4, "0")}`,
    grade,
    subject: "Mathematics",
    questionType: `${lesson.title} | pattern ${variant + 1}`,
    prompt,
    answers: rotated.answers,
    correctIndex: rotated.correctIndex,
    explanation
  };
}

function generatedElaQuestion(grade: Grade, lesson: Lesson, index: number, bankKind: QuestionBankKind, patternIndex: number): Question {
  const variant = preferredElaVariant(lesson, patternIndex, bankKind);
  const unit = lesson.title;
  let prompt = "";
  let correct = "";
  let distractors: string[] = [];
  let explanation = "";

  if (grade <= 5) {
    if (variant === 0) {
      prompt = `${unit}: Which sentence has the clearest subject and predicate?`;
      correct = "The student solved the puzzle.";
      distractors = ["Solved the puzzle.", "The student.", "Because the puzzle."];
      explanation = "A complete sentence has both a subject and a predicate.";
    } else if (variant === 1) {
      prompt = `${unit}: Which word is a synonym for happy?`;
      correct = "joyful";
      distractors = ["angry", "silent", "heavy"];
      explanation = "A synonym has a similar meaning.";
    } else if (variant === 2) {
      prompt = `${unit}: Which detail best supports the main idea that the garden needed care?`;
      correct = "The plants were dry, and weeds covered the path.";
      distractors = ["The garden had a red gate.", "The sky was blue.", "A bird flew over the fence."];
      explanation = "Supporting details give evidence for the main idea.";
    } else if (variant === 3) {
      prompt = `${unit}: Which sentence uses correct capitalization?`;
      correct = "Maya visited Oklahoma in June.";
      distractors = ["maya visited Oklahoma in june.", "Maya visited oklahoma in June.", "maya visited oklahoma in june."];
      explanation = "Names, places, and months should be capitalized.";
    } else if (variant === 4) {
      prompt = `${unit}: Which sentence gives an opinion?`;
      correct = "The story was the most exciting one in the library.";
      distractors = ["The book has 120 pages.", "The cover is blue.", "The author wrote three chapters."];
      explanation = "An opinion tells what someone thinks or feels.";
    } else if (variant === 5) {
      prompt = `${unit}: Which word has the prefix re- meaning again?`;
      correct = "reread";
      distractors = ["reader", "ready", "real"];
      explanation = "The prefix re- can mean again, as in reread.";
    } else if (variant === 6) {
      prompt = `${unit}: Which sentence correctly combines these ideas? \"The rain stopped. We went outside.\"`;
      correct = "The rain stopped, so we went outside.";
      distractors = ["The rain stopped we went outside.", "Stopped outside rain.", "Because the rain stopped outside."];
      explanation = "The conjunction so shows the result.";
    } else {
      prompt = `${unit}: Which question would help a reader understand the speaker's message?`;
      correct = "What is the speaker trying to explain?";
      distractors = ["What color are the chairs?", "How many letters are in the title?", "Which answer is shortest?"];
      explanation = "A clarifying question should focus on the speaker's meaning.";
    }
  } else if (grade <= 8) {
    if (variant === 0) {
      prompt = `${unit}: Which sentence uses the most precise wording?`;
      correct = "The narrator's fear increases as the footsteps move closer.";
      distractors = ["The story gets kind of scary.", "The thing is weird.", "It happens in a place."];
      explanation = "Precise wording names the feeling and the evidence.";
    } else if (variant === 1) {
      prompt = `${unit}: Which revision best combines the sentences? \"The claim is interesting. The claim needs stronger evidence.\"`;
      correct = "The claim is interesting, but it needs stronger evidence.";
      distractors = ["The claim is interesting the claim needs stronger evidence.", "Interesting stronger evidence claim.", "The claim, and evidence, interesting."];
      explanation = "The correct revision joins the ideas clearly and shows contrast.";
    } else if (variant === 2) {
      prompt = `${unit}: Which sentence states a claim for an argument?`;
      correct = "Schools should offer more tutoring because it helps students practice difficult skills.";
      distractors = ["Tutoring exists in some schools.", "This paragraph is about tutoring.", "Many students have backpacks."];
      explanation = "A claim takes a position that can be supported with reasons and evidence.";
    } else if (variant === 3) {
      prompt = `${unit}: Which response best explains an inference from a text?`;
      correct = "The character is nervous because she checks the clock three times and speaks softly.";
      distractors = ["She is nervous.", "The clock exists.", "I like this character."];
      explanation = "An inference should use text evidence and explain the reasoning.";
    } else if (variant === 4) {
      prompt = `${unit}: Which transition shows cause and effect?`;
      correct = "therefore";
      distractors = ["however", "meanwhile", "similarly"];
      explanation = "Therefore signals a result.";
    } else if (variant === 5) {
      prompt = `${unit}: Which word has the strongest negative connotation?`;
      correct = "reckless";
      distractors = ["bold", "confident", "adventurous"];
      explanation = "Reckless suggests careless risk.";
    } else if (variant === 6) {
      prompt = `${unit}: Which sentence uses a colon correctly?`;
      correct = "Bring three supplies: paper, pencils, and a folder.";
      distractors = ["Bring: three supplies paper, pencils, and a folder.", "Bring three: supplies paper pencils.", "Bring three supplies paper: pencils folder."];
      explanation = "A colon can introduce a list after a complete idea.";
    } else {
      prompt = `${unit}: Which sentence correctly uses a semicolon?`;
      correct = "The evidence was clear; the conclusion was reasonable.";
      distractors = ["The evidence; was clear and reasonable.", "The evidence was clear; because the conclusion was reasonable.", "The; evidence was clear the conclusion."];
      explanation = "A semicolon can join two closely related independent clauses.";
    }
  } else {
    if (variant === 0) {
      prompt = `${unit}: Which sentence uses the most precise academic wording?`;
      correct = "The narrator's limited perspective shapes how readers interpret the conflict.";
      distractors = ["The story thing makes stuff happen.", "It is good because it is good.", "The text has words and a character."];
      explanation = "Precise academic wording names the literary element and explains its effect.";
    } else if (variant === 1) {
      prompt = `${unit}: Which revision best combines the sentences? \"The claim is interesting. The claim needs stronger evidence.\"`;
      correct = "The claim is interesting, but it needs stronger evidence.";
      distractors = ["The claim is interesting the claim needs stronger evidence.", "Interesting stronger evidence claim.", "The claim, and evidence, interesting."];
      explanation = "The correct revision joins the ideas clearly and shows contrast.";
    } else if (variant === 2) {
      prompt = `${unit}: In an argument, why does evidence matter?`;
      correct = "Evidence supports claims and helps readers trust the reasoning.";
      distractors = ["Evidence should be avoided in formal writing.", "Evidence is only decoration.", "Evidence replaces the need for a clear claim."];
      explanation = "Strong arguments connect a clear claim to credible evidence and reasoning.";
    } else if (variant === 3) {
      prompt = `${unit}: Which response best explains an inference from a text?`;
      correct = "A focused answer that uses precise language and explains the reasoning.";
      distractors = ["A one-word answer with no support.", "A copied phrase with no context.", "An answer about an unrelated subject."];
      explanation = "An inference needs textual support and a clear explanation of the reasoning.";
    } else if (variant === 4) {
      prompt = `${unit}: Which sentence correctly uses a transition to show cause and effect?`;
      correct = "The source was outdated; therefore, the researcher found a newer study.";
      distractors = ["The source was outdated; however, it was outdated.", "The source was outdated, blue, and library.", "The source was outdated because therefore newer."];
      explanation = "Therefore signals a result or effect.";
    } else if (variant === 5) {
      prompt = `${unit}: Which word has the strongest negative connotation?`;
      correct = "reckless";
      distractors = ["bold", "confident", "adventurous"];
      explanation = "Reckless suggests careless risk, while the other words can sound positive or neutral.";
    } else if (variant === 6) {
      prompt = `${unit}: Which choice best fits a formal research presentation?`;
      correct = "It chooses words, structure, and evidence that fit the audience and task.";
      distractors = ["It uses the same tone for every assignment.", "It ignores who will read or hear it.", "It avoids organizing ideas."];
      explanation = "Formal presentations need appropriate tone, organization, and evidence for the audience.";
    } else {
      prompt = `${unit}: Which sentence correctly uses a semicolon?`;
      correct = "The evidence was clear; the conclusion was reasonable.";
      distractors = ["The evidence; was clear and reasonable.", "The evidence was clear; because the conclusion was reasonable.", "The; evidence was clear the conclusion."];
      explanation = "A semicolon can join two closely related independent clauses.";
    }
  }

  if (bankKind === "test") {
    prompt = prompt
      .replace("Which word has", "Choose the word with")
      .replace("Which sentence states", "Choose the sentence that states")
      .replace("Which transition shows", "Choose the transition that shows")
      .replace("Which response best explains", "Choose the response that best explains")
      .replace("Which sentence correctly uses", "Choose the sentence that correctly uses")
      .replace("Which sentence has", "Choose the sentence with")
      .replace("Which word is", "Choose the word that is")
      .replace("Which detail", "Choose the detail that")
      .replace("Which sentence uses", "Choose the sentence that uses")
      .replace("Which sentence gives", "Choose the sentence that gives")
      .replace("Which question", "Choose the question that")
      .replace("Which revision", "Choose the revision that")
      .replace("Which response", "Choose the response that")
      .replace("Which transition", "Choose the transition that")
      .replace("Which choice", "Choose the choice that")
      .replace("In an argument, why", "For an argument, why");
  }

  const rotated = buildAnswerChoices(correct, distractors, index + (bankKind === "test" ? 1 : 0));
  return {
    id: `g${grade}-ela-${bankKind}-${String(index + 1).padStart(4, "0")}`,
    grade,
    subject: "English Language Arts",
    questionType: `${lesson.title} | pattern ${variant + 1}`,
    prompt,
    answers: rotated.answers,
    correctIndex: rotated.correctIndex,
    explanation
  };
}

function expandQuestionsFor(grade: Grade, subject: Subject, bankKind: QuestionBankKind) {
  const lessons = getCurriculum(grade).find((entry) => entry.subject === subject)?.lessons ?? [];
  if (lessons.length === 0) {
    return [];
  }

  const generated: Question[] = [];
  for (let index = 0; generated.length < QUESTIONS_PER_GRADE_SUBJECT; index += 1) {
    const lesson = lessons[index % lessons.length];
    const patternIndex = Math.floor(index / lessons.length);
    generated.push(subject === "Mathematics" ? generatedMathQuestion(grade, lesson, index, bankKind, patternIndex) : generatedElaQuestion(grade, lesson, index, bankKind, patternIndex));
  }

  return generated;
}

let studyQuestionBankCache: Question[] | null = null;
let testQuestionBankCache: Question[] | null = null;

function getExpandedQuestionBank(bankKind: QuestionBankKind): Question[] {
  if (bankKind === "study" && studyQuestionBankCache) {
    return studyQuestionBankCache;
  }
  if (bankKind === "test" && testQuestionBankCache) {
    return testQuestionBankCache;
  }

  const bank = grades.flatMap((grade) => subjects.flatMap((entry) => expandQuestionsFor(grade, entry.subject, bankKind)));
  if (bankKind === "study") {
    studyQuestionBankCache = bank;
  } else {
    testQuestionBankCache = bank;
  }
  return bank;
}

export function getStudyQuestionBank(): Question[] {
  return getExpandedQuestionBank("study");
}

export function getTestQuestionBank(): Question[] {
  return getExpandedQuestionBank("test");
}

export function getQuestionBank(): Question[] {
  return getTestQuestionBank();
}
