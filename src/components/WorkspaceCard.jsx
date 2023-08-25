import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Switch,
} from "@material-tailwind/react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function WorkspacesCard() {
  return (
    <Card className="m-2">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Youtuber Name Workspace{" "}
        </Typography>
        <Typography>Description of the Workspace</Typography>
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
