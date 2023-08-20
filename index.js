const Discord = require('discord.js-selfbot-v13');
const clients = []; // Array to store multiple client instances

// Define an array of account details
const accountDetails = [
  {
    token: process.env.TOKEN1,
    texts: ["#WORLDSBIGGESTMUNCH", "/", "hell", "@alucard"],
    presence: {
      status: 'online',
      activities: [
        {
          name: 'alive',
          type: 'STREAMING',
          url: 'https://twitch.tv/<3',
          details: ''
        }
      ]
    },
    intents: ['GUILD_MESSAGES']
  }
  // Add more account details as needed
];

// Create and log in each client instance
for (const account of accountDetails) {
  const client = new Discord.Client(account);
  clients.push(client);

  client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} * ---`);

    let index = 0;

    setInterval(() => {
      const text = account.texts[index % account.texts.length];

      client.user.setActivity({
        name: 'dead',
        type: 'STREAMING',
        url: 'https://twitch.tv/<3',
        details: text
      });

      index++;
    }, 1000);
  });

  client.login(account.token);
}