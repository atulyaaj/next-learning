interface Params {
  params: Promise<{ uid: string }>
}

export default async function UserWithIdComp({params}: Params) {
  const uid = (await params).uid;
  return (
    <div className="w-500 bg-red-600 text-rose-100 h-30">
      <h2>User {uid} Page</h2>
    </div>
  );
}
