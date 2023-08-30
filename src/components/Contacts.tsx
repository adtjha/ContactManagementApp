import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { deleteContact } from "../redux/contactsSlice";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { CreateContact } from "./CreateContact";
import { EditContact } from "./EditContact";

const ContactsComponent: React.FC = () => {
  // Fetch contacts from the Redux store using useSelector
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  // Get the dispatch function from useDispatch for triggering Redux actions
  const dispatch = useDispatch<AppDispatch>();

  // Function to handle contact deletion
  const handleDeleteContact = (id: number) => {
    // Dispatch the deleteContact action with the contact's ID
    dispatch(deleteContact(id));
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      {/* Component for creating new contacts */}
      <CreateContact />

      {/* Display list of contacts */}
      <ul className='flex flex-wrap items-center justify-center'>
        {contacts.map((contact) => (
          <Card className='m-4' key={contact.id}>
            <li>
              <CardBody>
                {/* Display contact's full name */}
                <Typography variant='h5' color='blue-gray' className='mb-2'>
                  {contact.firstName} {contact.lastName}
                </Typography>
                {/* Display contact's status */}
                <Typography>
                  {contact.status ? "Active" : "Inactive"}
                </Typography>
              </CardBody>
              <CardFooter className='space-x-4'>
                {/* Component for editing a contact */}
                <EditContact ContactId={contact.id} />
                {/* Button to delete the contact */}
                <Button onClick={() => handleDeleteContact(contact.id)}>
                  Delete
                </Button>
              </CardFooter>
            </li>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default ContactsComponent;
