import { Fragment, useEffect, useState } from "react";
import Heading from "@/components/atoms/Heading";
import Image from "next/image";
import Hyperlink from "@/components/atoms/Hyperlink";
import Text from "@/components/atoms/Text";
import { IBlogItem } from '@/@types/Ui';

const Blogs = [
  {
    id: 1,
    image: "programming",
    h3: "Full Stack Developer",
    href: "https://www.google.com/search?q=Full%20Stack%20developer",
    text: "Saya memiliki minat yang cukup untuk menjadi full stack developer, dari awal penasaran sekarang mau menjadikan sebuah perkerjaan",
  },
  {
    id: 2,
    image: "ROG",
    h3: "Republic Of Gamers",
    href: "https://www.google.com/search?q=ROG",
    text: "Saya juga punya mimpi seperti membeli komputer atau laptop dengan brand Republic Of Gamers",
  },
  {
    id: 3,
    image: "coffee",
    h3: "Menikmati Secangkir Kopi",
    href: "https://www.google.com/search?q=coffe",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse soluta ipsam perferendis?",
  },
];


const BlogCard = () => {
  const [blogs, setBlogs] = useState<IBlogItem[]>([]);

  useEffect(() => {
    (async () => {
      const result = await Promise.all(
        Blogs.map(async (blog) => {
          try {
            const res = await fetch(
              `/api/blogs-image?query=${encodeURIComponent(blog.image)}`,
            );
            const data = await res.json();

            return {
              ...blog,
              imageUrl: data.imageUrl || null,
            };
          } catch (error) {
            console.error(
              "Gagal mengambil gambar dari API internal:",
              error,
            );
            return { ...blog, imageUrl: null };
          }
        }),
      );

      setBlogs(result);
    }) ();


  }, []);

  return (
    <Fragment>
      {blogs.map((items) => (
        <div className="w-full px-4 lg:w-1/2 xl:w-1/3" key={items.id}>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-1">
            {items.imageUrl ? (
              <Image
                src={items.imageUrl}
                alt={items.h3}
                width={400}
                height={300}
                className="w-full h-70 object-cover"
                unoptimized
              />
            ) : (
              <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
                No image available
              </div>
            )}
            <div className="py-8 px-6">
              <Heading level="h3">
                <Hyperlink
                  href={items.href}
                  className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                >
                  {items.h3}
                </Hyperlink>
              </Heading>
              <Text className="font-medium text-secondary text-base mb-6">
                {items.text}
              </Text>
              <Hyperlink
                href={items.href}
                className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80 transition duration-300"
              >
                Baca Selengkapnya
              </Hyperlink>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default BlogCard;
