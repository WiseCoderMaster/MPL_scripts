module.exports = {
    name: "giveweed",
    category: "cosmetics",
    description: "Everyone can get weed, try it Biggles :)",
    run: async (client, message) => {
        const prefix = ">";
    
        if (!message.guild) return;
        if (!message.content.startsWith(prefix)) return;
    
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
    
        if (cmd === "giveweed") {
            if (message.deletable) message.delete();
    
            if(message.author.id == "293413917093527552") return;
    
            const msg = await message.channel.send(`Here you go ${message.author.username}: 🌱`);
        }
    }
}