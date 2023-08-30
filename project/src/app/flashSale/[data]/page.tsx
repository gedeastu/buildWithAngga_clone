import React from "react";
// Fetch API:
type id = number;
type DataProps = {
  Params: string;
  Data: string;
};
async function getData(id: id) {
  const res = await fetch(`${process.env.LINK_DAILY_API}+/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  return res.json();
}
function Data({ params }: DataProps) {
  const id = parseInt(params);
  const data = await`` getData(params.id);
  return (
    <>
      <h1>{data.nameLink}</h1>
    </>
  );
}
export default Data;