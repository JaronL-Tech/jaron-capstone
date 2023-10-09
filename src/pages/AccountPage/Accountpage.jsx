import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Survey from "../../components/Survey/Survey";
import { SurveyCreatorComponent } from "survey-creator-react";

const AccountPage = ({}) => {
  const { UserId } = useParams();
  const [user, token] = useAuth();
  const [Account, setAccount] = useState();
  return (
    <div>
      {Account ? (
        <div>
          {""}
          <Survey Survey={Survey} />
        </div>
      ) : null}
    </div>
  );
};
export default AccountPage;
