var doc = require('firebase/firestore').doc;
var getDoc = require('firebase/firestore').getDoc;
var doc = require('firebase/firestore').doc;

async function getUserInfo(db, id) {
    const docRef = doc(db, 'users', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    }
}

module.exports = {
    getUserInfo
};
