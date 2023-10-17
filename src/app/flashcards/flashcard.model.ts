export class Flashcard {
  public id: number;
  public question: string;
  public answer: string;
  public difficulty: number;
  public repetitions: number;
  public lastRepetition: Date;
  public interval: number;
  public listId: number;

  constructor(
    id: number,
    question: string,
    answer: string,
    difficulty: number,
    repetitions: number,
    lastRepetition: Date,
    interval: number,
    listId: number
  ) {
    this.id = id;
    this.question = question;
    this.answer = answer;
    this.difficulty = difficulty;
    this.repetitions = repetitions;
    this.lastRepetition = lastRepetition;
    this.interval = interval;
    this.listId = listId;
  }
}
