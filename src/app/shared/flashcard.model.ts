export class Flashcard {
  // I commented out the id, question and answer properties because they are already defined in the constructor.
  // I defined these properties in the constructor by directly adding 'public' in front of them.

  // public id: number;
  // public question: string;
  // public answer: string;

  // I commented out these properties, because I do not need them yet.
  // I will require these properties when implementing the spaced repetition logic.

  // public difficulty: number;
  // public repetitions: number;
  // public lastRepetition: Date;
  // public interval: number;
  // public listId: number;

  constructor(
    public id: number,
    public question: string,
    public answer: string,
    public listId: number // listId: number
  ) // difficulty: number, // repetitions: number, // lastRepetition: Date, // interval: number,
  {
    this.id = id;
    this.question = question;
    this.answer = answer;
    this.listId = listId;
    // this.difficulty = difficulty;
    // this.repetitions = repetitions;
    // this.lastRepetition = lastRepetition;
    // this.interval = interval;
    // this.listId = listId;
  }
}
