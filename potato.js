module.exports = {
    name: "potato",
    category: "cosmetics",
    description: "It gives you a radioactive potato.",
    run: async (client, message) => {
        const prefix = ">";
    
        if (!message.guild) return;
        if (!message.content.startsWith(prefix)) return;
    
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
    
        if (cmd === "givecookie") {
            if (message.deletable) message.delete();
    
            const msg = await message.channel.send(`Be careful with radioactivity! :potato:`);
        }
    }
}