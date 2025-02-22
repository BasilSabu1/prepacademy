import React from 'react';

// Simple Search Icon Component
const SearchIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="text-gray-400"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Strategies for CAT 2025",
      description: "Preparing for the CAT 2025 exam is a significant step to...",
      image: "/blogcommonimage.png",
    },
    {
      id: 2,
      title: "Ace the CAT Essential",
      description: "Preparing for the CAT 2025 exam is a significant step to...",
      image: "/blogcommonimage.png",
    },
    {
      id: 3,
      title: "How to Crack CAT?",
      description: "Preparing for the CAT 2025 exam is a significant step to...",
      image: "/blogcommonimage.png",
    },
    // Duplicate entries for the grid
  ].concat([...Array(6)].map((_, i) => ({
    id: i + 4,
    title: ["Strategies for CAT 2025", "Ace the CAT Essential", "How to Crack CAT?"][i % 3],
    description: "Preparing for the CAT 2025 exam is a significant step to...",
    image: ["/blogcommonimage.png", "/blogcommonimage.png", "/blogcommonimage.png"][i % 3],
  })));

  return (
    <div className="w-full bg-[#1A1A1A] min-h-screen p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-white text-2xl font-semibold ">
        <span className='font-dmserif italic'>Recent</span>   <span className="text-[#FF5733]">Blogs</span>
        </h2>
      </div>

      {/* Search and Categories */}
      <div className="mb-8 space-y-4">
  <div className="flex flex-col md:flex-row gap-4 items-center">
    {/* Search Bar */}
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search Blogs"
        className="w-full bg-[#F55D3E1A] text-white rounded-md py-2 pl-4 pr-10"
      />
      <div className="absolute right-3 top-2.5">
        <SearchIcon />
      </div>
    </div>

    {/* Categories Dropdowns */}
    <div className="flex gap-4 w-full md:w-auto">
      <select className="w-full md:w-auto bg-[#F55D3E1A] text-white rounded-md py-2 px-4">
        <option>Categories</option>
      </select>
      <select className="w-full md:w-auto bg-[#F55D3E1A] text-white rounded-md py-2 px-4">
        <option>Categories</option>
      </select>
    </div>
  </div>

  {/* Tags */}
  <div className="flex flex-wrap gap-2 w-full">
    {[
      "Success Stories",
      "Exam Strategies",
      "Popular Articles",
      "Latest Updates & Notification",
      "Study Plans & Tips",
      "Entrance Exams"
    ].map((tag) => (
      <button
        key={tag}
        className="w-full md:w-auto bg-[#F55D3E1A] text-white px-4 py-2 rounded-md text-sm hover:bg-[#F55D3E33] transition-colors"
      >
        {tag}
      </button>
    ))}
  </div>
</div>



      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-[#2A2A2A] rounded-lg overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-white font-semibold text-lg mb-2">{blog.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{blog.description}</p>
              <button className="text-[#FF5733] text-sm flex items-center gap-2 hover:text-[#FF4522] transition-colors">
                Read More
                <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;