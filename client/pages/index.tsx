import { Aside } from "components/moleclues/Aside";
import { BlogList } from "components/organisms/BlogList";

export default function Home() {
  return (
    <main>
      <div className="Aside__Wrapper">
        <Aside />
      </div>
      <BlogList />
      <style jsx>{`
        .Aside__Wrapper {
          margin-top: 50px;
        }
      `}</style>
    </main>
  );
}
