import Header from "@/components/layout/header/header";
import FeaturedBlogs from "@/components/sections/featuredBlogs/blogs";
import Banner from "@/components/sections/hero/hero";
import LatestBlogs from "@/components/sections/latestBlogs/latestBlogs";
import OurStory from "@/components/sections/ourStory/story";
import ReachOut from "@/components/sections/reachOut/reachOut";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Banner/>
    <FeaturedBlogs/>
    <OurStory/>
    <LatestBlogs/>
    <ReachOut/>
    </>
    
  );
}
