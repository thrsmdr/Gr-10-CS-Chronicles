import type { QuizEntry } from "../types/types";
import { DictionaryData } from "./DictionaryData";

const BASE_URL = "https://res.cloudinary.com/dqzxf6v8b/video/upload/q_auto,f_auto";

export const LESSON_TIPS: Record<string, string> = {
    "alphabet-1": "💡 <strong>Tip 1</strong>: Relax your hand while fingerspelling. <strong>Don’t strain it!</strong> \n💡 <strong>Tip 2</strong>: For fingerspelling multiple words, just pause in between the words to indicate a <strong>space</strong>. \n💡 <strong>Tip 3</strong>: For <strong>double letters</strong> like 'Bill', simply <strong>slightly slide/move your hand to the side </strong>while it’s in the letter’s handshape. You don’t need to open and close your hand since it may seem you are trying to sign a new letter.\n\n<strong>More Fingerspelling Practice:</strong> https://www.lifeprint.com/asl101/fingerspelling/index.htm",
    "alphabet-2": "💡 <strong>Tip 1</strong>: Relax your hand while fingerspelling. <strong>Don’t strain it!</strong> \n💡 <strong>Tip 2</strong>: For fingerspelling multiple words, just pause in between the words to indicate a <strong>space</strong>. \n💡 <strong>Tip 3</strong>: For <strong>double letters</strong> like 'Bill', simply <strong>slightly slide/move your hand to the side </strong>while it’s in the letter’s handshape. You don’t need to open and close your hand since it may seem you are trying to sign a new letter.\n\n<strong>More Fingerspelling Practice:</strong> https://www.lifeprint.com/asl101/fingerspelling/index.htm",
    "alphabet-3": "💡 <strong>Tip 1</strong>: Relax your hand while fingerspelling. <strong>Don’t strain it!</strong> \n💡 <strong>Tip 2</strong>: For fingerspelling multiple words, just pause in between the words to indicate a <strong>space</strong>. \n💡 <strong>Tip 3</strong>: For <strong>double letters</strong> like 'Bill', simply <strong>slightly slide/move your hand to the side </strong>while it’s in the letter’s handshape. You don’t need to open and close your hand since it may seem you are trying to sign a new letter.\n\n<strong>More Fingerspelling Practice:</strong> https://www.lifeprint.com/asl101/fingerspelling/index.htm",
    "alphabet-4": "💡 <strong>Tip 1</strong>: Relax your hand while fingerspelling. <strong>Don’t strain it!</strong> \n💡 <strong>Tip 2</strong>: For fingerspelling multiple words, just pause in between the words to indicate a <strong>space</strong>. \n💡 <strong>Tip 3</strong>: For <strong>double letters</strong> like 'Bill', simply <strong>slightly slide/move your hand to the side </strong>while it’s in the letter’s handshape. You don’t need to open and close your hand since it may seem you are trying to sign a new letter.\n\n<strong>More Fingerspelling Practice:</strong> https://www.lifeprint.com/asl101/fingerspelling/index.htm",
    "alphabet-5": "💡 <strong>Tip 1</strong>: Relax your hand while fingerspelling. <strong>Don’t strain it!</strong> \n💡 <strong>Tip 2</strong>: For fingerspelling multiple words, just pause in between the words to indicate a <strong>space</strong>. \n💡 <strong>Tip 3</strong>: For <strong>double letters</strong> like 'Bill', simply <strong>slightly slide/move your hand to the side </strong>while it’s in the letter’s handshape. You don’t need to open and close your hand since it may seem you are trying to sign a new letter.\n\n<strong>More Fingerspelling Practice:</strong> https://www.lifeprint.com/asl101/fingerspelling/index.htm",
    "alphabet-6": "💡 <strong>Tip 1</strong>: Relax your hand while fingerspelling. <strong>Don’t strain it!</strong> \n💡 <strong>Tip 2</strong>: For fingerspelling multiple words, just pause in between the words to indicate a <strong>space</strong>. \n💡 <strong>Tip 3</strong>: For <strong>double letters</strong> like 'Bill', simply <strong>slightly slide/move your hand to the side </strong>while it’s in the letter’s handshape. You don’t need to open and close your hand since it may seem you are trying to sign a new letter.\n\n<strong>More Fingerspelling Practice:</strong> https://www.lifeprint.com/asl101/fingerspelling/index.htm",
    "questions-1": "<strong>💡 Tip 1:</strong> Lean forward and furrow your brows for 5W 1H questions!\n<strong>💡 Tip 2:</strong> Raise your eyebrows for Yes/No <strong>questions</strong> to differentiate from regular <strong>statements</strong> as they have the similar sentence structure.",
    "questions-2": "<strong>💡 Tip 1:</strong> Lean forward and furrow your brows for 5W 1H questions!\n<strong>💡 Tip 2:</strong> Raise your eyebrows for Yes/No <strong>questions</strong> to differentiate from regular <strong>statements</strong> as they have the similar sentence structure.",
    "family-1": "<strong>💡 Tip:</strong> To distinguish easily, remember that <strong>male</strong> signs are usually near the forehead, <strong>top half of the face </strong>while <strong>female</strong> signs are near the chin, <strong>bottom half of the face</strong>.",
    "family-2": "<strong>💡 Tip:</strong> To distinguish easily, remember that <strong>male</strong> signs are usually near the forehead, <strong>top half of the face </strong>while <strong>female</strong> signs are near the chin, <strong>bottom half of the face</strong>."
};

