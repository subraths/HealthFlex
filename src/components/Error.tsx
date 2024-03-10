export default function Error({
  statusCode,
  message,
  title,
}: {
  statusCode: number;
  message: string;
  title: string;
}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Error status : {statusCode}</p>
      <p>Error message : {message}</p>
    </div>
  );
}
