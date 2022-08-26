import { useRouter } from "next/router";

const Name = () => {
  const router = useRouter();
  //console.log(router.query.name);
  const { name } = router.query;
  return <div>Welcome {name}</div>;
};
export default Name;
