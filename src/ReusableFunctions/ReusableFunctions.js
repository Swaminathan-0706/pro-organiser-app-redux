import db from '../FireStoreConfig';

//Function to Add board details in Firestore
export const addBoard=async(board)=>{
    try
    {
        await db.collection('boardDetails').add(board);
        return true;
    }
    catch(error)
    {
        alert(error);
    }
    
}