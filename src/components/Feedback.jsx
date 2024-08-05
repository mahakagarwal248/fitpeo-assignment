const feedbackData = [
  {
    id: 1,
    name: "John Doe",
    rating: 4.5,
    comment: "Great product! Highly recommended.",
    imgUrl: "/assets/avatar.png",
  },
  {
    id: 2,
    name: "John Doe",
    rating: 4.5,
    comment: "Great product! Highly recommended.",
    imgUrl: "/assets/avatar.png",
  },
  {
    id: 3,
    name: "John Doe",
    rating: 5.5,
    comment: "Great product! Highly recommended.",
    imgUrl: "/assets/avatar.png",
  },
  {
    id: 4,
    name: "John Doe",
    rating: 4.5,
    comment: "Great product! Highly recommended.",
    imgUrl: "/assets/avatar.png",
  },
  {
    id: 5,
    name: "John Doe",
    rating: 4.5,
    comment: "Great product! Highly recommended.",
    imgUrl: "/assets/avatar.png",
  },
  {
    id: 6,
    name: "John Doe",
    rating: 4.5,
    comment: "Great product! Highly recommended.",
    imgUrl: "/assets/avatar.png",
  },
];
function Feedback() {
  return (
    <div className="bg-blackColorLight rounded-lg h-68 p-3 sm:ml-6 sm:mt-4 w-full sm:w-1/3 h-96">
      <p className="text-lg font-bold mb-3">Customer's Feedbacks</p>
      <div className="h-[320px] overflow-auto custom-scrollbar">
        {feedbackData.map((item) => (
          <div className="py-3 border-b-2 border-b-blackColorLighter">
            <div className="flex flex-row">
              <img src={item?.imgUrl} alt="avatar" className="w-9 h-9 mr-2" />
              <p>{item?.name}</p>
            </div>
            <p>{item?.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feedback;
