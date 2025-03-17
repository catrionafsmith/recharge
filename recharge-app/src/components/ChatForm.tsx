import { useForm } from '@mantine/form';
import { TextInput, Button } from '@mantine/core';


export default function ChatForm() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      question: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
            label="Name"
            placeholder="Name"
            key={form.key('name')}
            {...form.getInputProps('name')}
            />
        <TextInput
            label="Name"
            placeholder="Question"
            key={form.key('question')}
            {...form.getInputProps('question')}
            /> 
        <Button type='submit'>Submit question</Button>
    </form>
  );
}
