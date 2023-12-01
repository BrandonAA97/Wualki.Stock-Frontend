export class Productos {
    constructor(
      public id: number,
      public titulo: string,
      public subtitulo: string,
      public image: string,
      public url: string,
      public categoria: string
    ){}
}
export class Login {
    constructor(
      public username: string,
      public password: string
    ){}
}
export class LoginDto{
  constructor(
    public username: string,
    public password: string
  ){}
}