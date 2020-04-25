module.exports = {
    name: "snail",
    category: "cosmetics",
    description: ":pray: ALL HAIL THE SNAIL :snail:",
    run: async (client, message) => {
        const prefix = ">";
    
        if (!message.guild) return;
        if (!message.content.startsWith(prefix)) return;
    
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
    
        if (cmd === "snail") {
            if (message.deletable) message.delete();
    
            if(message.author.id !== "619123976139964426") await message.channel.send(`:hail: ALL HAIL THE SNAIL :pray:`)
            if(message.author.id !== "619123976139964426") return;
    
            const msg = await message.channel.send(`:fire: **ALL HAIL THE SNAIL** :snail:`);
        }
    }
}

//WORK IN PROGRESS