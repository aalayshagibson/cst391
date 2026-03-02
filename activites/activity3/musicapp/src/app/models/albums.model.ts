export class Album {
  constructor(
    public id: number,
    public artist: string,
    public title: string,
    public year: number,
    public image?: string
  ) {}
}