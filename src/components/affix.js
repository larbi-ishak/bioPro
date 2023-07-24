import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import {  createStyles, Affix, Button, Transition, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  button: {
    backgroundImage: `linear-gradient(135deg, ${theme.colors.teal[9]} 0%, ${
      theme.colors.teal[4]
    } 100%)`,
  },
}))
export function Demo() {
  const [scroll, scrollTo] = useWindowScroll();
  const { classes } = useStyles();
  return (
    <>
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
            className={classes.button}
              leftIcon={<IconArrowUp size="1rem" />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}