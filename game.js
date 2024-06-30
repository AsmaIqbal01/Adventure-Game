#!/usr/bin/env node 
/*This project is not GUI based. It is a console-based game, developed the game in TypeScript and Node.js*/
// Import the 'inquirer' library to handle user input.
// game.ts
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.bgRedBright("\t\t\t *****The Console-based Game*******"));
async function startGame() {
    const gameMode = await inquirer.prompt([
        {
            name: 'gameMode',
            type: 'list',
            choices: ['You vs Computer', 'Player 1 vs Player 2']
        }
    ]);
    if (gameMode.gameMode === 'You vs Computer') {
        console.log(chalk.bgBlueBright("\t\t\t ****Player vs Computer******"));
        const playerName = await inquirer.prompt([
            {
                name: "userName",
                type: "input",
                message: "Enter your name"
            }
        ]);
        console.log(chalk.bgBlueBright(`Welcome, ${playerName.userName}!`));
        let health = 40;
        while (true) {
            const actions = await inquirer.prompt([
                {
                    name: "action",
                    type: "list",
                    choices: ["Hit Target", "Under Attack", "Pass Level", "Health Aid", "Exit"]
                }
            ]);
            switch (actions.action) {
                case "Hit Target":
                    health += 10;
                    console.log(chalk.blueBright("*****You Hit Target hence you gain health!!****** "));
                    break;
                case "Under Attack":
                    health -= 10;
                    console.log(chalk.blueBright("*****You are Under Attack hence you loss health!!****** "));
                    break;
                case "Pass Level":
                    health += 20;
                    console.log(chalk.blueBright("*****Congratulations!!! You pass the level****** "));
                    break;
                case "Health Aid":
                    health += 40;
                    console.log(chalk.blueBright("*****You are healthy enough to play****** "));
                    break;
                case "Exit":
                    console.log(chalk.blueBright("*****Game Over****** "));
                    return;
            }
            console.log(`Your current health is: ${health}`);
        }
    }
    else {
        console.log(chalk.bgBlueBright("\t\t\t ****Player 1 vs Player 2******"));
        const player1Name = await inquirer.prompt([
            {
                name: "player1Name",
                type: "input",
                message: "Enter Player 1's name"
            }
        ]);
        const player2Name = await inquirer.prompt([
            {
                name: "player2Name",
                type: "input",
                message: "Enter Player 2's name"
            }
        ]);
        console.log(chalk.bgBlueBright(`Welcome, ${player1Name.player1Name} and ${player2Name.player2Name}!`));
        let player1Health = 40;
        let player2Health = 40;
        while (true) {
            console.log(`\n${player1Name.player1Name}'s turn:`);
            const player1Action = await inquirer.prompt([
                {
                    name: "action",
                    type: "list",
                    choices: ["Hit Player 2", "Pass Turn", "Health Aid", "Exit"]
                }
            ]);
            switch (player1Action.action) {
                case "Hit Player 2":
                    player2Health -= 10;
                    console.log(chalk.blueBright(`*****${player1Name.player1Name} hits ${player2Name.player2Name}!****** `));
                    break;
                case "Pass Turn":
                    console.log(chalk.blueBright(`*****${player1Name.player1Name} passes their turn.****** `));
                    break;
                case "Health Aid":
                    player1Health += 40;
                    console.log(chalk.blueBright(`*****${player1Name.player1Name} uses Health Aid!****** `));
                    break;
                case "Exit":
                    console.log(chalk.blueBright("*****Game Over****** "));
                    return;
            }
            console.log(`\n${player2Name.player2Name}'s turn:`);
            const player2Action = await inquirer.prompt([
                {
                    name: "action",
                    type: "list",
                    choices: ["Hit Player 1", "Pass Turn", "Health Aid", "Exit"]
                }
            ]);
            switch (player2Action.action) {
                case "Hit Player 1":
                    player1Health -= 10;
                    console.log(chalk.blueBright(`*****${player2Name.player2Name} hits ${player1Name.player1Name}!****** `));
                    break;
                case "Pass Turn":
                    console.log(chalk.blueBright(`*****${player2Name.player2Name} passes their turn.****** `));
                    break;
                case "Health Aid":
                    player2Health += 40;
                    console.log(chalk.blueBright(`*****${player2Name.player2Name} uses Health Aid!****** `));
                    break;
                case "Exit":
                    console.log(chalk.blueBright("*****Game Over****** "));
                    return;
            }
            console.log(`\nCurrent health: ${player1Name.player1Name} - ${player1Health}, ${player2Name.player2Name} - ${player2Health}`);
            if (player1Health <= 0) {
                console.log(chalk.redBright(`*****${player1Name.player1Name} has been defeated! ${player2Name.player2Name} wins!****** `));
                return;
            }
            if (player2Health <= 0) {
                console.log(chalk.redBright(`*****${player2Name.player2Name} has been defeated! ${player1Name.player1Name} wins!****** `));
                return;
            }
        }
    }
}
startGame();
