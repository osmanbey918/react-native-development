// firebase.js
import firestore from '@react-native-firebase/firestore';

// Ensure Firebase is initialized
if (!firestore().app) {
  firestore().initializeApp();
}
// Firestore collection name
const POSTS_COLLECTION = 'posts';

// Create (Add Post)
export const addPost = async (postData) => {
  try {
    await firestore().collection(POSTS_COLLECTION).add(postData);
    console.log('Post added successfully!');
  } catch (error) {
    console.error('Error adding post: ', error);
  }
};

// Read (Get All Posts)
export const getPosts = async () => {
  try {
    const snapshot = await firestore().collection(POSTS_COLLECTION).get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching posts: ', error);
  }
};

// Update (Edit Post)
export const updatePost = async (postId, updatedData) => {
  try {
    await firestore().collection(POSTS_COLLECTION).doc(postId).update(updatedData);
    console.log('Post updated successfully!');
  } catch (error) {
    console.error('Error updating post: ', error);
  }
};

// Delete (Delete Post)
export const deletePost = async (postId) => {
  try {
    await firestore().collection(POSTS_COLLECTION).doc(postId).delete();
    console.log('Post deleted successfully!');
  } catch (error) {
    console.error('Error deleting post: ', error);
  }
};

export default firestore;
