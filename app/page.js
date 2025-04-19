import PlusButton from "@/components/PlusButton";
import Post from "@/components/Post";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="mt-20">
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
      <PlusButton></PlusButton>
    </div>
  );
}
