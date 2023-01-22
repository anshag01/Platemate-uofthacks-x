const sessionStore = {}; // locationID -> set
const delay = 5000;

/**
 * @param {Request} req
 * @param {Response} res
 */
const matchHandler = (req, res) => {
    const { status, locationId, userId } = req.body;

    switch (status) {
        case 'start':
            if (sessionStore.hasOwnProperty(locationId)) {
                // check if there is already an element and return a match!
                const matchingUserId = sessionStore[locationId].pop();

                if (sessionStore[locationId].length == 1) {
                    sessionStore[locationId] = [];
                }

                res.send({ status: 'match', matchingUserId });
                break;
            }

            sessionStore[req.body.locationId] = [userId];
            res.send({ status: 'active' });
            break;

        case 'poll':
            if (!sessionStore.hasOwnProperty(locationId)) {
                res.status(400);
                res.send('Error: locationId not present');
                break;
            }

            if (sessionStore[locationId].length > 1) {
                const matchingUserId = sessionStore[locationId].pop();

                if (sessionStore[locationId].length == 1) {
                    delete sessionStore[locationId];
                } else {
                    sessionStore[locationId].pop();
                }

                res.send({ status: 'match', matchingUserId });
            }

            res.status(200);
            res.send({ status: 'active' });
            break;

        case 'stop':
            if (!sessionStore.hasOwnProperty(locationId)) {
                res.status(400);
                res.send('Error: locationId not present');
            }

            if (sessionStore[locationId].length == 1) {
                if (sessionStore[locationId][0] == userId) {
                    sessionStore[locationId] = [];
                } else {
                    res.status(400);
                    res.send('Error: UserId not present');
                }
            }
            let prevLength = sessionStore[locationId].length;
            sessionStore[locationId] = sessionStore[locationId].filter(
                (e) => e != userId
            );

            if (sessionStore[locationId] === prevLength) {
                res.status(400);
                res.send('Error: UserId not present');
            }

            res.status({ status: 'stopped' });
    }
};

const launchMatchmaking = (userId, locationId) => {
    return new Promise((resolve) => {
        if (sessionStore.hasOwnProperty(locationId)) {
            // there is current a session queue
            sessionStore[locationId].push(userId);
            resolve();
            // enque the user to the session
        }

        sessionStore[locationId] = [userId];

        setInterval(() => {}, delay);
    });
};

module.exports = {
    matchHandler
};
