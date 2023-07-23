import { TextInput, Textarea, SimpleGrid, Group, Title, Button, createStyles } from '@mantine/core';
import { useForm } from '@mantine/form';

export function GetInTouchSimple() {
const useStyles = createStyles((theme) => ({
  Button: {
    backgroundImage: `linear-gradient(135deg, ${theme.colors.teal[9]} 0%, ${
      theme.colors.teal[4]
    } 100%)`,
  },
}))

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  const { classes } = useStyles();
  return (
    <>
      <Title
        order={2}
        size="h1"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
        weight={900}
        align="center"
      >
        Get in touch
      </Title>

      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          variant="filled"
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Email"
          placeholder="Your email"
          name="email"
          variant="filled"
          {...form.getInputProps('email')}
        />
      </SimpleGrid>

      <TextInput
        label="Subject"
        placeholder="Subject"
        mt="md"
        name="subject"
        variant="filled"
        {...form.getInputProps('subject')}
      />
      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
        {...form.getInputProps('message')}
      />

<form action="https://formsubmit.co/larbishak2003@gmail.com" method="POST">
     <input type="hidden" name="name" value={form.values.name}  />
     <input type="hidden" name="message" value={form.values.message}  />
     <input type="hidden" name="email" value={form.values.email} />
     <input type="hidden" name="subject" value={form.values.subject} />

     <input type="hidden" name="_subject" value="New Message!" />
     <input type="hidden" name="_cc" value="ishak.larbi@inttic.dz" />
     <input type="hidden" name="_autoresponse" value="we got your message we will reply to you soon" />
     <input type="hidden" name="_template" value="table" />
      <Group position="center" mt="xl">
        <Button type="submit" size="md" className={classes.Button}>
     <button type="submit" style={{border: "none", backgroundColor: "transparent",textDecoration: "none", fontWeight: "bold", color: "white"}}>Send Message</button>
        </Button>
      </Group>
      </form>
      </>
  );
}