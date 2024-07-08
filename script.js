const pingButton = document.getElementById('ping-button');

pingButton.addEventListener('click', () => {
    // Get the visitor's IP address using the ipify API
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
            const ipAddress = data.ip;

            // Send the IP address to the Discord webhook
            const webhookUrl = 'https://discord.com/api/webhooks/1259662908804304896/yZxln4_lnJmylqB8bpKDsV9L88sQz84e1OAq2LGS15IUCHinpcFxPBb7kxSeELbpRWuM';
            const webhookData = {
                'content': `New ping from ${ipAddress}`
            };

            fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(webhookData)
            })
          .then(response => response.json())
          .then(data => console.log(`Sent ping to Discord webhook: ${data}`))
          .catch(error => console.error(`Error sending ping to Discord webhook: ${error}`));
        })
      .catch(error => console.error(`Error getting IP address: ${error}`));
});