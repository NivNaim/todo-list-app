export class Task {
  constructor(
    public id: string,
    public title: string,
    public date: string,
    public isChecked: boolean,
    public isCompleted: boolean
  ) {}
}
