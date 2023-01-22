const axios = require('axios').default;
const delay = 3000;

const pollMatch = async (userId, locationId) => {
    const response = await axios.post('http://localhost:4000/match', {
        status: 'poll',
        userId: userId,
        locationId: locationId
    });

    return response.data;
};

const waitForMatch = (callback, userId, locationId) => {
    return new Promise(async (resolve) => {
        setTimeout(async () => {
            const pollData = await pollMatch(userId, locationId);
            // eslint-disable-next-line default-case
            switch (pollData.status) {
                case 'match':
                    callback(pollData.matchingUserId);
                    resolve();
                    break;
                case 'active':
                    console.log('match not yet found');
                    break;
            }
        }, delay);
    });
};

module.exports = {
    waitForMatch
};
