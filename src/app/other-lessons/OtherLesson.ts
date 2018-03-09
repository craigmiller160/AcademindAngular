export class OtherLesson {
  public static ROOT = 'other-lessons';

  constructor(public name: string, public path: string) { }

  getFullPath(): string {
    return `${OtherLesson.ROOT}/${this.path}`;
  }
}
