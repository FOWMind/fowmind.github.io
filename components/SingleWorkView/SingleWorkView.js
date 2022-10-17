import { SingleWorkHeader, SingleWorkImages } from "./";

export function SingleWorkView({ requestedWork }) {
  return (
    <>
      <SingleWorkHeader requestedWork={requestedWork} />

      {requestedWork?.images && (
        <SingleWorkImages images={requestedWork.images} />
      )}
    </>
  );
}
