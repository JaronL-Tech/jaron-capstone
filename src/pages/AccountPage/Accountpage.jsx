import { SurveyCreatorWidget } from "../../components/Survey/Survey";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const AccountPage = ({}) => {
  const { UserId } = useParams();
  const [user, token] = useAuth();
  return <div></div>;
};

export default AccountPage;
