import { Aside } from "components/moleclues/Aside";
import { BlogList } from "components/organisms/BlogList";

export default function Home() {
  return (
    <main>
      <div className="Aside__Wrapper">
        <Aside />
      </div>
      <div className="List__Wrapper">
        <BlogList />
      </div>
      <style jsx>{`
        .Aside__Wrapper {
          margin-top: 50px;
        }
        .List__Wrapper {
          padding-top: 40px;
        }
      `}</style>
    </main>
  );
}
