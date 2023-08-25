import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import React from "react";

function YoutuberReview() {
  return (
    <main className="flex flex-col-reverse lg:flex-row m-2 md:space-x-4">
      <section className="lg:basis-3/4 ">
        <Card className="w-full min-h-screen ">
          <Card className="p-4 m-4">
            <video className="h-full w-full rounded-lg" controls>
              <source src="/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Card>

          <CardBody className="space-y-5">
            <Typography variant="h1" color="blue-gray" className=" flex ">
              <h1 className="basis-3/4">Title of Video with long title</h1>
              <Select
                variant="standard"
                label="Video Upload Status"
                color="blue"
                className="basis-1/4"
              >
                <Option>Private</Option>
                <Option>Public</Option>
                <Option>Scheduled</Option>
              </Select>
            </Typography>

            {/* <Typography variant="h4" color="blue-gray" className="mb-2">
              Description
            </Typography> */}
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium consequuntur corporis delectus doloremque dolorum eos
              expedita facere fugiat, fugit harum impedit ipsam iusto laudantium
              maiores maxime minima molestiae natus nihil, nobis nulla odit
              officia pariatur quasi quidem quo repellendus repudiandae saepe
              sequi similique soluta tempora tenetur, tempore totam ullam unde
              ut voluptatum.
            </Typography>
            <Typography>#Tags,#Tags,#Tags,#Tags,#Tags,#Tags,#Tags</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button color="blue">Save </Button>
            <Button variant="outlined">Cancel</Button>
          </CardFooter>
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

export default YoutuberReview;
