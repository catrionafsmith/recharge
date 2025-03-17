import { useForm } from '@mantine/form';
import { Text, TextInput, Button, Stack, Group } from '@mantine/core';
import axios from 'axios';
import { useState } from 'react';


export default function ChatForm() {

  const [apiResponse, setApiResponse] = useState<string>('');
  
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      question: '',
    },
  });

  console.log(form)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke', {});
      setApiResponse(response.data.setup);
    } catch (error) {
      console.error('Error fetching data: ', error);
      throw error;
    }
  };


  return (
    <>

    <Stack gap = {'md'}>
    <form onSubmit={handleSubmit}>
        <TextInput
            label="Name"
            placeholder="Name"
            key={form.key('name')}
            {...form.getInputProps('name')}
            />
        <TextInput
            label="Question"
            placeholder="Question"
            key={form.key('question')}
            {...form.getInputProps('question')}
            /> 
            <Group justify={'flex-end'} mt='md'>
              <Button type='submit'>Submit question</Button>
            </Group>
    </form>
    </Stack>
    <Text mt={'md'}>{apiResponse}</Text>
    </>
  );
}
