import Props from "@/props/page";

function Home() {
  return (
    <>
      {/* Provide a default value for name */}
      <Props name =''  rollNumber={0} city="Karachi" time={0} campus="Main"   />
    </>
  );
}

export default Home;

