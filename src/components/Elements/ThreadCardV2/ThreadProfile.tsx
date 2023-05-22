interface Username {
  id_user: string;
  imgLink: string;
  createdAt: string;
}

export default function ThreadUsername({
  id_user,
  imgLink,
  createdAt,
}: Username) {
  return (
    <div className="flex">
      <a className="inline-block mr-4" href="#">
        <img className="rounded-full max-w-none w-12 h-12" src={imgLink} />
      </a>
      <div className="flex flex-col">
        <div className="flex items-center">
          <a className="inline-block text-lg font-bold mr-2 -mb-1" href="#">
            {id_user}
          </a>
        </div>
        <div className="text-slate-500">{createdAt}</div>
      </div>
    </div>
  );
}
