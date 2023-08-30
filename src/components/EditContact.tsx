import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { updateContact } from "../redux/contactsSlice";

// Define the Contact interface
interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: boolean;
}

// EditContact component
export function EditContact({ ContactId }: any) {
  // Redux state and dispatcher
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const oldContact = contacts.filter((e: any) => e.id === Number(ContactId));
  console.log(oldContact[0]);
  const dispatch = useDispatch<AppDispatch>();

  // Local state for form data
  const [data, setData] = useState<Contact>({
    ...oldContact[0],
  });

  // Handle form input changes
  const handleChange = (e: any) => {
    if (e.target.name === "status") {
      setData({ ...data, [e.target.name]: Boolean(Number(e.target.value)) });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  // Local state for dialog open/close
  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = () => setOpenEdit(!openEdit);

  // Handle contact update
  const editContact = (e: any) => {
    dispatch(updateContact({ ...data }));
    handleOpenEdit();
  };

  // Render the component
  return (
    <>
      <Button onClick={handleOpenEdit}>Edit</Button>
      <Dialog open={openEdit} handler={handleOpenEdit}>
        <div className='flex items-center justify-between'>
          <DialogHeader>Edit Contact</DialogHeader>
          {/* Close icon */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='mr-3 h-5 w-5'
            onClick={handleOpenEdit}>
            <path
              fillRule='evenodd'
              d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <DialogBody divider>
          <div className='grid gap-6'>
            {/* Input fields */}
            <Input
              label='First Name'
              name='firstName'
              value={data.firstName}
              onChange={handleChange}
              crossOrigin={data.firstName.toString()}
            />
            <Input
              label='Last Name'
              name='lastName'
              value={data.lastName}
              onChange={handleChange}
              crossOrigin={data.lastName.toString()}
            />
            {/* Status dropdown */}
            <div className='flex flex-row items-center justify-start gap-2 p-2'>
              <label htmlFor='status'>Status</label>
              <select
                name='status'
                value={data.status ? "1" : "0"}
                onChange={handleChange}>
                <option value='0'>Inactive</option>
                <option value='1'>Active</option>
              </select>
            </div>
          </div>
        </DialogBody>
        <DialogFooter className='space-x-2'>
          {/* Close button */}
          <Button variant='outlined' color='red' onClick={handleOpenEdit}>
            close
          </Button>
          {/* Update button */}
          <Button variant='gradient' color='green' onClick={editContact}>
            Update Contact
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
