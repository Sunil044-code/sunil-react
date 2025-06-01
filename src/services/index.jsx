export const fetchBlogs=async()=>{
    try {
        const res=await fetch('http://localhost:3001/blogs') 
        const result=await res.json()
        return result
        
    } catch (error) {
        console.log('error Fetching the blog',error.message)
    }
}

export const retrieveBlog = async ({ blogSlug}) => {
    try {
        const res = await fetch(`http://localhost:3001/blogs/${blogSlug}`);

        if (!res.ok) {
            const errorMessage = `Failed to fetch blog (${res.status}): ${res.statusText}`;
            throw new Error(errorMessage);
        }

        const result = await res.json();
        return result;

    } catch (error) {
        console.error('Error retrieving the blog:', error.message);
        throw error; 
    }
};
