import type { LessonEntry } from "../types/types";
import { UsersIcon, ArrowUpAZ, ActivityIcon, LucideMessageCircleQuestionMark, MessageCircleHeart, HeartHandshakeIcon } from "lucide-react";

export const LessonData: LessonEntry[] = [
    {
        id: "1",
        icon: ArrowUpAZ,
        title: "Alphabet",
        category: "Alphabet",
        nosigns: "26 signs",
        description: "Learn the ASL Alphabet and start fingerspelling!",
        link: "/lesson-menu/Alphabet", //phases menu
        totalPhases: 6 
    },
    {
        id: "3",
        icon: HeartHandshakeIcon,
        title: "Greetings",
        category: "Greetings",
        nosigns: "9 signs",
        description: "Learn common greetings and introductions in ASL.",
        link: "/lesson-menu/Greetings",
        totalPhases: 3
    },
    {
        id: "4",
        icon: LucideMessageCircleQuestionMark,
        title: "Questions",
        category: "Questions",
        nosigns: "6 signs",
        description: "Learn how to ask common questions in ASL.",
        link: "/lesson-menu/Questions",
        totalPhases: 2
    },
    {
        id: "5",
        icon: ActivityIcon,
        title: "Verbs",
        category: "Verbs",
        nosigns: "9 signs",
        description: "Learn common verbs in ASL.",
        link: "/lesson-menu/Verbs",
        totalPhases: 3
    },
    {
        id: "6",
        icon: UsersIcon,
        title: "Family",
        category: "Family",
        nosigns: "8 signs",
        description: "Learn family-related signs in ASL.",
        link: "/lesson-menu/Family",
        totalPhases: 2
    },
    {
        id: "7",
        icon: MessageCircleHeart,
        title: "Charisma",
        category: "Charisma",
        nosigns: "7 signs",
        description: "Learn signs that add charisma and personality to your ASL.",
        link: "/lesson-menu/Charisma",
        totalPhases: 2
    }
];
