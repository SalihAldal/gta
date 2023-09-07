mp.events.addCommand('hp', (player) => {
    player.health = 100;
});

mp.events.addCommand('armor', (player) => {
    player.armour = 100;
});

mp.events.addCommand('kill', (player) => {
    player.health = 0;
});

mp.events.addCommand("me", (player, message) => {

    if(!message) {
        chat.send('')
    }
    else {
        mp.players.broadcast(`!{#BA55D3} * ${player.name} ${message}`);
    }
});



