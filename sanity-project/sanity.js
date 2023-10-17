import { createClient } from "next-sanity";

export const client = createClient({
   projectId:"rrcaicm6",
   dataset:"production",
   useCdn:true,
   apiVersion:"2023-10-17"
})