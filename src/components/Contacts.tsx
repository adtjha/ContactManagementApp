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
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteContact = (id: number) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <CreateContact />
      <ul className='flex flex-wrap items-center justify-center'>
        {contacts.map((contact) => (
          <Card className='m-4' key={contact.id}>
            <li>
              <CardBody>
                <Typography variant='h5' color='blue-gray' className='mb-2'>
                  {contact.firstName} {contact.lastName}
                </Typography>
                <Typography>
                  {contact.status ? "Active" : "Inactive"}
                </Typography>
              </CardBody>
              <CardFooter className='space-x-4'>
                <EditContact ContactId={contact.id} />
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
