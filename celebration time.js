module.exports = {
    name: "celebration time",
    category: "cosmetics",
    description: `Celebration time`,
    run: async (client, message) => {
        const prefix = ">";
    
        if (!message.guild) return;
        if (!message.content.startsWith(prefix)) return;
    
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
    
        if (cmd === "clcikit") {
            if (message.deletable) message.delete();
    
            if(message.author.id == '703310923234017460'){
                const msg = await message.channel.send(`Your prize! Click it! \nhttps://youtu.be/3GwjfUFyY6M?t=34\n
                ⬡ne ⬡f us!  ⬡ne ⬡f us! ⬡ne ⬡f us!  \ ⬡ /`);
            }
            else{
                return;
            }
        }
    }
}
//Only Snoogms can do this