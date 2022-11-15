export interface IBook {
    //id: number;
    name: string | null;
    feedback: string | null;
    rating: number | null;
  }

export class Book implements IBook {
  name: string | null;
  feedback: string | null;
  rating: number | null;

  constructor(name:string, feedback:string | null = null, rating:number | null = null) {
    this.name = name;
    this.feedback = feedback;
    this.rating = rating;
  }
}