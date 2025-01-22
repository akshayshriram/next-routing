export default function Docs({ params }) {
  console.log(params);

  if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing feature : {params.slug[0]} and concept : {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Viewing Feature : {params.slug[0]}</h1>;
  }
  return (
    <div>
      <h1>Docs Home page</h1>
    </div>
  );
}
