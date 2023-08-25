import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Textarea,
  Select,
  Option,
} from "@material-tailwind/react";

function WorkspaceVideoEdit() {
  const [title, setTitle] = useState(null || "");

  return (
    <main className="flex flex-col-reverse lg:flex-row m-2 md:space-x-4">
      <section className="lg:basis-3/4 ">
        {" "}
        <Card className="w-full min-h-screen ">
          <CardBody className="space-y-5">
            <Typography
              variant="h3"
              color="blue-gray"
              className=" flex justify-between"
            >
              {title}
            </Typography>
            <Input
              onChange={(e) => setTitle(e.target.value)}
              color="blue"
              variant="standard"
              label="Video Title"
            />
            {/* <Typography variant="h4" color="blue-gray" className="mb-2">
              Description
            </Typography> */}
            <Textarea
              color="blue"
              variant="standard"
              label="Description"
              className="h-[30vh]"
            />
          </CardBody>
          <CardFooter className="pt-0"></CardFooter>
        </Card>
      </section>
      <section className="lg:basis-1/4 ">
        <Card className="w-full">
          <CardBody className="space-y-10">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Check your Video Here
            </Typography>

            <Typography>Video</Typography>
            <Select variant="standard" label="Video Upload Status" color="blue">
              <Option>Private</Option>
              <Option>Public</Option>
              <Option>Scheduled</Option>
            </Select>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}

export default WorkspaceVideoEdit;
