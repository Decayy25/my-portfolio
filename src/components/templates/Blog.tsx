import { Fragment } from "react";
import SectionHeader from "@/components/molecules/SectionHeader";
import BlogCard from "../molecules/BlogCard";

const Blog = () => {
  return (
    <Fragment>
      <section id="blog" className="pt-34 pb-32 bg-slate-100">
        <div className="container">
          <SectionHeader
            label="Blog"
            title="Project Terbaru"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex a accusamus eaque cumque. Excepturi, voluptates."
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
