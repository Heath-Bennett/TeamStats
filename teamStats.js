let team = {
    _players: [{
        firstName: 'Xander', 
        lastName: 'Bogaerts',
        age:29
    },
    {
        firstName:'Rafael',
        lastName: 'Devers',
        age:25
    },
    {
        firstName: 'Travis',
        lastName: 'Shaw',
        age: 31
    }

],
    _games: [{
        opponent: 'Yankees',
        teamScore: 10,
        opponentScore: 6
    },
    {
        opponent: 'Orioles',
        teamScore: 15,
        opponentScore: 3
    },
    {
        opponent: 'Blue Jays',
        teamScore: 8, 
        opponentScore: 5   
    }
],
    get teamPlayers () {
        return this._players;
    },

    get teamGames () {
        return this._games;
    },

    addPlayer (firstName, lastName, age){
        let newPlayer = {
            firstName: firstName,
            lastName: lastName,
            age: age
        }

        this._players.push(newPlayer);
    }

};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._games[0]);
console.log(team.teamPlayers);
console.log(team.teamGames)