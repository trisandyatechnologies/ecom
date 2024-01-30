import Profile from "@/components/EditProfile";
import { Flex } from "antd";
import Link from "next/link";

export default async function Account() {
  return (
    <main>
      <Flex vertical>
        <Link href="/account/userDetails">user Details</Link>
        <Link href="/account/edit">Edit Details</Link>
      </Flex>
    </main>
  );
}
