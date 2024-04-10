import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

const GiveReviews = ({ doctor, onSubmit }) => {
  const [submittedMessage, setSubmittedMessage] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && review && rating > 0) {
      setShowWarning(false);

      onSubmit({ doctor, name, review, rating });
      setSubmittedMessage({ rating: rating, review: review });

      //setName('');
      //setReview('');
      //setRating(0);
    } else {
      setShowWarning(true);
    }
  };

  const StarRating = () => {
    return (
      <div>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= rating ? "text-yellow-600" : "off"}
              onClick={() => setRating(index)}
            >
              <span>
                <FaStar width={"25px"} />
              </span>
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <form onSubmit={handleSubmit} name="GiveReview" className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            <IoMdClose />
          </button>
        </form>
        <h2 className="text-center text-xl font-semibold m-4">
          Give Your Feedback
        </h2>
        {showWarning && (
          <div role="alert" className="alert alert-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>Please fill out all fields!</span>
          </div>
        )}
        <div className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Review:</span>
          </div>

          <textarea
            id="review"
            name="review"
            value={review}
            className=" textarea textarea-bordered"
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Rating:</span>
          </div>

          <StarRating />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          {submittedMessage !== null ? "Update" : "Submit"}
        </button>
      </form>

      {submittedMessage && (
        <div style={{ marginTop: "10px" }}>
          <h3>Submitted Message:</h3>
          <p>Rating: {submittedMessage.rating}</p>
          <p>{submittedMessage.review}</p>
        </div>
      )}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default GiveReviews;
