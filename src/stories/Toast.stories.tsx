import { Meta } from "@storybook/react";
import { Toast, useToast } from "../components/Toast/Toast";
import useTheme from "../hooks/useTheme";
import { Button } from "../components/Button";
import { ThemeProvider } from "../provider/ThemeProvider";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast
};

export default meta;

export const Primary = {
  render: () => {
    const mode = useTheme();

    const { methods, context } = useToast();

    const info = () => {
      methods.info("Info!!!!!!!!!");
    };

    const warning = () => {
      methods.warning("我是短发舒服撒开了饭就睡啦开发!!!!!!!!!");
    };
    const success = () => {
      methods.success("Success!!!!!!!!!");
    };
    const danger = () => {
      methods.danger("Danger!!!!!!!!!");
    };

    return (
      <ThemeProvider value={{theme:mode}}>
        <div style={{ display: "flex", gap: "10px" }}>
          {context}
          <Button label="Info" size="medium" onClick={info} />
          <Button label="Warning" size="medium" onClick={warning} />
          <Button label="Success" size="medium" onClick={success} />
          <Button label="Danger" size="medium" onClick={danger} />
        </div>
      </ThemeProvider>
    );
  }
};