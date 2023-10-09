import { SurveyCreatorWidget } from "../../components/Survey/Survey";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Survey from "../../components/Survey/Survey";

const AccountPage = ({}) => {
  const { UserId } = useParams();
  const [user, token] = useAuth();
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
