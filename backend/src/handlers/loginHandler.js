export default loginHandler = async (req, res, next) => {
    const docRef = doc(db, 'users', req.body.username);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        if (req.body.password === docSnap.data().password) {
            res.send(docRef.id);
        } else {
            console.log('Incorrect password.');
        }
    } else {
        console.log('No such document!');
    }
};
