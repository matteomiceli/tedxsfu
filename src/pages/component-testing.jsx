import React from "react";
import Button from "../components/Button";

//@ts-check
const ComponentTesting = () => {
  return (
    <div style={{ marginTop: "25vh" }} className="ml-12">
      <h1 className="text-display mb-24">Components</h1>

      <div className="grid gap-4 gap-y-12 grid-cols-4">
        <h2 className="text-4xl col-span-full">Buttons</h2>

        <div className="flex flex-col">
          <div className="mb-4">CTA button</div>
          <div>
            <Button cta>Testing</Button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-4">Primary Button</div>
          <div>
            <Button primary>Testing</Button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-4">Secondary button</div>
          <div>
            <Button secondary>Testing</Button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-4">Tertiary button</div>
          <div>
            <Button tertiary>Testing</Button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-4">Inline Text button</div>
          <div>
            <Button href="https://google.com" blank>
              Visit Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentTesting;
