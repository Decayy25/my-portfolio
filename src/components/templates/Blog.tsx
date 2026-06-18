import { Fragment } from "react";
import SectionHeader from "@/components/molecules/SectionHeader";
import BlogCard from "../molecules/BlogCard";

const Blog = () => {
  return (
    <Fragment>
      <section id="blogs" className="pt-34 pb-32 bg-slate-100">
        <div className="container">
          <SectionHeader
            label="Blog"
            title="Tulisan Terkini"
            description="Minat saya ingin menjadi full stack developer, dan gaya hidup saya ingin sederhana, saya sehari hari berhadapan dengan 2 monitor dan ditemani secangkir kopi"
          />

          <div className="flex flex-wrap">
            <BlogCard />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Blog;
