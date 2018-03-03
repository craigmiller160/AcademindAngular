export class BindingServer {

  constructor(public type: BindingServerType,
              public name: string,
              public content: string) { }

}

export enum BindingServerType {
  SERVER = 'server',
  BLUEPRINT = 'blueprint'
}
