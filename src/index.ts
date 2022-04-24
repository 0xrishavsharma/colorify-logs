export class Log{

    static info(msg: string){
        console.log(`%c ${msg}`, 'color:white; background:black');
    }

    static success(msg: string){
        console.log(`%c ${msg}`, 'color:green')
    }

    static warning(msg: string){
        console.log(`%c ${msg}`, 'color:yellow; background:black')
    }

    static danger(msg: string){
        console.log(`%c ${msg}`, 'color:red')
    }
}