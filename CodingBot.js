const readline = require('readline');


class CodingBot {

    constructor(grid = {x: 10, y: 10}) {
        this.grid = grid
        this.bot = {x: 0, y: 0, d: 'N'}
        console.log('Grille')
        console.log(this.grid)
    }

    Execute(command = '') {
        console.log("position départ :");
        console.log(this.bot);
            const tabCommand =  command.toUpperCase().split('');

            tabCommand.map(command => {
                switch (command){
                    case 'L':
                        if (this.bot.d === "N") {
                            this.bot.d = "W"
                        } else if (this.bot.d === "W") {
                            this.bot.d = "S"
                        } else if (this.bot.d === "S") {
                            this.bot.d = "E"
                        } else if (this.bot.d === "E") {
                            this.bot.d = "N"
                        }
                        break;
                    case 'R':
                        if (this.bot.d === "N") {
                            this.bot.d = "E"
                        } else if (this.bot.d === "W") {
                            this.bot.d = "N"
                        } else if (this.bot.d === "S") {
                            this.bot.d = "W"
                        } else if (this.bot.d === "E") {
                            this.bot.d = "S"
                        }
                        break;
                    case 'M':
                        if (this.bot.d === "N") {
                            this.bot.y === 0 ? this.bot.y = this.grid.y : this.bot.y -= 1
                        } else if (this.bot.d === "W") {
                            this.bot.x === 0 ? this.bot.x = this.grid.x : this.bot.x -= 1
                        } else if (this.bot.d === "S") {
                            this.bot.y  === this.grid.y ? this.bot.y = 0 : this.bot.y += 1
                        } else if (this.bot.d === "E") {
                            this.bot.x  === this.grid.x  ? this.bot.x = 0 : this.bot.x += 1
                        }
                        break;
                    default:
                        break;

                }
                console.log("Déplacement :");
                console.log(this.bot);
            })
        }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const bot = new CodingBot()


function recursiveQuestion() {
    rl.question('Mouvement Robot : ', (answer) => {
        if (answer.toUpperCase() !== 'Q') {
            bot.Execute(answer);
            recursiveQuestion();
        } else {
            console.log('bye')
            rl.close();
        }
    })
}

recursiveQuestion();




