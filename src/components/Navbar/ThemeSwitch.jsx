import React from "react";
import { Button, Chip, useMantineColorScheme } from "@mantine/core";
import IconLight from "../../images/light-mode.svg";
import IconDark from "../../images/dark-mode.svg";

const ThemeSwitch = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Button
      checked={false}
      variant="default"
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <img src={IconLight} alt="" /> : <img src={IconDark} alt="" />}
    </Button>
  );
};

export default ThemeSwitch;
