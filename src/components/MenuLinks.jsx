import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function MenuLinks() {
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch(
    "https://run.mocky.io/v3/502d28ba-b486-48b3-a19c-372248c8bb46"
  );

  console.log(isPending, error);
  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <div className="menu-list">
        {quizzes &&
          quizzes.data.map((item) => {
            return (
              <Link
                key={item.title}
                to={`/quiz/${item.title}`}
                className="menu-item header-logo"
              >
                <figure style={{ backgroundColor: item.color }}>
                  <img src={item.icon} alt="" />
                </figure>
                <span>{item.title}</span>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default MenuLinks;
