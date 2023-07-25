import Link from 'next/link';
import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  rem,
} from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react';
import { ContactIconsList } from './contactIcons';
import { useForm } from '@mantine/form';

const useStyles = createStyles((theme) => ({
  Button: {
    backgroundImage: `linear-gradient(135deg, ${theme.colors.teal[9]} 0%, ${
      theme.colors.teal[4]
    } 100%)`
  },
  wrapper: {
    minHeight: 400,
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(-60deg, ${theme.colors.teal[4]} 0%, ${
      theme.colors.teal[9]
    } 100%)`,
    borderRadius: theme.radius.md,
    padding: `calc(${theme.spacing.xl} * 2.5)`,

    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: rem(300),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    '&:hover': {
      color: theme.colors.teal[8]
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    '&::placeholder': {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors.teal[5],
'&:hover': {
      backgroundColor: theme.colors.teal[8]
    },
  },
}));

const social = [{Icon: IconBrandFacebook, url: "/"}, {Icon: IconBrandInstagram, url: "/"}, {Icon: IconBrandYoutube, url: "/"}];

export function GetInTouchSimple() {
  const { classes } = useStyles();

  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
      <Link href={Icon.url} style={{textDecoration: "none", color: "white"}}>
        <Icon.Icon size="1.4rem" stroke={1.5} />
      </Link>
    </ActionIcon>

  ));
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

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <div>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>

          <ContactIconsList variant="white" />

          <Group mt="xl">{icons}</Group>
        </div>
        <div className={classes.form}>
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
        </div>
      </SimpleGrid>
    </div>
  );
}