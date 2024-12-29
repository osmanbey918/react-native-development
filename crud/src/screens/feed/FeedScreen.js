import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { addPost, getPosts, updatePost, deletePost } from '../../config/fireBase'; // Adjust import based on your file path

const FeedScreen = () => {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState('');
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [editingPostId, setEditingPostId] = useState(null);
  const [editedPostText, setEditedPostText] = useState('');

  // Fetch posts from Firebase
  const fetchPosts = async () => {
    const postsData = await getPosts();
    setPosts(postsData);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleAddPost = async () => {
    if (newPostText.trim()) {
      await addPost({ text: newPostText });
      setNewPostText('');
      setIsCreatingPost(false);
      fetchPosts();  // Refresh the post feed
    }
  };

  const handleUpdatePost = async () => {
    if (editedPostText.trim()) {
      await updatePost(editingPostId, { text: editedPostText });
      setEditedPostText('');
      setEditingPostId(null);
      fetchPosts();  // Refresh the post feed
    }
  };

  const handleDeletePost = async (postId) => {
    await deletePost(postId);
    fetchPosts();  // Refresh the post feed
  };

  return (
    <View style={{ padding: 10 }}>
      {/* Button to Create a Post */}
      <Button title="Create Post" onPress={() => setIsCreatingPost(true)} />

      {/* Create Post Container */}
      {isCreatingPost && (
        <View>
          <TextInput
            value={newPostText}
            onChangeText={setNewPostText}
            placeholder="Write a new post"
            style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
          />
          <Button title="Add Post" onPress={handleAddPost} />
          <Button title="Cancel" onPress={() => setIsCreatingPost(false)} />
        </View>
      )}

      {/* Post Feed */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 15, padding: 10, borderWidth: 1 }}>
            <Text>{item.text}</Text>

            {/* Edit and Delete buttons */}
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  setEditingPostId(item.id);
                  setEditedPostText(item.text);
                }}
                style={{ marginRight: 10 }}
              >
                <Text>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeletePost(item.id)}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>

            {/* Edit Post Container */}
            {editingPostId === item.id && (
              <View style={{ marginTop: 10 }}>
                <TextInput
                  value={editedPostText}
                  onChangeText={setEditedPostText}
                  style={{ borderWidth: 1, marginBottom: 10 }}
                />
                <Button title="Update Post" onPress={handleUpdatePost} />
                <Button title="Cancel Edit" onPress={() => setEditingPostId(null)} />
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
};

export default FeedScreen;
