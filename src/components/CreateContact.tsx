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

export function CreateContact({ handleOpenCreate, openCreate }: any) {
  const dispatch = useDispatch<AppDispatch>();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    status: false,
  });
  const handleChange = (e: any) => {
    console.log(e.target.id);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleCreate = (e: any) => {
    const newContact = {
      id: ~~(Math.random() * 10000000), // You might want to use a better way to generate IDs
      ...data,
    };
    dispatch(addContact(newContact));
    handleOpenCreate();
  };

  return (
    <>
      <Button onClick={handleOpenCreate}>Add Contact</Button>
      <Dialog open={openCreate} handler={handleOpenCreate}>
        <div className='flex items-center justify-between'>
          <DialogHeader>Create New Contact</DialogHeader>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='mr-3 h-5 w-5'
            onClick={handleOpenCreate}>
            <path
              fillRule='evenodd'
              d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <DialogBody divider>
          <div className='grid gap-6'>
            <Input
              label='First Name'
              name='firstName'
              onChange={handleChange}
              crossOrigin={false}
            />
            <Input
              label='Last Name'
              name='lastName'
              onChange={handleChange}
              crossOrigin={false}
            />
            <div className='flex flex-row items-center justify-start gap-2 p-2'>
              <label htmlFor='status'>Status</label>
              <select name='status' onChange={handleChange}>
                <option value='Inactive'>Inactive</option>
                <option value='Active'>Active</option>
              </select>
            </div>
          </div>
        </DialogBody>
        <DialogFooter className='space-x-2'>
          <Button variant='outlined' color='red' onClick={handleOpenCreate}>
            close
          </Button>
          <Button variant='gradient' color='green' onClick={handleCreate}>
            Create Contact
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
