import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Avatar
} from "@material-tailwind/react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function WorkspacesCard() {
  return (
    <Card className="m-2">
      <CardBody className='flex flex-col items-start space-y-2'>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Youtuber Name Workspace{" "}
        </Typography>
        <Typography>Description of the Workspace</Typography>
        <div className='items-center -space-x-4'>
          <Avatar
              variant="circular"
              alt="user 1"
              className="border-2 border-white hover:z-10 focus:z-10"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <Avatar
              variant="circular"
              alt="user 2"
              className="border-2 border-white hover:z-10 focus:z-10"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
          />
          <Avatar
              variant="circular"
              alt="user 3"
              className="border-2 border-white hover:z-10 focus:z-10"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
          />
          <Avatar
              variant="circular"
              alt="user 4"
              className="border-2 border-white hover:z-10 focus:z-10"
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
          />
          <Avatar
              variant="circular"
              alt="user 5"
              className="border-2 border-white hover:z-10 focus:z-10"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
          />

        </div>
        <Typography>You and 4 others work together on this Workspace</Typography>
      </CardBody>
      <CardFooter className="flex items-center gap-x-2 pt-0">
        <a href="#" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Manage workspace? <AiOutlineArrowRight className="w-4 h-4" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
