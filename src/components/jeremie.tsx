import {User, Link} from "@heroui/react";
import jeremiePNG from "../../public/imgs/jeremie.png"

export function Jeremie() {
  return (
    <User
      avatarProps={{
        src: jeremiePNG,
      }}
      description={
        <Link isExternal href="https://jeremie.roberrini.com/" size="sm">
          jeremie.roberrini.com
        </Link>
      }
      name="Jeremie Roberrini"
    />
  );
}