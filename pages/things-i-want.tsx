export default function ThingsIWant() {
  return (
    <>
      <style jsx>
        {`
          .Eightyvh {
            height: 80vh;
            width: 80vw;
          }
        `}
      </style>
      <div className="flex flex-col">
        these are some things I want
        <iframe
          className="Eightyvh"
          src="http://localhost:7321/board/b04219b5-a944-40fe-ae66-e6f4da1d964c"
        ></iframe>
      </div>
    </>
  );
}
