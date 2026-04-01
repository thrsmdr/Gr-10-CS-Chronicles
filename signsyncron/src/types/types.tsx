import type { LucideProps } from "lucide-react";
import type { ComponentType } from "react";

export interface HomepageCardProps {
    title: string;
    logo: string | ComponentType<LucideProps>;
    description: string;
    linkUrl: string;
}
export interface DictionaryEntry {
    id: string;
    publicId?:string;
    phaseId?: string;
    signWord: string;
    category: string;
    notes: string;
    videoUrl: string;
}

export interface ArticleCardEntry {
    id: string;
    title: string;
    description: string;
    onClick: () => void;
}

export interface ArticleEntry {
    sectionTitle: string;
    text?: string;
    list?: string[]; // For lists of tips, rules, etc.
    sources?: string[]; // For citing sources at the end of the article
    funfact?: string; // For interesting tidbits that don't fit into the main text
    additionalInfo?: string; // For any extra info that doesn't fit into the main text, like grammar notes or etiquette tips
    // For Grammar:
    examples?: {
        english?: string;
        asl?: string;
        note?: string;
        videoUrl?: string;
    }[];
    // For Etiquette/Parameters (New):
    points?: {
        label: string;
        description?: string;
        videoUrl?: string; // Perfect for "Mother vs Father" videos
    }[];
}

export interface Article {
    sources: any;
    id: string;
    title: string;
    text?: string; // Optional for articles that are more point-based
    sections: ArticleEntry[]; // Use your interface here!
}

export interface LessonEntry {
    id: string;
    icon: string | ComponentType<LucideProps>;
    title: string;
    category: string;
    nosigns: string;
    description: string;
    link: string;
    totalPhases: number;
}

export interface QuizEntry {
    id: number | string;
    category: string;
    phaseId?: string
    type: "match" | "mcq" | "order-words" | "order-videos";
    question: string;
    signWord?: string;
    videoUrl?: string;
    options: string[];
    correctAnswer: string | string[]; // For order-words, this will be an array of the correct order
    // For sentence ordering exercises
    sentenceVideoUrl?: string; // Single video for the whole sentence
    sentenceItems?: string[]; // Words to order (just strings now)
    itemVideoUrls?: string[]; // Video URLs for each item in order-videos (matches sentenceItems order)
    matchData?: any[]; // Add this line!
}

export interface ActualQuizProps {
    data: QuizEntry;
    onAnswer: (isCorrect: boolean) => void;
    onSkip?: () => void;
    isLast?: boolean;
}