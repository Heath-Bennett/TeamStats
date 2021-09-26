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
    }

};

console.log(team._games[0]);
console.log(team.teamPlayers);
console.log(team.teamGames)