// this script functions as a controller for the addComment.html view
const addComment = async (event, blogId) => {
    event.preventDefault();
  
    const comment = document.querySelector('#content').value.trim();
    
    if (comment) 
    {
      const response = await fetch('/api/comment/', {
        method: 'POST',
        body: JSON.stringify({blogId, comment }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace(`/blog/${blogId}`);
      } else {
        alert('Failed to create new post.');
      }
    }
  };