// 1. Your manual "Order" and "Sentence" questions
const customQuizEntries: QuizEntry[] = [
{
id: 103,
phaseId: 'alphabet-1',
category: "Alphabet",
type: "order-words",
question: "What does this video spell out?",
sentenceVideoUrl: `${BASE_URL}/sentences/B-A-D.mp4`,
options: ['A','D','B','C'],
correctAnswer: ['B', 'A', 'D']
},
{
id: 104,
phaseId: 'alphabet-1',
category: "Alphabet",
type: "order-words",
question: "What does this video spell out?",
sentenceVideoUrl: `${BASE_URL}/sentences/C-A-B.mp4`,
options: ['A','D','B','C'],
correctAnswer: ['C', 'A', 'B']
},
{
id: 201,
phaseId: 'alphabet-2',
category: "Alphabet",
type: "order-words",
question: "What does this video spell out?",
sentenceVideoUrl: `${BASE_URL}/sentences/F-A-D-E.mp4`,
options: ['E','D','F','A','B','C'],
correctAnswer: ['F', 'A', 'D','E']
},
{
id: 202,
phaseId: 'alphabet-2',
category: "Alphabet",
type: "order-words",
question: "What does this video spell out?",
sentenceVideoUrl: `${BASE_URL}/sentences/B-E-A-C-H.mp4`,
options: ['E','D','F','A','B','C','H'],
correctAnswer: ['B', 'E', 'A','C', 'H']
},
{
id: 301,
phaseId: 'alphabet-3',
category: "Alphabet",
type: "order-words",
question: "What does this video spell out?",
sentenceVideoUrl: `${BASE_URL}/sentences/F-I-L-M.mp4`,
options: ['I','M','F','A','B','I','H'],
correctAnswer: ['F', 'I', 'L','M']
},
{
id: 302,
phaseId: 'alphabet-3',
category: "Alphabet",
type: "order-words",
question: "What does this video spell out?",
sentenceVideoUrl: `${BASE_URL}/sentences/K-I-N-G.mp4`,
options: ['I','M','N','K','B','I','G'],
correctAnswer: ['K', 'I', 'N','G']
},
{
id: 401,
phaseId: 'alphabet-4',
category: "Alphabet",
type: "order-words",
question: "What does this video spell out?",
sentenceVideoUrl: `${BASE_URL}/sentences/R-O-P-E.mp4`,
options: ['E','O','N','K','R','I','P'],
correctAnswer: ['R', 'O', 'P','E']
},
{
id: 402,
phaseId: 'alphabet-4',
category: "Alphabet",
type: "order-words",
question: "What does this video spell out?",
sentenceVideoUrl: `${BASE_URL}/sentences/G-O-L-D.mp4`,
options: ['D','O','N','L','R','G','P'],
correctAnswer: ['G', 'O', 'L','D']
},
{
id: 501,
phaseId: 'alphabet-5',
category: "Alphabet",
type: "order-words",
question: "What does this video spell out?",
sentenceVideoUrl: `${BASE_URL}/sentences/R-E-Q-U-E-S-T.mp4`,
options: ['Q','E','D','U','O','N','L','R','G','P','E','S','T'],
correctAnswer: ['R', 'E', 'Q','U','E','S','T']
},
{
id: 502,
phaseId: 'alphabet-5',
category: "Alphabet",
type: "order-words",
question: "What does this video spell out?",
sentenceVideoUrl: `${BASE_URL}/sentences/V-I-N-E-S.mp4`,
options: ['V','E','D','U','O','N','I','R','G','P','E','S','T'],
correctAnswer: ['V', 'I', 'N','E','S']
},
{
id: 601,
phaseId: 'alphabet-6',
category: "Alphabet",
type: "order-words",
question: "What does this video spell out?",
sentenceVideoUrl: `${BASE_URL}/sentences/S-A-X-O-P-H-O-N-E.mp4`,
options: ['O','X','D','A','O','N','H','R','G','P','E','S','O'],
correctAnswer: ['S', 'A','X','O','P','H','O','N','E']
},
{
id: 602,
phaseId: 'alphabet-6',
category: "Alphabet",
type: "order-words",
question: "What does this video spell out?",
sentenceVideoUrl: `${BASE_URL}/sentences/Z-E-B-R-A.mp4`,
options: ['O','B','D','A','O','N','Z','R','G','P','E','S','O'],
correctAnswer: ['Z', 'E','B','R','A']
},
{
id: 703,
phaseId: 'greetings-1',
category: "Greetings",
type: "order-words",
question: "What does is being said in this video?",
sentenceVideoUrl: `${BASE_URL}/sentences/Nice-to-Meet-You.mp4`,
options: ['Hello','You','Yours','(to) Meet','Nice','Good'],
correctAnswer: ['Nice', '(to) Meet','You']
},
{
id: 704,
phaseId: 'greetings-1',
category: "Greetings",
type: "order-words",
question: "What does is being said in this video?",
sentenceVideoUrl: `${BASE_URL}/sentences/My-Name-is-BOB.mp4`,
options: ['I', 'B-O-B', 'You', 'L-O-L', 'M-O-M','Your', 'Name', 'Good', 'My', '(Is)', 'Hello'],
correctAnswer: ['My','Name','(Is)','B-O-B']
},
{
id: 801,
phaseId: 'greetings-2',
category: "Greetings",
type: "order-words",
question: "What does is being said in this video?",
sentenceVideoUrl: `${BASE_URL}/sentences/Your-Name-is-Nice.mp4`,
options: ['I','Nice','You','Your','Name','Good','My','(Is)', 'Hello'],
correctAnswer: ['Your','Name','(Is)','Nice']
},
{
    phaseId: 'greetings-3',
    id: 909,
    category:'Greetings', 
    type: 'order-words',
    question: "What is being said in this video?",
    sentenceVideoUrl:`${BASE_URL}/sentences/Good-Morning-WhatsUp.mp4`,
    options: ['Thank you', 'You','I','Morning', 'Nice', "What's up", 'Evening', 'Good'],
    correctAnswer: ['Good', 'Morning', "What's up"]
},
{
id: 1001,
phaseId: 'questions-1',
category: "Questions",
type: "order-words",
question: "What does is being said in this video?",
sentenceVideoUrl: `${BASE_URL}/sentences/sentences/Who-You-Know.mp4`,
options: ['You','Who','Know','What','?','Want','Good', 'My', 'Hello'],
correctAnswer: ['You', 'Know','Who', '?']
},
{
id: 1002,
phaseId: 'questions-1',
category: "Questions",
type: "order-words",
question: "What does is being said in this video?",
sentenceVideoUrl: `${BASE_URL}/sentences/How-Are-You.mp4`,
options: ['You','Why','How','What','?','Want','(Are)', 'My', 'Hello'],
correctAnswer: ['How', '(Are)','You', '?']
},
{
id: 1101,
phaseId: 'questions-2',
category: "Questions",
type: "order-words",
question: "What does is being said in this video?",
sentenceVideoUrl: `${BASE_URL}/sentences/When-We-Meet.mp4`,
options: ['We','Who','Know','What','?','Want','Good', 'My', 'When'],
correctAnswer: ['We', 'Meet', 'When','?']
},
{
id: 1102,
phaseId: 'questions-2',
category: "Questions",
type: "order-words",
question: "What does is being said in this video?",
sentenceVideoUrl: `${BASE_URL}/sentences/What-Your-Name.mp4`,
options: ['We','Who','Your','What','?','Want','Name', 'My', 'When'],
correctAnswer: ['Your', 'Name', 'What','?']
},
{
id: 1201,
phaseId: 'verbs-1',
category: "Verbs",
type: "order-words",
question: "What does is being said in this video?",
sentenceVideoUrl: `${BASE_URL}/sentences/She_He-Wants-Help.mp4`,
options: ['We','She/He','Knows','When','?','Wants','Good', '(Is)', '(Do)', 'My', 'Help'],
correctAnswer: ['She/He','Wants','Help']
},
{
id: 1301,
phaseId: 'verbs-2',
category: "Verbs",
type: "order-words",
question: "What does is being said in this video?",
sentenceVideoUrl: `${BASE_URL}/sentences/I-Dont-Want-Meet-Them.mp4`,
options: ['We','She/He','Knows','When','?','Wants','Good', '(Is)', '(Do)', 'My', 'Help'],
correctAnswer: ['I',"Don't want",'(to) Meet', 'Him/Her']
},
{
id: 1401,
phaseId: 'verbs-3',
category: "Verbs",
type: "order-words",
question: "What does is being said in this video?",
sentenceVideoUrl: `${BASE_URL}/sentences/I-Like-Learning-ASL.mp4`,
options: ['We','I',"Don't Like",'Knowing','When','?','Like','Want','A-S-L','Good', '(Is)', '(Do)', 'My', 'Helping','Learning'],
correctAnswer: ['I','Like','Learning', 'A-S-L']
},
{
id: 1501,
phaseId: 'family-1',
category: "Family",
type: "order-words",
question: "What does is being said in this video?",
sentenceVideoUrl: `${BASE_URL}/sentences/I-Know-Your-Brother.mp4`,
options: ['I',"Don't Like",'Know','When','Uncle','Brother','Want','Your','Sister', '(Is)', '(Do)', 'My', 'Help','Learning'],
correctAnswer: ['I','Know','Your', 'Brother']
},
{
id: 1502,
phaseId: 'family-1',
category: "Family",
type: "order-words",
question: "What does is being said in this video?",
sentenceVideoUrl: `${BASE_URL}/sentences/Where-is-Your-Mother.mp4`,
options: ['Mother',"Don't Like",'Know','When','Uncle','Brother','Want','Your','Sister', 'Where', 'Help','?'],
correctAnswer: ['Your', 'Mother','Where','?']
},
{
id: 1601,
phaseId: 'family-2',
category: "Family",
type: "order-words",
question: "What does is being said in this video?",
sentenceVideoUrl: `${BASE_URL}/sentences/He-Your-Grandfather.mp4`,
options: ['I',"He",'She','When','Uncle','Deaf','Grandmother','Your','Sister', 'Grandfather', 'Help','?'],
correctAnswer: ['He', 'Your', 'Grandfather','?']
},
{
id: 1701,
phaseId: 'charisma-1',
category: "Charisma",
type: "order-words",
question: "What does is being said in this video?",
sentenceVideoUrl: `${BASE_URL}/sentences/Do-You-Want-to-HangOut.mp4`,
options: ['I','Know','Want to','Hang out','You','Your','Sister', '(Is)', 'Have to','Help','?'],
correctAnswer: ['You', 'Want to', 'Hang out','?']
},
{
id: 1702,
phaseId: 'charisma-1',
category: "Charisma",
type: "order-words",
question: "What does is being said in this video?",
sentenceVideoUrl: `${BASE_URL}/sentences/Your-Mother-is-Beautiful.mp4`,
options: ['I','Know','Mother','Hang out','You','Your','Sister', '(Is)', 'Beautiful','Love','?'],
correctAnswer: ['Your', 'Mother', '(Is))','Beautiful']
},
{
id: 1801,
phaseId: 'charisma-2',
category: "Charisma",
type: "order-words",
question: "What does is being said in this video?",
sentenceVideoUrl: `${BASE_URL}/sentences/Your-Smile-is-Cute.mp4`,
options: ['I','Fun','Want to','Smile','You','Your','Sister', '(Is)', '(Do)', 'Cute', 'Have to','Help','?'],
correctAnswer: ['Your', 'Smile', '(Is)','Cute']
},
{
id: 1802,
phaseId: 'charisma-2',
category: "Charisma",
type: "order-words",
question: "What does is being said in this video?",
sentenceVideoUrl: `${BASE_URL}/sentences/sentences/They-are-Fun.mp4`,
options: ['I','Fun','He/She','Smile','You','Your','Sister', '(Is)', '(Do)', 'Cute', 'Have to','Help','?'],
correctAnswer: ['He/She', '(Is)','Fun']
}

];

