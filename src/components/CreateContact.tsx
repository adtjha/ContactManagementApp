import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { addContact } from "../redux/contactsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

export function CreateContact() {
  const dispatch = useDispatch<AppDispatch>();

  // State to manage dialog open/close
  const [openCreate, setOpenCreate] = useState(false);
  const handleOpenCreate = () => setOpenCreate(!openCreate);

  // State to manage form data
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    status: false,
  });

  // Update data state when form inputs change
  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Create a new contact and dispatch the action
  const handleCreate = (e: any) => {
    const newContact = {
      id: ~~(Math.random() * 10000000),
      ...data,
    };
    dispatch(addContact(newContact));
    handleOpenCreate(); // Close the dialog after creating contact
  };

  return (
    <>
      {/* Button to open the dialog */}
      <Button className='m-auto w-auto' onClick={handleOpenCreate}>
        Add Contact
      </Button>

      {/* Dialog for creating a new contact */}
      <Dialog open={openCreate} handler={handleOpenCreate}>
        <div className='flex items-center justify-between'>
          {/* Dialog header */}
          <DialogHeader>Create New Contact</DialogHeader>
          {/* Close button */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='mr-3 h-5 w-5'
            onClick={handleOpenCreate}>
            {/* Close icon */}
            <path
              fillRule='evenodd'
              d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
              clipRule='evenodd'
            />
          </svg>
        </div>

        {/* Dialog body */}
        <DialogBody divider>
          <div className='grid gap-6'>
            {/* First Name input */}
            <Input
              label='First Name'
              name='firstName'
              onChange={handleChange}
              crossOrigin={false}
            />
            {/* Last Name input */}
            <Input
              label='Last Name'
              name='lastName'
              onChange={handleChange}
              crossOrigin={false}
            />
            {/* Status select */}
            <div className='flex flex-row items-center justify-start gap-2 p-2'>
              <label htmlFor='status'>Status</label>
              <select name='status' onChange={handleChange}>
                <option value='Inactive'>Inactive</option>
                <option value='Active'>Active</option>
              </select>
            </div>
          </div>
        </DialogBody>

        {/* Dialog footer */}
        <DialogFooter className='space-x-2'>
          {/* Close button */}
          <Button variant='outlined' color='red' onClick={handleOpenCreate}>
            close
          </Button>
          {/* Create Contact button */}
          <Button variant='gradient' color='green' onClick={handleCreate}>
            Create Contact
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
