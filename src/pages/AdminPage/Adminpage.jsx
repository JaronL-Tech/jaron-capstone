import React from "react";
import Linechart from "../../components/ListChart/Listchart";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import useAuth from "../../hooks/useAuth";

const AdminPage = ({}) => {
  const { user, token } = useAuth();
  const [Data, setData] = useState([]);

  const FetchAdminData = async () => {
    try {
      let response = await axios.get("https://dummyjson.com/users", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.warn("Error with data request", error);
    }
  };
};
return (
  <div>
    {AdminPage ? (
      <div>
        {""}
        <listchat listchart={listchart} />
      </div>
    ) : null}
  </div>
);
