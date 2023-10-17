import { Flashcard } from "../flashcards/flashcard.model";

export class FlashcardList {
    public listName: string;
    public listDescription: string;
    public listID: number;
    public flashcards: Flashcard[];

    constructor(listName: string, listDescription: string, listId: number, flashcards: Flashcard[]) {
        this.listName = listName;
        this.listDescription = listDescription;
        this.listID = listId;
        this.flashcards = flashcards;
    }
}