// 2. THE GENERATOR LOGIC
const generatedEntries: QuizEntry[] = [];
const phases = Array.from(new Set(DictionaryData.map(d => d.phaseId).filter(Boolean)));

phases.forEach((pId) => {
    // Get all dictionary words specifically for THIS phase
    const phaseWords = DictionaryData.filter(d => d.phaseId === pId);
    if (phaseWords.length === 0) return;

    // A. Grab manual sentence/order questions for this phase
    const manualForPhase = customQuizEntries.filter(s => s.phaseId === pId);
    const wordsForMatching = phaseWords.slice(0, 4);
    
    // B. Create the Matching task with ACTUAL DATA
    const matchTask: QuizEntry = {
    id: Math.random(),
    phaseId: pId!,
    category: phaseWords[0].category,
    type: "match",
    question: "Match the signs!",
    // THIS IS THE KEY: You must pass the actual words here
    matchData: phaseWords.map(word => ({
        id: word.id,
        signWord: word.signWord, // Use signWord to match your Dictionary
        videoUrl: word.videoUrl
    })),
    options: [],
    correctAnswer: ""
    };

    // Combine them
    const phasePool = [...manualForPhase, matchTask, wordsForMatching];

    // C. Fill remaining slots with MCQs until we hit 5 questions per phase
    let i = 0;
    // Inside the 'phases.forEach' loop in QuizData.tsx
    while (phasePool.length < 7) {
        const word = phaseWords[i % phaseWords.length];
        phasePool.push({
            id: Math.random(),
            phaseId: pId!,
            category: word.category,
            type: "mcq",
            question: "Which sign is this?",
            signWord: word.signWord,
            // FIX: Grab the video URL from the dictionary word!
            videoUrl: word.videoUrl, 
            options: [], 
            correctAnswer: word.signWord
        });
        i++;
    }

generatedEntries.push(...(phasePool as QuizEntry[]));
});

// 3. EXPORT THE RESULT
export const QuizData = generatedEntries;

// generate all the mcq and match options.
