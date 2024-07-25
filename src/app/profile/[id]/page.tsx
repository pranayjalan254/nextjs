export default function userProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Profile</h1>
      <hr className="my-4 w-1/3" />
      <p>
        Profile page
        <span className="p-2">{params.id}</span>
      </p>
    </div>
  );
}
