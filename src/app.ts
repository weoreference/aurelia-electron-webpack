export class App {

    public list: Array<number> = []


    public async attached() {

        this.list = [1, 2, 3]
    }
}