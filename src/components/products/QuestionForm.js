import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, Paper } from '@mui/material';

const ChatComponent = () => {
  const { register, handleSubmit, reset } = useForm();
  const [reply, setReply] = React.useState('');

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: `${data.message}` }],
          temperature: '0.7',
        },
        {
          headers: {
            Authorization: 'Bearer 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',
            'Content-Type': 'application/json',
          },
        }
      );

      const replyMessage = response.data.choices[0].message.content;
      setReply(replyMessage);
      reset(); // Reset input field after submission
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <Container maxWidth='lg' sx={{ mt: 4 ,width:800}} >
      <Paper elevation={4} sx={{ p: 2, borderRadius:3 }} maxWidth={700}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register('message', { required: true })}
            label="Write AI What are you feeling it will recomment good medicine for you "
            fullWidth
            variant="outlined"
            size="small"
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mb: 2 }}
          >
            Submit
          </Button>
        </form>
        {reply && (
          <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
            <p>{reply}</p>
          </Paper>
        )}
      </Paper>
    </Container>
  );
};

export default ChatComponent;
