import { createContext, useContext, useState } from "react";

const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([
    { id: 1, postId: 1, author: "Rodrick", text: "Amazing insights!" },
    { id: 2, postId: 1, author: "Daniel", text: "Let’s implement this soon." },
  ]);

  const addComment = (postId, author, text) =>
    setComments((c) => [...c, { id: Date.now(), postId, author, text }]);

  const deleteComment = (id) => setComments((c) => c.filter((x) => x.id !== id));

  return (
    <CommentContext.Provider value={{ comments, addComment, deleteComment }}>
      {children}
    </CommentContext.Provider>
  );
};

export const useComments = () => useContext(CommentContext);
