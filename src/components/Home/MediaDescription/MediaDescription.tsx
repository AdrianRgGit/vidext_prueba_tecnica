import CustomAvatar from "@/components/CustomElements/CustomAvatar";

const MediaDescription = () => {
  return (
    <section className="col-span-2 bg-yellow-500 px-4 py-2">
      <article className="flex items-center gap-x-2">
        <CustomAvatar />  
        <div>
          <p>Usuario</p>
          <small>1231321 seguidores</small>
        </div>
      </article>

      <article className="">
        <h3 className="font-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est debitis,
          recusandae, quae expedita dicta adipisci
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ab?
          Molestias, magnam, rem nisi velit doloremque hic temporibus accusamus
          repellat, non voluptate quod reiciendis illo quis earum quo vel.
          Tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          explicabo numquam officiis dolor commodi. Molestiae accusamus fugit
          velit ipsa commodi similique quae dolore, ipsum possimus corrupti
          voluptatum assumenda tempore ipsam.
        </p>
      </article>
    </section>
  );
};

export default MediaDescription;
