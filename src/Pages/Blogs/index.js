import React from 'react';
import Blog from '../../Components/Blog';
import { latestBlogDetails } from '../../Constants/appConstants';
import './Blogs.css';

function BlogPage() {
  return (
    <div className="blogsPageWrapper">
      <div className="blogsPageHeader">
        <h3 className="latestBlogsTitle">Latest Blogs</h3>
      </div>
      {latestBlogDetails.map((blog, index) => {
        return (
          <Blog
            key={index}
            image={blog.image}
            date={blog.date}
            user={blog.user}
            para1={blog.para1}
            para2={blog.para2}
            para3={blog.para3}
            type={blog.type}
            header={blog.header}
          />
        );
      })}

      <hr className="hrBar" />
    </div>
  );
}

export default BlogPage;
