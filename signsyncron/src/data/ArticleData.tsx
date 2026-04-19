import type { Article } from "../types/types";

const BASEURL = "https://res.cloudinary.com/dqzxf6v8b/video/upload/q_auto,f_auto"

export const AllArticles: Article[] = [
    {
        id: "1",
        title: "ASL Grammar",
        text: "In ASL, it’s not enough to memorize signs if you want to converse. You must also know the grammar and sentence structure. Sentences are mainly structured around meaning and are not a direct translation from spoken English.",
        sections: [
            {
                sectionTitle: "Sentence Type – Topic + Comment",
                text: "This sentence type covers how most statements are structured in ASL. You don't focus on the direct translation from English, but rather the main noun being talked about.",
                list: ["Topic = The main thing being talked about in the sentence", "Comment = What is being said about that topic like an action or information"],
                examples: [{ english: "I'm going to the store", asl: "STORE-I-GO-I", note: "“store” is the main topic of the sentence." },
                { english: "The dog is sleeping", asl: "DOG-SLEEP", note: "“dog” is the main topic of the sentence." }],
                additionalInfo: "*‘Be’ verbs like ‘is’, ‘am’,’are’ aren’t signed in ASL since the goal is to get the meaning of the sentence across, not the direct translation from spoken English.",
                sources: ["https://www.aslbloom.com/blog/asl-sentence-structure#:~:text=ASL%20typically%20uses%20a%20topic,depends%20on%20many%20different%20factors", "https://germanna.edu/sites/default/files/2023-07/ASL%20Grammar%20Guide%20%28edit%207-24-23%29.pdf", "https://www.youtube.com/watch?v=fDV9Al8Fgjk", "https://www.youtube.com/watch?v=TSJihTL7flc&list=PLMN7QCuj6dfY6wtU3KhX0hqs_YZdIWvQU&index=29"]
            },
            {
                sectionTitle: "Descriptors or Adjectives",
                text: "These usually go before the Topic.",
                examples: [{ english: "The small brown dog is sleeping", asl: "SMALL-BROWN-DOG-SLEEP", note: "“small brown dog” is the main topic of the sentence." }],
                sources: ["https://www.youtube.com/watch?v=TSJihTL7flc&list=PLMN7QCuj6dfY6wtU3KhX0hqs_YZdIWvQU&index=29"],
            },
            {
                sectionTitle: "Closing Signal",
                text: "You may have noted that for <strong>pronouns</strong> or deixes like ‘I, ‘You’, ‘Her/Him’, ‘It’, we simply point to the subject we are referring to whether it’s yourself, the person you are conversing with, or someone else outside the conversation. <strong>To indicate you have finished your sentence/thought</strong>, typically, you <strong>point to the subject of the sentence again at the end</strong>. Think of it as a full stop.",
                examples: [{ english: "She is lazy.", asl: "SHE-LAZY-SHE", note: "The first “she” is the subject of the sentence and the second “she” is the closing signal." },
                { english: "You are my friend.", asl: "YOU-MY-FRIEND-YOU", note: "The first “you” is the subject of the sentence and the second “you” is the closing signal." },
                { english: "Are you happy?", asl: "YOU-HAPPY-YOU", note: "Signed with raised eyebrows as it is a Yes/No question." }],
                additionalInfo:"You can see this a lot in the lessons.",
                sources: ["https://www.youtube.com/watch?v=bpsj8FyRt9I&list=PLMN7QCuj6dfY6wtU3KhX0hqs_YZdIWvQU&index=29"]
            },
            {
                sectionTitle: "Tenses / Time Indicators",
                text: "How do we indicate that an action happened in the past or will happen in the future if we don’t have signs for ‘-ed’ or ‘will’? You may also notice that ‘be’ verbs like ‘is’, ‘am’,’are’ aren’t signed in ASL. \n There aren’t any new signs for different tenses nor will you have to change how you sign the verb. This is because to indicate tenses in ASL, typically <strong>time markers</strong> are put in the beginning of the sentence to indicate if the occurrence of an action is in the present, past, or future. <strong>How far in the past or the future</strong. the action happened/will happen can also be indicated.",
                list: ["Time + Topic + Comment"],
                examples: [{ english: "I am studying.", asl: "NOW-I-STUDY", note: "The time marker “now” indicates that the action is happening in the present." },
                { english: "I will eat later.", asl: "LATER-I-EAT" }],
                sources: ["https://www.youtube.com/watch?v=eTCYpOGGQOw&list=PLMN7QCuj6dfY6wtU3KhX0hqs_YZdIWvQU&index=29"]
            },
            {
                sectionTitle: "Sentence Type – Negation",
                text: "What about the negative form of verbs like ‘don’t’ or if you want to deny something?\nThere are signs for ‘not’ and other negative words; the negative form of some words such as ‘don’t like‘ or ‘don’t want’ have its own sign by using something called “reversal of orientation”. But, you just <strong>shake your head negatively</strong> while signing for <strong>MOST</strong> simple negation which is another reason why non-manual markers are important.",
                sources: ["https://www.lifeprint.com/asl101/pages-signs/n/negation.htm#:~:text=For%20most%20simple%20negation%20you,into%20an%20%22A%22%20hand, https://www.youtube.com/watch?v=zBlgQtV6A3E"]
                //might add video examples later
            },
            {
                sectionTitle: "Sentence Type – Questions",
                text: "Facial expressions and body movement are very important as they are the only things differentiating a normal sentence from a YES/NO question.",
                list: ["For Yes/No questions, you must sign it while raising your eyebrows and leaning forward or tilting your head.", "WH signs commonly go at the end of the sentence. also accompanied by essential non-manual markers like furrowing/scrunching eyebrows and leaning forward."],
                examples: [{ english: "Where is your father?", asl: "YOUR-FATHER-WHERE", note: "Signed while scrunching your eyebrows" },
                { english: "Do you want help?", asl: "YOU-WANT-HELP-YOU", note: "Signed while raising your eyebrows and leaning forward." }],
                sources: ["https://www.youtube.com/watch?v=BopX7gr1BJ8"]
            },
            {
                sectionTitle: "Non-Manual Markers",
                text: "<strong>Non-hand parts of ASL</strong> used to communicate are called non-manual markers. They are essential for <strong>grammar</strong> and adding extra meaning to what we’re saying.\nThese include:",
                list: ["Eye movement", "Head movement", "Facial expressions", "Mouth movements", "Body movements"],
                sources: ["https://www.youtube.com/watch?v=LbIdkb7rmDE"]
            }
        ],
        sources: undefined
    },
        {
            //add video URL
            id: "2",
            title: "5 ASL Parameters",
            sections: [
                {
                    sectionTitle: "Handshape",
                    text: "The shape your hand takes when signing a word.\nFor example, the handshape for 'Aunt' is 'A', while the handshape for 'Uncle' is 'U'.",
                    points: [{ label: "Handshape", description: "'Aunt' Vs 'Uncle'", videoUrl: `${BASEURL}/article/Handshape.mp4` }]
                },
                {
                    sectionTitle: "Movement",
                    text: "Moving upward, downward, back, forward, diagonal, or even zigzagging is used to communicate words and sentences.",
                    points: [{ label: "Movement", description: "'Mother' VS 'Grandmother'", videoUrl: `${BASEURL}/article/Movement.mp4`}]
                },
                {
                    sectionTitle: "Location",
                    text: "There are different meanings for one handshape depending on where you sign it like your forehead, chin, etc.",
                    points: [{ label: "Location", description: "'Mother' VS 'Father'", videoUrl:`${BASEURL}/article/Location.mp4`}]
                },
                {
                    sectionTitle: "Palm Orientation",
                    text: "The direction your palm is facing when signing a word can change the meaning of the word.",
                    points: [{ label: "Palm Orientation", description: "'K' VS 'P'", videoUrl:`${BASEURL}/article/Orientation.mp4`  }]
                },
                {
                    sectionTitle: "Non-Manual Markers",
                    text: "Non-hand parts of ASL are called non-manual markers. Your entire face, including your eyebrows, eyes, mouth, nose and even your body contribute so much to communication, not just your hands.",
                    points: [{ label: "Non-Manual Markers", description: "You. VS You? (It’s you?! Or Did you?)", videoUrl:  `${BASEURL}/article/Markers.mp4`}],
                    list: ["Yes/No Questions - Raised eyebrows and lean forward", "5W 1H Questions - Furrowed eyebrows and lean forward", "Emphasis - Intense/exaggerated expressions"],
                    sources: ["https://www.youtube.com/watch?v=LbIdkb7rmDE", "https://www.lifeprint.com/asl101/pages-layout/facialexpressions.htm#:~:text=Facial%20Expressions%20in%20American%20Sign,surprised%20that%20it%20is%20you%29"]
                }
            ],
            sources: undefined
        },
        {
            id: "3",
            title: "Sign Language Etiquette – How to Politely and Effectively Communicate",
            sections: [
                {
                    sectionTitle: "Getting the Attention of Deaf People",
                    list: ["Tap on the shoulder", "Tap on the table you are sharing with them", "Waving downward at them", "Turning the light on and off (in big groups or when they are far away)"],
                    text: "Important Note: <strong>Do NOT overdo it.</strong> \nA single gentle tap on the shoulder or table should be enough. More than that may be annoying or disrespectful, unless you didn’t catch their attention the first time.",
                    sources: ["https://www.youtube.com/watch?v=NdK97BAt3V0"]
                },
                {
                    sectionTitle: "Learning About Multiple Signs For One Thing",
                    text: "Every person has their own style of signing whether it’s their speed, expressions, or in this case, choice of sign for a certain word / phrase. There are many <strong>different regional versions of a sign</strong>. To develop versatility in communication through Sign, it’s better to learn multiple versions of signing a word in case you meet someone who uses a different version from you.\n\nThis site only shows the widely-accepted, standardized version in the ‘Quizzes’ and ‘Dictionary’ section, but for broader, more detailed knowledge, it’s better to practice conversing with more experienced signers.",
                    sources: ["https://www.dummies.com/article/academics-the-arts/language-language-arts/learning-languages/american-sign-language/10-tips-help-sign-like-pro-233560/"]
                },
                {
                    sectionTitle: "Lighting and Signing Space",
                    text: "ASL is a visual language. The first step to understanding is seeing.\n\nMake sure you sign in a well-lit place and ensure there is no backlight or else all that’s going to be seen is your silhouette.\n\nGenerally, the <strong>area where you move your hands</strong> during daily conversations is within your <strong>‘sign box’</strong> as seen below.\nHowever, there are cases where you have to sign in a bigger ‘sign box’ when you sign to a large audience or sign in a smaller sign box when you want to be secretive about what you’re signing or when signing to someone with tunnel vision.",
                    points: [{ label: "Sign Box" }],
                    sources: ["https://youtu.be/LVf-ocZCW1w"]
                },
                {
                    sectionTitle: "Eye Contact",
                    text: "One of the most important parts of conversing in Sign is eye contact. <strong>DO NOT look away.</strong>\n\nA common misconception is that your eyes spend the most time looking at the hands. Actually, the most important place to look is the other person’s face! Eye contact allows you to show the other person that they have your attention and you’ll be able to see their emotions or get the gist of what they’re conveying quicker.\n\nIgnoring the face and body when interpreting Sign is like missing out on half of the conversation. <strong>Don’t worry about looking at the hands</strong>, you can still see them using your <strong>peripheral vision</strong>. ",
                    sources: ["https://www.youtube.com/watch?v=NdK97BAt3V0"]
                },
                {
                    sectionTitle: "Interjections in the Middle of Conversations",
                    text: "As a hearing person, if you hear a sound or announcement mid-conversation with a Deaf person, you <strong>mustn't break eye contact to check what the sound is without letting the Deaf person know first</strong>. Otherwise, it’s rude.\n\nFirst, you can <strong>sign to halt</strong> the conversation, explain what you hear and only then should you check it out. If it’s an<strong> announcement through speakers</strong>, you can also <strong>interpret</strong> to your Deaf friend what the announcement is saying after halting the conversation first.",
                    sources: ["https://www.youtube.com/watch?v=NdK97BAt3V0"]
                }
            ],
            sources: undefined
        }]
