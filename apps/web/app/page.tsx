
import {client} from "@repo/db/client"

export default async  function Home() {

  const user= await client.user.findFirst();
 

  return <div>
      <div>
      FirstUser : {user?.username}
       </div>
       <div>
      password : {user?.password}
      </div>
  </div>
}
