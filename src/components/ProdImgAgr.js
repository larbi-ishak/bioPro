import Image from 'next/image';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { Button, createStyles, Title, Center } from '@mantine/core';


const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));


export default function AgrandirImg({image}) {
  const [opened, { open, close }] = useDisclosure(false);

  const styles={
    button: {
        padding: "18px",backgroundColor: "transparent", textDecoration: "none",color: "white", border: "none",
        fontWeight: "bold"
    },
    buttonWrapper: {
      margin: "5px",
      padding: 0
    },
    wrapper: {
      margin: "20px auto",
    }
  }
  const {classes} = useStyles();
  return (
    <>
            <Center  style={{padding: "10px", display: "block", paddingBottom: "0"}}>
            <Image src={image} height={250} width={300} alt="just iamge" style={{objectFit: "contain"}}/>
            </Center>

            <Modal opened={opened} onClose={close} withCloseButton={false}>
            <Image src={image} height={350} width={400} alt="just iamge" style={{objectFit: "contain"}}/>
            </Modal>

            <Button className={classes.button} onClick={open} >Agrandir</Button>
</>
  );
}


