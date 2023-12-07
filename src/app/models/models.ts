export class Productos {
    constructor(
      public id: number,
      public nombre: string,
      public stock: number,
      public precioLista: number,
      public invercion: number
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