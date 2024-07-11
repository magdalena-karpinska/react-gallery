import { createFileRoute } from "@tanstack/react-router";
import { getImageById } from "../services/getImages";

export const Route = createFileRoute("/$id")({
  component: () => <Image />,
  loader: async ({ params }) => await getImageById(params.id),
});

const Image = () => {
  const image = Route.useLoaderData();

  return (
    <>
      <div className="image__container">
        <img src={image?.urls.small} alt="unsplash image" />
        <p>{image?.alt_description}</p>
      </div>
    </>
  );
};
