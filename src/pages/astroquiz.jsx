import Head from "next/head";
import Quiz from "@/components/Quiz";

export default function Astroquiz({data}){
    return(<>
        <Head>
        <title>Cb-7 Final Project gruppo-B</title>
        <meta name="description" content="Cb-7 Final Project gruppo-B" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://img.freepik.com/free-vector/astronaut-holding-flag-space-cartoon-icon-illustration-technology-space-icon-isolated-flat-cartoon-style_138676-3099.jpg?w=2000"
        />
      </Head>

        <div>
          <Quiz data={data}/>
        </div>
        
        </>
    )
}

   
   
export async function getServerSideProps() {
  // https://api.npoint.io/3f1369f30e5911d71f1b
  // + /n/id
  
  const res = await fetch(`https://api.npoint.io/92fd30e95786d9a41d9a`)
  const data = res.status === 200 ? await res.json() : {};
 
  return { props: { data } }
}
 
