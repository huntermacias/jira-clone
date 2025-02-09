import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Button variant={'destructive'}>Click Me</Button>
    <Button variant={'default'}>Click Me</Button>
    <Button variant={'secondary'}>Click Me</Button>
    <Button variant={'ghost'}>Click Me</Button>
    <Button variant={'link'}>Click Me</Button>
    <Button variant={'outline'}>Click Me</Button>
   </div>
  );
}
