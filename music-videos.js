module.exports = {
    name: "music-videos",
    category: "cosmetics",
    description: `"When it all comes to it, in the end, truth be told, you were my friend"`,
    run: async (client, message) => {
        const prefix = ">";
    
        if (!message.guild) return;
        if (!message.content.startsWith(prefix)) return;
    
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
    
        if (cmd === "musics") {
            if (message.deletable) message.delete();
    
            const msg = await message.channel.send(`Whatch these :slight_smile::https://www.youtube.com/watch?v=R3HrwwQHwJ8 \n
                                                                                https://www.youtube.com/watch?v=3_PocJXTr_8&t=127s`);
        }
    }
}