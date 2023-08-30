import { Fragment } from "react"; // Importing the Fragment component from the React library
import ContactsComponent from "./Contacts"; // Importing the ContactsComponent from the "./Contacts" file

// Defining the Home component
const Home = () => {
  return (
    <Fragment>
      {" "}
      {/* Using the Fragment component to group elements without adding extra nodes to the DOM */}
      <ContactsComponent /> {/* Rendering the ContactsComponent */}
    </Fragment>
  );
};

export default Home; // Exporting the Home component as the default export
