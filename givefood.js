module.exports = {
    name: "givefood",
    category: "cosmetics",
    description: "EAT",
    run: async (client, message) => {
        const prefix = ">";
    
        if (!message.guild) return;
        if (!message.content.startsWith(prefix)) return;
    
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
    
        if (cmd === "givefood") {
            if (message.deletable) message.delete();
            let i = Math.floor(Math.random() * 10);
    
            if(i == 9){
                const msg = await message.channel.send(`Here you go ${message.author.username}: :popcorn:`);
            }
            else{
                if(i == 8){
                    const msg = await message.channel.send(`Here you go ${message.author.username}: :pizza:`);
                }
                else{
                    if(i == 7){
                        const msg = await message.channel.send(`Here you go ${message.author.username}: :pie:`);
                    }
                    else{
                        if(i == 6){
                            const msg = await message.channel.send(`Here you go ${message.author.username}: :hamburger`);
                        }
                        else{
                            if(i == 5){
                                const msg = await message.channel.send(`Here you go ${message.author.username}: :green_apple:cak`);
                            }
                            else{
                                if(i == 4){
                                    const msg = await message.channel.send(`Here you go ${message.author.username}: :cake:`);
                                }
                                else{
                                    if(i == 3){
                                        const msg = await message.channel.send(`Here you go ${message.author.username}: :friend_shrimp:`);
                                    }
                                    else{
                                        if(i == 2){
                                            const msg = await message.channel.send(`Here you go ${message.author.username}: :croissant:`);
                                        }
                                        else{
                                            if(i == 1){
                                                const msg = await message.channel.send(`Here you go ${message.author.username}: :taco:`);
                                            }
                                            else{
                                                if(i == 0){
                                                    const msg = await message.channel.send(`Here you go ${message.author.username}: :pancakes:`);
                                                }
                                                
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}