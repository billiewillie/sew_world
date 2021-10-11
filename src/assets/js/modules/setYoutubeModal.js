import { query } from "./queryFunctions";

const setYoutubeModal = (item, el) => {
  const url = item.dataset.video;
  const iframe = `<iframe
                src="https://www.youtube.com/embed/${url}"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>`;
  const modalContent = query(el);
  modalContent.insertAdjacentHTML("beforeend", iframe);
};

export default setYoutubeModal;
