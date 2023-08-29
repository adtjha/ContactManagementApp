import { Button } from "@material-tailwind/react";
import { Fragment } from "react";
import ContactsComponent from "./Contacts";

const Home = () => {
  const contacts = [];
  return (
    <Fragment>
      <ContactsComponent />
    </Fragment>
  );
};

export default Home;
