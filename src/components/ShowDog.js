import { useState } from "react";
import Resource from "./Resource";
import Header from "./Header";
import DogData from "./DogData";

const ShowDog = () => {
  // states
  const [refresh, setRefresh] = useState();
  const [page, setPage] = useState(1);

  // page buttons
  const prevClick = () => {
    setRefresh(!refresh);
    setPage(page - 1);
  };

  const nextClick = () => {
    setRefresh(!refresh);
    setPage(page + 1);
  };

  // create array for each image
  const webURL = ["https://dog.ceo/api/breeds/image/random"];
  const arrayID = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // render data
  const render = (data) => {
    if (data.loading === true) return <p>loading ...</p>;

    console.log("Got the data", data);

    return (
      <div>
        <img src={data.trans.message} alt="image" className="image"></img>
      </div>
    );
  };

  const dogData = (data) => {
    if (data.loading === true) {
      return <p>Loading...</p>;
    }

    return (
      <div className="dogContainer">
        <h1 className="dogText">
          <DogData />
        </h1>
      </div>
    );
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <Header title="Pets for Adoption" />
      <p style={{ color: "brown", textAlign: "center", marginBottom: 30 }}>
        Click on a pet photo to view its information
      </p>
      <div className="showlist">
        {arrayID.map((id) => (
          <div key={id}>
            <Resource
              path={`${webURL}?v${id}`}
              render={render}
              refresh={refresh}
              dogData={dogData}
            />
          </div>
        ))}
      </div>
      <div className="pageBtn">
        <button onClick={prevClick} disabled={page === 1}>
          Prev
        </button>
        <p>Page {page}/3</p>
        <button onClick={nextClick} disabled={page === 3}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ShowDog;
