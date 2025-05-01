import React, { useContext, useEffect, useState } from "react";
import BlogList from "../components/BlogList";
import CategoryTabs from "../components/CategoryTabs";
import { Authcontext } from "../context/UserContext";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import ScrollUpDown from "../components/ScrollUpDown";
import { baseURL } from "../config";
import { BsSearch } from "react-icons/bs";
import Advertisement from "../components/Advertise";

const Home = () => {
  // const [categorySearchData,setCategorySearchData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchbtnClick, setSearchbtnClick] = useState(false);
  const { allPosts, setAllPosts } = useContext(Authcontext);
  const [loading, setLoading] = useState(false);

  // const baseURL = 'http://localhost:3001'
  useEffect(() => {
    console.log("home render");
    const fetchAllPosts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${baseURL}/post/getAllPosts?category=${activeCategory}&search=${searchQuery}`
        );

        if (res.status === 200) {
          console.log(res.data.data);
          setAllPosts(res.data.data);
          setLoading(false);
        }
      } catch (error) {
        console.log("Error while fetchig all posts", error);
        toast.error("Error while fetchig all posts");
        setLoading(false);
      }
    };
    fetchAllPosts();

    return () => {
      setLoading(false);
    };
  }, [activeCategory, searchbtnClick]);

  return (
    <>
      <div>
        <CategoryTabs
          setActiveCategory={setActiveCategory}
          setSearchQuery={setSearchQuery}
          setSearchbtnClick={setSearchbtnClick}
          searchbtnClick={searchbtnClick}
          activeCategory={activeCategory}
        />
        {loading ? (
          <div className="flex flex-row justify-center items-center w-full min-h-[70vh] h-full">
            <div className="loading">
              <div></div>
            </div>
          </div>
        ) : !loading && allPosts && allPosts.length == 0 ? (
          <div className="mx-auto max-w-7xl w-full px-6 lg:px-8 mt-6 h-full">
            <div className="mx-auto max-w-7xl lg:mx-0 border-2 min-h-[18rem] flex flx-row justify-center items-center mt-6 bg-[#3B49DF1A] ">
              <h2 className="text-xl">
                <BsSearch size={30} className="inline mr-3 circular-movement" />
                🥺 No <span className="pt-4">results match that query</span>
              </h2>
            </div>
          </div>
        ) : (
          <>
          <div className="flex justify-centetr gap-x-6 mx-auto w-full max-w-7xl">
          <BlogList />
          <Advertisement/>
          </div>
          </>
        )}
      </div>
      <Toaster />
      <ScrollUpDown />
    </>
  );
};

export default Home;
